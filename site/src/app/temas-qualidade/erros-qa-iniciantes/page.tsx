"use client";

import Link from "next/link";

function ErrorCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 shadow-md shadow-emerald-500/5">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-semibold text-emerald-300">
          {number}
        </div>
        <h2 className="text-base font-semibold text-zinc-50">{title}</h2>
      </div>
      <div className="mt-3 space-y-3 text-xs leading-relaxed text-zinc-300">
        {children}
      </div>
    </article>
  );
}

function Example({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-2 rounded-lg border-l-4 border-emerald-500/70 bg-black/40 px-4 py-3 text-[11px] text-zinc-300">
      <span className="font-semibold text-zinc-100">Exemplo: </span>
      {children}
    </div>
  );
}

function HowToImprove({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-1 rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-[11px] text-zinc-300">
      <p className="mb-1 text-[11px] font-semibold text-emerald-300">
        Como evitar
      </p>
      {children}
    </div>
  );
}

export default function ErrosQaIniciantesPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <header className="border-b border-zinc-800 bg-gradient-to-r from-zinc-950 via-black to-zinc-950">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Temas sobre qualidade
            </p>
            <p className="text-xs text-zinc-400">
              Erros que vejo em testes de QA iniciantes (e como evitar)
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
            Conteúdo educativo
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Erros que vejo em testes de QA iniciantes (e como evitar)
          </h1>
          <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
            Este material nasceu de situações reais em times onde atuei como QA
            e mentor. A ideia não é apontar dedos, mas ajudar quem está
            começando a{" "}
            <span className="font-medium text-zinc-100">
              acelerar o aprendizado evitando armadilhas comuns
            </span>
            .
          </p>
          <p className="text-xs text-zinc-400">
            Se você está iniciando em QA, use estes pontos como checklist
            pessoal. Se já é mais sênior, talvez reconheça alguns comportamentos
            e possa usar o conteúdo para apoiar quem está chegando agora.
          </p>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-5xl px-6 py-10 space-y-6">
          <ErrorCard
            number="01"
            title="Testar só o caminho feliz (e ignorar o que pode dar errado)"
          >
            <p>
              Um dos erros mais comuns é olhar apenas para o fluxo perfeito:
              dados corretos, conexão estável, usuário fazendo exatamente o que
              o PO desenhou. O problema é que{" "}
              <span className="font-medium text-zinc-100">
                o usuário real raramente segue o script
              </span>
              .
            </p>
            <Example>
              Em um fluxo de cadastro, o QA testa apenas os campos preenchidos
              corretamente. Não valida o que acontece com e-mail sem @, senha
              muito curta, campos vazios ou usuário tentando cadastrar o mesmo
              e-mail duas vezes.
            </Example>
            <HowToImprove>
              <ul className="ml-4 list-disc space-y-1">
                <li>
                  Para cada cenário feliz, liste pelo menos 2–3 variações de
                  erro ou comportamento inesperado.
                </li>
                <li>
                  Use técnicas como valores-limite e classes de equivalência
                  para encontrar combinações relevantes sem testar tudo.
                </li>
                <li>
                  Pergunte-se sempre: “O que pode dar errado aqui do ponto de
                  vista do usuário e do negócio?”.
                </li>
              </ul>
            </HowToImprove>
          </ErrorCard>

          <ErrorCard
            number="02"
            title="Não pensar em risco e prioridade (tudo parece ter o mesmo peso)"
          >
            <p>
              Outro comportamento frequente é distribuir o esforço de teste de
              forma igual para todas as partes do sistema. Na prática,{" "}
              <span className="font-medium text-zinc-100">
                alguns fluxos têm muito mais impacto no negócio do que outros
              </span>
              .
            </p>
            <Example>
              O QA gasta mais tempo testando a tela de edição de avatar do
              usuário do que o fluxo de pagamento. Se algo quebra no pagamento,
              a empresa para de faturar; se o avatar falha, o impacto é bem
              menor.
            </Example>
            <HowToImprove>
              <ul className="ml-4 list-disc space-y-1">
                <li>
                  Converse com PO e devs sobre{" "}
                  <span className="font-medium">áreas críticas</span>:
                  faturamento, segurança, dados sensíveis, fluxos com alta
                  volumetria.
                </li>
                <li>
                  Classifique cenários como alto, médio ou baixo risco e ajuste
                  profundidade dos testes conforme essa visão.
                </li>
                <li>
                  Em prazos curtos, priorize o que quebra o negócio primeiro;
                  detalhes visuais vêm depois.
                </li>
              </ul>
            </HowToImprove>
          </ErrorCard>

          <ErrorCard
            number="03"
            title="Casos de teste vagos (que ninguém consegue repetir)"
          >
            <p>
              Casos de teste muito genéricos ou sem dados claros dificultam
              reproduzir problemas e{" "}
              <span className="font-medium text-zinc-100">
                geram discussões desnecessárias com o time
              </span>
              .
            </p>
            <Example>
              Caso de teste escrito como “Validar login com sucesso” sem
              informar qual usuário usar, qual ambiente, se há pré-condições
              (ex.: usuário já confirmado por e-mail) ou qual é o resultado
              esperado além de “deu certo”.
            </Example>
            <HowToImprove>
              <ul className="ml-4 list-disc space-y-1">
                <li>
                  Inclua sempre: pré-condições, passos objetivos, dados de
                  exemplo e resultado esperado.
                </li>
                <li>
                  Escreva de forma que outra pessoa consiga executar sem te
                  chamar para tirar dúvidas o tempo todo.
                </li>
                <li>
                  Use um padrão simples (Given/When/Then ou similar) para
                  deixar os cenários consistentes.
                </li>
              </ul>
            </HowToImprove>
          </ErrorCard>

          <ErrorCard
            number="04"
            title='Confundir teste exploratório com "sair clicando"'
          >
            <p>
              Teste exploratório não é apenas abrir a tela e clicar em tudo
              aleatoriamente.{" "}
              <span className="font-medium text-zinc-100">
                Ele precisa de objetivo, foco e anotações
              </span>
              .
            </p>
            <Example>
              O QA diz que “fez exploratório”, mas não registra o que planejou
              explorar, quais riscos queria observar nem os resultados
              encontrados. Na próxima sprint, ninguém sabe exatamente o que foi
              coberto.
            </Example>
            <HowToImprove>
              <ul className="ml-4 list-disc space-y-1">
                <li>
                  Defina um{" "}
                  <span className="font-medium">charter de sessão</span>:
                  objetivo, área do sistema, duração.
                </li>
                <li>
                  Anote caminhos percorridos, comportamentos estranhos e
                  dúvidas levantadas.
                </li>
                <li>
                  Depois da sessão, transforme achados relevantes em bugs,
                  melhorias ou casos de teste futuros.
                </li>
              </ul>
            </HowToImprove>
          </ErrorCard>

          <ErrorCard
            number="05"
            title="Olhar só para o bug técnico e esquecer o impacto no usuário"
          >
            <p>
              Focar apenas na mensagem de erro ou no stack trace pode fazer o QA
              perder a perspectiva de{" "}
              <span className="font-medium text-zinc-100">
                como aquele problema afeta a experiência real
              </span>
              .
            </p>
            <Example>
              Em um erro no checkout, o QA abre um bug com “500 no endpoint
              /orders”, mas não deixa claro que o usuário fica sem saber se a
              compra foi concluída, podendo gerar cobrança duplicada ou perda
              de venda.
            </Example>
            <HowToImprove>
              <ul className="ml-4 list-disc space-y-1">
                <li>
                  Ao registrar bugs, descreva sempre o{" "}
                  <span className="font-medium">impacto para o usuário e para o
                  negócio</span>.
                </li>
                <li>
                  Priorize problemas que geram perda de confiança, perda de
                  dinheiro ou exposição de dados.
                </li>
                <li>
                  Use prints, logs e contexto de uso para ajudar o time a
                  entender a gravidade real do defeito.
                </li>
              </ul>
            </HowToImprove>
          </ErrorCard>

          <div className="mt-8 space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 text-sm text-zinc-200">
            <p>
              Estes são alguns dos erros que mais vejo em QAs iniciantes — e
              que eu mesmo já cometi no começo da carreira. O importante é{" "}
              <span className="font-medium text-zinc-100">
                aprender rápido com cada experiência
              </span>{" "}
              e ajustar a forma de testar.
            </p>
            <p className="text-xs text-zinc-400">
              E você,{" "}
              <span className="font-medium text-zinc-100">
                qual desses erros mais vê no dia a dia
              </span>
              ? Ou qual já cometeu e hoje faria diferente?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

