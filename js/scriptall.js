$(".corpo").submit(function (event) {
  event.preventDefault(); //impede que a pag recarregue qnd clica no submit

});

// $(document).ready(function () { //starta quando a pag carrega
//   $("#priFor").change(function () { //trigga quando muda o input range de ID aproFor
//     var newval = $(this).val(); //adiciona o valor do input na variavel
//     var danoTot1 = newval * 2; //calcula total de bonus
//     $("#boxFor1").val(newval); //aplica o valor do input no box ao lado
//     $("#priDano").val(danoTot1); //aplica o calculo total de bonus na box correspondente

//   });

//   $("#priCon").change(function () {
//     var newval = $(this).val();
//     var hpTot1 = newval * 5 + 10;
//     $("#boxCon1").val(newval);
//     $("#priHP").val(hpTot1);
//   });

//   $("#priDex").change(function () {
//     var newval = $(this).val();
//     var acertoTot1 = newval * 5;
//     $("#boxDex1").val(newval);
//     $("#priAcerto").val(acertoTot1);
//   });

//   $("#priAgi").change(function () {
//     var newval = $(this).val();
//     var defTot1 = newval * 5;
//     $("#boxAgi1").val(newval);
//     $("#priDef").val(defTot1);
//   });

//   $("#priMag").change(function () {
//     var newval = $(this).val();
//     //var magTot1 = newval * 2;
//     $("#boxMag1").val(newval);
//     //$("#priMag").val(magTot1);
//   });
//   //////////////////////////////Char 2///////////////////////////////
//   $("#secFor").change(function () {
//     var newval = $(this).val();
//     var danoTot2 = newval * 2;
//     $("#boxFor2").val(newval);
//     $("#secDano").val(danoTot2);
//   });

//   $("#secCon").change(function () {
//     var newval = $(this).val();
//     var hpTot2 = newval * 5 + 10;
//     $("#boxCon2").val(newval);
//     $("#secHP").val(hpTot2);
//   });

//   $("#secDex").change(function () {
//     var newval = $(this).val();
//     var acertoTot2 = newval * 5;
//     $("#boxDex2").val(newval);
//     $("#secAcerto").val(acertoTot2);
//   });

//   $("#secAgi").change(function () {
//     var newval = $(this).val();
//     var defTot2 = newval * 5;
//     $("#boxAgi2").val(newval);
//     $("#secDef").val(defTot2);
//   });

//   $("#secMag").change(function () {
//     var newval = $(this).val();
//     //var magTot1 = newval * 2;
//     $("#boxMag2").val(newval);
//     //$("#priMag").val(magTot1);
//   });


// });

// $(".atributos").change(function () {

//   var total1 = $("#boxFor1").val() * 1 +
//     $("#boxCon1").val() * 1 +
//     $("#boxDex1").val() * 1 +
//     $("#boxAgi1").val() * 1 +
//     $("#boxMag1").val() * 1;
//   $("#priTotal").val(total1);

//   var total2 = $("#boxFor2").val() * 1 +
//     $("#boxCon2").val() * 1 +
//     $("#boxDex2").val() * 1 +
//     $("#boxAgi2").val() * 1 +
//     $("#boxMag2").val() * 1;
//   $("#secTotal").val(total2);
// });
$(document).ready(function () {

  var qualidades = $('.perks').clone();
  $(qualidades).insertAfter('.perks');
  $(qualidades).insertAfter('.perks');
  $(qualidades).insertAfter('.perks');

  var segundaFicha = $('.ficha').clone();
  $(segundaFicha).insertAfter('.ficha');

  $('input[type="range"]').change(function () {
    var box = $(this).parents('tr').find('input[type="text"]');
    $(box).val($(this).val());
    $(box).trigger('change');

    var total1 = $(".box-forca").val() * 1 +
      $(".box-con").val() * 1 +
      $(".box-dex").val() * 1 +
      $(".box-agi").val() * 1 +
      $(".box-mag").val() * 1;
    $(".box-total").val(total1);
  });

  $(".box-forca").change(function () {
    var box = $(this).parents('section').find('.box-dano');
    var bonus = $(this).val() * 2;
    $(box).val(bonus);
  });

  $(".box-con").change(function () {
    var box = $(this).parents('section').find('.box-hp');
    var bonus = $(this).val() * 5 + 10;
    $(box).val(bonus);
  });

  $(".box-dex").change(function () {
    var box = $(this).parents('section').find('.box-acerto');
    var bonus = $(this).val() * 5;
    $(box).val(bonus);
  });

  $(".box-agi").change(function () {
    var box = $(this).parents('section').find('.box-def');
    var bonus = $(this).val() * 5;
    $(box).val(bonus);
  });

  //$(".box-mag").change(function(){
  //  var bonus = $(this).val();
  //});

  ///Cod Hover!!!
  $(".forca")
    .mouseenter(function () {
      $("textarea[name='combatText']").val("FORÇA: Determina o dano base que seu personagem consegue causar em combate corpo a corpo. (Aumenta o dano base em 2 ptos)");
    })
    .mouseleave(function () {
      $("textarea[name='combatText']").val('');
    });
  $(".const")
    .mouseenter(function () {
      $("textarea[name='combatText']").val("CONSTITUIÇÃO: Determina o quanto seu personagem consegue resistir antes de cair. (Aumenta o HP em 5 ptos)");
    })
    .mouseleave(function () {
      $("textarea[name='combatText']").val('');
    });
  $(".destreza")
    .mouseenter(function () {
      $("textarea[name='combatText']").val("DESTREZA: Determina a precição do seu personagem. (Aumenta a chance de acertar em 5%)");
    })
    .mouseleave(function () {
      $("textarea[name='combatText']").val('');
    });
  $(".agilit")
    .mouseenter(function () {
      $("textarea[name='combatText']").val("AGLIDADE: Determina a velocidade do seu personagem. (Aumenta a chance de esquiva em 5%)");
    })
    .mouseleave(function () {
      $("textarea[name='combatText']").val('');
    });
  $(".magia")
    .mouseenter(function () {
      $("textarea[name='combatText']").val("MAGIA: Determina o dano a distância que seu personagem pode causar. (Aumenta o dano do combate a distancia em 2 ptos)");
    })
    .mouseleave(function () {
      $("textarea[name='combatText']").val('');
    });
  /////


});