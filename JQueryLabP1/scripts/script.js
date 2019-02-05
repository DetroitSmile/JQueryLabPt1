"use strict";


let selectedTable = undefined;

function reserveTable() {
  $(".available").on("click", function(e){
    $(".modul").css("display", "flex");
    selectedTable = $(e.target);
    console.log(selectedTable);
    $(".tableNumber").text(selectedTable.get(0).id);
    $(".save").on("click", function(){
      $(selectedTable).addClass("reserved");
      $(selectedTable).removeClass("available");
      $(".modul").css("display", "none");
    });
  });
}

function hideModul() {
  $(".fa-times").on("click", function(e) {
    $(".modul").css("display", "none");
  });
}

reserveTable();
hideModul();