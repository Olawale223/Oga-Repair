import { Apple } from "lucide-react";
import Button from "@/components/ui/Button";
import GoogleIcon from "@/components/ui/GoogleIcon";

export default function SocialAuthButton({ provider, children }) {
  const icon =
    provider === "google" ? (
      <GoogleIcon />
    ) : (
      <Apple className="social-auth-apple-icon" strokeWidth={2.4} />
    );

  return (
    <Button type="button" variant="ghost" size="md" className="social-auth-button" fullWidth>
      <span className="social-auth-icon-wrapper">{icon}</span>
      <span>{children}</span>
    </Button>
  );
}