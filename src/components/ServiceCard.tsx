import { Flex, Heading, Text, Icon, Badge } from '@/once-ui/components';
import { ContactButton } from '@/components';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    tags: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, tags }) => {
    return (
        <Flex
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
                        name={icon}
                        size="m"
                        onBackground="brand-strong"
                    />
                </Flex>
                <Heading as="h3" variant="heading-strong-m">
                    {title}
                </Heading>
            </Flex>

            {/* Description */}
            <Text
                variant="body-default-s"
                onBackground="neutral-weak"
                style={{ lineHeight: '1.65', flexGrow: 1 }}>
                {description}
            </Text>

            {/* Tags */}
            <Flex gap="8" wrap>
                {tags.map((tag: string, tIdx: number) => (
                    <Badge
                        key={tIdx}
                        title={tag}
                        arrow={false}
                    />
                ))}
            </Flex>

            {/* CTA */}
            <ContactButton
                variant="secondary"
                size="s"
                suffixIcon="arrowUpRight"
                defaultSubject={`Inquiry: ${title}`}>
                Get in touch
            </ContactButton>
        </Flex>
    );
};
