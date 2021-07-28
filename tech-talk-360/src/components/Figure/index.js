import React from 'react';
import { asset, Text, View } from 'react-360';
import Entity from 'Entity';
import { subscribe } from '../rotate';

export default class Figure extends React.Component {
  state = {
    rotated: 0,
  };

  componentDidMount() {
    subscribe(this.handleRotate);
  }

  handleRotate = () => {
    this.setState(({ rotated }) => ({ rotated: rotated + 10 }));
  };

  render() {
    const { rotated } = this.state;
    return (
      <View
        style={{
          transform: [
            { rotateX: rotated },
            { scaleX: 1 },
            { scaleY: 1 },
            { scaleZ: 1 },
          ],
        }}
      >
        <Text
          style={{
            transform: [
              { translate: [-1, 0, -10] },
              { scaleX: 200 },
              { scaleY: 50 },
              { scaleZ: 100 },
            ],
          }}
        >
          Barrel Roll!
        </Text>

        <Entity
          source={{
            obj: asset('plane.obj'),
            mtl: asset('plane.mtl'),
            // obj: asset('Earth.obj'),
            // mtl: asset('Earth.mtl'),
            // gltf2: asset('scene.gltf'),
          }}
          style={{
            transform: [
              { translate: [0, -10, -20] },
              { scaleX: 0.5 },
              { scaleY: 0.5 },
              { scaleZ: 0.5 },
            ],
          }}
        />
      </View>
    );
  }
}
