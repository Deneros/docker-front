import React from "react";
import PieChart from "../Charts/PieChart";
import LineChart from "../Charts/lineChart";
import { styled, Card } from "@nextui-org/react";

const StyledCard = styled(Card, {
  minWidth: "600px",
  height: "100%",
  margin: "0.5rem",
});

function ChartsContainer({ topSenders }) {
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
            <PieChart topSenders={topSenders} />
          </Card.Body>
        </StyledCard>
        <StyledCard>
          <Card.Body>
            <PieChart topSenders={topSenders} />
          </Card.Body>
        </StyledCard>
      </div>
      <StyledCard>
        <Card.Body>
          <LineChart />
        </Card.Body>
      </StyledCard>
    </div>
  );
}

export default ChartsContainer;