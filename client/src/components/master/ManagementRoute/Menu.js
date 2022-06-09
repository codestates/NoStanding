import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { connect } from "react-redux";
import Modal from "react-modal";

const Container = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  width: 90vw;
`;
const Button = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: blue;
  border: 2px solid $red;
  border-radius: 0.6em;
  color: $red;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;

  &:focus {
    color: #fff;
    outline: 0;
  }

  /* .third {
    border-color: $blue;
    color: #fff;
    box-shadow: 0 0 40px 40px $blue inset, 0 0 0 0 $blue;
    transition: all 150ms ease-in-out; */

  &:hover {
    box-shadow: 0 0 10px 0 $blue inset, 0 0 10px 4px $blue;
  }
`;
const Categorybar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid black;
`;

const Menu = ({ userInfo }) => {
  console.log(userInfo);
  const [category, setCategory] = useState("");
  const [menu, setMenu] = useState("");
  const [img, setImg] = useState("img/사진1.jpeg");
  const [price, setPrice] = useState(0);
  const [shopid, setShopid] = useState("");
  const [iscategory, setIscategory] = useState(false);
  const [ismenu, setismenu] = useState(false);
  const [categorybar, setCategorybar] = useState([]);
  const getShopData = useCallback(async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/mypage/shopinfo/${userInfo.user_name}`,
        { withCredentials: true }
      )
      .then((resp) => {
        console.log(resp.data);
        setShopid(resp.data.data[0].id);
      });
  }, []);
  const getCategory = useCallback(async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/mypage/menu/${userInfo.user_name}`,
        { withCredentials: true }
      )
      .then((resp) => {
        const menus = resp.data.data[0].Menus;
        console.log(resp.data.data[0]);
        setCategorybar(
          menus.map((menu) => {
            return menu.menu_category;
          })
        )
        setMenu(menus);
      });
  }, []);
  useEffect(() => {
    getShopData();
    getCategory();
  }, [getShopData, getCategory]);
  const plusCategory = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/mypage/menu/${userInfo.user_name}`,
        { menu_category: `${category}`, shop_id: `${shopid}` },
        { withCredentials: true }
      )
      .then((resp) => {
        console.log(resp);
        setCategory("");
        getShopData();
        getCategory();
      })
      .catch((err) => console.log(err));
  };
  const plusMenu = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/mypage/menu/${userInfo.user_name}`,
        {
          menu_category: `${category}`,
          shop_id: `${shopid}`,
          image_src: `${img}`,
          name: `${menu}`,
          price: `${price}`,
        },
        { withCredentials: true }
      )
      .then((resp) => {
        console.log(resp);
        setCategory("");
        getShopData();
        getCategory();
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <div>Menu</div>

      <Modal
        ariaHideApp={false}
        isOpen={iscategory ? true : false}
        onRequestClose={() => setIscategory(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            top: "30%",
            left: "29%",
            right: "32%",
            bottom: "50%",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <div>카테고리 추가하기</div>
        <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        ></input>
        <button onClick={plusCategory}>추가하기</button>
      </Modal>
      {categorybar.map((el) => {
        return (
          <Categorybar>
            <div>{el}</div>
            <button onClick={plusMenu}>메뉴추가</button>
          </Categorybar>
        );
      })}
      <Button onClick={() => setIscategory(true)}>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </Button>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
  };
}
export default connect(mapStateToProps)(Menu);
