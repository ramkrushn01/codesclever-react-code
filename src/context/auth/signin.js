import config from "../../config";

const signin = async (props) => {
    const host = config().HOST;
    const promotoken = localStorage.getItem("promoToken");

    const response = await fetch(`${host}/api/auth/isvalidotp`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fullname: props.fullname,
            email: props.email,
            phone: props.phone,
            password: props.password,
            otp: props.otp,
            promotoken: promotoken,
        }),
    });

    let res = await response.json();
    return res;
};

export default signin;
