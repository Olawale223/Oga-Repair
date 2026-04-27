"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AuthSplitLayout from "@/components/layout/AuthSplitLayout";
import Button from "@/components/ui/Button";
import CheckboxField from "@/components/ui/CheckboxField";
import SocialAuthButton from "@/components/ui/SocialAuthButton";
import TextField from "@/components/ui/TextField";
import { media } from "@/data/media";
import "./pages.css"


export default function LoginPage() {
  return (
    <AuthSplitLayout image={media.authWorkers} imageAlt="Repair professionals standing together">
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="auth-title">Welcome back!</h1>
        <p className="auth-subtitle">
          Enter your Credentials to access your account
        </p>
        <form className="auth-form">
          <TextField id="login-email" label="Email address" placeholder="Enter your email" />
          <TextField
            id="login-password"
            label="Password"
            hint={<Link href="#" className="text-ink">forgot password</Link>}
            placeholder="Name"
            type="password"
          />
          <CheckboxField id="remember-30-days" label="Remember for 30 days" />
          <Button type="submit" variant="dark" fullWidth className="auth-button">
            Login
          </Button>
        </form>

        <div className="auth-social-grid">
          <SocialAuthButton provider="google">Sign in with Google</SocialAuthButton>
          <SocialAuthButton provider="apple">Sign in with Apple</SocialAuthButton>
        </div>

        <p className="auth-footer">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="auth-link">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </AuthSplitLayout>
  );
}