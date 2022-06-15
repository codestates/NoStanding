import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 2px solid black;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  background-color: rgba(21,64,99,0.6);
  color: white;
`;
const ShopNameDiv = styled.div`
  font-size: larger;
  font-weight: bold;
`
const Img = styled.img`
  width: 4em;
  height: 4em;
  margin: 1em;
`;
const Div = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const DeleteBtn = styled.div`
  align-self: flex-start;
`;
function ReviewInfo({ data, getReviewData }) {
  const [image, setImage] = useState([]);
  const [loding, setLoding] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const getImage = useCallback(async () => {
    const parsing = await JSON.parse(data.image_src);
    if (parsing.length !== 0) {
      setImage(parsing);
    }else {
      setImage([{location: '/img/default.png', key:1}])
    }
    setLoding(true);
  }, []);
  const clickDeleteBtn = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/review/id/${data.id}`, {
        withCredentials: true,
      })
      .then((resp) => {
        const keys = image.map((el) => el.key);
        for (let i = 0; i < keys.length; i++) {
          axios
            .delete(`${process.env.REACT_APP_API_URL}/${keys[i]}`, {
              withCredentials: true,
            })
            .then((resp) => {
              console.log(resp);
              getReviewData();
            });
        }
      });
  };
  useEffect(() => {
    getImage();
  }, [getImage]);
  return (
    <Container>
      {loding ? (
        <>
          <div>
            {image.map((img) => {
              return <Img src={img.location} key={img.key} />;
            })}
          </div>
          <Div>
            <ShopNameDiv>{data.shop_name}</ShopNameDiv>
            <div>{data.createdAt}</div>
            <div>{data.contents}</div>
          </Div>
          <DeleteBtn onClick={clickDeleteBtn}>X</DeleteBtn>
        </>
      ) : null}
    </Container>
  );
}

export default ReviewInfo;
