"use client";

import Link from "next/link";

function StepCard({
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

function CodeSnippet({ children }: { children: React.ReactNode }) {
  return (
    <pre className="mt-2 overflow-x-auto rounded-md bg-black/70 p-3 text-[11px] text-emerald-100">
      <code>{children}</code>
    </pre>
  );
}

export default function CypressIniciantesPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <header className="border-b border-zinc-800 bg-gradient-to-r from-zinc-950 via-black to-zinc-950">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Temas sobre qualidade
            </p>
            <p className="text-xs text-zinc-400">
              Guia prático de Cypress para iniciantes
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
            Automação de testes
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Cypress para iniciantes: do zero ao primeiro teste web e de API
          </h1>
          <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
            Este guia é para quem quer dar os primeiros passos com{" "}
            <span className="font-medium text-zinc-100">Cypress</span> na
            prática. A ideia é montar um projeto simples e, a partir dele,
            criar um teste de interface e um teste de API.
          </p>
          <p className="text-xs text-zinc-400">
            Dica: se possível, grave a tela rodando os testes (por exemplo com
            um GIF curto) para usar em apresentações ou posts.
          </p>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-5xl px-6 py-10 space-y-6">
          <StepCard label="Passo 1" title="Criando o projeto com Cypress">
            <p>
              Comece criando uma pasta para o projeto e inicializando um
              package.json. Depois, instale o Cypress.
            </p>
            <CodeSnippet>{`mkdir cypress-iniciantes
cd cypress-iniciantes
npm init -y
npm install cypress --save-dev`}</CodeSnippet>
            <p className="text-[11px] text-zinc-400">
              Em seguida, abra o Cypress pela primeira vez:
            </p>
            <CodeSnippet>{`npx cypress open`}</CodeSnippet>
            <p>
              O Cypress vai criar automaticamente a pasta{" "}
              <span className="font-mono text-emerald-300">cypress/</span> com
              exemplos. Você pode apagá-los depois e manter apenas os seus
              testes.
            </p>
          </StepCard>

          <StepCard
            label="Passo 2"
            title="Primeiro teste de interface (front-end)"
          >
            <p>
              Vamos supor que você tenha uma página de login de testes (pode
              ser do seu próprio Test Lab ou um ambiente de demonstração). A
              ideia é validar um login com sucesso.
            </p>
            <p className="text-[11px] text-zinc-400">
              Exemplo de teste em{" "}
              <span className="font-mono text-emerald-300">
                cypress/e2e/login.cy.js
              </span>
              :
            </p>
            <CodeSnippet>{`describe('Login - fluxo feliz', () => {
  it('permite que o usuário faça login com credenciais válidas', () => {
    cy.visit('https://seu-ambiente-de-teste.com/login');

    cy.get('[data-test=email]').type('qa@demo.com');
    cy.get('[data-test=password]').type('quality123');
    cy.get('[data-test=login-button]').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Bem-vindo').should('be.visible');
  });
});`}</CodeSnippet>
            <p>
              Repare no uso de{" "}
              <span className="font-mono text-emerald-300">
                data-test
              </span>{" "}
              como seletor: isso deixa o teste menos frágil do que depender de
              classes ou textos que podem mudar com o tempo.
            </p>
          </StepCard>

          <StepCard
            label="Passo 3"
            title="Primeiro teste de API usando Cypress"
          >
            <p>
              Além de testar a interface, Cypress também pode ser usado para
              validar APIs com{" "}
              <span className="font-mono text-emerald-300">cy.request</span>.
              Isso é útil para testar contratos, status code e respostas.
            </p>
            <p className="text-[11px] text-zinc-400">
              Exemplo simples de teste de API em{" "}
              <span className="font-mono text-emerald-300">
                cypress/e2e/api-users.cy.js
              </span>
              :
            </p>
            <CodeSnippet>{`describe('API - Usuários', () => {
  it('deve retornar lista de usuários com sucesso', () => {
    cy.request({
      method: 'GET',
      url: 'https://seu-ambiente-de-teste.com/api/users',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.an('array');
    });
  });
});`}</CodeSnippet>
            <p>
              Você pode ir além e validar campos específicos, paginação,
              performance básica (tempo de resposta) e cenários de erro (por
              exemplo, requisições com token inválido).
            </p>
          </StepCard>

          <StepCard
            label="Passo 4"
            title="Rodando os testes e registrando evidências (imagens e vídeos)"
          >
            <p>
              Para mostrar o valor da automação, é interessante ter{" "}
              <span className="font-medium text-zinc-100">
                evidências visuais
              </span>{" "}
              da execução.
            </p>
            <ul className="ml-4 list-disc space-y-1 text-[11px] text-zinc-300">
              <li>
                Use <span className="font-mono text-emerald-300">
                  npx cypress run
                </span>{" "}
                para gerar vídeos automáticos (modo headless).
              </li>
              <li>
                No modo interativo (
                <span className="font-mono text-emerald-300">npx cypress open</span>
                ), grave a tela com uma ferramenta de captura para criar GIFs ou
                vídeos curtos.
              </li>
              <li>
                Salve essas evidências em uma pasta do projeto ou use nos seus
                materiais de portfólio e posts.
              </li>
            </ul>
            <p className="text-[11px] text-zinc-400">
              No seu portfólio, você pode incorporar prints ou vídeos dessas
              execuções nas páginas de projetos para mostrar o fluxo completo:
              requisito → cenário → automação → evidência.
            </p>
          </StepCard>

          <StepCard
            label="Próximos passos"
            title="Evoluindo além do básico"
          >
            <ul className="ml-4 list-disc space-y-1 text-[11px] text-zinc-300">
              <li>Criar Page Objects ou comandos customizados para reduzir repetição.</li>
              <li>
                Integrar os testes de Cypress ao pipeline de CI/CD (GitHub
                Actions, GitLab CI etc.).
              </li>
              <li>
                Conectar testes de UI e API em um fluxo de ponta a ponta
                (ex.: criar usuário via API e depois logar pela interface).
              </li>
            </ul>
            <p className="mt-3 text-xs text-zinc-300">
              A partir desses primeiros testes, você já tem base para construir
              uma suíte de regressão automatizada em cima dos cenários mais
              importantes do negócio.
            </p>
          </StepCard>
        </div>
      </section>
    </div>
  );
}

