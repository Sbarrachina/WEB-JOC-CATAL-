function showLyrics(lyricsId) {
    var lyrics = document.getElementById(lyricsId);
    if (lyrics.classList.contains('hidden')) {
        lyrics.classList.remove('hidden');
    } else {
        lyrics.classList.add('hidden');
    }
}
