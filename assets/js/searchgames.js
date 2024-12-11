$(document).ready(function() {
    $("#searchText").on("keyup", function() {
        $(".result_search").css("display", "flex");
        $(".result_search").html("");
        var val = $.trim(this.value);
        if (val) {
            val = val.toLowerCase();
            fetch('https://gnhustgames.github.io/json/allGames.json')
                .then(response => response.json())
                .then(data => {
                    $.each(data, function(index, value) {
                        if (value.key.toLowerCase().indexOf(val) != -1) {
                            $(".result_search").append('<a href="' + value.link + '"><div class="image_result"><img src="' + value.image + '" alt=""></div> <div class="name_result">' + value.title + '</div></a>');
                            // item += `<a href="${value.link}"><div class="image_result"><img src="${value.image}" alt=""></div> <div class="name_result">${value.title}</div></a>`
                        }
                    });
                    $(".not_found").toggle($(".result_search").find("img").length == 0);
                })
        }
    });
    $("#body").on('mouseup', function() {
        $(".result_search").css("display", "none");
        $(".not_found").css("display", "none");
    })
})