# Base UI - Omixfy

Biblioteca de componentes UI do Omixfy, compatível com o padrão [shadcn/ui](https://ui.shadcn.com/). Os componentes seguem o design system Omixfy com estilo inspirado no Polaris.

## 📦 Instalação

### Pré-requisitos

Antes de usar os componentes, você precisa ter as seguintes dependências instaladas no seu projeto:

```bash
npm install clsx tailwind-merge class-variance-authority
```

### Instalando Componentes

Para instalar um componente específico usando o shadcn CLI:

```bash
npx shadcn-ui@latest add "https://raw.githubusercontent.com/omixfyShop/omixfy-ui/main/packages/base-ui/registry/button.json"
```

> **Nota:** Substitua `omixfyShop` e o caminho pelo repositório e branch corretos do seu projeto.

Os componentes serão instalados em `components/ui/` do seu projeto.

## 📚 Componentes Disponíveis

### Button

Componente de botão customizável com múltiplas variantes seguindo o design system do Omixfy.

#### Variantes de Cor

- `action` - Botão de ação principal (estilo escuro com gradiente)
- `primary` - Botão primário (cor primária do tema)
- `secondary` - Botão secundário (cor secundária do tema)
- `link` - Botão estilo link (sem fundo, apenas texto)

#### Aparências

- `solid` - Aparência sólida (padrão, com fundo)
- `outline` - Aparência com borda e fundo transparente
- `basic` - Aparência básica (fundo transparente, apenas texto)

#### Tamanhos

- `default` / `md` - Tamanho médio (padrão, 32px de altura)
- `sm` - Tamanho pequeno (24px de altura)
- `lg` - Tamanho grande (36px de altura)

#### Props Adicionais

- `full` - Botão com largura total (100%)
- `loading` - Estado de carregamento (exibe animação)
- `icon` - Botão apenas com ícone (padding reduzido)
- `notification` - Exibe indicador de notificação

#### Exemplos de Uso

```tsx
import { Button } from "@/components/ui/button"

// Botão primário sólido (padrão)
<Button variant="primary" appearance="solid">
  Salvar
</Button>

// Botão secundário outline
<Button variant="secondary" appearance="outline">
  Cancelar
</Button>

// Botão primary basic
<Button variant="primary" appearance="basic">
  Visualizar
</Button>

// Botão action com estado de carregamento
<Button variant="action" loading>
  Processando...
</Button>

// Botão com largura total
<Button variant="primary" full>
  Confirmar
</Button>

// Botão apenas com ícone
<Button variant="primary" icon>
  +
</Button>

// Botão com notificação
<Button variant="primary" notification>
  Notificações
</Button>

// Tamanhos diferentes
<Button variant="primary" size="sm">Pequeno</Button>
<Button variant="primary" size="md">Médio</Button>
<Button variant="primary" size="lg">Grande</Button>

// Botão desabilitado
<Button variant="primary" disabled>
  Desabilitado
</Button>
```

#### Combinações de Variantes

O componente suporta combinações entre variantes e aparências:

```tsx
// Primary outline
<Button variant="primary" appearance="outline">
  Primary Outline
</Button>

// Secondary outline
<Button variant="secondary" appearance="outline">
  Secondary Outline
</Button>

// Primary basic
<Button variant="primary" appearance="basic">
  Primary Basic
</Button>

// Secondary basic
<Button variant="secondary" appearance="basic">
  Secondary Basic
</Button>
```

### Text

Componente de tipografia customizável seguindo o padrão Polaris Shopify adaptado ao design system do Omixfy.

#### Instalação

```bash
npx shadcn-ui@latest add "https://raw.githubusercontent.com/omixfyShop/omixfy-ui/main/packages/base-ui/registry/text.json"
```

#### Props

- `tag` - Tag HTML a ser renderizada: `span`, `p`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6` (padrão: `p`)
- `size` - Tamanho do texto: `3xl`, `2xl`, `xl`, `lg`, `md`, `sm`, `xs`, `bodyLg`, `bodyMd`, `bodySm`, `bodyXs` (padrão: `md`)
- `className` - Classes CSS adicionais

#### Tamanhos Disponíveis

- `3xl` - 36px (heading)
- `2xl` - 30px (heading)
- `xl` - 24px (heading)
- `lg` - 20px
- `md` - 14px (padrão)
- `sm` - 13px
- `xs` - 12px
- `bodyLg` - 14px
- `bodyMd` - 13px
- `bodySm` - 12px
- `bodyXs` - 11px

#### Exemplos de Uso

```tsx
import { Text } from "@/components/ui/text"

// Texto padrão
<Text>Texto simples</Text>

// Heading com tamanho customizado
<Text tag="h1" size="3xl">Título Principal</Text>
<Text tag="h2" size="2xl">Subtítulo</Text>

// Parágrafo com tamanho específico
<Text tag="p" size="lg">Texto grande</Text>
<Text tag="p" size="sm">Texto pequeno</Text>

// Span inline
<Text tag="span" size="xs">Texto inline pequeno</Text>

// Com classes customizadas
<Text tag="p" size="md" className="text-primary-600 font-bold">
  Texto customizado
</Text>

// Body sizes
<Text tag="p" size="bodyLg">Corpo de texto grande</Text>
<Text tag="p" size="bodySm">Corpo de texto pequeno</Text>
```

#### Boas Práticas

**Títulos (Headings)**

- Use variantes de heading (`3xl`, `2xl`, `xl`, `lg`) para títulos
- Devem descrever claramente a seção da interface
- Destacar o conceito ou informação mais importante
- Posicionar no topo da seção que descrevem

**Legendas (Captions)**

- Use a variante `bodySm` para legendas
- Use para rótulos secundários em gráficos e tabelas
- Pode ser usado para timestamps em listas de conteúdo
- Não use para textos longos (apenas algumas palavras)
- Não use para efeito estético ou para quebrar o tamanho padrão

**Estilos de Texto**

- Use estilos quando precisar melhorar o entendimento do texto
- Use estilo "subdued" (suave) quando o texto for menos importante que o texto ao redor
- Use estilo "warning" (aviso) quando o texto denotar algo que precisa de atenção ou ação
- Use "semibold" para campos de entrada ou totais de linha em tabelas de preços
- Combine com símbolos (como seta ou cifrão) ao usar estilos de sucesso ou crítico

**Texto Visualmente Oculto**

- Não use se a marcação semântica pode tornar o conteúdo compreensível para tecnologias assistivas
- Use para fornecer contexto extra quando a marcação semântica não for suficiente
- Use em qualquer conteúdo que normalmente está presente mas está sendo omitido
- Deve fazer sentido no contexto quando usado com leitor de tela

### Primitivos comuns

Primitivos no estilo shadcn consolidados a partir das cópias duplicadas nos
microfrontends, agora com fonte canônica única no registry. Instale qualquer um
com o shadcn CLI:

```bash
npx shadcn-ui@latest add "https://raw.githubusercontent.com/omixfyShop/omixfy-ui/main/packages/base-ui/registry/<nome>.json"
```

| Componente      | Descrição                                                            |
| --------------- | -------------------------------------------------------------------- |
| `dropdown-menu` | Menu suspenso acessível (Radix) para ações e opções contextuais.     |
| `tooltip`       | Dica flutuante exibida ao focar ou passar o mouse sobre um elemento. |
| `tabs`          | Navegação por abas para alternar entre painéis de conteúdo.          |
| `table`         | Tabela estilizada com cabeçalho, corpo, rodapé e células.            |
| `sheet`         | Painel deslizante (drawer) lateral baseado no Radix Dialog.          |
| `separator`     | Divisor horizontal ou vertical entre seções de conteúdo.             |
| `progress`      | Barra de progresso determinada baseada no Radix Progress.            |
| `pagination`    | Controles de paginação com navegação anterior/próxima e páginas.     |
| `input`         | Campo de entrada de texto estilizado.                                |
| `form`          | Primitivos de formulário integrados ao react-hook-form.              |
| `breadcrumb`    | Trilha de navegação hierárquica (breadcrumb).                        |
| `badge`         | Selo compacto para status e rótulos com variantes.                   |
| `toast`         | Notificação temporária (toast) com variantes e ação.                 |
| `text-field`    | Campo de texto com label, ajuda e erro integrado ao formulário.      |
| `select`        | Seletor suspenso para escolha de opções.                             |
| `label`         | Rótulo de formulário acessível baseado no Radix Label.               |

## 🏗️ Estrutura do Projeto

```
packages/base-ui/
├── index.json              # Registry index (lista todos os componentes)
├── lib/
│   └── utils.ts           # Função cn() para merge de classes
├── registry/
│   ├── button.json        # Registry do componente Button
│   └── text.json          # Registry do componente Text
├── templates/
│   ├── buttons/
│   │   ├── button.tsx     # Componente Button
│   │   ├── button.scss    # Estilos SCSS do Button
│   │   └── Button.stories.tsx  # Stories do Storybook
│   └── text/
│       ├── text.tsx       # Componente Text
│       ├── text.scss      # Estilos SCSS do Text
│       └── Text.stories.tsx   # Stories do Storybook
└── README.md              # Este arquivo
```

## 🎨 Estilos CSS

Os componentes utilizam SCSS com variáveis CSS customizadas. Certifique-se de importar o arquivo SCSS correspondente após instalar um componente:

```tsx
// No seu arquivo global de estilos ou no componente
import "@/components/ui/button.scss";
```

As variáveis CSS utilizadas seguem o padrão do design system Omixfy:

- `--of-primary-*` - Cores primárias
- `--of-secondary-*` - Cores secundárias
- `--of-neutral-*` - Cores neutras

## 🛠️ Desenvolvimento

### Adicionando Novos Componentes

Para adicionar um novo componente ao registry:

1. **Crie o componente** em `templates/[component-name]/`

   ```tsx
   // templates/input/input.tsx
   ```

2. **Crie o arquivo de estilos** (se necessário)

   ```scss
   // templates/input/input.scss
   ```

3. **Crie o registry JSON** em `registry/[component-name].json`

   ```json
   {
     "$schema": "https://ui.shadcn.com/schema/registry-item.json",
     "name": "input",
     "type": "registry:component",
     ...
   }
   ```

4. **Registre no index.json**
   ```json
   {
     "name": "input",
     "type": "registry:component",
     "files": [
       {
         "path": "registry/input.json",
         "type": "registry:component"
       }
     ]
   }
   ```

### Padrões a Seguir

- **Imports**: Use `@/lib/utils` no registry (será resolvido no projeto do usuário)
- **Naming**: Use kebab-case para arquivos (`button.tsx`, `input-field.tsx`)
- **Componentes**: Use PascalCase para nomes de componentes (`Button`, `InputField`)
- **Variantes**: Use `class-variance-authority` (cva) para gerenciar variantes
- **Estilos**: Prefira classes CSS customizadas via SCSS para manter consistência com o design system

## 📝 Dependências

### Obrigatórias

- `clsx` - Composição de classes CSS
- `tailwind-merge` - Merge seguro de classes Tailwind
- `class-variance-authority` - Gerenciamento de variantes de componentes

### Opcionais

- `lucide-react` - Biblioteca de ícones (quando necessário)

## 🔗 Recursos

- [Documentação shadcn/ui](https://ui.shadcn.com/)
- [Schema do Registry](https://ui.shadcn.com/schema.json)
- [Schema do Componente](https://ui.shadcn.com/schema/registry-item.json)
- [Documentação class-variance-authority](https://cva.style/docs)

## 📄 Licença

Este projeto segue a licença do projeto principal Omixfy UI.
