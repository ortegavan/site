# 🌸 ortegavan.com.br

**Site pessoal de Vanessa Ortega — desenvolvedora, autora e criadora de conteúdo**

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev) [![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org) [![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com) [![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev)

---

## ✨ Sobre o projeto

Site pessoal construído com Angular moderno, apresentando:

- 📖 Promoção do livro **Angular na Prática** (Jan/2025)
- 🎓 Vitrine dos cursos em desenvolvimento
- 📬 Inscrição em newsletter via Kit.com
- 🔗 Links para redes sociais e contato direto

---

## 🏗️ Arquitetura

```
src/
├── app/
│   ├── components/
│   │   ├── header/      # Barra de navegação fixa, responsiva
│   │   ├── hero/        # Seção de abertura + newsletter
│   │   ├── about/       # Bio + foto + redes sociais
│   │   ├── book/        # Vitrine do livro Angular na Prática
│   │   ├── courses/     # Cursos em breve
│   │   ├── email/       # CTA de contato
│   │   ├── footer/      # Rodapé
│   │   └── home/        # Página principal (lazy loaded)
│   └── ui/
│       └── card/        # Componente de card reutilizável
├── styles.scss          # Design tokens e estilos globais
└── index.html
```

Todos os componentes são **standalone** (sem NgModules), com **OnPush** change detection e **signals** para estado reativo.

---

## 🎨 Design tokens

| Token               | Valor        | Uso                |
| ------------------- | ------------ | ------------------ |
| `--primary-color`   | `#131313`    | Texto principal    |
| `--secondary-color` | `#f5f5f5`    | Background         |
| `--accent-color`    | `#eb589c` 🌸 | Destaques e CTAs   |
| `--font-family`     | Outfit       | Tipografia         |
| `--padding`         | `32px`       | Espaçamento padrão |

---

## 🚀 Como rodar

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm start
# → http://localhost:4200

# Build de produção
npm run build

# Testes
npm test
```

---

## 🛠️ Stack

| Camada     | Tecnologia                   |
| ---------- | ---------------------------- |
| Framework  | Angular 21 (standalone)      |
| Linguagem  | TypeScript 5.9 (strict)      |
| Estilos    | SCSS + CSS Custom Properties |
| Testes     | Vitest + jsdom               |
| Ícones     | FontAwesome 6 Duotone        |
| Fontes     | Google Fonts — Outfit        |
| Newsletter | Kit.com                      |
| Formatação | Prettier                     |

---

## 📐 Boas práticas adotadas

- ✅ Componentes standalone com `ChangeDetectionStrategy.OnPush`
- ✅ Signals para estado local (`signal`, `computed`)
- ✅ `input()` e `output()` em vez de decorators
- ✅ Controle de fluxo nativo (`@if`, `@for`, `@switch`)
- ✅ `NgOptimizedImage` para imagens estáticas
- ✅ WCAG AA — contraste, foco e atributos ARIA
- ✅ Lazy loading na rota principal

---

Feito com 💖 e Angular por **[Vanessa Ortega](https://ortegavan.com.br)**
