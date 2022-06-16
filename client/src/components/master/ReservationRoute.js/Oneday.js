import react, { useCallback, useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  border: 2px solid rgb(231, 231, 231);
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const OneRes = styled.div`
  border: 2px solid black;
  height: 100%;
  margin: 1vw;
`;
const Timebar = styled.div`
  border: 2px solid black;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
const Oneday = ({ userInfo, pickeddate }) => {
  let pickeddate2 = pickeddate.replace(/[^0-9]/g, "");
  const timeline = [
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
  ];
  const [reservationlist, setReservationlist] = useState([]);

  const getReservation = useCallback(async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/mypage/reservation/${userInfo.user_name}`,
        { withCredentials: true }
      )
      .then((resp) => {
        console.log(
          resp.data.data[0]?.date.replace(/[^0-9]/g, "").slice(8, 10)
        );
        setReservationlist(resp.data.data);

        console.log(realreservationlist);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    getReservation();
  }, [getReservation]);
  const realreservationlist = reservationlist.filter((list) => {
    return pickeddate2 === list.date.replace(/[^0-9]/g, "").slice(0, 8);
  });
  return (
    <Container>
      {timeline.map((hour, idx) => {
        return (
          <Timebar key={idx}>
            <div>{hour}시</div>
            {realreservationlist.map((el, idx) => {
              const time = el.date.replace(/[^0-9]/g, "").slice(8, 10);
              return String(time) === hour ? (
                <OneRes key={idx}>
                  <div>{el.name}</div>
                  <div>
                    {time}시{el.date.replace(/[^0-9]/g, "").slice(10, 12)}분
                  </div>
                  <div></div>
                </OneRes>
              ) : null;
            })}
          </Timebar>
        );
      })}
    </Container>
  );
};
function mapStateToProps(state) {
  return {
    userInfo: state.loginInfo.userInfo,
  };
}
export default connect(mapStateToProps)(Oneday);
