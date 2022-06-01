import React ,{useEffect,useState}from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import SearchList from '../components/SearchList';
import { Link } from 'react-router-dom';
import axios from 'axios';


const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  border: 2px solid black;
  height: 5vh;
  align-items: center;
  div {
    width: auto;
  }
`;

function Main() {
  const [shop,setShop]=useState([])

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/`)
    .then((resp)=>{
      const {image_src} =resp.data.data
      const {shop_category, shop_name, shop_category_city, master_address} = resp.data.data.user
      setShop([{image_src:image_src,shop_category:shop_category,shop_name:shop_name,shop_category_city:shop_category_city,master_address:master_address}])
      
    })
  },[])
  return (
    <>
      <div>
        <Banner />
      </div>
      <FlexCol>
        <FlexRow>
          <div>음식</div>
          <div>카페</div>
          <div>미용</div>
        </FlexRow>
        <FlexRow>
          <div>서울</div>
          <div>부산</div>
          <div>인천</div>
          <div>대구</div>
          <div>광주</div>
          <div>대전</div>
          <div>울산</div>
          <div>제주</div>
        </FlexRow>
      </FlexCol>
      <div>
        <Link to="/ShopInfo">
          <SearchList shopInfo={shop}></SearchList>
        </Link>
      </div>
    </>
  );
}

export default Main;
