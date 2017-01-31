console.log('reading madScript');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //capture submit
    document.forms.onsubmit = processForm;
    document.forms.onreset = clearForm;

    //create function
    function processForm() {
        console.log('processing');

        //store variables
        var userName = document.forms.userName.value;
          console.log(userName);
        var userJob = document.forms.userJob.value;
          console.log('process');
        var userNoun = document.forms.userNoun.value;
          console.log('process');
        var userCountry = document.forms.userCountry.value;
          console.log('process');
        var userNumber = document.forms.userNumber.value;
          console.log('process');
        var userCountry2 = document.forms.userCountry2.value;
          console.log('process');
        var userNumber2 = document.forms.userNumber2.value;
          console.log('process');
        var userNumber3 = document.forms.userNumber3.value;
          console.log('process');
        var userNumber4 = document.forms.userNumber4.value;
          console.log('process');
        var userVehicle = document.forms.userVehicle.value;
          console.log('process');
        var userCountry3 = document.forms.userCountry3.value;
          console.log('process');
        var userNoun2 = document.forms.userNoun2.value;
          console.log('process');
        var userNoun3 = document.forms.userNoun3.value;
          console.log('process');
        var userShout = document.forms.userShout.value;
          console.log('process');
        var userNoun4 = document.forms.userNoun4.value;
          console.log('process');

        //story of Ertobutts v Trump
        myMsg.innerHTML = userName + " is a normal guy working as a(n) " + userJob + ". Meanwhile, overlord Trump is trying to make World War II a cover up for a(n) " + userNoun + " that mysteriously landed in " + userCountry + " in 21 BC. Meanwhile still, Obimorphus Prime, the being of last of his race, is in search of the mysterious macguffin that Trump is trying to cover up. Because there is too much exposition right now, " + userNumber + " explosions appear out of nowhere in slow motion around the White House, seemingly killing Trump while Linkin Park plays in the background. In a twist, Trump survives as he turns out to be a survivor of the aforementioned alien race and sets out to destroy Obimorphus Prime for no reason other than plot filler. Trump’s first move is to bomb " + userCountry2 + " out of anger. " + userNumber2 + " of explosions happen across the country, and Prime intervenes, challenging Trump to a fight that results in " + userNumber3 + " more explosions in a fight which goes on for " + userNumber4 + " hours. Meanwhile, normal guy becomes relevant to the plot when he stumbles across the fight between Trump and Obimorphus Prime. He saves Prime’s life when he ties him to a " + userVehicle + " to escape in slow motion. Normal guy and Prime team up and journey to " + userCountry3 + " to find the macguffin that will turn the tide of the war on Trump. The macguffin turns out to be a " + userNoun2 + " . Trump appears, not having any of it, and engages Prime in combat for possession of the macguffin. Prime and normal guy use the macguffin, which exposes Trump's true form as Mecha Hitler who can transform into a " + userNoun3 + ", twisting the plot a second time. A fight ensues, with normal guy shouting " + userShout + ". Normal guy's girlfriend, who happened to be there the whole time, distracts Trump with her unrealistically astounding beauty, which allows Prime to gain the upper hand. Prime proceeds to tear Trump's " + userNoun4 + " off, killing him. Because the producer's budget ran out from too many explosions, the credits immediately roll." ;

        return false;
    }

    function clearForm() {
        myMsg.innerHTML = '';
    }

});
