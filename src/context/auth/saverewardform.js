import config from "../../config";

const saverewardform = async (props) => {
    const host = config().HOST;

    const response = await fetch(`${host}/api/exam/rewardform`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({
            officialname: props.officialname,
            email: props.email,
            contact: props.contact,
            street1: props.street1,
            street2: props.street2,
            city: props.city,
            postalcode: props.postalcode,
            state: props.state,
            tshirtsize: props.tshirtsize,
        }),
    });

    let res = await response.json();
    return res;
};

export default saverewardform;
