 function toggleMenu() {
            const nav = document.querySelector('.nav-links');
            const icon = document.querySelector('.menu-toggle i');
            nav.classList.toggle('active');
            if(nav.classList.contains('active')) { icon.classList.remove('fa-bars'); icon.classList.add('fa-times'); icon.style.color = 'var(--dark)'; }
            else { icon.classList.remove('fa-times'); icon.classList.add('fa-bars'); icon.style.color = document.querySelector('header').classList.contains('scrolled') ? 'var(--primary)' : 'white'; }
        }
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const menuIcon = document.querySelector('.menu-toggle i');
            const navActive = document.querySelector('.nav-links').classList.contains('active');
            if (window.scrollY > 50) { header.classList.add('scrolled'); if(!navActive) menuIcon.style.color = 'var(--primary)'; }
            else { header.classList.remove('scrolled'); if(!navActive) menuIcon.style.color = 'white'; }
        });
        document.querySelectorAll('.faq-question').forEach(q => {
            q.addEventListener('click', () => { const item = q.parentElement; item.classList.toggle('active'); });
        });

        // SMOOTH SLIDER + PRELOADER (Lighter Filter)
        const heroSection = document.getElementById('home');
        const images = [
            
        ];
        images.forEach(imgUrl => { new Image().src = imgUrl.replace('url("','').replace('")',''); });

        let currentIndex = 0;
        function changeBackground() {
            currentIndex = (currentIndex + 1) % images.length;
            // Less Dark Overlay: 0.75 -> 0.5
            heroSection.style.backgroundImage = `linear-gradient(to bottom, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.5) 100%), ${images[currentIndex]}`;
        }
        
        setTimeout(() => { setInterval(changeBackground, 3000); }, 5000);