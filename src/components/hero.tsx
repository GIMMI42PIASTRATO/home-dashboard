import AceternityButton from "@/components/ui/aceternity-button";
import { Cover } from "@/components/ui/cover";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden">
			<div className="flex justify-center">
				<AceternityButton />
			</div>
			<h1 className="text-2xl md:text-4xl lg:text-[5.5rem] lg:leading-none font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10">
				The <Cover>futuristic</Cover> dashboard for your home
			</h1>
			<p className="text-center mt-8 text-base md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto relative z-10">
				Everything you need to manage your home smartly and efficiently,
				making you feel like you are living in the 3000s.
			</p>
			<div className="flex items-center gap-4 justify-center mt-7 relative z-10">
				<Button className="rounded-full" asChild>
					<Link href="/sign-in">Get started</Link>
				</Button>
			</div>
			<div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
				<div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none"></div>
				<div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
					<Image
						src="/macOS_Dark.png"
						width={1920}
						height={1080}
						alt="dashboard preview"
					></Image>
				</div>
			</div>
		</section>
	);
}
