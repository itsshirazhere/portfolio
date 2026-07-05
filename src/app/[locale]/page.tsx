import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Badge, Icon, Grid } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';
import { baseURL, routes } from '@/app/resources';
import { Mailchimp, ContactButton, ServiceCard } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getContent } from '@/lib/getContent';

export async function generateMetadata(
	{ params: { locale } }: { params: { locale: string } }
) {
	const { home } = await getContent();
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}`,
			images: [{ url: ogImage, alt: title }],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default async function Home(
	{ params: { locale } }: { params: { locale: string } }
) {
	unstable_setRequestLocale(locale);
	const { home, about, person, newsletter, services } = await getContent();

	// Pick top 3 service highlights for the home page
	const highlights = services.sections.flatMap((s: any) => s.items).slice(0, 3);

	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>

			{/* Hero */}
			<Flex
				fillWidth
				direction="column"
				paddingY="l" gap="l">
				<Flex
					direction="column"
					fillWidth maxWidth="s"
					gap="m">
					<RevealFx
						translateY="4" fillWidth justifyContent="flex-start" paddingBottom="4">
						<Heading
							wrap="balance"
							variant="display-strong-l">
							{home.headline}
						</Heading>
					</RevealFx>
					<RevealFx
						translateY="8" delay={0.2} fillWidth justifyContent="flex-start" paddingBottom="4">
						<Text
							wrap="balance"
							onBackground="neutral-weak"
							variant="body-default-l">
							{home.subline}
						</Text>
					</RevealFx>

					{home.badges && (
						<RevealFx translateY={8} delay={0.3} fillWidth justifyContent="flex-start">
							<Flex gap="8" wrap>
								{home.badges.map((badge: string, i: number) => (
									<Badge key={i} title={badge} arrow={false} />
								))}
							</Flex>
						</RevealFx>
					)}

					<RevealFx translateY="12" delay={0.4}>
						<Flex fillWidth gap="12" wrap>
							<Button
								id="services"
								data-border="rounded"
								href={`/${locale}/services`}
								variant="primary"
								size="m"
								suffixIcon="arrowUpRight">
								View Services
							</Button>
							<Button
								id="about"
								data-border="rounded"
								href={`/${locale}/about`}
								variant="tertiary"
								size="m">
								<Flex gap="8" alignItems="center">
									{about.avatar.display && (
										<Avatar
											style={{ marginLeft: '-0.75rem', marginRight: '0.25rem' }}
											src={person.avatar}
											size="m" />
									)}
									About me
									<Arrow trigger="#about" />
								</Flex>
							</Button>
						</Flex>
					</RevealFx>
				</Flex>
			</Flex>

			{/* What I Build */}
			<RevealFx translateY="12" delay={0.5} fillWidth>
				<Flex direction="column" gap="l" fillWidth>
					<Flex fillWidth direction="column" gap="4">
						<Heading as="h2" variant="display-strong-xs">
							What I build for you
						</Heading>
						<Text variant="body-default-m" onBackground="neutral-weak">
							From idea to deployed product — owned end-to-end
						</Text>
					</Flex>
					<Flex wrap gap="m" fillWidth>
						{highlights.map((item: any, i: number) => (
							<ServiceCard
								key={i}
								icon={item.icon}
								title={item.title}
								description={item.description}
								tags={item.tags} />
						))}
					</Flex>
					<Flex>
						<Button
							href={`/${locale}/services`}
							variant="secondary"
							size="s"
							suffixIcon="arrowUpRight">
							See all services
						</Button>
					</Flex>
				</Flex>
			</RevealFx>

			{/* Why choose me */}
			<RevealFx translateY="12" delay={0.55} fillWidth>
				<Flex fillWidth direction="column" gap="l">
					<Flex direction="column" gap="4">
						<Heading as="h2" variant="display-strong-xs">
							Why founders work with me
						</Heading>
						<Text variant="body-default-m" onBackground="neutral-weak">
							Not an agency. Not a junior freelancer. One senior engineer, fully accountable for what ships.
						</Text>
					</Flex>
					<Grid columns="repeat(2, 1fr)" mobileColumns="1col" gap="l" fillWidth>
						{[
							{
								icon: "rocket",
								title: "Speed without shortcuts",
								body: "MVPs built in weeks, not months — with clean code and proper architecture, not duct tape you'll pay to unwind later."
							},
							{
								icon: "person",
								title: "One person, full ownership",
								body: "You talk directly to the person writing the code. No account managers, no handoffs, no lost-in-translation requirements."
							},
							{
								icon: "check",
								title: "Production-ready from day one",
								body: "Clean, well-structured code that holds up as you grow — not a fragile prototype you'll need to rebuild the moment it matters."
							},
							{
								icon: "shield",
								title: "Startup mindset",
								body: "I've built under real startup constraints — tight timelines, shifting scope, limited budget. I know when to move fast and when to slow down and get it right."
							},
						].map((item, i) => (
							<Flex key={i} direction="column" gap="8">
								<Flex
									alignItems="center"
									justifyContent="center"
									radius="m"
									background="brand-weak"
									style={{ width: '40px', height: '40px', flexShrink: 0 }}>
									<Icon name={item.icon} size="s" onBackground="brand-strong" />
								</Flex>
								<Text variant="heading-strong-s">{item.title}</Text>
								<Text variant="body-default-s" onBackground="neutral-weak" style={{ lineHeight: '1.6' }}>
									{item.body}
								</Text>
							</Flex>
						))}
					</Grid>
					<Flex>
						<ContactButton
							variant="secondary"
							size="s"
							suffixIcon="arrowUpRight"
							defaultSubject="Let's build something">
							Let's talk about your project
						</ContactButton>
					</Flex>
				</Flex>
			</RevealFx>

			{/* Featured Projects */}
			<RevealFx translateY="16" delay={0.6} fillWidth>
				<Flex direction="column" gap="l" fillWidth>
					<Flex direction="column" gap="4">
						<Heading as="h2" variant="display-strong-xs">
							Recent Projects
						</Heading>
						<Text variant="body-default-m" onBackground="neutral-weak">
							A sample of what I've built for clients
						</Text>
					</Flex>
					<Projects range={[1, 2]} locale={locale} />
					<Flex>
						<Button
							href={`/${locale}/work`}
							variant="secondary"
							size="s"
							suffixIcon="arrowUpRight">
							See all projects
						</Button>
					</Flex>
				</Flex>
			</RevealFx>

			{/* Blog section */}
			{/* {routes['/blog'] && (
				<Flex fillWidth direction="column" gap="m">
					<Heading as="h2" variant="display-strong-xs" wrap="balance">
						Latest from the blog
					</Heading>
					<Posts range={[1, 2]} columns="2" locale={locale} />
				</Flex>
			)} */}

			{/* Contact CTA */}
			<RevealFx translateY="16" delay={0.3} fillWidth>
				<Flex
					fillWidth
					padding="xl"
					radius="l"
					border="brand-medium"
					borderStyle="solid-1"
					background="brand-weak"
					direction="column"
					alignItems="center"
					gap="m">
					<Heading as="h2" variant="display-strong-s" align="center" wrap="balance">
						Got an idea? Let's build it.
					</Heading>
					<Text
						variant="body-default-m"
						onBackground="neutral-weak"
						align="center"
						wrap="balance">
						Whether you have a clear spec or just a problem to solve — I'll figure out the best approach and build it right.
					</Text>
					<ContactButton
						variant="primary"
						size="l"
						suffixIcon="arrowUpRight">
						Start a conversation
					</ContactButton>
				</Flex>
			</RevealFx>

			{newsletter.display &&
				<Mailchimp newsletter={newsletter} />
			}
		</Flex>
	);
}
