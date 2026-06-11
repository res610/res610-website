export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    // 以下は /services/ ページ用の詳細情報
    problems: string[];
    features: { title: string; description: string }[];
    caseIds: string[];
}

export const SERVICES: Service[] = [
    {
        id: 'homepage',
        title: 'ホームページ制作',
        description: '集客に強いホームページを、事業に合わせて制作。SNSやLINEとの連携もサポートします。',
        icon: '🌐',
        problems: [
            'ホームページがない、あっても古くて更新できない',
            'WixなどのHP作成サービスの月額費用が負担',
            'ネットで検索しても自分の店が見つからない',
        ],
        features: [
            {
                title: '事業に合わせた設計',
                description: 'テンプレートの流用ではなく、業種と集客導線に合わせて設計します。スマホ表示にも完全対応。',
            },
            {
                title: 'SEO対策を標準で実施',
                description: '構造化データ・サイトマップ・Google Search Console / Analytics の設定まで、検索で見つかる状態にして納品します。',
            },
            {
                title: '低コストで運用できる構成',
                description: '無料の安定ホスティングを活用し、月額0円で運用できる構成も可能です。LINE公式アカウント・Instagram・アメブロとの連携もサポートします。',
            },
        ],
        caseIds: ['perchamomo', 'o-one', 'yoshi-rentacar'],
    },
    {
        id: 'system',
        title: '業務効率化システム開発',
        description: '紙やExcelの業務をデジタル化。現場に合った仕組みで、ミスと手間を減らします。',
        icon: '⚙️',
        problems: [
            '紙の書類を現場で書いて、事務所に持ち帰って転記している',
            'Excelファイルが増えすぎて、どれが最新かわからない',
            '注文や予約の受付方法がバラバラで手間がかかる',
        ],
        features: [
            {
                title: '現場を見てから作る',
                description: '実際の業務を理解した上で設計します。現場の人がスマホからそのまま使える仕組みにこだわります。',
            },
            {
                title: '必要な機能だけの最小構成',
                description: '大げさなシステムは作りません。今の課題を解決する最小限の仕組みから始めて、必要になったら育てます。',
            },
            {
                title: '低コストで使い続けられる',
                description: '小規模事業者の体力に合わせた運用コストで設計します。導入して終わりではなく、運用も並走します。',
            },
        ],
        caseIds: ['hachimine', 'kintaro'],
    },
    {
        id: 'support',
        title: 'IT導入支援',
        description: '何を使えばいいかわからない方へ。現状を見て、最適なツールと進め方をご提案します。',
        icon: '💡',
        problems: [
            'ITで効率化したいが、何から手をつければいいかわからない',
            'ツールを契約したものの、使いこなせていない',
            '新規事業の立ち上げで、IT周りをまるごと相談したい',
        ],
        features: [
            {
                title: '現状の整理から始める',
                description: 'いきなりツールを勧めません。業務の現状を一緒に整理して、本当に必要なものを見極めます。',
            },
            {
                title: 'ツール選定と導入の伴走',
                description: 'LINE公式アカウント・予約管理・会計など、事業に合ったツールの選定から初期設定・使い方の定着までサポートします。',
            },
            {
                title: '「IT担当」として継続サポート',
                description: '導入後も、困ったときに気軽に相談できるIT担当として並走します。事業の成長に合わせて支援内容を調整します。',
            },
        ],
        caseIds: ['yoshi-rentacar'],
    },
];
