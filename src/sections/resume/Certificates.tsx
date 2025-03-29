import { For } from "solid-js";
import { type CertificateItem, certificates } from "~/assets/profile";
import ResumeSection from "~/components/ResumeSection";

function Certificate(props: CertificateItem) {
	return (
		<div class="flex flex-wrap gap-1">
			<a
				class="inline-flex flex-wrap items-center gap-1 font-bold text-info hover:opacity-80 not-print:dark:text-info-dark"
				href={props.url}
				target="_blank"
				rel="noreferrer"
			>
				{props.name}
				<span class="icon-[material-symbols--open-in-new]" />
			</a>
			-<span>{props.brand}</span>
		</div>
	);
}

export default function Certificates() {
	return (
		<ResumeSection title="Certificates">
			<table class="mx-4">
				<For each={certificates}>
					{(certificate) => (
						<tr>
							<td class="text-right">
								<a
									class="font-bold text-info hover:opacity-80 not-print:dark:text-info-dark"
									href={certificate.url}
									target="_blank"
									rel="noreferrer"
								>
									{certificate.name}{" "}
									<span class="icon-[material-symbols--open-in-new] align-middle" />
								</a>
							</td>
							<td class="px-2">-</td>
							<td>
								<span>{certificate.brand}</span>
							</td>
						</tr>
					)}
				</For>
			</table>
		</ResumeSection>
	);
}
