"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createAuthClient } from "better-auth/client";

export default function AuthPage() {
  const authClient = createAuthClient();

  const signInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Blurred background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-white/20 shadow-xl">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Continue with an account
            </CardTitle>
            <CardDescription className="text-gray-600">
              You must log in or register to continue.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              onClick={() => signInWithGoogle()}
              className="w-full bg-white/50 border-gray-200 hover:bg-white/70 text-gray-700"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
                <path
                  fill="#4285F4"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.61 30.47 0 24 0 14.64 0 6.57 5.37 2.54 13.22l7.98 6.19C12.2 13.33 17.68 9.5 24 9.5z"
                />
                <path
                  fill="#34A853"
                  d="M46.1 24.55c0-1.57-.14-3.08-.4-4.55H24v9h12.4c-.53 2.85-2.14 5.26-4.54 6.89l7.04 5.47c4.13-3.81 6.5-9.42 6.5-16.81z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.52 28.59c-1.04-3.04-1.04-6.35 0-9.39l-7.98-6.19C.92 16.46 0 20.08 0 24c0 3.92.92 7.54 2.54 10.99l7.98-6.4z"
                />
                <path
                  fill="#EA4335"
                  d="M24 48c6.47 0 11.9-2.13 15.87-5.79l-7.04-5.47c-2.01 1.35-4.59 2.14-8.83 2.14-6.32 0-11.8-3.83-13.48-9.5l-7.98 6.4C6.57 42.63 14.64 48 24 48z"
                />
              </svg>
              Continue with Google
            </Button>

            <Link href="/auth/login" className="block">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Login with Email
              </Button>
            </Link>
            <div className="text-center text-sm">
              <span className="text-gray-500">New User? </span>
              <Link
                href="/auth/register"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Create New Account
              </Link>
            </div>
            <div className="text-center text-xs text-gray-500 mt-4">
              By continuing, you agree to our{" "}
              <Link href="/privacy" className="underline hover:text-gray-700">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="underline hover:text-gray-700">
                T&Cs
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
