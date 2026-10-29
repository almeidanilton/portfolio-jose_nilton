# Portfólio do Zé

Portfólio de **José Nilton Almeida dos Santos**, com Português / English, projetos, carrossel circular, texto sobre uso de IA e currículo para download nos dois idiomas.

Projeto em **HTML, CSS e JavaScript puro**. Não precisa de React, banco de dados, chave de API ou instalação de pacotes para funcionar.

## 1. Abrir no VS Code

1. Extraia o ZIP.
2. No VS Code, use **Arquivo → Abrir Pasta** e selecione a pasta `portfolio-do-ze` que contém este README e o `index.html`.
3. Abra um terminal nessa pasta.

### Opção A — com Node.js

Com Node.js 18 ou superior instalado, execute:

```bash
npm start
```

Abra **http://localhost:3000**. Não precisa executar `npm install`, pois o servidor usa apenas módulos nativos do Node.js. Para encerrar, pressione **Ctrl+C** no terminal.

### Opção B — com Live Server

Se você já usa a extensão Live Server no VS Code, abra o `index.html` da raiz com ela. Mantenha esta pasta como a raiz do projeto.

### Opção C — com Python

Se você já tem Python instalado:

```bash
python -m http.server 3000
```

No Windows, se o comando acima não for reconhecido, experimente `py -m http.server 3000`.

Abra **http://localhost:3000**. Use um servidor local; abrir o HTML diretamente pelo explorador (`file://`) pode limitar recursos do navegador.

## 2. Onde editar cada coisa

| Arquivo ou pasta | O que tem |
| --- | --- |
| `index.html` | Documento da página inicial, metadados e carregamento dos arquivos. |
| `projetos/index.html` | Documento da página exclusiva dos projetos. |
| `assets/app.js` | Textos em português, dados dos projetos, carrossel, filtros, busca e janelas de detalhes. |
| `assets/style.css` | Cores, fontes, layout, animações e adaptação para celular. |
| `assets/en.json` | Traduções editoriais para inglês. |
| `assets/i18n.js` | Traduções que o navegador carrega e lógica de troca de idioma. |
| `assets/ze-portrait.png` | Foto recortada com transparência. O degradê da base é aplicado em CSS. |
| `assets/resume/` | Currículos em português e inglês, prontos para baixar. |
| `assets/manrope-*.ttf` | Fontes do site, servidas localmente. |
| `server.mjs` | Servidor local simples. Não é necessário para hospedagem estática. |
| `scripts/` | Utilitários opcionais para atualizar traduções e gerar currículos. |

### Textos e projetos

Comece pelo array `projects` em `assets/app.js`. Cada projeto tem nome, descrição, tecnologias, participação, aprendizado, limitações e uso de IA. As funções `renderHome`, `renderProjects`, `openProject` e `openAI` montam as respectivas partes da interface.

Para adicionar um projeto, use um dos objetos existentes como referência. Mantenha um `id` único. Acrescente as traduções dos textos em `assets/en.json`.

### Cores e visual

No começo de `assets/style.css`, procure `:root`: as variáveis `--paper`, `--ink` e `--violet` controlam as cores principais. As regras `@media` adaptam a tela para diferentes larguras.

### Traduções

Português é o idioma inicial para novos visitantes. A seleção PT/EN fica guardada no navegador, e o parâmetro `?lang=pt` ou `?lang=en` permite compartilhar uma versão específica.

Após editar `assets/en.json`, execute:

```bash
npm run translations
```

Isso atualiza o dicionário embarcado em `assets/i18n.js`. Não há chamada para serviço de tradução nem rastreamento. Revise também os textos dos projetos e rótulos de acessibilidade após cada alteração.

### Currículos

Os arquivos entregues são:

- `assets/resume/Curriculo_Jose_Nilton_PT.pdf`
- `assets/resume/Jose_Nilton_Resume_EN.pdf`

Você pode substituir esses PDFs, mantendo os nomes, para que os botões continuem funcionando.

Opcionalmente, para editar e gerar os PDFs pelo código, instale o ReportLab no seu ambiente Python:

```bash
python -m pip install -r scripts/requirements.txt
python scripts/build_resume_pt.py
python scripts/build_resume_en.py
```

Os scripts usam as fontes incluídas em `scripts/fonts/`. Eles sobrescrevem os respectivos PDFs. A versão em inglês traduz a versão em português, preservando as informações e o nível de inglês básico informado.

## 3. Salvar no seu GitHub

Crie um repositório vazio na sua conta e siga as instruções de envio que o próprio GitHub mostrar. Pelo terminal, a sequência básica é:

```bash
git init
git add .
git commit -m "Adiciona portfólio bilíngue"
git branch -M main
git remote add origin COLE_AQUI_A_URL_DO_SEU_REPOSITORIO
git push -u origin main
```

Troque `COLE_AQUI_A_URL_DO_SEU_REPOSITORIO` pela URL real. Se você já estiver dentro de um repositório Git, confira `git status` e `git remote -v` antes de iniciar ou adicionar outro remoto.

**Enviar o código ao GitHub e colocar o site no ar são etapas diferentes.** Se quiser usar GitHub Pages, este pacote já está organizado com `index.html` na raiz e `.nojekyll`. Use a raiz do repositório como pasta publicada. Os caminhos se adaptam tanto a um domínio próprio quanto a um endereço com o nome do repositório, como `/meu-portfolio/`.

## 4. Conferência antes de publicar

- Abra as páginas inicial e de projetos em PT e EN.
- Teste o carrossel, a busca, os filtros e o texto sobre IA.
- Baixe e confira os dois PDFs.
- Teste em uma tela de celular e no computador.
- Mantenha as descrições e o estágio de cada projeto atualizados. O NilCAD está descrito como MVP, com integração FastAPI futura e repositório privado.

## Sobre esta entrega

Este pacote contém o site aprovado e seus arquivos editáveis. Os caminhos foram adaptados para executar localmente e em hospedagem estática, sem depender do endereço usado na prévia.

As capas dos projetos são representações em HTML/CSS, não capturas dos sistemas. A imagem do retrato foi preparada com apoio de IA a partir da foto enviada pelo autor. Os textos de transparência sobre IA fazem parte do site.

O código do site não usa login próprio. O controle de acesso da prévia anterior era da plataforma que a hospedava. Ao publicar por conta própria, o acesso dependerá da hospedagem escolhida.
