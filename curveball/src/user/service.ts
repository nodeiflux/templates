import { BadRequest, NotFound } from '@curveball/http-errors'
import { isValidObjectId, ObjectId } from 'mongoose'

import { User } from './model'

import type { IUser } from './user'
import type { UserDocument } from './model'

const DuplicateKeyError = 11000

function isErrorCode(code: string | number, error: unknown): boolean {
  if (error === null || typeof error !== 'object') return false
  return 'code' in error && error.code === code
}

export async function create (name: string, password: string): Promise<string> {
  try {
    const user = await User.create({ name, password })
    return user._id.toString()
  } catch (error: unknown) {
    if (isErrorCode(DuplicateKeyError, error)) {
      throw new BadRequest('Username is already in use')
    }
    throw error
  }
}

export async function getAll (): Promise<IUser[]> {
  const users = await User.find({}).orFail(
    new NotFound('No users were found')
  )

  return users
}

export async function getOne (id: ObjectId | string): Promise<UserDocument> {
  if (!isValidObjectId(id)) throw new BadRequest('Invalid id')

  const user = await User.findById(id).orFail(
    new NotFound(`${String(id)} was not found`)
  )

  return user
}

export async function verifyPassword (id: ObjectId | string, password: string): Promise<boolean> {
  const user = await getOne(id)

  return await user.verifyPassword(password)
}
