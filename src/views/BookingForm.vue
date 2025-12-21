<template>
  <div class="w-full h-full">
    <div
      class="w-[60%] min-h-[50%] bg-[#fff] mx-auto rounded-md shadow-md py-8 px-24 mt-12 mb-12"
    >
      <form @submit.prevent="sumbitHandler">
        <h1 class="text-[#002b6b] font-semibold text-2xl mb-4">
          Meeting Room Booking:
        </h1>

        <div class="mb-4">
          <label for="person-name" class="text-sm text-[#2c3e50]"
            >Name of Person Booking</label
          >
          <input
            type="text"
            required
            v-model="form.name"
            class="border border-gray-300 rounded-md"
          />
        </div>
        <div class="mb-4">
          <label for="meeting-room" class="text-sm text-[#2c3e50]"
            >Meeting Room</label
          >
          <select
            v-model="form.room"
            required
            class="border border-gray-300 rounded-md"
          >
            <option value="Select Room">Select Room</option>
            <option value="Room A">Room A</option>
            <option value="Room B">Room B</option>
            <option value="Room C">Room C</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="date" class="text-sm text-[#2c3e50]">Date</label>
          <input
            type="date"
            v-model="form.date"
            required
            class="border border-gray-300 rounded-md"
          />
        </div>
        <div class="mb-4">
          <label for="startTime" class="text-sm text-[#2c3e50]"
            >Start Time</label
          >
          <input
            type="time"
            v-model="form.startTime"
            required
            class="border border-gray-300 rounded-md"
          />
        </div>
        <div class="mb-4">
          <label for="endTime" class="text-sm text-[#2c3e50]">End Time</label>
          <input
            type="time"
            v-model="form.endTime"
            required
            class="border border-gray-300 rounded-md"
          />
        </div>
        <div class="mb-4">
          <label for="no-of-people" class="text-sm text-[#2c3e50]"
            >Number of People</label
          >
          <input
            type="number"
            min="1"
            max="15"
            v-model="form.peopleCount"
            class="border border-gray-300 rounded-md"
          />
        </div>
        <div class="mb-4">
          <label for="purpose" class="text-sm text-[#2c3e50]">Purpose</label>
          <textarea
            v-model="form.purpose"
            class="border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <!-- <button
          type="submit"
          class="rounded-md bg-[#0047B2] text-[#e6edf7] py-3 px-6 text-md font-bold transition-all duration-300 hover:shadow-md"
        >
          Submit Booking
        </button> -->
        <Button
          type="submit"
          extra-class="py-3 px-6 text-md font-bold transition-all duration-300 hover:shadow-md"
          >Submit</Button
        >
      </form>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import bookings from "@/assets/bookingData";
export default {
  name: "BookingForm",
  components: {
    Button,
  },

  data() {
    return {
      bookings: bookings,
      // added for future usecase
      form: {
        name: "",
        room: "Select Room",
        date: "",
        startTime: "",
        endTime: "",
        peopleCount: 1,
        purpose: "",
        status: "Pending",
      },
    };
  },

  methods: {
    sumbitHandler() {
      console.log(this.form);
      bookings.push({ ...this.form });
      this.$toast.success("Booking Confirmed");
      //! resetting the values after user sumbits
      this.form = {
        name: "",
        room: "",
        date: "",
        startTime: "",
        endTime: "",
        peopleCount: 1,
        purpose: "",
        // status: "Pending",
      };
    },
  },
};
</script>

<style scoped>
input,
select,
textarea {
  width: 100%;
  padding: 8px;
}
</style>
