<script setup lang="ts">
import { ref, computed } from 'vue/vapor'

const count = ref(1)
const double = computed(() => count.value * 2)
const html = computed(() => `<button>HTML! ${count.value}</button>`)

const inc = () => count.value++
const dec = () => count.value--

// @ts-expect-error
globalThis.count = count
// @ts-expect-error
globalThis.double = double
// @ts-expect-error
globalThis.inc = inc
// @ts-expect-error
globalThis.dec = dec
// @ts-expect-error
globalThis.html = html
</script>

<template>
  <div>
    <h1 class="red">Counter</h1>
    <div>The number is {{ count }}.</div>
    <div>{{ count }} * 2 = {{ double }}</div>
    <div style="display: flex; gap: 8px">
      <button @click="inc">inc</button>
      <button @click="dec">dec</button>
    </div>
    <div v-html="html" />
    <div v-text="html" />
    <div v-once>once: {{ count }}</div>
    <div v-pre>{{ count }}</div>
    <div v-cloak>{{ count }}</div>
  </div>
</template>

<style>
.red {
  color: red;
}

html {
  color-scheme: dark;
  background-color: #000;
  padding: 10px;
}
</style>
