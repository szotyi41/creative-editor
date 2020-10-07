import React from 'react';
import { useNode, useEditor } from '@craftjs/core';
import { Resizer } from '../Resizer';
import { TextSettings } from './TextSettings';
import ContentEditable from 'react-contenteditable';
import { TypographySettingsStyle } from '../TypographySettings';
import { TypographySettingsDefaults } from '../TypographySettings';
import { MarginSettingsDefaults, MarginSettingsStyle } from '../MarginSettings';
import { PaddingSettingsDefaults, PaddingSettingsStyle } from '../PaddingSettings';
import { PositionsSettingsDefaults, PositionsSettingsStyle } from '../PositionsSettings';
import { DimensionsSettingsStyle, DimensionsSettingsDefaults } from '../DimensionsSettings';

export type Text = {
  fontSize: string;
  textAlign: string;
  fontWeight: string;
  color: Record<'r' | 'g' | 'b' | 'a', string>;
  textShadow: number;
  text: string;
  margin: [string, string, string, string];
  padding: [string, string, string, string];
  position: string;
  overflow: string;
  left: string;
  top: string;
  translateX: string;
  translateY: string;
  width: string;
  height: string;
};

export const defaultProps = {
  ...TypographySettingsDefaults,
  ...MarginSettingsDefaults,
  ...PaddingSettingsDefaults,
  ...PositionsSettingsDefaults,
  ...DimensionsSettingsDefaults,
}

export const Text = (props: any) => {
  const {
    connectors: { connect },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  props = {
    ...defaultProps,
    ...props
  }
  return (
    <Resizer
      propKey={{ width: 'width', height: 'height' }}
      style={{
        ...TypographySettingsStyle(props),
        ...MarginSettingsStyle(props),
        ...PaddingSettingsStyle(props),
        ...PositionsSettingsStyle(props),
        ...DimensionsSettingsStyle(props),
      }}
    >
      <ContentEditable
        innerRef={connect}
        html={props.text} // innerHTML of the editable div
        disabled={!enabled}
        onChange={(e) => {
          setProp((prop) => (prop.text = e.target.value), 500);
        }} // use true to disable editing
        tagName="h2" // Use a custom HTML tag (uses a div by default)
      />
    </Resizer>
  );
};

Text.craft = {
  displayName: 'Text',
  props: defaultProps,
  related: {
    toolbar: TextSettings,
  },
};
