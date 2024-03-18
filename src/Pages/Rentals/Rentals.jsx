import React, { useEffect, useState } from 'react'
import Slider from '../../components/Slider'
import { useParams } from 'react-router-dom'
import Data from '../../Assets/Data/data.json';
import Error404 from '../../components/Error404';

function Rentals() {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(Data.find(item => item.id === id))
  }, [id])

  if (!data) {
    return <Error404></Error404>
  }

  return (

    <div>
      {data && <Slider data={data} />}

    </div>
  )
}

export default Rentals