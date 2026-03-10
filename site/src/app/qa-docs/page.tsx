"use client";

export default function QaDocs() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      {/* Hero */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-black">
        <div className="mx-auto max-w-5xl px-6 py-14 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
            Documentações de QA · E-commerce Hero Toys
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Como documentar testes, bugs e planos
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              de forma profissional.
            </span>
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Nesta aba eu mostro{" "}
            <span className="font-medium">modelos reais de documentação de QA</span> adaptados
            para o cenário do e-commerce de brinquedos de heróis (Hero Toys): relatórios de
            execução, bug reports e planos de teste.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-5xl px-6 py-10 space-y-10 text-sm leading-relaxed text-zinc-200">
          {/* RELATÓRIO DE EXECUÇÃO */}
          <article className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              📊 Guia Completo — Relatório de Execução de Testes
            </h2>
            <p className="text-sm text-zinc-200">
              O Relatório de Execução é a{" "}
              <span className="font-medium">prova documentada</span> de que o fluxo foi testado:
              o que foi coberto, o que ficou fora, quais riscos existem e qual o parecer final.
            </p>

            <div className="space-y-2 text-xs text-zinc-300">
              <p className="font-semibold text-zinc-50">Para que serve (na prática)</p>
              <ul className="ml-5 list-disc">
                <li>Mostrar que o que foi pedido na task realmente foi validado.</li>
                <li>Evidenciar os cenários críticos cobertos.</li>
                <li>Deixar claros riscos e pendências antes do deploy.</li>
                <li>Registrar um parecer objetivo (Aprovado, Reprovado, etc.).</li>
              </ul>
            </div>

            <div className="space-y-2 text-xs text-zinc-300">
              <p className="font-semibold text-zinc-50">Estrutura padrão</p>
              <ul className="ml-5 list-disc">
                <li>Cabeçalho</li>
                <li>Objetivo</li>
                <li>Contexto</li>
                <li>Ambiente e pré-condições</li>
                <li>Escopo testado / não testado</li>
                <li>Casos de teste executados (CTs)</li>
                <li>Evidências</li>
                <li>Regressão / Smoke</li>
                <li>Riscos / Pendências</li>
                <li>Conclusão / Parecer final</li>
              </ul>
            </div>

            <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-xs text-zinc-200">
              <p className="font-semibold text-emerald-300">Exemplo prático — Checkout Hero Toys</p>
              <pre className="whitespace-pre-wrap text-[11px] text-zinc-200">
{`📄 Relatório de Execução de Testes
Ticket: HERO-101
Título: Fluxo de checkout - Hero Toys (login → carrinho → pagamento)
Ambiente: HLG
Data: 20/02/2026
QA: Ewerton Alexander
Referências: Pedido 900123, usuário qa-teste@herotoys.com
Status: ✅ Aprovado com ressalvas

🎯 Objetivo
Validar o fluxo completo de compra na Hero Toys (seleção de brinquedos de heróis,
login, carrinho, pagamento simulado e confirmação), garantindo que o cenário feliz
funcione sem erros e que os principais cenários negativos estejam cobertos.

🧩 Contexto
Nova versão do checkout implementando melhorias na exibição do resumo do pedido
e ajustes na validação de cartão.

🧪 Ambiente e Pré-condições
- Ambiente: HLG (homolog)
- Usuário: qa-teste@herotoys.com (perfil cliente padrão)
- Massa:
  • Pedido base: criado via fluxo normal na própria HLG
  • Brinquedos usados: Escudo do Capitão, Mjolnir

📋 Escopo
✅ Testado:
- Fluxo feliz: login válido → adicionar produtos → finalizar pedido
- Validação de campos obrigatórios de pagamento (nome, número, CVV)
- Mensagens de erro para cartão inválido e campos vazios

🚫 Não testado / fora de escopo:
- Integração real com gateway de pagamento (apenas simulação)
- Testes de performance (carga) — cobertos no projeto de k6

🧪 Casos de Teste Executados
CT-01 – Checkout com dados válidos
Pré-condição: Usuário logado e com 2 brinquedos no carrinho.
Passos:
1. Acessar /demo-store
2. Fazer login com qa@demo.com / quality123
3. Adicionar "Escudo do Capitão" e "Mjolnir" ao carrinho
4. Seguir para pagamento
5. Preencher todos os campos com dados válidos
6. Confirmar o pedido
Resultado esperado: Pedido confirmado com exibição de número de pedido simulado.
Resultado obtido: Conforme esperado, pedido simulado HT-15980 exibido em tela.
Status: ✅ Aprovado

CT-02 – Cartão inválido
Pré-condição: Usuário logado e com 1 brinquedo no carrinho.
Passos:
1. Repetir passos de login e adição de produto
2. Informar número de cartão com menos de 8 dígitos
3. Tentar finalizar
Resultado esperado: Mensagem clara informando que o número de cartão é inválido,
sem concluir o pedido.
Resultado obtido: Mensagem exibida, pedido não confirmado.
Status: ✅ Aprovado

📎 Evidências
- Prints das telas de:
  • Carrinho com produtos
  • Tela de pagamento com erro
  • Tela de confirmação do pedido
- IDs usados:
  • Pedido simulado: HT-15980

🔁 Regressão / Smoke
- Smoke executado nos fluxos principais:
  • Login
  • Adição de produtos ao carrinho
  • Navegação até pagamento
Resultado: ✅ Sem impactos aparentes.

⚠️ Riscos / Pendências
- Não foram executados testes de carga nesta release do checkout.

📌 Conclusão
Fluxo de checkout da Hero Toys aprovado para deploy, com ressalva de que
testes de performance devem ser considerados antes de grandes campanhas
promocionais.`}
              </pre>
            </div>

            <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-[11px] text-zinc-200">
              <p className="font-semibold text-emerald-300">Template para copiar e adaptar</p>
              <pre className="whitespace-pre-wrap">
{`📄 Relatório de Execução de Testes
Ticket:
Título:
Ambiente:
Data:
QA:
Referências (pedido/usuário):
Status: ✅/⚠️/❌/⛔

🎯 Objetivo
[1-3 linhas]

🧩 Contexto
[problema/melhoria]

🧪 Ambiente e Pré-condições
- Ambiente:
- Usuário/permissões:
- Massa (IDs):

📋 Escopo
✅ Testado:
- ...
🚫 Não testado / fora de escopo:
- ...

🧪 Casos de Teste Executados
CT-01 –
Pré-condição:
Passos:
Resultado esperado:
Resultado obtido:
Status:

CT-02 –
...

📎 Evidências
- Prints/vídeos/logs anexos:
- IDs usados:

🔁 Regressão / Smoke
- ...
Resultado: ✅ / ❌

⚠️ Riscos / Pendências
- ...

📌 Conclusão
[parecer final]`}
              </pre>
            </div>
          </article>

          {/* BUG REPORT */}
          <article className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              🐛 Guia Completo — Report de Bug
            </h2>
            <p className="text-sm text-zinc-200">
              Um bom bug report facilita a vida de quem corrige e{" "}
              <span className="font-medium">evita idas e vindas desnecessárias</span>.
            </p>
            <div className="space-y-2 text-xs text-zinc-300">
              <p className="font-semibold text-zinc-50">Template padrão</p>
              <pre className="whitespace-pre-wrap">
{`[BUG] - "Título"

Relatório de Bug - [Identificação da tarefa ou CT]

Descrição:
[Descreva de forma objetiva o problema e o impacto.]

Passos Reproduzidos:
1. ...
2. ...

Resultado Esperado:
[Comportamento correto]

Resultado Obtido:
[Comportamento atual com erro]

Evidências:
[prints / vídeos / logs]

Conclusão:
[recomendação de próxima ação]`}
              </pre>
            </div>

            <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-[11px] text-zinc-200">
              <p className="font-semibold text-emerald-300">
                Exemplo prático — Erro ao calcular total do carrinho
              </p>
              <pre className="whitespace-pre-wrap">
{`[BUG] - "Total do carrinho incorreto ao remover brinquedo"

Relatório de Bug - HERO-202

Descrição:
Durante testes no ambiente HLG da Hero Toys, ao remover um dos brinquedos do
carrinho, o valor total exibido permanece o mesmo, não refletindo o novo subtotal.
O problema impacta diretamente a confiança do usuário no preço final da compra.

Passos Reproduzidos:
1. Acessar https://meuportfolioqa.netlify.app/demo-store
2. Realizar login com qa@demo.com / quality123
3. Adicionar "Escudo do Capitão" e "Mjolnir" ao carrinho
4. Navegar para o carrinho
5. Remover "Mjolnir" clicando no botão de diminuir quantidade até 0

Resultado Esperado:
O item removido deve sair do carrinho e o total deve ser recalculado apenas com
o "Escudo do Capitão".

Resultado Obtido:
O item é removido visualmente, porém o total permanece considerando os dois
brinquedos, gerando valor maior que o correto.

Evidências:
- Print da tela do carrinho antes e depois da remoção
- Vídeo curto mostrando o passo a passo

Conclusão:
Recomendo devolver a tarefa para correção imediata, pois o bug afeta a
confiabilidade do valor exibido ao cliente no checkout.`}
              </pre>
            </div>
          </article>

          {/* PLANO DE TESTES */}
          <article className="space-y-4">
            <h2 className="text-lg font-semibold text-emerald-300">
              📋 Guia — Como Criar Planos de Testes
            </h2>
            <p className="text-sm text-zinc-200">
              O plano de testes é o{" "}
              <span className="font-medium">GPS da estratégia de QA</span>: define o que será
              testado, como, por quem e quando.
            </p>

            <div className="space-y-2 text-xs text-zinc-300">
              <p className="font-semibold text-zinc-50">Exemplo prático — Checkout Hero Toys</p>
              <pre className="whitespace-pre-wrap">
{`PLANO DE TESTES — CHECKOUT HERO TOYS

Projeto: Hero Toys - Checkout v1.0
Responsável QA: Ewerton Alexander
Data: 20/02/2026
Ambiente: HLG

Objetivos
- Validar fluxo completo de compra (carrinho → pagamento → confirmação)
- Garantir que não haja cálculo incorreto de total
- Verificar mensagens de erro em cenários negativos de pagamento

Escopo
✅ Será testado:
- Login de cliente existente
- Adição e remoção de brinquedos no carrinho
- Pagamento simulado com campos obrigatórios
- Exibição do resumo do pedido

❌ Não será testado:
- Integração real com gateway de pagamento (simulação apenas)
- Processos de backoffice (relatórios de faturamento)`}
              </pre>
            </div>

            <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-[11px] text-zinc-200">
              <p className="font-semibold text-emerald-300">Template geral para plano de testes</p>
              <pre className="whitespace-pre-wrap">
{`📋 PLANO DE TESTES

1. INFORMAÇÕES GERAIS
Projeto:
Versão:
Responsável QA:
Data de Criação:
Ambiente:

2. OBJETIVOS
- ...

3. ESCOPO
✅ SERÁ TESTADO:
- ...
❌ NÃO SERÁ TESTADO:
- ...

4. ESTRATÉGIA DE TESTES
Tipos de teste:
- Funcional:
- Usabilidade:
- Performance:
- Segurança:

5. CASOS DE TESTE
CT-001:
Pré-condição:
Passos:
Resultado esperado:
Prioridade:

6. RECURSOS
- Equipe:
- Ferramentas:
- Ambientes:

7. CRONOGRAMA
- Início dos testes:
- Testes funcionais:
- Regressão:

8. RISCOS E MITIGAÇÃO
- Risco:
  Mitigação:

9. CRITÉRIOS DE ACEITE
- ...

10. ENTREGÁVEIS
- Relatório de execução
- Relatório de bugs
- Evidências`}
              </pre>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

