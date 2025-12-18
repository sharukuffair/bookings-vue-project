<template>
  <div class="max-w-[1100px] mx-auto px-4">
    <div class="mt-10 mb-12 text-center">
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#002b6b]"
      >
        Turn office chaos into clarity.
      </h1>

      <p
        class="text-sm sm:text-base md:text-lg font-medium mt-3 mb-6 opacity-80"
      >
        Effortlessly manage all your meeting room reservations in one place.
      </p>

      <router-link to="/add-booking">
        <Button
          extra-class="py-2 px-6 sm:py-3 sm:px-8 text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-md"
        >
          Create Bookings
        </Button>
      </router-link>
    </div>
    <h2 class="opacity-80 mb-2 text-sm sm:text-base">On-going Events:</h2>

    <div
      class="bg-white py-4 min-h-[175px] w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <div v-for="meeting in events" :key="meeting.id">
        <div v-if="meeting.status === 'Ongoing'">
          <Card
            class="mb-4"
            :event="meeting"
            extra-class="border-green-300 bg-green-100"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
import events from "@/assets/eventsData";

export default {
  data() {
    return {
      events,
    };
  },
  components: {
    Button,
    Card,
  },
};
</script>
