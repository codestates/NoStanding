import React from 'react';
import styled from 'styled-components';




  const Container = styled.div`
  width: 23vw;
  height: 30vh;
  border: 2px solid black;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
  const Img = styled.div`
    width: 100%;
    height: 60%;
    border: 2px solid black;
  `
  const Star = styled.div`
    align-self: flex-start;
  `
  const ShopName = styled.div`
  margin-top: 2%;
    align-self: flex-start;
  `
  const ShopAddress = styled.div`
  margin-top: 2%;
    align-self: flex-start;
  `
  const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2%;
    div{
      border: 2px solid black;
      margin: 0 10px 0 10px;
    }
  `
function SearchList({shopInfo}) {
   console.log(shopInfo)
  return (
    <Container>
    <Star>☆</Star>
      <Img ></Img>
      <ShopName>{shopInfo[0].shop_name}</ShopName>
      <ShopAddress>{shopInfo[0].shop_category_city}</ShopAddress>
      <FlexRow>
        <div>별점</div>
        <div>리뷰수</div>
      </FlexRow>
    </Container>
  )
}
export default SearchList;
