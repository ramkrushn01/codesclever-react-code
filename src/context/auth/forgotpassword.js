import config from '../../config';

const forgotpassword = async (props)=>{
    const host = config().HOST;
    
    const response = await fetch(`${host}/api/auth/forgotpass`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({email:props.email,otp:props.otp,password:props.password})
    });

    let res = await response.json();
    return res
}

export default forgotpassword