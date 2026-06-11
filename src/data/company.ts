import { STORE_INFO } from '@/constants';

// 会社概要ページ用データ

// ─── 会社概要テーブル ───
export const COMPANY_OVERVIEW = [
    { label: '会社名', value: '合同会社RES' },
    { label: '代表者', value: '代表社員 城間 敏光' },
    { label: '設立', value: '令和3年（2021年）6月16日' },
    { label: '所在地', value: `${STORE_INFO.postalCode} ${STORE_INFO.address}` },
    { label: '事業内容', value: 'システム開発 / SES / Web制作 / デジタルマーケティング / ITコンサルティング' },
    { label: '従業員数', value: '3名（業務委託パートナー含む）' },
    { label: '顧問税理士', value: '青葉総合税理士法人' },
    { label: '顧問司法書士', value: '司法書士法人ミカタ' },
    { label: '電話番号', value: STORE_INFO.phone },
    // TODO: 適格請求書発行事業者登録番号（未確定・確定後に追記）
    // { label: '登録番号', value: '' },
    // TODO: 取引銀行（未確定・確定後に追記）
    // { label: '取引銀行', value: '' },
    // ※資本金は非掲載方針（代表指示 2026-06-11）
];

// ─── 沿革 ───
// 当面は設立のみ掲載（代表指示 2026-06-11）。節目が増えたら追記する
export const COMPANY_HISTORY = [
    { date: '令和3年（2021年）6月', event: '沖縄県島尻郡八重瀬町にて合同会社RESを設立' },
];

// ─── 主要取引先（この順序で表示） ───
// TODO: 各社の社名掲載許諾の確認状況を代表に確認（リンクは先方サイトの掲載許諾未確認のため張らない）
export const MAJOR_CLIENTS = [
    '株式会社メディアシステム',
    '鉢嶺総合仮設株式会社',
    'ヨシレンタカー',
    '01 -オーワン- メンズ総合美容サロン',
];
