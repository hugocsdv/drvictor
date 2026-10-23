import { SignaturesProvider } from "@/providers/SignaturesProvider";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <SignaturesProvider>
      {children}
    </SignaturesProvider>
  );
}