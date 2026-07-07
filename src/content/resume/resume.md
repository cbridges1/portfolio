---
basics:
  name: Cedric Bridges
  title: Full-stack engineer bridging legacy enterprise systems and modern cloud infrastructure.
  email: cedric.bridges3@gmail.com
  phone: (256) 613-2531
  location: Hoover, AL 35244
  links:
    - label: cbridges1.github.io/portfolio
      href: https://cbridges1.github.io/portfolio
    - label: github.com/cbridges1
      href: https://github.com/cbridges1
summary: Full-stack engineer bridging legacy enterprise systems and modern cloud infrastructure.
experience:
  - company: Guidewire
    role: Platform Engineer
    startDate: May 2023
    endDate: Present
    bullets:
      - Maintain the backend endpoint service for a custom settings service and built its UI.
      - Build custom developer tools for platform users.
      - Use Crossplane and KubeVela to implement custom Kubernetes components for developers.
  - company: Blue Cross and Blue Shield of Alabama
    role: Senior Systems Analyst / Programmer
    location: Hoover, AL
    startDate: Feb 2016
    endDate: May 2023
    bullets:
      - Built and maintained a JSP, HTML, and CSS web application giving business users self-service access to backend systems for testing future-dated claims.
      - Supported electronic data interchange with custom COBOL and JCL solutions on the mainframe.
projects:
  - name: Hyve — GitOps CLI for Kubernetes cluster lifecycle management
    href: https://github.com/cbridges1/hyve
    bullets:
      - "Go CLI that manages Kubernetes clusters end-to-end from a Git state repository: create/scale/delete against any cloud, then drift-detect and reconcile in-cluster resources on every cycle."
      - "Pluggable module system lets any provider (Civo, AWS EKS, GCP GKE, Azure AKS shipped as first-party examples) be scripted as a versioned package, content-addressed and locked in a manifest — no cloud SDKs embedded in the core."
      - Terraform-style declarative resource layer — raw manifests and Helm releases are drift-checked against both desired config and live cluster state, and re-applied automatically.
      - Lifecycle-hook workflow engine (pre/post-create, pre/post-delete) for imperative automation — secrets, DNS, bootstrap steps — that doesn't fit a pure-declarative model, with remote, content-addressed workflow references.
      - Ships a guided terminal UI and drives real clusters through GitHub Actions CI/CD; full Go test suite alongside the reconcile engine.
  - name: Acsys — CMS for Firestore, MySQL & SQLite
    href: https://github.com/acsysio/acsys
    bullets:
      - Open-source content management system built with React and Express for updating content on small websites.
  - name: ESXi Homelab — self-hosted VM & container infrastructure
    bullets:
      - Maintain a home server running multiple VMs, including a Linux host that serves containerized Docker applications via Portainer and Docker Compose.
      - Nextcloud runs behind an NGINX reverse proxy, reachable outside the internal network through a custom domain.
      - Dynamic DNS is handled by a ddclient instance on the application VM.
      - All data is mirrored to a separate drive via rsync on a periodic cron job.
  - name: Event Finder — cross-platform event discovery app
    bullets:
      - Built with React Native; backend APIs hosted on GCP Cloud Run.
      - Cloud SQL (MySQL) queries nearby events by coordinates; Firestore serves as the primary database.
      - Integrated the HERE.com place provider as a lower-cost alternative to Google Places at expected usage volumes.
education:
  - school: Jacksonville State University
    location: Jacksonville, AL
    degree: Computer Information Systems — Minor in Business Administration
    honors: Magna Cum Laude
    startDate: Aug 2011
    endDate: Dec 2015
skills:
  - category: Languages
    items:
      - Go
      - Java
      - JavaScript
      - COBOL
      - SQL
      - HTML
      - CSS
      - C++ (some)
  - category: Frameworks
    items:
      - Node.js
      - Next.js
      - React
      - React Native
  - category: Databases
    items:
      - MySQL
      - PostgreSQL
      - DB2
      - Oracle (some)
  - category: Cloud
    items:
      - GCP Compute Engine
      - App Engine
      - Cloud Storage
      - Cloud Run
      - Cloud Build
      - Firebase
  - category: Platform / Infra
    items:
      - Kubernetes
      - Crossplane
      - KubeVela
  - category: Mainframe
    items:
      - ISPF
      - TSO
      - JCL
  - category: Tools
    items:
      - Docker
      - Git
      - Maven
      - VS Code
      - Eclipse
      - Postman
      - Passport
      - Topaz
      - VMware ESXi
---
