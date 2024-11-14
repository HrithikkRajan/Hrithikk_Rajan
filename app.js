// Export the module into app.js
const hm = require("./Hrithikk_Hotelmanagement.js");

// Add new hotel rooms.
console.log(hm.addRoom("103", "Triple", "450"));
console.log(hm.addRoom("102", "Double", "300"));

// Retrieve a specific hotel room's information.
console.log(hm.getRoomInfo("102"));

// Book a specific hotel room.
console.log(hm.bookRoom("102","David", "91234567", "11/11/2024", "21:31", "11/12/2024", "09:31"));

// Display all bookings.
console.log(hm.getAllBookings());

// Book out from the hotel room.
console.log(hm.bookOut("102"));

// Verify that the booking is no longer there.
console.log(hm.getAllBookings());

// Search for available "Double" Hotel rooms.
console.log(hm.searchAvailableRoomsByType("Double"));

// Extend an existing booking B1.
console.log(hm.extendBooking("B1", "12/12/2024", "22:00"));

// Verify the new booking details.
console.log(hm.getAllBookings());
