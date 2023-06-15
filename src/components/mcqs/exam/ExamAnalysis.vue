<template>
  <div class="pt-3">
    {{ question }}
  </div>
</template>
  
<script setup>
const props = defineProps({
  question: {
    type: Array,
    default: []
  }
});
</script>
<style  scoped></style>