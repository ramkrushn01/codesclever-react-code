import config from '../../config';

const sendmsg = async (props)=>{
    const host = config().HOST;
    

    const response = await fetch(`${host}/api/auth/sendmsg`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({name:props.name,email:props.email,msg:props.msg})
    });

    let res = await response.json();
    return res
}

export default sendmsg