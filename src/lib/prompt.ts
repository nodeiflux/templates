import { prompt } from 'enquirer'

type TemplateResponse = {
  template: string
}
export async function template (templates: string[]) {
  const response = await prompt<TemplateResponse>({
    type: 'autocomplete',
    message: 'Select (or type) a template',
    name: 'template',
    choices: templates
  })

  return response.template
}
