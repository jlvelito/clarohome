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

  $('.usetype').on('click',function(){
    $(this).toggleClass('active');
  });

  var calcFono = 0;
  var calcLapt = 0;
  var calcTvs = 0;
  var calcConsol = 0;

  $('#calc').on('click',function(){
    $('#usarFonos ul li.active').each(function(){
      var valor = parseFloat($(this).attr('data-use'));
      var fonoValor = parseInt($('#telefonos').val());
      calcFono = calcFono + valor;
      $('#fonoCalc').val(calcFono*fonoValor);
      console.log(calcFono*fonoValor);
    });
    $('#usarLaptop ul li.active').each(function(){
      var valor = parseFloat($(this).attr('data-use'));
      var fonoValor = parseInt($('#laptops').val());
      calcLapt = calcLapt + valor;
      $('#laptopCalc').val(calcLapt*fonoValor);
      console.log(calcLapt*fonoValor);
    });
    $('#usarTv ul li.active').each(function(){
      var valor = parseFloat($(this).attr('data-use'));
      var fonoValor = parseInt($('#tv').val());
      calcTvs = calcTvs + valor;
      $('#tvCalc').val(calcTvs*fonoValor);
      console.log(calcTvs*fonoValor);
    });
    $('#usarConsola ul li.active').each(function(){
      var valor = parseFloat($(this).attr('data-use'));
      var fonoValor = parseInt($('#consola').val());
      calcConsol = calcConsol + valor;
      $('#consolaCalc').val(calcConsol*fonoValor);
      console.log(calcConsol*fonoValor);
    });

    setTimeout(function(){
      var calcFono2 = parseFloat($('#fonoCalc').val());
      var calcLapt2 = parseFloat($('#laptopCalc').val());
      var calcTvs2 = parseFloat($('#tvCalc').val());
      var calcConsol2 = parseFloat($('#consolaCalc').val());
      $('#totalCalc').val(calcFono2+calcLapt2+calcTvs2+calcConsol2);
     }, 300);

  });


});
