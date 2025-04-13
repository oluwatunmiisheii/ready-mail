import { ArrowRight } from "lucide-react";
import { Button } from "@ready-mail/ui/components";
import { Section } from "../../components/section/section";

export function CTA() {
	return (
		<div className="relative">
			<Section>
				<div>
					<div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
						<span className="inline-block px-3 py-1 text-xs font-medium bg-gray-200/50 text-gray-800 rounded-full">
							Templates{" "}
							<ArrowRight className="w-4 h-4 inline-block" />
						</span>
						<div className="flex flex-col gap-2">
							<h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
								Explore our collection of ready to use templates
							</h3>
							<p className="text-lg leading-relaxed tracking-tight text-gray-600 max-w-xl">
								Join over 1000+ developers using our templates
								to design stunning emails for their
								applications. You can focus on core features of
								your applications and leave the designing to us.
								Pick from our collection of stunning email
								templates and get started.
							</p>
						</div>
						<div className="flex flex-row gap-4">
							<Button className="gap-4">
								Explore Templates
								<ArrowRight className="w-4 h-4" />
							</Button>
						</div>
					</div>
				</div>
			</Section>
			<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f9fafb_1px,transparent_1px),linear-gradient(to_bottom,#f9fafb_1px,transparent_1px)] bg-[size:6rem_4rem]">
				<div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#e4bdfd] opacity-20 blur-[100px]"></div>
			</div>
		</div>
	);
}
