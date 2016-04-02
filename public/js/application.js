$(document).ready(function() {

  $('#new-horse').on('click', function(event){
    event.preventDefault();
    console.log('clicked on new horse link');
    // $(this).toggle();

    $.ajax({
      method: "GET",
      url: event.target
      })
      .done(function(response){
      $('#new-horse-form-index-container').append(response);
      $('#new-horse-form-index-container').show();
      $('#new-horse').hide();
    })
  });


$('#new-horse-form-index-container').on('submit', '#horse-form', function(event){
    event.preventDefault();
    console.log('clicked the submit new horse form');
    // $('#new-horse-form-index-container').toggle();

    $.ajax({
      type: "POST",
      url: event.target.action,
      data: $(this).serialize()
      })
        .done(function(response){
          $('#horse-list').append(response);
          $('#new-horse-form-index-container').html("");
          $('#new-horse').show();
        });
    });



  $('#horse-list').children().on('click', function(event) {
    event.preventDefault();
    if ($(event.currentTarget).find('h5').text()) {
      $(event.currentTarget).find('h5').remove();
    }
    else {
      $.ajax({
        url: event.target
      })
        .done(function(response) {
            $(event.currentTarget).append(response)
      });
    }
  });




});
