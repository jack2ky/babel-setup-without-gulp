"use strict";

//ES6 version

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 500);
}
//ES5 version
for (var i = 0; i < 10; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 500);
    })(i);
}