// 1. GATE CONTROL SYSTEM (Password Safe)
// Change 'cyberjasmyn2026' to whatever personal key code you choose.
const GATE_KEY = "cyberjasmyn2026"; 

function unlockArchive() {
    const enteredPass = document.getElementById('gate-pass').value;
    const errorDisplay = document.getElementById('gate-error');
    
    if (enteredPass === GATE_KEY) {
        document.getElementById('crypto-gate').classList.add('hidden');
        document.getElementById('main-archive').classList.remove('hidden');
    } else {
        errorDisplay.innerText = "❌ DECRYPTION FAILURE: INVALID CREDENTIALS";
    }
}

// Allow pressing "Enter" on the keyboard to access the gate
document.getElementById('gate-pass').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') unlockArchive();
});

// 2. TABS MANAGEMENT ENGINE
function switchTab(tabId) {
    // Hide all tab views
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active-content'));
    
    // Deactivate current header buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Activate target element view
    document.getElementById(`tab-${tabId}`).classList.add('active-content');
    event.currentTarget.classList.add('active');
}

// 3. MEDIA VINYL ENGINE
const audioPlayer = document.getElementById('audio-player');
const vinylDisk = document.getElementById('vinyl-disk');

function changeTrack() {
    const trackSelect = document.getElementById('track-select');
    const selectedUrl = trackSelect.value;
    
    if (selectedUrl) {
        audioPlayer.src = selectedUrl;
        audioPlayer.play();
        vinylDisk.classList.add('spinning');
    } else {
        audioPlayer.src = "";
        vinylDisk.classList.remove('spinning');
    }
}

// Watchers to stop spinning animation when music is paused/ended
audioPlayer.addEventListener('pause', () => vinylDisk.classList.remove('spinning'));
audioPlayer.addEventListener('play', () => vinylDisk.classList.add('spinning'));

// 4. BLU-RAY THEATER ENGINE
function loadBluray(year, title, episodes) {
    const display = document.getElementById('deck-display');
    const episodeList = document.getElementById('episode-list');
    
    // Display updates showing reading laser
    display.innerText = `💿 LOADING: [${title.toUpperCase()}]`;
    display.style.color = "#ff0077";
    
    setTimeout(() => {
        display.innerText = `▶️ PLAYING: ${title.toUpperCase()}`;
        display.style.color = "#00f3ff";
        
        // Clear list items and dynamically append episode breakdowns
        episodeList.innerHTML = "";
        episodes.forEach(ep => {
            let li = document.createElement('li');
            li.className = "episode-item";
            li.innerText = ep;
            episodeList.appendChild(li);
        });
    }, 1200);
}

// 5. PANTRY INTERACTION LOGIC
function useTweezers() {
    alert("⚡ You equipped the light-up tweezers! Plucked out a glowing Lightning Bug Gummy.");
}

function eatItem(element) {
    element.style.opacity = "0.4";
    alert("🧃 Chomp! You took a bite out of the nostalgic treat.");
}
