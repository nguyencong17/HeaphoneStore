/* slider */
let index = 1;
changeImage = function(){
    let images = ['assets/image/bg.png','assets/image/bg2.png','assets/image/bg3.png'];
    
    document.getElementById('background').src = images[index];
    index++;
    if(index==3){
        index=0;
    }
}
setInterval(changeImage,3000);


/* video */
$('#videolink').magnificPopup({
    type: 'inline',
    midClick: true
})
