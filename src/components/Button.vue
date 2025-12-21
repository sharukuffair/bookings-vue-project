<template>
  <button class="bg-[#0047B2] text-[#e6edf7] rounded-md" :class="extraClass">
    <slot></slot>
  </button>
</template>
<style scoped></style>
<script>
export default {
  props: {
    extraClass: {
      type: String,
    },
  },
};
</script>
