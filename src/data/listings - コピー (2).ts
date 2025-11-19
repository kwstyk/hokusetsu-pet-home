// src/data/listings.ts
// ここに「サイトで扱う物件データ」を全部集めておく。
// v0.1では TypeScript の配列で持って、あとから YAML / JSON に逃がす前提。

export type DealType = 'rent' | 'buy';
export type ListingStatus = 'available' | 'reserved' | 'closed';

export interface Listing {
  id: string;
  slug: string;
  dealType: DealType;
  status: ListingStatus;
  lastCheckedAt: string;

  title: string;
  summary: string;

  prefecture: string;
  city: string;
  areaLabel: string;
  addressSummary: string;
  nearestStation: string;
  stationLine: string;
  stationWalkMinutes: number;

  // ペット条件
  petAllowed: boolean;
  petDetail: {
    petTypes: string[]; // ['dog', 'cat'] など
    maxPets?: number | null;
    sizeLimit?: string | null;
    petDepositRequired?: boolean;
    notes?: string | null;
  };
  petTags: string[];

  // 賃貸用
  rent?: number | null;
  managementFee?: number | null;
  deposit?: number | null;
  keyMoney?: number | null;
  otherInitialCosts?: string | null;
  contractType?: string | null;

  // 購入用
  price?: number | null;
  managementFeeMonthly?: number | null;
  reserveFundMonthly?: number | null;
  ownershipType?: string | null;
  loanExample?: string | null;

  floorPlan: string;
  exclusiveAreaSqm: number;
  buildingType: string;
  builtYear: number;
  floor: number;
  totalFloors: number;
  direction: string;

  equipment: string[];
  environmentSummary: string;

  suitableFor: string[];
  notSuitableFor: string[];

  images: string[];

  createdAt: string;
  updatedAt: string;
}

// ---- v0.1 サンプル物件（トップページに出していた2件をデータ化） ----
// ---- 賃貸 / 購入 共通で使う「たたき台」 ----

// Listing のうち、「ほぼ全ての賃貸物件で共通になる前提の初期値」だと思ってください。
// あとから各物件側で上書きできます。
const BASE_RENT_LISTING = {
  dealType: 'rent' as const,
  status: 'available' as const,
  prefecture: '大阪府',
  petAllowed: true,
};

// 将来の購入物件用。今はまだ使わなくてOK。
const BASE_BUY_LISTING = {
  dealType: 'buy' as const,
  status: 'available' as const,
  prefecture: '大阪府',
  petAllowed: true,
};

const listings: Listing[] = [
  {
    // ★ 共通の初期値を一気に流し込む
    ...BASE_RENT_LISTING,
    id: '2025-0001',
    slug: 'toyonnaka-dog-2ldk-80k',
    lastCheckedAt: '2025-11-19',
    title: '豊中・小型犬1匹向き・駅近2LDKマンション',
    summary:
      '千里中央駅徒歩10分、共働き夫婦＋小型犬1匹が暮らしやすい2LDKです。',

    city: '豊中市',
    areaLabel: '豊中市・千里中央エリア',
    addressSummary: '豊中市○○町',
    nearestStation: '千里中央駅',
    stationLine: '北大阪急行',
    stationWalkMinutes: 10,

    petAllowed: true,
    petDetail: {
      petTypes: ['dog', 'cat'],
      maxPets: 2,
      sizeLimit: '小型犬のみ',
      petDepositRequired: true,
      notes: '猫2匹まで相談可。大型犬不可。',
    },
    petTags: ['小型犬OK', '猫2匹まで', '多頭相談可'],

    rent: 80000,
    managementFee: 5000,
    deposit: 0,
    keyMoney: 80000,
    otherInitialCosts: '退去時クリーニング費用 30,000円 など',
    contractType: '普通借家2年',

    floorPlan: '2LDK',
    exclusiveAreaSqm: 55.2,
    buildingType: 'マンション',
    builtYear: 2005,
    floor: 5,
    totalFloors: 10,
    direction: '南',

    equipment: ['オートロック', 'エレベーター', '宅配ボックス'],
    environmentSummary:
      '近くに○○公園があり、朝夕の散歩もしやすいエリアです。スーパーまで徒歩5分、駅前には動物病院もあります。',

    suitableFor: ['共働き夫婦＋小型犬1匹', '駅徒歩10分以内を重視したい方'],
    notSuitableFor: ['大型犬2頭以上を飼いたい方', '築浅・新築にこだわりたい方'],

    images: [
      '/assets/images/listings/sample-001/01-living.jpg',
      '/assets/images/listings/sample-001/02-kitchen.jpg',
      '/assets/images/listings/sample-001/03-bathroom.jpg',
    ],

    createdAt: '2025-11-10',
    updatedAt: '2025-11-18',
  },
  {
    ...BASE_RENT_LISTING,
    id: '2025-0002',
    slug: 'suita-cat-1ldk-65k',
    lastCheckedAt: '2025-11-19',

    title: '箕面・猫1〜2匹向き・静かな1LDK',
    summary:
      '静かな住宅街にある1LDK。猫とゆっくり暮らしたい方向けのお部屋です。',

    city: '箕面市',
    areaLabel: '箕面市・萱野エリア',
    addressSummary: '箕面市○○',
    nearestStation: '箕面萱野駅',
    stationLine: '北大阪急行',
    stationWalkMinutes: 13,

    petAllowed: true,
    petDetail: {
      petTypes: ['cat'],
      maxPets: 2,
      sizeLimit: null,
      petDepositRequired: true,
      notes: '猫2匹まで。犬は不可。',
    },
    petTags: ['猫OK', '猫2匹まで'],

    rent: 65000,
    managementFee: 3000,
    deposit: 65000,
    keyMoney: 65000,
    otherInitialCosts: '退去時クリーニング費用 25,000円 など',
    contractType: '普通借家2年',

    price: null,
    managementFeeMonthly: null,
    reserveFundMonthly: null,
    ownershipType: null,
    loanExample: null,

    floorPlan: '1LDK',
    exclusiveAreaSqm: 40.0,
    buildingType: 'マンション',
    builtYear: 2015,
    floor: 3,
    totalFloors: 8,
    direction: '東',

    equipment: ['オートロック', '宅配ボックス'],
    environmentSummary:
      '近くに小さな公園があり、静かな環境で猫と暮らせます。徒歩圏内にスーパー・ドラッグストアがあります。',

    suitableFor: ['猫1〜2匹と静かに暮らしたい方'],
    notSuitableFor: ['大型犬と暮らしたい方'],

    images: ['/assets/images/listings/sample-002/01-living.jpg'],

    createdAt: '2025-11-10',
    updatedAt: '2025-11-18',
  },
];

// ---- 便利関数たち ----

export function getAllListings(): Listing[] {
  // 一覧用に、最新更新順で並べて返す
  return [...listings].sort((a, b) =>
    a.updatedAt < b.updatedAt ? 1 : -1,
  );
}

export function getListingsByDealType(type: DealType): Listing[] {
  return getAllListings().filter((l) => l.dealType === type);
}

export function getListingBySlug(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}
