<template>
  <div class="bg-[#e6edf7]">
    <nav class="w-[1100px] flex justify-between items-center mx-auto h-[60px]">
      <router-link to="/" class="font-semibold text-xl perspective-[500px]">
        <span
          class="bg-[#0047B2] text-[#e6edf7] px-[0.7rem] py-1 font-bold mr-[-4px] rounded-md"
          >B</span
        >
        ookings
      </router-link>
      <div>
        <ul class="flex justify-center items-center gap-6">
          <router-link
            to="/view-booking"
            class="hover:text-[#002b6b] transition-all duration-300"
            >My Bookings</router-link
          >
          <router-link
            to="/events"
            class="hover:text-[#002b6b] transition-all duration-300"
            >Events</router-link
          >
          <router-link to="/add-booking">
            <Button extra-class="py-2 px-4">Add Bookings</Button>
          </router-link>
          <!-- <router-link
            to="/add-booking"
            class="bg-[#0047B2] text-[#e6edf7] rounded-md py-2 px-4"
            >Add Bookings</router-link
          > -->
        </ul>
      </div>
    </nav>
  </div>
</template>
<style scoped></style>
<script>
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
};
</script>
