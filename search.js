
    function displayNews() {
    let url = 'https://newsapi.org/v2/top-headlines?q=' +
        'trump' +
        '&apiKey=73dbce07eb8943f3a1df1b850145f8f8';
    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        var results = response;
        console.log(response);
        for (var i = 0; i < 3; i++) {
            console.log(results[i]);
            output += `
    <h4>${results[i].title}</h4>
    <p>${results[i].description}</p>
    <p>${results[i].content}</p>
    <p>Published on : ${results[i].publishedAt}</p>
    <a>${results[i].url}</a>

    `;
        }
        $("#news").html(output);
    })
}
displayNews();

    