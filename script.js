// Snowflake & heart generator
const emojis = ['❄️','❄️','❄️','💖','💖'];
function createEmoji() {
    const e = document.createElement('div');
    e.classList.add(emojis[Math.floor(Math.random()*emojis.length)]==='💖' ? 'heart' : 'snowflake');
    e.style.left = Math.random() * window.innerWidth + 'px';
    e.style.fontSize = Math.random() * 24 + 12 + 'px';
    e.style.animationDuration = Math.random() * 3 + 2 + 's';
    e.innerText = emojis[Math.floor(Math.random()*emojis.length)];
    document.body.appendChild(e);
    setTimeout(()=>e.remove(),5000);
}
setInterval(createEmoji,200);

// Surprise button
function showSurprise(id){
    const surprise = document.getElementById(id);
    surprise.style.display = 'block';
}

// Music player
const songs = [
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // High On You
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // LIKE FAIRY LIGHTS FOR MY HEART
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"  // For a Reason
];
];

const audioPlayer = document.getElementById('audioPlayer');

function playSong(index){
    audioPlayer.src = songs[index];
    audioPlayer.play();
}