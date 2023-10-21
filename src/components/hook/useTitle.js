import { useEffect } from "react"

const useTitle= title=>{
    useEffect(()=>{
        document.title =`${title} || tech-universe`
    },[title])
}

export default useTitle;