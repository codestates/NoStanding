import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid black;
  width: 100%;
  justify-content: space-around;
`;
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
    console.log(data.image_src);
    const parsing = await JSON.parse(data.image_src);
    if (parsing) {
      setImage(parsing);
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
  console.log(image);
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
            <div>{data.shop_name}</div>
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
