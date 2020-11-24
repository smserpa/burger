// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
    $(".change").on("click", function () {
      const id = $(this).data("id");
      const devouredBurger = $(this).data("newdevour");
  
      const newDevouredBurger = { value: devouredBurger };
  
      // Send the PUT request.
      $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        // Convert object to JSON
        data: JSON.stringify(newDevouredBurger),
        // Tell the server that this request contains JSON
        contentType: "application/json; charset=UTF-8",
      }).then(() => {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $(".create-form").on("submit", (event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(() => {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $(".delete").on("click", function () {
      const id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax(`/api/burgers/${id}`, {
        type: "DELETE",
      }).then(() => {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });