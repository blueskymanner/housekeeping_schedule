var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');


router.post('/send', function(req, res, next) {
    let oldSchedules = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/db.json')));

    //Find related item from Schedule data.
    let editSchedule = oldSchedules.map(oldSchedule => {
        if(req.body.aaa[0] == oldSchedule.date) {
            let newSchedule = [];
            for(let i = 0; i < req.body.aaa.length; i++){
                newSchedule[i] = {
                    id: oldSchedule.id+i,
                    date: req.body.aaa[i],
                    day: req.body.bbb[i],
                    shift: [req.body.ccc[i], req.body.ggg[i]],
                    ac_first: [req.body.ddd[i], req.body.hhh[i]],
                    ac_second: [req.body.eee[i], req.body.iii[i]],
                    fb_staff: [req.body.fff[i], req.body.jjj[i]]
                };
                console.log(newSchedule);
                return newSchedule;
            }
        }
        return oldSchedule;
    })


    // //Find related item from Schedule data.
    // let startId = oldSchedules.indexOf(schedule => schedule.date === req.body.aaa[0]);
    // let newSchedule = req.body.map((item, index) => {
    //     return {
    //         id: startId + index + 1,
    //         date: req.body.aaa[index],
    //         day: req.body.bbb[index],
    //         shift: [req.body.ccc[index], req.body.ggg[index]],
    //         ac_first: [req.body.ddd[index], req.body.hhh[index]],
    //         ac_second: [req.body.eee[index], req.body.iii[index]],
    //         fb_staff: [req.body.fff[index], req.body.jjj[index]]
    //     }
    // })
    // oldSchedules.slice(startId, req.body.aaa.length, newSchedule);


    // Modify a Schedule into original Schedule data.
    let updateSchedule = JSON.stringify(editSchedule, null, 2);
    fs.writeFileSync(path.resolve(__dirname,'../data/db.json'), updateSchedule)
    res.redirect('/');
});



//Create a new week Schedule.
// router.post('/send', function(req, res, next) {
//     let oldSchedules = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/db.json')));
//     let lastSchedule = oldSchedules.pop();
//     oldSchedules.push(lastSchedule);
    
//     //Get new Schedule content.
//     for (let i = 0; i < req.body.aaa.length; i++) {
//         let newSchedules = {
//             id: lastSchedule.id + i+1,
//             date: req.body.aaa[i],
//             day: req.body.bbb[i],
//             shift: [req.body.ccc[i], req.body.ggg[i]],
//             ac_first: [req.body.ddd[i], req.body.hhh[i]],
//             ac_second: [req.body.eee[i], req.body.iii[i]],
//             fb_staff: [req.body.fff[i], req.body.jjj[i]]
//         };

//         //Save a new Schedule into original Schedule data.
//         oldSchedules.push(newSchedules);
//         let newSchedulesString = JSON.stringify(oldSchedules, null, 2);
//         fs.writeFileSync(path.resolve(__dirname,'../data/db.json'), newSchedulesString);
//     }
//     //Redirect index page.
//     res.redirect('/');
// });

//Save First line edit data
router.post('/transfer_first', function(req, res, next) {
    let oldSchedules = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/db.json')));
    let edit_id = req.body.id;

    //Find related item from Schedule data.
    let editSchedule = oldSchedules.map(oldSchedule => {
        if(oldSchedule.id + '7777' == edit_id) {
            let newSchedule = {
                id: oldSchedule.id,
                date: oldSchedule.date,
                day: oldSchedule.day,
                shift: [oldSchedule.shift[0], oldSchedule.shift[1]],
                ac_first: [req.body.firstval, oldSchedule.ac_first[1]],
                ac_second: [req.body.secondval, oldSchedule.ac_second[1]],
                fb_staff: [req.body.thirdval, oldSchedule.fb_staff[1]]
            };
            return newSchedule;
        }
        return oldSchedule;
    })

    //Modify a Schedule into original Schedule data.
    let updateSchedule = JSON.stringify(editSchedule, null, 2);
    fs.writeFileSync(path.resolve(__dirname,'../data/db.json'), updateSchedule)

    //Return edited result Schedule
    let resultSchedule = {};
    resultSchedule.firstval = req.body.firstval;
    resultSchedule.secondval = req.body.secondval;
    resultSchedule.thirdval = req.body.thirdval;

    return res.send(resultSchedule);
});

//Save Second line edit data
router.post('/transfer_second', function(req, res, next) {
    let oldSchedules = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/db.json')));
    let edit_id = req.body.id;
    let editSchedule = oldSchedules.map(oldSchedule => {
        if(oldSchedule.id + '9999' == edit_id) {
            let newSchedule = {
                id: oldSchedule.id,
                date: oldSchedule.date,
                day: oldSchedule.day,
                shift: [oldSchedule.shift[0], oldSchedule.shift[1]],
                ac_first: [oldSchedule.ac_first[0], req.body.firstval],
                ac_second: [oldSchedule.ac_second[0], req.body.secondval],
                fb_staff: [oldSchedule.fb_staff[0], req.body.thirdval]
            };
            return newSchedule;
        }
        return oldSchedule;
    })

    //Modify a Schedule into original Schedule data.
    let updateSchedule = JSON.stringify(editSchedule, null, 2);
    fs.writeFileSync(path.resolve(__dirname,'../data/db.json'), updateSchedule)

    //Return edited result Schedule
    let resultSchedule = {};
    resultSchedule.firstval = req.body.firstval;
    resultSchedule.secondval = req.body.secondval;
    resultSchedule.thirdval = req.body.thirdval;

    return res.send(resultSchedule);
});

module.exports = router;
