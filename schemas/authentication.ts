import { z } from "zod"
import { getEmailSchema, getNameSchema, getpasswordSchema } from "./index"

export const signUpSchema = z.object({
    name: getNameSchema(),
    email: getEmailSchema(),
    password: getpasswordSchema(),
});

export const signInSchema = z.object({
    email: getEmailSchema(),
    password: getpasswordSchema(),
})