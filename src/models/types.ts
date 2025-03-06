import z from 'zod'
import type {
  SignInPayloadSchema,
  SignUpPayloadSchema,
  DepartmentSchema
} from '@/models/schemas.ts'
import {UserRoleSchema} from '@/models/schemas.ts';

// USERS
export type SignInPayload = z.infer<typeof SignInPayloadSchema>

export type SignUpPayload = z.infer<typeof SignUpPayloadSchema>

export type Department = z.infer<typeof DepartmentSchema>

export type UserRole = z.infer<typeof UserRoleSchema>

// APP
export type AuthenticationType = 'signin' | 'signup'

export type BaseError = { message: string; type: 'Form' | 'Auth' | 'Database' | 'Network'}

export type FormError = BaseError & { type: 'Form', key: string }

export type AuthError = BaseError & { type: 'Auth', code: string }

export type DatabaseError = BaseError & { type: 'Database', code: string }