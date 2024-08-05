import Link from "next/link";

type NavLinkProps = {
	children: React.ReactNode;
};

export default function NavLink({ children }: NavLinkProps) {
	return (
		<Link
			className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] dark:hover:bg-neutral-800 hover:text-black text-muted dark:text-muted-dark"
			href="#"
		>
			{children}
		</Link>
	);
}
