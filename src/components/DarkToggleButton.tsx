export default function DarkToggleButton() {
	return (
		<button
			type="button"
			class="icon-[material-symbols--light-mode] dark:icon-[material-symbols--dark-mode] cursor-pointer transition-transform hover:scale-110"
			onClick={() => {
				document.documentElement.classList.toggle("dark");
				localStorage.theme = document.documentElement.classList.contains("dark")
					? "dark"
					: "light";
			}}
		/>
	);
}
