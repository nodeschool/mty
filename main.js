$('#international').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 6);
    var amountMovedY = (e.pageY * 1 / 300);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});