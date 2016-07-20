$(function() {
  console.log("whee!")

$('#story').hide();

  // ---- event handler ---- //
  $("#btn-click").click(function(e) {
    // grab the values from the input boxes, then append them to the DOM
    $(".person").empty().append($("input.person").val());
    $(".adjective").empty().append($("input.adjective").val());
    $(".noun").empty().append($("input.noun").val());
    $(".thing").empty().append($("input.thing").val());
    $(".noun2").empty().append($("input.plural-noun").val());
    $(".verb").empty().append($("input.verb").val());
    $('#story').show();
  });

});
