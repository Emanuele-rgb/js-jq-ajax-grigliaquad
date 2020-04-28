$(document).ready(function () {

  var boxes = $('.box');


boxes.click(function(){

var self = $(this);


$.ajax({

  url:'https://flynn.boolean.careers/exercises/api/random/int',
  method: 'GET',
  success:function(res) {
    console.log(res)
    var number = res.response;

  if (number <= 5){

  self.addClass('yellow')
  self.removeClass('green')
  }

  else {

    self.addClass('green')
    self.removeClass('yellow')
  }


self.text(number);

  },
  error: function (){
    console.log('Error')
  }

  })

})

})
