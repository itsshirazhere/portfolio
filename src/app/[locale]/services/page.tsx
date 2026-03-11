import React from 'react';
import { Heading, Flex, Text, Icon, Badge, RevealFx } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { ContactButton } from '@/components';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {
    const t = await getTranslations();
    const { services } = renderContent(t);
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

export default function Services(
    { params: { locale } }: { params: { locale: string } }
) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const { services } = renderContent(t);

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
                                <Flex
                                    key={iIdx}
                                    direction="column"
                                    gap="m"
                                    padding="l"
                                    radius="l"
                                    border="neutral-medium"
                                    borderStyle="solid-1"
                                    background="surface"
                                    style={{
                                        flex: '1 1 300px',
                                        minWidth: '280px',
                                        maxWidth: '480px',
                                        transition: 'border-color 0.2s ease, transform 0.2s ease',
                                    }}
                                    className="service-card">

                                    {/* Icon + Title */}
                                    <Flex direction="row" alignItems="center" gap="m">
                                        <Flex
                                            padding="s"
                                            radius="m"
                                            background="brand-medium"
                                            alignItems="center"
                                            justifyContent="center"
                                            style={{ width: '44px', height: '44px', flexShrink: 0 }}>
                                            <Icon
                                                name={item.icon}
                                                size="m"
                                                onBackground="brand-strong"
                                            />
                                        </Flex>
                                        <Heading as="h3" variant="heading-strong-m">
                                            {item.title}
                                        </Heading>
                                    </Flex>

                                    {/* Description */}
                                    <Text
                                        variant="body-default-s"
                                        onBackground="neutral-weak"
                                        style={{ lineHeight: '1.65', flexGrow: 1 }}>
                                        {item.description}
                                    </Text>

                                    {/* Tags */}
                                    <Flex gap="8" wrap>
                                        {item.tags.map((tag: string, tIdx: number) => (
                                            <Badge
                                                key={tIdx}
                                                title={tag}
                                            />
                                        ))}
                                    </Flex>

                                    {/* CTA */}
                                    <ContactButton
                                        variant="secondary"
                                        size="s"
                                        suffixIcon="arrowUpRight"
                                        defaultSubject={`Inquiry: ${item.title}`}>
                                        Get in touch
                                    </ContactButton>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                </RevealFx>
            ))}

            {/* Bottom CTA strip */}
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
                        Not sure which service fits?
                    </Heading>
                    <Text
                        variant="body-default-m"
                        onBackground="neutral-weak"
                        align="center"
                        wrap="balance">
                        Let's chat. I'll figure out exactly what you need and how I can help.
                    </Text>
                    <ContactButton
                        variant="primary"
                        size="l"
                        suffixIcon="arrowUpRight">
                        Send me a message
                    </ContactButton>
                </Flex>
            </RevealFx>

        </Flex>
    );
}
