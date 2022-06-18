import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Alarm from "../Alarm";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin-left: 25em;
  h2 {
    margin: 1em;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  width: 60%;
  border: 2px solid rgb(21, 64, 99);
  padding: 10px;
  border-radius: 5px;
`;

function Notification({ alarmData }) {
  console.log(alarmData);
  return (
    <>
      <Container>
        <h2>알림</h2>
        {alarmData.map((data, idx) => (
          <Div key={data.id}>
            <Alarm data={data} idx={idx} />
          </Div>
        ))}
      </Container>
    </>
  );
}
function mapStateToProps(state) {
  return {
    alarmData: state.alarmState,
  };
}
export default connect(mapStateToProps)(Notification);
