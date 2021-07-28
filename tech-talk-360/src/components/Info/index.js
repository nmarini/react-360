import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import InfoView from './InfoView';
import { asset, NativeModules } from 'react-360';
import { rotate } from '../rotate';

const { AudioModule } = NativeModules;

export default class Info extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
    rotate();
  };

  shouldPlayMusic = () => this.props.name === 'Backyard view';

  handleAudio = () => {
    if (this.shouldPlayMusic() && this.state.open) {
      AudioModule.createAudio('dream', {
        source: asset('dream.mp3'),
      });
      AudioModule.play('dream');
    } else {
      AudioModule.stop('dream');
    }
  };
  render() {
    const { name } = this.props;
    const { open } = this.state;
    this.handleAudio();
    return <InfoView name={name} open={open} onClick={this.handleClick} />;
  }
}
