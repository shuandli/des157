console.log ('reading script');

//capture images into variables
var hat=document.getElementbyId('hat');
var glasses=document.getElementbyId('glasses');
var saber=document.getElementbyId('saber');
var watch=document.getElementbyId('watch');
var book=document.getElementbyId('book');

book.addEventListener('mouseover', function() {
  book.style.opacity=1;
  book.src='images/hat.png';
});
