document.addEventListener('DOMContentLoaded', function() {
  console.log ('reading script');

  //capture images into variables
  var hat=document.getElementById('hat');
  var glasses=document.getElementById('glasses');
  var saber=document.getElementById('saber');
  var watch=document.getElementById('watch');
  var book=document.getElementById('book');

  //hat hover event listener
  glasses.addEventListener('mouseover', function() {
    book.style.opacity=1;
    book.src='images/glasses.png';
  });
  //hat mouseout event listener
  glasses.addEventListener('mouseout', function() {
    book.style.opacity=0;
    book.src='images/glasses.png';
  });

  //glasses hover event listener
  glasses.addEventListener('mouseover', function() {
    book.style.opacity=1;
    book.src='images/glasses.png';
  });
  //glasses mouseout event listener
  glasses.addEventListener('mouseout', function() {
    book.style.opacity=0;
    book.src='images/glasses.png';
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

});
