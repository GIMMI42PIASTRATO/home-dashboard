import React from "react";
import Link, { LinkProps } from "next/link";

type NavLinkProps = LinkProps & {
	children: React.ReactNode;
};

export default function NavLink({ children, ...props }: NavLinkProps) {
	return (
		<Link
			className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 ease-in-out"
			{...props}
		>
			{children}
		</Link>
	);
}
