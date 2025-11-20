// src/config/site.ts
export const SITE = {
  name: '北摂ペットホーム（仮）',
  shortName: '北摂ペットホーム',
  areaText:
    '豊中・箕面・吹田・茨木・高槻など、いわゆる「北摂エリア」を中心に対応しています。',
  lineUrl: 'https://line.me/R/ti/p/@your-line-idKOKOWOSASHIKAERU',
  contactEmail: 'example@example.com', // 実運用時に差し替え
  businessHours: '平日 10:00〜18:00（目安）',
  isPractice: true, // まだ起業してないフラグ（表示に使ってもいい）
} as const;
