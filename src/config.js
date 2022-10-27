
const config = ()=>{
    let HOST;
    const __DEV__ = document.domain === 'localhost'

    HOST = __DEV__ ?  "http://127.0.0.1:8000" : "https://api.codesclever.com";
    
    const jr = {
        HOST:HOST
    }

    return jr;
}

export default config;