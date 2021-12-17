import {useEffect, useState}from 'react';

const useDate = () =>{
  const [today, setDate] = useState(new Date());
  useEffect(()=>
    {
      const timer = setInterval(()=>{
        setDate(new Date());
      }, 60000)

      return ()=>{clearInterval(timer);}
    },[])

  const time = today;

  return time;
}

export default useDate;
