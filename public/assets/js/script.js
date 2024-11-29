$(document).ready(function () {
    $(window).scroll(function () {
        // Check if the scroll position is more than 100px
        if ($(this).scrollTop() > 200) {
            $("header").css("top", "0.0rem");
        } else {
            $("header").css("top", "1.5rem");
        }
    });

    $("nav a").on("click", function (event) {
        var href = $(this).attr("href");
        if (href === "#home" || href === "./#home") {
            event.preventDefault();
            history.pushState(null, null, "#home");
            $("html, body").animate({ scrollTop: 0 }, 100);
        }
    });

    // Toggle the drawer (slide in)
    $("#hamburger").click(function () {
        $("#drawer").removeClass("hidden");
        setTimeout(function () {
            $("#drawerContent").removeClass("translate-x-full");
        }, 10);
    });

    // Close the drawer (slide out)
    $("#closeDrawer").click(function () {
        $("#drawerContent").addClass("translate-x-full");
        setTimeout(function () {
            $("#drawer").addClass("hidden");
        }, 300);
    });

    // Close the drawer when clicking outside of it
    $("#drawer").click(function (e) {
        if ($(e.target).is("#drawer")) {
            $("#drawerContent").addClass("translate-x-full");
            setTimeout(function () {
                $("#drawer").addClass("hidden");
            }, 300);
        }
    });

    // Close the drawer when any menu item is clicked
    $("#drawer nav a").click(function () {
        $("#drawerContent").addClass("translate-x-full");
        setTimeout(function () {
            $("#drawer").addClass("hidden");
        }, 300);
    });

    // Close the drawer when window size changes (resize event)
    $(window).resize(function () {
        // Check if the window width is above the mobile breakpoint (e.g., 768px)
        if ($(window).width() >= 768) {
            $("#drawerContent").addClass("translate-x-full");
            setTimeout(function () {
                $("#drawer").addClass("hidden");
            }, 300);
        }
    });
});

$("<link>", {
    rel: "canonical",
    href: window.location.href,
}).appendTo("head");
$("<meta>", {
    property: "og:url",
    content: window.location.href,
}).appendTo("head");
