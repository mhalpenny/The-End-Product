function checkUser(){
    var field = document.getElementById("userField");
        if(field.value == ""){
            // found an empty field that is required
            alert("Please fill all required fields");
            return false;
        } else if (field.value == "existing user"){
            alert("Please fill all required fields");
            return false;
        }
    return true;
};

export default checkUser