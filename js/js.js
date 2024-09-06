function formdata(){
    const a = document.getElementById ("first").value;
    const b = document.getElementById ("last").value;
    const c = document.getElementById ("email").value;
    const d = document.getElementById ("date").value;
    const e = document.getElementById ("people").value;
    const f = document.getElementById ("table").value;
    const g = document.getElementById ("message").value;

    if(a==""||b==""||c==""||d==""||e==""||f==""||g==""){
        alert("All Field are Mandatory");
        return false;
    }

    else{
        document.write("<h1>Congratulation Your Form Successfully Submitted</h1>")
    }

}


function formData(){
    const a = document.getElementById("name").value;
    const b = document.getElementById("email").value;
    const c = document.getElementById("subject").value;
    const d = document.getElementById("text").value;

    if(a==""||b==""||c==""||d==""){
        alert("All Field are Mandatory ! ");
        return false;
    }

    else{
        document.write("<h1>Congratulation Your Form Successfully Submitted</h1>")
    }


}
