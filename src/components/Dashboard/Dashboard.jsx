import { useEffect } from "react";
import GeneralCard from "../Cards/GeneralCard";
import ChartsContainer from "../Container/ChartsContainer";
import { useFetch } from "../../hooks/useFetch";
import { URL } from "../../utils/constants";
import { Loading } from "@nextui-org/react";

function Dashboard({ boughtFirms, usedFirms }) {
  const { data, loading } = useFetch(URL + "reports");

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // return true;
  return loading ? (
    <Loading />
  ) : (
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
        <ChartsContainer
          topSenders={data.top_senders}
          monthlyCounts={data.monthly_counts}
          topSignedSenders={data.top_signed_senders}
        />
      </div>
    </>
  );
}

export default Dashboard;
