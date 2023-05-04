import React from 'react';
import { Card } from '@nextui-org/react';

function GeneralCard({ title, value, cardCss={}, headerCSS={}, bodyCss={}, onPress, pressable }) {
  return (
    <Card isPressable={pressable} onPress={onPress}>
      <Card.Header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{title}</Card.Header>
      <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3>{value}</h3>
      </Card.Body>
    </Card>
  );
}

export default GeneralCard;