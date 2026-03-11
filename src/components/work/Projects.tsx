import { getPosts } from '@/app/utils/utils';
import { Flex, Icon, Text } from '@/once-ui/components';

import { ProjectCard } from '@/components';

interface ProjectsProps {
    range?: [number, number?];
    locale: string;
}

export function Projects({ range, locale }: ProjectsProps) {
    let allProjects = getPosts(['src', 'app', '[locale]', 'work', 'projects', locale]);

    const sortedProjects = allProjects.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedProjects = range
        ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
        : sortedProjects;

    if (displayedProjects.length === 0) {
        return (
            <Flex
                fillWidth
                direction="column"
                alignItems="center"
                justifyContent="center"
                gap="m"
                paddingY="xl"
                paddingX="l"
                radius="l"
                border="neutral-medium"
                borderStyle="solid-1"
                background="surface">
                <Flex
                    padding="m"
                    radius="full"
                    background="neutral-medium"
                    alignItems="center"
                    justifyContent="center"
                    style={{ width: '56px', height: '56px' }}>
                    <Icon name="grid" size="m" onBackground="neutral-weak" />
                </Flex>
                <Flex direction="column" gap="4" alignItems="center">
                    <Text variant="heading-strong-m">Projects coming soon</Text>
                    <Text
                        variant="body-default-s"
                        onBackground="neutral-weak"
                        align="center"
                        wrap="balance">
                        I'm currently building some exciting projects. Stay tuned.
                    </Text>
                </Flex>
            </Flex>
        );
    }

    return (
        <Flex
            fillWidth gap="xl" marginBottom="40" paddingX="l"
            direction="column">
            {displayedProjects.map((post) => (
                <ProjectCard
                    key={post.slug}
                    href={`work/${post.slug}`}
                    images={post.metadata.images}
                    title={post.metadata.title}
                    description={post.metadata.summary}
                    content={post.content}
                    avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}/>
            ))}
        </Flex>
    );
}
