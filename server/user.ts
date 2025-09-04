"use server";
import { auth } from "@/lib/auth"

const signIn = async () => {
    await auth.api.signInEmail({
        body: {
            email: "user@email.com",
            password: "password",
        }
    })
}

const signUp = async () => {
    await auth.api.signUpEmail({
        body: {
            name: "",
            email: "user@email.com",
            password: "password",
        }
    })
}