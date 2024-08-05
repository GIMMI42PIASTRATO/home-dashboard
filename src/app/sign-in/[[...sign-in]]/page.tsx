import { SignIn } from "@clerk/nextjs";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Page() {
	return (
		<div className="w-full h-screen flex justify-center items-center bg-neutral-950 relative ">
			<SignIn />
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
	);
}
