import React from "react";
import GridLayout from "./grid-layout";

import { Card } from "@/components/grid-layout";
import Phone from "@/components/phone";

export default function Features() {
	return (
		<section className="relative z-20 py-10 md:py-40 w-full">
			<h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white text-3xl md:text-5xl md:leading-tight">
				Packed with thousands of features
			</h2>
			<p className="text-sm md:text-base max-w-4xl my-4 mx-auto font-normal text-neutral-600 dark:text-neutral-300 text-center">
				From remote control of security cameras to automating your
				morning routine. Smart home can manage anything, the limit is
				only your imagination.
			</p>
			<div className="relative">
				<GridLayout cards={cards} />
			</div>
		</section>
	);
}

const Feature1: React.FC = () => {
	return (
		<div className="p-4 sm:p-8 relative border-b border-r dark:border-neutral-800 h-full">
			<h3 className="max-w-5xl mx-auto tracking-tight font-medium text-black dark:text-white text-xl md:text-2xl md:leading-snug text-left">
				Remote control
			</h3>
			<h2 className="text-sm font-normal text-neutral-600 dark:text-neutral-300 text-left max-w-sm mx-0 md:text-sm my-2">
				Control your home from anywhere in the world, and make sure
				everything is safe and sound.
			</h2>

			<div className="mt-8 p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] relative">
				<img
					className="aspect-[9/16] max-h-[550px] w-full object-cover rounded-3xl"
					src="/dark-living-room.jpg"
					alt="living room"
				/>
			</div>
		</div>
	);
};

const Feature2: React.FC = () => {
	return (
		<div className="p-4 sm:p-8 relative border-b border-r dark:border-neutral-800 h-full">
			<h3 className="max-w-5xl mx-auto tracking-tight font-medium text-black dark:text-white text-xl md:text-2xl md:leading-snug text-left">
				Get notification for everything you want
			</h3>
			<h2 className="text-sm font-normal text-neutral-600 dark:text-neutral-300 text-left max-w-sm mx-0 md:text-sm my-2">
				Get notified when something happens, for example when someone is
				at the door.
			</h2>
			<Phone />
		</div>
	);
};

const cards: Card[] = [
	{
		id: 1,
		content: <Feature1 />,
		className: "md:col-span-4 h-[770px] overflow-hidden",
	},
	{
		id: 2,
		content: <Feature2 />,
		className: "md:col-span-2 h-[770px] overflow-hidden",
	},
];
