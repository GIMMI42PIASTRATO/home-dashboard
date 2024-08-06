import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			appearance={{
				elements: {
					footer: "hidden",
				},
				baseTheme: dark,
			}}
		>
			<html lang="en" className="dark">
				<body className={inter.className}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
