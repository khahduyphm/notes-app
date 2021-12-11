import React from 'react';

import './Column.scss';
import { mapOrder } from '../../utilities/sorts';
import { Container, Draggable } from 'react-smooth-dnd';
import Card from '../Card/Card';
const Column = (props) => {
  const { column } = props;
  const cards = mapOrder(column.cards, column.cardOrder, 'id');

  const onCardDrop = (dropResult) => {
    console.log(dropResult);
  };
  return (
    <div className="column">
      <header className="column-drag-handle">{column.title}</header>
      <div className="card-list">
        <Container
          groupName="vtan-columns"
          orientation="vertical" // default
          onDrop={onCardDrop}
          getChildPayload={(index) => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'card-drop-preview',
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => (
            <Draggable key={index}>
              <Card card={card} />
            </Draggable>
          ))}
        </Container>
      </div>
      <footer>Add commit</footer>
    </div>
  );
};

export default Column;
