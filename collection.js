document.addEventListener("DOMContentLoaded", function () {
  const songs = [
    { id: 1, title: "Love Yourself", artist: "Justin Bieber", genre: "pop", description: "A heartfelt acoustic pop song with honest lyrics.", imageUrl: "https://upload.wikimedia.org/wikipedia/id/0/0b/JustinBieberLoveYourself.png", audioSrc: "assets/audio/JustinBieberLoveYourself.mp3", lyrics: "For all the times that you rained on my parade..." },
    { id: 2, title: "Sorry", artist: "Justin Bieber", genre: "pop", description: "A catchy dancehall-influenced pop tune.", imageUrl: "https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2020/01/14/M7spmQ/t_5e1d91e6f3f88.jpg", audioSrc: "assets/audio/Justin Bieber - Sorry (PURPOSE _ The Movement).mp3", lyrics: "You gotta go and get angry at all of my honesty..." },
    { id: 3, title: "Blinding Lights", artist: "The Weeknd", genre: "pop", description: "A synthwave-inspired track with an infectious beat.", imageUrl: "https://intime.id/archipelago/wp-content/uploads/2024/08/The-Weeknd-Blinding-Lights.webp", audioSrc: "assets/audio/The Weeknd - Blinding Lights (Official Audio)(1).mp3", lyrics: "I've been trying to call..." },
    { id: 4, title: "My Boo", artist: "Usher", genre: "rnb", description: "Smooth vocals and bassline for late night sessions.", imageUrl: "https://i.scdn.co/image/ab67616d0000b2734f5b89a63768c7cf88b2e930", audioSrc: "assets/audio/Usher - My Boo (Lyrics) ft. Alicia Keys.mp3", lyrics: "In the midnight hour..." },
    { id: 5, title: "Snooze", artist: "SZA", genre: "rnb", description: "An emotional track filled with soulful melodies.", imageUrl: "https://i1.sndcdn.com/artworks-ibtMe2npnMtl-0-t500x500.jpg", audioSrc: "assets/audio/SZA - Snooze (Audio).mp3", lyrics: "Echoes of your love..." },
    { id: 6, title: "Starlight", artist: "LUMINA", genre: "kpop", description: "Upbeat electronic pop with colorful visuals.", imageUrl: "https://i.ytimg.com/vi/ltGTU-GNMXQ/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLB_228h2E5_GchBcZjseF4_tJXrpA", audioSrc: "https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3", lyrics: "Shining in the starlight..." },
    { id: 7, title: "Dynamite", artist: "BTS", genre: "kpop", description: "A globally acclaimed disco-pop song with energy.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyoXSF5ndUcQK76tpUjy00_lkmEhrAZkvbA&s", audioSrc: "https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3", lyrics: "'Cause I, I, I'm in the stars tonight..." }
  ];

  const popGrid = $("#pop-grid");
  const rnbGrid = $("#rnb-grid");
  const kpopGrid = $("#kpop-grid");

  function displaySongs() {
    popGrid.html('');
    rnbGrid.html('');
    kpopGrid.html('');

    songs.forEach(song => {
      const card = $(`
        <div class="collection-card" style="display: none;">
          <img src="${song.imageUrl}" alt="Album art for ${song.title}" class="collection-card-img">
          <div class="collection-card-body">
              <h3 class="card-title">${song.title}</h3>
              <p class="card-artist">${song.artist}</p>
              <p class="card-description">${song.description}</p>
          </div>
          <div class="collection-card-footer">
              <a href="song-detail.html?id=${song.id}" class="btn-details">View Details</a>
          </div>
        </div>
      `);

      if (song.genre === 'pop') {
        popGrid.append(card);
      } else if (song.genre === 'rnb') {
        rnbGrid.append(card);
      } else if (song.genre === 'kpop') {
        kpopGrid.append(card);
      }
      
      card.fadeIn(800);
    });
  }

  displaySongs();
});