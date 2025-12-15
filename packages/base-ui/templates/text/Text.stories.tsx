import type { Meta, StoryObj } from "@storybook/react-vite"
import { Text } from "./text"

const meta = {
  component: Text,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Um componente de tipografia customizável seguindo o padrão Polaris Shopify adaptado ao design system do Omixfy.

## Instalação

\`\`\`bash
npx shadcn-ui@latest add "https://raw.githubusercontent.com/omixfyShop/omixfy-ui/main/packages/base-ui/registry/text.json"
\`\`\`

## Uso Básico

\`\`\`tsx
import { Text } from "@/components/ui/text"

// Título
<Text tag="h1" size="3xl">Título Principal</Text>

// Parágrafo
<Text tag="p" size="md">Texto do parágrafo</Text>

// Texto inline
<Text tag="span" size="sm">Texto pequeno</Text>
\`\`\`

## Tamanhos Disponíveis

- **3xl** (36px) - Títulos principais
- **2xl** (30px) - Títulos grandes
- **xl** (24px) - Títulos médios
- **lg** (20px) - Texto grande
- **md** (14px) - Texto padrão
- **sm** (13px) - Texto pequeno
- **xs** (12px) - Texto extra pequeno
- **bodyLg** (14px) - Corpo de texto grande
- **bodyMd** (13px) - Corpo de texto médio
- **bodySm** (12px) - Corpo de texto pequeno
- **bodyXs** (11px) - Corpo de texto extra pequeno

## Boas Práticas

### Títulos
Use as variantes de tamanho apropriadas para títulos. Os títulos devem:
- Descrever claramente a seção da interface à qual se referem
- Destacar o conceito ou informação mais importante que os usuários precisam saber
- Estar posicionados no topo da seção da interface à qual se referem

### Legendas
Use a variante **bodySm** para legendas:
- Use para rótulos secundários em gráficos e tabelas
- Pode ser usado para timestamps em listas de conteúdo
- Não use esta variante para outros casos
- Não use esta variante para textos maiores que algumas palavras
- Não use esta variante para efeito estético ou para quebrar o tamanho padrão de texto

### Estilos de Texto
Os estilos de texto devem ser:
- Usados quando necessário para ajudar os usuários a entender o significado do texto
- Suavizados se o texto for menos importante que o texto ao redor
- De aviso se o texto denotar algo que precisa de atenção ou ação
- Semibold para campos de entrada ou totais de linha em tabelas de preços
- Combinados com símbolos, como uma seta ou sinal de dólar, ao usar estilos de sucesso ou críticos

### Texto Visualmente Oculto
O texto visualmente oculto deve:
- Não ser usado se a marcação semântica pode tornar o conteúdo compreensível para pessoas que usam tecnologia assistiva
- Ser usado para fornecer contexto extra quando a marcação semântica não é suficiente
- Ser usado em qualquer conteúdo que normalmente está presente mas está sendo omitido
- Fazer sentido no contexto quando usado com um leitor de tela`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    tag: {
      control: "select",
      options: ["span", "p", "h1", "h2", "h3", "h4", "h5", "h6"],
      description: "Tag HTML a ser renderizada",
      table: {
        type: { summary: "TextTag" },
        defaultValue: { summary: "p" },
        category: "Props",
      },
    },
    size: {
      control: "select",
      options: ["3xl", "2xl", "xl", "lg", "md", "sm", "xs", "bodyLg", "bodyMd", "bodySm", "bodyXs"],
      description: "Tamanho do texto",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
        category: "Props",
      },
    },
    children: {
      control: "text",
      description: "Conteúdo do texto",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Props",
      },
    },
    className: {
      control: "text",
      description: "Classes CSS adicionais",
      table: {
        type: { summary: "string" },
        category: "Props",
      },
    },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Padrão (p, md)",
  args: {
    tag: "p",
    size: "md",
    children: "Texto padrão com tamanho médio",
  },
  parameters: {
    docs: {
      description: {
        story: "Texto padrão usando tag p e tamanho md.",
      },
    },
  },
}

export const Sizes: Story = {
  name: "Todos os Tamanhos",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text tag="p" size="3xl">
        3xl - Texto extra extra grande (36px)
      </Text>
      <Text tag="p" size="2xl">
        2xl - Texto extra grande (30px)
      </Text>
      <Text tag="p" size="xl">
        xl - Texto extra large (24px)
      </Text>
      <Text tag="p" size="lg">
        lg - Texto large (20px)
      </Text>
      <Text tag="p" size="md">
        md - Texto médio (14px)
      </Text>
      <Text tag="p" size="sm">
        sm - Texto pequeno (13px)
      </Text>
      <Text tag="p" size="xs">
        xs - Texto extra pequeno (12px)
      </Text>
      <Text tag="p" size="bodyLg">
        bodyLg - Corpo de texto large (14px)
      </Text>
      <Text tag="p" size="bodyMd">
        bodyMd - Corpo de texto médio (13px)
      </Text>
      <Text tag="p" size="bodySm">
        bodySm - Corpo de texto pequeno (12px)
      </Text>
      <Text tag="p" size="bodyXs">
        bodyXs - Corpo de texto extra pequeno (11px)
      </Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstração de todos os tamanhos disponíveis seguindo o padrão Polaris Shopify.",
      },
    },
  },
}

export const Tags: Story = {
  name: "Todas as Tags",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text tag="h1" size="2xl">
        Heading 1 (h1)
      </Text>
      <Text tag="h2" size="xl">
        Heading 2 (h2)
      </Text>
      <Text tag="h3" size="lg">
        Heading 3 (h3)
      </Text>
      <Text tag="h4" size="md">
        Heading 4 (h4)
      </Text>
      <Text tag="h5" size="sm">
        Heading 5 (h5)
      </Text>
      <Text tag="h6" size="sm">
        Heading 6 (h6)
      </Text>
      <Text tag="p" size="md">
        Parágrafo (p)
      </Text>
      <Text tag="span" size="sm">
        Span inline (span)
      </Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstração de todas as tags disponíveis: h1-h6, p e span.",
      },
    },
  },
}

export const WithCustomClass: Story = {
  name: "Com Classe Customizada",
  args: {
    tag: "p",
    size: "lg",
    className: "text-primary-600 font-bold",
    children: "Texto com classe customizada (cor primária e negrito)",
  },
  parameters: {
    docs: {
      description: {
        story: "Texto com classe CSS customizada adicionada via prop className.",
      },
    },
  },
}

export const HeadingExample: Story = {
  name: "Exemplo de Heading",
  args: {
    tag: "h1",
    size: "2xl",
    children: "Título Principal",
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo de uso como heading principal.",
      },
    },
  },
}

export const ParagraphExample: Story = {
  name: "Exemplo de Parágrafo",
  args: {
    tag: "p",
    size: "md",
    children:
      "Este é um exemplo de parágrafo usando o componente Text. Ele pode conter múltiplas linhas de texto e será renderizado com o tamanho e estilo apropriados.",
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo de uso como parágrafo com texto longo.",
      },
    },
  },
}

export const SpanExample: Story = {
  name: "Exemplo de Span",
  render: () => (
    <div>
      <Text tag="p" size="md">
        Este é um parágrafo com um{" "}
        <Text tag="span" size="sm" className="font-semibold text-primary-600">
          span inline
        </Text>{" "}
        dentro dele.
      </Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Exemplo de uso como span inline dentro de outro texto.",
      },
    },
  },
}

export const AllCombinations: Story = {
  name: "Todas as Combinações",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h3 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600 }}>
          Tamanho 3xl
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Text tag="h1" size="3xl">
            h1 com 3xl
          </Text>
          <Text tag="h2" size="3xl">
            h2 com 3xl
          </Text>
          <Text tag="p" size="3xl">
            p com 3xl
          </Text>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600 }}>
          Tamanho 2xl
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Text tag="h1" size="2xl">
            h1 com 2xl
          </Text>
          <Text tag="h2" size="2xl">
            h2 com 2xl
          </Text>
          <Text tag="p" size="2xl">
            p com 2xl
          </Text>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600 }}>
          Tamanho xl
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Text tag="h2" size="xl">
            h2 com xl
          </Text>
          <Text tag="h3" size="xl">
            h3 com xl
          </Text>
          <Text tag="p" size="xl">
            p com xl
          </Text>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600 }}>
          Tamanho lg
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Text tag="h3" size="lg">
            h3 com lg
          </Text>
          <Text tag="p" size="lg">
            p com lg
          </Text>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600 }}>
          Tamanho md
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Text tag="p" size="md">
            p com md
          </Text>
          <Text tag="span" size="md">
            span com md
          </Text>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600 }}>
          Tamanho sm
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Text tag="p" size="sm">
            p com sm
          </Text>
          <Text tag="span" size="sm">
            span com sm
          </Text>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600 }}>
          Tamanho xs
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Text tag="p" size="xs">
            p com xs
          </Text>
          <Text tag="span" size="xs">
            span com xs
          </Text>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600 }}>
          Body Sizes
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Text tag="p" size="bodyLg">
            p com bodyLg
          </Text>
          <Text tag="p" size="bodyMd">
            p com bodyMd
          </Text>
          <Text tag="p" size="bodySm">
            p com bodySm
          </Text>
          <Text tag="p" size="bodyXs">
            p com bodyXs
          </Text>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstração de todas as combinações possíveis de tags e tamanhos seguindo o padrão Polaris Shopify.",
      },
    },
  },
}
