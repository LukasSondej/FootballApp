
export const useApi = () => {

const call = async<R, P={}>(url: string, method: "GET" | "POST" | "PATCH" | "DELETE", body?: P) => {

  const origin = {
    method,
    
  }
  const next = body ? {...origin,body: JSON.stringify(body), headers: {"Content-Type": "application/json"}} : origin;
    
     try {
 const response = await fetch(`http://localhost:3000/${url}`, next)
          if (response.ok){
                const data: R = await response.json()
                return data
              }else{
                const res_err = await response.text()       
            throw new Error(res_err)       }
      }catch(e){
        throw new Error("Bląd")
      }
         
    }
  const getData = async<R>(url: string) => {
       return await call<R>(url, "GET" );

    }
  const postData = async<R, P>(url: string, body: P) => {
       return await call<R, P>(url, "POST", body );

    }
  const patchData = async<R, P>(url: string, body: P) => {
       return await call<R, P>(url, "PATCH", body );

    }
  const deleteData = async<R>(url: string) => {
       return await call<R>(url, "DELETE" );

    }
    return {getData, postData, patchData, deleteData}
}

