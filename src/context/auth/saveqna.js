import config from "../../config";

const saveqna = async (props) => {
    const host = config().HOST;

    const response = await fetch(`${host}/api/exam/saveqna`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            qnumber: props.qnumber,
            question: props.question,
            a:props.a,
            b:props.b,
            c:props.c,
            d:props.d,
            ans:props.ans
        }),
    });

    let res = await response.json();
    return res;
};

export default saveqna;
