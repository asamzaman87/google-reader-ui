import { ThemeProvider } from "@/components/themes/landing-page/theme-provider";

export default async function LandingPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
