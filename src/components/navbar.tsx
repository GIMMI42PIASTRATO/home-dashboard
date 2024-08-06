import { cn } from "@/lib/utils";
import NavLink from "./nav-link";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import ThemeToggle from "@/components/theme-toggle";
import Logo from "@/components/logo";

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";

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
			<LargeNav />
			<SmallNav />
		</nav>
	);
}

function LargeNav() {
	return (
		<div className="hidden lg:block w-full">
			<div className="w-full flex relative justify-between px-4 py-2 rounded-full bg-transparent transition duration-200">
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
	);
}

function SmallNav() {
	return (
		<div className="flex h-full w-full items-center lg:hidden">
			<div className="flex justify-between bg-white dark:bg-neutral-900 items-center w-full rounded-full px-2.5 py-1.5 transition duration-200">
				<Logo />
				<div className="flex space-x-2 items-center">
					<ThemeToggle />
					<Sheet>
						<SheetTrigger asChild>
							<HamburgerMenuIcon className="h-5 w-5" />
						</SheetTrigger>
						<SheetContent className="max-w-none sm:max-w-none md:max-w-none lg:max-w-none xl:max-w-none 2xl:max-w-none w-full">
							<SheetHeader>
								<div className="flex items-center justify-between w-full">
									<Logo />
								</div>
							</SheetHeader>
							<div className="flex flex-col items-start justify-start gap-[14px] px-2 mt-10">
								<Link href="https://github.com/GIMMI42PIASTRATO/home-dashboard/blob/main/README.md">
									<span className="block text-[26px] text-black dark:text-white">
										Documentation
									</span>
								</Link>
							</div>
							<div className="flex flex-col items-start justify-start gap-[14px] px-2 mt-10">
								<Button className="rounded-full" asChild>
									<Link href="/sign-in">Sign In</Link>
								</Button>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</div>
	);
}
