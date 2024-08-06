import Link from "next/link";

export default function Logo() {
	return (
		<Link
			className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
			href="/"
		>
			<div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
			<span className="font-medium text-black dark:text-white">
				Smart Home
			</span>
		</Link>
	);
}
