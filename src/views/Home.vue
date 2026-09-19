<script setup>
// Marcador determinístico: o critério 5 do ensaio (#2022) confere o CORPO da
// resposta, não o status — `health-check.ts` aceita qualquer status como vivo.
const marker = 'uqbitz-example-vue-vite-v1';
const builtAt = new Date().toISOString();
</script>

<template>
  <h1>Vue 3 + Vite, publicado pela CLI</h1>
  <p>
    Esta página é o ensaio de publicação estática da UQBITZ: repositório vinculado
    com <code>uqbitz git link</code>, comandos de build gravados com
    <code>uqbitz projects set</code> e publicação com <code>uqbitz deploy</code>.
  </p>
  <dl>
    <dt>Marcador</dt><dd data-uqbitz-marker>{{ marker }}</dd>
    <dt>Framework</dt><dd>vue-vite</dd>
    <dt>Modo</dt><dd>estático (dist/)</dd>
    <dt>Build</dt><dd>{{ builtAt }}</dd>
  </dl>
</template>
