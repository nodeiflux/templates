import { validate, z } from '../validation'

export const create = validate(z.object({
  name: z.string().min(3),
  password: z.string().min(8)
}))
