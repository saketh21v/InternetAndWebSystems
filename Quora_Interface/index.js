'use strict'

const fs = require('fs');
const request = require('request');
const express = require('express');
const app = express();

const _GEOLOC_API = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=';
const _CONTINET = require("./lib/continents");

let cat = "physics";

app.get('/', (req, res) => {
    console.log("/ location");
    res.redirect('/index');
});

app.use(express.static('public'));

app.get('/index', function (req, res) {
    cat = "physics";
    let topic = req.query.topic;
    if (topic != undefined) {
        cat = topic;
        console.log("cat: " + topic);
    }
    fs.readFile('public/index.html', (err, mData) => {
        fs.readFile('categories/' + cat + ".html", (err, data) => {
            if (err) {
                let mDataStr = mData.toString();
                mDataStr = mDataStr.replace("###%%%###", "Sorry! No such topic");
                return res.end(mDataStr);
            }
            let mDataStr = mData.toString();
            let stuff = data.toString();
            mDataStr = mDataStr.replace("###%%%###", data);
            res.end(mDataStr);
        });
    });
});

// app.get('/location', (req, res) => {
//     let lat = req.query.lat;
//     let long = req.query.long;

//     if (lat == undefined || long == undefined) {
//         res.end("Error");
//     } else {
//         request(_GEOLOC_API + lat + ',' + long, (err, body, result) => {
//             if(err){
//                 return console.log("Error!!!");
//             }
//             console.log("BODY: " + body.toString());
//             var r = JSON.parse(body);
//             var countryID = res.results[res.results.length - 1].address_components[0].short_name;
//             console.log("CONTINENT : " + _CONTINENT[countryID]);
//             res.end(_CONTINENT[countryID]);
//         });
//     }
//     res.end("ERROR");
// });

app.get('/trending', (req, res) => {
    console.log("Trending requested");    
    let continent = req.query.continent;
    if (continent == undefined) {
        console.log("Error. continent unndefined");
        return res.end("Error");
    }
    // fs.readFile('public/index.html', (err, mData) => {
    fs.readFile('trending/' + continent + ".html", (err, data) => {
        if (err) {
            // let mDataStr = mData.toString();
            // mDataStr = mDataStr.replace("###%%%###", "Sorry! No such trending");
            console.log("Error. No such file");
            return res.end("Error");
        }
        // let mDataStr = mData.toString();
        // let stuff = data.toString();
        // mDataStr = mDataStr.replace("###%%%###", data);
        // console.log("Sending data : " + data.toString());``
        res.end(data.toString());
    });
    // });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});