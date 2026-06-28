# PT Pro

Plataforma que conecta alunos aos melhores **personal trainers** — a indicação certa, na sua região.

## Arquivos

- **`index.html`** — site institucional / landing page de indicação de personal trainer. Aluno encontra, compara e fala com profissionais verificados perto dele (por região, academia e objetivo). HTML/CSS/JS puro, sem build.
- **`pt-pro-5.html`** — protótipo do app de gestão para personal trainers (dashboard, alunos, agenda, financeiro, relatórios). Produto complementar voltado ao profissional.

## Como rodar

É um site estático, sem dependências de build. Basta abrir o arquivo no navegador:

```bash
# abrir direto
open index.html        # macOS
xdg-open index.html    # Linux

# ou servir localmente
python3 -m http.server 8000
# http://localhost:8000
```

## Stack

- HTML + CSS + JavaScript puro (vanilla)
- [Tabler Icons](https://tabler.io/icons) via CDN
- Fonte Inter (Google Fonts)
- Tema escuro com accent lime (`#C8F04D`) — identidade visual PT Pro

## Seções do site (`index.html`)

- **Hero** com busca por região + objetivo
- **Como funciona** (3 passos)
- **Diretório de personais** — cards filtráveis por especialidade e busca por texto
- **Por que a PT Pro** (diferenciais)
- **Depoimentos**
- **Para personais** (CTA de cadastro)
- **FAQ** e rodapé

> Os dados de personais em `index.html` são de exemplo (mock), prontos para serem ligados a um backend/API futuramente.
