import './globals.css';
import './tw-animate.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'URG-IS — Contextual intelligence, woven from relationships',
  description: 'URG-IS is a conceptual framework for relationship-awareness and contextual understanding across evolving environments.',
  authors: [{ name: 'URG-IS' }],
  openGraph: {
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

