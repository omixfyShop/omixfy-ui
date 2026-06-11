# Consolidação dos componentes comuns no registry — Plano

> **Para workers:** executar task-a-task. Steps em checkbox (`- [ ]`).
> Tarefa mecânica e repetitiva: cada componente segue o mesmo procedimento.

**Goal:** Adicionar ao registry omixfy-ui os 16 primitivos shadcn duplicados em
≥6 MFEs como fonte canônica, sem alterar os apps.

**Architecture:** Registry shadcn — cada componente = `templates/<grupo>/<nome>.tsx`
+ `registry/<nome>.json`. `update-registry.js` injeta o conteúdo do template no
JSON. Canônico = versão majoritária (todas presentes em flow-front-dashboad).
Spec: `docs/specs/2026-06-10-consolidacao-componentes-comuns-registry.md`.

**Tech Stack:** Node ESM, shadcn registry schema, npm.

---

## Dados por componente (canônico = `flow-front-dashboad/src/components/ui/<nome>.tsx`)

| nome | grupo (dir) | dependencies (npm) | registryDependencies |
|---|---|---|---|
| dropdown-menu | dropdown-menus | @radix-ui/react-dropdown-menu, lucide-react | — |
| tooltip | tooltips | @radix-ui/react-tooltip | — |
| tabs | tabs ⚠ | @radix-ui/react-tabs | — |
| table | tables | — | — |
| sheet | sheets | @radix-ui/react-dialog, class-variance-authority, lucide-react | — |
| separator | separators | @radix-ui/react-separator | — |
| progress | progress ⚠ | @radix-ui/react-progress | — |
| pagination | paginations | lucide-react | button |
| input | inputs | — | — |
| form | forms | @radix-ui/react-label, @radix-ui/react-slot, react-hook-form | label |
| breadcrumb | breadcrumbs | @radix-ui/react-slot, lucide-react | — |
| badge | badges | class-variance-authority | — |
| toast | toasts | lucide-react | — |
| text-field | text-fields | react-hook-form | — |
| select | selects | lucide-react, @radix-ui/react-select | — |
| label | labels | class-variance-authority, @radix-ui/react-label | — |

⚠ **Irregulares** (`tabs`, `progress`): terminam em 's'; o dir de grupo é nomeado
igual ao componente e precisa de entrada no `singularMap`.

Notas:
- `select` importa `lucide-react`; o radix `@radix-ui/react-select` também é
  dependência real — incluir ambos (confirmar nos imports do arquivo).
- `pagination` importa `button` via `@components/ui/button` → `registryDependencies: ["button"]`.
- `form` importa `label` → `registryDependencies: ["label"]`.
- Imports de `cn` usam `../../lib/utils` (já compatível com os templates).

---

## Task 0 — Ajustar o discovery para nomes irregulares

**Files:** Modify `packages/base-ui/scripts/update-registry.js`

- [ ] No `singularMap`, adicionar entradas identidade para os nomes terminados
      em 's' que serão dirs de grupo:
```js
const singularMap = {
  buttons: 'button',
  cards: 'card',
  texts: 'text',
  tabs: 'tabs',
  progress: 'progress',
};
```
- [ ] Commit:
```bash
git add packages/base-ui/scripts/update-registry.js
git commit -m "chore(registry): mapeia nomes irregulares (tabs, progress) no discovery"
```

## Tasks 1–16 — Procedimento padrão por componente

Para cada `<nome>` / `<grupo>` da tabela:

- [ ] **Criar o template** (cópia verbatim do canônico):
```bash
mkdir -p packages/base-ui/templates/<grupo>
cp /home/jonatas/projects/omixfy/flow-front-dashboad/src/components/ui/<nome>.tsx \
   packages/base-ui/templates/<grupo>/<nome>.tsx
```
- [ ] **Criar o registry JSON** `packages/base-ui/registry/<nome>.json` com o
      esqueleto (o `content` é preenchido pelo update-registry; deixar `""`):
```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "<nome>",
  "type": "registry:component",
  "title": "<Título>",
  "description": "<descrição curta em PT>",
  "registryDependencies": [<registryDeps ou vazio>],
  "dependencies": [<deps npm da tabela>],
  "files": [
    {
      "path": "templates/<grupo>/<nome>.tsx",
      "type": "registry:component",
      "content": "",
      "target": "components/ui/<nome>.tsx"
    }
  ]
}
```
- [ ] **Conferir deps reais**: `grep -E "from ['\"]@|from ['\"][a-z]" template`
      e garantir que `dependencies` cobre todos os pacotes externos importados.
- [ ] **Adicionar entrada em** `packages/base-ui/index.json` (no array `items`):
```json
{
  "name": "<nome>",
  "type": "registry:component",
  "title": "<Título>",
  "description": "<mesma descrição>",
  "files": [{ "path": "registry/<nome>.json", "type": "registry:component" }]
}
```

## Task 17 — Gerar registry, README e verificar

**Files:** registry/*.json (gerado), README.md

- [ ] Rodar o gerador:
```bash
npm run update-registry
```
Esperado: `✓ Atualizado: <nome>.json` para os 16 novos, **sem** warnings
`⚠️ Arquivo .tsx não encontrado` nem `registry não encontrado`.
- [ ] Validar JSON de todos os registries:
```bash
for f in packages/base-ui/registry/*.json; do node -e "JSON.parse(require('fs').readFileSync('$f'))" || echo "INVÁLIDO: $f"; done
```
Esperado: nenhum "INVÁLIDO".
- [ ] Conferir que cada `files[0].content` ficou não-vazio e `target` correto:
```bash
node -e "for (const f of require('fs').readdirSync('packages/base-ui/registry')) { const j=JSON.parse(require('fs').readFileSync('packages/base-ui/registry/'+f)); if(!j.files?.[0]?.content) console.log('VAZIO', f); }"
```
- [ ] Atualizar `README.md` listando os 16 novos componentes (seção curta cada).
- [ ] `index.json` deve ter 21 itens (5 existentes + 16 novos):
```bash
node -e "console.log(JSON.parse(require('fs').readFileSync('packages/base-ui/index.json')).items.length)"
```
Esperado: `21`.
- [ ] Lint/format (se houver) nos arquivos novos; commit final:
```bash
git add -A
git commit -m "feat(registry): adiciona 16 primitivos comuns ao registry omixfy-ui"
```

## Fechamento

- [ ] `npm run update-registry` limpo, 21 itens no index, todos JSON válidos.
- [ ] Push via SSH; entregar link de PR para `main`.

## Self-review

- Cobertura da spec: os 16 componentes da spec têm linha na tabela + procedimento
  (Tasks 1–16); irregulares tratados (Task 0); verificação (Task 17). ✅
- Sem placeholders de código: o `content` vazio é intencional (preenchido pelo
  gerador); o esqueleto JSON é completo. ✅
- Consistência: nomes/grupos/deps fixados na tabela e reusados no procedimento. ✅
