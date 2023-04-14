import { styled, Card, Text, Grid } from "@nextui-org/react";
import { useFetch } from "../../hooks/useFetch";

const CardWrapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
  padding: "1rem",
});

function ExpandableTableUser({ data }) {
  // const userId = data.id_user;
  // const { data: userData, loading } = useFetch(
  //   "http://localhost:8080/api/user/" + userId
  // );

  // if (loading) {
  //   return <Text>Loading...</Text>;
  // }
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 123 456 7890",
    address: "123 Main St, City, Country",
    otherInfo: "Additional information goes here",
  };

  return (
    <CardWrapper>
      <Card>
        <Card.Body>
          <Grid.Container>
            <Grid xs={12}>
              <Text>Name: {userData.name}</Text>
            </Grid>
            <Grid xs={12}>
              <Text>Email: {userData.email}</Text>
            </Grid>
            <Grid xs={12}>
              <Text>Phone: {userData.phone}</Text>
            </Grid>
            <Grid xs={12}>
              <Text>Address: {userData.address}</Text>
            </Grid>
            <Grid xs={12}>
              <Text>Other info: {userData.otherInfo}</Text>
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
    </CardWrapper>
  );
}

export default ExpandableTableUser;