# Contexto do produto — Omixfy

Este documento traz um resumo prático e direto sobre o produto Omixfy, pensado para ser usado como contexto na IDE (README, painel do workspace, CONTEXT.md). Ele descreve visão, público, proposição de valor, funcionalidades principais, fluxos usuais, integrações esperadas, métricas-chave e recomendações técnicas/operacionais.

## Visão e propósito

Omixfy é uma plataforma para gerenciamento e orquestração de catálogo de items (produtos/entidades do domínio) e operações associadas — voltada para pequenas e médias empresas, marketplaces e operadores que precisam configurar e manter catálogos de forma rápida, padronizada e integrada com canais de venda/logística. O objetivo é reduzir o tempo até o valor (time-to-value), automatizar tarefas repetitivas e garantir consistência dos dados dos items.

## Proposta de valor

- Permitir configuração e publicação rápida do catálogo.
- Reduzir erros de dados (SKU, descrições, imagens) com validações e templates.
- Conectar facilmente com canais (e-commerce, marketplaces, ERPs).
- Fornecer ferramentas de importação, preview e workflows de aprovação.
- Dar visibilidade e controle sobre inventário, variações e atributos.

## Público-alvo / Personas

- Administrador de loja / Gerente de catálogo: importa e organiza items.
- Operador de e-commerce: publica e sincroniza items com canais.
- Integrador / Desenvolvedor: conecta Omixfy a ERPs, marketplaces e serviços externos.
- Gestor operacional: analisa métricas de performance do catálogo.

## Principais funcionalidades (alto nível)

- CRUD completo de items com atributos flexíveis (name, sku, categorias, atributos customizáveis, imagens, preços, estoque).
- Onboarding guiado para primeiro acesso (configuração inicial do catálogo e preferências).
- Importação/exportação CSV e integração via APIs (REST) para sincronização em massa.
- Versionamento/rascunhos e workflows de aprovação (draft → revisão → publicar).
- Preview de como o item aparece em canais (card view, listagem).
- Permissões por usuário/role (admin, editor, viewer).
- Telemetria e logs de alterações (audit trail).
- Upload de assets com integração S3 (ou compatível).
- Notificações e alertas (ex.: baixa de estoque, falha na importação).
