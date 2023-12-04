// JavaScript for Dynamic Content Changes
document.getElementById('changeContentBtn').addEventListener('click', function() {
    const animationSection = document.querySelector('.animation-section');
    animationSection.innerHTML = "<p>Check out these exclusive deals on the latest phones!</p>";
    animationSection.style.backgroundColor = '#d35400';
});


