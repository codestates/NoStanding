import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Alarm from "../Alarm";
const Container = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  width: 90vw;
  h2 {
    margin: 1em;
  }
`;
const H2 = styled.h2`
  margin: 1em;
`;
const Div = styled.div`
  border-bottom: 2px solid black;
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
