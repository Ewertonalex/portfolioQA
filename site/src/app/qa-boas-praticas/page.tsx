"use client";

export default function QaBoasPraticas() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      {/* Hero */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-black">
        <div className="mx-auto max-w-5xl px-6 py-14 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
            Boas práticas de qualidade · Mindset de equipe
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Qualidade é responsabilidade de todos
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              — não só do QA.
            </span>
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Nesta aba eu compartilho{" "}
            <span className="font-medium">boas práticas de qualidade</span> que venho aplicando
            na prática: mindset, colaboração entre papéis, comunicação e exemplos reais de como
            QA pode ser parceiro do time, e não “gargalo”.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-5xl px-6 py-10 space-y-10 text-sm leading-relaxed text-zinc-200">
          {/* Mindset */}
          <article className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              🧠 Mindset de qualidade para toda a equipe
            </h2>
            <div className="grid gap-4 md:grid-cols-2 text-xs text-zinc-300">
              <div className="space-y-2 rounded-2xl border border-red-500/40 bg-red-500/5 p-4">
                <p className="font-semibold text-red-300">Mindset errado</p>
                <ul className="ml-5 list-disc">
                  <li>"O QA vai testar depois".</li>
                  <li>"QA é responsável pela qualidade".</li>
                  <li>"Se passou no QA, está tudo certo".</li>
                  <li>"QA é o gargalo do projeto".</li>
                </ul>
              </div>
              <div className="space-y-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-4">
                <p className="font-semibold text-emerald-300">Mindset correto</p>
                <ul className="ml-5 list-disc">
                  <li>"Vou entregar com qualidade desde o código".</li>
                  <li>"Qualidade é responsabilidade de todos".</li>
                  <li>"QA é parceiro, não fiscal".</li>
                  <li>"Queremos reduzir riscos juntos".</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-zinc-300">
              QA não é quem "garante" a qualidade, é quem{" "}
              <span className="font-medium">ajuda a validar e dar visibilidade</span> da
              qualidade construída por toda a equipe.
            </p>
          </article>

          {/* QA não é gargalo */}
          <article className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              🚫 Por que QA não é gargalo
            </h2>
            <div className="grid gap-4 md:grid-cols-2 text-xs text-zinc-300">
              <div className="space-y-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-4">
                <p className="font-semibold text-emerald-300">QA é estratégico</p>
                <ul className="ml-5 list-disc">
                  <li>Previne bugs em produção.</li>
                  <li>Reduz custo de correção.</li>
                  <li>Protege reputação da empresa.</li>
                  <li>Garante experiência do usuário.</li>
                </ul>
              </div>
              <div className="space-y-2 rounded-2xl border border-cyan-500/40 bg-cyan-500/5 p-4">
                <p className="font-semibold text-cyan-300">QA acelera o projeto</p>
                <ul className="ml-5 list-disc">
                  <li>Encontra problemas cedo.</li>
                  <li>Evita retrabalho massivo depois.</li>
                  <li>Melhora processos de desenvolvimento.</li>
                  <li>Reduz tempo total de correções.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Mentalidade de QA */}
          <article className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              🔍 Como pensa um QA
            </h2>
            <div className="grid gap-4 md:grid-cols-2 text-xs text-zinc-300">
              <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
                <p className="font-semibold text-zinc-50">Mentalidade investigativa</p>
                <ul className="ml-5 list-disc">
                  <li>"E se o usuário fizer X?"</li>
                  <li>"O que acontece se esse campo ficar vazio?"</li>
                  <li>"Esse fluxo funciona em mobile?"</li>
                  <li>"O que acontece se a API falhar aqui?"</li>
                </ul>
              </div>
              <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
                <p className="font-semibold text-zinc-50">Visão holística</p>
                <ul className="ml-5 list-disc">
                  <li>Pensa no impacto em outros módulos.</li>
                  <li>Considera contexto de negócio e usuário.</li>
                  <li>Avalia riscos (técnicos e de negócio).</li>
                  <li>Olha para a jornada completa, não só para a tela.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Por que QA testa além do chamado */}
          <article className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              🌐 Por que QA testa além do chamado
            </h2>
            <p className="text-xs text-zinc-300">
              Sistemas são interconectados. Uma mudança simples em um ponto pode quebrar outros
              fluxos.
            </p>
            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-300">
              <p className="font-semibold text-zinc-50">Exemplo — Campo novo no checkout</p>
              <p>
                Chamado: "Adicionar campo Cupom de Desconto no checkout da Hero Toys".
                <br />
                Dev implementa o campo e ele funciona na tela principal.
              </p>
              <p className="mt-2">O QA vai além e verifica:</p>
              <ul className="ml-5 list-disc">
                <li>Se o cupom aparece corretamente no resumo do pedido.</li>
                <li>Se o valor do desconto reflete no total final.</li>
                <li>Se o cupom é mostrado em relatórios internos.</li>
                <li>Se o layout não quebra em mobile.</li>
              </ul>
              <p className="mt-2 text-emerald-300">
                Resultado: vários problemas são evitados antes de chegar no cliente final.
              </p>
            </div>
          </article>

          {/* Boas práticas por papel */}
          <article className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              🤝 Boas práticas por papel (Dev, PO, QA)
            </h2>
            <div className="grid gap-4 md:grid-cols-3 text-xs text-zinc-300">
              <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
                <p className="font-semibold text-zinc-50">Para Desenvolvedores</p>
                <ul className="ml-5 list-disc">
                  <li>Entender bem o requisito e questionar cenários de borda.</li>
                  <li>Testar a própria implementação antes de enviar para QA.</li>
                  <li>Pensar em impactos em outras áreas (regressão).</li>
                  <li>Participar ativamente de code reviews.</li>
                </ul>
              </div>
              <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
                <p className="font-semibold text-zinc-50">Para POs / Analistas</p>
                <ul className="ml-5 list-disc">
                  <li>Definir critérios de aceite claros.</li>
                  <li>Documentar regras de negócio com exemplos.</li>
                  <li>Estar presente nos refinamentos com QA e Dev.</li>
                  <li>Responder dúvidas rapidamente para evitar retrabalho.</li>
                </ul>
              </div>
              <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
                <p className="font-semibold text-zinc-50">Para QAs</p>
                <ul className="ml-5 list-disc">
                  <li>Ser parceiro desde o início (refinamentos, planejamento).</li>
                  <li>Comunicar riscos com clareza e objetividade.</li>
                  <li>Produzir documentação enxuta e útil (relatórios, bugs, planos).</li>
                  <li>Compartilhar conhecimento com o time.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Conclusão */}
          <article className="space-y-4 pb-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              🏆 Qualidade é um esporte coletivo
            </h2>
            <p className="text-sm text-zinc-200">
              Quando toda a equipe abraça a cultura de qualidade, o resultado é:
            </p>
            <ul className="ml-5 list-disc text-xs text-zinc-300">
              <li>Entregas mais rápidas e previsíveis.</li>
              <li>Clientes mais satisfeitos.</li>
              <li>Menos custos com correções em produção.</li>
              <li>Times mais motivados e orgulhosos do que entregam.</li>
            </ul>
            <p className="mt-2 text-xs text-zinc-400 italic">
              "A qualidade nunca é um acidente; ela é sempre o resultado de um esforço
              inteligente." — John Ruskin
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

