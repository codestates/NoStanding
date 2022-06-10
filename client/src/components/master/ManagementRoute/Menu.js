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
  height: 100%;
`;
const MenuContainer = styled.div`
  border: 2px solid black;
  height: 100%;
`;
const Button = styled.button`
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
`;

const Menubar = styled.div`
  border: 2px solid black;
  width: 100%;
  height: 100%;
`;
const Menu = ({ userInfo }) => {
  const [menu, setMenu] = useState(""); //입력하는 메뉴
  const [img, setImg] = useState("img/사진1.jpeg"); //넣는 이미지
  const [price, setPrice] = useState(0); //넣는 가격
  const [shopid, setShopid] = useState(""); //처음에 샵 아이디를 저장하는 스테이트
  const [ismenu, setIsmenu] = useState(false); // 메뉴 모달창 열고닫히는 스테이트 관리
  const [menubar, setMenubar] = useState([]); //맵 렌더링 할 메뉴 저장소
  const [deletenum, setDeletenum] = useState(0);

  const getShopData = useCallback(async () => {
    // 삽 아이디를 뽑아오는 과정(완료)
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/mypage/shopinfo/${userInfo.user_name}`,
        { withCredentials: true }
      )
      .then((resp) => {
        setShopid(resp.data.data[0].id);
      });
  }, []);
  const getMenu = useCallback(async () => {
    //메뉴를 나열하기 위한 과정
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/mypage/menu/${userInfo.user_name}`,
        { withCredentials: true }
      )
      .then((resp) => {
        const menus = resp.data.data[0].Menus;
        console.log(resp.data.data[0].Menus);

        setMenubar(menus);
      });
  }, []);
  useEffect(() => {
    getShopData();
    getMenu();
  }, [getShopData, getMenu]);
  const minusMenu = (menuname) => {
    console.log(menuname);
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/mypage/menu/${userInfo.user_name}/${menuname}/${shopid}`,

        { withCredentials: true }
      )
      .then((resp) => {
        console.log(resp);
        getMenu();
        getShopData();
      })
      .catch((err) => console.log(err));
  };
  const plusMenu = (idx) => {
    //메뉴이름을 추가하기위한 과정
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/mypage/menu/${userInfo.user_name}`,
        {
          shop_id: `${shopid}`,
          image_src: `${img}`,
          name: `${menu}`,
          price: `${price}`,
        },
        { withCredentials: true }
      )
      .then((resp) => {
        console.log(resp);
        getMenu();
        getShopData();
        // setMenu("");
        // setPrice(null);
        // setImg("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <div>Menu</div>

      <Modal
        ariaHideApp={false}
        isOpen={ismenu}
        onRequestClose={() => setIsmenu(false)}
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
        <div>메뉴추가하기</div>
        <div>이름</div>
        <input onChange={(e) => setMenu(e.target.value)} value={menu}></input>
        <div>가격</div>
        <input onChange={(e) => setPrice(e.target.value)} value={price}></input>
        <button onClick={() => plusMenu()}>추가하기</button>
      </Modal>
      {menubar.map((menu, idx) => {
        const menuname = menu.name;
        return (
          <MenuContainer key={idx}>
            <img src={`${menu.image_src}`}></img>
            <div>{menu.name}</div>
            <div>{menu.price}</div>
            <button onClick={() => minusMenu(menuname)}>삭제하기</button>
          </MenuContainer>
        );
      })}
      <Button onClick={() => setIsmenu(!menu)}>
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
