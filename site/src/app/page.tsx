import Image from "next/image";

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
              Sou <span className="font-medium">Ewerton Alexander</span>, Líder de QA
              orientado ao negócio. Aqui você encontra minha visão de qualidade, projetos
              reais de automação, testes de API, performance e muito conteúdo prático para
              quem vive qualidade de software no dia a dia.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Ver projetos em QA
              </a>
              <a
                href="#fundamentos"
                className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Fundamentos de qualidade
              </a>
              <a
                href="/test-lab"
                className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100/80 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Página de testes (E-commerce)
              </a>
              <a
                href="/qa-trilha"
                className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100/80 transition hover:border-fuchsia-400 hover:text-fuchsia-300"
              >
                Iniciar trilha de QA
              </a>
              <a
                href="/qa-docs"
                className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100/80 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Ver documentações de QA
              </a>
              <a
                href="/qa-boas-praticas"
                className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100/70 transition hover:border-amber-400 hover:text-amber-300"
              >
                Boas práticas de qualidade
              </a>
            </div>
          </div>

          <div className="flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-lg shadow-emerald-500/10 backdrop-blur md:w-80">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
              Stack de QA
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs">
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
