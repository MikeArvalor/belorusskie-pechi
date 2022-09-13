let slideBigPict = document.querySelector('.slideBigPict')
let slideBig = document.querySelectorAll(".slideBig")
let img_gal1 = document.querySelector('.img_gal1')
let smallPict = document.getElementsByClassName("smallPict"); 
let img_wrap = document.querySelectorAll('.img-wrap')
let bigPict = document.getElementById("bigPict");
let modal_img = document.getElementById('myModal_img');
let modalImg = document.getElementById("img01_img");
let captionText = document.getElementById("caption");
let span_img = document.getElementsByClassName("close_img")[0];
// let img = document.querySelector('.myImg_img')
let arrImg=[
    'img/чугун_сталь.jpg',
    'img/панорама_сталь.jpg',
    'img/чугун_сталь.jpg',
    'img/панорама_сталь.jpg',
    'img/чугун_сталь.jpg'

]; 
function startImg(){
    for( let q =0; q<slideBig.length;q++){
        slideBig[q].setAttribute('src', arrImg[q])
    }
};
startImg()
for(let j=0; j<smallPict.length; j++){ 
    
    smallPict[j].addEventListener('click',function(e){
       for(let i=0;i<arrImg.length;i++){
           let value =e.target.src.includes(arrImg[i])
           if(value){
            p=i
            console.log(p,'fixed',i)
           }
       }
       modal_img.style.display = "block";
       modalImg.src = this.src;
        const smallPictClone = e.target.cloneNode(false)
        let event_c = e.target
              cleanNode(bigPict)
              bigPict.append(smallPictClone)          
    })
    
function cleanNode(parent){
    for(let child of parent.children){
        child.remove()
    }
}

};
span_img.onclick = function() { 
    modal_img.style.display = "none";
}


