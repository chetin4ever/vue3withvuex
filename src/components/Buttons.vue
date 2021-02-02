<template>
  <div class="button">
    <button @click="$store.dispatch('incrementCounter')">+</button>
    <button @click="$store.dispatch('decrementCounter')">-</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>