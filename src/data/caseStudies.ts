export interface CaseStudy {
    id: string;
    companyName: string;
    industry: string;
    summary: string;
    description: string;
    services: string[];
    result: string;
    image: string;
    note?: string;
    since?: string;
    contractAmount?: string;
}

// 新着順（新しい案件が先頭）
export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'yoshi-rentacar',
        companyName: 'ヨシレンタカー',
        industry: 'レンタカー',
        summary: '事業立ち上げからIT全般を継続サポート',
        description: '新規事業の立ち上げから、ホームページ制作・LINE公式アカウント・SNS運用・SEO対策まで一括で支援。事業の成長に合わせてサポートを継続しています。',
        services: ['ホームページ制作', 'LINE導入', 'SNS連携', 'SEO対策'],
        result: '事業立ち上げ時からIT環境を整備し、集客基盤を構築',
        image: '/images/cases/case-yoshi-rentacar.webp',
        since: '2023年〜',
    },
    {
        id: 'hachimine',
        companyName: '鉢嶺総合仮設株式会社',
        industry: '建設',
        summary: '紙の安全書類をスマホ化し、提出率100%を達成',
        description: '紙ベースで管理していた安全書類の提出業務をスマホ対応のシステムに移行。現場からスマホで入力できる仕組みを構築し、提出率100%を実現しました。',
        services: ['業務効率化システム開発'],
        result: '安全書類の提出率100%を達成',
        image: '/images/cases/case-hachimine.webp',
        contractAmount: '月額98,000円',
    },
    {
        id: 'perchamomo',
        companyName: 'Percha MOMO',
        industry: 'ネイルサロン',
        summary: 'Wixから移行し、月額0円で運用可能なサイトを構築',
        description: 'Wixで運用していたサイトをリプレイスし、月額費用ゼロで運用できるホームページを構築。アメブロやInstagramとの連携で集客導線を整備しました。',
        services: ['ホームページ制作', 'アメブロ連携', 'Instagram連携'],
        result: '月額0円で運用可能なサイトに移行',
        image: '/images/cases/case-perchamomo.webp',
    },
    {
        id: 'o-one',
        companyName: '01（O-ONE）',
        industry: 'メンズ専門眉毛ワックスサロン',
        summary: 'SEO対策済みのホームページで集客を強化',
        description: 'メンズ専門の眉毛ワックスサロン向けに、SEO対策を施したホームページを制作。LINE公式アカウントの運用サポートも行い、個人サロンの課題解決を支援しました。',
        services: ['ホームページ制作', 'SEO対策', 'LINE運用サポート'],
        result: 'SEO対策済みHPで集客基盤を構築',
        image: '/images/cases/case-o-one.webp',
    },
    {
        id: 'kintaro',
        companyName: '沖縄そば金太郎',
        industry: '飲食店',
        summary: '低コストで注文受付システムを導入',
        description: '注文受付の仕組みを低コストで構築し、業務の効率化を支援しました。',
        services: ['業務効率化システム開発'],
        result: '低コストで注文受付の仕組みを導入',
        image: '/images/cases/case-kintaro.webp',
        note: '※現在は別システムへ移行済み',
    },
];
