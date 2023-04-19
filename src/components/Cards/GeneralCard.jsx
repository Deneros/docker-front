import React from 'react';
import { Card } from '@nextui-org/react';

function GeneralCard({ title, value }) {
  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3>{value}</h3>
      </Card.Body>
    </Card>
  );
}

export default GeneralCard;