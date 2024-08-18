"use client";

export type ItemsData = {
	text: string;
	icon: React.ReactNode;
};

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: ItemsData[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"20s"
				);
			} else if (speed === "normal") {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"40s"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"80s"
				);
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20  max-w-7xl overflow-hidden",
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				<div className="flex space-x-4 flex-shrink-0 mb-4 relative z-40">
					{items.map((item) => (
						<li
							className="space-x-1 min-w-36 flex justify-center items-center  bg-white dark:bg-neutral-900 px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
							key={item.text}
						>
							<span className="w-4 h-4">{item.icon}</span>
							<span>{item.text}</span>
						</li>
					))}
				</div>
			</ul>
		</div>
	);
};
