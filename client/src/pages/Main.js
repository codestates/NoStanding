import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Banner from '../components/Banner';
import SearchList from '../components/SearchList';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';


const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border: 2px solid black;
  height: 5vh;
  align-items: center;
  div {
    height: 100%;
    flex-grow: 1;
    text-align: center;
    border-left: 2px solid black;
  }
`;
const CategoryList = styled.div`
  background-color: ${props =>
    String(props.idx) === props.backgroundOn ? 'rgba(0, 0, 0, 0.2)' : null};
`;
const CategortCityList = styled.div`
  background-color: ${props =>
    String(props.idx) === props.backgroundCity ? 'rgba(0, 0, 0, 0.2)' : null};
`;
const ListView = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
function Main({ searchWord }) {
  const category = ['음식', '카페', '미용'];
  const categoryCity = [
    '서울',
    '부산',
    '인천',
    '대구',
    '광주',
    '대전',
    '울산',
    '제주',
  ];
  const [shop, setShop] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [chooseCategory, setChooseCategory] = useState('');
  const [chooseCategoryCity, setChooseCategoryCity] = useState('');
  const [backgroundOn, setBackgroundOn] = useState('');
  const [backgroundCity, setBackgroundCity] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/`).then(resp => {
      setShop(resp.data.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (searchWord !== '') {
      axios
        .get(`${process.env.REACT_APP_API_URL}/search/${searchWord}`)
        .then(resp => console.log(resp.data.data)); //setShop(resp.data.data)
    }
  }, [searchWord]);

  useEffect(() => {
    chooseCategory !== '' && chooseCategory !== ''
      ? axios
          .get(
            `${process.env.REACT_APP_API_URL}/category?shop_category=${chooseCategory}&shop_category_city=${chooseCategoryCity}`,
          )
          .then(resp => {
            setShop(resp.data.data);
          })
      : chooseCategory === ''
      ? axios
          .get(
            `${process.env.REACT_APP_API_URL}/category?shop_category_city=${chooseCategoryCity}`,
          )
          .then(resp => {
            setShop(resp.data.data);
          })
      : chooseCategoryCity === ''
      ? axios
          .get(
            `${process.env.REACT_APP_API_URL}/category?shop_category=${chooseCategory}`,
          )
          .then(resp => setShop(resp.data.data))
      : axios.get(`${process.env.REACT_APP_API_URL}/`).then(resp => {
          setShop(resp.data.data);
        });
  }, [chooseCategory, chooseCategoryCity]);

  const clickCategory = (value, idx) => {
    idx = String(idx);
    if (value !== chooseCategory) {
      setChooseCategory(value);
      setBackgroundOn(idx);
    } else {
      setChooseCategory('');
      setBackgroundOn('');
    }
  };

  const clickCategoryCity = (value, idx) => {
    idx = String(idx);
    if (value !== chooseCategoryCity) {
      setChooseCategoryCity(value);
      setBackgroundCity(idx);
    } else {
      setChooseCategoryCity('');
      setBackgroundCity('');
    }
  };
  return (
    <>
      <div>
        <Banner />
      </div>
      <FlexCol>
        <FlexRow>
          {category.map((category, idx) => {
            return (
              <CategoryList
                key={idx}
                idx={idx}
                backgroundOn={backgroundOn}
                onClick={() => clickCategory(category, idx)}
              >
                {category}
              </CategoryList>
            );
          })}
        </FlexRow>
        <FlexRow>
          {categoryCity.map((category, idx) => {
            return (
              <CategortCityList
                key={idx}
                idx={idx}
                backgroundCity={backgroundCity}
                onClick={() => clickCategoryCity(category, idx)}
              >
                {category}
              </CategortCityList>
            );
          })}
        </FlexRow>
      </FlexCol>
      <ListView>
        {isLoading ? (
          <div>is Loading...</div>
        ) : (
          shop.map(shop => {
            return (
              <div key={shop.id}>
                <Link to={`/ShopInfo/${shop.id}`}>
                  <SearchList shopInfo={shop}></SearchList>
                </Link>
              </div>
            );
          })
        )}
      </ListView>
    </>
  );
}
function mapStateToProps(state) {
  return {
    searchWord: state.shopSearch.shopSearchInfo,
  };
}

export default connect(mapStateToProps)(Main);
