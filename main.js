$(document).ready(function () {

  var boxes = $('.box')


boxes.click(function(){

var self = $(this);


$.ajax({

  url:'https://flynn.boolean.careers/exercises/api/random/int',
  method: 'GET',
  success:function(res) {
    console.log(res)
    var number = res.response;


      self.text(number);

$('.box').on('click', function(){



  if (number >= 5){

  $(this).addClass('yellow')
  $(this).removeClass('green')
  }

  else if (number < 5) {
    $(this).addClass('green')
    $(this).removeClass('yellow')
  }
})



  },
  error: function (){
    console.log('Error')
  }

  })

})

})
