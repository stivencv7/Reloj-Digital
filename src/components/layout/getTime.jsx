import { useEffect,useState } from 'react'

export const TimeHooks = () => {
   
    const [time, setTime] = useState(null);
    
    const getTime=()=>{
        setTime(new Date())   
    }
    
    useEffect(()=>{
        setInterval(getTime,1000)   
    },[])
   
    return (
        <div className='style'>
            {
                time!=null ? time.getHours()+" : "
                +time.getMinutes()+" : "
                +time.getSeconds() : <i className="pi pi-spin pi-spinner"></i>
            }
        </div> 
    )
}
