import { useEffect } from "react"

const useTitle= title=>{
    useEffect(()=>{
        document.title =`${title} || tech-O-world`
    },[title])
}

export default useTitle;