import { A } from "@solidjs/router";

export default function CoolButton(props: {
	url: string;
	label: string;
	isSmall?: boolean;
}) {
	return (
		<A
			href={props.url}
			class="group relative block h-[6rem] w-[9rem] md:text-lg"
			classList={{
				"md:h-[7.5rem] md:w-[11rem]": !props.isSmall,
			}}
		>
			<div class="-rotate-[20deg] absolute h-[83%] w-[95%] translate-y-2 rounded-[58%42%55%45%/56%45%55%44%] border border-fg transition-transform duration-300 ease-[cubic-bezier(0.5,2.5,0.5,0.5)] group-hover:translate-y-4 group-hover:rotate-0 dark:border-bg" />
			<div class="absolute h-[80%] w-[95%] translate-y-2 rotate-[20deg] rounded-[58%42%55%48%/56%45%60%44%] bg-fg transition-transform duration-300 ease-[cubic-bezier(0.5,2.5,0.5,0.5)] group-hover:h-[81%] group-hover:w-[98%] group-hover:rotate-0 group-hover:rounded-[46%54%58%42%/48%35%65%52%] dark:bg-bg" />
			<div class="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 text-bg dark:text-fg">
				{props.label}
			</div>
		</A>
	);
}
