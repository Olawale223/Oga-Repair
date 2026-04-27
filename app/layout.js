import { Poppins } from "next/font/google";
import Providers from "@/components/layout/Providers";
import "@/styles/globals.css";
import { designTokens } from "@/styles/theme.mjs";

const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap"
});

const cssVariables = `
  :root {
    --color-ink: ${designTokens.colors.ink};
    --color-accent: ${designTokens.colors.accent};
    --color-page: ${designTokens.colors.page};
    --color-surface: ${designTokens.colors.surface};
    --color-muted: ${designTokens.colors.muted};
  }
`;

export const metadata = {
  title: "Oga Repair",
  description:
    "Trusted handyman services at your fingertips. Repair bookings, service discovery, and job listings built from the provided design system."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className="min-h-screen bg-page text-ink">
        <style suppressHydrationWarning>{cssVariables}</style>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
