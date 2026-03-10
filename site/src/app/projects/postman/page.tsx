export default function PostmanProject() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-black">
        <div className="mx-auto max-w-5xl px-6 py-16 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80">
            Projeto · Testes de API com Postman
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Collections orientadas a negócio para APIs de exemplo.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Aqui mostro como estruturo cenários de testes de API usando Postman, com foco em
            clareza de contratos, validação de regras de negócio e organização por recursos.
          </p>
        </div>
      </section>

      <section className="border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-5xl px-6 py-12 space-y-8">
          <div className="grid gap-8 md:grid-cols-[2fr,3fr]">
            <div className="space-y-4 text-sm text-zinc-300">
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                Estrutura da collection
              </h2>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>• Requests para listar e criar recursos (posts) em API pública.</li>
                <li>
                  • Uso de variável <code>{"{{baseUrl}}"}</code> via environment.
                </li>
                <li>• Scripts de teste validando status, corpo e campos obrigatórios.</li>
              </ul>
              <p className="text-xs text-zinc-400">
                O objetivo é refletir o dia a dia com APIs de produtos, pedidos ou usuários,
                onde garantir o contrato é fundamental para a saúde do sistema.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Exemplo de script de teste no Postman
              </p>
              <pre className="overflow-auto rounded-xl bg-black/60 p-3 text-[10px] leading-relaxed">
{`pm.test("Status code é 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Resposta é uma lista não vazia", function () {
  const json = pm.response.json();
  pm.expect(json).to.be.an("array");
  pm.expect(json.length).to.be.above(0);
});`}
              </pre>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300">
              <h3 className="text-sm font-semibold text-zinc-50">
                Casos de uso típicos em um e-commerce
              </h3>
              <ul className="mt-2 space-y-1.5 text-xs text-zinc-300">
                <li>• Listar produtos com filtros e paginação.</li>
                <li>• Criar pedidos com itens, quantidades e valores corretos.</li>
                <li>• Validar mensagens de erro e códigos HTTP em cenários negativos.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300">
              <h3 className="text-sm font-semibold text-zinc-50">
                Como executar esta collection
              </h3>
              <ul className="mt-2 space-y-1 text-xs text-zinc-300">
                <li>1. Importar a collection <code>qa-api-collection.json</code> no Postman.</li>
                <li>2. Importar o environment <code>qa-api-environment.json</code>.</li>
                <li>3. Selecionar o environment e rodar as requests ou a collection inteira.</li>
                <li>
                  4. Opcional: usar Newman em linha de comando para integrar em pipelines de CI.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

