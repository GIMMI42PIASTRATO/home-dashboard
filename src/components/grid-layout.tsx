import { cn } from "@/lib/utils";

export type Card = {
	id: number;
	content: JSX.Element;
	className: string;
};

export default function GridLayout({ cards }: { cards: Card[] }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-6 mt-12">
			{cards.map(({ id, content, className }) => (
				<div key={id} className={cn("col-span-1", className)}>
					{content}
				</div>
			))}
		</div>
	);
}
