$(document).ready(function() {
    $("#projectScroll").on("scroll", function(e) {
        horizontal = e.currentTarget.scrollLeft;
        if (horizontal >= 51) {
            $('#projectHead').addClass(" activeScroll");
        } else {
            $('#projectHead').removeClass(" activeScroll");

        }
    });

    disableButtons();
    clickBulk();

});

function clickBulk() {
    $("#nav a, #name a, #backToTop a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior

        // Figure out element to scroll to
        event.preventDefault();
        var goToPage = $($(this).attr("href"));
        var activePage = $(".active");
        activePage.attr("class", 'inactive').queue(goToPage.attr("class", "active flip-in-hor-top"));
    });
}


function disableButtons() {
    var inactivePages = document.getElementsByClassName("inactive");
    for (var i = 0; i < inactivePages.length; i++) {
        inactivePages[i].style.opacity = "0";
        var btns = inactivePages[i].querySelectorAll('button');
        btns.disabled = true;
    }
}