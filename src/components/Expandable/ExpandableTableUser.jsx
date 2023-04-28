import { useEffect } from "react";
import { Card, Text, Avatar, Grid, Spacer } from "@nextui-org/react";
import { styled, Loading } from "@nextui-org/react";
import { useFetch } from "../../hooks/useFetch";
import { URL } from "../../utils/constants";
import GeneralCard from "../Cards/GeneralCard";

const StyledCard = styled(Card, {
  minWidth: "200px",
  maxWidth: "200px",
  margin: "0 10px",
  textAlign: "center",
});

function ExpandableTableUser({ data }) {
  const { data: userData, loading } = useFetch(
    `${URL}user/${data.usu_id}/documents`
  );

  useEffect(() => {
    console.log(userData);
    console.log(data.usu_id);
  }, []);

  return (
    <Grid.Container gap={2} justify="center" alignItems="center">
      <Grid xs={12} sm={6} md={3}>
        <GeneralCard
          title="Name"
          value={`${data.usu_nombre} ${data.usu_apelli}`}
        />
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <GeneralCard
          title="Total Documents"
          value={loading ? <Loading /> : userData.total_documents}
        />
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <GeneralCard
          title="Completed Documents"
          value={loading ? <Loading /> : userData.completed_documents}
          // onPress={(e)=>{console.log('hola')}}
        />
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <GeneralCard
          title="Pending Documents"
          value={loading ? <Loading /> : userData.pending_documents}
        />
      </Grid>
    </Grid.Container>
  );
}

export default ExpandableTableUser;
