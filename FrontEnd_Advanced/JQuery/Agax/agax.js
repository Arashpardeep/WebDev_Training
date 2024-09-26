$(function () {
  // Get all Employees
  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users",

    success: function (data) {
      $.each(data, function (i, item) {
        $("ul").append(
          "<li>" + item.id + " - " + item.name + " - " + item.email + "</li>"
        );
        console.log(data);
      });
    },
    error: function () {
      console.log("error occurred");
    },
  });
});
