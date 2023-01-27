import { load } from 'ts-dotenv'

export const env = load({
  PORT: {
    type: Number,
    default: 8000
  }
})
