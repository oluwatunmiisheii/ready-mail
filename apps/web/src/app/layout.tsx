import "@ready-mail/ui/globals.css";
import "./global.css";
import { Header } from "./components/layout/header";
import { sora, inter } from "./font";
import { Footer } from "./components/layout/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
