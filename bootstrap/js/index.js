'use strict'

var fs = require('fs');

var path = '../images/';
var folders = fs.readdirSync(path);

var items = {};

folders.forEach(function(fold) {
    if (fold.indexOf('.') == -1) {
        var imgs = fs.readdirSync(path + fold);
        items[fold] = imgs;
    }
}, this);

console.log(items);
fs.writeFileSync('items.js', JSON.stringify(items));