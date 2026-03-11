import { getPosts } from '@/app/utils/utils';
import { Flex, Grid, Icon, Text } from '@/once-ui/components';
import Post from './Post';

interface PostsProps {
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    locale: string;
    thumbnail?: boolean;
}

export function Posts({
    range,
    columns = '1',
    locale = 'en',
    thumbnail = false
}: PostsProps) {
    let allBlogs = getPosts(['src', 'app', '[locale]', 'blog', 'posts', locale]);

    const sortedBlogs = allBlogs.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedBlogs = range
        ? sortedBlogs.slice(
              range[0] - 1,
              range.length === 2 ? range[1] : sortedBlogs.length
          )
        : sortedBlogs;

    if (displayedBlogs.length === 0) {
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
                    <Icon name="book" size="m" onBackground="neutral-weak" />
                </Flex>
                <Flex direction="column" gap="4" alignItems="center">
                    <Text variant="heading-strong-m">No posts yet</Text>
                    <Text
                        variant="body-default-s"
                        onBackground="neutral-weak"
                        align="center"
                        wrap="balance">
                        I'm working on some articles. Check back soon.
                    </Text>
                </Flex>
            </Flex>
        );
    }

    return (
        <Grid
            columns={`repeat(${columns}, 1fr)`} mobileColumns="1col"
            fillWidth marginBottom="40" gap="m">
            {displayedBlogs.map((post) => (
                <Post
                    key={post.slug}
                    post={post}
                    thumbnail={thumbnail}
                />
            ))}
        </Grid>
    );
}
