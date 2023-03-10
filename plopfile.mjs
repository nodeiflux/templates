export default function (/** @type { import('plop').NodePlopAPI } */ plop) {
  plop.setGenerator('template', {
    description: 'blank template',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'template name'
    }],
    actions: [{
      type: 'addMany',
      destination: '{{name}}',
      base: '.templates/blank-template/',
      templateFiles: ['.templates/blank-template/**.*']
    }]
  })
}
