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


export default function SignupPage() {
  return (
    <AuthSplitLayout image={media.authWorkers} imageAlt="Repair professionals standing together">
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="auth-title">Get Started Now</h1>
        <p className="auth-subtitle">
          Enter your Credentials to access your account
        </p>
        <form className="auth-form">
          <TextField id="signup-name" label="Name" placeholder="Enter your name" />
          <TextField id="signup-email" label="Email address" placeholder="Enter your email" />
          <TextField id="signup-role" label="Role" placeholder="freelancer" />
          <TextField id="signup-password" label="Password" placeholder="Name" type="password" />

          <div className="auth-or-divider">
            <div className="auth-or-line" />
            <span>Or</span>
            <div className="auth-or-line" />
          </div>

          <CheckboxField
            id="terms"
            label="I agree to the"
            linkLabel="terms & policy"
          />

          <p className="auth-footer">
            Have an account?{" "}
            <Link href="/login" className="auth-link">
              Sign In
            </Link>
          </p>

          <Button type="submit" variant="dark" fullWidth className="auth-button">
            Signup
          </Button>
        </form>

        <div className="auth-social-grid">
          <SocialAuthButton provider="google">Sign in with Google</SocialAuthButton>
          <SocialAuthButton provider="apple">Sign in with Apple</SocialAuthButton>
        </div>
      </motion.div>
    </AuthSplitLayout>
  );
}