$(function () {

    $("#add-burger").on("click", function (event) {
        event.preventDefault()

        var newBurger = {
            name: $("#new-burger").val().trim().toString()
        }

        console.log(newBurger)

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Devoured " + newBurger)
            location.reload()
        })
    });
});