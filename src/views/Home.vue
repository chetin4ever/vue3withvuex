<template>
  <counter />
  <square-counter />
  <buttons />
  <color-code />
</template>

<script>
import Buttons from "../components/Buttons.vue";
import ColorCode from "../components/ColorCode.vue";
import Counter from "../components/Counter.vue";
import SquareCounter from "../components/SquareCounter.vue";
// @ is an alias to /src

export default {
  components: { Counter, Buttons, SquareCounter, ColorCode },
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
