// Tab Switching Logic
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabName).style.display = 'block';
  }
  
  // Personalized Roasts
  function getPersonalizedRoast() {
    const input = document.getElementById('personalizedInput').value;
    const roasts = [
      `Oh, you love ${input}? That’s cute. Too bad no one loves you.`,
      `${input}? Wow, your personality is as basic as your hobbies.`,
      `You like ${input}? That explains why you’re single.`,
      `${input}? Oh, you mean the human equivalent of a participation trophy? No wonder you left him.`,
      `${input}? The only thing she committed to was being indecisive. Even her horoscope left her on read`,
      ``,
    ];
    const roast = roasts[Math.floor(Math.random() * roasts.length)];
    document.getElementById('personalizedOutput').innerText = roast;
  }
  
  // Ex Roast Mode
  function getExRoast() {
    const input = document.getElementById('exInput').value;
    const roasts = [
      `${input}? More like ${input.slice(0, 2)}-who? I already forgot them.`,
      `Your ex ${input} is like a bad algorithm: inefficient and hard to debug.`,
      `Breaking up with ${input} was the best decision you ever made. Second best? Using this bot.`
      `${input} is like a screensaver—pointless, repetitive, and everyone ignores them.`,
      `Your ex,${input}, is like a bad sequel—unnecessary, disappointing, and everyone wishes it never happened.`,
      `${input} is like a expired coupon—useless, disappointing, and you’re glad you threw them out.`,
    ];
    const roast = roasts[Math.floor(Math.random() * roasts.length)];
    document.getElementById('exOutput').innerText = roast;
  }
  
  // Cringy Love Story Roaster
  function getStoryRoast() {
    const input = document.getElementById('storyInput').value;
    const roasts = [
      `Wow, that’s not a love story, that’s a cry for help.`,
      `This story is so cringe, even Netflix wouldn’t make it into a rom-com.`,
      `If this story was a movie, it’d be called "How to Die Alone: The Musical."`
    ];
    const roast = roasts[Math.floor(Math.random() * roasts.length)];
    document.getElementById('storyOutput').innerText = roast;
  }
  
  // Anti-Valentine’s Playlist
  function openPlaylist() {
    const playlistLink = "https://open.spotify.com/playlist/3wZfgFnALjO8CDx4sMX7un?si=8be8d06cd5134481";
    window.open(playlistLink, "_blank");
  }