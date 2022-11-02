import config from "../../config";

const updatelive = async (props) => {
    const host = config().HOST;

    const response = await fetch(`${host}/api/exam/updatelive`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({
            email: props.email,
            marks: props.marks,
            timetaken: props.timeTaken,
        }),
    });

    let res = await response.json();
    return res;
};

export default updatelive;
