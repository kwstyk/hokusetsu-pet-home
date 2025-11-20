// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// ブログ記事コレクション
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),                    // 記事タイトル
    description: z.string().optional(),   // 一覧用の説明
    publishedAt: z.date(),                // 公開日
    updatedAt: z.date().optional(),       // 更新日（あれば）
    tags: z.array(z.string()).default([]),
    isDraft: z.boolean().default(false),  // 下書きフラグ
  }),
});

// 沿線・エリアガイドコレクション
const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),                     // 記事タイトル
    description: z.string().optional(),    // 一覧用の説明
    line: z.string().optional(),           // 例: "阪急宝塚線・箕面線"
    areaName: z.string().optional(),       // 例: "豊中〜蛍池〜石橋阪大前エリア"
    sortOrder: z.number().default(0),      // 一覧表示の順序
    publishedAt: z.date(),                 // 公開日
    updatedAt: z.date().optional(),        // 更新日
    tags: z.array(z.string()).default([]), // タグ
    isDraft: z.boolean().default(false),   // 下書きフラグ
  }),
});

export const collections = {
  blog,
  guides,
};
