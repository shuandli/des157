document.addEventListener('DOMContentLoaded', function() {
  console.log ('reading script');

  //capture images into variables
  var hat=document.getElementById('hat');
  var glasses=document.getElementById('glasses');
  var saber=document.getElementById('saber');
  var watch=document.getElementById('watch');
  var book=document.getElementById('book');
  //capture closing variables
  var close1=document.getElementById('close1');
  var close2=document.getElementById('close2');
  var close3=document.getElementById('close3');
  var close4=document.getElementById('close4');
  var close5=document.getElementById('close5');

  //hat hover event listener
  hat.addEventListener('mouseover', function() {
    hat.style.opacity=1;
    hat.src='images/hat.png';
  });
  //hat mouseout event listener
  hat.addEventListener('mouseout', function() {
    hat.style.opacity=0;
    hat.src='images/hat.png';
  });
  //hat click
  hat.addEventListener('click', function() {
    hatInfo.style.opacity=1;
  });
  //close info
  close1.addEventListener('click', function () {
    hatInfo.style.opacity=0;
  });

  //glasses hover event listener
  glasses.addEventListener('mouseover', function() {
    glasses.style.opacity=1;
    glasses.src='images/glasses.png';
  });
  //glasses mouseout event listener
  glasses.addEventListener('mouseout', function() {
    glasses.style.opacity=0;
    glasses.src='images/glasses.png';
  });
  //glasses click
  glasses.addEventListener('click', function() {
    glassesInfo.style.opacity=1;
  });
  //close info
  close2.addEventListener('click', function () {
    glassesInfo.style.opacity=0;
  });

  //saber hover event listener
  saber.addEventListener('mouseover', function() {
    saber.style.opacity=1;
    saber.src='images/saber.png';
  });
  //saber mouseout event listener
  saber.addEventListener('mouseout', function() {
    saber.style.opacity=0;
    saber.src='images/saber.png';
  });
  //saber click
  saber.addEventListener('click', function() {
    saberInfo.style.opacity=1;
  });
  //close info
  close3.addEventListener('click', function () {
    saberInfo.style.opacity=0;
  });

  //watch hover event listener
  watch.addEventListener('mouseover', function() {
    watch.style.opacity=1;
    watch.src='images/watch.png';
  });
  //watch mouseout event listener
  watch.addEventListener('mouseout', function() {
    watch.style.opacity=0;
    watch.src='images/watch.png';
  });
  //watch click
  watch.addEventListener('click', function() {
    watchInfo.style.opacity=1;
  });
  //close info
  close4.addEventListener('click', function () {
    watchInfo.style.opacity=0;
  });

  //book hover event listener
  book.addEventListener('mouseover', function() {
    book.style.opacity=1;
    book.src='images/book.png';
  });
  //book mouseout event listener
  book.addEventListener('mouseout', function() {
    book.style.opacity=0;
    book.src='images/book.png';
  });
  //book click
  book.addEventListener('click', function() {
    bookInfo.style.opacity=1;
  });
  //close info
  close5.addEventListener('click', function () {
    bookInfo.style.opacity=0;
  });

});
