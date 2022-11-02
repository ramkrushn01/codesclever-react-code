import config from '../../config';

const getlivedata = async ()=>{
    const host = config().HOST;
        
    const response = await fetch(`${host}/api/exam/liveboard`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            // 'auth-token': localStorage.getItem('auth-token')
        },
        // body:JSON.stringify({email:props.email,password:props.password})
    });

    let res = await response.json();
    return res
}

export default getlivedata
