import { env } from "mini-van-plate/shared";

export const Contact = () => {
	const { div, section, h3, h4, form, input, label, textarea, button, span } =
		env.van.tags;
	return section(
		{ class: "contact" },
		div({ id: "contact" }),
		div(
			{ class: "container" },
			h4("Contact"),
			h3("Get in touch"),
			form(
				{ action: "https://api.staticforms.xyz/submit", method: "post" },
				input({
					type: "hidden",
					name: "accessKey",
					value: "9e388d87-e2b7-4761-8283-d2326ee634a5",
				}),
				div(
					label(
						"Hey, My name is ",
						input({ placeholder: "Type Here", name: "name", required: true }),
					),
					label(
						" I'm looking for ",
						input({
							placeholder: "Type of service",
							name: "subject",
							required: true,
						}),
					),
				),
				label(
					"Get in touch with me at ",
					input({
						type: "email",
						placeholder: "Your Email id here",
						name: "email",
						required: true,
					}),
				),
				input({ type: "hidden", name: "replyTo", value: "@" }),

				input({
					type: "hidden",
					name: "redirectTo",
					value: "https://binhtran432k.com/contact/success",
				}),
				textarea({
					placeholder: "Your Message",
					name: "message",
					required: true,
				}),
				button({ type: "submit", class: "cool-button" }, span("Send")),
			),
		),
	);
};
