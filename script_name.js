// ==UserScript==
// @name         FiverrBuyers
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.fiverr.com/users/<YOUR_FIVERR_USERNAME>/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        // your code here
        console.log('Done Loading.');
        var i = setInterval(function() {

            if (document.getElementsByClassName('user-pict-40')[0])
            {
                var list = document.getElementsByClassName("btn-standard btn-green-grad js-send-offer");
                for (let item of list) {
                    item.text = JSON.parse(item.getAttribute("data-meta"))['username'];
                }
                console.log('FiverrBuyers-Success');



                document.getElementsByClassName("db-load-more")[0].addEventListener("click", function(){

                    var j = setInterval(function() {
                        var list = document.getElementsByClassName("btn-standard btn-green-grad js-send-offer");
                        //console.log(list.length);
                        for (let item of list) {
                            item.text = JSON.parse(item.getAttribute("data-meta"))['username'];;
                        }
                        console.log("FiverrBuyers-Done");
                        if (list.length > 35) { clearInterval(j); }
                        else { console.log("CarryON"); }
                    },1000)


                });

                document.getElementsByClassName("js-search-submit btn-search")[0].addEventListener("click", function(){

                    var j = setInterval(function() {
                        var list = document.getElementsByClassName("btn-standard btn-green-grad js-send-offer");
                        //console.log(list.length);
                        for (let item of list) {
                            item.text = JSON.parse(item.getAttribute("data-meta"))['username'];;
                        }
                        console.log("FiverrBuyers-Done");
                        if (list.length > 35) { clearInterval(j); }
                        else { console.log("CarryON"); }
                    },1000)


                });

                clearInterval(i);
            }
            else
            {
                console.log('0');
            }

        }, 1000);
    }, false);


}
)();
