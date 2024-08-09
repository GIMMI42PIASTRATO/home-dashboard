"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";

type Custom = {
	id: number;
	stagger: number;
};

type Message = {
	id: number;
	content: JSX.Element | string;
	sender: string;
	stagger: number;
};

const fadeAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: ({ id, stagger }: Custom) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: stagger * id,
		},
	}),
	reset: {
		opacity: 0,
		y: 100,
	},
};

export default function Phone() {
	const controls = useAnimationControls();
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (isInView) {
			const startAnimation = async () => {
				await controls.start("animate");
				timer = setTimeout(() => {
					controls
						.start("reset")
						.then(() => controls.start("animate"));
				}, 5000); // Aspetta 5 secondi prima di ricominciare l'animazione
			};
			startAnimation();
		}

		return () => clearTimeout(timer);
	}, [isInView, controls]);

	return (
		<div className="h-full w-full">
			<div className="relative h-full w-full mt-4">
				<div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-[#09090b] dark:via-[#09090b] to-transparent w-full pointer-events-none"></div>
				<div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] h-full z-20">
					<div className="p-2 bg-white dark:bg-[#09090b] dark:border-neutral-700 border border-neutral-200 rounded-[24px] h-full">
						<div className="w-20 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 mx-auto h-6"></div>
						<motion.div
							onViewportEnter={() => setIsInView(true)}
							onViewportLeave={() => setIsInView(false)}
							className="content mt-4 w-[90%] mx-auto"
						>
							{messages.map(
								({ id, content, sender, stagger }) => (
									<motion.div
										key={id}
										variants={fadeAnimationVariants}
										initial="initial"
										animate={controls}
										custom={{ id, stagger }}
										className={
											sender === "bot"
												? "message bg-neutral-100 dark:bg-neutral-800 dark:text-white text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md"
												: "message bg-black text-white dark:bg-white dark:text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md"
										}
									>
										{content}
									</motion.div>
								)
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

const messages: Message[] = [
	{
		id: 1,
		content: "There is someone at the door",
		sender: "bot",
		stagger: 0.5,
	},
	{
		id: 2,
		content: "This is a video of what was detected",
		sender: "bot",
		stagger: 0.5,
	},
	{
		id: 3,
		content: (
			<Image src="/magic.gif" width={300} height={300} alt="magic gif" />
		),
		sender: "bot",
		stagger: 0.5,
	},
	{
		id: 4,
		content: "tf",
		sender: "me",
		stagger: 2.8,
	},
];
