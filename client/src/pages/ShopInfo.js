import React from 'react';
import styled from 'styled-components'

const MainImg =styled.img`

`
const Imgcontainer = styled.div`

`
const Imgselectbox =styled.div`

`
const Box =styled.div`
  display:flex;
  flex-direction: column;
`
const Map = styled.div`

`
const Info =styled.p`

`
const Review =styled.div`

`
const Bookbutton = styled.button`
 border: 2px solid black;
 
`
function ShopInfo() {
  return (
    <div>
      <Imgcontainer>
        <MainImg></MainImg>
        <Imgselectbox></Imgselectbox>
      </Imgcontainer>
      <Box>
        <Map></Map>
        <Info></Info>
        <Review></Review>
        <Bookbutton></Bookbutton>
      </Box>
    </div>

  )
}

export default ShopInfo