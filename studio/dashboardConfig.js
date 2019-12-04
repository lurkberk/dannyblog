export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5de7fa553f6e0d3f5b8279df',
                  title: 'Sanity Studio',
                  name: 'dannyblog-studio',
                  apiId: 'c2ca64af-b35d-41f1-9499-da75ed06fb9c'
                },
                {
                  buildHookId: '5de7fa55c1b88502088f8e6d',
                  title: 'Blog Website',
                  name: 'dannyblog',
                  apiId: '519d847a-dbed-40a7-89be-7deb79d1a8d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lurkberk/dannyblog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dannyblog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
