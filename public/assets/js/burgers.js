//ADDING LOGIC TO INDEX PAGE
$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var newStatus = $(this).data("status");

        var burgerStatus = {
            devoured: newStatus
        };

        //SENDING PUT REQUEST
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerStatus
        }).then(
            function () {
                console.log("Burger was", newStatus);
                //RELOAD PAGE
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bu").val().trim(),
        };

        console.log(newBurger.burger_name);

        //SENDING POST REQUEST

        if (newBurger.burger_name != "") {
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("created new burger");
                    //RELOAD PAGE
                    location.reload();
                }
            );
        }

    });
});