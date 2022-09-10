import checkUser from './UserCheck';

function setButton(future, current){
    if (current == 'loginBtn'){
      checkUser();

      if(checkUser()){
        // var head = document.getElementById('headSpan');
        // head.classList.remove("hidden");
        var w = document.getElementById('quizBtn');
        w.classList.remove("hidden");
        var x = document.getElementById(future);
        x.classList.remove("hidden");
        var y = document.getElementById(current);
        y.classList.add("hidden");
        var z = document.getElementById('userField');
        z.classList.add("hidden");
      }
      
    } else if (current == 'homeBtn'){
      var x = document.getElementById(future);
      x.classList.remove("hidden");
      var y = document.getElementById(current);
      y.classList.add("hidden");
      var z = document.getElementById('userField');
      z.classList.remove("hidden");

    } else if (future == 'none'){
      var y = document.getElementById(current);
      y.classList.add("hidden");

    } else{
        var x = document.getElementById(future);
        x.classList.remove("hidden");
        var y = document.getElementById(current);
        y.classList.add("hidden");
      }
  }

  export default setButton