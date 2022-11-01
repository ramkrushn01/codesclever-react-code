import config from "../../config";

const saveans = async (props) => {
    const host = config().HOST;
    
    const response = await fetch(`${host}/api/exam/saveans`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ qnumber: props.qnumber,ans:props.ans }),
    });

    let res = await response.json();
    return res;
};

export default saveans;
