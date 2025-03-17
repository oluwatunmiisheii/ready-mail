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
			<body className="flex flex-col min-h-screen overflow-x-hidden">
				<Header />
				<main className="flex-grow pt-16">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
