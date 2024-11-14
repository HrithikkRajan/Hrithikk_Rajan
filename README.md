# Assignment 1

This is a **Hotel Management API** designed to manage room bookings efficiently. It contains functions to manage hotel rooms, handle bookings, and to retrieve room and booking details.

## Table of Contents
1. [Set-Up Guide](#set-up-guide)
2. [Data](#data)
3. [Functions](#functions)
4. [References](#references)

# Set-Up Guide

To set up and run this node module, follow these steps:

**1. Clone the repository**: 

Run this command in terminal to clone the repository.

```
git clone https://github.com/HrithikkRajan/Hrithikk_WAD_Assignment1.git
```

**2. Navigate to the Project directory**: 
```
cd Hrithikk_WAD_Assignment1
```

**3. Export Module to app.js**:

Ensure that the app.js file in the repository contains the node module by looking for this line

```
const hm = require("./Hrithikk_Hotelmanagement.js");
```
**4. Run the node project**

To run the project, ensure that you first have Node.js installed in your system. Then enter this line into the project's integrated terminal.

```
node app.js
```

# Data

### 1. `roomTypeList` (Array of Strings)
An array of Strings that contain all the available room types.
```js
roomTypeList: ["Single", "Double", "Triple", "Suite"] //Selectable Room Types
```

### 2. `roomsList` (Array of JSON)
An array of JSON that contains all the hotel rooms.
```js
"roomsList": [
        {
            roomNo: "100",          //Room Number
            roomType: "Single",     //Room Type
            roomPrice: "150",       //Price of Room
            roomStatus: "Booked"    //Status of Room
        }]
```

### 3. `bookingsList` (Array of JSON)
An array of JSON that contains all of the room bookings.
```js
"bookingsList": [
        {
            bookingID: "B1",        //Booking ID
            roomNo: "100",          //Room Number
            name: "Jamus Lee",      //Guest Name
            phoneNo: "91234567",    //Phone Number of Guest
            start: {
                startDate: "11/11/2024",    //Start Date of booking
                startTime: "09:00",         //Start Time of booking
            },
            end: {
                endDate: "11/12/2024",      //End Date of booking
                endTime: "09:00"            //End Time of booking
            }

        },
    ],
```
# Functions

## 1. addRoom
```js
addRoom(roomNo, roomType, roomPrice, roomStatus = "Available")
```


### Explanation
- Adds a new hotel room into `RoomsList` Array
- Only room types from roomtypesList are allowed


**Parameters**:
  - `roomNo` (string): Room number.
  - `roomType` (string): Type of room
  - `roomPrice` (string): Price of the room.
  - `roomStatus` (string, optional): Status of the room, it's already set to "Available" by default, so no need to add in.

  **To Use**:
  
  - Invoke this function in `app.js`
  ```js
  console.log(hm.addRoom("103", "Triple", "450"));
  ```
  
- **Returns**: Success message with room details or an error message if the room already exists.
```js
Room number 103 added successfully.
Room Number: 103
Room Type: Triple
Room Price: 450
Room Status: Available
```

## 2. getRoomInfo
```js
getRoomInfo(roomNo)
```
### Explanation
- Retrieves the information of a specific hotel room in `RoomsList` by `roomNo`

**Parameters**:
- `roomNo` (string): Room number

**To Use**:

- Invoke this function in `app.js`
```js
console.log(hm.getRoomInfo("102"));
```

- **Returns**: The information of the selected room if it exists or an error message if it does not.

```js
Room details for room number 102:
Room Number: 102
Room Type: Double
Room Price: 300
Room Status: Available
```

## 3. bookRoom
```js
bookRoom(roomNo, name, phoneNo, startDate, startTime, endDate, endTime)
```
### Explanation
- Books a specific Hotel room.
- Adds the booking to the `bookingsList` with booking details
- Checks if the requested room is available first
- Sets room's status to 'Booked' after booking

**Parameters**:
- `roomNo` (string): Room number
- `name` (string): Guest's name
- `phoneNo` (string): Guest's phone number
- `startDate` (string): Start Date of Booking
- `startTime` (string): Start Time of Booking
- `endDate` (string): End Date of Booking
- `endTime` (string): End Time of Booking

**To Use**:

- Invoke this function in `app.js`
```js
console.log(hm.bookRoom("102","David", "91234567", "11/11/2024", "21:31", "11/12/2024", "09:31"));
```

- **Returns**: Success message stating that the Room number has been booked or an error message if room number or room type is invalid.
```js
Room number 102 has been booked successfully.

Booking Details:
Booking ID: B2
Room Number: 102
Guest Name: David
Phone Number: 91234567
Start Date: 11/11/2024 at 21:31
End Date: 11/12/2024 at 09:31
```

## 4. extendBooking
```js
extendBooking(bookingID, newEndDate, newEndTime)
```
### Explanation
- To update the End date & time of a particular booking from `BookingsList`

**Parameters**:
- `bookingID` (string): The Booking ID
- `newEndDate` (string): The new End Date for the booking
- `newEndTime` (string): the new End Time for the booking

**To Use**:

- Invoke this function in `app.js`
```js
console.log(hm.extendBooking("B1", "12/12/2024", "22:00"));
```

- **Returns**: Success message stating that the booking has been extended and the new End Date & Time if the `bookingID` exists.
```js
Booking B1 has been extended successfully.
New End Date: 12/12/2024
New End Time: 22:00
```

## 5. bookOut
```js
bookOut(roomNo)
```
### Explanation
- To book out from a particular hotel room.
- To remove a booking from `bookingsList` and set the status of the respective room back to `available`

**Parameters**:
- `roomNo` (string): Room number

**To Use**:

- Invoke this function in `app.js`
```js
console.log(hm.bookOut("102"));
```

- **Returns**: Success message stating that room has been booked out.
```js
Room number 102 has been booked out successfully.     
```

## 6. searchAvailableRoomsByType
```js
searchAvailableRoomsByType(roomType)
```
### Explanation
- To retrieve and display a list of all available room details of a specific `roomType`.

**Parameters**:
- `roomType` (string): Room Type

**To Use**:

- Invoke this function in `app.js`
```js
console.log(hm.searchAvailableRoomsByType("Double"));
```

- **Returns**: All available rooms details of the selected type.
```js
Available rooms for type "Double":

Room Number: 200
Room Type: Double
Room Price: 300
Room Status: Available
```

## 7. getAllBookings
```js
getAllBookings()
```
### Explanation
- To retrieve and display all bookings stored inside `bookingsList` array.

**Parameters**:
- `roomType` (string): Room Type

**To Use**:

- Invoke this function in `app.js`
```js
console.log(hm.searchAvailableRoomsByType("Double"));
```

- **Returns**: All available rooms details of the selected type.
```js
All current bookings:

Booking ID: B1
Room Number: 100
Guest name: Jamus Lee
Phone number: 91234567
Start date: 11/11/2024 at 09:00
End date: 12/12/2024 at 22:00
```

# References
Provide the references that you have used to support your assignment. 

 https://www.w3schools.com/js/ - Learnt how to use javascript for loops, .include, .splice, 

 https://www.google.com - Learnt about the different kinds of hotel rooms, e.g Single, Double, Triple, Suite.

 https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
