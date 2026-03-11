"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Difficulty = "facil" | "medio" | "dificil" | "expert";

type Question = {
  id: number;
  level: Difficulty;
  question: string;
  options: { text: string; correct: boolean }[];
};

const QUESTIONS: Question[] = [
  // As mesmas 40 perguntas da página de boas-vindas anterior
  // FÁCIL
  {
    id: 1,
    level: "facil",
    question: "Qual é o principal objetivo do QA em um time de produto?",
    options: [
      { text: "Achar o máximo de bugs possível", correct: false },
      { text: "Garantir que o software gere valor de negócio com qualidade", correct: true },
      { text: "Testar apenas a interface gráfica", correct: false },
      { text: "Re-escrever os requisitos do PO", correct: false },
    ],
  },
  {
    id: 2,
    level: "facil",
    question: "Qual destes é um tipo de teste funcional?",
    options: [
      { text: "Teste de carga", correct: false },
      { text: "Teste de usabilidade", correct: false },
      { text: "Teste de regressão", correct: true },
      { text: "Teste de segurança", correct: false },
    ],
  },
  {
    id: 3,
    level: "facil",
    question: "O que é um caso de teste?",
    options: [
      { text: "Uma lista de bugs encontrados", correct: false },
      { text: "Um conjunto de passos e resultados esperados para validar algo", correct: true },
      { text: "Uma ferramenta de automação", correct: false },
      { text: "Um tipo de teste não funcional", correct: false },
    ],
  },
  {
    id: 4,
    level: "facil",
    question: "Quando falamos em teste exploratório, estamos falando de:",
    options: [
      { text: "Testes 100% automatizados", correct: false },
      { text: "Explorar o sistema de forma estruturada, usando charters e objetivos", correct: true },
      { text: "Testar sem nenhum objetivo definido", correct: false },
      { text: "Somente testes de performance", correct: false },
    ],
  },
  {
    id: 5,
    level: "facil",
    question: "Qual ferramenta abaixo é muito usada para testes de API?",
    options: [
      { text: "Photoshop", correct: false },
      { text: "Postman", correct: true },
      { text: "Excel", correct: false },
      { text: "Figma", correct: false },
    ],
  },
  {
    id: 6,
    level: "facil",
    question: "O que significa a sigla QA?",
    options: [
      { text: "Quality Assurance", correct: true },
      { text: "Quick Automation", correct: false },
      { text: "Quality Application", correct: false },
      { text: "Question & Answer", correct: false },
    ],
  },
  {
    id: 7,
    level: "facil",
    question: "Qual tipo de teste é mais indicado logo após uma nova build ser liberada?",
    options: [
      { text: "Teste de smoke", correct: true },
      { text: "Teste de stress", correct: false },
      { text: "Teste de usabilidade", correct: false },
      { text: "Teste de segurança", correct: false },
    ],
  },
  {
    id: 8,
    level: "facil",
    question: "Qual alternativa melhor descreve “defeito” em testes?",
    options: [
      { text: "Qualquer melhoria sugerida pelo usuário", correct: false },
      { text: "Diferença entre o comportamento esperado e o comportamento real", correct: true },
      { text: "Uma nova funcionalidade", correct: false },
      { text: "Um log de execução", correct: false },
    ],
  },
  {
    id: 9,
    level: "facil",
    question: "Qual documento ajuda a explicar como e o que será testado?",
    options: [
      { text: "Plano de testes", correct: true },
      { text: "Release notes", correct: false },
      { text: "Wireframe", correct: false },
      { text: "Diagrama de rede", correct: false },
    ],
  },
  {
    id: 10,
    level: "facil",
    question: "Em um squad ágil, o QA deve:",
    options: [
      { text: "Participar desde a descoberta até a entrega", correct: true },
      { text: "Aparecer apenas no fim do desenvolvimento", correct: false },
      { text: "Cuidar apenas da automação", correct: false },
      { text: "Aprovar o design da interface", correct: false },
    ],
  },

  // MÉDIO
  {
    id: 11,
    level: "medio",
    question: "Qual técnica de projeto de teste trabalha com faixas de valores válidos e inválidos?",
    options: [
      { text: "Técnica de tabela de decisão", correct: false },
      { text: "Classes de equivalência", correct: true },
      { text: "Teste exploratório", correct: false },
      { text: "Teste baseado em sessão", correct: false },
    ],
  },
  {
    id: 12,
    level: "medio",
    question: "Em BDD, os cenários são geralmente escritos no formato:",
    options: [
      { text: "If / Else", correct: false },
      { text: "Given / When / Then", correct: true },
      { text: "Arrange / Act / Assert", correct: false },
      { text: "AAA / BBB / CCC", correct: false },
    ],
  },
  {
    id: 13,
    level: "medio",
    question: "Qual métrica abaixo ajuda a entender a saúde do processo de testes?",
    options: [
      { text: "Taxa de conversão de vendas", correct: false },
      { text: "Densidade de defeitos por módulo", correct: true },
      { text: "Número de commits por dia", correct: false },
      { text: "Quantidade de reuniões por sprint", correct: false },
    ],
  },
  {
    id: 14,
    level: "medio",
    question:
      "Você precisa priorizar o que testar primeiro em uma release crítica. Qual abordagem faz mais sentido?",
    options: [
      { text: "Testar apenas o que é novo", correct: false },
      { text: "Testar fluxos de maior impacto de negócio e maior risco", correct: true },
      { text: "Testar apenas o front-end", correct: false },
      { text: "Testar somente APIs internas", correct: false },
    ],
  },
  {
    id: 15,
    level: "medio",
    question: "Qual o foco principal de um teste de regressão bem estruturado?",
    options: [
      { text: "Validar apenas novas funcionalidades", correct: false },
      { text: "Garantir que mudanças não quebraram comportamentos já existentes", correct: true },
      { text: "Validar desempenho sob alta carga", correct: false },
      { text: "Simular ações aleatórias do usuário", correct: false },
    ],
  },
  {
    id: 16,
    level: "medio",
    question:
      "Ao analisar um bug report, o desenvolvedor reclama que os passos estão confusos. O que o QA deve fazer?",
    options: [
      { text: "Reclamar com o PO", correct: false },
      { text: "Refinar o bug, deixando passos claros, dados usados e resultado esperado", correct: true },
      { text: "Apenas fechar o bug", correct: false },
      { text: "Criar um novo bug sem detalhes", correct: false },
    ],
  },
  {
    id: 17,
    level: "medio",
    question: "Qual o benefício de automatizar testes de regressão em um fluxo de e-commerce?",
    options: [
      { text: "Reduzir a necessidade de ambiente", correct: false },
      {
        text: "Garantir feedback rápido quando algo quebra em login, carrinho ou pagamento",
        correct: true,
      },
      { text: "Evitar que analistas façam testes manuais", correct: false },
      { text: "Substituir completamente a exploração", correct: false },
    ],
  },
  {
    id: 18,
    level: "medio",
    question: "O que uma boa suíte de smoke deve cobrir?",
    options: [
      { text: "Todos os detalhes visuais da aplicação", correct: false },
      {
        text: "Principais funcionalidades que mostram se a build está estável o suficiente para testes mais profundos",
        correct: true,
      },
      { text: "Apenas endpoints não documentados", correct: false },
      { text: "Somente testes de performance", correct: false },
    ],
  },
  {
    id: 19,
    level: "medio",
    question: "Em testes de API, qual boa prática ajuda a manter as collections organizadas?",
    options: [
      { text: "Misturar todos os ambientes em um único arquivo", correct: false },
      { text: "Usar environments separados por ambiente (dev, hml, prod)", correct: true },
      { text: "Nunca usar variáveis", correct: false },
      { text: "Criar apenas um request por collection", correct: false },
    ],
  },
  {
    id: 20,
    level: "medio",
    question: "No contexto de agilidade, o QA deve:",
    options: [
      { text: "Ser guardião da qualidade sozinho", correct: false },
      { text: "Compartilhar responsabilidade de qualidade com todo o time", correct: true },
      { text: "Aprovar deploys sozinho", correct: false },
      { text: "Ficar responsável apenas por testes manuais", correct: false },
    ],
  },

  // DIFÍCIL
  {
    id: 21,
    level: "dificil",
    question:
      "Você está testando um gateway de pagamento. Qual combinação de testes traz melhor cobertura de risco?",
    options: [
      {
        text: "Apenas um pagamento com cartão válido",
        correct: false,
      },
      {
        text: "Pagamentos aprovados, recusados, tempo de resposta alto e falha de comunicação com adquirente",
        correct: true,
      },
      {
        text: "Somente testes de layout da tela de pagamento",
        correct: false,
      },
      {
        text: "Testar apenas o fluxo feliz com PIX",
        correct: false,
      },
    ],
  },
  {
    id: 22,
    level: "dificil",
    question:
      "Ao aplicar Particionamento em Classes de Equivalência em um campo de idade (0 a 120), qual das opções representa melhor a ideia?",
    options: [
      { text: "Testar apenas 18 anos", correct: false },
      {
        text: "Criar faixas de valores válidos e inválidos e escolher representantes de cada faixa",
        correct: true,
      },
      { text: "Testar todos os números possíveis", correct: false },
      { text: "Testar apenas 0, 1 e 120", correct: false },
    ],
  },
  {
    id: 23,
    level: "dificil",
    question:
      "Você detecta um defeito grave perto do fim da sprint. O produto já está quase pronto para release. O que é mais adequado?",
    options: [
      {
        text: "Esconder o problema para não atrasar o calendário",
        correct: false,
      },
      {
        text: "Comunicar claramente impacto e risco, apoiando o time na tomada de decisão (adiar, mitigar ou aceitar)",
        correct: true,
      },
      { text: "Fechar o bug como 'não reproduzido'", correct: false },
      { text: "Fazer o deploy sem avisar ninguém", correct: false },
    ],
  },
  {
    id: 24,
    level: "dificil",
    question:
      "Em testes de performance com k6, qual métrica é geralmente mais útil para entender a experiência do usuário final?",
    options: [
      { text: "Uso de CPU do servidor", correct: false },
      { text: "Tempo de resposta (latência) e percentis como p95", correct: true },
      { text: "Número total de requisições por dia", correct: false },
      { text: "Quantidade de QAs no time", correct: false },
    ],
  },
  {
    id: 25,
    level: "dificil",
    question:
      "Ao desenhar cenários BDD para um fluxo complexo, qual prática ajuda a manter os cenários úteis e legíveis?",
    options: [
      { text: "Colocar múltiplos resultados esperados em um único cenário gigante", correct: false },
      { text: "Manter cenários focados em um objetivo claro e linguagem próxima do negócio", correct: true },
      { text: "Usar termos técnicos demais", correct: false },
      { text: "Duplicar cenários para diferentes perfis sem necessidade", correct: false },
    ],
  },
  {
    id: 26,
    level: "dificil",
    question:
      "Você está montando uma matriz de risco. Qual combinação abaixo faz mais sentido considerar?",
    options: [
      { text: "Complexidade do código e tamanho da equipe", correct: false },
      { text: "Probabilidade de falha e impacto no negócio", correct: true },
      { text: "Número de commits e número de QAs", correct: false },
      { text: "Quantidade de logs e quantidade de testes automatizados", correct: false },
    ],
  },
  {
    id: 27,
    level: "dificil",
    question:
      "Em um bug intermitente em produção, qual estratégia de investigação é mais efetiva?",
    options: [
      { text: "Apenas rodar o mesmo teste repetidamente em homologação", correct: false },
      {
        text: "Coletar logs, métricas, contexto de uso e tentar reproduzir em condições similares",
        correct: true,
      },
      { text: "Fechar o bug por falta de evidências", correct: false },
      { text: "Aumentar a cobertura de testes sem olhar logs", correct: false },
    ],
  },
  {
    id: 28,
    level: "dificil",
    question:
      "No contexto de automação com Cypress, o que ajuda a tornar a suíte mais estável e confiável?",
    options: [
      { text: "Usar apenas seletores baseados em texto visível", correct: false },
      {
        text: "Usar seletores estáveis (data-testid), evitar dependência excessiva de tempo fixo e limpar estado entre testes",
        correct: true,
      },
      { text: "Executar todos os testes em série e bem lentos", correct: false },
      { text: "Ignorar falhas intermitentes", correct: false },
    ],
  },
  {
    id: 29,
    level: "dificil",
    question:
      "Em uma retrospectiva de squad, qual contribuição de QA é mais valiosa?",
    options: [
      { text: "Apontar culpados pelos bugs", correct: false },
      {
        text: "Trazer dados (métricas, exemplos reais) e propor melhorias concretas no fluxo de trabalho",
        correct: true,
      },
      { text: "Reclamar apenas de prazos curtos", correct: false },
      { text: "Discutir apenas automação", correct: false },
    ],
  },
  {
    id: 30,
    level: "dificil",
    question:
      "Ao testar um cenário de e-commerce omnichannel, o que merece atenção especial?",
    options: [
      { text: "Somente o layout do site desktop", correct: false },
      {
        text: "Coerência entre canais (web, mobile, PDV), integrações e consistência de estoque/pedidos",
        correct: true,
      },
      { text: "Apenas a performance do banco de dados", correct: false },
      { text: "Apenas testes unitários", correct: false },
    ],
  },

  // EXPERT
  {
    id: 31,
    level: "expert",
    question:
      "Você precisa defender investimento em qualidade para diretoria. Que abordagem tende a ser mais efetiva?",
    options: [
      { text: "Falar apenas de ferramentas e automação", correct: false },
      {
        text: "Conectar métricas de defeito, retrabalho e incidentes com impacto financeiro e experiência do usuário",
        correct: true,
      },
      { text: "Apresentar apenas exemplos técnicos", correct: false },
      { text: "Pedir mais QAs sem nenhum dado", correct: false },
    ],
  },
  {
    id: 32,
    level: "expert",
    question:
      "Como QA líder, você quer elevar a maturidade de qualidade no produto. Qual combinação abaixo é mais poderosa?",
    options: [
      { text: "Apenas aumentar a cobertura de testes automatizados", correct: false },
      {
        text: "Definir visão de qualidade, métricas, práticas de colaboração e apoiar o time em decisões baseadas em risco",
        correct: true,
      },
      { text: "Centralizar todas as decisões de teste em uma única pessoa", correct: false },
      { text: "Criar mais burocracia sem clareza de valor", correct: false },
    ],
  },
  {
    id: 33,
    level: "expert",
    question:
      "Você está usando IA para apoiar o design de testes. Qual é a postura mais saudável?",
    options: [
      {
        text: "Aceitar tudo o que a IA sugere e automatizar direto",
        correct: false,
      },
      {
        text: "Usar IA como apoio inicial, revisar criticamente, complementar com contexto de negócio e registrar decisões",
        correct: true,
      },
      { text: "Substituir completamente o raciocínio analítico de QA", correct: false },
      { text: "Usar IA apenas para escrever código", correct: false },
    ],
  },
  {
    id: 34,
    level: "expert",
    question:
      "Em um cenário de grande volume de transações, qual estratégia de qualidade traz melhor resultado a longo prazo?",
    options: [
      { text: "Testar tudo manualmente em todas as releases", correct: false },
      {
        text: "Combinar automação em camadas, observabilidade, testes de performance contínuos e feedbacks rápidos",
        correct: true,
      },
      { text: "Apenas aumentar a quantidade de QAs", correct: false },
      { text: "Testar apenas quando o cliente reportar problemas", correct: false },
    ],
  },
  {
    id: 35,
    level: "expert",
    question:
      "Você percebe que o time está usando automação como 'muleta' para não pensar em risco. Qual atitude faz sentido?",
    options: [
      {
        text: "Aumentar ainda mais a quantidade de testes automatizados",
        correct: false,
      },
      {
        text: "Refocar discussões em risco, impacto, jornada do usuário e propósito de cada suíte de testes",
        correct: true,
      },
      { text: "Desligar toda a automação", correct: false },
      { text: "Ignorar o problema", correct: false },
    ],
  },
  {
    id: 36,
    level: "expert",
    question:
      "Um bug crítico escapou para produção, mesmo com boa cobertura de testes. O que uma postura madura de QA prevê?",
    options: [
      { text: "Procurar um culpado específico", correct: false },
      {
        text: "Investigar causas raiz, ajustar testes/processos e compartilhar aprendizados com o time",
        correct: true,
      },
      { text: "Apenas aumentar o número de casos de teste aleatoriamente", correct: false },
      { text: "Ignorar o bug se o cliente não reclamou muito", correct: false },
    ],
  },
  {
    id: 37,
    level: "expert",
    question:
      "Ao participar da descoberta de um novo produto, como o QA pode agregar mais valor?",
    options: [
      { text: "Apenas ouvindo em silêncio", correct: false },
      {
        text: "Trazendo perguntas sobre riscos, fluxos críticos, regras de negócio e cenários extremos desde o início",
        correct: true,
      },
      { text: "Focando só na escolha de ferramentas", correct: false },
      { text: "Falando apenas de automação de interface", correct: false },
    ],
  },
  {
    id: 38,
    level: "expert",
    question:
      "Você quer medir a efetividade dos testes em produção. Qual indicador é mais alinhado a isso?",
    options: [
      { text: "Quantidade de commits por sprint", correct: false },
      { text: "Taxa de defeitos encontrados em produção vs. homologação", correct: true },
      { text: "Número de reuniões por semana", correct: false },
      { text: "Quantidade de QAs certificados", correct: false },
    ],
  },
  {
    id: 39,
    level: "expert",
    question:
      "Ao falar com pessoas não técnicas (diretoria, área de negócio), qual linguagem o QA deve priorizar?",
    options: [
      { text: "Termos altamente técnicos e jargões internos", correct: false },
      {
        text: "Impacto em receita, risco de imagem, experiência do usuário e continuidade do serviço",
        correct: true,
      },
      { text: "Detalhes de implementação de código", correct: false },
      { text: "Logs e stack traces brutos", correct: false },
    ],
  },
  {
    id: 40,
    level: "expert",
    question:
      "Você lidera uma comunidade interna de QA. Qual foco tende a gerar mais resultado sustentado?",
    options: [
      { text: "Apresentar apenas ferramentas novas todo mês", correct: false },
      {
        text: "Compartilhar casos reais, boas práticas, falhas aprendidas e criar espaço seguro para discussão",
        correct: true,
      },
      { text: "Falar apenas de certificações", correct: false },
      { text: "Criar reuniões longas sem objetivo claro", correct: false },
    ],
  },
];

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function QuizPage() {
  const [playerName, setPlayerName] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  const questionsForLevel = useMemo(() => {
    if (!difficulty) return [];
    const filtered = QUESTIONS.filter((q) => q.level === difficulty);
    const shuffled = shuffleArray(filtered);
    return shuffled.slice(0, 10);
  }, [difficulty]);

  const currentQuestion = questionsForLevel[currentIndex];

  const shuffledOptions = useMemo(() => {
    if (!currentQuestion) return [];
    return shuffleArray(currentQuestion.options);
  }, [currentQuestion]);

  const totalQuestions = questionsForLevel.length;

  useEffect(() => {
    if (!started || showResult || !currentQuestion || selectedOptionIndex !== null) {
      return;
    }

    setTimeLeft(10);
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // tempo acabou sem resposta, conta como erro e avança
          setSelectedOptionIndex(-1);
          setTimeout(() => {
            if (currentIndex + 1 < totalQuestions) {
              setCurrentIndex((prevIndex) => prevIndex + 1);
              setSelectedOptionIndex(null);
            } else {
              setShowResult(true);
            }
          }, 600);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [started, showResult, currentQuestion, currentIndex, totalQuestions, selectedOptionIndex]);

  const handleStart = () => {
    if (!playerName.trim() || !difficulty) return;
    setStarted(true);
    setCurrentIndex(0);
    setScore(0);
    setSelectedOptionIndex(null);
    setShowResult(false);
    setTimeLeft(10);
  };

  const handleAnswer = (optionIndex: number) => {
    if (!currentQuestion || selectedOptionIndex !== null || timeLeft <= 0) return;
    setSelectedOptionIndex(optionIndex);
    const option = shuffledOptions[optionIndex];
    if (option.correct) {
      setScore((prev) => prev + 1);
    }
    setTimeout(() => {
      if (currentIndex + 1 < totalQuestions) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOptionIndex(null);
        setTimeLeft(10);
      } else {
        setShowResult(true);
      }
    }, 850);
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentIndex(0);
    setScore(0);
    setSelectedOptionIndex(null);
    setShowResult(false);
    setDifficulty(null);
    setTimeLeft(10);
  };

  const getResultMessage = () => {
    if (!playerName) return "";
    const percentage = totalQuestions ? Math.round((score / totalQuestions) * 100) : 0;

    if (percentage === 100) {
      return `${playerName}, você zerou o QA Quiz! Se isso fosse uma release, eu assinaria junto o deploy.`;
    }
    if (percentage >= 80) {
      return `${playerName}, belo resultado! Dá para ver que você leva qualidade a sério.`;
    }
    if (percentage >= 50) {
      return `${playerName}, mandou bem! Já dá para conversar de igual pra igual em muita daily.`;
    }
    if (percentage >= 30) {
      return `${playerName}, foi um bom aquecimento. Bora revisar alguns conceitos e tentar de novo?`;
    }
    return `${playerName}, a boa notícia é: ninguém nasce QA sênior. Que tal transformar esse resultado em plano de estudo?`;
  };

  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <header className="border-b border-zinc-800 bg-gradient-to-r from-zinc-950 via-black to-zinc-950">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-sm">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              QA Quiz · Ewerton Alexander
            </p>
            <p className="text-xs text-zinc-400">
              Um mini playground de qualidade para aquecer antes do portfólio.
            </p>
          </div>
          <Link
            href="/welcome"
            className="hidden rounded-full border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-100 transition hover:border-emerald-400 hover:text-emerald-300 sm:inline-flex"
          >
            Voltar para boas-vindas
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Bem-vindo ao jogo
            </p>
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Teste seu mindset de qualidade.
            </h1>
          </div>
          <Link
            href="/welcome"
            className="inline-flex rounded-full border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-100 transition hover:border-emerald-400 hover:text-emerald-300 sm:hidden"
          >
            Voltar para boas-vindas
          </Link>
        </div>

        {!started || showResult ? (
          <div className="mx-auto max-w-xl space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-lg shadow-emerald-500/10">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Seu nome
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-zinc-700 bg-black/60 px-3 py-2 text-sm text-zinc-100 outline-none ring-emerald-500/30 focus:border-emerald-400 focus:ring-2"
                placeholder="Como posso te chamar?"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
              />
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Nível do quiz
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setDifficulty("facil")}
                  className={`rounded-xl border px-3 py-3 text-left text-xs transition ${
                    difficulty === "facil"
                      ? "border-emerald-400 bg-emerald-500/10 text-emerald-100"
                      : "border-zinc-700 bg-zinc-900/60 hover:border-emerald-400/70 hover:text-emerald-200"
                  }`}
                >
                  <p className="font-semibold">Fácil</p>
                  <p className="mt-1 text-[11px] text-zinc-300">
                    Conceitos básicos de QA, perfeito para aquecimento.
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setDifficulty("medio")}
                  className={`rounded-xl border px-3 py-3 text-left text-xs transition ${
                    difficulty === "medio"
                      ? "border-emerald-400 bg-emerald-500/10 text-emerald-100"
                      : "border-zinc-700 bg-zinc-900/60 hover:border-emerald-400/70 hover:text-emerald-200"
                  }`}
                >
                  <p className="font-semibold">Médio</p>
                  <p className="mt-1 text-[11px] text-zinc-300">
                    Conceitos práticos de squads e projetos reais.
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setDifficulty("dificil")}
                  className={`rounded-xl border px-3 py-3 text-left text-xs transition ${
                    difficulty === "dificil"
                      ? "border-emerald-400 bg-emerald-500/10 text-emerald-100"
                      : "border-zinc-700 bg-zinc-900/60 hover:border-emerald-400/70 hover:text-emerald-200"
                  }`}
                >
                  <p className="font-semibold">Difícil</p>
                  <p className="mt-1 text-[11px] text-zinc-300">
                    Situações de risco, decisão e cenários mais complexos.
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setDifficulty("expert")}
                  className={`rounded-xl border px-3 py-3 text-left text-xs transition ${
                    difficulty === "expert"
                      ? "border-emerald-400 bg-emerald-500/10 text-emerald-100"
                      : "border-zinc-700 bg-zinc-900/60 hover:border-emerald-400/70 hover:text-emerald-200"
                  }`}
                >
                  <p className="font-semibold">Expert</p>
                  <p className="mt-1 text-[11px] text-zinc-300">
                    Mindset de liderança, estratégia e qualidade em escala.
                  </p>
                </button>
              </div>
            </div>

            {showResult && (
              <div className="space-y-3 rounded-xl border border-emerald-500/40 bg-emerald-500/5 p-4 text-xs text-emerald-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Resultado
                </p>
                <p>
                  Você acertou{" "}
                  <span className="font-semibold">
                    {score} de {totalQuestions}
                  </span>{" "}
                  perguntas.
                </p>
                <p className="text-[13px]">{getResultMessage()}</p>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <button
                type="button"
                onClick={handleStart}
                disabled={!playerName.trim() || !difficulty}
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-black shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400 disabled:shadow-none"
              >
                {showResult ? "Jogar novamente" : "Começar o quiz"}
              </button>
              {showResult && (
                <button
                  type="button"
                  onClick={handleRestart}
                  className="text-xs text-zinc-400 underline-offset-2 hover:text-emerald-300 hover:underline"
                >
                  Trocar nome ou nível
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl space-y-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-lg shadow-emerald-500/10">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <p>
                Jogador: <span className="font-semibold text-zinc-100">{playerName}</span>
              </p>
              <div className="flex items-center gap-4">
                <p>
                  Pergunta{" "}
                  <span className="font-semibold text-emerald-300">
                    {currentIndex + 1}/{totalQuestions}
                  </span>
                </p>
                <p>
                  Tempo:{" "}
                  <span
                    className={`font-semibold ${
                      timeLeft <= 3 ? "text-rose-400" : "text-emerald-300"
                    }`}
                  >
                    {timeLeft}s
                  </span>
                </p>
              </div>
            </div>

            {currentQuestion && (
              <>
                <p className="text-sm font-medium text-zinc-50">{currentQuestion.question}</p>
                <div className="space-y-3 pt-2">
                  {shuffledOptions.map((option, index) => {
                    const isSelected = selectedOptionIndex === index;
                    const isCorrect = option.correct;
                    let classes =
                      "w-full rounded-xl border px-3 py-2.5 text-left text-sm transition";

                    if (selectedOptionIndex !== null) {
                      if (isSelected && isCorrect) {
                        classes +=
                          " border-emerald-400 bg-emerald-500/15 text-emerald-100";
                      } else if (isSelected && !isCorrect) {
                        classes += " border-rose-500/80 bg-rose-500/10 text-rose-100";
                      } else if (isCorrect) {
                        classes +=
                          " border-emerald-500/60 bg-emerald-500/5 text-emerald-100/90";
                      } else {
                        classes += " border-zinc-700 bg-zinc-900/60 text-zinc-300";
                      }
                    } else {
                      classes +=
                        " border-zinc-700 bg-zinc-900/60 text-zinc-200 hover:border-emerald-400 hover:text-emerald-200";
                    }

                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleAnswer(index)}
                        className={classes}
                      >
                        {option.text}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-3 text-xs text-zinc-400">
                  <p>
                    Pontuação:{" "}
                    <span className="font-semibold text-emerald-300">
                      {score} / {totalQuestions}
                    </span>
                  </p>
                  <button
                    type="button"
                    onClick={handleRestart}
                    className="text-[11px] text-zinc-400 underline-offset-2 hover:text-emerald-300 hover:underline"
                  >
                    Reiniciar quiz
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

