import config from '../../config';

const endexam = async ()=>{
    const host = config().HOST;
        
    const response = await fetch(`${host}/api/exam/endexam`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('auth-token')
        },
        // body:JSON.stringify({email:props.email,password:props.password})
    });

    let res = await response.json();
    return res
}

export default endexam
