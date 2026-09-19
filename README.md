# example-vue-vite

App de exemplo da UQBITZ: **Vue 3 + Vite**, saída estática, publicado pela CLI.

Três rotas de verdade (`/`, `/rota-interna`, `/sobre`) com o roteador em
`history` mode — de propósito, para exercitar o comportamento do servidor
estático da plataforma em recarga de rota interna.

## Rodar local

```bash
bun install
bun run dev
```

## Publicar na UQBITZ

```bash
uqbitz sites create --name example-vue-vite --editor developer --has-data no --has-code yes --code-runtime static
uqbitz git link <projeto> --repo UQBITZ/example-vue-vite
uqbitz projects set <projeto> --install "bun install" --build "bun run build" --output dist
uqbitz deploy
```

MIT.
