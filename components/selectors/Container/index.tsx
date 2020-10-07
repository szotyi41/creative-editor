import React from 'react';
import { Resizer } from '../Resizer';
import { ContainerSettings } from './ContainerSettings';
import { BackgroundSettingsStyle, BackgroundSettingsDefaults } from '../BackgroundSettings';
import { PaddingSettingsStyle, PaddingSettingsDefaults } from '../PaddingSettings';
import { MarginSettingsDefaults, MarginSettingsStyle } from '../MarginSettings';
import { AlignmentSettingsStyle, AlignmentSettingsDefaults } from '../AlignmentSettings';
import { PositionsSettingsStyle, PositionsSettingsDefaults } from '../PositionsSettings';
import { DimensionsSettingsDefaults, DimensionsSettingsStyle } from '../DimensionsSettings';
import { BorderSettingsDefaults, BorderSettingsStyle } from '../BorderSettings';
import { ShadowSettingsDefaults, ShadowSettingsStyle } from '../ShadowSettings';

import 'animate.css/animate.css';
import Animate from 'animate.css-react'


const defaultProps = {
  ...PositionsSettingsDefaults,
  ...DimensionsSettingsDefaults,
  ...BackgroundSettingsDefaults,
  ...PaddingSettingsDefaults,
  ...MarginSettingsDefaults,
  ...BorderSettingsDefaults,
  //...AlignmentSettingsDefaults,
  ...ShadowSettingsDefaults
};

export const Container = (props: any) => {
  props = {
    ...defaultProps,
    ...props,
  };
  return (
    <Resizer
      propKey={{ width: 'width', height: 'height' }}
      style={{
        ...PositionsSettingsStyle(props),
        ...DimensionsSettingsStyle(props),
        ...BackgroundSettingsStyle(props),
        ...PaddingSettingsStyle(props),
        ...MarginSettingsStyle(props),
        ...BorderSettingsStyle(props),
        ...AlignmentSettingsStyle(props),
        ...ShadowSettingsStyle(props),
      }}
    >
        {props.children}
      </Resizer>
  );
};

Container.craft = {
  displayName: 'Container',
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ContainerSettings,
  },
};
