window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const backgroundPositionValue = `center ${-scrollPosition * 0.5}px`; 
    document.body.style.backgroundPosition = backgroundPositionValue;
  });