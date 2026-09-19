<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="page">
    <header>
      <span class="brand">UQBITZ</span>
      <nav>
        <RouterLink to="/">Início</RouterLink>
        <RouterLink to="/rota-interna">Rota interna</RouterLink>
        <RouterLink to="/sobre">Sobre</RouterLink>
      </nav>
    </header>
    <main><RouterView /></main>
    <footer>example-vue-vite · Vite + Vue 3 · MIT</footer>
  </div>
</template>

<style>
:root { color-scheme: light dark; --bg: #ffffff; --fg: #16161a; --muted: #5b5b66; --line: #e4e4e9; --accent: #3b5bdb; }
@media (prefers-color-scheme: dark) {
  :root { --bg: #131316; --fg: #ececf1; --muted: #9b9ba6; --line: #2a2a31; --accent: #8da2fb; }
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--fg); font: 16px/1.6 system-ui, -apple-system, "Segoe UI", sans-serif; }
.page { max-width: 44rem; margin: 0 auto; padding: 0 1rem; min-height: 100vh; display: flex; flex-direction: column; }
header { display: flex; align-items: center; gap: 1.5rem; padding: 1.5rem 0; border-bottom: 1px solid var(--line); flex-wrap: wrap; }
.brand { font-weight: 700; letter-spacing: 0.08em; }
nav { display: flex; gap: 1rem; flex-wrap: wrap; }
nav a { color: var(--muted); text-decoration: none; }
nav a:hover { color: var(--fg); }
nav a.router-link-exact-active { color: var(--accent); font-weight: 600; }
main { flex: 1; padding: 2rem 0; }
h1 { font-size: 1.75rem; margin: 0 0 0.5rem; }
p { color: var(--muted); }
dl { display: grid; grid-template-columns: auto 1fr; gap: 0.4rem 1rem; margin: 1.5rem 0 0; }
dt { color: var(--muted); }
dd { margin: 0; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
footer { padding: 1.5rem 0; border-top: 1px solid var(--line); color: var(--muted); font-size: 0.875rem; }
.note { border-left: 3px solid var(--accent); padding-left: 1rem; }
</style>
