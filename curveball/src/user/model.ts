import mongoose, { Schema, model, HydratedDocument } from 'mongoose'
import { hash, verify } from 'argon2'

import type { Model } from 'mongoose'
import type { IUser } from './user'

interface IUserMethods {
  verifyPassword: (password: string) => Promise<boolean>
}

type UserModel = Model<IUser, {}, IUserMethods>
export type UserDocument = HydratedDocument<IUser, IUserMethods>

const schema = new Schema<IUser, UserModel, IUserMethods>({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

schema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await hash(this.password)
  }
})

function sanitise (this: Partial<IUser> & Omit<IUser, 'password'>): Omit<IUser, 'password'> {
  delete this.password
  return this
}

schema.method('toJSON', sanitise)
schema.method('toObject', sanitise)

schema.method('verifyPassword', async function verifyPassword (this: HydratedDocument<IUser>, password: string) {
  return await verify(this.password, password)
})

export const User = model<IUser, UserModel>('User', schema)
