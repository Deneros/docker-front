import React from "react";
import PieChart from "../Charts/PieChart";
import CustomLineChart from "../Charts/LineChart";
import { styled, Card } from "@nextui-org/react";

const StyledCard = styled(Card, {
  minWidth: "600px",
  height: "100%",
  margin: "0.5rem",
});

function ChartsContainer({ topSenders, monthlyCounts, topSignedSenders }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <StyledCard>
          <Card.Body>
            <PieChart data={topSenders} title={'Documentos enviados'} titleSlice={'info:'}/>
          </Card.Body>
        </StyledCard>
        <StyledCard>
          <Card.Body>
            <PieChart data={topSignedSenders} title={'Documentos firmados'} titleSlice={'info:'}/>
          </Card.Body>
        </StyledCard>
      </div>
      <StyledCard>
        <Card.Body>
          <CustomLineChart monthlyCounts={monthlyCounts} />
        </Card.Body>
      </StyledCard>
    </div>
  );
}

export default ChartsContainer;
