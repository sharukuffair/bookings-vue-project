<template>
  <div class="w-full mb-4 text-[#002b6b]" :class="extraClass">
    <button @click="goBackward()">
      <span><i class="fa-solid fa-angle-left"></i></span>
      <span>Back</span>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    extraClass: {
      type: String,
    },
  },
  methods: {
    goBackward() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped></style>
