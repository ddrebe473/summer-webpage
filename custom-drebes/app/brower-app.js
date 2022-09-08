let url =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xl-cZaxNUWHndJwCep-oWcBx2KFnDprpkQ&usqp=CAU';

let image = new Image();
image.src = url;
document.getElementById('circus').appendChild(image);

let url2 =
  'https://api.time.com/wp-content/uploads/2018/04/young-life-washington-family-ranch.jpg?quality=85&w=3648';

let image2 = new Image();
image2.src = url2;
document.getElementById('williams').appendChild(image2);

let url3 =
  'https://i.pinimg.com/originals/e1/1c/8f/e11c8ff2162b68a5492e65dcef859671.jpg';

let image3 = new Image();
image3.src = url3;
document.getElementById('airsoft').appendChild(image3);

let imgArray = [1, 2, 3];

let imgCarousel = () => {};
