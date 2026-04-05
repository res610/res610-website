export interface Problem {
    icon: string;
    text: string;
}

export const PROBLEMS: Problem[] = [
    {
        icon: '📋',
        text: '手作業が多くて、毎日同じ作業に時間を取られている',
    },
    {
        icon: '😰',
        text: '手入力のミスが多く、確認に時間がかかる',
    },
    {
        icon: '⏰',
        text: '本来の仕事に集中したいのに、事務作業に追われている',
    },
    {
        icon: '❓',
        text: '「ホームページ、あった方がいいのは分かるけど…」',
    },
    {
        icon: '📱',
        text: '「SNSで集客したいけど、何から始めれば…」',
    },
];
