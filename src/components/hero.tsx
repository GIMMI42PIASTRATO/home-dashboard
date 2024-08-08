import AceternityButton from "./ui/aceternity-button";

export default function Hero() {
	return (
		<section className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden">
			<div className="flex justify-center">
				<AceternityButton />
			</div>
			<h1 className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10">
				The futiristic dashboard for your home
			</h1>
			<p className="text-center mt-8 text-base md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto relative z-10">
				Everything you need to manage your home smartly and efficiently,
				making you feel like you are living in the 3000s.
			</p>
		</section>
	);
}
