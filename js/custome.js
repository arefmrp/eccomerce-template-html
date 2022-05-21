
//menu open & close


    $(".navbar-row1-section-btn").on('click',function (){

        $(".navbar-row2-section").show();
        $(".navbar-row2-section-lists").slideToggle();
    })

///image in product page

let imageMain = document.querySelector(".image-main-image");
let imageboxItem = document.querySelectorAll(".image-box-image");

for (let i = 0;i<imageboxItem.length;i++){
    imageboxItem[i].addEventListener("click",()=>{
        imageMain.src = imageboxItem[i].src;
    })
}