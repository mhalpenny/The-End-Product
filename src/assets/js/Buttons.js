import checkUser from './UserCheck';

function setButton(future, current){
  //if the user is at the login page...
    if (current == 'loginBtn'){
      //runs a check and returns true/false
      checkUser();

      //if all is correct, switch the buttons
      if(checkUser()){
        var welcome = document.getElementById('chooseUsername');
        welcome.classList.add("hidden");
        var z = document.getElementById('userField');
        z.classList.add("hidden");
      }

    //if the login is complete, remove the field
    } else if (current == 'homeBtn'){
      var z = document.getElementById('userField');
      z.classList.remove("hidden");

    //switch the buttons between the passed states
    }else{
        var x = document.getElementById(future);
        x.classList.remove("hidden");
        var y = document.getElementById(current);
        y.classList.add("hidden");
      }
  }

  export default setButton