import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import GridLoader from 'react-spinners/GridLoader';

import FlexItem from 'mineral-ui/Flex/FlexItem';
import { Flex } from 'mineral-ui';
import PlayerCard from './PlayerCard';

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      players: [
        {
          name: '',
          country: '',
          searches: 0,
        },
      ],
    };
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/players');

      this.setState({
        players: response.data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { loading, players } = this.state;
    const { theme } = this.props;

    if (loading) {
      return (
        <Flex justifyContent="center" alignItems="center" height="100vh">
          <FlexItem>
            <GridLoader loading={loading} color={theme.color_theme_60} />
          </FlexItem>
        </Flex>
      );
    }

    return (
      <Flex wrap margin="1em">
        {players.map((player, index) => (
        // eslint-disable-next-line react/no-array-index-key
          <FlexItem key={index} marginVertical="1em">
            <PlayerCard player={player} theme={theme} />
          </FlexItem>
        ))}
      </Flex>
    );
  }
}

Players.propTypes = {
  theme: PropTypes.shape({
    color_theme_60: PropTypes.string,
  }).isRequired,
};

export default Players;
