var receptek = [];
var vegrehajt = true;
$(function(){

  
    $.ajax(
        {
            url: "recept.json", 
            success: function(result)
            {
               console.log(result);
               receptek = result.receptkonyv;
               console.log(receptek);
               //$("article").append(receptek[0].nev);
               megjelenit();
            }
        }
      );

  });

  function megjelenit(){
    $("article").empty();
    $("article").append("<table>");
    $("article table").append("<tr><th>Név</th><th>Elkészítési idő</th><th>Kép</th><th>Leírás</th><th>Hozzávalók</th></tr>");
    for (var i = 0; i < receptek.length; i++) {
        $("article table").append("<tr></tr>");

        for (var item in receptek[i]) {
            $("article table tr").eq(i + 1).append("<td>" + receptek[i][item] + "</td>");
        }
 
    }

    for (var i = 0; i <= $("article table tr").length; i++) {
        $("article table tr").eq(i).attr('id', i);
    }

    for (var i = 0; i <= $("article table tr").length; i++) {
        $("article table tr th").eq(i).attr('fejlecid', i);
    }

    $("article table tr").on("click", kattint);
    $("article table tr th").on("click", rendez);

    $("article table tr").on("mouseover", hatterFel);
    $("article table tr").on("mouseleave", hatterLe);

    //$("#bal").on("click", balra);
    //$("#jobb").on("click", jobbra);
    
  }

  function kattint(){
    var azon = $(this).attr("id");
    if (azon != 0){
        
        $("#kep").html("<img src='"+receptek[azon -1].kep+"' alt='kep'>");
        $("#kep").append("<h2>");
        $("#kep h2").append(receptek[azon -1].nev);

        
        $("#kep").append("<ul>");
        //for (var i = 0; i <= receptek[azon -1].hozzavalok.length; i++) {
            for (var item in receptek[azon-1].hozzavalok) {
                //console.log(receptek[azon-1].hozzavalok[item]);
                for (var item2 in receptek[azon-1].hozzavalok[item]) {
                    console.log(item2);
                    console.log(receptek[azon-1].hozzavalok[item])
                    console.log(receptek[azon-1].hozzavalok[item].item2);
                    $("#kep ul").append("<li>" + item2 + "</li>");
                }
                
            }

        //}
        
    }
  }

  function rendez(){
    
    var azon2 = $(this).attr("fejlecid");
    //név
    if (azon2 === "0") {
        if (vegrehajt === true) {
            receptek.sort(function (a, b) {
                return Number(a["nev"] > b["nev"]) - 0.5;
            });
            vegrehajt = false;
        } else {
            receptek.sort(function (a, b) {
                return Number(a["nev"] < b["nev"]) - 0.5;
            });
            vegrehajt = true;
        }
    //elékszítési idő
    } else if (azon2 === "1") {
        if (vegrehajt === true) {
            receptek.sort(function (a, b) {
                return Number(a["elkido"] > b["elkido"]) - 0.5;
            });
            vegrehajt = false;
        } else {
            receptek.sort(function (a, b) {
                return Number(a["elkido"] < b["elkido"]) - 0.5;
            });
            vegrehajt = true;
        }
    //kép
    } else if (azon2 === "2") {
        if (vegrehajt === true) {
            receptek.sort(function (a, b) {
                return Number(a["kep"] > b["kep"]) - 0.5;
            });
            vegrehajt = false;
        } else {
            receptek.sort(function (a, b) {
                return Number(a["kep"] < b["kep"]) - 0.5;
            });
            vegrehajt = true;
        }
    //leírás
    } else if (azon2 === "3") {
        if (vegrehajt === true) {
            receptek.sort(function (a, b) {
                return Number(a["leiras"] > b["leiras"]) - 0.5;
            });
            vegrehajt = false;
        } else {
            receptek.sort(function (a, b) {
                return Number(a["leiras"] < b["leiras"]) - 0.5;
            });
            vegrehajt = true;
        }
    //hozzávalók
    } else if (azon2 === "4") {
        if (vegrehajt === true) {
            receptek.sort(function (a, b) {
                return Number(a["hozzavalok"] > b["hozzavalok"]) - 0.5;
            });
            vegrehajt = false;
        } else {
            receptek.sort(function (a, b) {
                return Number(a["hozzavalok"] < b["hozzavalok"]) - 0.5;
            });
            vegrehajt = true;
        }
    }
    megjelenit();
  }

  function hatterFel(){
      $(this).addClass("hatter");
  }
  function hatterLe(){
    $(this).removeClass("hatter");
}