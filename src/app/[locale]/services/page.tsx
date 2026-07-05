import React from 'react';
import { Heading, Flex, Text, RevealFx } from '@/once-ui/components';
import { baseURL } from '@/app/resources';
import { ContactButton, ServiceCard } from '@/components';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getContent } from '@/lib/getContent';

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {
    const { services } = await getContent();
    const title = services.title;
    const description = services.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/services`,
            images: [{ url: ogImage, alt: title }],
        },
        twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
    };
}

export default async function Services(
    { params: { locale } }: { params: { locale: string } }
) {
    unstable_setRequestLocale(locale);
    const { services } = await getContent();

    return (
        <Flex
            maxWidth="l" fillWidth gap="xl"
            direction="column" alignItems="center"
            paddingX="l">

            {/* Page Header */}
            <Flex
                fillWidth direction="column"
                paddingY="l" gap="s" alignItems="center">
                <RevealFx translateY="4" fillWidth justifyContent="center">
                    <Heading
                        as="h1"
                        variant="display-strong-l"
                        align="center"
                        wrap="balance">
                        {services.title}
                    </Heading>
                </RevealFx>
                <RevealFx translateY="8" delay={0.2} fillWidth justifyContent="center">
                    <Text
                        variant="body-default-l"
                        onBackground="neutral-weak"
                        align="center"
                        wrap="balance">
                        {services.description}
                    </Text>
                </RevealFx>
            </Flex>

            {/* Sections */}
            {services.sections.map((section: any, sIdx: number) => (
                <RevealFx
                    key={sIdx}
                    translateY="12"
                    delay={0.1 * sIdx}
                    fillWidth>
                    <Flex fillWidth direction="column" gap="l">
                        {/* Section heading */}
                        <Flex fillWidth direction="column" gap="4" paddingX="s">
                            <Heading
                                as="h2"
                                variant="display-strong-xs">
                                {section.title}
                            </Heading>
                            <Text
                                variant="body-default-m"
                                onBackground="neutral-weak">
                                {section.subtitle}
                            </Text>
                        </Flex>

                        {/* Cards grid */}
                        <Flex
                            fillWidth
                            wrap
                            gap="m">
                            {section.items.map((item: any, iIdx: number) => (
                                <ServiceCard
                                    key={iIdx}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    tags={item.tags} />
                            ))}
                        </Flex>
                    </Flex>
                </RevealFx>
            ))}

            {/* Bottom CTA */}
            <RevealFx translateY="16" delay={0.4} fillWidth>
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
                    <Heading as="h2" variant="display-strong-s" align="center">
                        Not sure where to start?
                    </Heading>
                    <Text
                        variant="body-default-m"
                        onBackground="neutral-weak"
                        align="center"
                        wrap="balance">
                        Tell me what you're building. I'll recommend the best approach and give you a realistic timeline and scope.
                    </Text>
                    <ContactButton
                        variant="primary"
                        size="l"
                        suffixIcon="arrowUpRight">
                        Let's talk
                    </ContactButton>
                </Flex>
            </RevealFx>
        </Flex>
    );
}
