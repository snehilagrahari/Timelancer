let login_btn = document.getElementById("login-btn");
login_btn.onclick = () => {
    getLoginData()
}


const getLoginData = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    getLogin(email, password)

}





let getLogin = async (e, p) => {


    const login_api = `https://obscure-wave-86373.herokuapp.com/profiles`

    const res = await fetch(login_api);

    const data = await res.json();
    Login(e, p, data)


}

const Login = (e, p, data) => {
    let flag = 0;

    data.forEach((el) => {
        if (el.email == e) {
            flag = 1;


            if (el.password == p) {
                flag = 2
                putdata(el)
                location.assign("dashboard.html")

            }

        }


    });
    if (flag == 0) {
        alert("register email does no exist")
    }
    else if (flag == 1) {
        alert("please check your password")
    }

}


const putdata = async (el) => {

    let res = await fetch(`https://obscure-wave-86373.herokuapp.com/user`, {
        method: 'PUT',
        body: JSON.stringify(el),
        headers: {
            'Content-Type': 'application/json',
        }

    });
    let data = await res.json()

}




