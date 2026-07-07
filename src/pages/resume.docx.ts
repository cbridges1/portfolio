import type { APIRoute } from "astro";
import { getEntry } from "astro:content";
import {
  Document,
  ExternalHyperlink,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from "docx";

const ACCENT = "4B5563";
const MUTED = "6B7280";

export const GET: APIRoute = async () => {
  const resumeEntry = await getEntry("resume", "resume");

  if (!resumeEntry) {
    throw new Error("Missing resume content entry: src/content/resume/resume.md");
  }

  const { basics, experience, projects, education, skills } = resumeEntry.data;

  const contactRuns: (TextRun | ExternalHyperlink)[] = [
    new TextRun(basics.location),
    new TextRun("    " + basics.phone),
    new TextRun("    "),
    new ExternalHyperlink({
      link: `mailto:${basics.email}`,
      children: [new TextRun({ text: basics.email, style: "Hyperlink" })],
    }),
  ];
  for (const link of basics.links) {
    contactRuns.push(new TextRun("    "));
    contactRuns.push(
      new ExternalHyperlink({
        link: link.href,
        children: [new TextRun({ text: link.label, style: "Hyperlink" })],
      }),
    );
  }

  const sectionHeading = (text: string) =>
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 300, after: 120 },
      border: { bottom: { color: "D1D5DB", space: 4, style: "single", size: 4 } },
      children: [new TextRun({ text: text.toUpperCase(), color: ACCENT, bold: true })],
    });

  const entryHeading = (title: string, dates?: string, location?: string) =>
    new Paragraph({
      spacing: { before: 160, after: 40 },
      tabStops: dates ? [{ type: "right", position: 9350 }] : undefined,
      children: [
        new TextRun({ text: title, bold: true }),
        ...(location ? [new TextRun({ text: `, ${location}`, color: MUTED })] : []),
        ...(dates ? [new TextRun({ text: `\t${dates}`, color: MUTED, size: 20 })] : []),
      ],
    });

  const bulletParagraph = (text: string) =>
    new Paragraph({
      bullet: { level: 0 },
      spacing: { after: 40 },
      children: [new TextRun(text)],
    });

  const children: Paragraph[] = [
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      spacing: { after: 40 },
      children: [new TextRun({ text: basics.name, bold: true })],
    }),
    new Paragraph({
      spacing: { after: 120 },
      children: [new TextRun({ text: basics.title, color: MUTED })],
    }),
    new Paragraph({ spacing: { after: 200 }, children: contactRuns }),

    sectionHeading("Experience"),
    ...experience.flatMap((job) => [
      entryHeading(`${job.role} — ${job.company}`, `${job.startDate} — ${job.endDate}`, job.location),
      ...job.bullets.map(bulletParagraph),
    ]),

    sectionHeading("Projects"),
    ...projects.flatMap((project) => [
      new Paragraph({
        spacing: { before: 160, after: 40 },
        children: project.href
          ? [
              new ExternalHyperlink({
                link: project.href,
                children: [new TextRun({ text: project.name, bold: true, style: "Hyperlink" })],
              }),
            ]
          : [new TextRun({ text: project.name, bold: true })],
      }),
      ...project.bullets.map(bulletParagraph),
    ]),

    sectionHeading("Education"),
    ...education.flatMap((school) => [
      entryHeading(school.school, `${school.startDate} — ${school.endDate}`, school.location),
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({
            text: school.honors ? `${school.degree} · ${school.honors}` : school.degree,
            color: MUTED,
          }),
        ],
      }),
    ]),

    sectionHeading("Skills"),
    ...skills.map(
      (group) =>
        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({ text: `${group.category}:  `, bold: true }),
            new TextRun({ text: group.items.join(" · "), color: MUTED }),
          ],
        }),
    ),
  ];

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: { font: "Calibri", size: 22 },
        },
      },
    },
    sections: [
      {
        properties: {
          page: { margin: { top: 720, bottom: 720, left: 720, right: 720 } },
        },
        children,
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);

  return new Response(buffer, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Content-Disposition": 'attachment; filename="Cedric-Bridges-Resume.docx"',
    },
  });
};
