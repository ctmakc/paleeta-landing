import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Training: Build a Healthier Lifestyle for Your Family | Paleeta Bhola",
  description:
    "Exhausted Mom? Join Paleeta Bhola's FREE training and learn how to build a healthier lifestyle for your family — without crazy diets, complicated workouts, or doing it alone.",
  openGraph: {
    title: "Exhausted Mom? Build a Healthier Lifestyle for Your Family",
    description:
      "Free training by Paleeta Bhola. No crazy diets. No complicated workouts. No doing it alone.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#0a0a0a" }}>{children}</body>
    </html>
  );
}
