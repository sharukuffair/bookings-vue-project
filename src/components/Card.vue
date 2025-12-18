<template>
  <div class="w-[80%] border-[1px] p-4 rounded-md shadow-sm">
    <div class="flex justify-between items-center">
      <span class="text-lg md:text-2xl font-semibold text-[#002b6b] mb-2">{{
        event.room
      }}</span>
      <span
        :class="extraClass"
        class="border rounded-md text-[12px] py-1 px-2"
        >{{ event.status }}</span
      >
    </div>
    <div class="space-y-1">
      <h2 class="text-md md:text-xl font-bold opacity-80">{{ event.name }}</h2>
      <p class="text-sm opacity-80">
        Duration: {{ event.startTime }} - {{ event.endTime }}
      </p>
      <p class="text-sm opacity-80">{{ event.purpose }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
    extraClass: {
      type: String,
      default: "",
    },
    // label: {
    //   type: String,
    //   required: true,
    // },
  },
};
</script>
