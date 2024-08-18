import Navbar from "@/components/navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import Hero from "@/components/hero";
import Features from "@/components/features";

export default function Home() {
	return (
		<main>
			<Navbar />
			<div className="relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 flex min-h-screen flex-col items-center justify-between">
					<Hero />
					<Features />
				</div>
				<ShootingStars
					minDelay={1000}
					maxDelay={3000}
					starColor="#45b2c8"
				/>
				<StarsBackground
					minTwinkleSpeed={0.2}
					maxTwinkleSpeed={0.5}
					twinkleProbability={1}
					starDensity={0.0005}
				/>
			</div>
		</main>
	);
}
