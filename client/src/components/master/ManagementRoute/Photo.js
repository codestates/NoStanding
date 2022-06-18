import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 75%;
  h2 {
    margin: 1em;
  }
  margin: 0px auto;
`;
const Previewimg = styled.img``;
const ImgBox = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 5rem;
  border: 2px solid rgb(21, 64, 99);
  border-radius: 10px;
`;
const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
`;
const Plusimgbutton = styled.button`
  width: 10em;
  height: 5em;
  background-color: rgb(21, 64, 99);
  color: white;
  border-radius: 0.5rem;
  position: relative;
  float: right;
  :hover {
    transform: scale(1.05);
    background-color: aqua;
  }
  margin: 1em;
`;
const Imgcontainerbox = styled.div`
  height: 50%;
  width: 100;
  border-radius: 10px;
  border: 2px solid rgb(21, 64, 99);
`;
const FlexDiv2 = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  height: 100%;
  width: 100%;
  padding: 3rem;
`;
const Img = styled.img`
  height: 10em;
  width: 100%;
`;

const Input = styled.input`
  margin: 1em;
`;
const Floatbutton = styled.button`
  width: 3em;
  height: 1em;
  background-color: rgb(21, 64, 99);
  color: white;
  border-radius: 0.5rem;
  position: relative;
  float: right;
  :hover {
    transform: scale(1.05);
    background-color: aqua;
  }
  margin: 1em;
`;
const Div = styled.div`
  background-color: aliceblue;
  border-radius: 10px;
  text-align: center;
`;

const Photo = ({ userInfo }) => {
  console.log(userInfo);
  const [imgstore, setImgstore] = useState([]);
  const [shopid, setShopid] = useState(null);
  const [submitFormData, setSubmitFormData] = useState("");
  const [previewimg, setPreviewimg] = useState([]);
  const getPhoto = useCallback(async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/mypage/img/${userInfo.user_name}`,
        {
          withCredentials: true,
        }
      )
      .then((resp) => {
        console.log(resp.data.data[0].image_src);

        const parsing = JSON.parse(resp.data.data[0]?.image_src);
        console.log(parsing);
        if (parsing) {
          setImgstore(parsing);
        }
      })
      .catch((err) => err.response);
  }, []);
  const deletePhoto = (idx) => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/mypage/img/${userInfo.user_name}`,
        { image_number: idx },
        { withCredentials: true }
      )
      .then((resp) => {
        const keys = imgstore.map((el) => el?.key);
        console.log(keys[idx]);
        axios.delete(`${process.env.REACT_APP_API_URL}/mypage/${keys[idx]}`, {
          withCredentials: true,
        });
        getPhoto();
        getShopData();
      })
      .then((resp) => console.log(resp));
  };
  const postPhoto = (e) => {
    e.preventDefault();
    console.log(submitFormData);
    const formData = new FormData();
    for (let i = 0; i < submitFormData.length; i++) {
      formData.append("file", submitFormData[i]);
    }
    console.log(formData);

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/mypage/img/${userInfo.user_name}`,
        formData,
        { withCredentials: true }
      )
      .then((resp) => {
        console.log(resp);
        getShopData();
        getPhoto();
      })
      .catch((err) => console.log(err.response.data));
  };
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

  const upLoadImg = (e) => {
    console.log(imgstore);
    // const nullorimg = imgstore.map((el) => {
    //   if (el.location) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
    console.log(e.target.files);
    setSubmitFormData(e.target.files);
    const currentImgList = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setPreviewimg([currentImgList]);
    setImgstore((previmg) => {
      console.log(previmg);
      previmg.concat(currentImgList);
    });
    Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
  };

  const renderImg = (el) => {
    return (
      <FlexDiv2 direction="row" className="이건가">
        {el?.map((img, idx) => {
          console.log(el);
          return (
            <>
              <ImgBox>
                <Img
                  key={idx}
                  src={img?.location ? img?.location : img[idx]}
                  idx={idx}
                  alt=""
                ></Img>
                <Floatbutton onClick={() => deletePhoto(idx)}>X</Floatbutton>
              </ImgBox>
            </>
          );
        })}
      </FlexDiv2>
    );
  };

  useEffect(() => {
    getShopData();
    getPhoto();
  }, [getPhoto]);
  return (
    <Container>
      <FlexDiv direction="column">
        <Imgcontainerbox>
          <Div>이미지는 4개까지 게시가능합니다. </Div>
          {renderImg(imgstore)}
        </Imgcontainerbox>
        <Input
          type="file"
          accept="image/*"
          multiple
          onChange={upLoadImg}
        ></Input>
        {renderImg(previewimg)}
        <Plusimgbutton onClick={postPhoto}>추가하기</Plusimgbutton>
      </FlexDiv>
    </Container>
  );
};
function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
  };
}

export default connect(mapStateToProps)(Photo);
