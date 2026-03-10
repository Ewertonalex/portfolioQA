"use client";

export default function TestLab() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-black">
        <div className="mx-auto max-w-5xl px-6 py-16 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
            Laboratório de Testes
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            E-commerce completo para exercitar
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Front, API e Performance.
            </span>
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Esta página apresenta um cenário de{" "}
            <span className="font-medium">e-commerce</span> com login, listagem de produtos,
            carrinho e fluxo de compra, pensado como um{" "}
            <span className="font-medium">campo de treino</span> para diferentes tipos de
            testes: interface, APIs e performance.
          </p>
          <a
            href="/demo-store"
            className="inline-flex items-center rounded-full border border-emerald-500/70 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-500 hover:text-black"
          >
            Acessar loja demo de brinquedos de heróis
          </a>
        </div>
      </section>

      {/* Visão geral do fluxo de e-commerce */}
      <section className="border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-5xl px-6 py-12 space-y-8">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Cenário: Loja online de produtos digitais
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
              Imagine uma loja onde o usuário acessa com login e senha, navega por produtos,
              adiciona itens ao carrinho e conclui um pedido. É um{" "}
              <span className="font-medium">fluxo clássico de negócio</span>, excelente para
              demonstrar maturidade em QA de ponta a ponta.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-[2fr,3fr]">
            <div className="space-y-4 text-sm text-zinc-300">
              <ul className="space-y-2">
                <li>• Login com validação de credenciais e mensagens de erro.</li>
                <li>• Catálogo de produtos com preço, descrição e estoque.</li>
                <li>• Carrinho com atualização de quantidade e total.</li>
                <li>• Checkout com resumo do pedido e confirmação.</li>
              </ul>
              <p className="text-xs text-zinc-400">
                Cada etapa desse fluxo pode (e deve) ser coberta por uma combinação de testes
                manuais, automatizados, de API e de performance.
              </p>
            </div>

            {/* “Imagem” simulada do fluxo */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-zinc-400">
                <span>Mock de tela – fluxo do e-commerce</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
                  Ilustração
                </span>
              </div>
              <div className="grid gap-3 text-[10px] md:text-xs">
                <div className="rounded-xl border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-800 p-3">
                  <p className="font-medium text-zinc-50">Login</p>
                  <p className="mt-1 text-zinc-400">
                    Campos de usuário/senha e mensagem de erro em destaque.
                  </p>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-emerald-500/10 to-zinc-900 p-3">
                    <p className="font-medium text-zinc-50">Lista de produtos</p>
                    <p className="mt-1 text-zinc-400">
                      Cards com nome, preço, botão “Adicionar ao carrinho”.
                    </p>
                  </div>
                  <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-cyan-500/10 to-zinc-900 p-3">
                    <p className="font-medium text-zinc-50">Carrinho</p>
                    <p className="mt-1 text-zinc-400">
                      Itens, quantidades, subtotal e botão de finalizar compra.
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-gradient-to-r from-fuchsia-500/10 to-zinc-900 p-3">
                  <p className="font-medium text-zinc-50">Confirmação do pedido</p>
                  <p className="mt-1 text-zinc-400">
                    Tela final com número do pedido e resumo do que foi comprado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seções por tipo de teste */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-5xl px-6 py-12 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Como eu testaria este e-commerce
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
              Abaixo, organizo a estratégia em três camadas:{" "}
              <span className="font-medium">Front (E2E)</span>,{" "}
              <span className="font-medium">APIs</span> e{" "}
              <span className="font-medium">Performance</span>, com exemplos reais ligados aos
              projetos deste portfólio.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {/* Front / E2E */}
            <div className="flex flex-col justify-between rounded-2xl border border-emerald-500/40 bg-zinc-900/70 p-4">
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Front · E2E
                </p>
                <h3 className="text-sm font-semibold text-zinc-50">
                  Fluxos visuais e jornada do usuário
                </h3>
                <ul className="mt-2 space-y-1.5 text-[11px] text-zinc-300">
                  <li>• Login bem-sucedido e mensagens de erro corretas.</li>
                  <li>• Adicionar e remover itens no carrinho.</li>
                  <li>• Cálculo de total e navegação até a confirmação.</li>
                </ul>
              </div>
              <div className="mt-3 space-y-1">
                <p className="text-[10px] text-zinc-400">
                  Ver detalhes e exemplos de testes:
                </p>
                <a
                  href="/projects/cypress"
                  className="text-[11px] font-medium text-emerald-300 hover:text-emerald-200"
                >
                  Projeto de automação com Cypress →
                </a>
              </div>
            </div>

            {/* APIs */}
            <div className="flex flex-col justify-between rounded-2xl border border-cyan-500/40 bg-zinc-900/70 p-4">
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  APIs
                </p>
                <h3 className="text-sm font-semibold text-zinc-50">
                  Contratos e regras de negócio
                </h3>
                <ul className="mt-2 space-y-1.5 text-[11px] text-zinc-300">
                  <li>• Login via API com tokens e mensagens de erro.</li>
                  <li>• Endpoint de produtos com filtros, paginação e estoque.</li>
                  <li>• Criação de pedido garantindo itens, valores e status.</li>
                </ul>
              </div>
              <div className="mt-3 space-y-1">
                <p className="text-[10px] text-zinc-400">
                  Ver detalhes e exemplos de testes:
                </p>
                <a
                  href="/projects/postman"
                  className="text-[11px] font-medium text-cyan-300 hover:text-cyan-200"
                >
                  Collection de testes com Postman →
                </a>
              </div>
            </div>

            {/* Performance */}
            <div className="flex flex-col justify-between rounded-2xl border border-fuchsia-500/40 bg-zinc-900/70 p-4">
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
                  Performance
                </p>
                <h3 className="text-sm font-semibold text-zinc-50">
                  Comportamento sob carga
                </h3>
                <ul className="mt-2 space-y-1.5 text-[11px] text-zinc-300">
                  <li>• Endpoint de listagem de produtos sob pico de acessos.</li>
                  <li>• Criação de pedidos em campanhas de grande volume.</li>
                  <li>• Thresholds claros para latência e taxa de erro.</li>
                </ul>
              </div>
              <div className="mt-3 space-y-1">
                <p className="text-[10px] text-zinc-400">
                  Ver detalhes e exemplos de testes:
                </p>
                <a
                  href="/projects/k6"
                  className="text-[11px] font-medium text-fuchsia-300 hover:text-fuchsia-200"
                >
                  Scripts de performance com k6 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

