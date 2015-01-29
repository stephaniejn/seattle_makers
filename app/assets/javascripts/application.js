// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function() {

  $('#discover-btn').on('click', function(event){
    $(this)
      .addClass('animated zoomIn')
      .css({'color':'#fff', 'background-color':'#a88f6a', 'border-color':'#a88f6a'})
      .window(location.href='discover');
  });

  $('#start-btn').on('click', function(event){
    $(this)
      .addClass('animated zoomIn')
      .css({'color':'#fff', 'background-color':'#a88f6a', 'border-color':'#a88f6a'});
  });

  $('.ajax-button').on('click', function(event) {
    console.log("clicking!")
    event.preventDefault();
    event.stopPropagation();
    // alert($(ticket))
      var link = $(this);
      var url = link.attr('href');

      $.post(url, {}, function(ticket){
        console.log(ticket)
        // $(".credits").html(response)
        $(".credits").html("(" + ticket + ")")
        $(link).html('YOU ARE ATTENDING THIS EVENT').attr("disabled", true);

    },'json');
  });
});


