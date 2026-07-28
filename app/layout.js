import "./globals.css";

export const metadata = {
  title: "KATSEYE — Creative Experience",
  description: "A visual, animated fan-made creative experience inspired by KATSEYE."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
