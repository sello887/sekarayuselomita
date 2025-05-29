 // Intersection Observer untuk efek fade (Fade-in on scroll)
    const faders = document.querySelectorAll('.fade');
    const appearOptions = { threshold: 0.2 };
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        appearOnScroll.unobserve(entry.target);
      });
    }, appearOptions);
    faders.forEach(fader => appearOnScroll.observe(fader));

    // Animasi Tilt Card pada hover (jika menggunakan library Animate.css, pastikan diimpor)
    document.querySelectorAll('.tilt-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        // Efek Animate.css seperti 'animate__animated', 'animate__pulse' tidak akan bekerja tanpa library-nya
        // Untuk efek tilt-card yang hanya CSS transition, kelas ini tidak perlu
      });
      card.addEventListener('mouseleave', () => {
        // Sama seperti di atas
      });
    });

    // Fungsi shakeCard (pastikan Anda juga punya CSS @keyframes animate-shake jika ini digunakan)
    function shakeCard(element) {
        element.classList.add('animate-shake');
        element.addEventListener('animationend', () => {
            element.classList.remove('animate-shake');
        }, { once: true });
    }
   