$(document).ready(function () {
  var qualidades = $('.perks').clone();
  $(qualidades).insertAfter('.perks');
  $(qualidades).insertAfter('.perks');
  $(qualidades).insertAfter('.perks');

  var segundaFicha = $('.ficha').clone().addClass('ficha2').removeClass('ficha');
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
    boxHp = $('.ficha').find('.box-hp').val();
    boxHp2 = $('.ficha2').find('.box-hp').val();
  });

  $(".box-con").change(function () {
    var box = $(this).parents('section').find('.box-hp');
    var bonus = $(this).val() * 8 + 20;
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

  $(".box-mag").change(function () {
    var box = $(this).parents('section').find('.box-danoMagico');
    var bonus = $(this).val() * 2;
    $(box).val(bonus);
  });

  var defglob = $(this).parents('section').find('.box-def').val()
  var atackglob = $(this).parents('section').find('.box-acerto').val()

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
        var box = $(this).parents('section').find('.box-danoMagico');
        var boxval = $(this).parents('section').find('.box-danoMagico').val() * 1 + 5;
        $(box).val(boxval);
        break;

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
        break;

      case "armor":
        var box = $(this).parents('section').find('.box-hp');
        var boxval = $(this).parents('section').find('.box-hp').val() * 1 + 24;
        $(box).val(boxval);
        break;

      case "arma":
        var box = $(this).parents('section').find('.box-dano');
        var boxval = $(this).parents('section').find('.box-dano').val() * 1 + 6;
        $(box).val(boxval);
        break;
    }
    boxHp = $('.ficha').find('.box-hp').val();
    boxHp2 = $('.ficha2').find('.box-hp').val();
    $(this).attr('disabled', 'disabled');
  });

  var boxHp = $('.ficha').find('.box-hp').val(); //tirar o contador de HP do submit para continuar decrementando ele.
  var boxHp2 = $('.ficha2').find('.box-hp').val();

  $(".corpo").submit(function (event) {
    event.preventDefault(); //impede que a pag recarregue qnd clica no submit
    $('.checkButton').val("Finalizar Round");

    function dice(ranMax, ranMin, starto) {
      var dice = Math.floor(Math.random() * (ranMax - ranMin + 1) + starto);
      return dice;
    }

    var acao1 = $('select[class="escolha"]').parents('.ficha').find('.escolha').val();
    var boxAcerto = $('.ficha').find('.box-acerto').val();
    var boxDef = $('.ficha').find('.box-def').val();
    var boxDano = $('.ficha').find('.box-dano').val();
    var boxDanoMagico = $('.ficha').find('.box-danoMagico').val();

    if (acao1 == 'gFor') {
      boxAcerto = parseInt(boxAcerto) + parseInt(dice(100, 1, 1)) - 10;
      boxDef = parseInt(boxDef) + 50 - 10;
      boxDano = parseInt(boxDano) + 8 + parseInt(dice(6, 1, 1));
       
    } else if (acao1 == 'gMed') {
      boxAcerto = parseInt(boxAcerto) + parseInt(dice(100, 1, 1));
      boxDef = parseInt(boxDef) + 50;
      boxDano = parseInt(boxDano) + parseInt(dice(6, 1, 1));
      
    } else if (acao1 == 'gFra') {
      boxAcerto = parseInt(boxAcerto) + parseInt(dice(100, 1, 1)) + 5;
      boxDef = parseInt(boxDef) + 50 + 5;
      boxDano = parseInt(boxDano) + parseInt(dice(6, 1, 1)) - 4;
      
    } else if (acao1 == 'grab') {
      boxAcerto = parseInt(boxAcerto) + parseInt(dice(100, 1, 1)) - 5;
      boxDef = parseInt(boxDef) + 50 - 5;
      boxDano = (parseInt(boxDano) / 2) + parseInt(dice(6, 1, 1));
      var grebado = "True";

    } else if (acao1 == 'magia') {
      boxAcerto = parseInt(boxAcerto) + parseInt(dice(100, 1, 1)) + 5;
      boxDef = parseInt(boxDef) + 50 - 5;
      boxDano = parseInt(boxDanoMagico) + parseInt(dice(30, 5, 5));

    } else {
      boxAcerto = 0;
      boxDef = parseInt(boxDef) + 50 + 50;
      boxDano = 0;

    };
    var box2 = $('.ficha2').find('.box-hp');
    $(box2).val(boxHp2);

    var acao2 = $('select[class="escolha"]').parents('.ficha2').find('.escolha').val();
    var boxAcerto2 = $('.ficha2').find('.box-acerto').val();
    var boxDef2 = $('.ficha2').find('.box-def').val();
    var boxDano2 = $('.ficha2').find('.box-dano').val();
    var boxDanoMagico2 = $('.ficha2').find('.box-danoMagico').val();

    if (acao2 == 'gFor') {
      boxAcerto2 = parseInt(boxAcerto2) + parseInt(dice(100, 1, 1)) - 10;
      boxDef2 = parseInt(boxDef2) + 50 - 10;
      boxDano2 = parseInt(boxDano2) + parseInt(dice(6, 1, 1)) + 8;

    } else if (acao2 == 'gMed') {
      boxAcerto2 = parseInt(boxAcerto2) + parseInt(dice(100, 1, 1));
      boxDef2 = parseInt(boxDef2) + 50;
      boxDano2 = parseInt(boxDano2) + parseInt(dice(6, 1, 1));

    } else if (acao2 == 'gFra') {
      boxAcerto2 = parseInt(boxAcerto2) + parseInt(dice(100, 1, 1)) + 5;
      boxDef2 = parseInt(boxDef2) + 50 + 5;
      boxDano2 = parseInt(boxDano2) + parseInt(dice(6, 1, 1)) - 4;

    } else if (acao2 == 'grab') {
      boxAcerto2 = parseInt(boxAcerto2) + parseInt(dice(100, 1, 1)) - 5;
      boxDef2 = parseInt(boxDef2) + 50 - 5;
      boxDano2 = (parseInt(boxDano2) / 2) + parseInt(dice(6, 1, 1));
      var grebado2 = "True";

    } else if (acao2 == 'magia') {
      boxAcerto2 = parseInt(boxAcerto2) + parseInt(dice(100, 1, 1)) + 5;
      boxDef2 = parseInt(boxDef2) + 50 - 5;
      boxDano2 = parseInt(boxDanoMagico2) + parseInt(dice(30, 5, 5));

    } else {
      boxAcerto2 = 0;
      boxDef2 = parseInt(boxDef2) + 50 + 50;
      boxDano2 = 0;

    };
    
    ///Finalization!!!
    var box1 = $('.ficha').find('.box-hp');
    var box2 = $('.ficha2').find('.box-hp');
    
    var priTest = "";
    var secTest = "";
    if (boxAcerto >= boxDef2){
      boxHp2 = boxHp2 - parseInt(boxDano);
      $(box2).val(boxHp2);
      priTest = "ACERTOU!!!";
    }else {
      priTest = "ERROU!!!";
    }
    if (boxAcerto2 >= boxDef){
      boxHp = boxHp - parseInt(boxDano2)
      $(box1).val(boxHp);
      secTest = "Acertou!!!";
    }else {
      secTest = "Errou!!!";
    }

    

    $('textarea[class="textArea"]').removeClass("textArea").addClass("combatArea");

    var nomeChar1 = $('.ficha').find('.nome').val();
    var nomeChar2 = $('.ficha2').find('.nome').val();
    if (boxHp < 0 && boxHp2 < 0) {
      $('textarea[class="combatArea"]').val(nomeChar1 + " e " + nomeChar2 + " cairam no chão inconsciente!!!");

    } else if (boxHp < 0) {
      $('textarea[class="combatArea"]').val(nomeChar1 + " caiu no chão inconsciente!!!");

    } else if (boxHp2 < 0) {
      $('textarea[class="combatArea"]').val(nomeChar2 + " caiu no chão inconsciente!!!");

    } else {
      $('textarea[class="combatArea"]').val(nomeChar1 + " " + "HP: " + boxHp + " Dano: " + boxDano + " Acerto: " + boxAcerto + " Defesa: " + boxDef + " "+ priTest + "  <=>  " +
        nomeChar2 + " " + "HP: " + boxHp2 + " Dano: " + boxDano2 + " Acerto: " + boxAcerto2 + " Defesa: " + boxDef2 + " " + secTest);
    }

  });

  ///Cod Hover!!!
  $(".forca")
    .mouseenter(function () {
      $("textarea[class='textArea']").val("FORÇA: Determina o dano base que seu personagem consegue causar em combate corpo a corpo. (Aumenta o dano base em 2 ptos)");
    })
    .mouseleave(function () {
      $("textarea[class='textArea']").val('');
    });
  $(".const")
    .mouseenter(function () {
      $("textarea[class='textArea']").val("CONSTITUIÇÃO: Determina o quanto seu personagem consegue resistir antes de cair. (Aumenta o HP em 5 ptos)");
    })
    .mouseleave(function () {
      $("textarea[class='textArea']").val('');
    });
  $(".destreza")
    .mouseenter(function () {
      $("textarea[class='textArea']").val("DESTREZA: Determina a precição do seu personagem. (Aumenta a chance de acertar em 5%)");
    })
    .mouseleave(function () {
      $("textarea[class='textArea']").val('');
    });
  $(".agilit")
    .mouseenter(function () {
      $("textarea[class='textArea']").val("AGLIDADE: Determina a velocidade do seu personagem. (Aumenta a chance de esquiva em 5%)");
    })
    .mouseleave(function () {
      $("textarea[class='textArea']").val('');
    });
  $(".magia")
    .mouseenter(function () {
      $("textarea[class='textArea']").val("MAGIA: Determina o dano a distância que seu personagem pode causar. (Aumenta o dano do combate a distancia em 2 ptos)");
    })
    .mouseleave(function () {
      $("textarea[class='textArea']").val('');
    });
  /////
});
// Math.floor(Math.random() * (variamaximo6 - variaminmin1 + som1) + começa);
