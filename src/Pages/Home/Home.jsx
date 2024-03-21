import React from 'react'
import Banner from '../../components/Banner'
import Grid from '../../components/Grid'
import Cliffs from '../../Assets/images/Cliffs.png'





function Home() {
  return (
    <div>
      <Banner image={Cliffs}/>
      <Grid />
    </div>
  )
}

export default Home