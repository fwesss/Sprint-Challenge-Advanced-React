import React from 'react';
import PropTypes from 'prop-types';
import { themed } from 'mineral-ui/themes';
import styled from '@emotion/styled';
import Card from 'mineral-ui/Card';
import CardTitle from 'mineral-ui/Card/CardTitle';
import CardBlock from 'mineral-ui/Card/CardBlock';

const List = styled('ul')({
  listStyle: 'none',
  paddingLeft: 0,
});

const PlayerCard = ({ player, theme }) => {
  const { name, country, searches } = player;

  const ThemedCardTitle = themed(CardTitle)({
    CardTitle_color: theme.color_theme_70,
  });

  return (
    <Card>
      <ThemedCardTitle>{name}</ThemedCardTitle>
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
  theme: PropTypes.shape({
    color_theme_70: PropTypes.string,
  }).isRequired,
};

export default PlayerCard;
