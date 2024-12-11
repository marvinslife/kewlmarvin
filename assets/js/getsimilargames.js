function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getGameSimilar() {
    fetch('https://gnhustgames.github.io/json/allGames.json')
        .then(response => response.json())
        .then(data => {
            // var targetKey = "category";
            // var targetValue = "Action Games";
            var filteredData = data.filter(function(obj) {
                return obj["key"] !== "";
            });
            // Shuffle the filtered data randomly
            shuffleArray(filteredData);
            var results = filteredData.slice(0, 12);
            var item = "";
            $.each(results, function(index, value) {
                item += `  <div class="col-lg-3 col-sm-6">
                <div class="item">
                    <a href="${value.link}"> <img src="${value.image}" alt=""></a>

                    <h4>${value.title}<br><span>${value.star}<i class="fa-regular fa-star"></i></span></h4>

                </div>
            </div> `;
            });
            $("#similar_games").html(item);
        });
}