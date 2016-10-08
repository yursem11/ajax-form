$(function () {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/semk1104@gmail.com", 
            method: "POST",
            data: {
                message: $('#name').val(),
                text: $('#text').val()
            },
            dataType: "json"
        }).done(function() {
            $('form').html('<h1>Thank you!</h1>')
        }).fail(function(xhr, err) {
            $('form').html(xhr.statusText);
        });        
    })
});