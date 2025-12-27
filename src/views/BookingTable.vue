<template>
  <div class="w-[85%] mt-12 mx-auto">
    <h2 class="text-xl font-semibold mb-4 text-[#002b6b]">My Bookings:</h2>
    <table class="booking-table">
      <thead>
        <tr class="bg-[#e6edf7] text-[#002b6b]">
          <th>Name</th>
          <th>Meeting Room</th>
          <th>Date</th>
          <th>Time</th>
          <th>Purpose</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody class="relative">
        <!-- delete dailog box -->
        <div
          class="w-[300px] h-[150px] origin-center border rounded-md absolute bg-gray-50 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <div class="p-4">
            <div class="flex justify-between items-center">
              <span class="text-sm">Delete Confirmation</span>
              <i class="fa-solid fa-xmark text-sm"></i>
            </div>
            <div class="text-center mt-4 space-y-2">
              <p class="text-lg">Are you sure?</p>
              <div class="flex justify-evenly">
                <span
                  class="border border-green-300 rounded-md py-1 px-2 text-sm bg-green-600 text-white hover:bg-green-800 transition-all duration-300 cursor-pointer"
                  >Yes <i class="fa-solid fa-check"></i
                ></span>
                <span
                  class="border border-red-300 rounded-md py-1 px-2 text-sm bg-red-600 text-white hover:bg-red-800 transition-all duration-300 cursor-pointer"
                  >No <i class="fa-solid fa-xmark"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
        <tr v-for="booking in bookings" :key="booking.id">
          <td>{{ booking.name }}</td>
          <td>{{ booking.room }}</td>
          <td>{{ booking.date }}</td>
          <td>{{ booking.startTime }} - {{ booking.endTime }}</td>
          <td>{{ booking.purpose }}</td>

          <td>
            <span
              :class="statusClass(booking.status)"
              class="text-white py-1 px-2 rounded-full text-[12px]"
            >
              {{ booking.status }}
            </span>
          </td>

          <td class="space-x-4">
            <button
              @click="approveBooking(booking.id)"
              class="border rounded-md border-green-300 bg-green-100 text-sm py-1 px-2"
            >
              Approve
            </button>
            <button
              @click="rejectBooking(booking.id)"
              class="border rounded-md border-yellow-300 bg-yellow-100 text-sm py-1 px-2"
            >
              Reject
            </button>
            <button
              @click="deleteBooking(booking.id)"
              class="border rounded-md border-red-300 bg-red-100 text-sm py-1 px-2"
            >
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td v-if="bookings.length === 0">No Bookings Left.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import bookingData from "../assets/bookingData";

export default {
  name: "BookingTable",
  data() {
    return {
      bookings: bookingData,
    };
  },

  methods: {
    approveBooking(id) {
      const booking = this.bookings.find((booking) => booking.id === id);
      if (booking) {
        booking.status = "Approved";
      }
    },

    rejectBooking(id) {
      const booking = this.bookings.find((booking) => booking.id === id);
      if (booking) {
        booking.status = "Rejected";
      }
    },

    deleteBooking(id) {
      this.bookings = this.bookings.filter((booking) => booking.id !== id);
      this.$toast.error("Deleted Successfully");
    },

    statusClass(status) {
      return {
        badge: true,
        pending: status === "Pending",
        approved: status === "Approved",
        rejected: status === "Rejected",
      };
    },
  },
};
</script>
<style scoped>
.config-btn {
  display: none;
}
.booking-table {
  width: 100%;
  border-collapse: collapse;
}

.booking-table th,
.booking-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.pending {
  background-color: gray;
}

.approved {
  background-color: green;
}

.rejected {
  background-color: red;
}
</style>
