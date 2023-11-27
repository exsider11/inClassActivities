// music should be an object with title, artist, and album properties
const music = {
  // code here
  title: "song name",
  artist: "john doe",
  album: "single",
 
};

// Write code between the backticks tags to output the data from the music object above.
const songSnippet = `title:${music.title} \nartist:${music.artist} \nalbum:${music.album}`;

console.log(songSnippet)

