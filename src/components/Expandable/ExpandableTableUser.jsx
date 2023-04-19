import { Card, Text, Avatar, Grid, Spacer } from '@nextui-org/react';
import { styled } from '@nextui-org/react';

const StyledCard = styled(Card, {
  minWidth: '200px',
  maxWidth: '200px',
  margin: '0 10px',
  textAlign: 'center',
});

function ExpandableTableUser({ data }) {
  return (
    <Grid.Container gap={2} justify="center" alignItems="center">
      <Grid xs={12} sm={6} md={3}>
        <StyledCard>
          <Card.Body>
            <Avatar size="lg" text="AB" />
            <Spacer y={0.5} />
            <Text h4>Name</Text>
            <Text>Role</Text>
          </Card.Body>
          <Card.Footer>
            <Text>Email</Text>
          </Card.Footer>
        </StyledCard>
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <StyledCard>
          <Card.Body>
            <Text h4>Total Documents</Text>
            <Text>123</Text>
          </Card.Body>
        </StyledCard>
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <StyledCard>
          <Card.Body>
            <Text h4>Completed Documents</Text>
            <Text>45</Text>
          </Card.Body>
        </StyledCard>
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <StyledCard>
          <Card.Body>
            <Text h4>Pending Documents</Text>
            <Text>78</Text>
          </Card.Body>
        </StyledCard>
      </Grid>
    </Grid.Container>
  );
}

export default ExpandableTableUser;