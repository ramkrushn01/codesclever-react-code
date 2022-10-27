import config from '../../config';

const sendotp = async (props)=>{
    const host = config().HOST;
    

    const response = await fetch(`${host}/api/auth/sendotp`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({email:props.email,forgotpassword:props.forgot})
    });

    let res = await response.json();
    return res
}

export default sendotp