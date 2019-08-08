# Fiverr_BuyersRequest_Filter
Tampermonkey/Greasemonkey scripts for Sellers.  

`script_filter.js` filters out Buyers requests on Fiverr with specified keywords.  
`script_name.js` modifies the `Send Request` button and replaces it with the Buyer's name.  

Replace the following line-7 in both scripts with your Fiverr username:  
`// @match        https://www.fiverr.com/users/<YOUR_FIVERR_USERNAME>/requests`  
  
Replace the following line-18 in `script_filter.js` with your own set of filter keywords:  
`var re = new RegExp(/linux|bash|ssh|ssl|scraping|selenium|arduino|esp8266|raspberry|vps|server|python/, "i");`
