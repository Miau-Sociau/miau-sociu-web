# MiauSocial Frontend (Astro) — README

> Um front leve em **Astro** pra consumir nossa API Spring Boot. Login com JWT, posts e imagens na velocidade da luz.

---

## Tecnologias

- Astro + React
- Shadcn UI
- Tailwind CSS
- TypeScript

## Rodando Local

1. Clone o repo:
   ```bash
   git clone https://github.com/seu-usuario/miausocial-frontend.git
   cd miausocial-frontend
   ```
2. Instale deps:
   ```bash
   npm install
   ```
3. Crie `.env` com:
   ```env
   VITE_API_URL=http://localhost:8080
   ```
4. Inicie dev:
   ```bash
   npm run dev
   ```

Abre em [http://localhost:3000](http://localhost:3000)

## Estrutura Básica

```plaintext
src/
├── components/  # UI
├── pages/       # Rotas Astro
├── services/    # fetch API
└── utils/       # helpers
```

## Contribuição

1. Branch: `git checkout -b feat/nome`
2. Commit: `git commit -m "feat: ..."`
3. Push & PR 🚀

