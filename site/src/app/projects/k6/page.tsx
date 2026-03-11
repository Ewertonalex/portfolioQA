import Link from "next/link";

export default function K6Project() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <header className="border-b border-zinc-800 bg-gradient-to-r from-zinc-950 via-black to-zinc-950">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-400">
              Projeto · k6
            </p>
            <p className="text-xs text-zinc-400">
              Testes de performance
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
        <div className="mx-auto max-w-5xl px-6 py-16 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400/80">
            Projeto · Testes de performance com k6
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Avaliando desempenho de APIs sob carga.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Este projeto mostra como utilizo k6 para simular múltiplos usuários acessando um
            endpoint ao mesmo tempo, definindo thresholds claros para latência e taxa de erro.
          </p>
        </div>
      </section>

      <section className="border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-5xl px-6 py-12 space-y-8">
          <div className="grid gap-8 md:grid-cols-[2fr,3fr]">
            <div className="space-y-4 text-sm text-zinc-300">
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                Cenário de performance
              </h2>
              <p className="text-sm text-zinc-300">
                O script atual executa requisições para um endpoint de listagem de posts usando
                a API pública JSONPlaceholder, simulando um cenário de catálogo de produtos em
                um e-commerce.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>• 20 usuários virtuais (VUs) por 30 segundos.</li>
                <li>• Threshold de menos de 1% de erros.</li>
                <li>• 95% das requisições abaixo de 800ms.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-fuchsia-400">
                Trecho do script em k6
              </p>
              <pre className="overflow-auto rounded-xl bg-black/60 p-3 text-[10px] leading-relaxed">
{`export const options = {
  vus: 20,
  duration: "30s",
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<800"],
  },
};`}
              </pre>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300">
              <h3 className="text-sm font-semibold text-zinc-50">
                Como isso se conecta a um e-commerce
              </h3>
              <ul className="mt-2 space-y-1.5 text-xs text-zinc-300">
                <li>• Avaliar se a lista de produtos responde bem em picos de acesso.</li>
                <li>• Observar latência percebida pelo usuário final.</li>
                <li>• Ajudar o time a definir limites aceitáveis antes de campanhas grandes.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300">
              <h3 className="text-sm font-semibold text-zinc-50">
                Como rodar o teste de performance
              </h3>
              <ul className="mt-2 space-y-1 text-xs text-zinc-300">
                <li>1. Instalar o k6 conforme documentação oficial.</li>
                <li>2. Acessar a pasta <code>performance-k6</code> do repositório.</li>
                <li>3. Executar <code>k6 run basic-load-test.js</code>.</li>
                <li>4. Analisar as métricas de latência, taxa de erro e throughput.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

