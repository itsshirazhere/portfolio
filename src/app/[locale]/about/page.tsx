import { Avatar, Button, Flex, Heading, Icon, IconButton, SmartImage, Tag, Text } from '@/once-ui/components';
import { baseURL } from '@/app/resources';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getContent } from '@/lib/getContent';

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {
    const { person, about } = await getContent();
    const title = about.title;
    const description = about.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/about`,
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

export default async function About(
    { params: { locale } }: { params: { locale: string } }
) {
    unstable_setRequestLocale(locale);
    const { person, about, social } = await getContent();

    const structure = [
        { title: about.intro.title, display: about.intro.display, items: [] },
        {
            title: about.work.title,
            display: about.work.display,
            items: about.work.experiences.map((e: any) => e.company),
        },
        {
            title: about.studies.title,
            display: about.studies.display,
            items: about.studies.institutions.map((i: any) => i.name),
        },
        {
            title: about.technical.title,
            display: about.technical.display,
            items: [],
        },
    ];

    const competencies = [
        { name: "Full-Stack Development", icon: "code" },
        { name: "Cloud & DevOps", icon: "globe" },
        { name: "Mobile Development", icon: "smartphone" },
        { name: "AI / LLM Integration", icon: "refresh" },
        { name: "Growth & Automation", icon: "barChart" },
        { name: "UI/UX Design", icon: "briefcase" },
    ];

    return (
        <Flex fillWidth maxWidth="m" direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: person.name,
                        jobTitle: person.role,
                        description: typeof about.intro.description === 'string'
                            ? about.intro.description
                            : `${person.name} — ${person.role}`,
                        url: `https://${baseURL}/about`,
                        image: `${baseURL}${person.avatar}`,
                        sameAs: social
                            .filter((item: any) => item.link && !item.link.startsWith('mailto:'))
                            .map((item: any) => item.link),
                        worksFor: {
                            '@type': 'Organization',
                            name: about.work.experiences[0]?.company || '',
                        },
                    }),
                }}
            />

            {about.tableOfContent.display && (
                <Flex
                    style={{ left: '0', top: '50%', transform: 'translateY(-50%)' }}
                    position="fixed"
                    paddingLeft="24" gap="32"
                    direction="column" hide="s">
                    <TableOfContents structure={structure} tableOfContent={about.tableOfContent} />
                </Flex>
            )}

            <Flex fillWidth mobileDirection="column" justifyContent="center">
                {about.avatar.display && (
                    <Flex
                        className={styles.avatar}
                        minWidth="160" paddingX="l" paddingBottom="xl" gap="m"
                        flex={3} direction="column" alignItems="center">
                        <Avatar src={person.avatar} size="xl" />
                        <Flex gap="8" alignItems="center">
                            <Icon onBackground="accent-weak" name="globe" />
                            {person.location}
                        </Flex>
                        {person.languages.length > 0 && (
                            <Flex wrap gap="8">
                                {person.languages.map((language: string, index: number) => (
                                    <Tag key={index} size="l">{language}</Tag>
                                ))}
                            </Flex>
                        )}
                    </Flex>
                )}

                <Flex className={styles.blockAlign} fillWidth flex={9} maxWidth={40} direction="column">
                    {/* Header */}
                    <Flex
                        id={about.intro.title}
                        fillWidth minHeight="160"
                        direction="column" justifyContent="center"
                        marginBottom="32">
                        {about.calendar.display && (
                            <Flex
                                className={styles.blockAlign}
                                style={{
                                    backdropFilter: 'blur(var(--static-space-1))',
                                    border: '1px solid var(--brand-alpha-medium)',
                                    width: 'fit-content',
                                }}
                                alpha="brand-weak" radius="full"
                                fillWidth padding="4" gap="8" marginBottom="m"
                                alignItems="center">
                                <Flex paddingLeft="12">
                                    <Icon name="calendar" onBackground="brand-weak" />
                                </Flex>
                                <Flex paddingX="8">Schedule a call</Flex>
                                <IconButton
                                    href={about.calendar.link}
                                    data-border="rounded"
                                    variant="tertiary"
                                    icon="chevronRight" />
                            </Flex>
                        )}
                        <Heading className={styles.textAlign} variant="display-strong-xl">
                            {person.name}
                        </Heading>
                        <Text
                            className={styles.textAlign}
                            variant="display-default-xs"
                            onBackground="neutral-weak">
                            {person.role}
                        </Text>
                        {social.length > 0 && (
                            <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap>
                                {social.map((item: any) => (
                                    item.link && (
                                        <Button
                                            key={item.name}
                                            href={item.link}
                                            prefixIcon={item.icon}
                                            label={item.name}
                                            size="s"
                                            variant="tertiary" />
                                    )
                                ))}
                            </Flex>
                        )}
                    </Flex>

                    {/* Intro */}
                    {about.intro.display && (
                        <Flex
                            direction="column"
                            textVariant="body-default-l"
                            fillWidth gap="m" marginBottom="xl">
                            {String(about.intro.description).split('\n\n').map((para: string, i: number) => (
                                <Text key={i} variant="body-default-l">{para}</Text>
                            ))}
                        </Flex>
                    )}

                    {/* Work Experience */}
                    {about.work.display && (
                        <>
                            <Heading
                                as="h2"
                                id={about.work.title}
                                variant="display-strong-s"
                                marginBottom="m">
                                {about.work.title}
                            </Heading>
                            <Flex direction="column" fillWidth gap="l" marginBottom="40">
                                {about.work.experiences.map((experience: any, index: number) => (
                                    <Flex
                                        key={`${experience.company}-${index}`}
                                        fillWidth direction="column">
                                        <Flex
                                            className={styles.experienceHeader}
                                            fillWidth justifyContent="space-between"
                                            alignItems="flex-end" mobileDirection="column"
                                            gap="4" marginBottom="4">
                                            <Text
                                                id={experience.company}
                                                variant="heading-strong-l">
                                                {experience.company}
                                            </Text>
                                            <Text
                                                variant="heading-default-xs"
                                                onBackground="neutral-weak">
                                                {experience.timeframe}
                                            </Text>
                                        </Flex>
                                        <Text
                                            variant="body-default-s"
                                            onBackground="brand-weak"
                                            marginBottom="m">
                                            {experience.role}
                                        </Text>
                                        <Flex as="ul" direction="column" gap="16">
                                            {experience.achievements.map((achievement: any, idx: number) => (
                                                <Text
                                                    as="li"
                                                    variant="body-default-m"
                                                    key={`${experience.company}-${idx}`}>
                                                    {achievement}
                                                </Text>
                                            ))}
                                        </Flex>
                                        {experience.images && experience.images.length > 0 && (
                                            <Flex fillWidth paddingTop="m" gap="12" wrap>
                                                {experience.images.map((image: any, idx: number) => (
                                                    <Flex
                                                        key={idx}
                                                        border="neutral-medium"
                                                        borderStyle="solid-1"
                                                        radius="m"
                                                        maxWidth={image.width}
                                                        fillWidth>
                                                        <SmartImage
                                                            enlarge
                                                            radius="m"
                                                            aspectRatio={`${image.width} / ${image.height}`}
                                                            sizes={image.width.toString()}
                                                            alt={image.alt}
                                                            src={image.src} />
                                                    </Flex>
                                                ))}
                                            </Flex>
                                        )}
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}

                    {/* Education */}
                    {about.studies.display && (
                        <>
                            <Heading
                                as="h2"
                                id={about.studies.title}
                                variant="display-strong-s"
                                marginBottom="m">
                                {about.studies.title}
                            </Heading>
                            <Flex direction="column" fillWidth gap="l" marginBottom="40">
                                {about.studies.institutions.map((institution: any, index: number) => (
                                    <Flex
                                        key={`${institution.name}-${index}`}
                                        fillWidth gap="4" direction="column">
                                        <Text id={institution.name} variant="heading-strong-l">
                                            {institution.name}
                                        </Text>
                                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                                            {institution.description}
                                        </Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}

                    {/* Technical Skills */}
                    {about.technical.display && (
                        <>
                            <Heading
                                as="h2"
                                id={about.technical.title}
                                variant="display-strong-s"
                                marginBottom="40">
                                {about.technical.title}
                            </Heading>
                            <Flex fillWidth wrap gap="12">
                                {competencies.map((competency, index) => (
                                    <Flex
                                        key={index}
                                        alignItems="center"
                                        gap="8"
                                        paddingY="8"
                                        paddingX="12"
                                        radius="m"
                                        border="neutral-medium"
                                        borderStyle="solid-1"
                                        background="surface">
                                        <Icon name={competency.icon} size="s" onBackground="brand-weak" />
                                        <Text variant="body-default-s">{competency.name}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
}
