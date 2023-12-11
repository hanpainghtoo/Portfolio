var typed = new Typed('#typed', {
    strings: ['Web Application Developer', 'Experience in 1+ year'],
    typeSpeed: 35,
    startDelay: 10,
    backDelay: 500,
    backSpeed: 35,
    // fadeOut: true,
    loop: true,
    loopCount: Infinity,
    // showCursor: true,
    // smartBackspace: true,
    // cursorChar: '...'
  //   showCursor: true,
  // cursorChar: '|',
  // autoInsertCss: true,

});
    const text = document.querySelector(".auto-text");
    const textLoad = ()=>{
        setTimeout(()=>{
            text.textContent = "Web Application Developer"
        }, 0);
        setTimeout(()=>{
            text.textContent = "Experience in 1+ year"
        }, 5000);
        // setTimeout(()=>{
        //     text.textContent = "Youtuber"
        // }, 8000);
    }
    textLoad();
    // setInterval(textLoad, 12000)
    setInterval(textLoad, 10000);

    document.getElementById('spanHeader').addEventListener('click', function() {
    document.getElementById('profileHerf').click();
});