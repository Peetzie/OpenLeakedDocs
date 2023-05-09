import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/OpenLeakedDocs/blog',
    component: ComponentCreator('/OpenLeakedDocs/blog', '02a'),
    exact: true
  },
  {
    path: '/OpenLeakedDocs/blog/archive',
    component: ComponentCreator('/OpenLeakedDocs/blog/archive', 'e1f'),
    exact: true
  },
  {
    path: '/OpenLeakedDocs/blog/first-blog-post',
    component: ComponentCreator('/OpenLeakedDocs/blog/first-blog-post', '65f'),
    exact: true
  },
  {
    path: '/OpenLeakedDocs/blog/long-blog-post',
    component: ComponentCreator('/OpenLeakedDocs/blog/long-blog-post', 'ebc'),
    exact: true
  },
  {
    path: '/OpenLeakedDocs/blog/mdx-blog-post',
    component: ComponentCreator('/OpenLeakedDocs/blog/mdx-blog-post', '407'),
    exact: true
  },
  {
    path: '/OpenLeakedDocs/blog/tags',
    component: ComponentCreator('/OpenLeakedDocs/blog/tags', '01e'),
    exact: true
  },
  {
    path: '/OpenLeakedDocs/blog/tags/docusaurus',
    component: ComponentCreator('/OpenLeakedDocs/blog/tags/docusaurus', '2f8'),
    exact: true
  },
  {
    path: '/OpenLeakedDocs/blog/tags/facebook',
    component: ComponentCreator('/OpenLeakedDocs/blog/tags/facebook', '7eb'),
    exact: true
  },
  {
    path: '/OpenLeakedDocs/blog/tags/hello',
    component: ComponentCreator('/OpenLeakedDocs/blog/tags/hello', '06a'),
    exact: true
  },
  {
    path: '/OpenLeakedDocs/blog/tags/hola',
    component: ComponentCreator('/OpenLeakedDocs/blog/tags/hola', '4d2'),
    exact: true
  },
  {
    path: '/OpenLeakedDocs/blog/welcome',
    component: ComponentCreator('/OpenLeakedDocs/blog/welcome', 'c24'),
    exact: true
  },
  {
    path: '/OpenLeakedDocs/docs/tags',
    component: ComponentCreator('/OpenLeakedDocs/docs/tags', '694'),
    exact: true
  },
  {
    path: '/OpenLeakedDocs/docs/tags/test',
    component: ComponentCreator('/OpenLeakedDocs/docs/tags/test', 'fa9'),
    exact: true
  },
  {
    path: '/OpenLeakedDocs/markdown-page',
    component: ComponentCreator('/OpenLeakedDocs/markdown-page', '9c0'),
    exact: true
  },
  {
    path: '/OpenLeakedDocs/docs',
    component: ComponentCreator('/OpenLeakedDocs/docs', '835'),
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
        path: '/OpenLeakedDocs/docs/API/retrieves-the-id-of-an-email',
        component: ComponentCreator('/OpenLeakedDocs/docs/API/retrieves-the-id-of-an-email', 'c0f'),
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
        path: '/OpenLeakedDocs/docs/category/petstore-api',
        component: ComponentCreator('/OpenLeakedDocs/docs/category/petstore-api', 'a75'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/category/tutorial---basics',
        component: ComponentCreator('/OpenLeakedDocs/docs/category/tutorial---basics', '439'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/category/tutorial---extras',
        component: ComponentCreator('/OpenLeakedDocs/docs/category/tutorial---extras', '95e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/intro',
        component: ComponentCreator('/OpenLeakedDocs/docs/intro', '90d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/add-pet',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/add-pet', '7f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/create-user',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/create-user', '017'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/create-users-with-array-input',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/create-users-with-array-input', '384'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/create-users-with-list-input',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/create-users-with-list-input', '744'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/delete-order',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/delete-order', '50e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/delete-pet',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/delete-pet', '23c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/delete-user',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/delete-user', '728'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/find-pets-by-status',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/find-pets-by-status', 'f77'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/find-pets-by-tags',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/find-pets-by-tags', '0df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/get-inventory',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/get-inventory', '389'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/get-order-by-id',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/get-order-by-id', '9bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/get-pet-by-id',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/get-pet-by-id', '1f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/get-user-by-name',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/get-user-by-name', 'ea1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/login-user',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/login-user', '103'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/logout-user',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/logout-user', 'ee8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/new-pet',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/new-pet', '0f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/pet',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/pet', 'f93'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/place-order',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/place-order', 'fd8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/store',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/store', 'b9b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/subscribe-to-the-store-events',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/subscribe-to-the-store-events', 'bf3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/swagger-petstore-yaml',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/swagger-petstore-yaml', 'de1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/update-pet',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/update-pet', 'a2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/update-pet-with-form',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/update-pet-with-form', '53f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/update-user',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/update-user', '3cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/upload-file',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/upload-file', 'dcd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/petstore/user',
        component: ComponentCreator('/OpenLeakedDocs/docs/petstore/user', '092'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/OpenLeakedDocs/docs/tutorial-basics/congratulations', 'e36'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/OpenLeakedDocs/docs/tutorial-basics/create-a-blog-post', '473'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/OpenLeakedDocs/docs/tutorial-basics/create-a-document', '1b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/OpenLeakedDocs/docs/tutorial-basics/create-a-page', 'b24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/OpenLeakedDocs/docs/tutorial-basics/deploy-your-site', '29a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/OpenLeakedDocs/docs/tutorial-basics/markdown-features', 'dd2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/OpenLeakedDocs/docs/tutorial-extras/manage-docs-versions', '456'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OpenLeakedDocs/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/OpenLeakedDocs/docs/tutorial-extras/translate-your-site', '080'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/OpenLeakedDocs/',
    component: ComponentCreator('/OpenLeakedDocs/', '612'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
