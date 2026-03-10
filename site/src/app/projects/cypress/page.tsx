export default function CypressProject() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-black">
        <div className="mx-auto max-w-5xl px-6 py-16 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
            Projeto · Automação com Cypress
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Fluxos críticos de um e-commerce com Cypress.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Este projeto demonstra como automatizo fluxos Web e testes de API usando Cypress,
            com foco em clareza de cenários, legibilidade e conexão direta com o negócio.
          </p>
        </div>
      </section>

      <section className="border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-5xl px-6 py-12 space-y-8">
          <div className="grid gap-8 md:grid-cols-[2fr,3fr]">
            <div className="space-y-4 text-sm text-zinc-300">
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                O que é coberto pelos testes
              </h2>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>• Login bem-sucedido em aplicação real (Sauce Demo).</li>
                <li>• Mensagens de erro quando as credenciais são inválidas.</li>
                <li>• Verificação de elementos importantes na tela pós-login.</li>
                <li>• Testes de API usando <code>cy.request</code> em uma API pública.</li>
              </ul>
              <p className="text-xs text-zinc-400">
                A ideia é mostrar como o QA pode validar tanto a experiência visual quanto o
                comportamento das APIs que suportam os fluxos de negócio.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Exemplo resumido de cenário E2E
              </p>
              <pre className="overflow-auto rounded-xl bg-black/60 p-3 text-[10px] leading-relaxed">
{`describe("Login - Sauce Demo", () => {
  it("login válido leva ao catálogo", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_item").should("have.length.greaterThan", 0);
  });
});`}
              </pre>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300">
              <h3 className="text-sm font-semibold text-zinc-50">
                Testes de API dentro do Cypress
              </h3>
              <p className="mt-2 text-xs text-zinc-300">
                Além da interface, uso o <code>cy.request</code> para validar contratos
                básicos de API (status, corpo, campos obrigatórios) em uma API pública
                (JSONPlaceholder), simulando cenários comuns de um backend de e-commerce.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300">
              <h3 className="text-sm font-semibold text-zinc-50">
                Como rodar este projeto localmente
              </h3>
              <ul className="mt-2 space-y-1 text-xs text-zinc-300">
                <li>1. Acesse a pasta <code>automation-cypress</code> do repositório.</li>
                <li>2. Instale as dependências com <code>npm install</code>.</li>
                <li>3. Para abrir a interface do Cypress, rode <code>npm run cypress:open</code>.</li>
                <li>4. Para execução em modo headless, use <code>npm test</code>.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

