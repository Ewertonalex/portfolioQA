"use client";

import Link from "next/link";

export default function QaTrilha() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <header className="border-b border-zinc-800 bg-gradient-to-r from-zinc-950 via-black to-zinc-950">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Trilha de QA
            </p>
            <p className="text-xs text-zinc-400">
              Curso para iniciantes
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
        <div className="mx-auto max-w-5xl px-6 py-14 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
            Trilha completa · QA para iniciantes
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Curso-game de QA:
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              da curiosidade à prática.
            </span>
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Esta trilha foi pensada como um “curso em formato de game” para quem está
            começando em QA ou pensando em migrar de carreira. Leia na ordem sugerida,
            faça os exercícios e conecte cada módulo com os projetos práticos do portfólio.
          </p>
          <p className="text-xs text-zinc-400">
            Dica: marque os módulos concluídos e use esta página como guia de estudos.
          </p>
        </div>
      </section>

      {/* Índice dos módulos */}
      <section className="border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-5xl px-6 py-8 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Mapa da trilha
          </p>
          <div className="grid gap-2 text-xs text-zinc-300 md:grid-cols-2">
            {[
              "M1 — Introdução à Qualidade de Software",
              "M2 — Fundamentos do Teste de Software",
              "M3 — Tipos de Testes",
              "M4 — Técnicas de Teste",
              "M5 — Níveis de Teste",
              "M6 — Tipos de Testes (Funcionais e Não Funcionais)",
              "M7 — Técnicas de Teste (detalhado)",
              "M8 — Estratégias de Teste",
              "M9 — Planejamento de Testes",
              "M10 — Casos de Teste",
              "M11 — Gestão de Defeitos",
              "M12 — Teste Exploratório",
              "M13 — Automação de Testes",
              "M14 — QA em Metodologias Ágeis",
              "M15 — Testes de Regressão, Carga, Smoke e Sanity",
              "M16 — Métricas de Qualidade & Conclusão",
            ].map((label, index) => (
              <a
                key={label}
                href={`#modulo-${index + 1}`}
                className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2 hover:border-emerald-400 hover:text-emerald-200"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-semibold text-black">
                  {index + 1}
                </span>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-5xl px-6 py-10 space-y-10 text-sm leading-relaxed text-zinc-200">
          {/* MÓDULO 1 */}
          <article id="modulo-1" className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              MÓDULO 1 — Introdução à Qualidade de Software
            </h2>
            <div className="space-y-2 text-sm text-zinc-200">
              <p className="font-semibold text-zinc-50">O que é Qualidade?</p>
              <p>
                Qualidade de software é a capacidade de um sistema{" "}
                <span className="font-medium">atender às expectativas do usuário</span> e às
                necessidades do negócio, funcionando de forma correta, estável e eficiente.
              </p>
              <p>Um software de qualidade deve:</p>
              <ul className="ml-5 list-disc text-xs text-zinc-300">
                <li>executar suas funcionalidades corretamente</li>
                <li>não apresentar falhas críticas</li>
                <li>responder dentro de um tempo aceitável</li>
                <li>ser fácil de usar</li>
                <li>ser seguro</li>
              </ul>
              <p className="text-xs text-zinc-300">
                Qualidade não é só “não ter bug”; é{" "}
                <span className="font-medium">entregar valor real</span> para o usuário.
              </p>
            </div>

            <div className="space-y-2 text-sm text-zinc-200">
              <p className="font-semibold text-zinc-50">O que é Teste de Software</p>
              <p>
                Teste de software é o processo de{" "}
                <span className="font-medium">avaliar um sistema</span> para identificar defeitos
                e verificar se ele atende aos requisitos definidos.
              </p>
              <p>
                Testar não é “só sair clicando”: envolve{" "}
                <span className="font-medium">
                  planejamento, criação de cenários, execução e análise de resultados
                </span>
                , sempre com o objetivo de reduzir riscos.
              </p>
            </div>

            <div className="space-y-2 text-sm text-zinc-200">
              <p className="font-semibold text-zinc-50">O que é QA (Quality Assurance)</p>
              <p>
                QA é <span className="font-medium">Garantia da Qualidade</span>. Não é apenas
                testar, mas cuidar de{" "}
                <span className="font-medium">todo o processo de desenvolvimento</span>.
              </p>
              <p>O QA participa de atividades como:</p>
              <ul className="ml-5 list-disc text-xs text-zinc-300">
                <li>analisar requisitos</li>
                <li>identificar problemas antes da implementação</li>
                <li>planejar e executar testes</li>
                <li>ajudar a melhorar processos de desenvolvimento</li>
              </ul>
              <p className="text-xs text-zinc-300">
                QA não apenas encontra defeitos;{" "}
                <span className="font-medium">ajuda a evitar que eles aconteçam</span>.
              </p>
            </div>

            <div className="space-y-2 text-sm text-zinc-200">
              <p className="font-semibold text-zinc-50">
                Diferença entre QA, QC e Tester
              </p>
              <ul className="ml-5 list-disc text-xs text-zinc-300">
                <li>
                  <span className="font-medium text-emerald-300">QA (Quality Assurance)</span> —
                  foco em processo e prevenção.
                </li>
                <li>
                  <span className="font-medium text-emerald-300">QC (Quality Control)</span> —
                  foco no produto final, em encontrar defeitos.
                </li>
                <li>
                  <span className="font-medium text-emerald-300">Tester</span> — profissional que
                  executa testes e valida funcionalidades.
                </li>
              </ul>
            </div>

            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200">
              <p className="font-semibold text-emerald-300">Exercício do módulo</p>
              <p>
                Em um caderno ou documento, responda com suas palavras:
              </p>
              <ul className="ml-5 list-disc">
                <li>O que é qualidade de software para você?</li>
                <li>Qual a diferença entre QA e Tester?</li>
              </ul>
            </div>
          </article>

          {/* MÓDULO 2 */}
          <article id="modulo-2" className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              MÓDULO 2 — Fundamentos do Teste de Software
            </h2>
            <p className="text-sm text-zinc-200">
              Aqui entram os princípios clássicos de teste (inspirados no ISTQB), que ajudam a
              guiar qualquer estratégia de testes.
            </p>
            <ul className="ml-5 list-disc space-y-2 text-xs text-zinc-300">
              <li>
                <span className="font-medium text-emerald-300">
                  Princípio 1 — Testes mostram presença de defeitos
                </span>{" "}
                — testar revela defeitos, mas nunca prova que não existem mais bugs.
              </li>
              <li>
                <span className="font-medium text-emerald-300">
                  Princípio 2 — Teste exaustivo é impossível
                </span>{" "}
                — não dá para testar todas as combinações; precisamos de técnicas inteligentes.
              </li>
              <li>
                <span className="font-medium text-emerald-300">
                  Princípio 3 — Testar cedo economiza tempo e dinheiro
                </span>{" "}
                — quanto antes o bug é encontrado, mais barato é corrigi-lo.
              </li>
              <li>
                <span className="font-medium text-emerald-300">
                  Princípio 4 — Defeitos tendem a se concentrar
                </span>{" "}
                — módulos mais complexos ou críticos tendem a ter mais problemas.
              </li>
              <li>
                <span className="font-medium text-emerald-300">
                  Princípio 5 — Paradoxo do pesticida
                </span>{" "}
                — repetir sempre os mesmos testes faz com que novos bugs deixem de aparecer.
              </li>
              <li>
                <span className="font-medium text-emerald-300">
                  Princípio 6 — Teste depende do contexto
                </span>{" "}
                — testar um app de banco é diferente de testar um jogo.
              </li>
              <li>
                <span className="font-medium text-emerald-300">
                  Princípio 7 — Ausência de erros é uma ilusão
                </span>{" "}
                — um sistema “sem bugs” ainda pode ser ruim se não atender ao usuário.
              </li>
            </ul>
            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200">
              <p className="font-semibold text-emerald-300">Exercício</p>
              <p>
                Explique com suas palavras:{" "}
                <span className="font-medium">
                  por que é impossível testar todas as possibilidades de um sistema?
                </span>
              </p>
            </div>
          </article>
          {/* MÓDULO 3 */}
          <article id="modulo-3" className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              MÓDULO 3 — Tipos de Testes
            </h2>
            <p className="text-sm text-zinc-200">
              Testes podem ser classificados de várias formas, mas uma das divisões mais
              importantes é entre <span className="font-medium">funcionais</span> e{" "}
              <span className="font-medium">não funcionais</span>.
            </p>
            <div className="space-y-2 text-sm text-zinc-200">
              <p className="font-semibold text-zinc-50">Testes Funcionais</p>
              <p>
                Validam se o sistema faz o que foi definido nos requisitos:{" "}
                <span className="font-medium">o que</span> o sistema faz.
              </p>
              <ul className="ml-5 list-disc text-xs text-zinc-300">
                <li>validar login de usuário</li>
                <li>validar cadastro de cliente</li>
                <li>validar processo de pagamento em um e-commerce</li>
              </ul>
            </div>
            <div className="space-y-2 text-sm text-zinc-200">
              <p className="font-semibold text-zinc-50">Testes Não Funcionais</p>
              <p>
                Avaliam características como{" "}
                <span className="font-medium">performance, segurança, usabilidade</span> e
                compatibilidade: <span className="font-medium">como</span> o sistema se
                comporta.
              </p>
              <ul className="ml-5 list-disc text-xs text-zinc-300">
                <li>Teste de performance (ex.: k6, JMeter)</li>
                <li>Teste de segurança (SQL Injection, XSS, etc.)</li>
                <li>Teste de usabilidade (facilidade de uso, clareza de fluxo)</li>
              </ul>
            </div>
            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200">
              <p className="font-semibold text-emerald-300">Exercício</p>
              <p>Classifique os testes abaixo em funcional ou não funcional:</p>
              <ul className="ml-5 list-disc">
                <li>Verificar se o login funciona corretamente.</li>
                <li>Avaliar se o sistema suporta 10 mil usuários simultâneos.</li>
                <li>Verificar se o site carrega corretamente em diferentes navegadores.</li>
              </ul>
            </div>
          </article>

          {/* MÓDULO 4 */}
          <article id="modulo-4" className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              MÓDULO 4 — Técnicas de Teste
            </h2>
            <p className="text-sm text-zinc-200">
              Técnicas de teste ajudam o QA a{" "}
              <span className="font-medium">escolher melhores cenários</span> sem precisar testar
              tudo de forma aleatória.
            </p>
            <div className="space-y-2 text-sm text-zinc-200">
              <p className="font-semibold text-zinc-50">Particionamento de Equivalência</p>
              <p>
                Divide os dados de entrada em grupos equivalentes. Um valor de cada grupo
                representa os demais.
              </p>
              <p className="text-xs text-zinc-300">
                Exemplo: campo idade de 18 a 60:
              </p>
              <ul className="ml-5 list-disc text-xs text-zinc-300">
                <li>idade &lt; 18</li>
                <li>idade entre 18 e 60</li>
                <li>idade &gt; 60</li>
              </ul>
            </div>
            <div className="space-y-2 text-sm text-zinc-200">
              <p className="font-semibold text-zinc-50">Análise de Valor Limite</p>
              <p>
                Foca em entradas nos limites das regras, onde defeitos são mais comuns.
              </p>
              <p className="text-xs text-zinc-300">
                Exemplo: idade de 18 a 60 — valores importantes: 17, 18, 19, 59, 60, 61.
              </p>
            </div>
            <div className="space-y-2 text-sm text-zinc-200">
              <p className="font-semibold text-zinc-50">Tabela de Decisão</p>
              <p>
                Organiza combinações de regras de negócio em uma tabela, garantindo que todas as
                combinações importantes sejam cobertas.
              </p>
              <p className="text-xs text-zinc-300">
                Exemplo: regras de frete para tipo de cliente x valor de compra.
              </p>
            </div>
            <div className="space-y-2 text-sm text-zinc-200">
              <p className="font-semibold text-zinc-50">Teste de Transição de Estados</p>
              <p>
                Utilizado em sistemas com estados bem definidos, como status de pedidos
                (Criado, Pago, Enviado, Cancelado...).
              </p>
              <p className="text-xs text-zinc-300">
                Verifica se as transições são válidas (ex.: Criado → Pago é válido; Cancelado →
                Enviado não é).
              </p>
            </div>
            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200">
              <p className="font-semibold text-emerald-300">Exercício</p>
              <p>
                Crie cenários de teste para um campo de nota escolar que aceita valores de 0 a
                10, usando:
              </p>
              <ul className="ml-5 list-disc">
                <li>Particionamento de equivalência.</li>
                <li>Análise de valor limite.</li>
              </ul>
            </div>
          </article>

          {/* MÓDULO 5 */}
          <article id="modulo-5" className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              MÓDULO 5 — Níveis de Teste
            </h2>
            <p className="text-sm text-zinc-200">
              Níveis de teste ajudam a organizar{" "}
              <span className="font-medium">onde cada tipo de validação acontece</span> durante o
              desenvolvimento.
            </p>
            <ul className="ml-5 list-disc space-y-2 text-xs text-zinc-300">
              <li>
                <span className="font-medium text-emerald-300">
                  Teste de Unidade (Unit Testing)
                </span>{" "}
                — valida pequenas partes do código (funções, métodos, classes). Geralmente feito
                por desenvolvedores.
              </li>
              <li>
                <span className="font-medium text-emerald-300">Teste de Integração</span> —
                verifica se módulos se comunicam corretamente (frontend + API, API + banco,
                serviços externos, etc.).
              </li>
              <li>
                <span className="font-medium text-emerald-300">Teste de Sistema</span> — valida o
                sistema completo, como o usuário final utiliza (fluxos de login, compra,
                relatórios...).
              </li>
              <li>
                <span className="font-medium text-emerald-300">Teste de Aceitação</span> — verifica
                se o sistema atende às necessidades do cliente/negócio (UAT, testes com usuários
                finais, PO, etc.).
              </li>
            </ul>
            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200">
              <p className="font-semibold text-emerald-300">Exercício</p>
              <p>Indique o nível de teste em cada cenário:</p>
              <ul className="ml-5 list-disc">
                <li>Verificar se uma função calcula corretamente o valor total de um carrinho.</li>
                <li>Testar se o frontend consegue buscar dados da API.</li>
                <li>Validar o processo completo de compra em um e-commerce.</li>
              </ul>
            </div>
          </article>

          {/* MÓDULO 6 */}
          <article id="modulo-6" className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              MÓDULO 6 — Tipos de Testes (Funcionais e Não Funcionais)
            </h2>
            <p className="text-sm text-zinc-200">
              Aqui aprofundamos a visão de{" "}
              <span className="font-medium">funcionais x não funcionais</span> com foco em
              exemplos práticos.
            </p>
            <div className="space-y-2 text-sm text-zinc-200">
              <p className="font-semibold text-zinc-50">Funcionais</p>
              <p className="text-xs text-zinc-300">
                Verificam se o sistema executa corretamente suas funcionalidades de negócio.
              </p>
              <ul className="ml-5 list-disc text-xs text-zinc-300">
                <li>Cadastro de usuário, login, recuperação de senha.</li>
                <li>Adição de produtos ao carrinho, cálculo de frete, pagamento.</li>
              </ul>
            </div>
            <div className="space-y-2 text-sm text-zinc-200">
              <p className="font-semibold text-zinc-50">Não Funcionais</p>
              <p className="text-xs text-zinc-300">
                Avaliam performance, segurança, usabilidade, compatibilidade e confiabilidade.
              </p>
              <ul className="ml-5 list-disc text-xs text-zinc-300">
                <li>Performance: tempo de resposta, carga máxima suportada.</li>
                <li>Segurança: vulnerabilidades, proteção de dados.</li>
                <li>Usabilidade: facilidade de uso, clareza de fluxo.</li>
                <li>Compatibilidade: navegadores, dispositivos, sistemas operacionais.</li>
              </ul>
            </div>
          </article>

          {/* MÓDULO 7 */}
          <article id="modulo-7" className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              MÓDULO 7 — Técnicas de Teste (reforço)
            </h2>
            <p className="text-sm text-zinc-200">
              Reforço das técnicas principais:{" "}
              <span className="font-medium">
                particionamento, valor limite, tabela de decisão e transição de estados
              </span>
              , com foco em aplicação prática.
            </p>
            <p className="text-xs text-zinc-300">
              Pense em um sistema de pedidos com estados: Criado, Pago, Cancelado, Enviado. Use
              transição de estados para garantir que não existam caminhos inválidos (ex.: pedido
              Cancelado não pode ir para Enviado).
            </p>
          </article>

          {/* MÓDULO 8 */}
          <article id="modulo-8" className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              MÓDULO 8 — Estratégias de Teste
            </h2>
            <p className="text-sm text-zinc-200">
              Estratégia de teste é o{" "}
              <span className="font-medium">guia de como os testes serão feitos</span> em um
              projeto.
            </p>
            <ul className="ml-5 list-disc space-y-2 text-xs text-zinc-300">
              <li>
                <span className="font-medium text-emerald-300">Baseada em risco</span> — foca onde
                o impacto é maior (ex.: pagamentos em um sistema financeiro).
              </li>
              <li>
                <span className="font-medium text-emerald-300">Baseada em requisitos</span> — cada
                requisito gera casos de teste associados.
              </li>
              <li>
                <span className="font-medium text-emerald-300">Baseada em experiência</span> — usa
                conhecimento prévio e testes exploratórios.
              </li>
            </ul>
            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200">
              <p className="font-semibold text-emerald-300">Exercício</p>
              <p>
                Explique por que um módulo de pagamento deve receber{" "}
                <span className="font-medium">mais testes</span> que uma página institucional.
              </p>
            </div>
          </article>

          {/* MÓDULO 9 */}
          <article id="modulo-9" className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              MÓDULO 9 — Planejamento de Testes
            </h2>
            <p className="text-sm text-zinc-200">
              O plano de testes organiza{" "}
              <span className="font-medium">o que será testado, quando e por quem</span>.
            </p>
            <ul className="ml-5 list-disc space-y-1 text-xs text-zinc-300">
              <li>Objetivo — por que estamos testando.</li>
              <li>Escopo — o que entra e o que fica fora dos testes.</li>
              <li>Ambiente — onde os testes vão rodar (homolog, staging...).</li>
              <li>Recursos — quem participa (QA, devs, PO...).</li>
              <li>Cronograma — quando cada tipo de teste acontece.</li>
              <li>Riscos — o que pode impedir testes eficientes.</li>
            </ul>
            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200">
              <p className="font-semibold text-emerald-300">Exercício</p>
              <p>Crie um mini plano de testes para um sistema simples de login.</p>
            </div>
          </article>

          {/* MÓDULO 10 */}
          <article id="modulo-10" className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              MÓDULO 10 — Criação de Casos de Teste
            </h2>
            <p className="text-sm text-zinc-200">
              Caso de teste é um{" "}
              <span className="font-medium">roteiro estruturado</span> para validar uma
              funcionalidade.
            </p>
            <ul className="ml-5 list-disc space-y-1 text-xs text-zinc-300">
              <li>ID do teste</li>
              <li>Título</li>
              <li>Pré-condições</li>
              <li>Passos</li>
              <li>Resultado esperado</li>
            </ul>
            <p className="text-xs text-zinc-300">
              Exemplo: CT-001 — Login com credenciais válidas (pré-condição: usuário cadastrado;
              passos: acessar tela, digitar email/senha válidos, clicar entrar; resultado:
              acesso concedido).
            </p>
            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200">
              <p className="font-semibold text-emerald-300">Exercício</p>
              <p>Crie dois casos de teste para a funcionalidade de recuperação de senha.</p>
            </div>
          </article>

          {/* MÓDULO 11 */}
          <article id="modulo-11" className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              MÓDULO 11 — Gestão de Defeitos
            </h2>
            <p className="text-sm text-zinc-200">
              Um defeito é{" "}
              <span className="font-medium">um comportamento inesperado</span> que desvia dos
              requisitos ou da expectativa do usuário.
            </p>
            <p className="text-xs text-zinc-300">
              Ciclo de vida comum de um bug: Novo → Em análise → Em desenvolvimento → Em teste →
              Resolvido → Fechado (ou estados como Rejeitado, Duplicado, Não reproduzido).
            </p>
            <p className="text-sm font-semibold text-zinc-50">Bug report</p>
            <ul className="ml-5 list-disc space-y-1 text-xs text-zinc-300">
              <li>Título claro</li>
              <li>Descrição detalhada</li>
              <li>Passos para reproduzir</li>
              <li>Resultado atual x esperado</li>
              <li>Evidências (prints, logs, vídeos)</li>
            </ul>
            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200">
              <p className="font-semibold text-emerald-300">Exercício</p>
              <p>
                Escreva um bug report para um erro onde o sistema não permite login com senha
                correta.
              </p>
            </div>
          </article>

          {/* MÓDULO 12 */}
          <article id="modulo-12" className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              MÓDULO 12 — Teste Exploratório
            </h2>
            <p className="text-sm text-zinc-200">
              Teste exploratório é{" "}
              <span className="font-medium">explorar o sistema enquanto se aprende sobre ele</span>,
              sem roteiro rígido.
            </p>
            <p className="text-xs text-zinc-300">
              Ideal para descobrir problemas inesperados que casos de teste roteirizados não
              pegam. Geralmente feito em sessões com tempo definido (ex.: 60 minutos focados no
              carrinho de compras).
            </p>
            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200">
              <p className="font-semibold text-emerald-300">Exercício</p>
              <p>
                Liste 5 formas criativas de tentar quebrar um sistema de carrinho de compras.
              </p>
            </div>
          </article>

          {/* MÓDULO 13 */}
          <article id="modulo-13" className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              MÓDULO 13 — Automação de Testes
            </h2>
            <p className="text-sm text-zinc-200">
              Automação é usar{" "}
              <span className="font-medium">ferramentas para executar testes automaticamente</span>
              , reduzindo esforço manual em cenários repetitivos.
            </p>
            <ul className="ml-5 list-disc space-y-1 text-xs text-zinc-300">
              <li>Boa para regressão, fluxos críticos e testes repetitivos.</li>
              <li>Não é ideal para tudo — testes exploratórios, por exemplo, são difíceis de automatizar.</li>
              <li>Ferramentas comuns: Selenium, Cypress, Katalon Studio.</li>
            </ul>
            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200">
              <p className="font-semibold text-emerald-300">Exercício</p>
              <p>
                Explique por que testes exploratórios geralmente{" "}
                <span className="font-medium">não são automatizados</span>.
              </p>
            </div>
          </article>

          {/* MÓDULO 14 */}
          <article id="modulo-14" className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              MÓDULO 14 — QA em Metodologias Ágeis
            </h2>
            <p className="text-sm text-zinc-200">
              Em ágil (como Scrum), o QA está{" "}
              <span className="font-medium">junto do time o tempo todo</span>, não só no final.
            </p>
            <ul className="ml-5 list-disc space-y-1 text-xs text-zinc-300">
              <li>Participa de refinamentos de backlog, ajudando a melhorar histórias.</li>
              <li>Ajuda a definir critérios de aceite claros.</li>
              <li>Testa continuamente durante a sprint (não só antes da entrega).</li>
            </ul>
            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200">
              <p className="font-semibold text-emerald-300">Exercício</p>
              <p>
                Explique como o QA pode contribuir durante o{" "}
                <span className="font-medium">refinement</span> de uma sprint.
              </p>
            </div>
          </article>

          {/* MÓDULO 15 */}
          <article id="modulo-15" className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              MÓDULO 15 — Regressão, Carga, Smoke e Sanity
            </h2>
            <ul className="ml-5 list-disc space-y-2 text-xs text-zinc-300">
              <li>
                <span className="font-medium text-emerald-300">Testes de regressão</span> —
                garantem que novas mudanças não quebram funcionalidades já existentes.
              </li>
              <li>
                <span className="font-medium text-emerald-300">Testes de carga</span> — avaliam
                como o sistema se comporta sob grande volume de usuários/transações.
              </li>
              <li>
                <span className="font-medium text-emerald-300">Smoke</span> — checagem rápida das
                funcionalidades principais após um deploy.
              </li>
              <li>
                <span className="font-medium text-emerald-300">Sanity</span> — verificação focada
                em uma correção específica, para saber se ela realmente funcionou.
              </li>
            </ul>
          </article>

          {/* MÓDULO 16 */}
          <article id="modulo-16" className="space-y-4 pb-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              MÓDULO 16 — Métricas de Qualidade & Conclusão
            </h2>
            <p className="text-sm text-zinc-200">
              Métricas ajudam a{" "}
              <span className="font-medium">medir a qualidade</span> do produto e do processo.
            </p>
            <ul className="ml-5 list-disc space-y-1 text-xs text-zinc-300">
              <li>Taxa de defeitos (bugs encontrados em teste).</li>
              <li>Taxa de defeitos em produção.</li>
              <li>Cobertura de testes.</li>
              <li>Tempo médio de resolução de defeitos.</li>
            </ul>
            <p className="text-sm text-zinc-200">
              Ao dominar esses módulos, você desenvolve habilidades para{" "}
              <span className="font-medium">
                analisar sistemas, identificar riscos, criar estratégias de teste
              </span>{" "}
              e realmente garantir qualidade de software — não só encontrar bugs.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

