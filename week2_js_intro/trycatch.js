const doAsync=() =>{
    status=false
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(status){
                resolve("hello test")
            }else{
                reject("nah")
            }
        }, 1000)
    })
}

const helloWorld = async()=>{
    try{
        const result = await doAsync()
        console.log(result)
    }catch(error){
        console.log(error)
    }finally{
        console.log("done")
    }
    
}

helloWorld()