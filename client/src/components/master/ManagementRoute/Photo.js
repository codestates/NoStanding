import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
`;
const Plusimgbutton = styled.button`
  width: 7rem;
  height: 3rem;
  align-self: flex-end;
  justify-self: flex-end;
`;
const Imgcontainerbox = styled.div`
  height: 30vw;
`;
const FlexDiv2 = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  height: 25%;
  width: 100%;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
`;
const Floatbutton = styled.button`
  float: inline-end;
`;

const Photo = ({ userInfo }) => {
  console.log(userInfo);
  const [imgstore, setImgstore] = useState([]);
  const [shopid, setShopid] = useState(null);
  const [submitFormData, setSubmitFormData] = useState("");
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
      .then((resp) => console.log(resp))
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
    console.log(e.target.files);
    setSubmitFormData(e.target.files);
    const currentImgList = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    console.log(currentImgList);
    setImgstore((previmg) => previmg.concat(currentImgList));
    Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
  };

  const renderImg = (el) => {
    return (
      <FlexDiv2 direction="row">
        {el.map((img, idx) => {
          return (
            <>
              <Img key={img?.key} src={img?.location} idx={idx} alt=""></Img>
              <Floatbutton onClick={() => deletePhoto(idx)}>X</Floatbutton>
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
        <Imgcontainerbox>{renderImg(imgstore)}</Imgcontainerbox>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={upLoadImg}
        ></input>
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
