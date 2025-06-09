let movieNames = $(".grid-items").get(); 
movieNames.sort(function(a, b) {
    let titleA = $(a).find("h3").text();
    let titleB = $(b).find("h3").text();
    if (titleA < titleB) {
        return -1;  // titleA comes before titleB
    } else if (titleA > titleB) {
        return 1;   // titleB comes before titleA
    } else {
        return 0;   // titles are the same
    }
});
$(".grid-container").append(movieNames);