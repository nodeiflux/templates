interface Greeting {
  message: string
}

export async function greet (): Promise<Greeting> {
  return {
    message: 'Hello world'
  }
}
