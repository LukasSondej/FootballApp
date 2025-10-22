export const useApi = () => {

const call = async<R>(url: string, method: "GET" | "POST") => {

    
     try {
 const response = await fetch(`http://localhost:3000/${url}`, {method})
          if (response.ok){
                const data: R = await response.json()
                return data
              }else{
                const res_err = await response.text()       
            throw new Error(res_err)       }
      }catch(e){
        throw new Error("Blond")
      }
         
    }
  const getData = async<R>(url: string) => {
       return await call<R>(url, "GET" );

    }
    return {getData}
}

