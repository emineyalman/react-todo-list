import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {data} from './Home'
const Detail = () => {
  const {id} = useParams()
  const [ getData , setGetData ] = useState()

  useEffect(() => {
    if(id){
      setGetData(data.find(item => item.id == id))
    }
    
  }, [id])
  
  console.log(id, "params")
  return (
   <div>
   <div>{getData?.name}</div>
   <div>{getData?.description}</div>
   </div>
  )
}

export default Detail