$("button").click(function() {
    let genre = $(".genre").val();
    let tvOmovie = $(".tv-movies").val();
    let number = $(".how-many").val();
    let amount = (number * 52) * 20;
    $(".respond").append("<p>" + "You will watch this much " + tvOmovie + " in 20 years: " + amount+ "</p>");
});
