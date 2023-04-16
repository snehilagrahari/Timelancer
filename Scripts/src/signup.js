class User {
    constructor() {

    }

    async validateuseremail(e) {
        let res = await fetch('https://timelancer-be.onrender.com/profiles');

        let data = await res.json();

        for(let i=0;i<data.length;i++)
        {
            if(data[i].email == e)
            {
                return false;
            }
        }
        return true;
    }

    async signUP(e, n, p, c) {
        let isvalid = await this.validateuseremail(e);
        console.log(isvalid);
        if (isvalid) {
            this.email = e
            this.username = n
            this.password = p
            this.title = c
            this.trial = false




            const register_api = `https://timelancer-be.onrender.com/profiles`

            let res = await fetch(register_api, {
                method: 'POST',
                body: JSON.stringify(this),
                headers: {
                    'Content-Type': "application/json"
                }
            })
            let data = await res.json()
            alert("Registration Complete! Please Login");
            location.assign("login.html");
        }
        else {
            alert("Email Already Exists!!!")
            location.reload();
        }

    }
}


let signUP_btn = document.getElementById("signUP-btn");

signUP_btn.onclick = () => {
    addData()

}


let user = new User()

const addData = () => {
    let form = document.getElementById("input");
    let email = form.email.value;
    let name = form.name.value;
    let password = form.password.value;
    let country = document.getElementById("country_").value;
    let cruency = document.getElementById("inr_").value;

    user.signUP(email, name, password, country, cruency)
}


window.onload = ()=>{
    document.getElementById("login-btn").onclick= ()=>{
        location.assign("login.html");
    }
}
