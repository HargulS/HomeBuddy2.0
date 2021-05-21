const express = require("express");
const router = express.Router();
const fs = require("fs"); // file system module
const { Server, request } = require("http");
const { userInfo } = require("os");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const readData = path.join(__dirname, "../data/userData.json");

function listUserData() {
  const data = fs.readFileSync(readData);
  // JSON to JS: getting the data from JSON and converting to JS so that we can use it
  return JSON.parse(data);
}
router.get("/", (req, res) => {
  res.json(listUserData());
});

function getUserDataByID(id) {
  const dataArray = listUserData();
  let filteredItem = dataArray.filter((item) => item.id === id);
  if (dataArray.length) {
    return filteredItem;
  } else {
    return "The record you are looking for does not exist";
  }
}
//key that is created which is coming from info requested
router.get("/:id", (req, res) => {
  res.json(getUserDataByID(req.params.id));
});

function saveUserSession(body) {
  const dataArray = listUserData();
  const newArray = NewListUserData(body);
  dataArray.push(newArray);
  //.stringify: when info is recieved in JS and needs to be converted in JSON
  fs.writeFileSync(readData, JSON.stringify(dataArray));
  return newArray;
}
function NewListUserData(body) {
  return {
    id: uuidv4(),
    name: body.name,
    age: body.age,
    location: body.location,
    income: body.income,
    liabilities: body.liabilities,
    mortgage:body.mortgage,
    mortgageInstallment:body.mortgageInstallment,
    savings:body.savings,
    contributions:body.contributions,
    interest:body.interest,
    years:body.years,
    futureValue: body.futureValue
  }
}
router.post("/", (req, res) => {
  res.json(saveUserSession(req.body));
});


function update(id,data){
  const dataArray = listUserData();
  const filteredObject = dataArray.filter((item)=>item.id===id);
  filteredObject[0].savings=data.savings
  filteredObject[0].contributions=data.contributions
  filteredObject[0].interest=data.interest
  filteredObject[0].years=data.years
  filteredObject[0].futureValue=data.futureValue
 const filteredArray = dataArray.filter((item) => item.id !== id);
filteredArray.push(filteredObject[0])
  fs.writeFileSync(readData, JSON.stringify(filteredArray))
 return filteredObject[0]
}



router.put("/:id",(req, res)=>{
  res.status(200).json(update(req.params.id,req.body))
})
module.exports = router;
