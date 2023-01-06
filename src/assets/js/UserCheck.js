function checkUser(){
    var field = document.getElementById("userField");

        //if the field is empty prevent submission and send an alert
        if(field.value == ""){
            alert("Please fill all required fields");
            return false;

         //if the user is taken prevent submission and send an alert
        } else if (field.value == "existing user"){
            alert("Please fill all required fields");
            return false;
        }
    
    //if all the checks are complete, allow submission
    return true;
};

export default checkUser