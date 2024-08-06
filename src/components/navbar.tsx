"use client";
import { cn } from "@/lib/utils";
import NavLink from "./nav-link";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import ThemeToggle from "@/components/theme-toggle";

type NavbarProps = {
	className?: string;
};

export default function Navbar({ className }: NavbarProps) {
	return (
		<nav
			className={cn(
				"max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full",
				className
			)}
		>
			<div className="hidden lg:block w-full">
				<div className="w-full flex relative justify-between px-4 py-2 rounded-full bg-transparent transition duration-200">
					<div className="flex flex-row gap-2 items-center">
						<Link
							className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
							href="/"
						>
							<div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
							<span className="font-medium text-black dark:text-white">
								Smart Home
							</span>
						</Link>
						<div className="flex items-center gap-1.5">
							<NavLink href="https://github.com/GIMMI42PIASTRATO/home-dashboard/blob/main/README.md">
								Documentation
							</NavLink>
						</div>
					</div>
					<div className="flex space-x-4 items-center">
						<ThemeToggle />
						<Button variant="ghost" size="icon" asChild>
							<Link
								href="https://github.com/GIMMI42PIASTRATO/home-dashboard"
								target="_blank"
							>
								<GitHubLogoIcon className="h-5 w-5" />
							</Link>
						</Button>
						<Button className="rounded-full" asChild>
							<Link href="/sign-in">Sign In</Link>
						</Button>
					</div>
				</div>
			</div>
			{/* small screen nav */}
			<div className="flex h-full w-full items-center lg:hidden"></div>
		</nav>
	);
}
