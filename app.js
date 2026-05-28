// --- PRIVATE GATEKEEPER VALIDATION ---
const gateForm = document.getElementById('gate-form');

if (gateForm) {
    gateForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const accessKey = document.getElementById('access-pass').value;
        
        // Define your private password check here
        if (accessKey === 'SYSTEM2026') {
            window.location.href = 'dashboard.html';
        } else {
            const errorMsg = document.getElementById('error-msg');
            errorMsg.classList.remove('hidden');
            errorMsg.style.animation = 'shake 0.2s ease-in-out 2';
        }
    });
}

// --- TAB SWITCHER FOR POSTER PAGE LAYOUTS ---
function switchPage(posterId) {
    // Remove active class from all pages
    const pages = document.querySelectorAll('.poster-layout');
    pages.forEach(page => page.classList.remove('active-poster'));

    // Remove active class from all buttons
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Activate selected content
    document.getElementById(posterId).classList.add('active-poster');
    
    // Highlight correct active tab menu item
    const clickedButton = Array.from(navLinks).find(btn => btn.getAttribute('onclick').includes(posterId));
    if (clickedButton) clickedButton.classList.add('active');
}
