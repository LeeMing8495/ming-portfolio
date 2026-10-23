import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lee Ming | Software Engineer',
  description: 'Portfolio of Lee Ming — full-stack software engineering, Android applications, and AI agents.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
