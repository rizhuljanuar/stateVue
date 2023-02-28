<script setup>
import GreatGrandChild from "./GreatGrandChild.vue"
import {useNumbersStore}  from "../stores/numbers"

const {filterNum} = useNumbersStore()
</script>

<template>
  <div>
    <h1>Grand Component {{filterNum(25)}}</h1>
    <div class="line"></div>
    <GreatGrandChild />
  </div>
</template>
