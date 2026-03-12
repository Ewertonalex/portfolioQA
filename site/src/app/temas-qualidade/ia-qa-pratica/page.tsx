"use client";

import Link from "next/link";

function SectionCard({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 shadow-md shadow-emerald-500/5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
        {label}
      </p>
      <h2 className="mt-1 text-base font-semibold text-zinc-50">{title}</h2>
      <div className="mt-3 space-y-3 text-xs leading-relaxed text-zinc-300">
        {children}
      </div>
    </article>
  );
}

function BulletList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="ml-4 list-disc space-y-1 text-[11px] text-zinc-300">
      {children}
    </ul>
  );
}

export default function IaQaPraticaPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <header className="border-b border-zinc-800 bg-gradient-to-r from-zinc-950 via-black to-zinc-950">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Temas sobre qualidade
            </p>
            <p className="text-xs text-zinc-400">
              Como uso IA no dia a dia de QA (na prática)
            </p>
          </div>
          <Link
            href="/temas-qualidade"
            className="inline-flex w-fit rounded-full border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-100 transition hover:border-emerald-400 hover:text-emerald-300"
          >
            Voltar para temas
          </Link>
        </div>
      </header>

      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-black">
        <div className="mx-auto max-w-5xl px-6 py-10 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
            IA aplicada a QA
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Como uso IA no dia a dia de QA (na prática)
          </h1>
          <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
            IA não substitui o trabalho de QA, mas pode{" "}
            <span className="font-medium text-zinc-100">
              acelerar muito a análise, a criação de cenários e a documentação
            </span>{" "}
            quando usada com responsabilidade. Aqui estão formas reais de uso,
            incluindo apoio em automação de testes.
          </p>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-5xl px-6 py-10 space-y-6">
          <SectionCard
            label="Uso 01"
            title="Gerar ideias de cenários (e depois refinar criticamente)"
          >
            <p>
              Em vez de começar de uma tela em branco, uso IA para{" "}
              <span className="font-medium text-zinc-100">
                gerar sugestões iniciais de cenários
              </span>{" "}
              com base em uma descrição do fluxo, regras de negócio e riscos.
            </p>
            <BulletList>
              <li>
                Passo o contexto: qual é a funcionalidade, quem é o usuário, o
                que é crítico para o negócio.
              </li>
              <li>
                Peço sugestões de cenários funcionais, negativos e de borda.
              </li>
              <li>
                Depois,{" "}
                <span className="font-medium">
                  reviso tudo com olhar crítico
                </span>
                , removo o que não faz sentido e completo o que estiver faltando.
              </li>
            </BulletList>
            <p className="text-[11px] text-zinc-400">
              A IA ajuda a não esquecer possibilidades óbvias, mas{" "}
              <span className="font-medium text-zinc-100">
                a decisão final de cobertura é sempre minha
              </span>
              .
            </p>
          </SectionCard>

          <SectionCard
            label="Uso 02"
            title="Ajudar a estruturar documentação de QA"
          >
            <p>
              Uso IA como assistente para{" "}
              <span className="font-medium text-zinc-100">
                organizar e melhorar a escrita
              </span>{" "}
              de planos de teste, relatórios e checklists.
            </p>
            <BulletList>
              <li>
                Peço para sugerir estrutura de seções para um plano de testes
                baseado em um contexto específico.
              </li>
              <li>
                Uso IA para transformar anotações soltas em um{" "}
                <span className="font-medium">resumo executivo</span> para a
                gestão.
              </li>
              <li>
                Crio checklists a partir de lições aprendidas (ex.: o que
                precisamos sempre revisar antes de subir uma release).
              </li>
            </BulletList>
            <p className="text-[11px] text-zinc-400">
              O conteúdo final passa por revisão humana para garantir{" "}
              alinhamento com a cultura do time e com a forma como comunicamos
              riscos.
            </p>
          </SectionCard>

          <SectionCard
            label="Uso 03"
            title="Apoiar análise de logs, erros e comportamentos estranhos"
          >
            <p>
              Em sistemas complexos, logs e mensagens de erro podem ser extensos
              e difíceis de ler. IA ajuda a{" "}
              <span className="font-medium text-zinc-100">
                resumir e destacar padrões
              </span>
              .
            </p>
            <BulletList>
              <li>
                Copio trechos de logs (sem dados sensíveis) e peço um resumo
                dos pontos principais.
              </li>
              <li>
                Peço hipóteses para a causa raiz, sempre tratando como{" "}
                <span className="font-medium">sugestões</span>, não como
                verdade absoluta.
              </li>
              <li>
                Gero perguntas melhores para levar para devs ou SRE, em vez de
                apenas “não funcionou”.
              </li>
            </BulletList>
            <p className="text-[11px] text-zinc-400">
              IA acelera a leitura, mas{" "}
              <span className="font-medium text-zinc-100">
                a interpretação de impacto e prioridade continua sendo de QA +
                time
              </span>
              .
            </p>
          </SectionCard>

          <SectionCard
            label="Uso 04"
            title="Apoiar automação de testes (sem delegar o pensamento crítico)"
          >
            <p>
              Em automação, uso IA como{" "}
              <span className="font-medium text-zinc-100">
                copiloto para acelerar código e refino de suites
              </span>
              , principalmente em ferramentas como Cypress, Postman e k6.
            </p>
            <BulletList>
              <li>
                Peço esboços de testes em Cypress ou scripts de performance em
                k6 com base em cenários já definidos.
              </li>
              <li>
                Peço sugestões de{" "}
                <span className="font-medium">refatoração</span> para deixar o
                código de automação mais legível e reutilizável.
              </li>
              <li>
                Uso IA para converter cenários em linguagem natural (ex. BDD)
                para uma estrutura próxima ao código de teste.
              </li>
            </BulletList>
            <p className="text-[11px] text-zinc-400">
              Mesmo quando IA gera o esqueleto do teste,{" "}
              <span className="font-medium text-zinc-100">
                eu reviso asserts, dados e cobertura
              </span>{" "}
              para garantir que o foco continue sendo valor de negócio, não só
              “ter automação rodando”.
            </p>
          </SectionCard>

          <SectionCard
            label="Limites importantes"
            title="O que eu não delego para IA"
          >
            <p>
              Algumas decisões{" "}
              <span className="font-medium text-zinc-100">
                continuam intocáveis
              </span>{" "}
              e são responsabilidade do QA e do time:
            </p>
            <BulletList>
              <li>
                <span className="font-medium">Decisão de risco:</span> IA pode
                sugerir, mas a decisão sobre o que é aceitável ou não vem do
                contexto de negócio.
              </li>
              <li>
                <span className="font-medium">Go/No-go de release:</span> a
                leitura final de resultados, riscos e trade-offs é humana.
              </li>
              <li>
                <span className="font-medium">Contexto de usuário:</span> IA não
                vive o dia a dia do cliente; cabe a nós representar essa visão.
              </li>
              <li>
                <span className="font-medium">Comunicação com o time:</span> dar
                más notícias com cuidado, negociar escopo e explicar riscos
                exigem empatia real.
              </li>
            </BulletList>
          </SectionCard>

          <div className="mt-6 space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 text-sm text-zinc-200">
            <p>
              Em resumo, encaro IA como{" "}
              <span className="font-medium text-zinc-100">
                uma ferramenta de aceleração
              </span>
              , não como substituto do papel de QA. Ela ajuda a pensar em mais
              possibilidades, organizar ideias e ganhar velocidade, mas{" "}
              <span className="font-medium text-zinc-100">
                quem conecta tudo isso com o produto e o usuário continua sendo
                o humano
              </span>
              .
            </p>
            <p className="text-xs text-zinc-400">
              Se você também usa IA no dia a dia de QA,{" "}
              <span className="font-medium text-zinc-100">
                em qual dessas frentes ela mais te ajuda hoje
              </span>
              ? E o que você ainda prefere fazer totalmente sem IA?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

