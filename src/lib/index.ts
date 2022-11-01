import { scaffold } from "./degit"

export async function createNodeiflux (template: string, destination: string) {
  const output = scaffold(template, destination)

  return output
}
