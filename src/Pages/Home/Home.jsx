import React from 'react'
import Banner from '../../components/Banner'
import Cliffs from '../../Assets/images/Cliffs.png'
import Grid from '../../components/Grid'






function Home() {
  return (
    <div>
      <Banner image={Cliffs}/>
      <Grid/>
    </div>
  )
}

export default Home