<template>
  <div class="counter" :style="{ color: $store.state.colorCode }">
    {{ $store.state.counter }}
  </div>
  <div class="counter-square">
    {{ $store.state.counter }}<sup>2</sup> = {{ $store.getters.counterSuare }}
  </div>
  <div class="button">
    <button @click="$store.dispatch('incrementCounter')">+</button>
    <button @click="$store.dispatch('decrementCounter')">-</button>
  </div>
  <div>
    <input v-model="colorCode" type="text" placeholder="Enter color code" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.dispatch("setColorCode", newValue);
        console.log(newValue);
      },
    },
  },
};
</script>
<style >
.counter {
  font-size: 80px;
}
.button button {
  margin: 0 10px;
  width: 100px;
  font-size: 50px;
}
div {
  margin: 10px;
}
</style>
