'use strict'

const fs = require('fs');
const express = require('express');
const app = express();

let cat = "physics";

app.use(express.static('public'));

app.get('/index', function (req, res) {
    cat = "physics";
    let topic = req.query.topic;
    if(topic != undefined){
        cat = topic;
        console.log("cat: "+ topic);
    }
    fs.readFile('public/index.html', (err, mData) => {
        fs.readFile('categories/'+cat+".html", (err, data) => {
            if(err){
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

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});