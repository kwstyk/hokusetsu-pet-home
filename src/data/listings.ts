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
  address?: string; // ★追加：所在地（任意）

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

  // ================================
  // ペット偏愛用フィールド
  // ================================

  /** 担当者の主観コメント（物件の「推しポイント」を1〜3行で） */
  agentComment?: string;

  /** ペットと暮らすうえでのメリット（箇条書き推奨） */
  petPros?: string[];

  /** ペットと暮らすうえでの注意点・弱点（箇条書き推奨） */
  petCons?: string[];
}

// ---- ダミー含めたテスト用物件（30件） ----

const listings: Listing[] = [
  {
    id: '2025-0001',
    slug: 'toyonnaka-dog-2ldk-80k',
    dealType: 'rent',
    status: 'available',
    lastCheckedAt: '2025-11-19',

    title: '豊中・小型犬1匹向き・駅近2LDKマンション',
    summary:
      '千里中央駅徒歩10分、共働き夫婦＋小型犬1匹が暮らしやすい2LDKです。',

    prefecture: '大阪府',
    city: '豊中市',
    areaLabel: '豊中市・千里中央エリア',
    addressSummary: '豊中市○○町',
    nearestStation: '千里中央駅',
    stationLine: '北大阪急行',
    stationWalkMinutes: 10,
    address: '大阪府豊中市三国２丁目２番',

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

    price: null,
    managementFeeMonthly: null,
    reserveFundMonthly: null,
    ownershipType: null,
    loanExample: null,

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
      '/assets/images/listings/sample-001/04.jpg',
      '/assets/images/listings/sample-001/05.jpg',
      '/assets/images/listings/sample-001/06.jpg',
    ],

    createdAt: '2025-11-10',
    updatedAt: '2025-11-18',
  },
  {
    id: '2025-0002',
    slug: 'minoh-cat-1ldk-65k',
    dealType: 'rent',
    status: 'available',
    lastCheckedAt: '2025-11-19',

    title: '箕面・猫1〜2匹向き・静かな1LDK',
    summary:
      '静かな住宅街にある1LDK。猫とゆっくり暮らしたい方向けのお部屋です。',

    prefecture: '大阪府',
    city: '箕面市',
    areaLabel: '箕面市・萱野エリア',
    addressSummary: '箕面市○○',
    nearestStation: '箕面萱野駅',
    stationLine: '北大阪急行',
    address: '大阪府箕面市萱野２丁目6-1',
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

    images: [
      '/assets/images/listings/sample-002/01.jpg',
      '/assets/images/listings/sample-002/02.jpg',
      '/assets/images/listings/sample-002/03.jpg',
      '/assets/images/listings/sample-002/04.jpg',
    ],

    createdAt: '2025-11-10',
    updatedAt: '2025-11-18',

    agentComment:
      '猫1〜2匹と静かに暮らしたい方向けのお部屋です。リビングの梁まわりに棚を足すだけで、キャットタワーいらずの上下運動スペースが作れそうなのが推しポイント。',

    petPros: [
      '車通りの少ない住宅街側にバルコニーが向いていて、窓を少し開けても音ストレスが少なめ',
      '梁が出ているのでキャットウォークを後付けしやすい間取り',
    ],

    petCons: [
      '共用廊下が外廊下で、風の強い日は音が出やすい',
      'エレベーターがコンパクトなので、大型犬2頭同時だと少し窮屈かもしれません',
    ],
  },

  // ---- ここからダミー物件（rent中心で増量） ----

  {
    id: '2025-0003',
    slug: 'suita-dog-1ldk-75k',
    dealType: 'rent',
    status: 'available',
    lastCheckedAt: '2025-11-20',

    title: '吹田・小型犬2匹まで相談可・1LDKマンション',
    summary:
      '江坂駅徒歩7分、共働き世帯と小型犬2匹までを想定した1LDK。仕事と暮らしのバランスを取りやすい立地です。',

    prefecture: '大阪府',
    city: '吹田市',
    areaLabel: '吹田市・江坂エリア',
    addressSummary: '吹田市江坂町○丁目',
    nearestStation: '江坂駅',
    stationLine: '大阪メトロ御堂筋線',
    stationWalkMinutes: 7,
    address: '大阪府吹田市江坂町１丁目２−３',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog'],
      maxPets: 2,
      sizeLimit: '小型犬のみ',
      petDepositRequired: true,
      notes: '1匹につき賃料2,000円UP。共用部での抱っこ移動ルールあり。',
    },
    petTags: ['小型犬OK', '2匹まで', '駅近'],

    rent: 75000,
    managementFee: 6000,
    deposit: 75000,
    keyMoney: 150000,
    otherInitialCosts: 'ペット登録料 20,000円（初回のみ）',
    contractType: '普通借家2年',

    price: null,
    managementFeeMonthly: null,
    reserveFundMonthly: null,
    ownershipType: null,
    loanExample: null,

    floorPlan: '1LDK',
    exclusiveAreaSqm: 42.5,
    buildingType: 'マンション',
    builtYear: 2012,
    floor: 6,
    totalFloors: 10,
    direction: '南東',

    equipment: ['オートロック', 'エレベーター', '宅配ボックス', 'インターネット無料'],
    environmentSummary:
      '江坂公園まで徒歩5分。夜でも人通りがあり、帰りが遅くなりがちな方でも安心感のあるエリアです。',

    suitableFor: ['共働きカップル', '小型犬2匹までの多頭飼育をしたい方'],
    notSuitableFor: ['大型犬と暮らしたい方', '静かな郊外エリアを好む方'],

    images: [
      '/assets/images/listings/sample-003/01.jpg',
      '/assets/images/listings/sample-003/02.jpg',
      '/assets/images/listings/sample-003/03.jpg',
    ],

    createdAt: '2025-11-11',
    updatedAt: '2025-11-19',
  },
  {
    id: '2025-0004',
    slug: 'ibaraki-large-dog-3ldk-120k',
    dealType: 'rent',
    status: 'available',
    lastCheckedAt: '2025-11-20',

    title: '茨木・大型犬1匹相談可・ゆとりの3LDK',
    summary:
      '茨木市の落ち着いた住宅街にある3LDK。大型犬1匹まで相談可能で、ファミリー向けの間取りです。',

    prefecture: '大阪府',
    city: '茨木市',
    areaLabel: '茨木市・南茨木エリア',
    addressSummary: '茨木市○○台',
    nearestStation: '南茨木駅',
    stationLine: '阪急京都線',
    stationWalkMinutes: 15,
    address: '大阪府茨木市水尾２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog'],
      maxPets: 1,
      sizeLimit: '大型犬1匹まで',
      petDepositRequired: true,
      notes: '体重30kg程度まで相談可。共有部でのマナー厳しめ。',
    },
    petTags: ['大型犬OK', 'ファミリー向き', '駐車場あり'],

    rent: 120000,
    managementFee: 8000,
    deposit: 120000,
    keyMoney: 240000,
    otherInitialCosts: 'ペットクリーニング特約あり（退去時）',
    contractType: '普通借家2年',

    price: null,
    managementFeeMonthly: null,
    reserveFundMonthly: null,
    ownershipType: null,
    loanExample: null,

    floorPlan: '3LDK',
    exclusiveAreaSqm: 78.3,
    buildingType: 'マンション',
    builtYear: 2000,
    floor: 4,
    totalFloors: 7,
    direction: '南西',

    equipment: ['オートロック', 'エレベーター', '駐車場', '宅配ボックス'],
    environmentSummary:
      '周辺は低層住宅が多く、朝夕の散歩コースが取りやすいエリアです。徒歩圏に大型スーパーと動物病院があります。',

    suitableFor: ['子ども＋大型犬と暮らしたいファミリー', '車を所有している世帯'],
    notSuitableFor: ['駅徒歩5分以内を絶対条件にしたい方'],

    images: [
      '/assets/images/listings/sample-004/01.jpg',
      '/assets/images/listings/sample-004/02.jpg',
      '/assets/images/listings/sample-004/03.jpg',
    ],

    createdAt: '2025-11-11',
    updatedAt: '2025-11-19',

    agentComment:
      '「大型犬可」でここまで間取りと周辺環境のバランスが良い物件は多くありません。共用部のマナーを守っていただけるご家庭にぜひ。',

    petPros: [
      'エレベーターが広めで、大型犬も無理なく乗り降りしやすい',
      '徒歩10分圏内に2箇所の公園があり、散歩ルートに変化をつけやすい',
    ],
    petCons: [
      '駅までやや距離があるため、毎日の電車通勤には少し根気が必要',
      'ペット可戸数が限られているため、今後の空室待ちが出る可能性あり',
    ],
  },
  {
    id: '2025-0005',
    slug: 'takatsuki-cat-2dk-70k',
    dealType: 'rent',
    status: 'reserved',
    lastCheckedAt: '2025-11-18',

    title: '高槻・猫2匹まで・レトロな2DK',
    summary:
      '築年数は経っていますが、日当たりと風通しの良さが魅力のレトロ2DK。猫2匹まで相談できます。',

    prefecture: '大阪府',
    city: '高槻市',
    areaLabel: '高槻市・城北エリア',
    addressSummary: '高槻市○○町',
    nearestStation: '高槻市駅',
    stationLine: '阪急京都線',
    stationWalkMinutes: 12,
    address: '大阪府高槻市城北町２丁目３−５',

    petAllowed: true,
    petDetail: {
      petTypes: ['cat'],
      maxPets: 2,
      sizeLimit: null,
      petDepositRequired: true,
      notes: '猫専門。爪とぎ対策として一部補強済み。',
    },
    petTags: ['猫OK', '2匹まで', 'レトロ'],

    rent: 70000,
    managementFee: 2000,
    deposit: 70000,
    keyMoney: 70000,
    otherInitialCosts: '退去時クリーニング費用 28,000円',
    contractType: '普通借家2年',

    price: null,
    managementFeeMonthly: null,
    reserveFundMonthly: null,
    ownershipType: null,
    loanExample: null,

    floorPlan: '2DK',
    exclusiveAreaSqm: 48.0,
    buildingType: 'マンション',
    builtYear: 1988,
    floor: 2,
    totalFloors: 5,
    direction: '南',

    equipment: ['室内洗濯機置き場', 'エアコン', 'ガスコンロ設置可'],
    environmentSummary:
      '駅からの道のりにお店が多く、帰りに買い物を済ませやすい立地。周辺は落ち着いた住宅街です。',

    suitableFor: ['猫と静かに暮らしたい単身〜2人暮らしの方'],
    notSuitableFor: ['最新設備や築浅にこだわる方'],

    images: [
      '/assets/images/listings/sample-005/01.jpg',
      '/assets/images/listings/sample-005/02.jpg',
    ],

    createdAt: '2025-11-09',
    updatedAt: '2025-11-18',
  },
  {
    id: '2025-0006',
    slug: 'toyonnaka-compact-1k-55k',
    dealType: 'rent',
    status: 'available',
    lastCheckedAt: '2025-11-21',

    title: '豊中・小型犬1匹まで・コンパクト1K',
    summary:
      '初めての一人暮らし＋小型犬1匹を想定したコンパクト1K。家賃を抑えつつペットとの暮らしを叶えたい方向けです。',

    prefecture: '大阪府',
    city: '豊中市',
    areaLabel: '豊中市・庄内エリア',
    addressSummary: '豊中市○○',
    nearestStation: '庄内駅',
    stationLine: '阪急宝塚線',
    stationWalkMinutes: 8,
    address: '大阪府豊中市庄内西町３丁目１−２',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog'],
      maxPets: 1,
      sizeLimit: '小型犬のみ',
      petDepositRequired: true,
      notes: 'しつけ済みの小型犬限定。鳴き声トラブルに注意。',
    },
    petTags: ['小型犬OK', '初めての一人暮らし向き'],

    rent: 55000,
    managementFee: 3000,
    deposit: 55000,
    keyMoney: 0,
    otherInitialCosts: 'ペット消臭施工費 15,000円（任意）',
    contractType: '普通借家2年',

    price: null,
    managementFeeMonthly: null,
    reserveFundMonthly: null,
    ownershipType: null,
    loanExample: null,

    floorPlan: '1K',
    exclusiveAreaSqm: 24.0,
    buildingType: 'マンション',
    builtYear: 2010,
    floor: 3,
    totalFloors: 6,
    direction: '東',

    equipment: [
      'オートロック',
      'エアコン',
      'TVモニター付きインターホン',
      '宅配ボックス',
    ],
    environmentSummary:
      '駅前にスーパーとドラッグストアがあり、生活利便性は高め。周辺には小さな公園も点在しています。',

    suitableFor: ['初めての一人暮らし＋小型犬', '家賃を抑えたい社会人'],
    notSuitableFor: ['中型犬以上を検討している方'],

    images: [
      '/assets/images/listings/sample-006/01.jpg',
      '/assets/images/listings/sample-006/02.jpg',
      '/assets/images/listings/sample-006/03.jpg',
    ],

    createdAt: '2025-11-12',
    updatedAt: '2025-11-21',
  },
  {
    id: '2025-0007',
    slug: 'minoh-park-2ldk-85k',
    dealType: 'rent',
    status: 'available',
    lastCheckedAt: '2025-11-21',

    title: '箕面・公園徒歩3分・中型犬までOKの2LDK',
    summary:
      '箕面の公園近く、中型犬まで相談可能な2LDK。自然の多い環境でのびのびと暮らしたい方向け。',

    prefecture: '大阪府',
    city: '箕面市',
    areaLabel: '箕面市・桜井エリア',
    addressSummary: '箕面市○○',
    nearestStation: '桜井駅',
    stationLine: '阪急箕面線',
    stationWalkMinutes: 9,
    address: '大阪府箕面市桜井２丁目４−１',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog'],
      maxPets: 2,
      sizeLimit: '中型犬まで',
      petDepositRequired: true,
      notes: '合計体重20kg程度まで。多頭は要相談。',
    },
    petTags: ['中型犬OK', '公園近く', '2LDK'],

    rent: 85000,
    managementFee: 5000,
    deposit: 85000,
    keyMoney: 170000,
    otherInitialCosts: 'ペット登録料 10,000円',
    contractType: '定期借家3年',

    price: null,
    managementFeeMonthly: null,
    reserveFundMonthly: null,
    ownershipType: null,
    loanExample: null,

    floorPlan: '2LDK',
    exclusiveAreaSqm: 60.0,
    buildingType: 'マンション',
    builtYear: 2008,
    floor: 2,
    totalFloors: 5,
    direction: '南',

    equipment: ['オートロック', '宅配ボックス', '追い焚き機能', 'システムキッチン'],
    environmentSummary:
      '徒歩3分ほどの場所に大きめの公園があり、朝夕の散歩にぴったり。周辺は車通りも比較的少なめです。',

    suitableFor: ['自然の多い環境で暮らしたい方', '中型犬との暮らしを重視したい方'],
    notSuitableFor: ['駅近・都会的な生活を求める方'],

    images: [
      '/assets/images/listings/sample-007/01.jpg',
      '/assets/images/listings/sample-007/02.jpg',
    ],

    createdAt: '2025-11-13',
    updatedAt: '2025-11-21',
  },
  {
    id: '2025-0008',
    slug: 'suita-cat-2ldk-90k',
    dealType: 'rent',
    status: 'available',
    lastCheckedAt: '2025-11-20',

    title: '吹田・猫専用マンション・2LDK角部屋',
    summary:
      '全戸猫飼育を前提に設計された猫専用マンション。角部屋で窓も多く、上下運動スペースも作りやすい2LDKです。',

    prefecture: '大阪府',
    city: '吹田市',
    areaLabel: '吹田市・千里丘エリア',
    addressSummary: '吹田市○○',
    nearestStation: '千里丘駅',
    stationLine: 'JR京都線',
    stationWalkMinutes: 11,
    address: '大阪府吹田市千里丘２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['cat'],
      maxPets: 3,
      sizeLimit: null,
      petDepositRequired: true,
      notes: '猫のみ飼育可。頭数3匹まで。壁面一部に爪とぎパネル設置済み。',
    },
    petTags: ['猫OK', '3匹まで', '猫専用マンション'],

    rent: 90000,
    managementFee: 6000,
    deposit: 90000,
    keyMoney: 180000,
    otherInitialCosts: '猫用設備維持費 月額1,000円',
    contractType: '普通借家2年',

    price: null,
    managementFeeMonthly: null,
    reserveFundMonthly: null,
    ownershipType: null,
    loanExample: null,

    floorPlan: '2LDK',
    exclusiveAreaSqm: 58.0,
    buildingType: 'マンション',
    builtYear: 2018,
    floor: 4,
    totalFloors: 6,
    direction: '南東',

    equipment: [
      'オートロック',
      'エレベーター',
      '宅配ボックス',
      'キャットウォーク下地',
    ],
    environmentSummary:
      '駅からの道のりはフラットで歩きやすく、周辺は静かな住宅街。近くに24時間営業のスーパーがあります。',

    suitableFor: ['猫2〜3匹と暮らしたい方', '猫用設備にこだわりたい方'],
    notSuitableFor: ['犬と暮らしたい方'],

    images: [
      '/assets/images/listings/sample-008/01.jpg',
      '/assets/images/listings/sample-008/02.jpg',
      '/assets/images/listings/sample-008/03.jpg',
    ],

    createdAt: '2025-11-12',
    updatedAt: '2025-11-20',
  },
  {
    id: '2025-0009',
    slug: 'ibaraki-small-dog-1ldk-68k',
    dealType: 'rent',
    status: 'available',
    lastCheckedAt: '2025-11-19',

    title: '茨木・小型犬1匹・駅徒歩5分の1LDK',
    summary:
      '南茨木駅徒歩5分、通勤のしやすさとペットとの暮らしを両立できる1LDK。',

    prefecture: '大阪府',
    city: '茨木市',
    areaLabel: '茨木市・南茨木エリア',
    addressSummary: '茨木市○○',
    nearestStation: '南茨木駅',
    stationLine: '阪急京都線',
    stationWalkMinutes: 5,
    address: '大阪府茨木市沢良宜西１丁目２−３',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog'],
      maxPets: 1,
      sizeLimit: '小型犬のみ',
      petDepositRequired: true,
      notes: '1匹のみ。無駄吠えが多い子は不可。',
    },
    petTags: ['小型犬OK', '駅近5分', '1LDK'],

    rent: 68000,
    managementFee: 4000,
    deposit: 68000,
    keyMoney: 68000,
    otherInitialCosts: null,
    contractType: '普通借家2年',

    price: null,
    managementFeeMonthly: null,
    reserveFundMonthly: null,
    ownershipType: null,
    loanExample: null,

    floorPlan: '1LDK',
    exclusiveAreaSqm: 38.0,
    buildingType: 'マンション',
    builtYear: 2014,
    floor: 5,
    totalFloors: 9,
    direction: '西',

    equipment: ['オートロック', '宅配ボックス', '浴室乾燥機'],
    environmentSummary:
      '駅近ながら、線路からは1本中に入った立地で音は比較的落ち着いています。散歩コースとして使いやすい遊歩道も近くにあります。',

    suitableFor: ['通勤しやすさを重視する社会人＋小型犬1匹'],
    notSuitableFor: ['多頭飼いをしたい方'],

    images: [
      '/assets/images/listings/sample-009/01.jpg',
      '/assets/images/listings/sample-009/02.jpg',
    ],

    createdAt: '2025-11-14',
    updatedAt: '2025-11-19',
  },
  {
    id: '2025-0010',
    slug: 'takatsuki-cat-1r-52k',
    dealType: 'rent',
    status: 'closed',
    lastCheckedAt: '2025-11-17',

    title: '高槻・猫1匹まで・コンパクト1R【募集終了】',
    summary:
      '猫1匹まで相談可能だったコンパクトなワンルーム。現在は募集終了していますが、条件の似た物件探しの参考に。',

    prefecture: '大阪府',
    city: '高槻市',
    areaLabel: '高槻市・北エリア',
    addressSummary: '高槻市○○',
    nearestStation: '高槻駅',
    stationLine: 'JR京都線',
    stationWalkMinutes: 9,
    address: '大阪府高槻市白梅町２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['cat'],
      maxPets: 1,
      sizeLimit: null,
      petDepositRequired: true,
      notes: '完全室内飼い前提。',
    },
    petTags: ['猫OK', '1匹まで'],

    rent: 52000,
    managementFee: 3000,
    deposit: 52000,
    keyMoney: 52000,
    otherInitialCosts: null,
    contractType: '普通借家2年',

    price: null,
    managementFeeMonthly: null,
    reserveFundMonthly: null,
    ownershipType: null,
    loanExample: null,

    floorPlan: '1R',
    exclusiveAreaSqm: 22.0,
    buildingType: 'マンション',
    builtYear: 2007,
    floor: 4,
    totalFloors: 8,
    direction: '南',

    equipment: ['オートロック', 'エレベーター'],
    environmentSummary:
      '駅からの道のりは明るく、人通りも適度にあるため夜道でも安心感があります。',

    suitableFor: ['単身＋猫1匹', '駅近重視の方'],
    notSuitableFor: ['広さを求める方', '犬と暮らしたい方'],

    images: [
      '/assets/images/listings/sample-010/01.jpg',
    ],

    createdAt: '2025-11-05',
    updatedAt: '2025-11-17',
  },

  // ---- ここからも rent を中心に追加（〜0015） ----

  {
    id: '2025-0011',
    slug: 'toyonnaka-2ldk-95k-park-side',
    dealType: 'rent',
    status: 'available',
    lastCheckedAt: '2025-11-22',

    title: '豊中・服部緑地そば・小型犬と暮らす2LDK',
    summary:
      '服部緑地まで徒歩5分。毎日の散歩コースがすでに完成しているような立地の2LDKです。',

    prefecture: '大阪府',
    city: '豊中市',
    areaLabel: '豊中市・服部緑地エリア',
    addressSummary: '豊中市○○',
    nearestStation: '緑地公園駅',
    stationLine: '北大阪急行',
    stationWalkMinutes: 8,
    address: '大阪府豊中市寺内２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog'],
      maxPets: 2,
      sizeLimit: '小型犬2匹まで',
      petDepositRequired: true,
      notes: '服部緑地利用マナーを守っていただける方のみ。',
    },
    petTags: ['小型犬OK', '公園近く', '2LDK'],

    rent: 95000,
    managementFee: 7000,
    deposit: 95000,
    keyMoney: 190000,
    otherInitialCosts: null,
    contractType: '普通借家2年',

    price: null,
    managementFeeMonthly: null,
    reserveFundMonthly: null,
    ownershipType: null,
    loanExample: null,

    floorPlan: '2LDK',
    exclusiveAreaSqm: 61.0,
    buildingType: 'マンション',
    builtYear: 2016,
    floor: 3,
    totalFloors: 7,
    direction: '南',

    equipment: ['オートロック', 'エレベーター', '宅配ボックス', '床暖房'],
    environmentSummary:
      '服部緑地が生活圏に入り、休日だけでなく平日の朝夕の散歩も楽しめるロケーションです。',

    suitableFor: ['小型犬との散歩を日課にしたい方', '共働き＋ペット世帯'],
    notSuitableFor: ['公園周辺の人通りが気になる方'],

    images: [
      '/assets/images/listings/sample-011/01.jpg',
      '/assets/images/listings/sample-011/02.jpg',
    ],

    createdAt: '2025-11-15',
    updatedAt: '2025-11-22',
  },
  {
    id: '2025-0012',
    slug: 'suita-3ldk-110k-family',
    dealType: 'rent',
    status: 'reserved',
    lastCheckedAt: '2025-11-21',

    title: '吹田・ファミリー＋小型犬向け3LDK',
    summary:
      '小学校が徒歩圏内にあるファミリー向け3LDK。小型犬1〜2匹まで相談可能です。',

    prefecture: '大阪府',
    city: '吹田市',
    areaLabel: '吹田市・山田エリア',
    addressSummary: '吹田市○○',
    nearestStation: '山田駅',
    stationLine: '阪急千里線',
    stationWalkMinutes: 14,
    address: '大阪府吹田市山田西２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog'],
      maxPets: 2,
      sizeLimit: '小型犬のみ',
      petDepositRequired: true,
      notes: '小さなお子さまがいる世帯が多く、共用部でのマナーに配慮が必要です。',
    },
    petTags: ['小型犬OK', 'ファミリー向き', '学校近く'],

    rent: 110000,
    managementFee: 8000,
    deposit: 110000,
    keyMoney: 220000,
    otherInitialCosts: null,
    contractType: '普通借家2年',

    price: null,
    managementFeeMonthly: null,
    reserveFundMonthly: null,
    ownershipType: null,
    loanExample: null,

    floorPlan: '3LDK',
    exclusiveAreaSqm: 79.0,
    buildingType: 'マンション',
    builtYear: 2003,
    floor: 7,
    totalFloors: 11,
    direction: '南',

    equipment: ['オートロック', 'エレベーター', '宅配ボックス', '駐輪場'],
    environmentSummary:
      '周辺に公園が点在し、子どもと犬の両方が遊べる環境です。坂道は少なめでベビーカーも押しやすいです。',

    suitableFor: ['子育て世帯＋小型犬', '学校区を重視したい方'],
    notSuitableFor: ['駅徒歩5分以内にこだわる方'],

    images: [
      '/assets/images/listings/sample-012/01.jpg',
      '/assets/images/listings/sample-012/02.jpg',
    ],

    createdAt: '2025-11-15',
    updatedAt: '2025-11-21',
  },
  {
    id: '2025-0013',
    slug: 'minoh-dog-cat-2ldk-88k',
    dealType: 'rent',
    status: 'available',
    lastCheckedAt: '2025-11-22',

    title: '箕面・犬猫どちらもOK・2LDK',
    summary:
      '犬猫どちらも2匹まで相談可能な2LDK。夫婦＋ペットの暮らしを想定した間取りです。',

    prefecture: '大阪府',
    city: '箕面市',
    areaLabel: '箕面市・船場エリア',
    addressSummary: '箕面市○○',
    nearestStation: '箕面萱野駅',
    stationLine: '北大阪急行',
    stationWalkMinutes: 10,
    address: '大阪府箕面市船場東２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog', 'cat'],
      maxPets: 2,
      sizeLimit: null,
      petDepositRequired: true,
      notes: '合計2匹まで。大型犬は不可。',
    },
    petTags: ['犬猫OK', '2匹まで', '2LDK'],

    rent: 88000,
    managementFee: 6000,
    deposit: 88000,
    keyMoney: 176000,
    otherInitialCosts: null,
    contractType: '普通借家2年',

    price: null,
    managementFeeMonthly: null,
    reserveFundMonthly: null,
    ownershipType: null,
    loanExample: null,

    floorPlan: '2LDK',
    exclusiveAreaSqm: 59.0,
    buildingType: 'マンション',
    builtYear: 2013,
    floor: 5,
    totalFloors: 9,
    direction: '東',

    equipment: ['オートロック', 'エレベーター', '宅配ボックス'],
    environmentSummary:
      '再開発が進むエリアで、買い物施設が充実しつつもまだ落ち着いた雰囲気があります。',

    suitableFor: ['犬猫どちらも可能性として考えている方'],
    notSuitableFor: ['大型犬を検討している方'],

    images: [
      '/assets/images/listings/sample-013/01.jpg',
    ],

    createdAt: '2025-11-16',
    updatedAt: '2025-11-22',
  },
  {
    id: '2025-0014',
    slug: 'ibaraki-1ldk-budget-60k',
    dealType: 'rent',
    status: 'available',
    lastCheckedAt: '2025-11-20',

    title: '茨木・お手頃賃料・小型犬1匹までの1LDK',
    summary:
      '茨木市内で比較的お手頃な賃料帯の1LDK。小型犬1匹まで飼育相談可能です。',

    prefecture: '大阪府',
    city: '茨木市',
    areaLabel: '茨木市・中条エリア',
    addressSummary: '茨木市○○',
    nearestStation: '茨木駅',
    stationLine: 'JR京都線',
    stationWalkMinutes: 12,
    address: '大阪府茨木市中条１丁目２−３',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog'],
      maxPets: 1,
      sizeLimit: '小型犬のみ',
      petDepositRequired: true,
      notes: null,
    },
    petTags: ['小型犬OK', '家賃控えめ'],

    rent: 60000,
    managementFee: 3000,
    deposit: 60000,
    keyMoney: 60000,
    otherInitialCosts: null,
    contractType: '普通借家2年',

    price: null,
    managementFeeMonthly: null,
    reserveFundMonthly: null,
    ownershipType: null,
    loanExample: null,

    floorPlan: '1LDK',
    exclusiveAreaSqm: 36.0,
    buildingType: 'マンション',
    builtYear: 2001,
    floor: 2,
    totalFloors: 4,
    direction: '南東',

    equipment: ['エアコン', 'ガスコンロ設置可'],
    environmentSummary:
      '住宅街の中にあり、車通りもそこまで多くありません。近所付き合いも比較的穏やかな印象のエリアです。',

    suitableFor: ['賃料を抑えたい単身〜2人暮らし', '駅徒歩15分以内なら許容できる方'],
    notSuitableFor: ['最新設備を重視する方'],

    images: [
      '/assets/images/listings/sample-014/01.jpg',
    ],

    createdAt: '2025-11-14',
    updatedAt: '2025-11-20',
  },
  {
    id: '2025-0015',
    slug: 'takatsuki-dog-2ldk-82k',
    dealType: 'rent',
    status: 'available',
    lastCheckedAt: '2025-11-22',

    title: '高槻・中型犬1匹まで・2LDK',
    summary:
      '高槻市内では貴重な中型犬1匹まで相談可能な2LDK。川沿いの散歩コースが取りやすい立地です。',

    prefecture: '大阪府',
    city: '高槻市',
    areaLabel: '高槻市・川西エリア',
    addressSummary: '高槻市○○',
    nearestStation: '高槻駅',
    stationLine: 'JR京都線',
    stationWalkMinutes: 17,
    address: '大阪府高槻市川西町２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog'],
      maxPets: 1,
      sizeLimit: '中型犬まで',
      petDepositRequired: true,
      notes: '川沿いの散歩コースが豊富なため、運動量の多い子にも向きます。',
    },
    petTags: ['中型犬OK', '川沿い散歩'],

    rent: 82000,
    managementFee: 4000,
    deposit: 82000,
    keyMoney: 164000,
    otherInitialCosts: null,
    contractType: '普通借家2年',

    price: null,
    managementFeeMonthly: null,
    reserveFundMonthly: null,
    ownershipType: null,
    loanExample: null,

    floorPlan: '2LDK',
    exclusiveAreaSqm: 57.0,
    buildingType: 'マンション',
    builtYear: 2006,
    floor: 3,
    totalFloors: 6,
    direction: '南西',

    equipment: ['オートロック', 'エレベーター'],
    environmentSummary:
      '徒歩圏に河川敷があり、散歩コースに困らない立地です。一方で駅までは少し距離があります。',

    suitableFor: ['中型犬1匹としっかり散歩をしたい方'],
    notSuitableFor: ['駅近を絶対条件にしている方'],

    images: [
      '/assets/images/listings/sample-015/01.jpg',
    ],

    createdAt: '2025-11-16',
    updatedAt: '2025-11-22',
  },

  // ---- ここから購入物件（buy） 0016〜0030 ----

  {
    id: '2025-0016',
    slug: 'toyonnaka-buy-3ldk-3280',
    dealType: 'buy',
    status: 'available',
    lastCheckedAt: '2025-11-20',

    title: '豊中・ペット可中古マンション・緑地近くの3LDK',
    summary:
      '服部緑地近くのペット可中古マンション。小型犬・猫合計2匹まで飼育可能な3LDKです。',

    prefecture: '大阪府',
    city: '豊中市',
    areaLabel: '豊中市・服部緑地エリア',
    addressSummary: '豊中市○○',
    nearestStation: '緑地公園駅',
    stationLine: '北大阪急行',
    stationWalkMinutes: 9,
    address: '大阪府豊中市寺内２丁目５−６',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog', 'cat'],
      maxPets: 2,
      sizeLimit: '小型犬のみ',
      petDepositRequired: false,
      notes: '管理規約にて頭数制限あり。',
    },
    petTags: ['小型犬OK', '猫OK', '分譲マンション'],

    rent: null,
    managementFee: null,
    deposit: null,
    keyMoney: null,
    otherInitialCosts: null,
    contractType: null,

    price: 3280,
    managementFeeMonthly: 12000,
    reserveFundMonthly: 9000,
    ownershipType: '区分所有',
    loanExample:
      '頭金0円・ボーナス払いなし／月々約8.7万円台〜（変動0.5％・35年の場合の一例）',

    floorPlan: '3LDK',
    exclusiveAreaSqm: 72.5,
    buildingType: '中古マンション',
    builtYear: 2002,
    floor: 6,
    totalFloors: 10,
    direction: '南',

    equipment: ['オートロック', 'エレベーター', '宅配ボックス'],
    environmentSummary:
      '服部緑地まで徒歩圏で、ペットとの生活を中心に据えたい方に人気のエリア。',

    suitableFor: ['将来的にリノベも視野に入れているファミリー'],
    notSuitableFor: ['駅直結・超駅近を求める方'],

    images: [
      '/assets/images/listings/sample-016/01.jpg',
      '/assets/images/listings/sample-016/02.jpg',
    ],

    createdAt: '2025-11-10',
    updatedAt: '2025-11-20',
  },
  {
    id: '2025-0017',
    slug: 'suita-buy-2ldk-2980',
    dealType: 'buy',
    status: 'available',
    lastCheckedAt: '2025-11-21',

    title: '吹田・駅近ペット可マンション・2LDK',
    summary:
      '江坂駅徒歩6分、ペット飼育可の2LDK中古マンション。単身〜DINKS向けの広さです。',

    prefecture: '大阪府',
    city: '吹田市',
    areaLabel: '吹田市・江坂エリア',
    addressSummary: '吹田市○○',
    nearestStation: '江坂駅',
    stationLine: '大阪メトロ御堂筋線',
    stationWalkMinutes: 6,
    address: '大阪府吹田市江坂町１丁目５−６',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog', 'cat'],
      maxPets: 2,
      sizeLimit: '小型犬のみ',
      petDepositRequired: false,
      notes: '体高や体重に関する規定あり。',
    },
    petTags: ['小型犬OK', '猫OK', '駅近'],

    rent: null,
    managementFee: null,
    deposit: null,
    keyMoney: null,
    otherInitialCosts: null,
    contractType: null,

    price: 2980,
    managementFeeMonthly: 11500,
    reserveFundMonthly: 8500,
    ownershipType: '区分所有',
    loanExample:
      '頭金0円・月々約7.9万円台〜（変動0.5％・35年の場合の一例）',

    floorPlan: '2LDK',
    exclusiveAreaSqm: 60.0,
    buildingType: '中古マンション',
    builtYear: 2008,
    floor: 8,
    totalFloors: 15,
    direction: '南東',

    equipment: ['オートロック', 'エレベーター', '宅配ボックス'],
    environmentSummary:
      '駅近ながら、一本中に入った立地で騒音は比較的抑えられています。',

    suitableFor: ['共働きカップル＋小型犬or猫', '駅近を重視する方'],
    notSuitableFor: ['戸建て志向の強い方'],

    images: [
      '/assets/images/listings/sample-017/01.jpg',
    ],

    createdAt: '2025-11-12',
    updatedAt: '2025-11-21',
  },
  {
    id: '2025-0018',
    slug: 'minoh-buy-4ldk-4280',
    dealType: 'buy',
    status: 'available',
    lastCheckedAt: '2025-11-21',

    title: '箕面・ペット可4LDK・ファミリー向けマンション',
    summary:
      '箕面エリアのファミリー向け4LDK。犬猫合計2匹まで飼育可能で、広めのリビングが魅力です。',

    prefecture: '大阪府',
    city: '箕面市',
    areaLabel: '箕面市・小野原エリア',
    addressSummary: '箕面市○○',
    nearestStation: '北千里駅',
    stationLine: '阪急千里線',
    stationWalkMinutes: 18,
    address: '大阪府箕面市小野原西２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog', 'cat'],
      maxPets: 2,
      sizeLimit: null,
      petDepositRequired: false,
      notes: null,
    },
    petTags: ['ペット可', '4LDK', 'ファミリー向き'],

    rent: null,
    managementFee: null,
    deposit: null,
    keyMoney: null,
    otherInitialCosts: null,
    contractType: null,

    price: 4280,
    managementFeeMonthly: 13500,
    reserveFundMonthly: 11000,
    ownershipType: '区分所有',
    loanExample:
      '頭金0円・月々約11.3万円台〜（変動0.5％・35年の場合の一例）',

    floorPlan: '4LDK',
    exclusiveAreaSqm: 86.0,
    buildingType: '中古マンション',
    builtYear: 2005,
    floor: 5,
    totalFloors: 11,
    direction: '南',

    equipment: ['オートロック', 'エレベーター', '宅配ボックス', '床暖房'],
    environmentSummary:
      '教育施設や公園がまとまっているエリアで、子育て世帯に人気です。',

    suitableFor: ['子ども＋ペットのいるファミリー'],
    notSuitableFor: ['駅近志向の方'],

    images: [
      '/assets/images/listings/sample-018/01.jpg',
    ],

    createdAt: '2025-11-13',
    updatedAt: '2025-11-21',
  },
  {
    id: '2025-0019',
    slug: 'ibaraki-buy-3ldk-3180',
    dealType: 'buy',
    status: 'available',
    lastCheckedAt: '2025-11-20',

    title: '茨木・ペット可3LDK・駅バス利用エリア',
    summary:
      'バス利用が前提となるエリアながら、その分専有面積と価格のバランスが良い3LDK。',

    prefecture: '大阪府',
    city: '茨木市',
    areaLabel: '茨木市・山手エリア',
    addressSummary: '茨木市○○',
    nearestStation: '茨木駅',
    stationLine: 'JR京都線',
    stationWalkMinutes: 25,
    address: '大阪府茨木市山手台２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog', 'cat'],
      maxPets: 2,
      sizeLimit: '中型犬まで',
      petDepositRequired: false,
      notes: null,
    },
    petTags: ['中型犬まで', '3LDK'],

    rent: null,
    managementFee: null,
    deposit: null,
    keyMoney: null,
    otherInitialCosts: null,
    contractType: null,

    price: 3180,
    managementFeeMonthly: 10000,
    reserveFundMonthly: 8000,
    ownershipType: '区分所有',
    loanExample:
      '頭金0円・月々約8.5万円台〜（変動0.5％・35年の場合の一例）',

    floorPlan: '3LDK',
    exclusiveAreaSqm: 75.0,
    buildingType: '中古マンション',
    builtYear: 1999,
    floor: 7,
    totalFloors: 15,
    direction: '南西',

    equipment: ['オートロック', 'エレベーター'],
    environmentSummary:
      '高台に位置し、眺望と風通しが良い立地です。車を所有している世帯に向いています。',

    suitableFor: ['車を持っているファミリー世帯'],
    notSuitableFor: ['徒歩での駅アクセスを重視する方'],

    images: [
      '/assets/images/listings/sample-019/01.jpg',
    ],

    createdAt: '2025-11-11',
    updatedAt: '2025-11-20',
  },
  {
    id: '2025-0020',
    slug: 'takatsuki-buy-2ldk-2580',
    dealType: 'buy',
    status: 'available',
    lastCheckedAt: '2025-11-19',

    title: '高槻・駅徒歩圏のペット可2LDK',
    summary:
      'JR高槻駅徒歩圏内のペット可2LDK。単身〜2人暮らし＋小型犬or猫向けです。',

    prefecture: '大阪府',
    city: '高槻市',
    areaLabel: '高槻市・中心部エリア',
    addressSummary: '高槻市○○',
    nearestStation: '高槻駅',
    stationLine: 'JR京都線',
    stationWalkMinutes: 10,
    address: '大阪府高槻市紺屋町２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog', 'cat'],
      maxPets: 2,
      sizeLimit: '小型犬のみ',
      petDepositRequired: false,
      notes: null,
    },
    petTags: ['小型犬OK', '猫OK', '駅徒歩10分'],

    rent: null,
    managementFee: null,
    deposit: null,
    keyMoney: null,
    otherInitialCosts: null,
    contractType: null,

    price: 2580,
    managementFeeMonthly: 9800,
    reserveFundMonthly: 7500,
    ownershipType: '区分所有',
    loanExample:
      '頭金0円・月々約6.9万円台〜（変動0.5％・35年の場合の一例）',

    floorPlan: '2LDK',
    exclusiveAreaSqm: 55.0,
    buildingType: '中古マンション',
    builtYear: 2006,
    floor: 6,
    totalFloors: 12,
    direction: '東',

    equipment: ['オートロック', 'エレベーター', '宅配ボックス'],
    environmentSummary:
      '駅近の利便性と、周辺の落ち着いた住環境を両立したエリアです。',

    suitableFor: ['駅近を重視する単身〜2人暮らし', '車を持たない世帯'],
    notSuitableFor: ['広さを最優先したいファミリー世帯'],

    images: ['/assets/images/listings/sample-020/01.jpg'],

    createdAt: '2025-11-10',
    updatedAt: '2025-11-19',
  },
  {
    id: '2025-0021',
    slug: 'toyonnaka-buy-4ldk-4680',
    dealType: 'buy',
    status: 'available',
    lastCheckedAt: '2025-11-22',

    title: '豊中・ペット可4LDK・高台の眺望良好マンション',
    summary:
      '豊中市内の高台に位置するペット可4LDK。眺望を重視するファミリー向けです。',

    prefecture: '大阪府',
    city: '豊中市',
    areaLabel: '豊中市・上野エリア',
    addressSummary: '豊中市○○',
    nearestStation: '豊中駅',
    stationLine: '阪急宝塚線',
    stationWalkMinutes: 20,
    address: '大阪府豊中市上野西２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog', 'cat'],
      maxPets: 2,
      sizeLimit: '中型犬まで',
      petDepositRequired: false,
      notes: null,
    },
    petTags: ['中型犬まで', '4LDK', '眺望良好'],

    rent: null,
    managementFee: null,
    deposit: null,
    keyMoney: null,
    otherInitialCosts: null,
    contractType: null,

    price: 4680,
    managementFeeMonthly: 14000,
    reserveFundMonthly: 12000,
    ownershipType: '区分所有',
    loanExample:
      '頭金0円・月々約12.3万円台〜（変動0.5％・35年の場合の一例）',

    floorPlan: '4LDK',
    exclusiveAreaSqm: 88.0,
    buildingType: '中古マンション',
    builtYear: 2007,
    floor: 10,
    totalFloors: 14,
    direction: '南',

    equipment: ['オートロック', 'エレベーター', '宅配ボックス', '床暖房'],
    environmentSummary:
      '高台のため坂道はありますが、その分眺望と風通しの良さが魅力的なエリアです。',

    suitableFor: ['眺望を重視するファミリー', '車を所有している世帯'],
    notSuitableFor: ['毎日の坂道が負担になりそうな方'],

    images: ['/assets/images/listings/sample-021/01.jpg'],

    createdAt: '2025-11-16',
    updatedAt: '2025-11-22',
  },
  {
    id: '2025-0022',
    slug: 'suita-buy-3ldk-3520',
    dealType: 'buy',
    status: 'available',
    lastCheckedAt: '2025-11-20',

    title: '吹田・ペット可3LDK・公園隣接マンション',
    summary:
      'マンション敷地に隣接した公園があり、朝夕の散歩がしやすい3LDKペット可マンション。',

    prefecture: '大阪府',
    city: '吹田市',
    areaLabel: '吹田市・千里丘エリア',
    addressSummary: '吹田市○○',
    nearestStation: '千里丘駅',
    stationLine: 'JR京都線',
    stationWalkMinutes: 15,
    address: '大阪府吹田市千里丘西２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog', 'cat'],
      maxPets: 2,
      sizeLimit: null,
      petDepositRequired: false,
      notes: null,
    },
    petTags: ['ペット可', '公園隣接'],

    rent: null,
    managementFee: null,
    deposit: null,
    keyMoney: null,
    otherInitialCosts: null,
    contractType: null,

    price: 3520,
    managementFeeMonthly: 11500,
    reserveFundMonthly: 9000,
    ownershipType: '区分所有',
    loanExample:
      '頭金0円・月々約9.3万円台〜（変動0.5％・35年の場合の一例）',

    floorPlan: '3LDK',
    exclusiveAreaSqm: 74.0,
    buildingType: '中古マンション',
    builtYear: 2004,
    floor: 4,
    totalFloors: 10,
    direction: '南東',

    equipment: ['オートロック', 'エレベーター', '宅配ボックス'],
    environmentSummary:
      'マンションの敷地から直接公園に出られるため、犬の散歩コースとして非常に使いやすい立地です。',

    suitableFor: ['散歩コースを重視する犬飼育世帯'],
    notSuitableFor: ['駅徒歩10分以内を絶対条件にしたい方'],

    images: ['/assets/images/listings/sample-022/01.jpg'],

    createdAt: '2025-11-13',
    updatedAt: '2025-11-20',
  },
  {
    id: '2025-0023',
    slug: 'minoh-buy-3ldk-3380',
    dealType: 'buy',
    status: 'reserved',
    lastCheckedAt: '2025-11-19',

    title: '箕面・自然豊かなエリアのペット可3LDK',
    summary:
      '箕面の自然豊かな環境にある3LDK。ペットとの暮らしを前提とした管理規約が整っています。',

    prefecture: '大阪府',
    city: '箕面市',
    areaLabel: '箕面市・箕面駅エリア',
    addressSummary: '箕面市○○',
    nearestStation: '箕面駅',
    stationLine: '阪急箕面線',
    stationWalkMinutes: 17,
    address: '大阪府箕面市箕面２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog', 'cat'],
      maxPets: 2,
      sizeLimit: '中型犬まで',
      petDepositRequired: false,
      notes: null,
    },
    petTags: ['中型犬まで', '自然が多い'],

    rent: null,
    managementFee: null,
    deposit: null,
    keyMoney: null,
    otherInitialCosts: null,
    contractType: null,

    price: 3380,
    managementFeeMonthly: 10500,
    reserveFundMonthly: 8000,
    ownershipType: '区分所有',
    loanExample:
      '頭金0円・月々約8.9万円台〜（変動0.5％・35年の場合の一例）',

    floorPlan: '3LDK',
    exclusiveAreaSqm: 76.0,
    buildingType: '中古マンション',
    builtYear: 2003,
    floor: 3,
    totalFloors: 8,
    direction: '南',

    equipment: ['オートロック', 'エレベーター'],
    environmentSummary:
      '周辺に緑地やハイキングコースがあり、アウトドア好きな方に向いています。',

    suitableFor: ['自然好きなファミリー＋ペット'],
    notSuitableFor: ['都会的な生活を求める方'],

    images: ['/assets/images/listings/sample-023/01.jpg'],

    createdAt: '2025-11-14',
    updatedAt: '2025-11-19',
  },
  {
    id: '2025-0024',
    slug: 'ibaraki-buy-2ldk-2480',
    dealType: 'buy',
    status: 'available',
    lastCheckedAt: '2025-11-18',

    title: '茨木・ペット可2LDK・リノベ素材としても',
    summary:
      '現状でも住めますが、リノベ素材としても魅力的なペット可2LDK。自分好みに手を入れたい方向けです。',

    prefecture: '大阪府',
    city: '茨木市',
    areaLabel: '茨木市・中心部エリア',
    addressSummary: '茨木市○○',
    nearestStation: '茨木市駅',
    stationLine: '阪急京都線',
    stationWalkMinutes: 13,
    address: '大阪府茨木市双葉町２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog', 'cat'],
      maxPets: 2,
      sizeLimit: null,
      petDepositRequired: false,
      notes: null,
    },
    petTags: ['リノベ向き', 'ペット可'],

    rent: null,
    managementFee: null,
    deposit: null,
    keyMoney: null,
    otherInitialCosts: null,
    contractType: null,

    price: 2480,
    managementFeeMonthly: 9500,
    reserveFundMonthly: 7000,
    ownershipType: '区分所有',
    loanExample:
      '頭金0円・月々約6.6万円台〜（変動0.5％・35年の場合の一例）',

    floorPlan: '2LDK',
    exclusiveAreaSqm: 53.0,
    buildingType: '中古マンション',
    builtYear: 1995,
    floor: 4,
    totalFloors: 9,
    direction: '東',

    equipment: ['オートロック', 'エレベーター'],
    environmentSummary:
      '駅からの道のりに商店街があり、日常の買い物に便利なエリアです。',

    suitableFor: ['自分でリノベを楽しみたい方'],
    notSuitableFor: ['新築・築浅にこだわる方'],

    images: ['/assets/images/listings/sample-024/01.jpg'],

    createdAt: '2025-11-08',
    updatedAt: '2025-11-18',
  },
  {
    id: '2025-0025',
    slug: 'takatsuki-buy-3ldk-3050',
    dealType: 'buy',
    status: 'available',
    lastCheckedAt: '2025-11-21',

    title: '高槻・ペット可3LDK・駅バス15分',
    summary:
      '駅からはバス利用となりますが、その分静かな環境と専有面積の広さが魅力の3LDKペット可マンション。',

    prefecture: '大阪府',
    city: '高槻市',
    areaLabel: '高槻市・郊外エリア',
    addressSummary: '高槻市○○',
    nearestStation: '高槻駅',
    stationLine: 'JR京都線',
    stationWalkMinutes: 25,
    address: '大阪府高槻市○○',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog', 'cat'],
      maxPets: 2,
      sizeLimit: '中型犬まで',
      petDepositRequired: false,
      notes: null,
    },
    petTags: ['中型犬まで', '3LDK', '静かな環境'],

    rent: null,
    managementFee: null,
    deposit: null,
    keyMoney: null,
    otherInitialCosts: null,
    contractType: null,

    price: 3050,
    managementFeeMonthly: 11000,
    reserveFundMonthly: 9000,
    ownershipType: '区分所有',
    loanExample:
      '頭金0円・月々約8.2万円台〜（変動0.5％・35年の場合の一例）',

    floorPlan: '3LDK',
    exclusiveAreaSqm: 73.0,
    buildingType: '中古マンション',
    builtYear: 2001,
    floor: 5,
    totalFloors: 11,
    direction: '南西',

    equipment: ['オートロック', 'エレベーター'],
    environmentSummary:
      'バス利用が前提となるエリアですが、日中はとても静かで在宅時間が長い方にも向いています。',

    suitableFor: ['在宅勤務が多い方＋ペット'],
    notSuitableFor: ['駅徒歩圏を絶対条件にしている方'],

    images: ['/assets/images/listings/sample-025/01.jpg'],

    createdAt: '2025-11-15',
    updatedAt: '2025-11-21',
  },
  {
    id: '2025-0026',
    slug: 'toyonnaka-buy-terrace-3580',
    dealType: 'buy',
    status: 'available',
    lastCheckedAt: '2025-11-22',

    title: '豊中・広いバルコニー付きペット可3LDK',
    summary:
      '南向きの広いバルコニーが特徴的なペット可3LDK。バルコニーで日向ぼっこを楽しみたい子に。',

    prefecture: '大阪府',
    city: '豊中市',
    areaLabel: '豊中市・曽根エリア',
    addressSummary: '豊中市○○',
    nearestStation: '曽根駅',
    stationLine: '阪急宝塚線',
    stationWalkMinutes: 11,
    address: '大阪府豊中市曽根東町２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog', 'cat'],
      maxPets: 2,
      sizeLimit: null,
      petDepositRequired: false,
      notes: null,
    },
    petTags: ['広いバルコニー', '日当たり良好'],

    rent: null,
    managementFee: null,
    deposit: null,
    keyMoney: null,
    otherInitialCosts: null,
    contractType: null,

    price: 3580,
    managementFeeMonthly: 12000,
    reserveFundMonthly: 9500,
    ownershipType: '区分所有',
    loanExample:
      '頭金0円・月々約9.6万円台〜（変動0.5％・35年の場合の一例）',

    floorPlan: '3LDK',
    exclusiveAreaSqm: 70.0,
    buildingType: '中古マンション',
    builtYear: 2009,
    floor: 4,
    totalFloors: 10,
    direction: '南',

    equipment: ['オートロック', 'エレベーター', '宅配ボックス'],
    environmentSummary:
      '駅からフラットな道のりで、周辺は落ち着いた住宅街です。',

    suitableFor: ['日当たりを重視したい方', 'バルコニーを有効に使いたい方'],
    notSuitableFor: ['低層階を希望する方'],

    images: ['/assets/images/listings/sample-026/01.jpg'],

    createdAt: '2025-11-16',
    updatedAt: '2025-11-22',
  },
  {
    id: '2025-0027',
    slug: 'suita-buy-1slDK-2750',
    dealType: 'buy',
    status: 'available',
    lastCheckedAt: '2025-11-21',

    title: '吹田・1SLDK・ペット可コンパクトマンション',
    summary:
      '1SLDKタイプのコンパクトなペット可マンション。テレワーク用の書斎スペースも確保しやすい間取りです。',

    prefecture: '大阪府',
    city: '吹田市',
    areaLabel: '吹田市・関大前エリア',
    addressSummary: '吹田市○○',
    nearestStation: '関大前駅',
    stationLine: '阪急千里線',
    stationWalkMinutes: 9,
    address: '大阪府吹田市千里山東２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog', 'cat'],
      maxPets: 2,
      sizeLimit: '小型犬のみ',
      petDepositRequired: false,
      notes: null,
    },
    petTags: ['小型犬OK', '書斎スペース'],

    rent: null,
    managementFee: null,
    deposit: null,
    keyMoney: null,
    otherInitialCosts: null,
    contractType: null,

    price: 2750,
    managementFeeMonthly: 9000,
    reserveFundMonthly: 7000,
    ownershipType: '区分所有',
    loanExample:
      '頭金0円・月々約7.4万円台〜（変動0.5％・35年の場合の一例）',

    floorPlan: '1SLDK',
    exclusiveAreaSqm: 50.0,
    buildingType: '中古マンション',
    builtYear: 2011,
    floor: 3,
    totalFloors: 7,
    direction: '東',

    equipment: ['オートロック', 'エレベーター'],
    environmentSummary:
      '学生街に近いエリアですが、マンション周辺は比較的落ち着いた雰囲気です。',

    suitableFor: ['在宅勤務＋小型犬or猫1〜2匹'],
    notSuitableFor: ['絶対的な静けさを求める方'],

    images: ['/assets/images/listings/sample-027/01.jpg'],

    createdAt: '2025-11-15',
    updatedAt: '2025-11-21',
  },
  {
    id: '2025-0028',
    slug: 'minoh-buy-terrace-house-3980',
    dealType: 'buy',
    status: 'available',
    lastCheckedAt: '2025-11-20',

    title: '箕面・ペット可テラスハウス・3LDK',
    summary:
      'マンションよりも戸建てに近い住み心地のペット可テラスハウス。小型〜中型犬向けの3LDKです。',

    prefecture: '大阪府',
    city: '箕面市',
    areaLabel: '箕面市・外院エリア',
    addressSummary: '箕面市○○',
    nearestStation: '千里中央駅',
    stationLine: '北大阪急行',
    stationWalkMinutes: 25,
    address: '大阪府箕面市外院２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog'],
      maxPets: 2,
      sizeLimit: '中型犬まで',
      petDepositRequired: false,
      notes: null,
    },
    petTags: ['テラスハウス', '中型犬まで'],

    rent: null,
    managementFee: null,
    deposit: null,
    keyMoney: null,
    otherInitialCosts: null,
    contractType: null,

    price: 3980,
    managementFeeMonthly: 5000,
    reserveFundMonthly: 5000,
    ownershipType: '所有権',
    loanExample:
      '頭金0円・月々約10.6万円台〜（変動0.5％・35年の場合の一例）',

    floorPlan: '3LDK',
    exclusiveAreaSqm: 82.0,
    buildingType: 'テラスハウス',
    builtYear: 2006,
    floor: 1,
    totalFloors: 2,
    direction: '南',

    equipment: ['駐車場', '専用庭'],
    environmentSummary:
      '車利用を前提としたエリアで、庭付きの物件を探している方に向いています。',

    suitableFor: ['庭でペットと遊びたい方'],
    notSuitableFor: ['駅近重視の方'],

    images: ['/assets/images/listings/sample-028/01.jpg'],

    createdAt: '2025-11-09',
    updatedAt: '2025-11-20',
  },
  {
    id: '2025-0029',
    slug: 'ibaraki-buy-4ldk-4450',
    dealType: 'buy',
    status: 'available',
    lastCheckedAt: '2025-11-22',

    title: '茨木・ペット可4LDK・角部屋',
    summary:
      '三方角部屋で採光・通風に優れたペット可4LDK。家族とペットのスペースを分けやすい間取りです。',

    prefecture: '大阪府',
    city: '茨木市',
    areaLabel: '茨木市・沢良宜エリア',
    addressSummary: '茨木市○○',
    nearestStation: '南茨木駅',
    stationLine: '阪急京都線',
    stationWalkMinutes: 16,
    address: '大阪府茨木市沢良宜西２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog', 'cat'],
      maxPets: 2,
      sizeLimit: '中型犬まで',
      petDepositRequired: false,
      notes: null,
    },
    petTags: ['角部屋', '4LDK'],

    rent: null,
    managementFee: null,
    deposit: null,
    keyMoney: null,
    otherInitialCosts: null,
    contractType: null,

    price: 4450,
    managementFeeMonthly: 13000,
    reserveFundMonthly: 11000,
    ownershipType: '区分所有',
    loanExample:
      '頭金0円・月々約11.9万円台〜（変動0.5％・35年の場合の一例）',

    floorPlan: '4LDK',
    exclusiveAreaSqm: 90.0,
    buildingType: '中古マンション',
    builtYear: 2010,
    floor: 8,
    totalFloors: 12,
    direction: '南西',

    equipment: ['オートロック', 'エレベーター'],
    environmentSummary:
      '角部屋ならではの窓の多さと明るさが特徴です。周辺は落ち着いた住宅街です。',

    suitableFor: ['部屋数を確保したいファミリー＋ペット'],
    notSuitableFor: ['駅近すぎる立地を望む方'],

    images: ['/assets/images/listings/sample-029/01.jpg'],

    createdAt: '2025-11-17',
    updatedAt: '2025-11-22',
  },
  {
    id: '2025-0030',
    slug: 'takatsuki-buy-3ldk-3300',
    dealType: 'buy',
    status: 'available',
    lastCheckedAt: '2025-11-21',

    title: '高槻・ペット可3LDK・リフォーム済み',
    summary:
      '室内フルリフォーム済みのペット可3LDK。すぐにでも入居を検討したい方向けです。',

    prefecture: '大阪府',
    city: '高槻市',
    areaLabel: '高槻市・南エリア',
    addressSummary: '高槻市○○',
    nearestStation: '高槻市駅',
    stationLine: '阪急京都線',
    stationWalkMinutes: 14,
    address: '大阪府高槻市南松原町２丁目３−４',

    petAllowed: true,
    petDetail: {
      petTypes: ['dog', 'cat'],
      maxPets: 2,
      sizeLimit: null,
      petDepositRequired: false,
      notes: null,
    },
    petTags: ['リフォーム済み', 'ペット可'],

    rent: null,
    managementFee: null,
    deposit: null,
    keyMoney: null,
    otherInitialCosts: null,
    contractType: null,

    price: 3300,
    managementFeeMonthly: 10500,
    reserveFundMonthly: 9000,
    ownershipType: '区分所有',
    loanExample:
      '頭金0円・月々約8.7万円台〜（変動0.5％・35年の場合の一例）',

    floorPlan: '3LDK',
    exclusiveAreaSqm: 70.0,
    buildingType: '中古マンション',
    builtYear: 1998,
    floor: 6,
    totalFloors: 11,
    direction: '南東',

    equipment: ['オートロック', 'エレベーター', '宅配ボックス'],
    environmentSummary:
      '生活利便性の高いエリアで、スーパーやドラッグストアが徒歩圏内に揃っています。',

    suitableFor: ['リフォーム済み物件を探している方'],
    notSuitableFor: ['自分でリノベをしたい方'],

    images: ['/assets/images/listings/sample-030/01.jpg'],

    createdAt: '2025-11-18',
    updatedAt: '2025-11-21',
  },
];

// ---- 便利関数たち ----

export function getAllListings(): Listing[] {
  // 一覧用に、最新更新順で並べて返す
  return [...listings].sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
}

export function getListingsByDealType(type: DealType): Listing[] {
  return getAllListings().filter((l) => l.dealType === type);
}

export function getListingBySlug(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}

// ★追加：物件IDから1件取得（/contact で使う）
export function getListingById(id: string): Listing | undefined {
  return listings.find((l) => l.id === id);
}
