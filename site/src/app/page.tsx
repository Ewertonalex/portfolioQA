import Image from "next/image";
import InteractiveOrb from "./InteractiveOrb";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-black">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-24">
          <div className="max-w-xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-emerald-400/60 bg-zinc-900 shadow-lg shadow-emerald-500/30">
                <Image
                  src="/ewerton.png"
                  alt="Foto de Ewerton Alexander"
                  fill
                  sizes="64px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-zinc-100">
                  Ewerton Alexander
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/80">
                  Portfólio de Qualidade de Software
                </p>
              </div>
            </div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              QA não é só testar. <br />
              É garantir{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                valor de negócio.
              </span>
            </h1>
            <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
              Sou <span className="font-medium">Ewerton Alexander</span>, Líder de QA orientado ao
              negócio. Este portfólio reúne minha visão de qualidade aplicada,{" "}
              <span className="font-medium">projetos reais</span> de automação Web e API, testes
              de performance, materiais de estudo em QA e exemplos de documentações e boas
              práticas. Tenho familiaridade no uso de{" "}
              <span className="font-medium">IA no dia a dia</span> — tanto para apoiar análise,
              geração de cenários e documentação, quanto para criar ferramentas e conteúdos que
              acelerem o trabalho de qualidade.
            </p>
            <div className="mt-3 space-y-1 text-xs text-zinc-300">
              <p className="font-semibold text-zinc-100">
                Em 30 segundos, o que você encontra aqui:
              </p>
              <ul className="ml-4 list-disc space-y-0.5">
                <li>
                  🎯 <span className="font-medium">Estratégias de QA orientadas a negócio</span>{" "}
                  aplicadas em sistemas reais de alta criticidade.
                </li>
                <li>
                  🤖{" "}
                  <span className="font-medium">
                    Projetos de automação e testes (Cypress, APIs e k6)
                  </span>{" "}
                  conectados a um cenário prático de e-commerce.
                </li>
                <li>
                  🧠{" "}
                  <span className="font-medium">
                    Trilha completa para iniciantes em QA, documentações e boas práticas
                  </span>{" "}
                  para quem quer aprender e para quem quer avaliar minha forma de trabalhar.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 md:min-w-[190px]"
              >
                Ver projetos em QA
              </a>
              <a
                href="#fundamentos"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-emerald-400 hover:text-emerald-300 md:min-w-[190px]"
              >
                Fundamentos de qualidade
              </a>
              <a
                href="/test-lab"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100/80 transition hover:border-cyan-400 hover:text-cyan-300 md:min-w-[230px]"
              >
                Página de testes (E-commerce)
              </a>
              <a
                href="/qa-trilha"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100/80 transition hover:border-fuchsia-400 hover:text-fuchsia-300 md:min-w-[210px]"
              >
                Iniciar trilha de QA
              </a>
              <a
                href="/qa-docs"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100/80 transition hover:border-emerald-400 hover:text-emerald-300 md:min-w-[220px]"
              >
                Ver documentações de QA
              </a>
              <a
                href="/qa-boas-praticas"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100/70 transition hover:border-amber-400 hover:text-amber-300 md:min-w-[220px]"
              >
                Boas práticas de qualidade
              </a>
            </div>
          </div>

          <div className="flex w-full max-w-sm flex-col items-center gap-6 md:w-80">
            <div className="relative w-full flex justify-end">
              <InteractiveOrb />
            </div>
            <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-lg shadow-emerald-500/10 backdrop-blur">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                Stack de QA
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/5 p-3">
                  <p className="font-semibold text-emerald-300">Automação</p>
                  <p className="mt-1 text-[11px] text-zinc-300">Cypress · Web & API</p>
                </div>
                <div className="rounded-xl border border-cyan-500/40 bg-cyan-500/5 p-3">
                  <p className="font-semibold text-cyan-300">APIs</p>
                  <p className="mt-1 text-[11px] text-zinc-300">Postman · Collections</p>
                </div>
                <div className="rounded-xl border border-fuchsia-500/40 bg-fuchsia-500/5 p-3">
                  <p className="font-semibold text-fuchsia-300">Performance</p>
                  <p className="mt-1 text-[11px] text-zinc-300">k6 · Carga & Stress</p>
                </div>
                <div className="rounded-xl border border-amber-500/40 bg-amber-500/5 p-3">
                  <p className="font-semibold text-amber-300">Processos</p>
                  <p className="mt-1 text-[11px] text-zinc-300">Scrum · Backlog · BDD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundamentos de QA */}
      <section id="fundamentos" className="border-b border-zinc-800 bg-black">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16 md:flex-row">
          <div className="max-w-md space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Fundamentos
            </p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Qualidade de software na prática.
            </h2>
            <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
              Qualidade não é um estágio final, é uma responsabilidade compartilhada desde a
              ideia até a produção. O papel do QA moderno é prevenir problemas, clarificar
              expectativas e traduzir riscos técnicos em impacto de negócio.
            </p>
          </div>

          <div className="grid flex-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <h3 className="text-sm font-semibold text-zinc-50">
                O que é ser QA hoje
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-zinc-300">
                <li>• Participar da análise de requisitos e critérios de aceite.</li>
                <li>• Pensar como usuário e como negócio ao mesmo tempo.</li>
                <li>• Ajudar o time a tomar decisões baseadas em risco.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <h3 className="text-sm font-semibold text-zinc-50">Tipos de testes</h3>
              <ul className="mt-3 space-y-2 text-xs text-zinc-300">
                <li>• Funcionais, regressão, smoke, sanity.</li>
                <li>• Exploratórios orientados a risco.</li>
                <li>• Não funcionais: performance, segurança, usabilidade.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <h3 className="text-sm font-semibold text-zinc-50">
                Técnicas de projeto de testes
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-zinc-300">
                <li>• Classes de equivalência e valores-limite.</li>
                <li>• Tabelas de decisão para regras complexas.</li>
                <li>• Modelagem de cenários com BDD (Gherkin).</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <h3 className="text-sm font-semibold text-zinc-50">
                Comunicação e escrita
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-zinc-300">
                <li>• Bugs claros, objetivos e acionáveis.</li>
                <li>• Critérios de aceite que evitam ambiguidade.</li>
                <li>• Relatórios que ajudam gestão a decidir com confiança.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência, Formação e Habilidades */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-5xl px-6 py-16 space-y-10">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Trajetória
            </p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Experiência, formação e habilidades em qualidade.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-[2fr,1.5fr]">
            {/* Experiência */}
            <div className="space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
                Experiência profissional
              </h3>
              <div className="space-y-4 text-sm text-zinc-300">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                  <p className="text-xs font-semibold text-emerald-300">
                    Uhuu Tecnologia · Líder de QA
                  </p>
                  <p className="text-[11px] text-zinc-400">Dez/2025 – Atual · Remoto</p>
                  <p className="mt-2 text-xs text-zinc-300">
                    Liderança de time de QA orientada ao negócio, definição de estratégia de
                    qualidade, análise de requisitos, critérios de aceite e apoio à priorização
                    de backlog em sistemas de alta volumetria.
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                  <p className="text-xs font-semibold text-emerald-300">
                    Uhuu Tecnologia · Analista de Testes Sênior / Pleno
                  </p>
                  <p className="text-[11px] text-zinc-400">2023 – Dez/2025 · Remoto</p>
                  <p className="mt-2 text-xs text-zinc-300">
                    Validação de fluxos críticos de pagamento (PIX, adquirentes, fallback),
                    criação de cenários BDD, relatórios para decisão e mentoria técnica.
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                  <p className="text-xs font-semibold text-emerald-300">
                    Compass.uol · Testador de Software Jr
                  </p>
                  <p className="text-[11px] text-zinc-400">2022 – 2023 · Remoto</p>
                  <p className="mt-2 text-xs text-zinc-300">
                    Criação de cenários BDD (Gherkin), análise de defeitos e gestão em
                    JIRA/Zephyr, com foco em amadurecimento de processos de teste.
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                  <p className="text-xs font-semibold text-emerald-300">
                    Korporate Solution Factory · QA Specialist (Freelance)
                  </p>
                  <p className="text-[11px] text-zinc-400">2022 · Remoto</p>
                  <p className="mt-2 text-xs text-zinc-300">
                    Planejamento e execução de testes E2E, com relatórios executivos voltados
                    à tomada de decisão de negócio.
                  </p>
                </div>
              </div>
            </div>

            {/* Formação e habilidades */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
                  Formação acadêmica
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-zinc-300">
                  <li>• Graduado em Gestão de Qualidade de Software.</li>
                  <li>• MBA em Gestão de Projetos em TI.</li>
                  <li>• Tecnólogo em Sistemas para Internet.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
                  Conhecimentos e habilidades
                </h3>
                <div className="mt-3 grid gap-3 text-xs text-zinc-300">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
                    <p className="font-semibold text-zinc-50">Ferramentas & stack</p>
                    <p className="mt-2 text-[11px] text-zinc-300">
                      Cypress, Postman, k6, Katalon Studio, Gherkin (BDD), JIRA, Zephyr, Trello,
                      Scrum.
                    </p>
                  </div>
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
                    <p className="font-semibold text-zinc-50">Competências de qualidade</p>
                    <p className="mt-2 text-[11px] text-zinc-300">
                      Análise de requisitos, definição de critérios de aceite, mapeamento de
                      processos, gestão de incidentes, análise de causa raiz e comunicação
                      técnica com stakeholders.
                    </p>
                  </div>
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
                    <p className="font-semibold text-zinc-50">Soft skills</p>
                    <p className="mt-2 text-[11px] text-zinc-300">
                      Visão de negócio, comunicação clara, escrita técnica, liderança de time e
                      foco em resultados mensuráveis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades e stack de QA */}
      <section className="border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-5xl px-6 py-16 space-y-10">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Habilidades em QA
            </p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Onde atuo com mais profundidade.
            </h2>
            <p className="text-sm leading-relaxed text-zinc-300 md:text-base max-w-3xl">
              Minha atuação combina visão de negócio, estratégia de testes, automação e mentoria.
              Abaixo, uma visão rápida de onde mais agrego valor em times de produto.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <div className="flex items-center justify-between text-xs">
                <p className="font-semibold text-zinc-50">Estratégia de testes & qualidade</p>
                <span className="text-emerald-300">90%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              </div>
              <ul className="mt-2 space-y-1 text-xs text-zinc-300">
                <li>• Definição de abordagem de testes por risco e valor.</li>
                <li>• Escolha de tipos de teste e cobertura mínima aceitável.</li>
                <li>• Apoio em roadmap de qualidade em squads e produtos.</li>
              </ul>
            </div>

            <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <div className="flex items-center justify-between text-xs">
                <p className="font-semibold text-zinc-50">Automação Web, API e regressão</p>
                <span className="text-emerald-300">85%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              </div>
              <ul className="mt-2 space-y-1 text-xs text-zinc-300">
                <li>• Automação de fluxos críticos end-to-end com Cypress.</li>
                <li>• Testes de API com collections organizadas e asserts de negócio.</li>
                <li>• Suites de regressão focadas em estabilidade e manutenção.</li>
              </ul>
            </div>

            <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <div className="flex items-center justify-between text-xs">
                <p className="font-semibold text-zinc-50">Performance, observabilidade e riscos</p>
                <span className="text-emerald-300">80%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              </div>
              <ul className="mt-2 space-y-1 text-xs text-zinc-300">
                <li>• Criação de scripts de carga e stress com k6.</li>
                <li>• Leitura de métricas e logs para mapear gargalos.</li>
                <li>• Comunicação de riscos técnicos em linguagem de negócio.</li>
              </ul>
            </div>

            <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <div className="flex items-center justify-between text-xs">
                <p className="font-semibold text-zinc-50">Mentoria, escrita técnica e liderança</p>
                <span className="text-emerald-300">88%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              </div>
              <ul className="mt-2 space-y-1 text-xs text-zinc-300">
                <li>• Apoio a QAs em início de carreira com trilhas e feedbacks.</li>
                <li>• Escrita de documentações, planos e relatórios executivos.</li>
                <li>• Facilitação entre Produto, Negócio, Desenvolvimento e Operações.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Minha stack tecnológica em QA
            </p>
            <div className="grid gap-3 text-xs text-zinc-200 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Cypress · Web & API</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <span>Postman · Collections & environments</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
                <span>k6 · Carga, stress e smoke de performance</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span>BDD · Gherkin, critérios de aceite e cenários</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span>Jira / Zephyr · Gestão de testes e incidentes</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                <span>Scrum · Planejamento, reviews e cerimônias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como uso IA em QA */}
      <section className="border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-5xl px-6 py-16 space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              IA no dia a dia de QA
            </p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Como uso IA para potencializar qualidade de software.
            </h2>
            <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
              Vejo a IA como uma parceira de trabalho: ela acelera partes do processo, mas{" "}
              <span className="font-medium">a responsabilidade crítica continua sendo humana</span>
              . Abaixo estão formas concretas de como integro IA na rotina de QA.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 text-xs text-zinc-300">
            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
              <p className="font-semibold text-zinc-50">Geração e refinamento de cenários</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  Uso IA para gerar uma{" "}
                  <span className="font-medium">primeira lista de cenários de teste</span> a partir
                  de requisitos ou histórias de usuário.
                </li>
                <li>
                  Em seguida, reviso criticamente, removo redundâncias e adiciono{" "}
                  <span className="font-medium">cenários de risco</span> que a IA normalmente não
                  enxerga (regras de negócio específicas, casos de borda sensíveis ao contexto).
                </li>
                <li>
                  Também utilizo IA para{" "}
                  <span className="font-medium">ajustar a clareza de casos de teste</span> e
                  documentações, mantendo meu estilo e critérios.
                </li>
              </ul>
            </div>
            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
              <p className="font-semibold text-zinc-50">
                Prompts para simular perfis de usuários e jornadas
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  Crio prompts específicos para simular{" "}
                  <span className="font-medium">perfis de usuários diferentes</span> (iniciante,
                  avançado, apressado, indeciso) e entender como eles explorariam o fluxo.
                </li>
                <li>
                  A partir desses perfis, desenho{" "}
                  <span className="font-medium">jornadas alternativas</span> para complementar os
                  testes tradicionais e explorar riscos de UX.
                </li>
              </ul>
            </div>
            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
              <p className="font-semibold text-zinc-50">
                Apoio na análise de logs e métricas
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  Uso IA para{" "}
                  <span className="font-medium">resumir logs extensos ou métricas de execução</span>
                  , identificando padrões de falha frequentes ou picos de erro.
                </li>
                <li>
                  A partir desse resumo, priorizo{" "}
                  <span className="font-medium">onde aprofundar a investigação manual</span> e
                  quais hipóteses devem ser validadas com o time técnico.
                </li>
              </ul>
            </div>
            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
              <p className="font-semibold text-zinc-50">
                Exemplo concreto no cenário de e-commerce
              </p>
              <p>
                No fluxo de checkout da Hero Toys, utilizei IA para gerar uma lista inicial de
                casos de teste a partir da descrição do requisito (login → carrinho → pagamento →
                confirmação). A partir dessa base:
              </p>
              <ul className="ml-5 list-disc space-y-1 mt-1">
                <li>
                  Refinei os cenários adicionando{" "}
                  <span className="font-medium">casos de pagamento em falha</span> (erro de gateway,
                  cartão expirado, tempo de resposta alto).
                </li>
                <li>
                  Incluí cenários de{" "}
                  <span className="font-medium">recuperação de fluxo</span> (usuário volta para o
                  carrinho, altera quantidade, aplica cupom, tenta de novo).
                </li>
                <li>
                  Registrei os cenários finais na seção de documentação e nos projetos de
                  automação, garantindo que{" "}
                  <span className="font-medium">o que a IA sugeriu virou algo revisado e confiável</span>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="border-b border-zinc-800 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-5xl px-6 py-16 space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Projetos práticos
            </p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Portfólio completo de QA em ação.
            </h2>
            <p className="text-sm leading-relaxed text-zinc-300 md:text-base max-w-2xl">
              Aqui estão os projetos que conectam teoria e prática: automação de testes, APIs,
              performance e visão de qualidade aplicada a cenários reais.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <a
              href="/projects/cypress"
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-left transition hover:border-emerald-400 hover:bg-zinc-900"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                  Automação
                </p>
                <h3 className="mt-2 text-sm font-semibold text-zinc-50">
                  Fluxos críticos com Cypress
                </h3>
                <p className="mt-2 text-xs text-zinc-300">
                  Suite de testes Web e API cobrindo fluxos de negócio essenciais, com foco em
                  clareza de cenários e manutenibilidade.
                </p>
              </div>
              <span className="mt-4 text-[11px] font-medium text-emerald-300 group-hover:text-emerald-200">
                Ver detalhes do projeto →
              </span>
            </a>

            <a
              href="/projects/postman"
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-left transition hover:border-cyan-400 hover:bg-zinc-900"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  APIs
                </p>
                <h3 className="mt-2 text-sm font-semibold text-zinc-50">
                  Collections Postman orientadas a negócio
                </h3>
                <p className="mt-2 text-xs text-zinc-300">
                  Cenários organizados, environments e asserts que validam não só status code,
                  mas regras de negócio e contratos.
                </p>
              </div>
              <span className="mt-4 text-[11px] font-medium text-cyan-300 group-hover:text-cyan-200">
                Ver detalhes do projeto →
              </span>
            </a>

            <a
              href="/projects/k6"
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-left transition hover:border-fuchsia-400 hover:bg-zinc-900"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-400">
                  Performance
                </p>
                <h3 className="mt-2 text-sm font-semibold text-zinc-50">
                  Carga e stress com k6
                </h3>
                <p className="mt-2 text-xs text-zinc-300">
                  Scripts simples e objetivos para avaliar resiliência de endpoints críticos sob
                  diferentes padrões de carga.
                </p>
              </div>
              <span className="mt-4 text-[11px] font-medium text-fuchsia-300 group-hover:text-fuchsia-200">
                Ver detalhes do projeto →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Projetos pessoais em destaque */}
      <section className="border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-5xl px-6 py-14 space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Projetos pessoais
            </p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Iniciativas para estudo, comunidade e prática de QA.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <a
              href="https://github.com/Ewertonalex/qa-milionario"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-left transition hover:border-emerald-400 hover:bg-zinc-900"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                  Jogo · QA Milionário
                </p>
                <h3 className="mt-2 text-sm font-semibold text-zinc-50">
                  Quiz inspirado no Show do Milhão
                </h3>
                <p className="mt-2 text-xs text-zinc-300">
                  Perguntas baseadas em ISTQB CTFL, gamificando o estudo de fundamentos de
                  qualidade para quem está se preparando para certificações.
                </p>
              </div>
              <span className="mt-4 text-[11px] font-medium text-emerald-300 group-hover:text-emerald-200">
                Ver projeto no GitHub →
              </span>
            </a>

            <a
              href="https://github.com/Ewertonalex/Contador_de_Mesada"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-left transition hover:border-cyan-400 hover:bg-zinc-900"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Web · Contador de Mesada
                </p>
                <h3 className="mt-2 text-sm font-semibold text-zinc-50">
                  Sistema de controle de mesada
                </h3>
                <p className="mt-2 text-xs text-zinc-300">
                  Aplicação web que registra comportamentos diários, aplica descontos em tempo
                  real e gera um excelente cenário para testes funcionais e de usabilidade.
                </p>
              </div>
              <span className="mt-4 text-[11px] font-medium text-cyan-300 group-hover:text-cyan-200">
                Ver projeto no GitHub →
              </span>
            </a>

            <a
              href="https://github.com/Ewertonalex/Performance-Tester"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-left transition hover:border-fuchsia-400 hover:bg-zinc-900"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-400">
                  Performance · Scripts & estudos
                </p>
                <h3 className="mt-2 text-sm font-semibold text-zinc-50">
                  Experimentos de teste de carga
                </h3>
                <p className="mt-2 text-xs text-zinc-300">
                  Coleção de scripts e experimentos voltados a testes de performance,
                  simulando diferentes padrões de carga e analisando métricas chave.
                </p>
              </div>
              <span className="mt-4 text-[11px] font-medium text-fuchsia-300 group-hover:text-fuchsia-200">
                Ver projeto no GitHub →
              </span>
            </a>

            <a
              href="https://github.com/Ewertonalex/agente-IA-cenarios-de-testes"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-left transition hover:border-emerald-400 hover:bg-zinc-900"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                  IA · Cenários de Teste
                </p>
                <h3 className="mt-2 text-sm font-semibold text-zinc-50">
                  Agente IA para apoiar QA
                </h3>
                <p className="mt-2 text-xs text-zinc-300">
                  Experimento de agente de IA focado em gerar ideias e cenários de testes a
                  partir de descrições em linguagem natural, fortalecendo a etapa de design de
                  testes.
                </p>
              </div>
              <span className="mt-4 text-[11px] font-medium text-emerald-300 group-hover:text-emerald-200">
                Ver projeto no GitHub →
              </span>
            </a>

            <div className="group flex flex-col justify-between rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/40 p-4 text-left">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Em breve
                </p>
                <h3 className="mt-2 text-sm font-semibold text-zinc-200">
                  Novos projetos de QA em construção
                </h3>
                <p className="mt-2 text-xs text-zinc-400">
                  Espaço reservado para futuros projetos focados em APIs, automação avançada e
                  experimentos de qualidade que serão adicionados ao portfólio.
                </p>
              </div>
              <span className="mt-4 text-[11px] font-medium text-zinc-500">
                Fique de olho, em breve novidades.
              </span>
            </div>

            <a
              href="https://github.com/Ewertonalex/ctfl-study"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-left transition hover:border-fuchsia-400 hover:bg-zinc-900"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-400">
                  Estudos · CTFL
                </p>
                <h3 className="mt-2 text-sm font-semibold text-zinc-50">
                  Material de estudo ISTQB
                </h3>
                <p className="mt-2 text-xs text-zinc-300">
                  Repositório com conteúdos e exercícios focados na certificação ISTQB CTFL,
                  consolidando a base teórica que sustenta sua atuação como QA.
                </p>
              </div>
              <span className="mt-4 text-[11px] font-medium text-fuchsia-300 group-hover:text-fuchsia-200">
                Ver projeto no GitHub →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Sobre & Contato */}
      <section className="bg-black">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Sobre mim
            </p>
            <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
              Atuo hoje como Líder de QA, conectando times de Produto, Desenvolvimento e
              Operações para garantir que cada entrega gere valor real. Minha missão é elevar
              a maturidade de qualidade, reduzir retrabalho e ajudar o time a tomar decisões
              mais conscientes sobre risco.
            </p>
          </div>

          <div className="space-y-4 text-sm text-zinc-300">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-emerald-300"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.35l-8 4.8l-8-4.8V6Zm0 2.85V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.85l-7.4 4.44a2 2 0 0 1-2.1 0L4 8.85Z"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Contato
                </p>
                <p className="mt-1 text-sm">
                  <a
                    href="mailto:ewertonlgk20@gmail.com"
                    className="text-emerald-300 hover:text-emerald-200"
                  >
                    ewertonlgk20@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-emerald-300"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M19 3h-3.2a4.8 4.8 0 0 0-4.8 4.8V11H8v4h3v6h4v-6h3l1-4h-4V7.8A1.8 1.8 0 0 1 16.8 6H19V3Z"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  LinkedIn
                </p>
                <p className="mt-1 text-sm">
                  <a
                    href="https://www.linkedin.com/in/ewertonalexander/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-300 hover:text-emerald-200"
                  >
                    linkedin.com/in/ewertonalexander
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-emerald-300"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12 2a10 10 0 0 0-3.16 19.47c.5.09.68-.22.68-.48v-1.68c-2.78.61-3.37-1.34-3.37-1.34a2.65 2.65 0 0 0-1.11-1.47c-.9-.62.07-.6.07-.6a2.12 2.12 0 0 1 1.54 1a2.15 2.15 0 0 0 2.94.84a2.15 2.15 0 0 1 .64-1.34c-2.22-.25-4.55-1.11-4.55-4.95A3.88 3.88 0 0 1 6.3 7.5a3.6 3.6 0 0 1 .1-2.65s.84-.27 2.75 1.02a9.48 9.48 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02a3.6 3.6 0 0 1 .1 2.65A3.88 3.88 0 0 1 18 10.8c0 3.85-2.34 4.7-4.57 4.94a2.4 2.4 0 0 1 .69 1.87v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  GitHub
                </p>
                <p className="mt-1 text-sm">
                  <a
                    href="https://github.com/Ewertonalex"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-300 hover:text-emerald-200"
                  >
                    github.com/Ewertonalex
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
