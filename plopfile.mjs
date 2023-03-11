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
      destination: '{{ dashCase name }}',
      base: '.templates/blank-template/',
      templateFiles: [
        '.templates/blank-template/**.*',
        '.templates/blank-template/.*'
      ]
    }]
  })
}
