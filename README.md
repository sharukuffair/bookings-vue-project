## Project Deployed on Netlify

Link: https://meetingsbooking.netlify.app/

## Run Locally

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Features

- Navbar using Vue Routers
- Reusable components like Button,Card
- Hero section with CTA button & preview of current events
- Booking form with basic validation
- Website is responsive except navigation bar
- Toast notification on form submission
- Styling is done using TailwindCSS
- Booking data with Approve/Reject/Delete functionality with status changes based on actions

## Folder Structure & Components

components

    Navbar
    Button
    Card

views

    HomeView
    BookingCard
    BookingForm
    BookingTable

Router

    Index.js ->Contains the route-path
