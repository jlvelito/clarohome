$(document).ready(function(){


  $('.fa-minus.simple').click(function(){
    var numPerson = $('#personas').val();
    var parent = $(this).parent();
    var inputInfo = parent.find('input[type="text"]');
    var actualVal = inputInfo.val();
    var multiplier = inputInfo.data('multiplier');
    if(actualVal == ""){
      inputInfo.val(0);
    }else if(actualVal <= 1) {
      inputInfo.val(0);
    }else{
      inputInfo.val(actualVal-1);
    }
  });

  $('.fa-plus.simple').click(function(){
    var numPerson = $('#personas').val();
    var parent = $(this).parent();
    var inputInfo = parent.find('input[type="text"]');
    var actualVal = inputInfo.val();
    var multiplier = inputInfo.data('multiplier');
    if(actualVal == ""){
      inputInfo.val(1);
    }else if(actualVal < numPerson*multiplier) {
      inputInfo.val(parseInt(actualVal)+1);
    }else{
      inputInfo.val(actualVal);
    }
  });


    $('.fa-minus.main-men').click(function(){
      var parent = $(this).parent();
      var inputInfo = parent.find('input[type="text"]');
      var actualVal = inputInfo.val();
      if(actualVal == ""){
        inputInfo.val(1);
      }else if(actualVal <= 1) {
        inputInfo.val(1);
      }else{
        inputInfo.val(actualVal-1);
      }
    });

  $('.fa-plus.main-plus').click(function(){
    var parent = $(this).parent();
    var inputInfo = parent.find('input[type="text"]');
    var actualVal = inputInfo.val();
    if(actualVal == ""){
      inputInfo.val(1);
      console.log('work');
    }else if(actualVal <= 0) {
      inputInfo.val(1);
      console.log('work 2');
    }else{
      inputInfo.val(parseInt(actualVal)+1);
      console.log('work 3');
    }
  });


});
