// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en">
				<head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
					<link rel="manifest" href="/manifest.json" />
					<link rel="canonical" href="https://binhtran432k.com/" />
					{assets}
					<script src="/scripts/dark.js" />
				</head>
				<body class="overflow-x-hidden scroll-smooth bg-bg text-fg transition-colors dark:bg-fg dark:text-bg">
					<div id="app">{children}</div>
					{scripts}
				</body>
			</html>
		)}
	/>
));
