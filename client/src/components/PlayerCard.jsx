import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Card from 'mineral-ui/Card';
import CardTitle from 'mineral-ui/Card/CardTitle';
import CardBlock from 'mineral-ui/Card/CardBlock';

const List = styled('ul')({
  listStyle: 'none',
  paddingLeft: 0,
});

const PlayerCard = ({ player }) => {
  const { name, country, searches } = player;

  return (
    <Card>
      <CardTitle>{name}</CardTitle>
      <CardBlock>
        <List>
          <li>{country}</li>
          <li>{`Searches: ${searches}`}</li>
        </List>
      </CardBlock>
    </Card>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    searches: PropTypes.number,
  }).isRequired,
};

export default PlayerCard;
