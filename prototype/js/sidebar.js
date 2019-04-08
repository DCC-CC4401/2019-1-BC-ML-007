
// Function that toggles a sidebar with the "wrapper"
// id whenever a button with id "menu-toggle" is clicked

$("#menu-toggle").click(
    function(e) 
    {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");

        // if ($("#sign-out-button").hasClass("col-md-3") 
        //         && $("#sign-out-button").hasClass("col-lg-2") 
        //         && $("#sign-out-button").hasClass("col-xl-1"))
        // {
        //     $("#sign-out-button").removeClass("col-md-3");
        //     $("#sign-out-button").addClass("col-md-4");
        //     $("#sign-out-button").removeClass("col-lg-2");
        //     $("#sign-out-button").addClass("col-lg-3");
        //     $("#sign-out-button").removeClass("col-xl-1");
        //     $("#sign-out-button").addClass("col-xl-2");
        // }
        // else
        // {
        //     $("#sign-out-button").removeClass("col-md-4");
        //     $("#sign-out-button").addClass("col-md-3");
        //     $("#sign-out-button").removeClass("col-lg-3");
        //     $("#sign-out-button").addClass("col-lg-2");
        //     $("#sign-out-button").removeClass("col-xl-2");
        //     $("#sign-out-button").addClass("col-xl-1");
        // }
        
    }
);