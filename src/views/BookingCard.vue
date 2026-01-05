<template>
  <div class="w-[85%] mx-auto mt-8 p-8">
    <PageNavigation />
    <h2 class="text-md md:text-xl font-semibold mb-4 text-[#002b6b]">
      Current & Upcoming Meetings:
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4">
      <div v-for="meeting in events" :key="meeting.id">
        <div v-if="meeting.status === 'Ongoing'">
          <Card
            class="mb-4"
            :event="meeting"
            extra-class="border-green-300 bg-green-100"
          />
        </div>
        <div v-if="meeting.status === 'Yet-to'">
          <Card :event="meeting" extra-class="border-gray-300 bg-gray-100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import events from "@/assets/eventsData";
import Card from "@/components/Card.vue";
import PageNavigation from "@/components/PageNavigation.vue";

export default {
  components: {
    Card,
    PageNavigation,
  },
  data() {
    return {
      events: events,
    };
  },
};
</script>
