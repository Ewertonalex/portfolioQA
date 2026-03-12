"use client";

import Link from "next/link";

export default function TemasQualidadePage() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <header className="border-b border-zinc-800 bg-gradient-to-r from-zinc-950 via-black to-zinc-950">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Temas sobre qualidade
            </p>
            <p className="text-xs text-zinc-400">
              Conteúdos aprofundados de QA, testes e carreira.
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

      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-black">
        <div className="mx-auto max-w-5xl px-6 py-12 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
            Biblioteca de temas
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Conteúdos para aprofundar em Qualidade de Software.
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Aqui ficam agrupados materiais mais completos sobre QA: fundamentos, tipos de testes,
            trilhas de estudo e boas práticas. Cada tema tem sua própria página, para você ler com
            calma ou usar como referência no dia a dia.
          </p>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-5xl px-6 py-12 grid gap-4 md:grid-cols-2">
          <Link
            href="/tipos-de-testes"
            className="group flex h-full flex-col justify-between rounded-2xl border border-emerald-500/40 bg-zinc-900/70 p-5 transition hover:border-emerald-400 hover:bg-emerald-500/5"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Tema 01
              </p>
              <h2 className="text-base font-semibold text-zinc-50">
                5 tipos de testes que todo QA deve conhecer
              </h2>
              <p className="text-xs text-zinc-300">
                Funcional, exploratório, regressivo, integração e aceitação — com explicações e
                exemplos práticos.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-emerald-300">
              Abrir tema
              <span aria-hidden>→</span>
            </span>
          </Link>

          <Link
            href="/qa-trilha"
            className="group flex h-full flex-col justify-between rounded-2xl border border-cyan-500/40 bg-zinc-900/70 p-5 transition hover:border-cyan-400 hover:bg-cyan-500/5"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Tema 02
              </p>
            <h2 className="text-base font-semibold text-zinc-50">
                Trilha de QA para iniciantes
              </h2>
              <p className="text-xs text-zinc-300">
                Um curso-game com módulos de fundamentos, técnicas, tipos de testes, automação e
                carreira em QA.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-cyan-300">
              Abrir tema
              <span aria-hidden>→</span>
            </span>
          </Link>

          <Link
            href="/temas-qualidade/cypress-iniciantes"
            className="group flex h-full flex-col justify-between rounded-2xl border border-cyan-500/40 bg-zinc-900/70 p-5 transition hover:border-cyan-400 hover:bg-cyan-500/5"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Tema 03
              </p>
              <h2 className="text-base font-semibold text-zinc-50">
                Cypress para iniciantes
              </h2>
              <p className="text-xs text-zinc-300">
                Guia passo a passo para criar um projeto com Cypress e escrever o primeiro teste
                de interface e o primeiro teste de API.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-cyan-300">
              Abrir tema
              <span aria-hidden>→</span>
            </span>
          </Link>

          <Link
            href="/temas-qualidade/postman-iniciantes"
            className="group flex h-full flex-col justify-between rounded-2xl border border-amber-500/40 bg-zinc-900/70 p-5 transition hover:border-amber-400 hover:bg-amber-500/5"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Tema 04
              </p>
              <h2 className="text-base font-semibold text-zinc-50">
                Postman para iniciantes
              </h2>
              <p className="text-xs text-zinc-300">
                Aprenda Postman em poucos minutos: collection, environment, requisições e testes
                automatizados em um mini-regressivo de API.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-amber-300">
              Abrir tema
              <span aria-hidden>→</span>
            </span>
          </Link>

          <Link
            href="/temas-qualidade/ia-qa-pratica"
            className="group flex h-full flex-col justify-between rounded-2xl border border-emerald-500/40 bg-zinc-900/70 p-5 transition hover:border-emerald-400 hover:bg-emerald-500/5"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Tema 05
              </p>
              <h2 className="text-base font-semibold text-zinc-50">
                Como uso IA no dia a dia de QA (na prática)
              </h2>
              <p className="text-xs text-zinc-300">
                Exemplos reais de uso de IA para cenários, documentação, análise de erros e apoio
                em automação de testes — com limites claros do que continua sendo decisão humana.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-emerald-300">
              Abrir tema
              <span aria-hidden>→</span>
            </span>
          </Link>

          <Link
            href="/temas-qualidade/erros-qa-iniciantes"
            className="group flex h-full flex-col justify-between rounded-2xl border border-fuchsia-500/40 bg-zinc-900/70 p-5 transition hover:border-fuchsia-400 hover:bg-fuchsia-500/5"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
                Tema 06
              </p>
              <h2 className="text-base font-semibold text-zinc-50">
                Erros que vejo em testes de QA iniciantes (e como evitar)
              </h2>
              <p className="text-xs text-zinc-300">
                5 erros comuns que atrapalham a qualidade — com exemplos reais e dicas práticas
                para melhorar.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-fuchsia-300">
              Abrir tema
              <span aria-hidden>→</span>
            </span>
          </Link>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Em construção
            </p>
            <p className="mt-2 text-sm text-zinc-200">
              Novos temas sobre qualidade (por exemplo: uso de IA em QA, fluxos de teste para
              e-commerce) serão adicionados aqui ao longo do tempo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

