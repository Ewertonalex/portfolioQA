![Banner](https://img.shields.io/badge/QA-Quality%20Engineer-blueviolet?style=for-the-badge)

# Portfólio de QA – Ewerton Alexander

## 🚀 Quem sou eu

Sou **Ewerton Alexander Batista**, **Business-Oriented QA Leader**, com experiência sólida em análise de requisitos, validação de regras de negócio e garantia de qualidade em sistemas críticos de alta volumetria. Atuo conectando **produto, tecnologia e operações**, traduzindo necessidades de negócio em soluções testáveis, escaláveis e seguras.

Atualmente sou **Líder do Time de QA na Uhuu Tecnologia**, participando ativamente da definição de estratégias de qualidade, análise funcional, definição de critérios de aceite, interface com stakeholders e condução de incidentes críticos com foco em causa raiz e plano de ação. Tenho formação em **Gestão de Qualidade de Software**, **MBA em Gestão de Projetos em TI** e **Tecnólogo em Sistemas para Internet**.

---

## 🧭 Experiência profissional

- **Uhuu Tecnologia – Líder do Time de QA (Dez/2025 – Atual)**  
  Liderança de time de QA orientada ao negócio, definição de estratégia de qualidade, análise de requisitos, critérios de aceite e apoio à priorização de backlog em sistemas de alta volumetria.

- **Uhuu Tecnologia – Analista de Testes Sênior / Pleno (2023 – Dez/2025)**  
  Validação de fluxos críticos de pagamento (PIX, adquirentes, fallback), criação de cenários BDD, relatórios para decisão e mentoria técnica.

- **Compass.uol – Testador de Software Jr (2022 – 2023)**  
  Criação de cenários BDD (Gherkin), análise de defeitos e gestão no JIRA/Zephyr.

- **Korporate Solution Factory – QA Specialist (Freelance) (2022)**  
  Planejamento e execução de testes E2E, com relatórios executivos voltados à tomada de decisão de negócio.

---

## 🎓 Formação acadêmica

- Graduado em **Gestão de Qualidade de Software**
- **MBA em Gestão de Projetos em TI**
- **Tecnólogo em Sistemas para Internet**

---

## 🧩 Conhecimentos e habilidades

- **Qualidade & processos**
  - Análise de requisitos funcionais e regras de negócio  
  - Definição de critérios de aceite e mapeamento de processos  
  - Gestão de incidentes, análise de causa raiz e de impacto  
  - Atuação em ambientes ágeis (Scrum) e gestão de backlog

- **Ferramentas & stack**
  - JIRA, Zephyr, Trello  
  - Cypress, Katalon Studio, Postman, Gherkin (BDD), k6  

- **Soft skills**
  - Comunicação técnica clara com stakeholders  
  - Visão de negócio e foco em resultados  
  - Liderança de time e mentoria técnica  

---

## 🤖 Como utilizo IA no meu dia a dia de QA

- **Geração e refinamento de cenários de teste**
  - Uso IA para gerar uma primeira lista de cenários de teste a partir de requisitos ou histórias de usuário, sempre com revisão crítica posterior.
  - Refino essa lista removendo redundâncias e adicionando cenários de risco que exigem conhecimento de negócio e contexto do produto.

- **Apoio em documentação e comunicação**
  - Uso IA para reformular e melhorar a clareza de casos de teste, relatórios de execução e bug reports, mantendo meu estilo e critérios de qualidade.
  - Acelero a criação de templates e guias (como os de relatório, bug e plano de testes) que depois são customizados para cada projeto.

- **Simulação de perfis de usuários e jornadas**
  - Crio prompts específicos para simular diferentes perfis de usuários (iniciante, avançado, apressado, indeciso) e pensar em jornadas alternativas de uso.
  - A partir dessas simulações, identifico fluxos que merecem testes exploratórios adicionais e refinamento de UX.

- **Análise de logs e métricas**
  - Utilizo IA para resumir logs extensos, falhas recorrentes e métricas de execução, ajudando a direcionar investigações mais profundas.
  - Com base nesses resumos, priorizo onde concentrar esforço de testes e quais hipóteses validar com o time técnico.

- **Exemplo prático no cenário de e-commerce**
  - No fluxo de checkout da loja demo de brinquedos de heróis, uso IA para gerar a primeira versão dos casos de teste (login → carrinho → pagamento → confirmação).
  - Em seguida, complemento com cenários de falha (erro de gateway, cartão inválido, latência alta) e de recuperação de fluxo (voltar ao carrinho, alterar itens, aplicar cupom), garantindo que o resultado final seja sempre revisado e confiável.

---

## 🗺️ Mapa do Portfólio

- **🌐 Site do Portfólio (Front moderno)**: _em construção_
- **🤖 Automação de Testes com Cypress (Web + API)**: `./automation-cypress`
- **🌐 Testes de API com Postman (Collection real)**: `./api-testing-postman`
- **⚡ Testes de Performance com k6 (Cenário real)**: `./performance-k6`

---

## 🎯 Visão de Qualidade

- **Qualidade além do bug**: qualidade como capacidade do produto entregar valor consistente ao negócio e ao usuário final.
- **QA como parceiro de produto**: participação desde a análise de requisitos, ajudando a evitar problemas antes mesmo do desenvolvimento.
- **Dados para decisão**: uso de métricas, evidências e relatórios claros para apoiar a tomada de decisão de negócio.

---

## 📚 Fundamentos de QA

Nesta seção (no site e aqui no repositório) você encontrará conteúdo sobre:

- **O que é QA**: qualidade de software, prevenção x detecção, custo do defeito.
- **Papel do QA**: além de “testar”, atuar na clareza de requisitos, comunicação e risco.
- **Tipos de testes**: funcionais, regressão, exploratórios, aceitação, smoke, sanity, entre outros.
- **Técnicas de teste**: particionamento em classes de equivalência, análise de valores-limite, decision tables, pairwise, entre outras – sempre com exemplos práticos.
- **Mentalidade de QA**: pensamento crítico, visão de negócio, empatia com o usuário e colaboração com o time.

---

## 🤖 Automação de Testes com Cypress

Na pasta `automation-cypress` ficará um **projeto real de automação**, cobrindo:

- Fluxos Web críticos de uma aplicação exemplo (login, cadastro, fluxo de compra etc.).
- Testes de API utilizando o próprio Cypress.
- Estrutura organizada (page objects, comandos customizados, cenários reutilizáveis).

O objetivo é mostrar não só o código, mas **como penso estratégia, cobertura e leitura dos resultados**.  
Também utilizo IA como apoio na **geração inicial de cenários**, rascunho de comandos customizados e refino das asserções, sempre com revisão manual cuidadosa para garantir que os testes reflitam o negócio e os riscos reais.

---

## 🌐 Testes de API com Postman

Na pasta `api-testing-postman` você encontrará:

- **Collection Postman** com cenários de testes funcionais de API (CRUD, autenticação, erros).
- **Environments** com variáveis configuradas.
- Exemplos de **scripts de teste** (asserts) no Postman, garantindo status code, corpo da resposta, schema básico e tempo de resposta.

Também mostro como esses testes podem ser executados via **Newman** (linha de comando) e integrados em pipelines.

---

## ⚡ Testes de Performance com k6

Na pasta `performance-k6` haverá:

- Scripts k6 simulando cenários de **carga** e/ou **stress** em endpoints de uma API.
- Configuração de usuários virtuais, ramp-up e thresholds de performance.
- Orientações sobre como ler os resultados (latência, throughput, erros).

O foco é demonstrar **como o QA pode antecipar problemas de performance** antes da produção.

---

## 📎 Links Rápidos

- **LinkedIn**: https://www.linkedin.com/in/ewertonalexander/
- **E-mail**: ewertonlgk20@gmail.com
- **GitHub**: https://github.com/Ewertonalex

---

## 🧪 Projetos pessoais em destaque

- **Agente IA – Cenários de Testes** (`agente-IA-cenarios-de-testes`)  
  Assistente focado em apoiar QA na geração de cenários e ideias de testes a partir de descrições em linguagem natural, ajudando a ampliar a cobertura e a criatividade na fase de design. Demonstra, na prática, como estruturo prompts e reviso criticamente o que a IA produz antes de levar para o dia a dia de testes.

- **QA Milionário** (`qa-milionario`)  
  Jogo educativo no estilo *Show do Milhão* voltado para QA, com perguntas baseadas em **ISTQB CTFL**, recursos de ranking, ajudas e foco em aprendizagem gamificada de qualidade de software.

- **Contador de Mesada – Enzo & Matteo** (`Contador_de_Mesada`)  
  Sistema web interativo para gestão de mesada, que registra comportamentos diários e calcula descontos automáticos, com interface responsiva e uso de HTML, CSS e JavaScript para lógica de negócio e armazenamento local.

- **API de Estudo para Testes de QA** (`API-de-Estudo-para-Testes-QA`)  
  API pensada para praticar testes funcionais e não funcionais, servindo como backend simples para cenários de validação de contratos, status HTTP e regras de negócio.

- **CTFL Study** (`ctfl-study`)  
  Repositório voltado a materiais e exercícios de estudo para a certificação **ISTQB CTFL**, centralizando resumos, questões e referências para formação de base teórica em QA.

- **Performance Tester** (`Performance-Tester`)  
  Projeto focado em testes de performance, com scripts e exemplos para simular carga, medir latência e avaliar a resiliência de aplicações sob diferentes perfis de uso.

