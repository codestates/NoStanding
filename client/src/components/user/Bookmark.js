import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BookmarkList from "./BookmarkList";

const Container = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  width: 90vw;
`;
const H2 = styled.h2`
  margin: 1em;
`;
const Div = styled.div`
  border-bottom: 2px solid black;
`;

const ListView = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

function Bookmark({ userInfo }) {
  const [bookmarks, setBookmarks] = useState([]);
  const getShopInfo = useCallback(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/mypage/bookmark/${userInfo.user_name}`,
        { withCredentials: true }
      )
      .then((resp) => {
        setBookmarks(resp.data.data);
      });
  }, []);

  useEffect(() => {
    getShopInfo();
  }, [getShopInfo]);
  return (
    <Container>
      <Div>
        <H2>즐겨찾기</H2>
      </Div>
      <ListView>
        {bookmarks.map((shopInfo) => (
          <div key={shopInfo[0].id}>
            <Link to={`/ShopInfo/${shopInfo[0].id}`}>
              <BookmarkList bookmarkInfo={shopInfo[0]} />
            </Link>
          </div>
        ))}
      </ListView>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
  };
}
export default connect(mapStateToProps)(Bookmark);
