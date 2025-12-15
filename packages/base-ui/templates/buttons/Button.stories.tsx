import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./button"

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Um componente de botão customizável seguindo o design system do Omixfy usando CSS puro. As variantes são definidas no arquivo button.scss.

## Instalação

\`\`\`bash
npx shadcn-ui@latest add "https://raw.githubusercontent.com/omixfyShop/omixfy-ui/main/packages/base-ui/registry/button.json"
\`\`\`

## Uso Básico

\`\`\`tsx
import { Button } from "@/components/ui/button"

// Botão primário
<Button variant="primary">Clique aqui</Button>

// Botão secundário
<Button variant="secondary">Cancelar</Button>

// Botão com outline
<Button variant="primary" appearance="outline">Ver mais</Button>

// Botão com tamanho pequeno
<Button variant="primary" size="sm">Pequeno</Button>
\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["action", "primary", "secondary", "link"],
      description: "Variante de cor do botão (classes CSS: _btn-action, _btn-primary, _btn-secondary, _btn-link)",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
        category: "Variantes CSS",
      },
    },
    appearance: {
      control: "select",
      options: ["solid", "outline", "basic"],
      description: "Aparência do botão (classes CSS: solid sem classe, _btn-outline, _btn-basic)",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "solid" },
        category: "Variantes CSS",
      },
    },
    size: {
      control: "select",
      options: ["default", "sm", "md"],
      description: "Tamanho do botão (classes CSS: default sem classe, _btn-sm, _btn-md)",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
        category: "Variantes CSS",
      },
    },
    full: {
      control: "boolean",
      description: "Botão com largura total (classe CSS: _btn-full)",
      table: {
        type: { summary: "boolean" },
        category: "Variantes CSS",
      },
    },
    loading: {
      control: "boolean",
      description: "Estado de carregamento (classe CSS: _btn-loading)",
      table: {
        type: { summary: "boolean" },
        category: "Variantes CSS",
      },
    },
    icon: {
      control: "boolean",
      description: "Botão apenas com ícone (adiciona classes Tailwind: p-1 min-h-12 min-w-12)",
      table: {
        type: { summary: "boolean" },
        category: "Variantes CSS",
      },
    },
    notification: {
      control: "boolean",
      description: "Exibe notificação no botão (classe CSS: _btn-notification)",
      table: {
        type: { summary: "boolean" },
        category: "Variantes CSS",
      },
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o botão (usa o estado :disabled do CSS)",
      table: {
        type: { summary: "boolean" },
      },
    },
    children: {
      control: "text",
      description: "Conteúdo do botão",
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Action: Story = {
  name: "Action (Solid)",
  args: {
    variant: "action",
    appearance: "solid",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Variante action com aparência solid (classe CSS: _btn-action)",
      },
    },
  },
}

export const Primary: Story = {
  name: "Primary (Solid)",
  args: {
    variant: "primary",
    appearance: "solid",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Variante primary com aparência solid (classe CSS: _btn-primary)",
      },
    },
  },
}

export const Secondary: Story = {
  name: "Secondary (Solid)",
  args: {
    variant: "secondary",
    appearance: "solid",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Variante secondary com aparência solid (classe CSS: _btn-secondary)",
      },
    },
  },
}

export const Link: Story = {
  name: "Link",
  args: {
    variant: "link",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Variante link (classe CSS: _btn-link)",
      },
    },
  },
}

export const ActionOutline: Story = {
  name: "Action Outline",
  args: {
    variant: "action",
    appearance: "outline",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Variante action com aparência outline (classes CSS: _btn-action _btn-outline)",
      },
    },
  },
}

export const PrimaryOutline: Story = {
  name: "Primary Outline",
  args: {
    variant: "primary",
    appearance: "outline",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Variante primary com aparência outline (classes CSS: _btn-primary _btn-outline)",
      },
    },
  },
}

export const SecondaryOutline: Story = {
  name: "Secondary Outline",
  args: {
    variant: "secondary",
    appearance: "outline",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Variante secondary com aparência outline (classes CSS: _btn-secondary _btn-outline)",
      },
    },
  },
}

export const ActionBasic: Story = {
  name: "Action Basic",
  args: {
    variant: "action",
    appearance: "basic",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Variante action com aparência basic (classes CSS: _btn-action _btn-basic)",
      },
    },
  },
}

export const PrimaryBasic: Story = {
  name: "Primary Basic",
  args: {
    variant: "primary",
    appearance: "basic",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Variante primary com aparência basic (classes CSS: _btn-primary _btn-basic)",
      },
    },
  },
}

export const SecondaryBasic: Story = {
  name: "Secondary Basic",
  args: {
    variant: "secondary",
    appearance: "basic",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Variante secondary com aparência basic (classes CSS: _btn-secondary _btn-basic)",
      },
    },
  },
}

export const Sizes: Story = {
  name: "Tamanhos",
  render: (args) => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
      <Button {...args} size="default">
        Default
      </Button>
      <Button {...args} size="sm">
        Small (_btn-sm)
      </Button>
      <Button {...args} size="md">
        Medium (_btn-md)
      </Button>
    </div>
  ),
  args: {
    variant: "primary",
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstração de todos os tamanhos disponíveis no CSS: default (sem classe), sm (_btn-sm) e md (_btn-md).",
      },
    },
  },
}

export const AllVariants: Story = {
  name: "Todas as Variantes CSS",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <h3 style={{ marginBottom: "8px", fontSize: "14px", fontWeight: 600 }}>Action</h3>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
          <Button variant="action" appearance="solid">
            Action Solid
          </Button>
          <Button variant="action" appearance="outline">
            Action Outline
          </Button>
          <Button variant="action" appearance="basic">
            Action Basic
          </Button>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: "8px", fontSize: "14px", fontWeight: 600 }}>Primary</h3>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
          <Button variant="primary" appearance="solid">
            Primary Solid
          </Button>
          <Button variant="primary" appearance="outline">
            Primary Outline
          </Button>
          <Button variant="primary" appearance="basic">
            Primary Basic
          </Button>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: "8px", fontSize: "14px", fontWeight: 600 }}>Secondary</h3>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
          <Button variant="secondary" appearance="solid">
            Secondary Solid
          </Button>
          <Button variant="secondary" appearance="outline">
            Secondary Outline
          </Button>
          <Button variant="secondary" appearance="basic">
            Secondary Basic
          </Button>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: "8px", fontSize: "14px", fontWeight: 600 }}>Link</h3>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
          <Button variant="link">Link</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Todas as variantes visuais disponíveis no CSS (button.scss): action, primary, secondary e link, cada uma com as aparências solid, outline e basic.",
      },
    },
  },
}

export const Disabled: Story = {
  name: "Estados Desabilitados",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
        <Button variant="action" disabled>
          Disabled Action
        </Button>
        <Button variant="primary" disabled>
          Disabled Primary
        </Button>
        <Button variant="secondary" disabled>
          Disabled Secondary
        </Button>
        <Button variant="link" disabled>
          Disabled Link
        </Button>
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
        <Button variant="primary" appearance="outline" disabled>
          Disabled Primary Outline
        </Button>
        <Button variant="secondary" appearance="outline" disabled>
          Disabled Secondary Outline
        </Button>
        <Button variant="primary" appearance="basic" disabled>
          Disabled Primary Basic
        </Button>
        <Button variant="secondary" appearance="basic" disabled>
          Disabled Secondary Basic
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Exemplos de botões em estado desabilitado (usando :disabled do CSS) para todas as variantes e aparências.",
      },
    },
  },
}

export const FullWidth: Story = {
  name: "Largura Total",
  render: () => (
    <div style={{ width: "400px" }}>
      <Button variant="primary" full>
        Botão com largura total
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Botão com largura total usando a prop full (classe CSS: _btn-full).",
      },
    },
  },
}

export const Loading: Story = {
  name: "Estado de Carregamento",
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
      <Button variant="primary" loading>
        Carregando...
      </Button>
      <Button variant="secondary" loading>
        Carregando...
      </Button>
      <Button variant="action" loading>
        Carregando...
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Botões em estado de carregamento (classe CSS: _btn-loading).",
      },
    },
  },
}

export const Icon: Story = {
  name: "Botão Ícone",
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
      <Button variant="primary" icon>
        +
      </Button>
      <Button variant="secondary" icon>
        ×
      </Button>
      <Button variant="action" icon>
        ✓
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Botões apenas com ícone usando a prop icon (adiciona classes Tailwind: p-1 min-h-12 min-w-12).",
      },
    },
  },
}

export const Notification: Story = {
  name: "Com Notificação",
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
      <Button variant="primary" notification>
        Notificações
      </Button>
      <Button variant="secondary" notification>
        Notificações
      </Button>
      <Button variant="action" notification>
        Notificações
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Botões com indicador de notificação (classe CSS: _btn-notification).",
      },
    },
  },
}

export const Interactive: Story = {
  name: "Interativo",
  args: {
    variant: "primary",
    children: "Click me",
    onClick: () => alert("Button clicked!"),
  },
  parameters: {
    docs: {
      description: {
        story: "Botão com interação - clique para ver o alerta.",
      },
    },
  },
}

