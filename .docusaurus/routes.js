import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '466'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd88'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '822'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fde'),
            exact: true
          },
          {
            path: '/docs/tags/ad-mob',
            component: ComponentCreator('/docs/tags/ad-mob', 'c85'),
            exact: true
          },
          {
            path: '/docs/tags/android',
            component: ComponentCreator('/docs/tags/android', 'bf4'),
            exact: true
          },
          {
            path: '/docs/tags/cli',
            component: ComponentCreator('/docs/tags/cli', 'ad4'),
            exact: true
          },
          {
            path: '/docs/tags/cms',
            component: ComponentCreator('/docs/tags/cms', 'e60'),
            exact: true
          },
          {
            path: '/docs/tags/dev-ops',
            component: ComponentCreator('/docs/tags/dev-ops', '3a2'),
            exact: true
          },
          {
            path: '/docs/tags/docker',
            component: ComponentCreator('/docs/tags/docker', 'e09'),
            exact: true
          },
          {
            path: '/docs/tags/go',
            component: ComponentCreator('/docs/tags/go', '328'),
            exact: true
          },
          {
            path: '/docs/tags/infrastructure',
            component: ComponentCreator('/docs/tags/infrastructure', 'c83'),
            exact: true
          },
          {
            path: '/docs/tags/java',
            component: ComponentCreator('/docs/tags/java', '494'),
            exact: true
          },
          {
            path: '/docs/tags/java-script',
            component: ComponentCreator('/docs/tags/java-script', 'ef1'),
            exact: true
          },
          {
            path: '/docs/tags/node-js',
            component: ComponentCreator('/docs/tags/node-js', '057'),
            exact: true
          },
          {
            path: '/docs/tags/open-source',
            component: ComponentCreator('/docs/tags/open-source', '227'),
            exact: true
          },
          {
            path: '/docs/tags/portfolio',
            component: ComponentCreator('/docs/tags/portfolio', '5ea'),
            exact: true
          },
          {
            path: '/docs/tags/react',
            component: ComponentCreator('/docs/tags/react', '70f'),
            exact: true
          },
          {
            path: '/docs/tags/react-native',
            component: ComponentCreator('/docs/tags/react-native', '709'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'eb3'),
            routes: [
              {
                path: '/docs/about',
                component: ComponentCreator('/docs/about', '941'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/projects',
                component: ComponentCreator('/docs/category/projects', '4ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects/acsys',
                component: ComponentCreator('/docs/projects/acsys', '689'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects/hyve',
                component: ComponentCreator('/docs/projects/hyve', '01e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects/portainer-cli',
                component: ComponentCreator('/docs/projects/portainer-cli', '8b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/projects/react-native-admob',
                component: ComponentCreator('/docs/projects/react-native-admob', '634'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/skills',
                component: ComponentCreator('/docs/skills', 'a36'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
