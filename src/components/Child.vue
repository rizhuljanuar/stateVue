<script setup>
  import GrandChild from "./GrandChild.vue"
  import {useNumbersStore} from "../stores/numbers"

  const {numbers, addNumber} = useNumbersStore()

</script>

<template>
  <div>
    <h1>Child component {{ numbers }}</h1>
    <button @click="addNumber(7)">add</button>
    <div class="line"></div>
    <GrandChild />
  </div>
</template>
