# Consolidação dos componentes comuns no registry omixfy-ui

**Data:** 2026-06-10
**Repo:** omixfy-ui
**Branch:** `feat/registry-componentes-comuns` (off `main`)
**Tipo:** adição ao design system (registry shadcn), sem mudança de comportamento

## Contexto

O `omixfy-ui` é um **registry estilo shadcn** ("compatível com o shadcn CLI"):
componentes são distribuídos como templates + JSON e instalados nos apps via
`npx shadcn-ui add ".../registry/<nome>.json"`. No modelo shadcn, cada app é
dono da sua cópia (copy-by-design).

Hoje o registry tem só: button, card, text, confirm-dialog, progress-bar. Já os
MFEs (flow-front-*, template-module-fronted, website-frontend) carregam ~16
primitivos shadcn duplicados em 6–7 cópias cada que **não estão no registry**.
A maioria das cópias é idêntica (default shadcn intocado); algumas divergiram.

## Objetivo

Promover ao registry os 16 componentes primitivos duplicados em ≥6 MFEs, cada um
como **fonte canônica única** instalável via shadcn CLI. Não altera os apps.

## Escopo

Componentes a adicionar (16), com nº de versões distintas observadas nos MFEs:

| Componente | Versões | Componente | Versões |
|---|---|---|---|
| dropdown-menu | 2 | breadcrumb | 2 |
| tooltip | 2 | badge | 2 |
| tabs | 2 | toast | 1 |
| table | 2 | text-field | 2 |
| sheet | 2 | select | 2 |
| separator | 2 | label | 2 |
| progress | 2 | input | 4 |
| pagination | 2 | form | 3 |

## Princípios

- **Versão canônica = majoritária.** Para cada componente, a versão (md5) que a
  maioria dos MFEs compartilha é a canônica (o default shadcn intocado).
- **Não reconciliar apps.** Versões minoritárias/customizadas (ex. `form.tsx` de
  flow-front-products com 48 linhas) permanecem nos apps, intocadas.
- **Sem mudança de comportamento.** Apenas registramos o que já existe.
- **Imports/utilitários do padrão omixfy-ui.** Templates usam `cn` de
  `../../lib/utils` (como os componentes existentes) e `target`
  `components/ui/<nome>.tsx`.

## Mecânica (por componente)

1. Criar `packages/base-ui/templates/<grupo>/<nome>.tsx` com a versão canônica.
   - Convenção de nome: dir de grupo no **plural** (ex. `dropdown-menus`,
     `tooltips`), e o `update-registry.js` deriva o nome singular.
   - **Irregulares** (`tabs`, `progress`): terminam em 's' e quebram o
     `replace(/s$/,'')`. Estender o `singularMap` em `update-registry.js`
     (`tabs → tabs`, `progress → progress`) e nomear o grupo igual ao componente.
2. Criar `packages/base-ui/registry/<nome>.json` (schema
   `registry-item.json`): `name`, `type: registry:component`, `title`,
   `description`, `dependencies` (pacotes npm importados — ex. `@radix-ui/...`),
   `registryDependencies` (outros itens do registry quando houver), e `files[0]`
   com `path`, `type`, `target: components/ui/<nome>.tsx`.
3. Rodar `npm run update-registry` → injeta o conteúdo do template em
   `files[0].content`.
4. Adicionar a entrada do componente em `packages/base-ui/index.json`.
5. Atualizar o README com o componente.

## Verificação

- `npm run update-registry` roda sem warnings (encontra .tsx de todos os grupos).
- Todos os `registry/*.json` são JSON válido e seguem o schema (name/type/files).
- Cada `files[0].target` aponta `components/ui/<nome>.tsx`.
- `dependencies` cobre os pacotes radix/externos importados por cada template.
- Lint/format do repo passa nos arquivos novos.
- `index.json` lista os 16 novos + os 5 existentes (21 itens).

## Fora de escopo (follow-ups)

- Re-sincronizar os MFEs a partir do registry (atualizar as cópias dos apps).
- Reconciliar os drifts reais (input/form/checkbox) entre apps.
- Migrar/reconciliar card e text, que já estão no registry mas divergiram nos apps.
- Componentes com <6 cópias (checkbox, skeleton, dialog, etc.).
