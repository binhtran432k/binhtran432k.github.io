(() => {
	const bar = document.querySelector(".loader__bar--inner");
	const counterNum = document.querySelector(".loader__counter--number");
	if (!bar || !counterNum) return;
	let i = 0;
	const barInterval = setInterval(() => {
		bar.style.width = `${i}%`;
		counterNum.innerText = `${i}%`;
		i += 10;
		if (i > 100) {
			clearInterval(barInterval);
			document.querySelector(".loader").className = "loader loader--loaded";
		}
	}, 50);
})();
