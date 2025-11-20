// src/data/cases.ts

export type CaseDealType = 'rent' | 'buy';

export type CaseEntry = {
  id: string;
  slug: string;
  title: string;
  lead: string;
  dealType: CaseDealType; // 賃貸 or 購入
  pets: string; // 例: "小型犬1匹", "猫2匹"
  city: string; // 市区
  areaLabel: string; // 「千里中央エリア」など
  publishedAt: string; // "2025-11-23" 形式
  household: string; // 家族構成（例: "夫婦＋小型犬1匹"）
  beforeIssues: string; // 困っていたこと（要約）
  afterOutcome: string; // 解決したこと・結果
  memo?: string; // 補足
};

export const CASES: CaseEntry[] = [
  {
    id: 'case-2025-0001',
    slug: 'senri-chuo-1ldk-small-dog',
    title: '千里中央エリア／共働き夫婦＋小型犬1匹の1LDK探し',
    lead: '共働き夫婦＋小型犬1匹。通勤利便性とペットの散歩環境を両立したい、というご相談から始まったケースです。',
    dealType: 'rent',
    pets: '小型犬1匹',
    city: '豊中市',
    areaLabel: '千里中央エリア',
    publishedAt: '2025-11-23',
    household: '30代共働き夫婦＋小型犬1匹',
    beforeIssues:
      'テレワークと出社が混在する働き方で、通勤時間を短くしつつ、出勤日の散歩時間も確保したいというご相談でした。ペット可物件は見つかるものの、駅から遠すぎたり、周辺の散歩コースがイメージしにくいという不安がありました。',
    afterOutcome:
      '千里中央駅から徒歩圏内で、近くに大きめの公園と動物病院がある1LDKマンションをご契約いただきました。内見時には実際の通勤ルートと散歩コースも一緒に確認し、「ここならしばらく腰を据えて暮らせそう」と納得していただけたケースです。',
    memo:
      'このケースでは、駅距離だけでなく「夜間の帰宅時に歩いていて不安がないか」という視点も重視しました。',
  },
  {
    id: 'case-2025-0002',
    slug: 'takatsuki-cat-2dk',
    title: '高槻市／猫2匹と暮らす静かな2DKへの住み替え',
    lead: '賃貸更新のタイミングで、猫2匹ともう少し静かな環境へ移りたいというご相談から始まったケースです。',
    dealType: 'rent',
    pets: '猫2匹',
    city: '高槻市',
    areaLabel: '高槻エリア',
    publishedAt: '2025-11-23',
    household: '40代お一人暮らし＋猫2匹',
    beforeIssues:
      'これまでの住まいは駅に近い反面、夜間の人通りや騒音が気になり、猫も物音に敏感になっている様子とのことでした。「駅徒歩は多少伸びてもいいので、落ち着いた環境に引っ越したい」というご希望でした。',
    afterOutcome:
      '駅徒歩は少し伸びるものの、周辺が住宅街で落ち着いた雰囲気の2DKをご契約いただきました。猫の上下運動がしやすいよう、間取りや梁の位置も一緒に確認しながら内見を進めたケースです。',
  },
];

export function getAllCases(): CaseEntry[] {
  return [...CASES].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getCaseBySlug(slug: string): CaseEntry | undefined {
  return CASES.find((entry) => entry.slug === slug);
}
