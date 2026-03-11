import Link from "next/link";
import InteractiveOrb from "../InteractiveOrb";
export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      {/* Fundo com gradiente e orb */}
      <div className="relative overflow-hidden border-b border-zinc-800 bg-gradient-to-b from-zinc-900/90 via-black to-black">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-[-120px] top-[-80px] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-24">
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Bem-vindo ao QA Playground
            </p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Antes de entrar no portfólio,{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                que tal aquecer o cérebro?
              </span>
            </h1>
            <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
              Este é o{" "}
              <span className="font-medium">QA Quiz interativo do Ewerton</span>. Um mini game
              para você testar quanto seu mindset de qualidade está alinhado com{" "}
              <span className="font-medium">risco, negócio e prática do dia a dia</span>.
            </p>
            <div className="space-y-2 text-xs text-zinc-300">
              <p className="font-semibold text-zinc-100">Como funciona:</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Você pode brincar no meu QA Quiz interativo.</li>
                <li>Ou ir direto para o portfólio completo e ver meus projetos.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Jogar o QA Quiz
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Ir direto para o portfólio
              </Link>
            </div>
          </div>

          <div className="flex w-full max-w-sm flex-col items-center gap-4 md:w-80">
            <InteractiveOrb />
            <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 text-xs text-zinc-300 shadow-lg shadow-emerald-500/15 backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Por que esse game?
              </p>
              <p className="mt-2 text-[11px]">
                Além de mostrar a parte técnica do meu trabalho, gosto de{" "}
                <span className="font-medium">ensinar e provocar reflexão em QA</span>. Este
                quiz é uma amostra do tipo de experiência que crio para comunidades e times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

