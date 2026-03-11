import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Badge, Icon } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent } from '@/app/resources';
import { Mailchimp, ContactButton } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
	{ params: { locale } }: { params: { locale: string } }
) {
	const t = await getTranslations();
	const { home } = renderContent(t);
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

export default function Home(
	{ params: { locale } }: { params: { locale: string } }
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { home, about, person, newsletter, services } = renderContent(t);

	// Pick top 4 service highlights for the home page
	const highlights = services.sections.flatMap((s: any) => s.items).slice(0, 4);

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
							variant="heading-default-xl">
							{home.subline}
						</Text>
					</RevealFx>

					{/* Skill badges */}
					<RevealFx translateY={8} delay={0.3} fillWidth justifyContent="flex-start">
						<Flex gap="8" wrap>
							{home.badges && home.badges.map((badge: string, i: number) => (
								<Badge
									key={i}
									title={badge}
								/>
							))}
						</Flex>
					</RevealFx>

					{/* Dual CTA buttons */}
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
							What I Build
						</Heading>
						<Text variant="body-default-m" onBackground="neutral-weak">
							End-to-end solutions — from web apps to growth systems
						</Text>
					</Flex>
					<Flex wrap gap="m" fillWidth>
						{highlights.map((item: any, i: number) => (
							<Flex
								key={i}
								direction="column"
								gap="12"
								padding="l"
								radius="l"
								border="neutral-medium"
								borderStyle="solid-1"
								background="surface"
								style={{ flex: '1 1 220px', minWidth: '200px' }}>
								<Flex
									padding="s"
									radius="m"
									background="brand-medium"
									alignItems="center"
									justifyContent="center"
									style={{ width: '40px', height: '40px', flexShrink: 0 }}>
									<Icon name={item.icon} size="s" onBackground="brand-strong" />
								</Flex>
								<Text variant="heading-strong-s">{item.title}</Text>
								<Text variant="body-default-s" onBackground="neutral-weak">
									{item.description}
								</Text>
							</Flex>
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

			{/* Featured Project */}
			<RevealFx translateY="16" delay={0.6}>
				<Projects range={[1, 1]} locale={locale} />
			</RevealFx>

			{/* Blog section */}
			{routes['/blog'] && (
				<Flex fillWidth direction="column" gap="m">
					<Heading
						as="h2"
						variant="display-strong-xs"
						wrap="balance">
						Latest from the blog
					</Heading>
					<Posts range={[1, 2]} columns="2" locale={locale} />
				</Flex>
			)}

			{/* Rest of projects */}
			<Projects range={[2]} locale={locale} />

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
						Whether you have a clear vision or just a problem to solve — I'll figure out the best approach and build it right.
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
