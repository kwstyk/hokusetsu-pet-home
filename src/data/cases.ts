// src/data/cases.ts

// 成約事例データの型
export type Case = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  dealType: 'rent' | 'buy';
  city: string;
  areaLabel: string;
  petSummary: string;    // 例：「猫2匹」「小型犬1匹」
  familyType: string;    // 例：「20代共働き夫婦＋猫2匹」
  mainConcern: string;   // 主な悩み・課題（1行）
  resultSummary: string; // 結果どうなったか（1〜2行）
  createdAt: string;     // "2025-11-20" のような形式でOK
};

// ★ 今はダミー1件だけ。あとで増やせばOK。
const CASES: Case[] = [
  {
    id: '2025-0001',
    slug: 'takatsuki-cat-couple-2ldk',
    title: '高槻市で、猫2匹と静かに暮らせる2LDKを見つけたケース',
    summary:
      '「駅からの近さ」と「猫が走り回れる広さ」のバランスに悩んでいた共働き夫婦が、北摂エリア内で条件を整理し直して住み替えた事例です。',
    dealType: 'rent',
    city: '高槻市',
    areaLabel: '高槻エリア（JR京都線沿線）',
    petSummary: '猫2匹（成猫）',
    familyType: '30代共働き夫婦＋猫2匹',
    mainConcern: '駅近・広さ・防音・ペット条件のバランスが取れる物件が少ない',
    resultSummary:
      '駅徒歩12分・60㎡台・ペット2匹相談可のマンションに決定。猫の運動量と在宅勤務のしやすさの両方を確保できた。',
    createdAt: '2025-11-20',
  },
];

// 一覧取得：新しいものが上に来るようにソート
export function getAllCases(): Case[] {
  return [...CASES].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

// slug から1件取得
export function getCaseBySlug(slug: string): Case | undefined {
  return CASES.find((c) => c.slug === slug);
}
