console.log ('reading');
//capture submit
document.forms.onsubmit=processForm;
document.forms.onreset=clearForm;

//create function
function processForm() {
  console.log('processing form');
  //store variables
  var userName=document.getElementById('userName').value;

  var userName=document.getElementById('verb').value;

  var userName=document.getElementById('adj').value;

if (userNoun=="") {
  alert("type your name");
}

myMsg.innerHTML= 'Hi,' + userName + userVerb + userText;

return false;
}

function clearForm() {
  myMsg.innerHTML='';
}

// (male name) is a normal guy working as a (job title). Meanwhile, overlord Trump is trying to make World War II a cover up for (noun) that mysteriously landed in (country) in 21 BC. Meanwhile still, Obimorphus Prime, the being of last of his race, is in search of the mysterious McGuffin that Trump is trying to cover up. Because there is too much exposition right now, (number) explosions appear out of nowhere in the White House, seemingly killing Trump while Linkin Park plays in the background.
//
// In a twist, Trump survives as he turns out to be a survivor of the aforementioned alien race and sets out to destroy Obimorphus Prime for no reason other than plot. Trump’s first move is to bomb (country) to draw out Prime. (number) of explosions occur and Prime challenges Trump, resulting in (number) more explosions in a fight that lasts (number) minutes. Meanwhile, normal guy becomes relevant to the plot when he stumbles across the fight between Trump and Obimorphus Prime. He saves Prime’s life when he ties him to a (vehicle) and escapes from Trump with Linkin Park playing in the background.
//
// Normal guy and Prime team up and journey to (country) to find the McGuffin that turns out to be a (noun). Trump appears, not having any of it, and engages Prime in combat for possession of the Mcguffin. Also, in another plot twist, more aliens show up to help Prime in order to provide (number) more explosions for the fight scene. Prime is able to gain the upper hand as Normal guy’s girlfriend, (female name), who was with Normal guy in his adventure the whole time, appears in front of Trump, which distracts him. Obimorphus Prime tears off Trump’s (body part) in slow motion, killing him. Normal guy uses the McGuffin to provide free health care for the US in super slow motion, and Linking Park plays in the credits.
//
// After the credits, (actor name) appears to Normal guy, trying to recruit him for the Avengers.
//
