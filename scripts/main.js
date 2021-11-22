
$(document).ready(function () {
    projectScroll();

    $("[href=projectHead]").on('click',function(){
        projectScroll();
    });

    paddles();
    disableButtons();
    clickBulk();

    $('.paddle').hover(function(){
        $(this).addClass("paddle-hover");
    }, function(){
        $(this).removeClass("paddle-hover");
    });
});

function projectScroll(){
    $("#projectScroll").on("scroll", function (e) {
        horizontal = e.currentTarget.scrollLeft;
        if (horizontal >= 51) {
            $('#projectHead').addClass(" activeScroll");

            $('.left-paddle').fadeIn();
        } else {
            $('#projectHead').removeClass(" activeScroll");
            $('.left-paddle').fadeOut()
        }
        var maxScroll = $('#projectScroll').get(0).scrollWidth - $('#projectScroll').get(0).clientWidth;

        if (horizontal >= maxScroll) {
            $('.right-paddle').fadeOut();
        } else {
            $('.right-paddle').fadeIn();
        }
    });
}

function clickBulk() {
    $("#nav a, #name a, #backToTop a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior

        // Figure out element to scroll to
        event.preventDefault();
        var goToPage = $($(this).attr("href"));
        var activePage = $(".active");
        activePage.attr("class", 'slide-out-right').queue(goToPage.attr("class", "active slide-in-right"));
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

function paddles() {
    $('.right-paddle')
        .on({
            mouseenter: function () {
                $('#projectScroll').animate({ scrollLeft: "+=2000" }, 4000)
            },
            mouseleave: function () {
                $('#projectScroll').stop();
            },
        });
    $('.left-paddle').on({
        mouseenter: function () {
            $('#projectScroll').animate({ scrollLeft: "-=3000" }, 4000)
        },
        mouseleave: function () {
            $('#projectScroll').stop();
        }
    });
}

