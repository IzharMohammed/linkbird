import { NextRequest, NextResponse } from "next/server";
import { type Session } from "./lib/auth";
import { betterFetch } from "@better-fetch/fetch";

// Only auth pages are public
const authRoutes = ["/auth", "/auth/login", "/auth/register"];

export default async function authMiddleware(request: NextRequest) {
    const pathName = request.nextUrl.pathname;
    const isAuthRoute = authRoutes.includes(pathName);

    try {
        // Fetch session from BetterAuth
        const { data: session } = await betterFetch<Session>(
            "/api/auth/get-session",
            {
                baseURL: process.env.BETTER_AUTH_URL,
                headers: {
                    cookie: request.headers.get("cookie") || "",
                },
            },
        );

        // If already logged in & trying to access auth pages → redirect to dashboard
        if (session?.user && isAuthRoute) {
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }

        // If not logged in & not on auth page → redirect to login
        if (!session?.user && !isAuthRoute) {
            return NextResponse.redirect(new URL("/auth", request.url));
        }

        return NextResponse.next();
    } catch (error) {
        console.error("Middleware error", error);
        return NextResponse.redirect(new URL("/auth", request.url));
    }
}

// Exclude API, static, images, etc.
export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)).*)",
    ],
};
