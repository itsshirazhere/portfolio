'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, Flex, Input, Textarea, Spinner, Text, Button } from '@/once-ui/components';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultSubject?: string;
}

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export function ContactModal({ isOpen, onClose, defaultSubject = '' }: ContactModalProps) {
    const [form, setForm] = useState<FormData>({
        name: '',
        email: '',
        subject: defaultSubject,
        message: '',
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [state, setState] = useState<FormState>('idle');

    useEffect(() => {
        if (isOpen) {
            setForm(prev => ({ ...prev, subject: defaultSubject }));
        }
    }, [isOpen, defaultSubject]);

    const validate = (): Partial<FormData> => {
        const errs: Partial<FormData> = {};
        if (!form.name.trim()) errs.name = 'Name is required';
        if (!form.email.trim()) {
            errs.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            errs.email = 'Please enter a valid email';
        }
        if (!form.subject.trim()) errs.subject = 'Please describe what you need';
        if (!form.message.trim()) errs.message = 'Message is required';
        return errs;
    };

    const handleSubmit = async () => {
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setState('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setState('success');
                setForm({ name: '', email: '', subject: '', message: '' });
                setErrors({});
            } else {
                setState('error');
            }
        } catch {
            setState('error');
        }
    };

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setState('idle');
            setErrors({});
        }, 300);
    };

    const update = (field: keyof FormData) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm(prev => ({ ...prev, [field]: e.target.value }));
            if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
        };

    return (
        <Dialog
            isOpen={isOpen}
            onClose={handleClose}
            title="Let's build something"
            description="Fill in the form and I'll get back to you within 24 hours."
            style={{ maxWidth: '520px', width: '100%' }}>

            {state === 'success' ? (
                <Flex direction="column" gap="l" paddingTop="m" alignItems="center">
                    <Flex
                        padding="m"
                        radius="full"
                        background="brand-medium"
                        alignItems="center"
                        justifyContent="center"
                        style={{ width: '56px', height: '56px' }}>
                        <Text variant="heading-strong-l">✓</Text>
                    </Flex>
                    <Flex direction="column" gap="4" alignItems="center">
                        <Text variant="heading-strong-m">Message sent!</Text>
                        <Text variant="body-default-m" onBackground="neutral-weak" align="center">
                            Thanks for reaching out. I'll be in touch soon.
                        </Text>
                    </Flex>
                    <Button variant="secondary" size="s" onClick={handleClose}>
                        Close
                    </Button>
                </Flex>
            ) : (
                <Flex direction="column" gap="m" paddingTop="m">
                    <Flex gap="m" mobileDirection="column">
                        <Flex flex={1}>
                            <Input
                                id="contact-name"
                                label="Your name"
                                value={form.name}
                                onChange={update('name')}
                                error={errors.name}
                                required
                                style={{ width: '100%' }}
                            />
                        </Flex>
                        <Flex flex={1}>
                            <Input
                                id="contact-email"
                                label="Your email"
                                type="email"
                                value={form.email}
                                onChange={update('email')}
                                error={errors.email}
                                required
                                style={{ width: '100%' }}
                            />
                        </Flex>
                    </Flex>

                    <Input
                        id="contact-subject"
                        label="What do you need help with?"
                        value={form.subject}
                        onChange={update('subject')}
                        error={errors.subject}
                        required
                        style={{ width: '100%' }}
                    />

                    <Textarea
                        id="contact-message"
                        label="Tell me more about your project or idea"
                        lines={5}
                        value={form.message}
                        onChange={update('message') as any}
                        error={errors.message}
                        required
                        style={{ width: '100%' }}
                    />

                    {state === 'error' && (
                        <Text variant="body-default-s" onBackground="danger-weak">
                            Something went wrong. Please try again or email me at shirazyousuf2017@gmail.com
                        </Text>
                    )}

                    <Flex gap="8" justifyContent="flex-end" paddingTop="4">
                        <Button variant="tertiary" size="m" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            size="m"
                            onClick={handleSubmit}
                            disabled={state === 'loading'}
                            suffixIcon={state !== 'loading' ? 'arrowUpRight' : undefined}>
                            {state === 'loading' ? <Spinner size="s" /> : 'Send message'}
                        </Button>
                    </Flex>
                </Flex>
            )}
        </Dialog>
    );
}
