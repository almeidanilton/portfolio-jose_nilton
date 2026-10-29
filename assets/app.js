/* Conteúdo e comportamento do portfólio. Sem serviços de rastreamento. */
const $ = (s, parent = document) => parent.querySelector(s);
const $$ = (s, parent = document) => [...parent.querySelectorAll(s)];
const arrow = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const diagonal = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const githubIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>';
const linkedIn = 'https://www.linkedin.com/in/jos%C3%A9-nilton-a1b8b6280/';
const email = 'almeidanilton555@gmail.com';
const {lang,t,localize,basePath}=window.PortfolioI18n;
const projects = [
  {
    id:'labflow', name:'LabFlow', subtitle:'Do papel para um fluxo digital.', category:['dev'], tags:['React','Vite','TypeScript'], type:'Aplicação web', status:'MVP em desenvolvimento', art:'labflow',
    description:'Um sistema para organizar e acompanhar a produção em laboratórios de prótese dentária. Uma ideia que nasceu da minha vivência com fluxos digitais.',
    problem:'O acompanhamento em papel dificulta encontrar informações e entender em que etapa está cada trabalho. O projeto nasceu de um problema que conheço na rotina de laboratório.',
    solution:'O MVP reúne um dashboard básico, cadastro de trabalhos e navegação entre telas. O fluxo proposto conecta Recepção, Gesso, Digital, Bancada e Entrega.',
    contribution:'Concepção da solução a partir da experiência no setor de prótese dentária e desenvolvimento do MVP. O projeto segue em evolução e testes práticos.',
    learning:'Transformar uma necessidade da rotina em uma aplicação, estruturar componentes e pensar em rastreabilidade desde o início.',
    limitations:'Controle completo de etapas, relatórios e gestão por funcionário são evoluções previstas no README, e não são apresentados aqui como funcionalidades concluídas.',
    ai:'O uso de IA durante o desenvolvimento deste projeto ainda precisa ser detalhado por mim.',
    repo:'https://github.com/almeidanilton/labflow-system'
  },
  {
    id:'curadoria-ia',name:'Curadoria Tech com IA',subtitle:'Informação que encontra seu caminho.',category:['ia','dev'],tags:['n8n','Gemini','JavaScript'],type:'Automação com IA',status:'Projeto de automação',art:'curadoria',
    description:'Feeds de tecnologia, resumos com Gemini e publicação no Discord. Um fluxo para conectar informação, automação e inteligência artificial.',
    problem:'Acompanhar notícias de tecnologia envolve consultar diferentes fontes e organizar o que vale compartilhar.',
    solution:'Um fluxo em n8n monitora feeds RSS, usa a IA Gemini para gerar resumos e envia o conteúdo formatado ao Discord.',
    contribution:'Construção do fluxo de curadoria, definição das instruções para os resumos e tratamento do texto para respeitar os limites do Discord.',
    learning:'Integração de APIs, instruções para modelos de linguagem e tratamento de limites de requisição. O repositório documenta o uso de JavaScript para limitar o tamanho das mensagens.',
    limitations:'Resumos gerados por IA podem conter imprecisões e precisam de revisão. APIs e canais de publicação têm limites de uso.',
    ai:'O Gemini participa do próprio funcionamento: processa as notícias e gera os resumos. O uso de outras IAs como apoio à construção ainda precisa ser detalhado por mim.',
    repo:'https://github.com/almeidanilton/automacao-curadoria-tech-ia'
  },
  {
    id:'organizador',name:'Download Organizer',subtitle:'Menos bagunça. Mais organização.',category:['dev'],tags:['Java','Java NIO','Arquivos'],type:'Automação em Java',status:'Projeto de estudo aplicado',art:'organizer',
    description:'Um organizador de arquivos que nasceu da minha rotina com STL, bibliotecas do Exocad e downloads. Regras claras, pastas organizadas e relatório de execução.',
    problem:'Arquivos técnicos, bibliotecas e pacotes compactados se acumulam na pasta Downloads, tornando a organização uma tarefa repetitiva.',
    solution:'Classificação em EXOCAD, STL, PACOTES e OUTROS, com criação de pastas, modo de cópia, modo de movimentação e relatório em texto.',
    contribution:'Aplicação de regras de classificação relacionadas à minha rotina de trabalho e desenvolvimento da automação em Java.',
    learning:'Manipulação de arquivos com java.nio.file, tratamento de exceções e registro dos resultados de uma execução.',
    limitations:'Apesar do nome original “Cloud Ready”, a integração com armazenamento em nuvem é uma evolução planejada. A execução atual é local.',
    ai:'O uso de IA durante o desenvolvimento deste projeto ainda precisa ser detalhado por mim.',
    repo:'https://github.com/almeidanilton/cloud-ready-download-organizer'
  },
  {
    id:'nilcad',name:'NilCAD Digital',subtitle:'Materiais organizados. Rotina mais clara.',category:['dev'],tags:['Python','React','TypeScript','JSON'],type:'Controle de estoque CAD/CAM',status:'MVP em desenvolvimento',art:'nilcad',
    description:'Um projeto para simplificar o controle de materiais CAD/CAM, acompanhar movimentações e dar mais clareza à rotina de estoque do laboratório.',
    problem:'A rotina com materiais CAD/CAM exige organizar entradas, saídas e reposições. O projeto nasceu de necessidades que observei no meu trabalho em laboratório.',
    solution:'MVP com cadastro e consulta de materiais, entrada, saída e reposição de estoque, histórico de movimentações e alertas de estoque baixo. Os dados são armazenados localmente em JSON.',
    contribution:'Identificação da necessidade na rotina profissional, definição do fluxo de estoque e evolução do projeto com apoio de IA na estruturação do código e na resolução de problemas.',
    learning:'Organização de uma aplicação em Python, persistência local em JSON e construção de uma interface com React, TypeScript e Vite.',
    limitations:'O MVP segue em desenvolvimento. A integração do front-end com o back-end usando FastAPI, melhorias de validação e aprimoramentos de segurança são próximas etapas. O repositório está privado.',
    ai:'Uso o ChatGPT como apoio para estruturar código, resolver dúvidas, organizar a documentação e aprender durante o desenvolvimento. As decisões, os testes e a evolução do projeto fazem parte da minha participação.'
  }
];

for(const project of projects){for(const key of ['name','subtitle','type','status','description','problem','solution','contribution','learning','limitations','ai'])if(project[key])project[key]=t(project[key]);project.tags=project.tags.map(t);}

const external = (url,label,cls='') => `<a class="${cls}" href="${url}" target="_blank" rel="noopener noreferrer">${label}${diagonal}</a>`;
const tags = p => p.tags.map(t=>`<span>${t}</span>`).join('');
const isProjects = /\/projetos(?:\/index\.html)?\/?$/.test(location.pathname);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

$('#header').innerHTML = `<div class="nav-wrap"><a class="wordmark" href="/" aria-label="Zé, página inicial">zé<span>.</span></a><nav class="desktop-nav" aria-label="Navegação principal"><a href="/#inicio" ${!isProjects?'aria-current="page"':''}>Início</a><a href="${isProjects?'/projetos/':'/#projetos'}" ${isProjects?'aria-current="page"':''}>Projetos</a><a href="/#sobre">Sobre mim</a></nav><label class="language-control"><span class="sr-only">Escolha seu idioma</span><select id="language-select" aria-label="Idioma do portfólio"><option value="pt" lang="pt-BR">PT</option><option value="en" lang="en">EN</option></select><span aria-hidden="true">⌄</span></label><a class="nav-contact" href="/#contato">Vamos conversar ${diagonal}</a><button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button></div><nav id="mobile-menu" class="mobile-menu" aria-label="Navegação pelo celular" hidden><a href="/#inicio">Início</a><a href="/projetos/">Projetos</a><a href="/#sobre">Sobre mim</a><a href="/#contato">Vamos conversar</a></nav>`;
$('#footer').innerHTML = `<div class="footer-wrap"><a class="wordmark" href="/" aria-label="Voltar ao início">zé<span>.</span></a><span>Feito com curiosidade e apoio de IA.</span><a href="/?ia=como-uso">Como uso IA ${diagonal}</a><a href="/#curriculo">Currículo ${diagonal}</a><span class="copyright">© ${new Date().getFullYear()} José Nilton</span></div>`;

function art(p) {
  const shellStart=`<div class="project-art ${p.art}" aria-hidden="true"><span class="art-note">REPRESENTAÇÃO DO PROJETO</span>`;
  if(p.art==='labflow') return `${shellStart}<div class="lab-window"><div class="window-bar"><div class="window-dots"><i></i><i></i><i></i></div><span>labflow / visão geral</span><span>↗</span></div><div class="lab-app"><aside><b>lab<span>flow</span></b><i class="aside-active">◫ &nbsp; Visão geral</i><i>▤ &nbsp; Trabalhos</i><i>⊞ &nbsp; Cadastro</i><small>PRODUÇÃO COM CLAREZA</small></aside><div class="lab-content"><span class="mini-label">SEU LABORATÓRIO, CONECTADO</span><h4>Cada trabalho.<br>Cada etapa.</h4><div class="flow-board"><div><span>Recepção <em>01</em></span><article><i></i>Cadastro do trabalho<b>Informações organizadas</b></article></div><div><span>Digital <em>02</em></span><article><i></i>Próxima etapa<b>Um fluxo mais claro</b></article></div></div><div class="lab-progress"><span>Recepção</span><i></i><span>Gesso</span><i></i><strong>Digital</strong><i></i><span>Bancada</span></div></div></div></div><span class="art-caption">Da rotina real para uma ideia em código.</span></div>`;
  if(p.art==='curadoria') return `${shellStart}<div class="automation-visual"><span class="mini-label">DA FONTE À CONVERSA</span><h4>Informação em movimento.</h4><div class="workflow"><div><span class="node-icon rss">◔</span><b>Feeds RSS</b><small>encontrar</small></div><i></i><div><span class="node-icon gemini">✧</span><b>Gemini</b><small>resumir</small></div><i></i><div><span class="node-icon discord">#</span><b>Discord</b><small>compartilhar</small></div></div><span class="workflow-note"><i></i> Um fluxo conectado com n8n</span></div><span class="art-caption">Automação + IA + um pouco de JavaScript.</span></div>`;
  if(p.art==='organizer') return `${shellStart}<div class="organizer-window"><div class="window-bar"><div class="window-dots"><i></i><i></i><i></i></div><span>Downloads → organização</span></div><div class="file-visual"><span class="mini-label">CADA ARQUIVO NO SEU LUGAR</span><h4>Um pouco de ordem.</h4><div class="folder-row"><div><span>▱</span><b>EXOCAD</b></div><div><span>▱</span><b>STL</b></div><div><span>▱</span><b>PACOTES</b></div><div><span>▱</span><b>OUTROS</b></div></div><div class="console-line"><span>Java</span> classificar → organizar → registrar<i>_</i></div></div></div><span class="art-caption">Uma necessidade da rotina. Uma solução em Java.</span></div>`;
  return `${shellStart}<div class="nilcad-window"><div class="window-bar"><div class="window-dots"><i></i><i></i><i></i></div><span>nilcad / controle de materiais</span></div><div class="nilcad-content"><span class="mini-label">DA ROTINA PARA O CÓDIGO</span><h4>Seu estoque.<br>Um fluxo mais claro.</h4><div class="material-row"><span>Emax</span><span>PMMA</span><span>Zircônia</span></div><div class="stock-flow"><span>Entrada</span><i>→</i><span>Estoque</span><i>→</i><span>Saída</span></div><p>Python · React · JSON</p></div></div><span class="art-caption">Uma solução que começa no laboratório.</span></div>`;
}

function renderHome() {
  $('#main').innerHTML = `
    <section class="hero wrap" id="inicio" aria-labelledby="hero-title">
      <div class="hero-copy"><p class="eyebrow"><span class="tiny-dot"></span> JOSÉ NILTON · SÃO PAULO, BR</p><p class="hello">Oi, pode me chamar de Zé <span class="hello-star">✳</span></p><h1 id="hero-title">Curiosidade<br>que vira <span>projeto.</span></h1><p class="hero-description">Gosto de entender como as coisas funcionam.<br class="desktop-break"> E de colocar ideias no mundo através da tecnologia.</p><div class="interest-list"><span>Desenvolvimento</span><i></i><span>Cybersecurity</span><i></i><span>IA</span></div><div class="hero-actions"><a class="button primary" href="#projetos">Explorar projetos ${arrow}</a><a class="text-link" href="#sobre">Um pouco sobre mim ${diagonal}</a></div></div>
      <div class="hero-portrait"><div class="portrait-aura"></div><div class="portrait-orbit orbit-one"></div><div class="portrait-orbit orbit-two"></div><span class="orbit-spark">✳</span><img src="${basePath}assets/ze-portrait.png" width="1024" height="1536" fetchpriority="high" alt="José Nilton, o Zé, sorrindo e vestindo uma camiseta preta"><span class="portrait-coordinate">23°33′ S · 46°38′ W</span></div>
      <a class="scroll-hint" href="#projetos"><span>TEM MAIS LÁ EMBAIXO</span><span>↓</span></a>
    </section>
    <section class="projects-section" id="projetos" aria-labelledby="projects-title"><div class="section-heading wrap reveal"><div><p class="eyebrow">/ IDEIAS COLOCADAS EM PRÁTICA</p><h2 id="projects-title">Um projeto.<br><span>Uma nova possibilidade.</span></h2></div><p>Problemas reais, experimentos e aprendizados.<br>Cada projeto conta um pouco do meu caminho.</p></div><div class="carousel reveal" role="region" aria-roledescription="carrossel" aria-label="Projetos em destaque"><div class="carousel-stage" id="carousel-stage" tabindex="0" aria-label="Use as setas para trocar de projeto"></div><div class="carousel-bottom wrap"><div class="carousel-counter"><span id="current-count">01</span><i></i><span>${String(projects.length).padStart(2,'0')}</span></div><p class="swipe-hint">Arraste para girar <span>↻</span></p><div class="carousel-controls"><button id="previous-project" class="icon-button" aria-label="Projeto anterior">${arrow}</button><button id="next-project" class="icon-button" aria-label="Próximo projeto">${arrow}</button></div></div><p id="carousel-announcement" class="sr-only" aria-live="polite"></p></div><div class="all-projects-link reveal"><a class="button outline" href="/projetos/">Ver todos os projetos do Zé ${diagonal}</a><p>Um lugar para explorar com calma.</p></div></section>
    <section class="about-section wrap" id="sobre" aria-labelledby="about-title"><div class="about-label reveal"><p class="eyebrow">/ POR TRÁS DOS PROJETOS</p><h2 id="about-title">Muito prazer,<br><span>sou o Zé.</span></h2><div class="about-doodle" aria-hidden="true"><span>Aprender.</span><span>Construir.</span><span>Repetir. ↺</span></div></div><div class="about-content reveal"><p class="about-lead">Minha trajetória começou na odontologia digital. A curiosidade me trouxe para <span>um universo ainda maior: a tecnologia.</span></p><p>Na rotina com CAD/CAM e fluxos digitais, aprendi a olhar para processos e enxergar o que poderia funcionar melhor. Hoje, estudo Análise e Desenvolvimento de Sistemas na FIAP e transformo essa vontade de resolver problemas em projetos.</p><p>Exploro desenvolvimento, Cybersecurity e inteligência artificial. Estou construindo minha base, conectando conhecimentos e aprendendo com o que faço.</p><p>Fora da tela, o basquete e o skate também fazem parte de mim. O desafio, a prática e a troca com outras pessoas continuam por lá.</p><div class="education"><div class="education-icon" aria-hidden="true">↗</div><div><span class="mini-label">FORMAÇÃO EM ANDAMENTO</span><h3>Análise e Desenvolvimento de Sistemas</h3><p>FIAP <span>·</span> Conclusão prevista: dezembro de 2027</p></div></div><a class="text-link" href="${linkedIn}" target="_blank" rel="noopener noreferrer">Minha trajetória no LinkedIn ${diagonal}</a></div></section>
    <a class="honesty-section wrap reveal" href="/?ia=como-uso" aria-label="Sim, eu uso IA. Saiba por que e como uso"><span class="honesty-symbol" aria-hidden="true">✧</span><div><p class="eyebrow">TECNOLOGIA COM TRANSPARÊNCIA</p><h3>Sim, eu uso IA. E conto como.</h3><p>Ela faz parte do meu processo de criação e aprendizado. Aqui, conto por que uso IA, como ela me ajuda e qual é a minha participação.</p></div><span class="icon-button" aria-hidden="true">${diagonal}</span></a>
    <section class="resume-section wrap reveal" id="curriculo" aria-labelledby="resume-title"><div><p class="eyebrow">/ PARA LEVAR COM VOCÊ</p><h2 id="resume-title">Meu currículo,<br><span>no seu idioma.</span></h2><p>Um resumo da minha trajetória, formação e projetos. Escolha a versão e baixe o PDF.</p></div><div class="resume-downloads"><span class="resume-file-icon" aria-hidden="true">↓</span><span class="mini-label">${lang==='en'?'ONE PAGE. MY STORY SO FAR.':'UMA PÁGINA. MINHA TRAJETÓRIA ATÉ AQUI.'}</span><div><a class="button ${lang==='pt'?'primary':'outline'}" href="${basePath}assets/resume/Curriculo_Jose_Nilton_PT.pdf" download="Curriculo_Jose_Nilton_PT.pdf" lang="pt-BR" aria-label="${lang==='en'?'Download résumé in Portuguese, PDF':'Baixar currículo em português, PDF'}">Português · PDF <span aria-hidden="true">↓</span></a><a class="button ${lang==='en'?'primary':'outline'}" href="${basePath}assets/resume/Jose_Nilton_Resume_EN.pdf" download="Jose_Nilton_Resume_EN.pdf" lang="en" aria-label="${lang==='en'?'Download résumé in English, PDF':'Baixar currículo em inglês, PDF'}">Inglês · PDF <span aria-hidden="true">↓</span></a></div></div></section>
    <section class="contact-section" id="contato" aria-labelledby="contact-title"><div class="wrap"><div class="contact-top reveal"><p class="eyebrow">/ A PRÓXIMA IDEIA PODE COMEÇAR AQUI</p><span class="contact-spark" aria-hidden="true">✳</span></div><div class="contact-content reveal"><h2 id="contact-title">Bora trocar<br><span>uma ideia?</span></h2><div class="contact-details"><p>Uma oportunidade, um projeto ou uma boa conversa sobre tecnologia. Meu contato está aqui.</p><a class="email-link" href="mailto:${email}">${email}${diagonal}</a><div class="contact-links">${external(linkedIn,'LinkedIn')}${external('https://github.com/almeidanilton',`${githubIcon} GitHub`)}<button class="copy-email">Copiar e-mail <span>⧉</span></button></div></div></div></div></section>`;
  initCarousel();
}

function renderProjects() {
  document.title = 'Todos os projetos — Zé';
  $('#main').innerHTML = `<section class="projects-page wrap"><a class="back-link" href="/">← Voltar para o início</a><div class="catalog-heading"><p class="eyebrow">O QUE ANDO CONSTRUINDO</p><h1>Projetos do <span>Zé.</span></h1><p>Ideias, experimentos e problemas reais.<br>Explore o processo por trás de cada projeto.</p><span class="catalog-spark" aria-hidden="true">✳</span></div><div class="catalog-tools"><div class="filters" role="group" aria-label="Filtrar projetos por área"><button class="active" data-filter="all" aria-pressed="true">Todos <span>${projects.length}</span></button><button data-filter="dev" aria-pressed="false">Desenvolvimento</button><button data-filter="cyber" aria-pressed="false">Cybersecurity</button><button data-filter="ia" aria-pressed="false">IA</button></div><label class="search-field"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.5"/><path d="m16 16 5 5" stroke="currentColor" stroke-width="1.5"/></svg><input type="search" placeholder="Buscar projeto…" aria-label="Buscar projeto por nome, descrição ou tecnologia"></label></div><p class="results-count" aria-live="polite"></p><div class="projects-grid" id="projects-grid"></div><div class="catalog-bottom"><p>O aprendizado continua. Novos projetos também.</p>${external('https://github.com/almeidanilton','Explorar meu GitHub','text-link')}</div></section>`;
  let filter = 'all';
  const update=()=>{
    const term=$('input[type="search"]').value.trim().toLocaleLowerCase('pt-BR');
    const matches=projects.filter(p=>(filter==='all'||p.category.includes(filter))&&[p.name,p.description,...p.tags].join(' ').toLocaleLowerCase('pt-BR').includes(term));
    $('.results-count').textContent=`${matches.length} ${matches.length===1?'projeto':'projetos'}`;
    $('#projects-grid').innerHTML=matches.length?matches.map((p,i)=>`<article class="catalog-card"><button class="art-button" data-project="${p.id}" aria-label="Conhecer ${p.name}">${art(p)}<span class="art-open">${diagonal}</span></button><div class="catalog-card-copy"><div class="project-type"><span>${p.type}</span></div><h2><button data-project="${p.id}">${p.name}</button></h2><p>${p.description}</p><div class="tags">${tags(p)}</div><button class="text-link" data-project="${p.id}">Ver o projeto ${arrow}</button></div></article>`).join(''):`<div class="empty-state"><span aria-hidden="true">${filter==='cyber'?'⌘':'⌕'}</span><h2>${filter==='cyber'&&!term?'Os estudos continuam.<br>A documentação vem a seguir.':'Nenhum projeto por aqui ainda.'}</h2><p>${filter==='cyber'&&!term?'Estou construindo minha base em Cybersecurity. Os laboratórios aparecerão aqui quando estiverem documentados para compartilhar.':'Tente outro nome, tecnologia ou filtro para encontrar um projeto.'}</p><button class="button outline" id="clear-filters">Ver todos os projetos ${arrow}</button></div>`;
    localize($('#projects-grid'));localize($('.results-count'));
    $('#clear-filters')?.addEventListener('click',()=>{filter='all';$('input[type="search"]').value='';setButtons();update()});
  };
  const setButtons=()=>$$('[data-filter]').forEach(b=>{b.classList.toggle('active',b.dataset.filter===filter);b.setAttribute('aria-pressed',String(b.dataset.filter===filter))});
  $$('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;setButtons();update()}));
  $('input[type="search"]').addEventListener('input',update);
  update();
}

function carouselSlide(p,i) {
  return `<article class="spotlight-card" data-index="${i}" role="group" aria-roledescription="slide" aria-label="${i+1} de ${projects.length}: ${p.name}" ${i?'inert aria-hidden="true"':''}><div class="spotlight-visual">${art(p)}</div><div class="spotlight-copy"><p class="eyebrow">/ ${p.type.toLocaleUpperCase('pt-BR')}</p><h3>${p.name}</h3><p class="spotlight-subtitle">${p.subtitle}</p><p class="spotlight-description">${p.description}</p><div class="tags">${tags(p)}</div><button class="button dark" data-project="${p.id}">Conhecer o projeto ${diagonal}</button><span class="project-status"><i></i>${p.status}</span></div></article>`;
}
function initCarousel() {
  const stage=$('#carousel-stage');
  stage.innerHTML=projects.map(carouselSlide).join('');
  const slides=$$('.spotlight-card',stage);
  let index=0,busy=false,startX=null,startY=null;
  slides[0].classList.add('active');
  function change(direction) {
    if(busy)return;
    busy=true;
    const previous=slides[index];
    index=(index+direction+slides.length)%slides.length;
    const next=slides[index];
    // Transform origins sit below the stage, producing an arc rather than a lateral slide.
    previous.inert=true;previous.setAttribute('aria-hidden','true');
    next.inert=false;next.removeAttribute('aria-hidden');
    const duration=reducedMotion.matches?1:740;
    const out=previous.animate([{transform:'rotate(0deg) translateY(0)',opacity:1},{transform:`rotate(${-direction*28}deg) translateY(65px)`,opacity:0}],{duration,easing:'cubic-bezier(.32,0,.2,1)',fill:'forwards'});
    next.classList.add('active');
    const inc=next.animate([{transform:`rotate(${direction*28}deg) translateY(65px)`,opacity:0},{transform:'rotate(0deg) translateY(0)',opacity:1}],{duration,easing:'cubic-bezier(.22,.75,.2,1)',fill:'forwards'});
    $('#current-count').textContent=String(index+1).padStart(2,'0');
    $('#carousel-announcement').textContent=t(`Projeto ${index+1} de ${projects.length}: ${projects[index].name}`);
    Promise.all([out.finished,inc.finished]).then(()=>{previous.classList.remove('active');out.cancel();inc.cancel();busy=false}).catch(()=>{busy=false});
  }
  $('#previous-project').addEventListener('click',()=>change(-1));
  $('#next-project').addEventListener('click',()=>change(1));
  stage.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();change(e.key==='ArrowRight'?1:-1)}});
  stage.addEventListener('pointerdown',e=>{if(e.target.closest('button,a'))return;startX=e.clientX;startY=e.clientY});
  stage.addEventListener('pointerup',e=>{if(startX===null)return;const dx=e.clientX-startX,dy=e.clientY-startY;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.3)change(dx<0?1:-1);startX=null;startY=null});
  stage.addEventListener('pointercancel',()=>{startX=null;startY=null});
}

function openProject(id, push=true) {
  const p=projects.find(x=>x.id===id);if(!p)return;
  const dialog=$('#project-dialog');
  $('#dialog-content').innerHTML=`<div class="dialog-top"><span class="eyebrow">POR DENTRO DO PROJETO</span><button class="close-dialog icon-button" aria-label="Fechar detalhes do projeto">✕</button></div><div class="dialog-art">${art(p)}</div><div class="dialog-body"><p class="eyebrow">${p.type} <span>·</span> ${p.status}</p><h2 id="dialog-title">${p.name}</h2><p class="dialog-intro">${p.description}</p><div class="tags">${tags(p)}</div><div class="case-grid"><section><span>/ CONTEXTO</span><h3>O problema</h3><p>${p.problem}</p></section><section><span>/ CONSTRUÇÃO</span><h3>A solução</h3><p>${p.solution}</p></section><section><span>/ MINHA PARTE</span><h3>Minha participação</h3><p>${p.contribution}</p></section><section><span>/ EVOLUÇÃO</span><h3>O que aprendi</h3><p>${p.learning}</p></section></div><section class="ai-note"><span class="ai-note-symbol" aria-hidden="true">✧</span><div><h3>Onde a IA entrou</h3><p>${p.ai}</p></div></section><section class="limitations"><h3>Estágio atual e limitações</h3><p>${p.limitations}</p></section><div class="dialog-actions">${p.repo?external(p.repo,`${githubIcon} Explorar repositório`,'button primary'):'<a class="button primary" href="/projetos/">Explorar outros projetos '+arrow+'</a>'}<button class="button outline close-dialog">Voltar à navegação</button></div></div>`;
  localize($('#dialog-content'));
  if(push){const url=new URL(location.href);url.searchParams.set('projeto',id);history.pushState({project:id},'',url)}
  if(!dialog.open)dialog.showModal();
  document.body.classList.add('dialog-open');
  dialog.scrollTop=0;
  $('.close-dialog',dialog).focus({preventScroll:true});
}
function openAI(push=true) {
  const dialog=$('#project-dialog');
  $('#dialog-content').innerHTML=`<div class="dialog-top"><span class="eyebrow">TECNOLOGIA COM TRANSPARÊNCIA</span><button class="close-dialog icon-button" aria-label="Fechar texto sobre uso de IA">✕</button></div><div class="dialog-body ai-story"><span class="ai-story-spark" aria-hidden="true">✧</span><h2 id="dialog-title">Sim, eu uso IA.<br>E conto como.</h2><p class="dialog-intro">A curiosidade é minha. A IA é uma das ferramentas que uso para transformar perguntas em aprendizado e ideias em projetos.</p><section><h3>Por que eu uso</h3><p>Estou construindo minha trajetória em tecnologia. Uso IA para explorar possibilidades, tirar dúvidas e avançar em problemas que encontro pelo caminho. Ela me ajuda a experimentar e a aprender durante a construção.</p></section><section><h3>Como ela entra no meu processo</h3><p>Uso como apoio para organizar ideias, entender conceitos, estruturar e revisar código, investigar erros e preparar documentação. Neste portfólio, por exemplo, defini a proposta, a navegação e os ajustes, e contei com IA na implementação, nos textos e no recorte da foto.</p><p>Em alguns projetos, a IA também faz parte da solução: na Curadoria Tech, o Gemini gera os resumos das notícias. Isso é diferente de usar um assistente para ajudar a construir o projeto, e procuro deixar essa diferença clara.</p></section><section><h3>Qual é a minha participação</h3><p>É minha a escolha do problema, do objetivo e do que faz sentido para cada projeto. Procuro entender as sugestões, adaptar ao contexto e testar o resultado. Uma resposta gerada por IA pode estar errada: revisar, aprender e corrigir fazem parte do processo.</p></section><section class="ai-story-closing"><h3>O compromisso é ser transparente</h3><p>Quero mostrar o que construí, onde tive apoio e o que ainda estou aprendendo. Quando uma etapa está em desenvolvimento ou a participação da IA ainda precisa ser detalhada, prefiro dizer isso com clareza.</p></section><div class="dialog-actions"><button class="button primary close-dialog">Voltar ao portfólio ${arrow}</button></div></div>`;
  localize($('#dialog-content'));
  if(push){const url=new URL(location.href);url.searchParams.delete('projeto');url.searchParams.set('ia','como-uso');history.pushState({ai:true},'',url)}
  if(!dialog.open)dialog.showModal();
  document.body.classList.add('dialog-open');dialog.scrollTop=0;
  $('.close-dialog',dialog).focus({preventScroll:true});
}
function closeProject(){
  const dialog=$('#project-dialog');
  dialog.close();document.body.classList.remove('dialog-open');
  const url=new URL(location.href);url.searchParams.delete('projeto');url.searchParams.delete('ia');history.replaceState(null,'',url);
}
document.addEventListener('click',e=>{
  const aiLink=e.target.closest('a[href*="?ia="]');if(aiLink){e.preventDefault();openAI();return;}
  const project=e.target.closest('[data-project]');if(project)openProject(project.dataset.project);
  const localDetails=e.target.closest('a[href*="?projeto="]');
  if(localDetails){e.preventDefault();openProject(new URL(localDetails.href).searchParams.get('projeto'))}
  if(e.target.closest('.close-dialog'))closeProject();
});
$('#project-dialog').addEventListener('click',e=>{if(e.target===$('#project-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeProject()}});
$('#project-dialog').addEventListener('cancel',e=>{e.preventDefault();closeProject()});
window.addEventListener('popstate',()=>{const id=new URL(location.href).searchParams.get('projeto');if(new URL(location.href).searchParams.has('ia'))openAI(false);else if(id)openProject(id,false);else{$('#project-dialog').close();document.body.classList.remove('dialog-open')}});

if(isProjects)renderProjects();else renderHome();
const menuButton=$('.menu-toggle');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',t(open?'Fechar menu':'Abrir menu'));$('#mobile-menu').hidden=!open});
$$('#mobile-menu a').forEach(a=>a.addEventListener('click',()=>{$('#mobile-menu').hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label',t('Abrir menu'))}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('#mobile-menu').hidden=true;menuButton.setAttribute('aria-expanded','false')}});
$('.copy-email')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(email);$('#toast').textContent=t('E-mail copiado. Bora conversar!');$('#toast').classList.add('visible');setTimeout(()=>$('#toast').classList.remove('visible'),3500)}catch{$('#toast').textContent=email;$('#toast').classList.add('visible');setTimeout(()=>$('#toast').classList.remove('visible'),7000)}});
const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target)}}),{threshold:0.10});
$$('.reveal').forEach(el=>observer.observe(el));
const initialProject=new URL(location.href).searchParams.get('projeto');if(new URL(location.href).searchParams.has('ia'))openAI(false);else if(initialProject)openProject(initialProject,false);
// Anchors can point to a section rendered after the initial document load.
if(location.hash)requestAnimationFrame(()=>$(location.hash)?.scrollIntoView({behavior:'instant'}));

localize(document.body);
const languageSelect=$('#language-select');languageSelect.value=lang;
languageSelect.addEventListener('change',()=>{
 const selected=languageSelect.value;try{localStorage.setItem('ze-language',selected)}catch{}
 const url=new URL(location.href);url.searchParams.set('lang',selected);location.assign(url.href);
});
