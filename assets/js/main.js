/* slider */
let index = 1;
let images = ['assets/image/bg.png','assets/image/bg2.png','assets/image/bg3.png'];
changeImage = function(){
    document.getElementById('background').src = images[index];
    index++;
    if(index==3){
        index=0;
    }
}
setInterval(changeImage,7000);

// event click change slider

const prevSlide = () => {
    document.getElementById('background').src = images[index];
    index--;
    if(index==-1){
        index=2;
    }
}
const nextSlide = () => {
    document.getElementById('background').src = images[index];
    index++;
    if(index==3){
        index=0;
    }
}

document.getElementById('prev').addEventListener('click',prevSlide);
document.getElementById('next').addEventListener('click',nextSlide);


/* video */
$('#videolink').magnificPopup({
    type: 'inline',
    midClick: true
})
