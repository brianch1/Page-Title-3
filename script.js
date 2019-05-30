var adjactive1 = "Fighter";
var adjactive2 = "Funny";
var adjactive3 = "Consistent";
var adjactive4 = "Serious";
$("button").click(function() {
    $("img").hide();
    var st = $(".juan").val();
    var juan = parseInt(st); 
    var pedro = $(".pedro").val();
    console.log(1,juan,pedro);
    if(juan >5 && juan<10 && (pedro === adjactive2 || pedro === adjactive1)){
        $(".message").text("You are Zeno Sama");
        $( "#imagecontainer").prepend('<img src="https://www.pngkey.com/png/full/165-1656128_zeno-sama-by-saodvd-on-deviantart-dragon-ball.png"/>');
    
    } else if(juan >15 && juan<20 && pedro === (adjactive1 || pedro === adjactive3)){
        $(".message").text("You are Bills");
        $( "#imagecontainer").prepend('<img src="https://vignette.wikia.nocookie.net/dragonball/images/0/08/3322608-2079240520-db_he.png/revision/latest?cb=20140103093747"/>');
        
    } else if(juan >10 && juan<15 && pedro === (adjactive3 || pedro === adjactive4)){
        $(".message").text("You are Goku");
        $( "#imagecontainer").prepend('<img src="https://i.pinimg.com/originals/90/7f/a3/907fa34bb6c14a8880287e4a95ca2539.jpg"/>');
       
    } else if(juan >20 && juan<26 && pedro === (adjactive4 || pedro === adjactive3)){
        $(".message").text("You are Vegeta");
        $( "#imagecontainer").prepend('<img src="https://vignette.wikia.nocookie.net/db-dokfanbattle/images/7/75/Super_vegeta_2015_by_salvamakoto-d8rwfuk.jpg/revision/latest?cb=20180501182636"/>');
}
});