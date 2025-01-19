gsap.registerPlugin(ScrollTrigger);

// HTMLに追加するグラデーション要素を作成
const gradientOverlay = document.createElement('div');
gradientOverlay.className = 'gradient-progress';
document.body.appendChild(gradientOverlay);

// スクロールに応じたグラデーション変化
ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
        // スクロール位置に応じてグラデーションの不透明度を変更
        gsap.to(gradientOverlay, {
            opacity: self.progress,
            duration: 0.1,
            ease: 'none'
        });
    }
});


// ヘッダーのアニメーション
gsap.to('.site-header', {
    opacity: 1,
    duration: 1.2,
    ease: 'power2.out'
});

// セクション導入部分のアニメーション
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

// レイアウト変更の区切りのアニメーション
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

// インタビューアイテムのアニメーション
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

// 質問と回答のスタガードアニメーション
gsap.utils.toArray('.interview-item').forEach((item) => {
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

    // 質問のアニメーション
    questions.forEach((question, index) => {
        tl.from(question, {
            x: isAlt ? 50 : -50,
            opacity: 0,
            duration: 0.4
        }, index === 0 ? 0 : '-=0.2');
    });

    // 回答のアニメーション
    answers.forEach((answer, index) => {
        tl.from(answer, {
            x: isAlt ? -300 : 300, // Part1は右から、Part2は左からスライドイン
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, `-=0.3`);
    });
});

// 画像のアニメーション
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

// Part 1 items (right side)
gsap.utils.toArray('.interview-item:not(.layout-alt)').forEach((item) => {
    ScrollTrigger.create({
        trigger: item,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
            part1Image.classList.add('visible');
            part2Image.classList.remove('visible');
        },
        onLeave: () => part1Image.classList.remove('visible'),
        onEnterBack: () => {
            part1Image.classList.add('visible');
            part2Image.classList.remove('visible');
        },
        onLeaveBack: () => part1Image.classList.remove('visible')
    });
});

// Part 2 items (left side)
gsap.utils.toArray('.interview-item.layout-alt').forEach((item) => {
    ScrollTrigger.create({
        trigger: item,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
            part2Image.classList.add('visible');
            part1Image.classList.remove('visible');
        },
        onLeave: () => part2Image.classList.remove('visible'),
        onEnterBack: () => {
            part2Image.classList.add('visible');
            part1Image.classList.remove('visible');
        },
        onLeaveBack: () => part2Image.classList.remove('visible')
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
//     markers:true,
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
