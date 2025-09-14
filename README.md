# iPet - Plataforma de Petshops

iPet é uma plataforma completa que conecta donos de pets às melhores petshops da região, oferecendo serviços com coleta e entrega em casa, similar ao modelo do iFood.

## 🐕 Funcionalidades Principais

### Para Clientes
- **Busca Avançada**: Encontre petshops por localização, serviços específicos e produtos
- **Agendamento Completo**: Agende serviços com opcionais (perfumes, laços, gravatas, etc.)
- **Processo de Compra Real**: Checkout completo com múltiplas formas de pagamento (PIX, cartão, dinheiro)
- **Rastreamento GPS**: Acompanhe o motorista em tempo real no mapa
- **Câmera Ao Vivo**: Visualize seu pet durante o serviço na petshop
- **iPet Club**: Sistema de assinatura com benefícios exclusivos e recorrência
- **Categorias Rápidas**: Acesso direto a serviços, produtos, emergências e delivery

### Para Petshops
- **Perfis Visuais**: Imagens personalizadas com gradientes únicos para cada petshop
- **Catálogo Completo**: Gerenciamento de serviços com preços e opcionais
- **Sistema de Entregas**: Coordene coletas e entregas com rastreamento
- **Dashboard Administrativo**: Controle total de pedidos, agenda e motoristas

### 🚗 Sistema de Entrega Inteligente
- **Rastreamento GPS**: Localização em tempo real do motorista no mapa
- **Estimativa Dinâmica**: Cálculo automático de tempo de chegada
- **Comunicação Direta**: Chat e ligação direta com o motorista
- **Câmera Ao Vivo**: Visualização do pet durante o serviço (simulação)
- **Notificações**: Atualizações automáticas de status em tempo real

## 🎯 Funcionalidades Implementadas

### ✅ Sistema de Agendamento Avançado
- **Modal de Agendamento**: Interface completa para agendar serviços
- **Informações do Pet**: Cadastro de nome, raça, porte e observações
- **Seleção de Data/Hora**: Calendário com horários disponíveis
- **Serviços Opcionais**: Perfumes, laços, gravatas, esmalte para unhas
- **Cálculo Automático**: Total atualizado em tempo real

### 💳 Processo de Compra Completo
- **Checkout em 3 Etapas**: Revisão → Pagamento → Confirmação
- **Múltiplas Formas de Pagamento**: PIX, cartão de crédito/débito, dinheiro
- **Dados do Cliente**: Formulário completo com validação
- **Resumo do Pedido**: Detalhamento de todos os itens e valores
- **Processamento Simulado**: Loading e confirmação realistas

### 📍 Rastreamento em Tempo Real
- **Mapa Interativo**: Visualização da localização do motorista
- **Progresso Visual**: 8 etapas do processo com status atual
- **Informações do Motorista**: Perfil, avaliação e contato
- **Câmera Ao Vivo**: Simulação de visualização do pet durante o serviço
- **Estimativa de Tempo**: Atualização dinâmica do tempo de chegada

### 🔍 Sistema de Busca Avançado
- **Busca por Localização**: Campo para endereço ou CEP
- **Busca por Serviços**: Filtro por tipo de serviço ou produto
- **Serviços Populares**: Tags clicáveis para acesso rápido
- **Categorias Rápidas**: Botões visuais para serviços, produtos, emergência
- **Busca por Região**: Filtros por zona da cidade

### 🎨 Interface Visual Aprimorada
- **Imagens das Petshops**: Emojis e gradientes únicos para cada estabelecimento
- **Paleta Personalizada**: Cores baseadas na logo oficial (laranja + azul)
- **Componentes Reutilizáveis**: Sistema de design consistente
- **Animações Suaves**: Transições e hover effects profissionais
- **Responsividade Total**: Funciona perfeitamente em mobile e desktop

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js 15 com TypeScript e App Router
- **Styling**: Tailwind CSS com classes customizadas
- **Componentes**: React com hooks (useState, useEffect)
- **Roteamento**: Next.js App Router com parâmetros dinâmicos
- **Banco de Dados**: Supabase (PostgreSQL) - preparado para integração
- **Autenticação**: Supabase Auth - preparado para integração
- **Deploy**: Vercel (recomendado)

## 📦 Instalação e Configuração

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <repository-url>
cd ipet

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

O aplicativo estará disponível em `http://localhost:3000`

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── page.tsx           # Página inicial
│   ├── petshops/          # Listagem de petshops
│   ├── petshop/[id]/      # Detalhes da petshop
│   ├── club/              # iPet Club
│   ├── tracking/          # Rastreamento de pedidos
│   ├── login/             # Autenticação
│   └── register/          # Cadastro
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Cabeçalho
│   └── Footer.tsx         # Rodapé
└── lib/                   # Utilitários e configurações
```

## 🎨 Design System

O iPet utiliza um design system baseado na logo oficial:
- **Cores Primárias**: Laranja (#f97316) e Azul (#3b82f6)
- **Cores Secundárias**: Verde (#10b981) para status positivos
- **Tipografia**: Inter (Google Fonts)
- **Logo**: Integrada em todas as páginas principais
- **Componentes**: Tailwind CSS com classes utilitárias customizadas
- **Responsividade**: Mobile-first design
- **Animações**: Transições suaves e hover effects

## 📱 Páginas Implementadas

### ✅ Concluídas
- [x] **Página Inicial**: Hero section, features e call-to-actions
- [x] **Listagem de Petshops**: Busca, filtros e cards das petshops
- [x] **Detalhes da Petshop**: Serviços, produtos e sistema de carrinho
- [x] **iPet Club**: Planos de assinatura e benefícios
- [x] **Rastreamento**: Acompanhamento em tempo real dos pedidos
- [x] **Login/Registro**: Formulários de autenticação
- [x] **Layout Base**: Header responsivo e footer

### 🚧 Em Desenvolvimento
- [ ] **Banco de Dados**: Configuração do Supabase
- [ ] **Sistema de Autenticação**: Integração com Supabase Auth
- [ ] **Sistema de Pedidos**: Carrinho e checkout
- [ ] **Dashboard Petshops**: Painel administrativo
- [ ] **Sistema de Pagamentos**: Integração com gateway
- [ ] **Geolocalização**: Integração com mapas
- [ ] **Notificações**: Push notifications e emails

## 🔧 Próximos Passos

1. **Configurar Supabase**
   - Criar projeto no Supabase
   - Configurar tabelas do banco de dados
   - Implementar autenticação

2. **Sistema de Pedidos**
   - Implementar carrinho de compras
   - Processo de checkout
   - Integração com pagamentos

3. **Dashboard para Petshops**
   - Painel de controle
   - Gestão de produtos/serviços
   - Sistema de entregas

4. **Funcionalidades Avançadas**
   - Geolocalização e mapas
   - Sistema de avaliações
   - Chat em tempo real
   - Notificações push

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto iPet, entre em contato através dos issues do GitHub.

---

**iPet** - Cuidado completo para seu pet 🐾
