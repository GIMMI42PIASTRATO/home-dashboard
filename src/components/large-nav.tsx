"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import NavLink from "@/components/nav-link";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import ThemeToggle from "@/components/theme-toggle";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

export default function LargeNav() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="hidden lg:block w-full">
			<div
				className={cn(
					"w-full flex relative justify-between px-4 py-2 rounded-full transition duration-200",
					isScrolled
						? "bg-neutral-50 dark:bg-neutral-900 shadow-[0px_-2px_0px_0px_#f5f5f5,0px_2px_0px_0px_#f5f5f5] dark:shadow-[0px_-2px_0px_0px_#262626,0px_2px_0px_0px_#262626]"
						: "bg-transparent"
				)}
			>
				{isScrolled && (
					<div className="absolute inset-0 h-full w-full bg-neutral-100 dark:bg-neutral-800 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent,white)] rounded-full"></div>
				)}
				<div className="flex flex-row gap-2 items-center">
					<Logo />
					<div className="flex items-center gap-1.5">
						<NavLink href="https://github.com/GIMMI42PIASTRATO/home-dashboard/blob/main/README.md">
							Documentation
						</NavLink>
					</div>
				</div>
				<div className="flex space-x-4 items-center">
					<ThemeToggle />
					<Button
						className="z-10"
						variant="ghost"
						size="icon"
						asChild
					>
						<Link
							href="https://github.com/GIMMI42PIASTRATO/home-dashboard"
							target="_blank"
						>
							<GitHubLogoIcon className="h-5 w-5" />
						</Link>
					</Button>
					<Button className="rounded-full z-10" asChild>
						<Link href="/sign-in">Sign In</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
