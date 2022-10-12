var arr ={
    'img':"./Images/IMG_20200902_134550_450.jpg",
    'img2':"./Images/download.jfif",
    'img3':"./Images/Selam-tesfaye-Ethiopian-Celebrities-Best-Dressed-Habesha-Kemis-for-2022.jpg",
    'img4':"./Images/Simple-Crop-Habesha-Kemis1.jpg"

}
var content="";
for (let x in arr) {
    content += '<div class="swiper-slide "><img class="" src="'+arr[x]+'"></div>';
  }
document.getElementById('dy').innerHTML=content;