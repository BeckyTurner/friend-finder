//when submit button is clicked
$("#submitButton").on("click", function (event) {
    event.preventDefault();
    // collect user input
    var userInput = {
        name: $("#userName").val().trim(),
        photo: $("#userPhoto").val().trim(),
        scores: [
            $("#question1").val().trim(),
            $("#question2").val().trim(),
            $("#question3").val().trim(),
            $("#question4").val().trim(),
            $("#question5").val().trim(),
            $("#question6").val().trim(),
            $("#question7").val().trim(),
            $("#question8").val().trim(),
            $("#question9").val().trim(),
            $("#question10").val().trim()
        ]
    };

    // post user inputs to friends list
    $.post("/api/friends", userInput)
        .done(function (data) {
            // Set the name and image values of friend match
            $("#userMatch").html(data.matchName);
            $("#userMatchImage").attr("src", data.matchImage);
        });
});
