# @omixfy/uikit-css

Biblioteca de estilos CSS nativos do Omixfy UIkit. Fornece variáveis CSS, estilos de componentes e utilitários para projetos que utilizam o design system Omixfy.

## Instalação

```bash
npm install @omixfy/uikit-css
```

## Uso

### Importação em projetos React/Next.js

#### Next.js (App Router)

No arquivo `app/layout.tsx` ou `app/globals.css`:

```css
@import '@omixfy/uikit-css/dist/global.css';
```

#### Next.js (Pages Router)

No arquivo `pages/_app.tsx`:

```tsx
import '@omixfy/uikit-css/dist/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

#### React (Vite/CRA)

No arquivo principal (`main.tsx`, `index.tsx` ou `App.tsx`):

```tsx
import '@omixfy/uikit-css/dist/global.css';
```

### Importação em projetos HTML/CSS puro

```html
<link rel="stylesheet" href="./node_modules/@omixfy/uikit-css/dist/global.css">
```

ou via CDN (quando disponível):

```html
<link rel="stylesheet" href="https://unpkg.com/@omixfy/uikit-css@latest/dist/global.css">
```

## Variáveis CSS

O pacote expõe variáveis CSS customizadas que podem ser utilizadas em seus estilos:

### Cores Primárias

```css
.elemento {
  background-color: var(--of-primary-500);
  color: var(--of-primary-text);
}
```

Variáveis disponíveis:
- `--of-primary-50` até `--of-primary-950`
- `--of-primary-oklch`
- `--of-primary-bg`
- `--of-primary-text`

### Cores Secundárias

```css
.elemento {
  background-color: var(--of-secondary-500);
  color: var(--of-secondary-text);
}
```

Variáveis disponíveis:
- `--of-secondary-50` até `--of-secondary-950`
- `--of-secondary-oklch`
- `--of-secondary-bg`
- `--of-secondary-text`

### Cores Neutras

```css
.elemento {
  background-color: var(--of-neutral-100);
  color: var(--of-neutral-900);
}
```

Variáveis disponíveis:
- `--of-neutral-50` até `--of-neutral-950`

### Background e Superfície

```css
.container {
  background-color: var(--of-bg);
}

.card {
  background-color: var(--of-surface);
}

.card-secondary {
  background-color: var(--of-card);
}
```

### Tipografia

```css
body {
  font-family: var(--of-font-family);
}
```

## Estrutura

O CSS é organizado em camadas (layers) para melhor controle de especificidade:

- `reset` - Reset de estilos padrão
- `base` - Estilos base e variáveis
- `theme` - Tema e customizações