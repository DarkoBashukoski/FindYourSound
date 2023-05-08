import songs from '../data/songs.json' assert { type: 'json' };

let song_area = $("#song-area");

let params = {};
location.search.slice(1).split("&").forEach(function(pair) {
    pair = pair.split("=");
    params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
});
let genre = params["genre"];

let filteredSongs = songs[genre.toString()];

for (let i=0; i<filteredSongs.length; i++) {
    let song = filteredSongs[i];
    
    let minutes = Math.floor(song.length / 60);
    let seconds = song.length % 60;
    
    let time = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

    let html_text = '';
    html_text += '<div class="col-md-4 my-2">';
    html_text += '<div class="card">';
    html_text += '<img class="card-img-top" src="../images/songs/' + genre + '/' + song.image + '" alt="Card image">';
    html_text += '<div class="card-body">';
    html_text += '<h4 class="card-title">' + song.name + '</h4>';
    html_text += '<p class="card-text"><i class="fa fa-user"></i> Artist: ' + song.artist + '</p>';
    html_text += '<p class="card-text"><i class="fa fa-clock-o"></i> Length: ' + time + '</p>';
    html_text += '<p class="card-text"><i class="fa fa-calendar"></i> Year: ' + song.year + '</p>';
    html_text += '<div class="col-md-12 text-center">';
    html_text += '<a href="' + song.link + '" class="btn btn-danger"><i class="fa fa-youtube-play"></i> Play on YouTube</a>';
    html_text += '</div>';
    html_text += '</div>';
    html_text += '</div>';
    html_text += '</div>';

    song_area.append(html_text);
}