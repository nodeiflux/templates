/* TODO: This is a candidate for extraction to a separate module */
import { z, ZodError } from 'zod'
import { BadRequest } from '@curveball/http-errors'

import type { Context } from '@curveball/core'

type CompatibleZodType =
  Pick<z.ZodType<unknown>, '_input' | '_output' | 'parse' | 'parseAsync'>

type CompatibleZodInfer<T extends CompatibleZodType> = T['_output']

export function validate <T extends CompatibleZodType> (validator: T): (ctx: Context) => Promise<CompatibleZodInfer<T>> {
  return async (ctx: Context) => {
    try {
      return await validator.parseAsync(ctx.request.body)
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        throw new BadRequest(JSON.stringify(error.flatten()))
      }
      throw error
    }
  }
}

/* For developer friendliness */
export { z } from 'zod'
