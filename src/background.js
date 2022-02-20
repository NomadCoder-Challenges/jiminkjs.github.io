const bgImg = [
    "img/Crop-for-Feature.jpeg",
    "img/tumblr_e03cf0209bd33610d471874a75ca5ffc_81f213ae_1280.jpeg",
    "img/tumblr_374b9c137362dc0f9ccc6f6b47e07460_f594ae0f_1280.jpeg",
    "img/tumblr_9090def325581bc4fe1ad5aa2b781bbb_a04c8872_1280.jpeg",
    "img/tumblr_277264aa4dfd217037f92183ce0acc85_a0f9a246_1280.jpeg",
    "img/tumblr_8d00e33c6f6230dc7b59a97b0e83c8d9_d0d78e0f_1280.jpeg",
    "img/tumblr_fcdb24f108bcec10d713e0e39eb32f20_e11bdbef_1280.jpeg",
    "img/tumblr_91615e10c8dbcdabc07a04e5f876d313_d3da6c9c_1280.jpeg",
    "img/tumblr_adbec93a01ce377c25d5db12d44676be_d85c78a9_1280.jpeg",
    "img/tumblr_2fbb19c3b34fceff8899dac05ad867c3_10a67483_1280.jpeg",
    "img/walt-disney-lion-king-wallpaper-preview.jpeg",
    "img/7065382e3f43fb4094168900e47e844e.jpeg",
    "img/uvEmiT.jpeg"
];

function changeBackground() {
    const randIdx = Math.floor(Math.random() * bgImg.length);
    const randImg = bgImg[randIdx];
    
    const img = new Image();
    img.src = `img/${randImg}`;
    img.classList.add("bgimg");
    document.body.appendChild(img);
  
    document.body.style.background = "url('randImg')";
}
    
changeBackground();
setInterval(changeBackground, 5000);


 //////


