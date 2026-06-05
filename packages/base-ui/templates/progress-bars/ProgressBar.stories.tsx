import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBar } from "./progress-bar";

const meta = {
  component: ProgressBar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Barra de progresso com rótulo e percentual, seguindo o design system do Omixfy.

## Instalação

\`\`\`bash
npx shadcn@latest add https://raw.githubusercontent.com/omixfyShop/omixfy-ui/main/packages/base-ui/registry/progress-bar.json
\`\`\`

## Uso Básico

\`\`\`tsx
import { ProgressBar } from "@/components/ui/progress-bar"

<ProgressBar value={60} label="Publicando…" />
\`\`\``,
      },
    },
  },
  args: { value: 60, label: "Publicando…" },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Completo: Story = {
  args: { value: 100, label: "Concluído" },
};

export const SemRotulo: Story = {
  args: { value: 35, label: undefined },
};
