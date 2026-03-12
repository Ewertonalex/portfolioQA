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

export default function PostmanIniciantesPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <header className="border-b border-zinc-800 bg-gradient-to-r from-zinc-950 via-black to-zinc-950">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Temas sobre qualidade
            </p>
            <p className="text-xs text-zinc-400">
              Postman para iniciantes: do zero a um teste completo
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
            Testes de API
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Aprenda Postman em poucos minutos: do zero a um teste completo
          </h1>
          <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
            O objetivo aqui é montar uma collection simples no Postman e chegar
            rapidamente a um{" "}
            <span className="font-medium text-zinc-100">
              teste de API automatizado com asserções
            </span>
            , pronto para ser incluído em uma rotina de regressão.
          </p>
          <p className="text-xs text-zinc-400">
            Você pode tirar prints de cada etapa (collection, environment,
            corpo da requisição, aba Tests) para usar no portfólio e em
            apresentações.
          </p>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-5xl px-6 py-10 space-y-6">
          <StepCard label="Passo 1" title="Instalando e criando sua primeira collection">
            <p>
              Baixe o Postman (app desktop) ou use a versão web. Depois de
              logar, clique em{" "}
              <span className="font-medium text-zinc-100">New → Collection</span>{" "}
              e dê um nome, por exemplo:{" "}
              <span className="font-mono text-emerald-300">
                QA Demo API Tests
              </span>
              .
            </p>
            <p className="text-[11px] text-zinc-400">
              Dentro dessa collection ficarão suas requisições e scripts de
              teste. Pense nela como “pasta de testes” do Postman.
            </p>
          </StepCard>

          <StepCard label="Passo 2" title="Configurando um environment (URL e variáveis)">
            <p>
              Em vez de escrever a URL completa da API toda hora, crie um{" "}
              <span className="font-medium text-zinc-100">Environment</span>.
            </p>
            <ul className="ml-4 list-disc space-y-1 text-[11px] text-zinc-300">
              <li>
                Clique em <span className="font-medium">Environments</span> →
                New.
              </li>
              <li>
                Adicione uma variável{" "}
                <span className="font-mono text-emerald-300">baseUrl</span>{" "}
                com valor, por exemplo:{" "}
                <span className="font-mono text-emerald-300">
                  https://seu-ambiente-de-teste.com/api
                </span>
                .
              </li>
              <li>
                Salve e selecione esse environment no canto superior direito do
                Postman.
              </li>
            </ul>
            <p>
              A partir daí você pode usar{" "}
              <span className="font-mono text-emerald-300">
                {"{{baseUrl}}"}
              </span>{" "}
              nas URLs das requisições.
            </p>
          </StepCard>

          <StepCard label="Passo 3" title="Criando uma requisição GET e testando manualmente">
            <p>
              Dentro da collection, crie uma nova requisição chamada{" "}
              <span className="font-mono text-emerald-300">
                Listar usuários
              </span>
              .
            </p>
            <ul className="ml-4 list-disc space-y-1 text-[11px] text-zinc-300">
              <li>Método: GET</li>
              <li>
                URL:{" "}
                <span className="font-mono text-emerald-300">
                  {"{{baseUrl}}/users"}
                </span>
              </li>
              <li>Clique em Send e verifique o status e o corpo da resposta.</li>
            </ul>
            <p className="text-[11px] text-zinc-400">
              Este é o teste manual: você confere visualmente se o retorno faz
              sentido. No próximo passo, vamos automatizar as verificações.
            </p>
          </StepCard>

          <StepCard label="Passo 4" title="Adicionando testes na aba Tests">
            <p>
              Na mesma requisição, vá até a aba{" "}
              <span className="font-medium text-zinc-100">Tests</span>. É aqui
              que você escreve asserções em JavaScript para validar a resposta.
            </p>
            <p className="text-[11px] text-zinc-400">Exemplo de script:</p>
            <CodeSnippet>{`pm.test("Status code é 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Resposta tem array de usuários", function () {
  const json = pm.response.json();
  pm.expect(json.data).to.be.an("array");
  pm.expect(json.data.length).to.be.greaterThan(0);
});`}</CodeSnippet>
            <p>
              Ao clicar em <span className="font-medium">Send</span> de novo, o
              Postman exibirá se os testes passaram ou falharam, logo abaixo da
              resposta.
            </p>
          </StepCard>

          <StepCard label="Passo 5" title="Criando um teste de POST com corpo e validações">
            <p>
              Agora, crie uma requisição{" "}
              <span className="font-mono text-emerald-300">POST</span> chamada{" "}
              <span className="font-mono text-emerald-300">
                Criar usuário
              </span>
              .
            </p>
            <ul className="ml-4 list-disc space-y-1 text-[11px] text-zinc-300">
              <li>
                Método: POST, URL{" "}
                <span className="font-mono text-emerald-300">
                  {"{{baseUrl}}/users"}
                </span>
              </li>
              <li>
                Aba Body → raw → JSON e um corpo como:
              </li>
            </ul>
            <CodeSnippet>{`{
  "name": "QA Demo",
  "email": "qa.demo@example.com",
  "role": "tester"
}`}</CodeSnippet>
            <p className="text-[11px] text-zinc-400">
              Na aba Tests, você pode validar status, campos retornados e até
              guardar valores em variáveis:
            </p>
            <CodeSnippet>{`pm.test("Usuário criado com sucesso", function () {
  pm.response.to.have.status(201);
  const json = pm.response.json();
  pm.expect(json.id).to.exist;
  pm.expect(json.email).to.eql("qa.demo@example.com");

  // guardar id para outras requisições
  pm.environment.set("lastUserId", json.id);
});`}</CodeSnippet>
          </StepCard>

          <StepCard label="Passo 6" title="Rodando tudo no Collection Runner">
            <p>
              Com pelo menos duas requisições com testes configurados, você já
              consegue rodar a coleção inteira de uma vez.
            </p>
            <ul className="ml-4 list-disc space-y-1 text-[11px] text-zinc-300">
              <li>
                Clique com o botão direito na collection →{" "}
                <span className="font-medium">Run collection</span>.
              </li>
              <li>
                Escolha o environment, revise quantas iterações deseja e clique
                em <span className="font-medium">Run</span>.
              </li>
              <li>
                Observe o resumo: quantos testes passaram/falharam, tempo de
                resposta médio etc.
              </li>
            </ul>
            <p className="text-[11px] text-zinc-400">
              Esse já é um{" "}
              <span className="font-medium text-zinc-100">
                mini-regressivo de API
              </span>{" "}
              que você pode rodar a cada mudança relevante.
            </p>
          </StepCard>

          <StepCard label="Próximos passos" title="Evoluindo com Postman">
            <ul className="ml-4 list-disc space-y-1 text-[11px] text-zinc-300">
              <li>
                Usar{" "}
                <span className="font-mono text-emerald-300">
                  pre-request scripts
                </span>{" "}
                para gerar tokens ou dados dinâmicos.
              </li>
              <li>
                Importar collection para pipelines de CI/CD (Newman ou Postman
                CLI).
              </li>
              <li>
                Organizar collections por contexto de negócio (ex. pagamentos,
                cadastro, relatórios) para facilitar o reuso.
              </li>
            </ul>
            <p className="mt-3 text-xs text-zinc-300">
              Com esses passos, você já consegue montar um cenário do zero até
              um teste automatizado de API com Postman, pronto para ser
              mostrado no portfólio e reutilizado no dia a dia.
            </p>
          </StepCard>
        </div>
      </section>
    </div>
  );
}

