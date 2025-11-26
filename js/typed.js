document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('.typed');
  var typing = false;
  var currentIndex = 0;

  function typeEffect(el, text, speed, done) {
    el.classList.add('cursor');
    var i = 0;
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        el.classList.remove('cursor');
        if (done) done();
      }
    }
    type();
  }

  function startTyping(el, index) {
    if (typing || el.dataset.typed === 'true' || index !== currentIndex) return;
    typing = true;
    el.dataset.typed = 'true';
    el.classList.add('active');
    var text = el.innerText.trim();
    el.textContent = '';

    typeEffect(el, text, 10, function () {
      typing = false;
      currentIndex++;
    });
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var index = Array.prototype.indexOf.call(sections, entry.target);
          startTyping(entry.target, index);
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
});