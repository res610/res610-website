import { LINE_URL, EMAIL_ADDRESS } from '@/constants';

interface CTAButtonProps {
    variant: 'line' | 'email';
    text?: string;
    className?: string;
}

export default function CTAButton({ variant, text, className = '' }: CTAButtonProps) {
    if (variant === 'line') {
        return (
            <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold py-4 px-8 rounded-full transition-colors min-w-[280px] text-lg ${className}`}
            >
                {text || '無料相談はこちら'}
            </a>
        );
    }

    return (
        <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className={`inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-section-bg font-bold py-4 px-8 rounded-full transition-colors min-w-[280px] text-lg ${className}`}
        >
            {text || 'メールで相談する'}
        </a>
    );
}
