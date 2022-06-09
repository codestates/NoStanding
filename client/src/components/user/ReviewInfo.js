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
`
function ReviewInfo({ data }) {
  const [image, setImage] = useState([]);
  const [loding, setLoding] = useState(false);
  const getImage = useCallback(async () => {
    const parsing = await JSON.parse(data.image_src);
    console.log(parsing);
    if (parsing) {
      setImage(parsing);
    }
    setLoding(true);
  }, []);
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
              return <Img src={img.location} />;
            })}
          </div>
          <Div>
            <div>{data.shop_name}</div>
            <div>{data.createdAt}</div>
            <div>{data.contents}</div>
          </Div>
          <DeleteBtn>
            X
          </DeleteBtn>
        </>
      ) : null}
    </Container>
  );
}
export default ReviewInfo;
