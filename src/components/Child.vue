<script setup>
  import GrandChild from "./GrandChild.vue"
  import useNumbers from "../composables/useNumbers"

  const {numbers, addNumber} = useNumbers()

</script>

<template>
  <div>
    <h1>Child component {{ numbers }}</h1>
    <button @click="addNumber(7)">add</button>
    <div class="line"></div>
    <GrandChild />
  </div>
</template>
