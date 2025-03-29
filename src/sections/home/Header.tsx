import CoolButton from "~/components/CoolButton";
import Nav from "~/components/Nav";

export default function Header() {
	return (
		<header class="container m-auto flex items-center justify-between gap-2 px-4 pt-4">
			<Nav />
			<CoolButton label="Contact" url="/#contact" />
		</header>
	);
}
