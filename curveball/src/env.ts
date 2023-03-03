import { load } from 'ts-dotenv'

export const env = load({
  PORT: {
    type: Number,
    default: 8000
  },
  NODE_ENV: {
    type: [
      'development' as const,
      'test' as const,
      'production' as const
    ],
    default: 'development'
  },
  MONGO_URI: {
    optional: true,
    type: String
  }
})
