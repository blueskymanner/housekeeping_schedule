var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  let weekid = req.query.weekId;
  let weeks = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/week.json')));
  let allSchedules = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/db.json')));
  
  //Select week range.
  if(weekid) {
    let schedules = allSchedules.filter(Schedule => (weekid-1)*7+1 <= Schedule.id  && Schedule.id <= (weekid-1)*7+7);
    return res.send(schedules);
  }
  //Get first render data
  let schedules = allSchedules.filter(Schedule => Schedule.id < 8)
  res.render(path.resolve(__dirname, '../views/index'), {schedules, weeks});
});

module.exports = router;
