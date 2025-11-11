import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site-config";
import Header from "@/components/header";

export const metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}og-image.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} OG Image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: "@yourhandle", // optional
    images: [`${SITE_URL}og-image.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1 container mx-auto py-8">{children}</main>
        {/* <Footer /> – you can add a footer later */}
      </body>
    </html>
  );
}
