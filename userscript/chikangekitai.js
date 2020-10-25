// ==UserScript==
// @name         置換撃退
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  置換して撃退します（？）
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
function(){
    document.body.innerHTML=document.body.innerHTML.replace(/鬼滅/g, 'キルミー').replace(/の刃/g, 'ベイベー');
})()

})();
