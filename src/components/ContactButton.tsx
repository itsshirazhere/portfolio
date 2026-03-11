'use client';

import React, { useState } from 'react';
import { Button } from '@/once-ui/components';
import { ContactModal } from '@/components/ContactModal';

interface ContactButtonProps {
    children: React.ReactNode;
    defaultSubject?: string;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
    size?: 's' | 'm' | 'l';
    suffixIcon?: string;
    prefixIcon?: string;
    fillWidth?: boolean;
    className?: string;
}

export function ContactButton({
    children,
    defaultSubject = '',
    variant = 'primary',
    size = 'm',
    suffixIcon,
    prefixIcon,
    fillWidth,
    className,
}: ContactButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                variant={variant}
                size={size}
                suffixIcon={suffixIcon}
                prefixIcon={prefixIcon}
                fillWidth={fillWidth}
                className={className}
                onClick={() => setIsOpen(true)}>
                {children}
            </Button>
            <ContactModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                defaultSubject={defaultSubject}
            />
        </>
    );
}
