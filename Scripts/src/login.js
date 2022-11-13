let login_btn = document.getElementById("login-btn");
login_btn.onclick = () => {
    getLoginData();
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
                put_data(el);
                alert("Login Successful!!");
                setTimeout(() => {
                    location.assign("dashboard.html")    
                }, 1200);
                
            }

        }


    });
    if (flag == 0) {
        alert("Email not registered!")
    }
    else if (flag == 1) {
        alert("Wrong Password! Try Again.")
    }

}


const put_data = async (el) => {

    let {username, id} = el;
    let res = await fetch(`https://obscure-wave-86373.herokuapp.com/user`, {
        method: 'POST',
        body: JSON.stringify({username, id}),
        headers: {
            'Content-Type': 'application/json',
        }

    });
    let data = await res.json();
    console.log(data);

}




