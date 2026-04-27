import { Apple } from "lucide-react";
import Button from "@/components/ui/Button";
import GoogleIcon from "@/components/ui/GoogleIcon";

export default function SocialAuthButton({ provider, children }) {
  const icon =
    provider === "google" ? (
      <GoogleIcon />
    ) : (
      <Apple className="h-5 w-5 text-black" strokeWidth={2.4} />
    );

  return (
    <Button
      type="button"
      variant="ghost"
      size="md"
      className="min-h-[52px] rounded-sm border border-line bg-surface px-5 text-ink hover:bg-page"
      fullWidth
    >
      <span className="mr-3 flex h-5 w-5 items-center justify-center">{icon}</span>
      <span>{children}</span>
    </Button>
  );
}
