export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60aeb1a968c45d009e522ac0',
                  title: 'Sanity Studio',
                  name: 'ashtiany-fit-website-studio',
                  apiId: '5399f677-42ee-4be4-a062-f090638e6075'
                },
                {
                  buildHookId: '60aeb1a948821100a696ffe5',
                  title: 'Landing pages Website',
                  name: 'ashtiany-fit-website',
                  apiId: '7566bdfd-24eb-48a1-97c2-2c1d8bf3333c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Alexfit4/Ashtiany-Fit-Website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://ashtiany-fit-website.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
