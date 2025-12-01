# Omixfy UI

Repositório oficial de componentes UI do Omixfy, compatível com o shadcn CLI.

## Instalação

Para instalar componentes do Omixfy UI em seu projeto, use o comando:

```bash
npx shadcn-ui add "https://raw.githubusercontent.com/omixfy/omixfy-ui/main/registry/button.json"
```

## Componentes Disponíveis

### Button

Um componente de botão customizável com variantes no estilo Polaris seguindo o design system do Omixfy.

**Variantes:**
- `primary` - Botão principal
- `secondary` - Botão secundário
- `destructive` - Botão de ação destrutiva
- `outline` - Botão com borda
- `ghost` - Botão transparente
- `link` - Botão estilo link
- `plain` - Botão simples

**Tamanhos:**
- `micro` - Altura 6 (24px)
- `slim` - Altura 8 (32px)
- `medium` - Altura 10 (40px) - padrão
- `large` - Altura 12 (48px)

**Exemplo de uso:**

```tsx
import { Button } from "@/components/ui/button"

<Button variant="primary" size="medium">
  Clique aqui
</Button>
```

## Dependências

Os componentes do Omixfy UI requerem as seguintes dependências:

- `clsx` - Composição de classes
- `tailwind-merge` - Merge seguro de classes Tailwind
- `class-variance-authority` - Gerenciamento de variantes
- `lucide-react` - Ícones (quando necessário)

## Estrutura

```
omixfy-ui/
├── registry/
│   ├── index.json
│   └── button.json
├── templates/
│   ├── button.tsx
│   └── button.css
└── README.md
```

## Desenvolvimento

Este repositório segue os schemas oficiais do shadcn:
- [Schema do Registry](https://ui.shadcn.com/schema.json)
- [Schema do Componente](https://ui.shadcn.com/schema/registry-item.json)

