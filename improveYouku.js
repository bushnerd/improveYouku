
/*
(function() {
    'use strict';

    var playerBox = $('#playerBox');
    var settings_item = $('.settings-item.quality-item.disable.q1080p');
    
    /*
    var alltags = document.getElementsByTagName("*");

    
    settings_item.remove();
    
    var youku_layer_logo = $('.youku-layer-logo');
    youku_layer_logo = document.getElementsByClassName('spv-logo');
    youku_layer_logo.hide();
    */

//})();

$(document).ready(function(){
    'use strict';
    // 执行代码
    
    var settings_item = $('.disable.q1080p');
    settings_item.removeClass("disable");

    $('.rate-dashboard').append("<div data-val=\'1.25\' class=\'settings-item active\' data-eventlog=\'1.25\'>1.25x</div>");

    

    /*
    var alltags = document.getElementsByTagName("*");

    
    settings_item.remove();
    
    var youku_layer_logo = $('.youku-layer-logo');
    youku_layer_logo = document.getElementsByClassName('spv-logo');
    youku_layer_logo.hide();
    */
});