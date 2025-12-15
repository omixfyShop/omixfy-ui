import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card, CardSection } from "./card"

const meta = {
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Um componente de card customizável seguindo o padrão Polaris Shopify adaptado ao design system do Omixfy usando CSS puro.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Título do card exibido no header",
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
    actions: {
      control: "object",
      description: "Array de ações exibidas no header ao lado do título",
      table: {
        type: { summary: "DisableableAction[]" },
        category: "Props",
      },
    },
    primaryFooterAction: {
      control: "object",
      description: "Ação primária no footer do card",
      table: {
        type: { summary: "DestructableAction" },
        category: "Props",
      },
    },
    secondaryFooterActions: {
      control: "object",
      description: "Array de ações secundárias no footer",
      table: {
        type: { summary: "DestructableAction[]" },
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
    title: "Card Title",
    children: "Conteúdo do card aqui.",
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

export const WithHeaderActions: Story = {
  name: "Com Ações no Header",
  args: {
    title: "Card com Ações",
    actions: [
      {
        content: "Editar",
        onAction: () => alert("Editar clicado"),
      },
      {
        content: "Mais opções",
        onAction: () => alert("Mais opções clicado"),
      },
    ],
    children: "Card com ações no header ao lado do título.",
  },
  parameters: {
    docs: {
      description: {
        story: "Card com ações no header ao lado do título.",
      },
    },
  },
}

export const WithPrimaryFooterAction: Story = {
  name: "Com Ação Primária no Footer",
  args: {
    title: "Card com Footer",
    children: "Conteúdo do card com ação primária no footer.",
    primaryFooterAction: {
      content: "Salvar",
      onAction: () => alert("Salvar clicado"),
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Card com ação primária no footer.",
      },
    },
  },
}

export const WithSecondaryFooterActions: Story = {
  name: "Com Ações Secundárias no Footer",
  args: {
    title: "Card com Footer",
    children: "Conteúdo do card com ações secundárias no footer.",
    secondaryFooterActions: [
      {
        content: "Cancelar",
        onAction: () => alert("Cancelar clicado"),
      },
      {
        content: "Excluir",
        onAction: () => alert("Excluir clicado"),
        destructive: true,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Card com ações secundárias no footer.",
      },
    },
  },
}

export const WithFullFooter: Story = {
  name: "Com Footer Completo",
  args: {
    title: "Card Completo",
    children: "Card com todas as ações no footer (primária e secundárias).",
    primaryFooterAction: {
      content: "Salvar",
      onAction: () => alert("Salvar clicado"),
    },
    secondaryFooterActions: [
      {
        content: "Cancelar",
        onAction: () => alert("Cancelar clicado"),
      },
      {
        content: "Excluir",
        onAction: () => alert("Excluir clicado"),
        destructive: true,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Card com footer completo contendo ação primária e ações secundárias.",
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
  args: {
    title: "Card Completo",
    actions: [
      {
        content: "Editar",
        onAction: () => alert("Editar clicado"),
      },
      {
        content: "Mais opções",
        onAction: () => alert("Mais opções clicado"),
        disabled: false,
      },
    ],
    children: (
      <>
        <CardSection title="Informações Gerais">
          <p>Esta é a primeira seção com informações gerais sobre o card.</p>
        </CardSection>
        <CardSection title="Detalhes">
          <p>Esta é a segunda seção com detalhes adicionais.</p>
        </CardSection>
      </>
    ),
    primaryFooterAction: {
      content: "Salvar",
      onAction: () => alert("Salvar clicado"),
    },
    secondaryFooterActions: [
      {
        content: "Cancelar",
        onAction: () => alert("Cancelar clicado"),
      },
      {
        content: "Excluir",
        onAction: () => alert("Excluir clicado"),
        destructive: true,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Card completo com todas as funcionalidades: título, ações no header, seções manuais e footer completo.",
      },
    },
  },
}

export const WithDisabledAction: Story = {
  name: "Com Ação Desabilitada",
  args: {
    title: "Card com Ação Desabilitada",
    actions: [
      {
        content: "Habilitado",
        onAction: () => alert("Habilitado clicado"),
        disabled: false,
      },
      {
        content: "Desabilitado",
        onAction: () => alert("Não deve aparecer"),
        disabled: true,
      },
    ],
    children: "Card com uma ação habilitada e outra desabilitada no header.",
  },
  parameters: {
    docs: {
      description: {
        story: "Card demonstrando ações desabilitadas no header.",
      },
    },
  },
}
