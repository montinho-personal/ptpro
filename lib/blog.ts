export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export const BLOG_CATEGORIES = [
  "Todos",
  "Emagrecimento",
  "Hipertrofia",
  "Saúde",
  "Treinamento",
  "Lesões",
  "Hábitos",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "por-que-voce-nao-consegue-emagrecer",
    title: "Por Que Você Não Consegue Emagrecer (E Como Mudar Isso de Vez)",
    excerpt:
      "Você já tentou de tudo: dieta da moda, jejum, treinar todos os dias... e mesmo assim o peso não sai. Entenda o que realmente está te impedindo e como resolver.",
    category: "Emagrecimento",
    date: "2024-12-10",
    readTime: "8 min",
    author: "Montinho Personal Trainer",
    content: `
<h2>O problema não é falta de força de vontade</h2>
<p>Se você está lendo isso, provavelmente já tentou inúmeras dietas, treinos e promessas de resultado rápido. E se ainda não chegou onde quer, saiba: o problema não é você. É a abordagem.</p>

<p>Durante anos, eu mesmo vivi esse ciclo. Comecei a lutar contra a balança na infância, passei pela adolescência tentando cada dieta nova que aparecia, e entrei na vida adulta frustrando uma expectativa após a outra. O efeito sanfona foi meu companheiro por muito tempo — até eu entender o que estava errado.</p>

<h2>O ciclo vicioso das dietas restritivas</h2>
<p>A grande maioria das "soluções" para emagrecimento no mercado funciona assim: corta calorias drasticamente, você perde peso rápido (grande parte é água e músculo), seu metabolismo desacelera como resposta de sobrevivência, você sente fome absurda, quebra a dieta, recupera tudo — e mais um pouco.</p>

<p>Isso não é fraqueza. É biologia. Seu corpo está fazendo exatamente o que foi programado para fazer: sobreviver.</p>

<h2>O que realmente funciona</h2>
<p>Emagrecimento sustentável não vem de restrição extrema. Vem de:</p>
<ul>
  <li><strong>Déficit calórico moderado</strong> — não precisa passar fome</li>
  <li><strong>Proteína adequada</strong> — preserva a massa muscular durante o processo</li>
  <li><strong>Treino de força</strong> — aumenta o metabolismo de repouso</li>
  <li><strong>Consistência ao longo do tempo</strong> — não perfeição</li>
  <li><strong>Acompanhamento profissional</strong> — para ajustar o caminho conforme você evolui</li>
</ul>

<h2>Por que o acompanhamento faz diferença</h2>
<p>Quando você tenta fazer tudo sozinho, cada obstáculo vira um motivo para desistir. Com um profissional ao seu lado, cada obstáculo vira uma oportunidade de ajuste. É uma diferença fundamental.</p>

<p>Eu já estive do outro lado. Sei como é acordar de manhã, se olhar no espelho e não se reconhecer. Sei o peso emocional que isso carrega. Por isso o meu trabalho vai muito além dos exercícios — é sobre te ajudar a construir uma relação diferente com seu corpo e com sua saúde.</p>

<h2>O próximo passo</h2>
<p>Se você está cansado de tentar sozinho e quer uma abordagem que realmente funcione, entre em contato. Vamos conversar sobre seu histórico, seus objetivos e traçar juntos um plano que faz sentido para a sua vida.</p>
    `,
  },
  {
    slug: "erros-comuns-no-treino-de-musculacao",
    title: "7 Erros Comuns na Musculação Que Sabotam Seus Resultados",
    excerpt:
      "A maioria das pessoas passa meses na academia sem ver resultado por causa de erros simples que são fáceis de corrigir. Veja se você está cometendo algum deles.",
    category: "Treinamento",
    date: "2024-11-28",
    readTime: "7 min",
    author: "Montinho Personal Trainer",
    content: `
<h2>Treinar muito não é treinar bem</h2>
<p>Um dos maiores mitos no mundo fitness é que mais treino = mais resultado. Na prática, o que acontece é o oposto: treino demais sem recuperação adequada leva a estagnação, lesões e até perda de massa muscular.</p>

<h2>Os 7 erros mais comuns</h2>

<h3>1. Não ter progressão de carga</h3>
<p>Se você faz os mesmos exercícios com o mesmo peso há meses, seu corpo simplesmente não tem motivo para mudar. O princípio da sobrecarga progressiva é fundamental: você precisa desafiar seus músculos continuamente.</p>

<h3>2. Ignorar a técnica por ego</h3>
<p>Pegar peso demais com técnica ruim não constrói músculo — constrói lesão. Vi incontáveis pessoas se machucar por não aceitar começar com menos carga e aprender o movimento correto.</p>

<h3>3. Não descansar o suficiente</h3>
<p>O músculo cresce durante o descanso, não durante o treino. Dormir 7-9 horas por noite não é luxo — é parte fundamental do processo.</p>

<h3>4. Treinar sem planejamento</h3>
<p>Entrar na academia e fazer o que dá na cabeça não é método, é passatempo. Resultados vêm de programação inteligente e progressiva.</p>

<h3>5. Negligenciar a alimentação</h3>
<p>Você pode treinar perfeitamente e não ver resultado nenhum se a alimentação não estiver alinhada. Proteína insuficiente, calorias erradas — tudo isso impacta diretamente o que acontece (ou não acontece) com seu corpo.</p>

<h3>6. Pular o aquecimento</h3>
<p>O aquecimento não é perda de tempo. É prevenção de lesão e preparação do sistema nervoso para o esforço que vem a seguir. 5-10 minutos antes do treino fazem uma diferença enorme a longo prazo.</p>

<h3>7. Desistir cedo demais</h3>
<p>Resultados reais levam tempo. A maioria das pessoas desiste exatamente quando está prestes a ver a transformação acontecer. Consistência por meses — não semanas — é o que separa quem transforma o corpo de quem fica estagnado.</p>

<h2>Como corrigir seu treino</h2>
<p>Se você se identificou com algum desses erros, não se preocupe. Todos nós passamos por isso. O importante é corrigir o caminho — e para isso, ter um profissional acompanhando de perto faz toda a diferença.</p>
    `,
  },
  {
    slug: "como-prevenir-lesoes-no-treino",
    title: "Como Prevenir Lesões e Treinar Por Décadas Sem Dor",
    excerpt:
      "Lesões são o maior inimigo dos resultados a longo prazo. Aprenda as estratégias que uso com meus alunos para treinar com intensidade e sem se machucar.",
    category: "Lesões",
    date: "2024-11-15",
    readTime: "6 min",
    author: "Montinho Personal Trainer",
    content: `
<h2>A lesão que ninguém fala</h2>
<p>Existe a lesão aguda — aquela que acontece de repente com um estalo ou dor intensa. E existe a lesão crônica — aquela que vai se desenvolvendo silenciosamente por meses de má postura, sobrecarga errada e falta de mobilidade.</p>

<p>A segunda é muito mais comum e muito mais traiçoeira. Por isso falo tanto sobre prevenção com meus alunos.</p>

<h2>Os princípios da longevidade no treino</h2>

<h3>Mobilidade antes da força</h3>
<p>Não adianta querer levantar muito peso se você não tem mobilidade para executar o movimento com segurança. Investir em mobilidade não é fraqueza — é inteligência.</p>

<h3>Respeitar os sinais do corpo</h3>
<p>Existe uma diferença entre desconforto muscular (que é normal e esperado) e dor articular (que é sinal de alerta). Aprender a distinguir os dois é fundamental.</p>

<h3>Progressão gradual</h3>
<p>O corpo precisa de tempo para se adaptar a novas cargas. Aumentar peso demais rápido demais é a receita para lesão. Paciência e progressão gradual são aliados poderosos.</p>

<h3>Recuperação ativa</h3>
<p>Dias de descanso não precisam ser dias sem movimento. Caminhada leve, alongamento, mobilidade — tudo isso acelera a recuperação e previne lesões.</p>

<h2>O papel do profissional na prevenção</h2>
<p>Um bom personal trainer não serve apenas para te dar exercícios. Serve para identificar desequilíbrios musculares antes que virem problema, corrigir padrões de movimento errados, e adaptar o treino quando algo não está certo.</p>

<p>É muito mais barato (e inteligente) investir em prevenção do que tratar lesão.</p>
    `,
  },
  {
    slug: "habitos-que-sabotam-seu-emagrecimento",
    title: "5 Hábitos do Dia a Dia Que Estão Sabotando Seu Emagrecimento",
    excerpt:
      "Às vezes não é a dieta ou o treino o problema. São comportamentos do cotidiano que você nem percebe que estão impedindo seu progresso.",
    category: "Hábitos",
    date: "2024-10-30",
    readTime: "5 min",
    author: "Montinho Personal Trainer",
    content: `
<h2>Os vilões invisíveis do emagrecimento</h2>
<p>Você segue a dieta, vai treinar, mas o resultado não vem? Talvez o problema esteja nos hábitos que você nem está considerando.</p>

<h2>1. Dormir pouco ou mal</h2>
<p>Privação de sono aumenta o cortisol (hormônio do estresse), que por sua vez aumenta o apetite e favorece o acúmulo de gordura abdominal. Uma noite mal dormida pode aumentar a fome em até 24% no dia seguinte.</p>

<h2>2. Estresse crônico</h2>
<p>O cortisol elevado cronicamente é um dos maiores sabotadores do emagrecimento. Estratégias de gerenciamento de estresse — meditação, tempo na natureza, atividades prazerosas — não são frescura, são parte do processo.</p>

<h2>3. Beber pouca água</h2>
<p>Desidratação leve já prejudica o metabolismo e pode ser confundida com fome. Beber água adequadamente é uma das estratégias mais simples e eficientes para apoiar o emagrecimento.</p>

<h2>4. Comer distraído</h2>
<p>Comer na frente da tela, no carro ou em pé não permite que o cérebro registre a saciedade adequadamente. Você come mais do que precisa sem perceber. Refeições feitas com atenção resultam em maior satisfação com menos comida.</p>

<h2>5. Subestimar calorias líquidas</h2>
<p>Sucos, refrigerantes, bebidas alcoólicas, café com açúcar — essas calorias somam muito e raramente são consideradas no controle alimentar. Trocar bebidas calóricas por água é uma mudança simples com grande impacto.</p>

<h2>A mudança começa nos hábitos</h2>
<p>Transformação real não vem de dietas temporárias, mas de hábitos construídos com consistência ao longo do tempo. É para isso que estou aqui — para te ajudar a construir esses hábitos de forma prática e sustentável.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "Todos") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}

export function getRelatedPosts(currentSlug: string, category: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, 2);
}
