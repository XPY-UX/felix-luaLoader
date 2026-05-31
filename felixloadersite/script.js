// Copy to clipboard functionality
function copyCode() {
    const codeBlock = document.querySelector('.code-block code');
    const text = codeBlock.innerText;
    
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        
        setTimeout(() => {
            btn.innerText = originalText;
        }, 2000);
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update GitHub link with your actual repo
document.getElementById('github').href = 'https://github.com/YOUR_USERNAME/felix-lua-loader';
