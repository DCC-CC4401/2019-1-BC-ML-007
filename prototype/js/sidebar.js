
// Function that toggles a sidebar with the "wrapper"
// id whenever a button with id "menu-toggle" is clicked

$("#menu-toggle").click(
    function(e) 
    {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    }
);