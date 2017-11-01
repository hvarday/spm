var	userModel = require('../models/user'),
    roomModel = require('../models/room');

data =[
 {
   "name": "Arjun Kumar",
   "regno": "14BCE0001",
   "cgpa": 9.5,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "Ronak Seth",
   "regno": "14BCE0002",
   "cgpa": 9.4,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "Apoorv Jain",
   "regno": "14BCE0045",
   "cgpa": 9.3,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "Ritik Saxena",
   "regno": "14BCE0567",
   "cgpa": 9.2,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "PRAYAS GARG",
   "regno": "14BCE0763",
   "cgpa": 9.1,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "JAYASH MISHRA",
   "regno": "14BCE0325",
   "cgpa": 9,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "HARSHIT SINGHAL",
   "regno": "14BCE0787",
   "cgpa": 8.9,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "RAGHAV SHARMA",
   "regno": "14BCE0700",
   "cgpa": 8.8,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "SAMEER KHAN",
   "regno": "14BCE0101",
   "cgpa": 8.7,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "RAJAT SINGH",
   "regno": "14BCE0102",
   "cgpa": 8.6,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "MANAV KAUL",
   "regno": "14BCE0108",
   "cgpa": 8.5,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "ARUN KUMAR",
   "regno": "14BCE0109",
   "cgpa": 8.4,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "ADITYA SINGHA",
   "regno": "14BCE0110",
   "cgpa": 8.3,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "SHIVAM SHARMA",
   "regno": "14BCE0111",
   "cgpa": 8.2,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "ANISH GUPTA",
   "regno": "14BCE0112",
   "cgpa": 8.1,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "RITVIK SINGH",
   "regno": "14BCE0113",
   "cgpa": 8,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "HARSH RANJAN",
   "regno": "14BCE0114",
   "cgpa": 7.9,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "ROHAN SHARMA",
   "regno": "14BCE0115",
   "cgpa": 7.8,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "RAHUL GUPTA",
   "regno": "14BCE0116",
   "cgpa": 7.7,
   "branch": "CSE",
   "status": 0
 },
 {
   "name": "MEHUL DUTT",
   "regno": "14BCE0117",
   "cgpa": 7.6,
   "branch": "CSE",
   "status": 0
 }
];

rooms =[
 {
   "room": "A001(NAC)"
 },
 {
   "room": "A002(NAC)"
 },
 {
   "room": "A003(NAC)"
 },
 {
   "room": "A004(NAC)"
 },
 {
   "room": "A005(NAC)"
 },
 {
   "room": "A006(AC)"
 },
 {
   "room": "A007(AC)"
 },
 {
   "room": "A008(AC)"
 },
 {
   "room": "A009(AC)"
 },
 {
   "room": "A010(AC)"
 },
 {
   "room": "E101(AC)"
 },
 {
   "room": "E102(NAC)"
 },
 {
   "room": "E103(NAC)"
 },
 {
   "room": "E104(AC)"
 },
 {
   "room": "E105(NAC)"
 }
]

function seed(){
	
// rooms.forEach((e)=>{
//     e.name = e.room;
//     console.log(e.text);
//     new roomModel(e).save().catch((err)=>{console.log(err)});
// });

// data.forEach((e)=>{
//     e.username = e.regno;
//     e.password = "pass";
//     new userModel(e).save();
// });
	
}

module.exports = seed;