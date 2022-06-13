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
  justify-content: space-between;
  height: 100%;
`;
const Plusimgbutton = styled.button`
  width: 7rem;
  height: 3rem;
  align-self: flex-end;
  justify-self: flex-end;
`;
const Imgcontainerbox = styled.div`
  height: 30%;
`;

const Img = styled.img`
  height: 4px;
  width: 4px;
`;

const Photo = ({ userInfo }) => {
  console.log(userInfo);
  const [imgstore, setImgstore] = useState([]);
  const [shopid, setShopid] = useState(null);
  const [submitFormData, setSubmitFormData] = useState("");
  const getPhoto = useCallback(async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/mypage/img/${userInfo.id}`, {
        withCredentials: true,
      })
      .then((resp) => {
        console.log(resp.data);
        setImgstore(imgstore);
      })
      .catch((err) => err.response.data);
  }, []);
  const postPhoto = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/mypage/img/${userInfo.id}`,
        { user_name: userInfo.user_name },
        {
          withCredentials: true,
        }
      )
      .then((resp) => {
        console.log(resp);
        const formData = new FormData();
        for (let i = 0; i < submitFormData.length; i++) {
          formData.append("file", submitFormData[i]);
        }
      axios.post(`${process.env.REACT_APP_API_URL}/mypage/img/upload/${userInfo.id}`)
        
      });
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
    setSubmitFormData(e.target.files);
    const currentImgList = Array.from(e.target.files).map((file) =>
      URL.revokeObjectURL(file)
    );
    setImgstore((previmg) => previmg.concat(currentImgList));
    Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
  };
  const renderImg = (el) => {
    return el.map((img, idx) => {
      return <Img src={img}></Img>;
    });
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
