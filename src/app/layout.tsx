import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { STORE_NAME, STORE_NAME_FULL, STORE_INFO, LINE_URL, INSTAGRAM_URL, EMAIL_ADDRESS } from "@/constants";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

const SITE_DESCRIPTION = 'ITが苦手でも大丈夫。沖縄の個人事業主・小規模事業者の業務をITで効率化。ホームページ制作から業務システム開発まで、現場に合わせた仕組みを作ります。30分無料相談受付中。';

export const metadata: Metadata = {
    title: {
        default: STORE_NAME_FULL,
        template: `%s | ${STORE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    keywords: [
        "沖縄 IT支援",
        "小規模事業者 ホームページ制作",
        "業務効率化 沖縄",
        "IT導入支援 沖縄",
        "個人事業主 IT",
        "紙業務 デジタル化",
        "ホームページ制作 沖縄",
        "業務システム開発",
    ],
    authors: [{ name: STORE_NAME }],
    creator: STORE_NAME,
    publisher: STORE_NAME,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: STORE_NAME_FULL,
        description: SITE_DESCRIPTION,
        url: siteUrl,
        siteName: STORE_NAME_FULL,
        locale: "ja_JP",
        type: "website",
        images: [
            {
                url: `${siteUrl}/images/og-image.png`,
                width: 1200,
                height: 630,
                alt: STORE_NAME_FULL,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: STORE_NAME_FULL,
        description: SITE_DESCRIPTION,
        images: [`${siteUrl}/images/og-image.png`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: `${basePath}/favicon.ico`, sizes: "any" },
            { url: `${basePath}/icon.png`, type: "image/png", sizes: "96x96" },
        ],
        apple: [
            { url: `${basePath}/apple-icon.png`, sizes: "180x180", type: "image/png" },
        ],
    },
    manifest: `${basePath}/manifest.webmanifest`,
    verification: {
        // google: "your-verification-code",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: STORE_NAME,
    description: SITE_DESCRIPTION,
    url: siteUrl,
    email: EMAIL_ADDRESS,
    foundingDate: "2021-06-16",
    founder: {
        "@type": "Person",
        name: "城間敏光",
    },
    image: `${siteUrl}/images/og-image.png`,
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        url: LINE_URL,
        email: EMAIL_ADDRESS,
        availableLanguage: "Japanese",
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "八重瀬町",
        addressRegion: "沖縄県",
        postalCode: STORE_INFO.postalCode.replace('〒', ''),
        addressCountry: "JP",
    },
    areaServed: [
        { "@type": "State", name: "沖縄県" },
    ],
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
    },
    sameAs: [
        LINE_URL,
        INSTAGRAM_URL,
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "ITサービス",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "ホームページ制作",
                    description: "集客に強いホームページを、事業に合わせて制作",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "業務効率化システム開発",
                    description: "紙やExcelの業務をデジタル化し、ミスと手間を削減",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "IT導入支援",
                    description: "現状を見て最適なツールと進め方をご提案",
                },
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <head>
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com; frame-src 'none'; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'"
                />
                {gaId && (
                    <>
                        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
                            }}
                        />
                    </>
                )}
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`antialiased ${zenKakuGothicNew.className}`}>
                {children}
            </body>
        </html>
    );
}
