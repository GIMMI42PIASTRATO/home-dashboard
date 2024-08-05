import { SignIn } from "@clerk/nextjs";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Page() {
	return (
		<div className="w-full h-screen flex justify-center items-center bg-neutral-950 relative ">
			<SignIn />
			<ShootingStars />
			<StarsBackground minTwinkleSpeed={0.2} maxTwinkleSpeed={0.5} />
		</div>
	);
}
