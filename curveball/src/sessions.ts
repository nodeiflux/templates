import session from '@curveball/session'

import type { Middleware } from '@curveball/core'
import type { SessionOptions, SessionStore } from '@curveball/session/cjs/types'

export function useSessionStore (store: SessionStore, options: SessionOptions): Middleware {
  const defaults: SessionOptions = {
    store
  }

  return session(Object.assign(defaults, options))
}

/*
  TODO: Implement session store with mongoose
type SessionValues = Awaited<ReturnType<SessionStore['get']>>

export class MongooseStore implements SessionStore {
  private readonly store = new Map<string, SessionValues>()

  constructor (private readonly model: whatever) {}
  async get (id: string): Promise<SessionValues | null> {
    return this.store.get(id) ?? null
  }

  async set (id: string, values: SessionValues, expire: number) {
    return this.store.set(id, values)
  }
} */

export { MemoryStore } from '@curveball/session'
