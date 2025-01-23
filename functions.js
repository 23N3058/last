gsap.registerPlugin(ScrollTrigger);

const gradientOverlay = document.createElement('div');
gradientOverlay.className = 'gradient-progress';
document.body.appendChild(gradientOverlay);

ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
        gsap.to(gradientOverlay, {
            opacity: self.progress,
            duration: 0.1,
            ease: 'none'
        });
    }
});

gsap.to('.site-header', {
    opacity: 1,
    duration: 1.2,
    ease: 'power2.out'
});

gsap.utils.toArray('.section-intro').forEach((section) => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    });
});

gsap.to('.layout-change', {
    scrollTrigger: {
        trigger: '.layout-change',
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse'
    },
    opacity: 1,
    duration: 1,
    ease: 'power2.out'
});

gsap.utils.toArray('.interview-item').forEach((item) => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    });
});

gsap.utils.toArray('.interview-item').forEach((item) => {
    const sectionHeading = item.querySelector('.section-heading');
    const questions = item.querySelectorAll('.question');
    const answers = item.querySelectorAll('.answer');
    const isAlt = item.classList.contains('layout-alt');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        }
    });

    if (sectionHeading) {
        tl.from(sectionHeading, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        });
    }


    questions.forEach((question, index) => {
        tl.from(question, {
            x: isAlt ? 50 : -50,
            opacity: 0,
            duration: 0.4
        }, index === 0 ? '-=0.2' : '-=0.2');
    });


    answers.forEach((answer, index) => {
        tl.from(answer, {
            x: isAlt ? -300 : 300,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.3');
    });
});


gsap.utils.toArray('.interview-image, .interview-image-grid').forEach((image) => {
    gsap.to(image, {
        scrollTrigger: {
            trigger: image,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    });
});

const part1Image = document.querySelector('#part1-image');
const part2Image = document.querySelector('#part2-image');


gsap.utils.toArray('.interview-item:not(.layout-alt)').forEach((item) => {
    ScrollTrigger.create({
        trigger: item,
        start: 'top center', 
        end: 'bottom center', 
        onEnter: () => {
            document.querySelector('#part1-image').classList.add('visible')
            document.querySelector('#part2-image').classList.remove('visible');
        },
        onLeave: () => {
            document.querySelector('#part1-image').classList.remove('visible');
        },
        onEnterBack: () => {
            document.querySelector('#part1-image').classList.add('visible');
            document.querySelector('#part2-image').classList.remove('visible');
        },
        onLeaveBack: () => {
            document.querySelector('#part1-image').classList.remove('visible');
        }
    });
});

gsap.utils.toArray('.interview-item.layout-alt').forEach((item) => {
    ScrollTrigger.create({
        trigger: item,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
            document.querySelector('#part2-image').classList.add('visible');
            document.querySelector('#part1-image').classList.remove('visible');
        },
        onLeave: () => {
            document.querySelector('#part2-image').classList.remove('visible');
        },
        onEnterBack: () => {
            document.querySelector('#part2-image').classList.add('visible');
            document.querySelector('#part1-image').classList.remove('visible');
        },
        onLeaveBack: () => {
            document.querySelector('#part2-image').classList.remove('visible');
        }
    });
});

gsap.utils.toArray('.section-intro, .layout-change').forEach((item) => {
    ScrollTrigger.create({
        trigger: item,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
            document.querySelector('#part1-image').classList.remove('visible');
            document.querySelector('#part2-image').classList.remove('visible');
        },
        onEnterBack: () => {
            document.querySelector('#part1-image').classList.remove('visible');
            document.querySelector('#part2-image').classList.remove('visible');
        }
    });
});

const imageContainer=document.querySelectorAll('.image-container');
const layer=document.querySelectorAll('.image>*');

gsap.set('#layer02,#layer03,#layer04,#bunshou2',{opacity:0});
gsap.set('#layer01,bunshou',{opacity:1});

ScrollTrigger.create({
    trigger:imageContainer,
    start:'top top',
    end:'+=2000',
    pin:true,
    scrub:true,
    onUpdate:(self)=>{
        if(self.progress<0.25){
            gsap.to('#layer01,#bunshou',{opacity:1});
            gsap.to('#layer02,#layer03,#layer04,#bunshou2',{opacity:0});
        }else if(self.progress>=0.25 && self.progress<0.5){
            gsap.to('#layer01,#layer02,#bunshou',{opacity:1});
            gsap.to('#layer03,#layer04,#bunshou2',{opacity:0});
        }else if(self.progress>=0.5&&self.progress<0.75){
            gsap.to('#layer01,#layer02,#layer03,#bunshou2',{opacity:1});
            gsap.to('#layer04,#bunshou',{opacity:0});
        }else{
            gsap.to('#layer01,#layer02,#layer03,#layer04,#bunshou2',{opacity:1});
            gsap.to('#bunshou',{opacity:0});
        }
        },
});

const backToTocButton = document.createElement('a');
backToTocButton.href = '#';
backToTocButton.className = 'back-to-toc';
backToTocButton.textContent = '目次へ';
document.body.appendChild(backToTocButton);


let lastScrollPosition = 0;
const showButtonPosition = 1000; 

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    
    const tocElement = document.querySelector('.table-of-contents');
    const tocPosition = tocElement.getBoundingClientRect().top + window.pageYOffset;
    

    if (currentScrollPosition > tocPosition + showButtonPosition) {
        backToTocButton.classList.add('visible');
    } else {
        backToTocButton.classList.remove('visible');
    }
    
    lastScrollPosition = currentScrollPosition;
});


backToTocButton.addEventListener('click', (e) => {
    e.preventDefault();
    const tocElement = document.querySelector('.table-of-contents');
    const windowHeight = window.innerHeight;
    const tocHeight = tocElement.offsetHeight;
    const offset = (windowHeight - tocHeight) / 2;
    
    window.scrollTo({
        top: tocElement.offsetTop - offset,
        behavior: 'smooth'
    });
});
