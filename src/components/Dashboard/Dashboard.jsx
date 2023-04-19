import GeneralCard from "../Cards/GeneralCard";
import ChartsContainer from "../Container/ChartsContainer";

function Dashboard({ boughtFirms, usedFirms, topSenders }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "nowrap",
          margin: "0.5rem",
        }}
      >
        <GeneralCard title="Firmas compradas" value={boughtFirms} />
        <GeneralCard title="Firmas usadas" value={usedFirms} />
      </div>
      <div>
        <ChartsContainer topSenders={topSenders} />
      </div>
    </>
  );
}

export default Dashboard;
