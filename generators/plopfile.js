module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Application Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/components/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.tsx',
        templateFile: 'templates/components/styles.ts.hbs'
      }
      // {
      //   type: 'add',
      //   path: '../src/components/{{pascalCase name}}/test.tsx',
      //   templateFile: 'templates/test.tsx.hbs'
      // }
    ]
  });

  plop.setGenerator('page', {
    description: 'Application Page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{kebabCase name}}/index.tsx',
        templateFile: 'templates/pages/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/pages/{{kebabCase name}}/styles.tsx',
        templateFile: 'templates/pages/styles.ts.hbs'
      }
    ]
  });
};
