// ==UserScript==
// @name         FiverrBuyersSelected
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.fiverr.com/users/<YOUR_FIVERR_USERNAME>/requests
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        // your code here
        console.log('Done Loading.');

        var i = setInterval(function() {
            var re = new RegExp(/linux|bash|ssh|ssl|scraping|selenium|arduino|esp8266|raspberry|vps|server|python/, "i");

            if (document.getElementsByClassName('user-pict-40')[0])
            {
                //var list = document.getElementsByClassName("btn-standard btn-green-grad js-send-offer");
                var list = document.getElementsByTagName("tbody")[0].children;
                for (let item of list) {
                    try {
                        var text = JSON.parse(item.children[5].children[0].children[1].getAttribute("data-meta"))["requestText"];
                        if (text.match(re)==null)
                        {
                            item.style.display="none";
                        }
                        else
                        {
                            //console.log(text.match(re));
                            //console.log("Count:"+count);
                        }
                    } catch(e) {
                                 console.log("Sent Offer");
                    }
                }
                console.log('FiverrBuyersSelected-Success');

                document.getElementsByClassName("db-load-more")[0].addEventListener("click", function(){

                    var j = setInterval(function() {
                        //var list = document.getElementsByClassName("btn-standard btn-green-grad js-send-offer");
                        var list = document.getElementsByTagName("tbody")[0].children;
                        console.log(list.length);
                        var sentOffers=0;
                        //console.log(re);
                        for (let item of list) {
                             try {
                                 var text = JSON.parse(item.children[5].children[0].children[1].getAttribute("data-meta"))["requestText"];
                                 if (text.match(re)==null)
                                 {
                                     item.style.display="none";
                                 }
                                 else
                                 {
                                     //console.log(text.match(re));
                                     //console.log("Count:"+count);
                                 }
                             } catch(e) {
                                 sentOffers++;
                             }
                        }
                        console.log("FiverrBuyersSelected-Done");
                        console.log("Sent Offers:"+sentOffers);
                        if (list.length > 35) { clearInterval(j); }
                        else { console.log("CarryON"); }
                    },3000)


                });

                clearInterval(i);
            }
            else
            {
                alert("Error");
            }

        }, 3000);
    }, false);


}
)();






