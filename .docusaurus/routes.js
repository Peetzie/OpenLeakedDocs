import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/OpenLeakedDocs/markdown-page',
    component: ComponentCreator('/OpenLeakedDocs/markdown-page', '63a'),
    exact: true
  },
  {
    path: '/OpenLeakedDocs/docs',
    component: ComponentCreator('/OpenLeakedDocs/docs', '8d3'),
    routes: [
      {
        path: '/OpenLeakedDocs/docs/API/allows-a-user-to-tip-the-maintainers-with-additional-breaches',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/allows-a-user-to-tip-the-maintainers-with-additional-breaches', '40c'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/authorisations',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/authorisations', '4fd'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/authorise-an-existing-user',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/authorise-an-existing-user', '35c'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/checks-that-the-service-is-currently-running',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/checks-that-the-service-is-currently-running', '331'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/create-a-new-password',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/create-a-new-password', '968'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/email',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/email', '378'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/ends-current-the-current',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/ends-current-the-current', 'e40'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/finds-associated-breaches',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/finds-associated-breaches', 'dda'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/healthcheck',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/healthcheck', 'c01'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/initiate-recovery-process',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/initiate-recovery-process', '1bc'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/open-leaked-yaml',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/open-leaked-yaml', '764'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/password',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/password', '9a1'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/simple-lookup-in-the-database',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/simple-lookup-in-the-database', '529'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/subscribe',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/subscribe', '030'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/subscribe',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/subscribe', '33c'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/tip',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/tip', 'c86'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/unsubscribe',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/unsubscribe', '15a'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/username',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/username', '562'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/verification-of-the-temporary-6-digit-code',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/verification-of-the-temporary-6-digit-code', '743'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/API/verify-user',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/verify-user', '96f'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/category/api-documentation',
        component: ComponentCreator('/OpenLeakedDocs/docs/category/api-documentation', 'ad1'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/Database/BloomFilter',
        component: ComponentCreator('/OpenLeakedDocs/docs/Database/BloomFilter', 'ec7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/Database/Cache',
        component: ComponentCreator('/OpenLeakedDocs/docs/Database/Cache', '999'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/Database/Introduction',
        component: ComponentCreator('/OpenLeakedDocs/docs/Database/Introduction', '3c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/Database/MariaDB',
        component: ComponentCreator('/OpenLeakedDocs/docs/Database/MariaDB', 'f36'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/Docker',
        component: ComponentCreator('/OpenLeakedDocs/docs/Docker', '588'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/intro',
        component: ComponentCreator('/OpenLeakedDocs/docs/intro', '279'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/OpenLeakedDocs/',
    component: ComponentCreator('/OpenLeakedDocs/', 'e8d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
