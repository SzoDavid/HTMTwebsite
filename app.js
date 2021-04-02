const logo = document.querySelector(".logo")
const illustration = document.querySelector(".illustration");

const tl = new TimelineMax();

// onLoad
tl.to(logo, 1.5, {opacity: '100%'})
    .to(illustration, 1.5, {
        left: '40%',
        width: '60%',
        'clip-path': 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
        'padding-left': '10%',
        ease: Power2.ease
    });

/*window.addEventListener('beforeunload', function(event) {
        tl.to(illustration, 1.5, {
                    left: '0%',
                    width: '100%',
                    'clip-path': 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)',
                    'padding-left': '0%',
                    ease: Power2.ease
            })
            .to(logo, 1.5, {opacity: '0%'});
});*/