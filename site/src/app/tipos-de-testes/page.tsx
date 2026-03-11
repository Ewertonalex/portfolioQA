"use client";

import Link from "next/link";

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="shrink-0"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

function TipCard({
  variant,
  icon,
  title,
  children,
}: {
  variant: "emerald" | "cyan";
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-xl border bg-zinc-900/60 p-4 flex gap-4 md:p-5 ${
        variant === "emerald"
          ? "border-emerald-500/40"
          : "border-cyan-500/40"
      }`}
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl ${
          variant === "emerald" ? "bg-emerald-500/15" : "bg-cyan-500/15"
        }`}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1 space-y-2">
        <h3 className="text-sm font-semibold text-zinc-50">{title}</h3>
        <div className="text-xs text-zinc-300 [&>p]:mb-2 [&>ul]:ml-4 [&>ul]:mt-2 [&>ul]:list-disc [&>ul]:space-y-1">
          {children}
        </div>
      </div>
    </div>
  );
}

function Example({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-3 rounded-lg border-l-4 border-emerald-500/60 bg-black/40 px-4 py-3 text-[13px] text-zinc-300">
      <span className="font-semibold text-zinc-100">Exemplo: </span>
      {children}
    </div>
  );
}

export default function TiposDeTestesPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <header className="border-b border-zinc-800 bg-gradient-to-r from-zinc-950 via-black to-zinc-950">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              5 tipos de testes
            </p>
            <p className="text-xs text-zinc-400">
              Todo QA deve conhecer
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex w-fit rounded-full border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-100 transition hover:border-emerald-400 hover:text-emerald-300"
          >
            Voltar para o portfólio
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-black">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Qualidade de Software
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            5 tipos de testes que todo QA deve conhecer
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">
            Funcional, Exploratório, Regressivo, Integração e Aceitação — conceitos, exemplos e quando usar cada um.
          </p>
          <a
            href="https://www.linkedin.com/in/ewertonalexander/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-100 no-underline transition hover:text-emerald-300"
          >
            <LinkedInIcon />
            Ewerton Alexander
          </a>
        </div>
      </section>

      {/* Introdução */}
      <section className="border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Introdução
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Por que conhecer diferentes tipos de teste?
          </h2>
          <div className="mt-4 flex gap-4">
            <div className="h-auto w-1 shrink-0 rounded-full bg-gradient-to-b from-emerald-400 to-cyan-400" />
            <div className="space-y-3 text-sm text-zinc-300">
              <p>
                Conhecer diferentes técnicas de teste aumenta muito a capacidade de encontrar falhas antes que elas cheguem ao usuário. Cada tipo atende a um objetivo: validar requisitos, explorar riscos, garantir que mudanças não quebraram nada, verificar que sistemas conversam entre si ou que o produto está pronto para entrega.
              </p>
              <p>
                Neste material você encontra os <strong className="text-zinc-100">5 tipos de testes que todo QA deve conhecer</strong>: definição, quando aplicar, exemplos práticos e como eles se complementam no dia a dia de qualidade.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-zinc-400">
            Nos próximos tópicos: <strong className="text-zinc-100">Funcional</strong>, <strong className="text-zinc-100">Exploratório</strong>, <strong className="text-zinc-100">Regressivo</strong>, <strong className="text-zinc-100">Integração</strong> e <strong className="text-zinc-100">Aceitação</strong>.
          </p>
        </div>
      </section>

      {/* 1. Funcional */}
      <section className="border-b border-zinc-800 bg-zinc-950/50">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Tipo 1
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Teste Funcional
          </h2>
          <div className="mt-6">
            <TipCard variant="emerald" icon="ƒ" title="Funcional">
              <p>Verifica se o sistema se comporta de acordo com requisitos e especificações. A pergunta central é: <em>“O que o sistema deve fazer?”</em> — e o teste confirma que cada função atende a esse “deve”.</p>
              <p><strong className="text-zinc-100">Quando usar:</strong> em todas as fases de validação de features: critérios de aceite, fluxos de negócio e regras (cálculos, validações, permissões).</p>
              <ul>
                <li>Validar formulários (campos obrigatórios, formato, mensagens de erro).</li>
                <li>Validar fluxos completos (login, carrinho, checkout, pagamento).</li>
                <li>Validar regras de negócio (desconto por faixa, frete grátis acima de X).</li>
              </ul>
              <Example>
                Em um e-commerce, teste funcional cobre: “Ao adicionar 3 itens ao carrinho e aplicar cupom VALE10, o desconto de 10% é aplicado ao subtotal e o total final reflete corretamente.”
              </Example>
            </TipCard>
          </div>
        </div>
      </section>

      {/* 2. Exploratório */}
      <section className="border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Tipo 2
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Teste Exploratório
          </h2>
          <div className="mt-6">
            <TipCard variant="cyan" icon="🔍" title="Exploratório">
              <p>O tester atua como investigador: explora o sistema sem roteiro fixo, orientado a <strong className="text-zinc-100">risco</strong> e a <strong className="text-zinc-100">objetivos</strong>. Não substitui o funcional; complementa, encontrando falhas em cenários que scripts não cobrem.</p>
              <p><strong className="text-zinc-100">Quando usar:</strong> em sessões de exploração (time-boxed), em áreas de alto risco, após mudanças grandes ou quando há pouco tempo para documentar todos os cenários.</p>
              <ul>
                <li>Explorar fluxos críticos (pagamento, dados sensíveis) com mente aberta.</li>
                <li>Testar combinações inesperadas (campos em branco, valores extremos, voltar/avançar).</li>
                <li>Documentar achados em tempo real (charter, anotações, bugs).</li>
              </ul>
              <Example>
                Sessão de 45 min com charter: “Explorar o fluxo de alteração de senha em diferentes navegadores e com sessão expirada.” Objetivo: encontrar comportamentos estranhos em edge cases.
              </Example>
            </TipCard>
          </div>
        </div>
      </section>

      {/* 3. Regressivo */}
      <section className="border-b border-zinc-800 bg-zinc-950/50">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Tipo 3
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Teste Regressivo
          </h2>
          <div className="mt-6">
            <TipCard variant="cyan" icon="↻" title="Regressivo">
              <p>Garante que <strong className="text-zinc-100">o que já funcionava continua funcionando</strong> após novas alterações. Evita que correções ou novas features quebrem funcionalidades existentes.</p>
              <p><strong className="text-zinc-100">Quando usar:</strong> após cada release, merge de branch, correção de bug ou mudança em área crítica. Pode ser parcial (smoke/sanity) ou completo (suite inteira).</p>
              <ul>
                <li>Rodar suite de automação após cada build ou deploy.</li>
                <li>Executar smoke em produção após deploy (login, home, um fluxo crítico).</li>
                <li>Focar regressão em módulos impactados pela mudança.</li>
              </ul>
              <Example>
                Após alteração no cálculo de frete, rodar regressão em: carrinho, checkout, histórico de pedidos e relatórios que usam valor de frete — além dos testes da nova regra em si.
              </Example>
            </TipCard>
          </div>
        </div>
      </section>

      {/* 4. Integração */}
      <section className="border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Tipo 4
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Teste de Integração
          </h2>
          <div className="mt-6">
            <TipCard variant="cyan" icon="⚙︎" title="Integração">
              <p>Verifica se <strong className="text-zinc-100">módulos ou sistemas diferentes funcionam juntos</strong>: APIs, bancos de dados, filas, serviços externos. O foco não é a unidade isolada, e sim a comunicação entre elas.</p>
              <p><strong className="text-zinc-100">Quando usar:</strong> ao integrar um novo serviço, alterar contratos de API, trocar provedor de pagamento ou de e-mail, e em pipelines de CI/CD que validam integrações.</p>
              <ul>
                <li>Testar chamadas entre front e back (payload, status, tratamento de erro).</li>
                <li>Validar integração com gateway de pagamento (sandbox: aprovação, recusa, timeout).</li>
                <li>Garantir que eventos (ex.: pedido pago) disparam os fluxos corretos (estoque, e-mail).</li>
              </ul>
              <Example>
                Após mudança na API de endereços, rodar testes de integração: busca por CEP na tela de checkout, preenchimento automático, e fallback quando a API está fora do ar.
              </Example>
            </TipCard>
          </div>
        </div>
      </section>

      {/* 5. Aceitação */}
      <section className="border-b border-zinc-800 bg-zinc-950/50">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Tipo 5
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Teste de Aceitação
          </h2>
          <div className="mt-6">
            <TipCard variant="emerald" icon="✓" title="Aceitação">
              <p>Confirma que o produto ou feature <strong className="text-zinc-100">atende aos critérios de aceite do negócio</strong> e está pronto para uso (ou release). Geralmente feito com cenários de usuário real e critérios definidos com PO/stakeholders.</p>
              <p><strong className="text-zinc-100">Quando usar:</strong> ao finalizar uma feature ou sprint, antes de release para produção ou antes de marcar um épico como “entregue”. Pode incluir UAT (User Acceptance Testing).</p>
              <ul>
                <li>Validar critérios de aceite escritos em histórias (Given/When/Then).</li>
                <li>Rodar fluxos de ponta a ponta como um usuário final.</li>
                <li>Confirmar com o negócio que o comportamento está correto e completo.</li>
              </ul>
              <Example>
                “Como cliente, quero filtrar pedidos por data para analisar minhas compras.” Aceitação: filtrar por intervalo, listar pedidos corretos, ordenação e mensagem quando não houver resultados.
              </Example>
            </TipCard>
          </div>
        </div>
      </section>

      {/* Conclusão */}
      <section className="border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Conclusão
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Resumo e próximos passos
          </h2>
          <div className="mt-4 space-y-4 text-sm text-zinc-300">
            <p>
              Os cinco tipos — <strong className="text-zinc-100">Funcional</strong>, <strong className="text-zinc-100">Exploratório</strong>, <strong className="text-zinc-100">Regressivo</strong>, <strong className="text-zinc-100">Integração</strong> e <strong className="text-zinc-100">Aceitação</strong> — se complementam. Nenhum substitui o outro: funcional valida o “o quê”, exploratório descobre riscos, regressivo protege o que já existe, integração garante que as partes conversam e aceitação confirma que o negócio fica satisfeito.
            </p>
            <p>
              No dia a dia, priorize com base em risco e momento do ciclo: mais exploratório e funcional em features novas; mais regressão e integração após mudanças; e aceitação antes de fechar entregas.
            </p>
          </div>
          <div className="mt-6">
            <TipCard variant="emerald" icon="→" title="Próximos passos">
              <p>Aprofunde em técnicas de design de testes (equivalência, valor-limite, tabelas de decisão), automação (Cypress, Postman, k6) e documentação de cenários (BDD/Gherkin) para aplicar esses tipos de forma mais eficiente e repetível.</p>
            </TipCard>
          </div>
          <p className="mt-8 text-[13px] text-zinc-400">
            Obrigado pela leitura. Se quiser trocar ideias sobre QA e qualidade de software, vamos conectar no LinkedIn.
          </p>
          <a
            href="https://www.linkedin.com/in/ewertonalexander/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 font-semibold text-zinc-100 no-underline transition hover:text-emerald-300"
          >
            <LinkedInIcon />
            Ewerton Alexander
          </a>
        </div>
      </section>
    </div>
  );
}
