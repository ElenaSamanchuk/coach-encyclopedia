# Энциклопедия тренера

Лендинг курса KINEZIO FITNESS. Next.js со статическим экспортом, без сервера.

Живая версия: https://elenasamanchuk.github.io/coach-encyclopedia/

## Разработка

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Результат — статика в `out/`. Выкладывается на GitHub Pages автоматически при
пуше в `main` (`.github/workflows/deploy.yml`).

## Устройство

Две вёрстки под фиксированные макеты Figma: 1440 (`src/components/desktop`) и
430 (`src/components/mobile`). Обе живут на «холсте» фиксированной ширины и
масштабируются под окно через `zoom` — см. `src/components/ui/Canvas.tsx`.
Так вёрстка остаётся пропорциональной макету вместо перетекания.

Весь текст собран в `src/lib/content.ts`. Там же дедлайн акции: после него
рантайм подменяет цены и убирает всё, помеченное `data-kin-sale-only`.

`src/lib/typo.ts` расставляет неразрывные пробелы после коротких предлогов и
перед тире — прогоняется по дереву контента при загрузке модуля.

## Пути

GitHub Pages отдаёт сайт по `/coach-encyclopedia/`, поэтому корневые пути
префиксованы в трёх местах: `next.config.ts`, `src/lib/assets.ts` и
`@font-face` в `src/app/globals.css`. При переименовании репозитория менять
во всех трёх.
