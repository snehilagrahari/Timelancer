class User {
    constructor() {

    }

    async validateuseremail(e) {
        let res = await fetch('https://obscure-wave-86373.herokuapp.com/profiles');

        let data = await res.json();

        let flag = 0;

        for (let i = 0; i < data.length; i++) {
            if (data[i].email == e) {
                flag = 0;
                break;

            }
            else {
                flag = 1;
            }

        }





        if (flag == 1) {
            return true
        }
        else {
            return false
        }



    }

    async signUP(e, n, p, c) {
        let isvalid = await this.validateuseremail(e);

        if (isvalid) {
            this.email = e
            this.username = n
            this.password = p
            this.title = c
            this.trial = false




            const register_api = `https://obscure-wave-86373.herokuapp.com/profiles`

            let res = await fetch(register_api, {
                method: 'POST',
                body: JSON.stringify(this),
                headers: {
                    'Content-Type': "application/json"
                }
            })
            let data = await res.json()
            alert("Registration Complete! Please Login")
        }
        else {
            alert("Email Already Exists!!!")
            // location.reload()
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

