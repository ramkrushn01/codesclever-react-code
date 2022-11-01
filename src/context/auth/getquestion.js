import config from "../../config";

const getquestions = async (props) => {
    const host = config().HOST;
    
    const response = await fetch(`${host}/api/exam/getquestions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ currentQN: props.currentQN }),
    });

    let res = await response.json();
    return res;
};

export default getquestions;
