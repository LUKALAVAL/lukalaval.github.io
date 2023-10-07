window.addEventListener('scroll', function(e) {
    if (window.scrollY > 300) {
      document.getElementById('scrollTop').classList.add('show');
    } else {
      document.getElementById('scrollTop').classList.remove('show');
    }
});

function changeLanguage(lang) {
    document.body.classList.remove('EN');
    document.body.classList.remove('FR');
    document.body.classList.remove('DE');
    document.body.classList.add(lang);
};