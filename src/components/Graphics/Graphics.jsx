import ChartsContainer from "../Container/ChartsContainer";
import { useFetch } from "../../hooks/useFetch";
import { URL } from "../../utils/constants";
import { Loading } from "@nextui-org/react";

function Graphics({  }) {
  const { data, loading } = useFetch(URL + "reports");

  return loading ? (
    <Loading />
  ) : (
    <>
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

export default Graphics;
