function Age(){
    //Declare variables
    var ageInput = document.getElementById('ageInput').value;
    var ageOutput = document.getElementById('ageOutput');
    
    /*if the user is over 21 or is 21 then You are old enough will display. If the user is younger than 21 then you are 
    not old enough will display.*/
    
    if (ageInput >= 21){
        ageOutput.innerHTML = 'You are old enough!';
    }else{
        ageOutput.innerHTML = 'You are not old enough!';
    }
}