import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karthikraj Subramanian — Data & AI Professional",
  description:
    "Marketing science, machine learning, and customer intelligence. Building systems that turn customer data into business decisions.",
  keywords: [
    "Data Scientist",
    "Marketing Science",
    "Machine Learning",
    "Customer Intelligence",
    "Analytics Engineer",
    "LLM",
    "Toronto",
  ],
  openGraph: {
    title: "Karthikraj Subramanian — Data & AI Professional",
    description:
      "Marketing science, machine learning, and customer intelligence. Building systems that turn customer data into business decisions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
