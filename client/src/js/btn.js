import checkUser from './check';

function setBtn(future, current){
    if (current == 'loginBtn'){
      checkUser();

      if(checkUser()){
        var x = document.getElementById(future);
        x.classList.remove("hidden");
        var y = document.getElementById(current);
        y.classList.add("hidden");
      }
      
    } else{
      var x = document.getElementById(future);
      x.classList.remove("hidden");
      var y = document.getElementById(current);
      y.classList.add("hidden");
    }
  }

  export default setBtn