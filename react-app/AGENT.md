## このファイルについて

この `AGENT.md` は、**このポートフォリオ専用** のベストプラクティスをまとめたガイドです。  
AI エージェントがコードを書くときだけでなく、自分が後から触るときの「設計の軸」として使います。

対象プロジェクト：

- **Framework**: React 18
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router (`HashRouter` 利用)
- **Animation**: Framer Motion
- **Deploy**: Cloudflare Workers (Wrangler)

---

## 目指すディレクトリ構成

現状の構成を尊重しつつ、今後は「ページ」「共通コンポーネント」「データ」の3つを意識します。

```text
src/
├── App.jsx                # ルーティング・レイアウトの中枢
├── main.jsx               # エントリーポイント（HashRouter の設定）
├── pages/                 # 画面単位（Top, Works, About 等）
│   ├── Top.jsx
│   ├── Works.jsx
│   └── About.jsx
├── components/            # 複数画面で使う UI パーツ
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Modal.jsx
│   ├── SkillContainer.jsx
│   └── works/             # Works 専用の UI（Card, WorkDetailModal など）
├── data/                  # 作品データなどの静的データ
│   └── worksData.js
└── assets/                # 画像等（Vite の public / assets 運用に合わせる）
```

※ 実際のファイル名とは異なる箇所がありますが、**新しく作るときはこの方針に寄せる**。

---

## コンポーネント設計ルール

- **1コンポーネント1役割**
  - 画面全体レイアウト: `pages/*`
  - ナビゲーション/フッター/モーダルなどの共通 UI: `components/*`
  - カードやモーダルなど Works 固有の UI: `components/works/*`

- **命名**
  - コンポーネント: PascalCase（`Header`, `WorkDetailModal`）
  - ファイル: コンポーネント名と合わせる（`Header.jsx`, `WorkDetailModal.jsx`）
  - 関数・変数: camelCase（`handleLinkClick`, `selectedWork`）

- **Props の扱い**

```jsx
// ✅ Good: props を分割代入する
function Card({ work, onClick }) {
  // ...
}

// ❌ Avoid
function Card(props) {
  // props.work などで触る形は増やさない
}
```

- **責務の分離**
  - ルーティングやスクロール制御ロジックは `App.jsx` / `pages/*` にまとめる
  - 表示専用コンポーネント（例: `Card`）には状態管理を持たせない

---

## ルーティングとスクロールの方針

- ルーティングは `HashRouter` + `Routes` を利用（GitHub Pages や Cloudflare との相性を優先）
- ページをまたいだスクロール制御は、**`state.scrollTo` を使う現在のパターンを基本とする**

```jsx
// App.jsx からの遷移（例）
navigate('/works', { state: { scrollTo: 'works' } })
```

- 同一ページ内のスクロールは、現在の `document.getElementById(...).scrollIntoView(...)` を使用してよい
  - ただし、`id` 名は `top`, `works`, `about` など **一貫した命名** にする
  - 余裕があれば、`useScrollToAnchor` のようなカスタムフックにまとめる

---

## Tailwind CSS の使い方

- **基本方針**
  - クラスは「レイアウト → 余白 → タイポ/色 → 状態」の順で並べ、読みやすさを意識する
  - インラインスタイル `style={{}}` はできるだけ使わない（アニメーションや非常に動的な値のみ許容）

- **よくある UI のパターン**

```jsx
// セクションタイトル
<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white flex items-center justify-center text-center pt-24 pb-10 px-4">
  Works
</h1>

// レスポンシブなフッター
<div className="flex flex-col md:flex-row items-center justify-start gap-3 md:gap-0 pl-4 md:pl-8 py-3 bg-white">
  {/* ... */}
</div>
```

- **色の扱い**
  - Tailwind のカラーパレットを優先して使う（`bg-gray-900`, `bg-gray-500`, `text-white` など）
  - プロジェクト固有の色（例: ブランドカラー）が増えてきたら `tailwind.config.js` に定義する

---

## アニメーションとモーダル（Framer Motion）

- アニメーションは **Framer Motion を第一候補** とし、CSS アニメーションを増やしすぎない
- モーダル表示/非表示は以下のルールに合わせる:
  - 状態は親コンポーネント（例: `App`, `Works`）が持つ
  - 開閉は props 経由の関数で操作する（`setIsOpen`, `onClose` など）

```jsx
// App.jsx
const [isOpen, setIsOpen] = useState(false)

<AnimatePresence>{isOpen && <Modal setIsOpen={setIsOpen} />}</AnimatePresence>
```

```jsx
// Modal.jsx
function Modal({ setIsOpen }) {
  // 遷移時は必ず setIsOpen(false) してから navigate する
}
```

---

## データの扱い（Works の例）

- 作品データは **できるだけコンポーネント外の「データモジュール」に切り出す**
  - 例: `src/data/worksData.js`
  - コンポーネントには「どの順番で表示するか」「どのように表示するか」だけを持たせる

```jsx
// data/worksData.js
export const worksData = [
  { id: 1, title: 'ポートフォリオサイト', /* ... */ },
  // ...
]
```

```jsx
// Works.jsx
import { worksData } from '../data/worksData'

{[...worksData].reverse().map(work => (
  <Card key={work.id} work={work} onClick={handleCardClick} />
))}
```

- 長文の説明文を扱う場合:
  - JSX 内に直接書いてもよいが、**改行やフォーマットが崩れやすいので data ファイルに寄せていく**

---

## Hooks / 状態管理のルール

- **基本**
  - 画面単位の状態: `pages/*` か `App.jsx` で管理
  - 子コンポーネントには「表示に必要な値」と「イベントハンドラ（関数）」だけを渡す

- **`useEffect`**
  - 依存配列は必ず正しく書く（ESLint の警告を無視しない）
  - **副作用（DOM 操作・ナビゲーション・外部通信など）のみ** に使う
  - 単なる「計算」で済むものは `useMemo` か、レンダー中の計算で済ませる

```jsx
// ✅ selectedWork の変化に合わせて親へ通知するパターン（現在の Works の書き方でOK）
useEffect(() => {
  onWorkDetailModalChange?.(selectedWork !== null)
  return () => onWorkDetailModalChange?.(false)
}, [selectedWork, onWorkDetailModalChange])
```

- **状態のリセット**
  - ページ遷移時にモーダルや選択状態をリセットするのは積極的に行う
  - 例: `Works` で `handleLinkClick` 時に `setSelectedWork(null)` を最初に呼ぶ

---

## パフォーマンスとアクセシビリティ（この規模で意識しておくこと）

- **key 属性**
  - リスト描画（`worksData.map(...)`）では **必ず一意な `id` を `key` に使う**
- **無駄な再レンダーを避ける**
  - 今の規模では `React.memo` や `useCallback` は必須ではない
  - ただし、今後リストやアニメーションが増えて重くなったときに検討する
- **ボタン/リンク**
  - クリック可能な要素には `button` を使う（`div` を clickable にしない）
  - テキストだけで意味が通るラベルを心がける

---

## インポート / ファイルのルール

- インポート順
  1. React 関連 (`react`, `react-dom`, hooks など)
  2. ライブラリ (`react-router-dom`, `framer-motion` など)
  3. プロジェクト内コード（`./components/...`, `./Works` など）

```js
import { useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from './components/Header'
import Modal from './components/Modal'
import Works from './Works'
import About from './About'
```

- エントリーポイント
  - `main.jsx` では `HashRouter` を使う
  - `basename` の指定などは不要（既に削除済みの状態を維持する）

---

## Code Review チェックリスト（このプロジェクト版）

変更を加えるときは、最低限これを確認する。

- [ ] コンポーネントの責務が1つにまとまっているか（ページ vs 共通 UI vs データ）
- [ ] ルーティングとスクロールのロジックがバラけていないか（同じパターンで書かれているか）
- [ ] Tailwind クラスが読みやすく並んでいるか（レイアウト → 余白 → 色 → 状態）
- [ ] 長文データや作品データが、必要に応じて data モジュールに寄せられているか
- [ ] `useEffect` を副作用だけに使っているか
- [ ] リストの `key` に安定した ID を使っているか
- [ ] モーダルの開閉状態を親が管理しているか

---

## NG 集（このプロジェクトではできるだけ避けたいこと）

- ページやコンポーネントの役割が混ざった巨大コンポーネントを作ること
- JSX の中に生の数値や色コードを増やしすぎること（Tailwind のトークンを優先）
- `useEffect` の依存配列を空のままにする/ESLint を無視すること
- クリックイベントを持つ `div` / `span` を増やすこと（`button` を使う）

ただし、**既存コードを壊すよりも、少しずつこのガイドに近づけていくことを優先** する。