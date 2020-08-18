const doAsync=() =>{
    //return '123'
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("hello test")
        }), 2000
    })
}

const helloWorld = async()=>{
    const result = await doAsync()
    console.log(result)
}

helloWorld()