<template>
  <div class="w-full full-center p-2">
    <h1 class="text-black text-3xl font-bold">Bütün Rezervasiyalar</h1>
  </div>
</template>

<script setup lang="ts">

import { useMainStore } from '~/stores'
const mainStore = useMainStore()
console.log(mainStore.$state.messages)
definePageMeta({
  layout: 'chat',
})



</script>