<template>
  <nav class="mb-4 text-sm" :class="extraClass">
    <span v-for="(item, index) in linkList" :key="item.name">
      <span
        v-if="item.path !== $route.path"
        class="text-gray-500 cursor-pointer"
        @click="navHandler(item.path)"
      >
        {{ item.label }}
      </span>

      <span v-else class="font-extrabold text-[#002b6b]">
        {{ item.label }}
      </span>

      <span v-if="index < linkList.length - 1" class="text-gray-500 text-xs">
        <i class="fa-solid fa-angle-left"></i>
      </span>
    </span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      linkList: [
        { label: "Home", path: "/" },
        { label: "My Bookings", path: "/view-booking" },
        { label: "Events", path: "/events" },
        { label: "Add Booking", path: "/add-booking" },
      ],
    };
  },
  props: {
    extraClass: {
      type: String,
    },
  },
  methods: {
    navHandler(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped></style>
