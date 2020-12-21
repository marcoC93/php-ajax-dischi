$(document).ready(function() {

    // const source = document.getElementById("card-template").innerHTML;
    const source = $('#card-template').html();

    const template = Handlebars.compile(source);
    $.ajax({
        url: 'dischi.php' ,
        method : 'GET',
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].title);
                console.log(data[i].author);
                console.log(data[i].year);
                console.log(data[i].poster);

                var context = {
                    poster: data[i].title,
                    author : data[i].author,
                    year: data[i].year,
                    poster:data[i].poster,
                };
                var html = template(context);
                $('.card-container').append(html);
            }
        },
        error: function() {
            log
        },
    })
});
