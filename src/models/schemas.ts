import z from 'zod'

export const SignInPayloadSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export const DepartmentSchema = z.enum(['BSIT', 'BIT', 'BSHM', 'BSSED', 'BSEED', 'Others']);

export const UserRoleSchema = z.enum(['Research Officer', 'Chairperson', 'Faculty', 'Student', 'Others'])

export const SignUpPayloadSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  department: DepartmentSchema,
  role: UserRoleSchema,
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

