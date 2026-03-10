"use client";

import { useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  hero: string;
  price: number;
  tag: string;
  color: string;
};

type CartItem = {
  product: Product;
  quantity: number;
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Escudo do Capitão",
    hero: "Capitão América",
    price: 79.9,
    tag: "Defesa",
    color: "from-sky-500 to-blue-700",
  },
  {
    id: 2,
    name: "Martelo Mjolnir",
    hero: "Thor",
    price: 99.9,
    tag: "Poder",
    color: "from-slate-400 to-slate-700",
  },
  {
    id: 3,
    name: "Máscara Tática",
    hero: "Homem-Aranha",
    price: 69.9,
    tag: "Agilidade",
    color: "from-red-500 to-rose-700",
  },
  {
    id: 4,
    name: "Cinto de Utilidades",
    hero: "Batman",
    price: 89.9,
    tag: "Estratégia",
    color: "from-amber-400 to-yellow-700",
  },
];

export default function DemoStore() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [step, setStep] = useState<"shop" | "checkout" | "success">("shop");

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardError, setCardError] = useState("");

  const total = useMemo(
    () =>
      cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
    [cart]
  );

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // credenciais simples para testes
    if (email === "qa@demo.com" && password === "quality123") {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError(
        "Credenciais inválidas. Use qa@demo.com / quality123 para login de teste."
      );
    }
  }

  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }

  function updateQuantity(id: number, quantity: number) {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.product.id !== id));
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === id ? { ...item, quantity } : item
      )
    );
  }

  function handleCheckout(e: React.FormEvent) {
    e.preventDefault();
    if (!cardName || !cardNumber || !cardCvv) {
      setCardError("Preencha todos os campos do pagamento para continuar.");
      return;
    }
    if (cardNumber.replace(/\s/g, "").length < 12) {
      setCardError("Número de cartão inválido para este cenário de teste.");
      return;
    }
    setCardError("");
    setStep("success");
  }

  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-black">
        <div className="mx-auto max-w-5xl px-6 py-10 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
            Loja de Brinquedos de Heróis · Demo
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Hero Toys,
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              e-commerce de treino para QA.
            </span>
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Esta é uma loja fictícia de brinquedos de heróis, criada para você
            testar, na prática, um{" "}
            <span className="font-medium text-emerald-300">
              cenário completo de sucesso
            </span>{" "}
            (login → produtos → carrinho → pagamento → confirmação) e vários
            <span className="font-medium text-emerald-300">
              {" "}
              cenários de erro
            </span>{" "}
            comuns em e-commerce.
          </p>
          <div className="grid gap-3 text-xs text-zinc-300 md:grid-cols-[1.4fr,1.6fr]">
            <div className="space-y-1 rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-3">
              <p className="font-semibold text-emerald-300">
                Cenário de sucesso (happy path)
              </p>
              <p>
                1. Login com{" "}
                <span className="font-mono text-emerald-200">
                  qa@demo.com / quality123
                </span>
              </p>
              <p>2. Adicionar 1 ou mais brinquedos ao carrinho.</p>
              <p>3. Preencher todos os campos de pagamento com dados válidos.</p>
              <p>4. Confirmar o pedido e validar a tela de sucesso.</p>
            </div>
            <div className="space-y-1 rounded-2xl border border-red-500/40 bg-red-500/5 p-3">
              <p className="font-semibold text-red-300">
                Exemplos de cenários de erro
              </p>
              <p>- Login com e-mail inválido ou senha incorreta.</p>
              <p>- Tentar logar com e-mail vazio ou senha vazia.</p>
              <p>- Ir para pagamento com carrinho vazio (botão desabilitado).</p>
              <p>- Deixar campos de cartão em branco ou número de cartão curto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Login */}
      {!isLoggedIn && (
        <section className="border-b border-zinc-800 bg-black">
          <div className="mx-auto max-w-5xl px-6 py-10 grid gap-8 md:grid-cols-[1.3fr,1.7fr]">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight">
                Acesso à área do comprador
              </h2>
              <p className="text-sm text-zinc-300">
                Use o login de teste para explorar o fluxo completo. Credenciais
                incorretas retornam mensagem de erro clara, ideal para casos de
                teste negativos.
              </p>
            </div>

            <form
              onSubmit={handleLogin}
              className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
            >
              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-200">
                  E-mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-zinc-100 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring-2"
                  placeholder="qa@demo.com"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-200">
                  Senha
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-zinc-100 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring-2"
                  placeholder="quality123"
                />
              </div>
              {loginError && (
                <p className="text-xs text-red-400">{loginError}</p>
              )}
              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400"
              >
                Entrar e ver produtos
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Loja / Carrinho / Checkout */}
      {isLoggedIn && (
        <section className="bg-gradient-to-b from-black to-zinc-950">
          <div className="mx-auto max-w-5xl px-6 py-10 space-y-8">
            {/* Etapas */}
            <div className="flex items-center gap-3 text-[11px] text-zinc-400">
              <span
                className={`rounded-full px-3 py-1 ${
                  step === "shop"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50"
                    : "border border-zinc-700"
                }`}
              >
                1. Produtos
              </span>
              <span
                className={`rounded-full px-3 py-1 ${
                  step === "checkout"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50"
                    : "border border-zinc-700"
                }`}
              >
                2. Pagamento
              </span>
              <span
                className={`rounded-full px-3 py-1 ${
                  step === "success"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50"
                    : "border border-zinc-700"
                }`}
              >
                3. Confirmação
              </span>
            </div>

            {step === "shop" && (
              <div className="grid gap-8 md:grid-cols-[2fr,1.3fr]">
                {/* Lista de produtos */}
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
                    Brinquedos de heróis
                  </h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {PRODUCTS.map((product) => (
                      <div
                        key={product.id}
                        className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/70 p-3"
                      >
                        <div className="space-y-2">
                          <div
                            className={`mb-2 h-24 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-xs font-semibold text-white`}
                          >
                            {product.hero}
                          </div>
                          <p className="text-sm font-semibold text-zinc-50">
                            {product.name}
                          </p>
                          <p className="text-[11px] text-zinc-400">
                            Brinquedo inspirado em {product.hero}. Tag de
                            personalidade:{" "}
                            <span className="font-medium text-emerald-300">
                              {product.tag}
                            </span>
                            .
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-xs">
                          <span className="font-semibold text-emerald-300">
                            R$ {product.price.toFixed(2)}
                          </span>
                          <button
                            type="button"
                            onClick={() => addToCart(product)}
                            className="rounded-full border border-emerald-500/60 px-3 py-1 text-[11px] font-medium text-emerald-200 transition hover:bg-emerald-500 hover:text-black"
                          >
                            Adicionar ao carrinho
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carrinho */}
                <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-zinc-50">
                      Carrinho de compras
                    </p>
                    <span className="text-[11px] text-zinc-400">
                      {cart.length} itens únicos
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-zinc-300">
                    {cart.length === 0 && (
                      <p className="text-zinc-500">
                        Nenhum item adicionado ainda. Escolha um brinquedo de
                        herói para começar.
                      </p>
                    )}
                    {cart.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center justify-between rounded-lg border border-zinc-800 bg-black/40 px-3 py-2"
                      >
                        <div>
                          <p className="text-[11px] font-semibold text-zinc-50">
                            {item.product.name}
                          </p>
                          <p className="text-[11px] text-zinc-400">
                            R$ {item.product.price.toFixed(2)} x{" "}
                            {item.quantity}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1
                              )
                            }
                            className="h-6 w-6 rounded-full border border-zinc-700 text-[11px] text-zinc-300 hover:border-zinc-400"
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-[11px]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1
                              )
                            }
                            className="h-6 w-6 rounded-full border border-emerald-500/60 text-[11px] text-emerald-300 hover:bg-emerald-500 hover:text-black"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-zinc-800 pt-3 text-xs">
                    <span className="text-zinc-400">Total estimado</span>
                    <span className="text-sm font-semibold text-emerald-300">
                      R$ {total.toFixed(2)}
                    </span>
                  </div>
                  <button
                    type="button"
                    disabled={cart.length === 0}
                    onClick={() => setStep("checkout")}
                    className="mt-2 w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400 disabled:shadow-none"
                  >
                    Ir para pagamento
                  </button>
                </div>
              </div>
            )}

            {step === "checkout" && (
              <div className="grid gap-8 md:grid-cols-[2fr,1.3fr]">
                <form
                  onSubmit={handleCheckout}
                  className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 text-sm text-zinc-300"
                >
                  <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
                    Pagamento simulado
                  </h2>
                  <p className="text-xs text-zinc-400">
                    Nenhuma cobrança real é feita. Use este formulário para
                    testar validações de campos obrigatórios e mensagens de
                    erro.
                  </p>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-zinc-200">
                      Nome impresso no cartão
                    </label>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-zinc-100 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring-2"
                      placeholder="Nome do herói comprador"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-zinc-200">
                      Número do cartão
                    </label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-zinc-100 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring-2"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-zinc-200">
                      CVV
                    </label>
                    <input
                      type="password"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      className="w-24 rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-zinc-100 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring-2"
                      placeholder="123"
                    />
                  </div>
                  {cardError && (
                    <p className="text-xs text-red-400">{cardError}</p>
                  )}
                  <button
                    type="submit"
                    className="mt-1 w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400"
                  >
                    Finalizar pedido de teste
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep("shop")}
                    className="mt-2 w-full rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 hover:border-zinc-500"
                  >
                    Voltar para carrinho
                  </button>
                </form>

                <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 text-xs text-zinc-300">
                  <p className="text-sm font-semibold text-zinc-50">
                    Resumo do pedido
                  </p>
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center justify-between border-b border-zinc-800 py-2"
                    >
                      <div>
                        <p className="font-medium text-zinc-100">
                          {item.product.name}
                        </p>
                        <p className="text-[11px] text-zinc-400">
                          {item.quantity} x R$ {item.product.price.toFixed(2)}
                        </p>
                      </div>
                      <span className="text-[11px] text-emerald-300">
                        R${" "}
                        {(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-2 text-xs">
                    <span className="text-zinc-400">Total</span>
                    <span className="text-sm font-semibold text-emerald-300">
                      R$ {total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {step === "success" && (
              <div className="space-y-4 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-sm text-zinc-100">
                <h2 className="text-lg font-semibold">
                  Pedido de teste confirmado! 🦸‍♂️
                </h2>
                <p className="text-xs text-emerald-100">
                  Nenhuma cobrança real foi efetuada. Use esta tela para testar
                  cenários de confirmação de compra, mensagens de sucesso e
                  verificação de dados exibidos ao usuário.
                </p>
                <div className="space-y-1 text-xs text-emerald-100/90">
                  <p>Número do pedido (simulado): HT-{Math.floor(total * 100)}</p>
                  <p>Quantidade de itens: {cart.length}</p>
                  <p>Total: R$ {total.toFixed(2)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setStep("shop");
                    setCart([]);
                  }}
                  className="mt-2 rounded-lg border border-emerald-400 px-4 py-2 text-xs font-medium text-emerald-100 hover:bg-emerald-500 hover:text-black"
                >
                  Voltar para a loja e testar de novo
                </button>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

