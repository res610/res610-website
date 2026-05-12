export interface CaseStudy {
    id: string;
    companyName: string;
    industry: string;
    before: string;
    summary: string;
    description: string;
    services: string[];
    result: string;
    image?: string;
    note?: string;
    since?: string;
    contractAmount?: string;
    siteUrl?: string;
    // 詳細ページ追加項目（すべて optional。値が無ければ非表示）
    period?: string;           // 実施期間（例: 2023年4月〜現在 / 2024年3月〜6月）
    team?: string;             // 体制（例: 城間1名で対応 / ディレクター1名・エンジニア2名）
    tools?: string[];          // 使用ツール（例: ['Next.js', 'LINE公式', 'Google Looker Studio']）
    keyPoints?: string[];      // 取り組みのポイント（箇条書き）
    testimonial?: {
        quote: string;
        author: string;
        role?: string;         // 役職や立場（例: 代表 / 店主）
    };
}

// 新着順（新しい案件が先頭）
export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'yoshi-rentacar',
        companyName: 'ヨシレンタカー',
        industry: 'レンタカー',
        before: '新規事業、ITは何から手をつければ…',
        summary: '事業立ち上げからIT全般を継続サポート',
        description: '新規事業の立ち上げから、ホームページ制作・LINE公式アカウント・SNS運用・SEO対策まで一括で支援。事業の成長に合わせてサポートを継続しています。',
        services: ['ホームページ制作', 'LINE導入', 'SNS連携', 'SEO対策'],
        result: '事業立ち上げ時からIT環境を整備し、集客基盤を構築',
        image: '/images/cases/case-yoshi-rentacar.webp',
        since: '2023年〜',
        siteUrl: 'https://yoshi-rentacar.jp/',
        // ↓ レイアウト確認用サンプル。本データに差し替えてください
        period: '2023年〜現在',
        team: '城間1名で対応',
        tools: ['Next.js', 'LINE公式アカウント', 'Instagram', 'Google Search Console'],
        keyPoints: [
            '事業立ち上げ前のヒアリングで必要なIT要素を洗い出し',
            'ホームページ・LINE・SNSを段階的に導入し、集客導線を構築',
            '事業成長に合わせて継続的にサポート内容を調整',
        ],
        testimonial: {
            quote: '★レイアウト確認用ダミー★ 新規事業立ち上げで何から手をつければよいか分からなかったが、必要な順に整理してもらえて助かった。',
            author: 'サンプル太郎',
            role: '代表（差し替え用ダミー）',
        },
    },
    {
        id: 'hachimine',
        companyName: '鉢嶺総合仮設株式会社',
        industry: '建設',
        before: '紙の安全書類、現場で書いて提出が大変…',
        summary: '紙の安全書類をスマホ化し、提出率100%を達成',
        description: '紙ベースで管理していた安全書類の提出業務をスマホ対応のシステムに移行。現場からスマホで入力できる仕組みを構築し、提出率100%を実現しました。',
        services: ['業務効率化システム開発'],
        result: '安全書類の提出率100%を達成',
        contractAmount: '月額98,000円',
        note: '※基幹システムのため非公開',
    },
    {
        id: 'perchamomo',
        companyName: 'Percha MOMO',
        industry: 'ネイルサロン',
        before: 'Wixの月額費用が負担、もっと安くならない？',
        summary: 'Wixから移行し、月額0円で運用可能なサイトを構築',
        description: 'Wixで運用していたサイトをリプレイスし、月額費用ゼロで運用できるホームページを構築。アメブロやInstagramとの連携で集客導線を整備しました。',
        services: ['ホームページ制作', 'アメブロ連携', 'Instagram連携'],
        result: '月額0円で運用可能なサイトに移行',
        siteUrl: 'https://perchamomo.com/',
    },
    {
        id: 'o-one',
        companyName: '01（O-ONE）',
        industry: 'メンズ専門眉毛ワックスサロン',
        before: '個人サロン、ネットで見つけてもらえない…',
        summary: 'SEO対策済みのホームページで集客を強化',
        description: 'メンズ専門の眉毛ワックスサロン向けに、SEO対策を施したホームページを制作。LINE公式アカウントの運用サポートも行い、個人サロンの課題解決を支援しました。',
        services: ['ホームページ制作', 'SEO対策', 'LINE運用サポート'],
        result: 'SEO対策済みHPで集客基盤を構築',
        siteUrl: 'https://01-oone.com/',
    },
    {
        id: 'kintaro',
        companyName: '沖縄そば金太郎',
        industry: '飲食店',
        before: '注文受付がバラバラで手間がかかる…',
        summary: '低コストで注文受付システムを導入',
        description: '注文受付の仕組みを低コストで構築し、業務の効率化を支援しました。',
        services: ['業務効率化システム開発'],
        result: '低コストで注文受付の仕組みを導入',
        note: '※現在は別システムへ移行済み',
    },
];
