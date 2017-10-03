$(".corpo").submit(function (event) {
  event.preventDefault(); //impede que a pag recarregue qnd clica no submit

});
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
    ////Catar as variaveis e joga no box de total
    var str = $(this).parents('section').find('.box-forca').val();
    var con = $(this).parents('section').find('.box-con').val();
    var dex = $(this).parents('section').find('.box-dex').val();
    var agi = $(this).parents('section').find('.box-agi').val();
    var int = $(this).parents('section').find('.box-mag').val();
    var total = parseInt(str) + parseInt(con) + parseInt(dex) + parseInt(agi) + parseInt(int);
    var box = $(this).parents('section').find('.box-total');
    $(box).val(total);
    ////Atribui o dano = (str*2)+int
    var box = $(this).parents('section').find('.box-dano');
    var str = $(this).parents('section').find('.box-forca').val();
    var int = $(this).parents('section').find('.box-mag').val();
    var bonus = (parseInt(str) * 2) + parseInt(int);
    $(box).val(bonus);
  });

  $(".box-con").change(function () {
    var box = $(this).parents('section').find('.box-hp');
    var bonus = $(this).val() * 10 + 10;
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

  $('select[class="perks"]').change(function () {
    var perk = $(this).val();
    switch (perk) {
      case "voar":
        var box = $(this).parents('section').find('.box-def');
        var boxval = $(this).parents('section').find('.box-def').val() * 1 + 8;
        $(box).val(boxval);
        var box = $(this).parents('section').find('.box-acerto');
        var boxval = $(this).parents('section').find('.box-acerto').val() * 1 + 8;
        $(box).val(boxval);
        break;

      case "danoMagic":
        var danoMagicoTotal = 4;
        break;

      case "controle":
        var box = $(this).parents('section').find('.box-def');
        var boxval = $(this).parents('section').find('.box-def').val() * 1 + 5;
        $(box).val(boxval);
        var box = $(this).parents('section').find('.box-acerto');
        var boxval = $(this).parents('section').find('.box-acerto').val() * 1 + 10;
        $(box).val(boxval);
        break;

      case "teleport":
        var box = $(this).parents('section').find('.box-def');
        var boxval = $(this).parents('section').find('.box-def').val() * 1 + 15;
        $(box).val(boxval);
        $(box).trigger('change');
        break;

      case "armor":
        console.log("test5");
        break;

      case "arma":
        console.log("test6");
        break;
    }
  });

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
