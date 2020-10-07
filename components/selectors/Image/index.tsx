import React from 'react';
import { useNode, useEditor } from '@craftjs/core';
import { Resizer } from '../Resizer';
import { ImageSettings } from './ImageSettings';
import { PositionsSettingsStyle, PositionsSettingsDefaults } from '../PositionsSettings';
import { DimensionsSettingsStyle, DimensionsSettingsDefaults } from '../DimensionsSettings';
import { BackgroundSettingsStyle, BackgroundSettingsDefaults } from '../BackgroundSettings';
import { MarginSettingsStyle, MarginSettingsDefaults } from '../MarginSettings';
import { PaddingSettingsStyle, PaddingSettingsDefaults } from '../PaddingSettings';
import { AlignmentSettingsStyle, AlignmentSettingsDefaults } from '../AlignmentSettings';

export type Image = {
  src: string;
  position: string;
  overflow: string;
  left: string;
  top: string;
  translateX: string;
  translateY: string;
  background: Record<'r' | 'g' | 'b' | 'a', number>;
  color: Record<'r' | 'g' | 'b' | 'a', number>;
  flexDirection: string;
  alignItems: string;
  justifyContent: string;
  fillSpace: string;
  width: string;
  height: string;
  padding: string[];
  margin: string[];
  marginTop: number;
  marginLeft: number;
  marginBottom: number;
  marginRight: number;
  shadow: number;
  children: React.ReactNode;
  radius: number;
};

export const defaultProps = {
  src: '',
  ...PositionsSettingsDefaults,
  ...DimensionsSettingsDefaults,
  ...BackgroundSettingsDefaults,
  ...MarginSettingsDefaults,
  ...PaddingSettingsDefaults,
  //...AlignmentSettingsDefaults
}

export const Image = (props: any) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

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
        ...MarginSettingsStyle(props),
        ...PaddingSettingsStyle(props),
        ...AlignmentSettingsStyle(props)
      }}
    >
      <img src={props.src} alt=""></img>
    </Resizer>
  );
};

Image.craft = {
  displayName: 'Image',
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ImageSettings,
  },
};
