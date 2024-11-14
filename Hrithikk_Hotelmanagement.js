module.exports = {
    "roomTypeList": ["Single", "Double", "Triple", "Suite"],

    "roomsList": [
        {
            roomNo: "100",
            roomType: "Single",
            roomPrice: "150",
            roomStatus: "Booked"
        },
        {
            roomNo: "101",
            roomType: "Single",
            roomPrice: "150",
            roomStatus: "Available"
        },
        {
            roomNo: "200",
            roomType: "Double",
            roomPrice: "300",
            roomStatus: "Available"
        },
        {
            roomNo: "300",
            roomType: "Suite",
            roomPrice: "700",
            roomStatus: "Available"
        },
    ],
    "bookingsList": [
        {
            bookingID: "B1",
            roomNo: "100",
            name: "Jamus Lee",
            phoneNo: "91234567",
            start: {
                startDate: "11/11/2024",
                startTime: "09:00",
            },
            end: {
                endDate: "11/12/2024",
                endTime: "09:00"
            }

        },
    ],

    "bookingCounter": 2,

    /**
    * Function 1: addRoom
    * Adds a new room to RoomsList.
    * @param {string} roomNo - The room number, e.g 100
    * @param {string} roomType - The type of room, e.g "Single", "Double", "Triple", "Suite"
    * @param {string} roomPrice - The price of the room, e.g 150
    * @param {string} [roomStatus] - The status of the room
    * @returns {string} - Returns success message with new room's details / error message
    */
    addRoom(roomNo, roomType, roomPrice, roomStatus = "Available") {

        //check if the room type selected is amongst the selectable options stored in the roomTypesList
        if (!this.roomTypeList.includes(roomType)) {
            return `Error: Invalid room type.`
        }

        //check if room number already exists
        for (let i = 0; i < this.roomsList.length; i++) {
            if (this.roomsList[i].roomNo == roomNo) {
                return `Error: Room number ${roomNo} already exists.`;
            }
        }
        const newRoom = { roomNo, roomType, roomPrice, roomStatus };

        //add new room to roomsList
        this.roomsList.push(newRoom);

        //display the success message and the information of the newly added room.
        return `Room Number ${roomNo} added successfully.\n` +
            `Room Number: ${newRoom.roomNo}\n` +
            `Room Type: ${newRoom.roomType}\n` +
            `Room Price: ${newRoom.roomPrice}\n` +
            `Room Status: ${newRoom.roomStatus}\n` + '----------------------------------\n';
    },

    /**
    * Function 2: getRoomInfo
    * Retrieves the information of a specific room.
    * @param {string} roomNo - The room number, e.g 100
    * @returns {string} - Returns room details / error message
    */
    getRoomInfo(roomNo) {
        for (let i = 0; i < this.roomsList.length; i++) {
            //check if the given roomNo exists inside roomsList
            if (this.roomsList[i].roomNo == roomNo) {       
                const room = this.roomsList[i];

                //return room details for the requested roomNo
                return `Room details for room number ${roomNo}:\n` +
                    `Room Number: ${room.roomNo}\n` +
                    `Room Type: ${room.roomType}\n` +
                    `Room Price: ${room.roomPrice}\n` +
                    `Room Status: ${room.roomStatus}\n` + '\n----------------------------------\n';
            }
        }
        //return error if room number does not exist inside roomsList.
        return `Error: Room number ${roomNo} not found`; 
    },

    /**
    * Function 3: bookRoom
    * Books a specific room while adding this booking to the bookingsList
    * @param {string} roomNo - The room number, e.g 100
    * @param {string} name - The name of the guest
    * @param {string} phoneNo - Theb guest's phone number
    * @param {string} startDate - The start date of the booking
    * @param {string} startTime - The start time of the booking
    * @param {string} endDate - The end date of the booking
    * @param {string} endTime - The end time of the booking
    * @returns {string} - Returns success message showing the new booking / error message
    */
    bookRoom(roomNo, name, phoneNo, startDate, startTime, endDate, endTime) {
        for (let i = 0; i < this.roomsList.length; i++) {
            //checks if given roomNo exists inside roomsList
            if (this.roomsList[i].roomNo == roomNo) { 
                // checks if the requested room's status is available.
                if (this.roomsList[i].roomStatus == "Available") { 

                    //create a new booking object with booking details
                    const newBooking = {
                        bookingID: `B${this.bookingCounter++}`, //generate a unique bookingID
                        roomNo,
                        name,
                        phoneNo,
                        start: {
                            startDate,
                            startTime
                        },
                        end: {
                            endDate,
                            endTime
                        }
                    };

                    //add the new booking into bookingsList and set the room's status to 'Booked'.
                    this.bookingsList.push(newBooking);
                    this.roomsList[i].roomStatus = "Booked";

                    //return a success message with the booking details.
                    return `Room number ${roomNo} has been booked successfully.\n\n` +
                        `Booking Details:\n` +
                        `Booking ID: ${newBooking.bookingID}\n` +
                        `Room Number: ${newBooking.roomNo}\n` +
                        `Guest Name: ${newBooking.name}\n` +
                        `Phone Number: ${newBooking.phoneNo}\n` +
                        `Start Date: ${newBooking.start.startDate} at ${newBooking.start.startTime}\n` +
                        `End Date: ${newBooking.end.endDate} at ${newBooking.end.endTime}\n` + '\n----------------------------------\n';
                }
                //return error message if that specific room number is booked
                return `Error: Room Number ${roomNo} is already booked.`;
            }
        }
        //return error message if room number does not exist in roomsList
        return `Error: Room number ${roomNo} does not exist.`;
    },

     /**
    * Function 4: extendBooking
    * Extends the duration of a specific booking.
    * @param {string} bookingID - The booking ID
    * @param {string} newEndDate - The end date of the booking
    * @param {string} newEndTime - The end time of the booking
    * @returns {string} - Returns success message showing the new booking / error message
    */
    extendBooking(bookingID, newEndDate, newEndTime) {
        for (let i = 0; i < this.bookingsList.length; i++) {

            //checks if given bookingID exists inside bookingsList
            if (this.bookingsList[i].bookingID == bookingID) {

                //update the old endDate & endTime with newEndDate & newEndTime
                this.bookingsList[i].end.endDate = newEndDate;
                this.bookingsList[i].end.endTime = newEndTime;

                //return a success message with the new end date and time.
                return `Booking ${bookingID} has been extended successfully.\n` +
                    `New End Date: ${this.bookingsList[i].end.endDate}\n` +
                    `New End Time: ${this.bookingsList[i].end.endTime}\n` +
                    '----------------------------------';
            }
        }
        //return error message if given bookingID does not exist within bookingsList
        return `Error: Booking ID:${bookingID} does not exist.`
    },

    /**
    * Function 5: bookOut
    * Books out from a specific room while removing the respective booking out of the bookingsList.
    * @param {string} roomNo - The room number, e.g 100
    * @returns {string} - Returns success message / error message
    */
    bookOut(roomNo) {
        for (let i = 0; i < this.roomsList.length; i++) {
            if (this.roomsList[i].roomNo == roomNo) {
                //checks if the room's status is 'Booked' and set it to 'Available' if it is.
                if (this.roomsList[i].roomStatus == "Booked") {
                    this.roomsList[i].roomStatus = "Available";

                    
                    for (let x = 0; x < this.bookingsList.length; x++) {
                        //checks if the given roomNo exists within bookingsList and removes the booking from bookingsList
                        if (this.bookingsList[x].roomNo == roomNo) {
                            this.bookingsList.splice(x, 1); 
                            break; 
                        }
                    }
                    return `Room number ${roomNo} has been booked out successfully.`;
                }
                return `Error: Room number ${roomNo} is not currently booked.`;
            }
        }
        return `Error: Room number ${roomNo} does not exist.`;
    },

    /**
   * Function 6: searchAvailableRoomsByType
   * Books out from a specific room while removing the respective booking out of the bookingsList.
   * @param {string} roomType - The type of room, e.g "Single", "Double", "Triple", "Suite"
   * @returns {string} - Returns available rooms / error message
   */
    searchAvailableRoomsByType(roomType) {
        //check if the room type selected is amongst the selectable options stored in the roomTypesList or all room types.
        if (!this.roomTypeList.includes(roomType) && roomType !== "All") {
            return `Error: Invalid room type.`
        }

        let availableRooms = []; //new empty array to store available rooms.

        for (let i = 0; i < this.roomsList.length; i++) {
            const room = this.roomsList[i];

            //checks if room status is available and matches the requested room type or if all room types were requested
            if (room.roomStatus == "Available" && (roomType == "All" || room.roomType == roomType)) {
                availableRooms.push(room);
            }
        }
        if (availableRooms.length == 0) {
            return `There are no available rooms for room type: ${roomType}`;
        }

        //display all available rooms for the requested room type or 'All'
        let displayMessage = `Available rooms for type "${roomType}":\n\n`;

        for (let i = 0; i < availableRooms.length; i++) {
            const room = availableRooms[i];
            displayMessage = displayMessage + "Room Number: " + room.roomNo + "\n" +
                "Room Type: " + room.roomType + "\n" +
                "Room Price: " + room.roomPrice + "\n" +
                "Room Status: " + room.roomStatus + "\n\n" + '----------------------------------\n';
        }

        return displayMessage;
    },

    /**
   * Function 7: getAllBookings
   * Retrieves all of the stored bookings from bookingsList
   * @returns {string} - Returns all bookings / error message
   */
    getAllBookings() {

        //check if bookingsList is empty
        if (this.bookingsList.length == 0) {
            return `There are currently no bookings available.`
        }

        //display all current bookings inside bookingsList
        let displayMessage = `All current bookings:\n\n`;

        for (let i = 0; i < this.bookingsList.length; i++) {
            const booking = this.bookingsList[i];
            displayMessage = displayMessage + "Booking ID: " + booking.bookingID + "\n" + "Room Number: " + booking.roomNo + "\n" +
                "Guest name: " + booking.name + "\n" +
                "Phone number: " + booking.phoneNo + "\n" +
                "Start date: " + booking.start.startDate + " at " + booking.start.startTime + "\n" +
                "End date: " + booking.end.endDate + " at " + booking.end.endTime + "\n\n";
        }

        return displayMessage + '\n----------------------------------\n';
    }
};
