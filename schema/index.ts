import { z } from "zod";

export const getNameSchema = () =>
    z.string()
        .min(1, "Name is required")
        .max(50, "Name must be less than 50 characters")

export const getEmailSchema = () =>
    z.email()

export const getpasswordSchema = () =>
    z.string()
        .min(8, "must be atleast 8 characters")
        .max(32, "can not exceed 32 characters");

