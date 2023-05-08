import genres from '../data/genres.json' assert { type: 'json' };

let genre_area = $("#genre-area");

let types = genres.genres;

for (let i=0; i<types.length; i++) {
    let type = types[i];
    
    let html_text = '';
    html_text += '<div class="col-md-4 my-2">';
    html_text += '<a href="songs.html?genre=' + type.id + '">';
    html_text += '<div class="card">';
    html_text += '<div class="card-img-overlay d-flex flex-column justify-content-center text-center">';
    html_text += '<h4 class="card-title">' + type.name + '</h4>';
    html_text += '</div>';
    html_text += '<img class="card-img" src="../images/genres/' + type.image + '" alt="">';
    html_text += '</div>';
    html_text += '</a>';
    html_text += '</div>';

    genre_area.append(html_text);
}