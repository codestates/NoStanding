import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Banner from "../components/Banner";
import SearchList from "../components/SearchList";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
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
  margin-top: 1rem;
  div {
    height: 100%;
    flex-grow: 1;
    text-align: center;
    border-left: 2px solid black;
  }
`;
const SortDiv = styled.div`
  align-self: flex-end;
  margin-right: 1rem;
  margin-top: 1rem;
  border-radius: 3px;
  width: 100px;
  height: 4vh;
  select {
    width: 100%;
    height: 90%;
    font-size: 15px;
  }
`;
const CategoryList = styled.div`
  background-color: ${(props) =>
    String(props.idx) === props.backgroundOn ? "rgba(239,128,128, 0.2)" : null};
  transition: 0.4s;
  font-size: 15px;
  font-weight: bold;
  padding-top: 1vh;
  cursor: pointer;
  :hover {
    p {
      transform: scale(1.1);
    }
  }
`;
const CategortCityList = styled.div`
  background-color: ${(props) =>
    String(props.idx) === props.backgroundCity
      ? "rgba(239,128,128, 0.2)"
      : null};
  transition: 0.4s;
  font-size: 15px;
  font-weight: bold;
  padding-top: 1vh;
  cursor: pointer;
  :hover {
    p {
      transform: scale(1.1);
    }
  }
`;
const ListView = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const BannerDiv = styled.div``;

function Main({ searchWord }) {
  const category = ["음식점", "카페"];
  const categoryCity = [
    "서울",
    "부산",
    "인천",
    "대구",
    "광주",
    "대전",
    "울산",
    "제주",
  ];
  const [shop, setShop] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [chooseCategory, setChooseCategory] = useState("");
  const [chooseCategoryCity, setChooseCategoryCity] = useState("");
  const [backgroundOn, setBackgroundOn] = useState("");
  const [backgroundCity, setBackgroundCity] = useState("");
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("");
  const offset = (page - 1) * 12;
  console.log(shop);
  const getShopList = useCallback(async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/?order=${order}`)
      .then((resp) => {
        setShop(resp.data.data);
      });
    setIsLoading(false);
  }, [order]);
  useEffect(() => {
    getShopList();
  }, [getShopList]);

  useEffect(() => {
    if (searchWord !== "") {
      axios
        .get(`${process.env.REACT_APP_API_URL}/search?text=${searchWord}`)
        .then((resp) => {
          setShop(resp.data.data.searchList);
        }); //setShop(resp.data.data)
    }
  }, [searchWord]);

  const pickCategory = useCallback(async () => {
    setIsLoading(true);
    if (chooseCategory !== "" && chooseCategoryCity !== "") {
      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/category?shop_category=${chooseCategory}&shop_category_city=${chooseCategoryCity}`
        )
        .then((resp) => setShop(resp.data.data));
    } else if (chooseCategory === "") {
      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/category?shop_category_city=${chooseCategoryCity}`
        )
        .then((resp) => setShop(resp.data.data));
    } else if (chooseCategoryCity === "") {
      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/category?shop_category=${chooseCategory}`
        )
        .then((resp) => setShop(resp.data.data));
    } else {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/`)
        .then((resp) => setShop(resp.data.data));
    }
    setIsLoading(false);
  }, [chooseCategory, chooseCategoryCity]);

  useEffect(() => {
    pickCategory();
  }, [pickCategory]);

  const clickCategory = (value, idx) => {
    idx = String(idx);
    if (value !== chooseCategory) {
      setChooseCategory(value);
      setBackgroundOn(idx);
    } else {
      setChooseCategory("");
      setBackgroundOn("");
    }
  };

  const clickCategoryCity = (value, idx) => {
    idx = String(idx);
    if (value !== chooseCategoryCity) {
      setChooseCategoryCity(value);
      setBackgroundCity(idx);
    } else {
      setChooseCategoryCity("");
      setBackgroundCity("");
    }
  };

  const changeSort = (e) => {
    setOrder(e.target.value);
  };
  return (
    <>
      <BannerDiv>
        <Banner />
      </BannerDiv>
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
                <p>{category}</p>
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
                <p>{category}</p>
              </CategortCityList>
            );
          })}
        </FlexRow>
        <SortDiv>
          <select onChange={changeSort}>
            <option value="">가나다 순</option>
            <option value="view">리뷰 순</option>
            <option value="score">별점 순</option>
          </select>
        </SortDiv>
      </FlexCol>
      <ListView>
        {shop.slice(offset, offset + 12).map((shop) => {
          return (
            <div key={shop.id}>
              <Link to={`/ShopInfo/${shop.id}`}>
                <SearchList shopInfo={shop}></SearchList>
              </Link>
            </div>
          );
        })}
        <div>{isLoading && <Loader />}</div>
        <footer>
          <Pagination total={shop.length} page={page} setPage={setPage} />
        </footer>
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
