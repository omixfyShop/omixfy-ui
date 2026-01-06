import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card, CardSection, CardHeader, CardFooter } from "./card"

const meta = {
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Um componente de card customizável seguindo o padrão Polaris Shopify adaptado ao design system do Omixfy usando CSS puro.

## Instalação

\`\`\`bash
npx shadcn@latest add https://raw.githubusercontent.com/omixfyShop/omixfy-ui/main/packages/base-ui/registry/card.json
\`\`\`

## Uso Básico

\`\`\`tsx
import { Card, CardSection, CardHeader, CardFooter } from "@/components/ui/card"

// Card básico com título
<Card title="Título do Card">
  Conteúdo do card aqui.
</Card>

// Card com seções
<Card title="Card com Seções">
  <CardSection title="Seção 1">
    Conteúdo da primeira seção.
  </CardSection>
  <CardSection title="Seção 2">
    Conteúdo da segunda seção.
  </CardSection>
</Card>

// Card com header e footer customizados
<Card title="Card com Footer">
  <CardHeader>
    {/* Conteúdo livre para adicionar */}
    <h2>Título Customizado</h2>
    <button>Editar</button>
  </CardHeader>
  Conteúdo do card.
  <CardFooter>
    {/* Conteúdo livre para adicionar botões */}
    <button>Cancelar</button>
    <button>Salvar</button>
  </CardFooter>
</Card>
\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Título do card exibido no header (só aparece se não houver CardHeader)",
      table: {
        type: { summary: "string" },
        category: "Props",
      },
    },
    sectioned: {
      control: "boolean",
      description: "Quando true, automaticamente envolve cada child em Card.Section",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Props",
      },
    },
    children: {
      control: "text",
      description: "Conteúdo do card",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Props",
      },
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  name: "Básico com Título",
  args: {
    title: "Integração de marketplace",
    children: "Adicione as plataformas para integrar os produtos, é importante já ter a conta para ser integrada.",
  },
  parameters: {
    docs: {
      description: {
        story: "Card básico com título e conteúdo simples.",
      },
    },
  },
}

export const WithoutTitle: Story = {
  name: "Sem Título",
  args: {
    children: "Card sem título, apenas com conteúdo.",
  },
  parameters: {
    docs: {
      description: {
        story: "Card sem título, apenas com conteúdo.",
      },
    },
  },
}

export const WithSectioned: Story = {
  name: "Com Sectioned",
  args: {
    title: "Card com Sectioned",
    sectioned: true,
    children: (
      <>
        <div>Primeira seção de conteúdo</div>
        <div>Segunda seção de conteúdo</div>
        <div>Terceira seção de conteúdo</div>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Card com sectioned=true, que automaticamente envolve cada child em Card.Section.",
      },
    },
  },
}

export const WithCardHeader: Story = {
  name: "Com CardHeader",
  render: () => (
    <Card>
      <CardHeader>
        <h2 style={{ margin: 0, flex: 1 }}>Card com Header Customizado</h2>
        <button
          onClick={() => alert("Editar clicado")}
          style={{
            background: "none",
            border: "none",
            padding: "4px 8px",
            color: "#EA580C",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Editar
        </button>
      </CardHeader>
      <div>Conteúdo do card com header customizado.</div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Card com CardHeader permitindo conteúdo livre no header.",
      },
    },
  },
}

export const WithCardFooter: Story = {
  name: "Com CardFooter",
  render: () => (
    <Card title="Card com Footer">
      <div>Conteúdo do card com footer customizado.</div>
      <CardFooter>
        <button
          onClick={() => alert("Cancelar clicado")}
          style={{
            background: "none",
            border: "none",
            padding: "6px 12px",
            color: "#292929",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Cancelar
        </button>
        <button
          onClick={() => alert("Salvar clicado")}
          style={{
            padding: "8px 16px",
            background: "#EA580C",
            border: "none",
            borderRadius: "8px",
            color: "#FFF5ED",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Salvar
        </button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Card com CardFooter permitindo conteúdo livre no footer.",
      },
    },
  },
}

export const WithHeaderAndFooter: Story = {
  name: "Com Header e Footer",
  render: () => (
    <Card title="Card Completo">
      <CardHeader>
        <h2 style={{ margin: 0, flex: 1 }}>Título Customizado</h2>
        <button
          onClick={() => alert("Editar clicado")}
          style={{
            background: "none",
            border: "none",
            padding: "4px 8px",
            color: "#EA580C",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Editar
        </button>
      </CardHeader>
      <div>Conteúdo do card com header e footer customizados.</div>
      <CardFooter>
        <button
          onClick={() => alert("Cancelar clicado")}
          style={{
            background: "none",
            border: "none",
            padding: "6px 12px",
            color: "#292929",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Cancelar
        </button>
        <button
          onClick={() => alert("Excluir clicado")}
          style={{
            background: "none",
            border: "none",
            padding: "6px 12px",
            color: "#EA580C",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Excluir
        </button>
        <button
          onClick={() => alert("Salvar clicado")}
          style={{
            padding: "8px 16px",
            background: "#EA580C",
            border: "none",
            borderRadius: "8px",
            color: "#FFF5ED",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Salvar
        </button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Card com CardHeader e CardFooter customizados. Note que o title do Card é ignorado quando há CardHeader.",
      },
    },
  },
}

export const WithManualSections: Story = {
  name: "Com Card.Section Manual",
  args: {
    title: "Card com Seções Manuais",
    children: (
      <>
        <CardSection title="Seção 1">
          <p>Conteúdo da primeira seção.</p>
        </CardSection>
        <CardSection title="Seção 2">
          <p>Conteúdo da segunda seção.</p>
        </CardSection>
        <CardSection title="Seção 3">
          <p>Conteúdo da terceira seção.</p>
        </CardSection>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Card com seções criadas manualmente usando Card.Section.",
      },
    },
  },
}

export const Complete: Story = {
  name: "Card Completo",
  render: () => (
    <Card>
      <CardHeader>
        <h2 style={{ margin: 0, flex: 1 }}>Card Completo</h2>
        <button
          onClick={() => alert("Editar clicado")}
          style={{
            background: "none",
            border: "none",
            padding: "4px 8px",
            color: "#EA580C",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Editar
        </button>
        <button
          onClick={() => alert("Mais opções clicado")}
          style={{
            background: "none",
            border: "none",
            padding: "4px 8px",
            color: "#EA580C",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Mais opções
        </button>
      </CardHeader>
      <div>
        <CardSection title="Informações Gerais">
          <p>Esta é a primeira seção com informações gerais sobre o card.</p>
        </CardSection>
        <CardSection title="Detalhes">
          <p>Esta é a segunda seção com detalhes adicionais.</p>
        </CardSection>
      </div>
      <CardFooter>
        <button
          onClick={() => alert("Cancelar clicado")}
          style={{
            background: "none",
            border: "none",
            padding: "6px 12px",
            color: "#292929",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Cancelar
        </button>
        <button
          onClick={() => alert("Excluir clicado")}
          style={{
            background: "none",
            border: "none",
            padding: "6px 12px",
            color: "#EA580C",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Excluir
        </button>
        <button
          onClick={() => alert("Salvar clicado")}
          style={{
            padding: "8px 16px",
            background: "#EA580C",
            border: "none",
            borderRadius: "8px",
            color: "#FFF5ED",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Salvar
        </button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Card completo com todas as funcionalidades: CardHeader customizado, seções manuais e CardFooter customizado.",
      },
    },
  },
}

export const TitleOverride: Story = {
  name: "Title Sobrescrito por CardHeader",
  render: () => (
    <Card title="Este título não aparece">
      <CardHeader>
        <h2 style={{ margin: 0, flex: 1 }}>Este título sobrescreve o title prop</h2>
      </CardHeader>
      <div>Quando há um CardHeader, o title prop é ignorado.</div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstra que quando há um CardHeader, o title prop do Card é ignorado.",
      },
    },
  },
}
