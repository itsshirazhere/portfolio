import { Flex, Heading } from '@/once-ui/components';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { baseURL } from '@/app/resources';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getContent } from '@/lib/getContent';

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {
    const { blog } = await getContent();
    const title = blog.title;
    const description = blog.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/blog`,
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

export default async function Blog(
    { params: { locale } }: { params: { locale: string } }
) {
    unstable_setRequestLocale(locale);
    const { person, blog, newsletter } = await getContent();

    return (
        <Flex fillWidth maxWidth="s" direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Blog',
                        headline: blog.title,
                        description: blog.description,
                        url: `https://${baseURL}/blog`,
                        image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
                        author: {
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
            <Heading marginBottom="l" variant="display-strong-s">
                {blog.title}
            </Heading>
            <Flex fillWidth flex={1} direction="column">
                <Posts locale={locale} thumbnail />
            </Flex>
            {newsletter.display && <Mailchimp newsletter={newsletter} />}
        </Flex>
    );
}
