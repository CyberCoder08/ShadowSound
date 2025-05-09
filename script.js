const API_URL = 'http://yt.sanatanixtech.site/?key=SANATANIxTECH';

async function loadSong() {
  try {
    const res = await fetch(API_URL);
    const song = await res.json();

    document.getElementById('title').textContent = song.title;
    document.getElementById('channel').textContent = song.channel;
    document.getElementById('thumbnail').src = song.thumbnail;
    document.getElementById('audio').src = song.stream_url;
  } catch (err) {
    alert('Failed to load song.');
    console.error(err);
  }
}

document.getElementById('next').addEventListener('click', loadSong);
window.onload = loadSong;
