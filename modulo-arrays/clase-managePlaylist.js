/*
 *   Create a function for a music application to manage a playlist.
 *   The function should take a playlist array, remove the first song
 *   using the shift method, add a new song to the beginning using the unshift
 *   method and return the update playlist.
 */

let playlist = ["Cielito mio", "Shake it off", "Life is a Highway"];

function manipulate(playlist, newSong) {
    playlist.shift(); //? Remove the first song
    playlist.unshift(newSong); //? Add the first song
    console.log(playlist);
}

manipulate(playlist, "Extasis");
