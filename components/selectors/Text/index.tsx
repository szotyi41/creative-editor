import React from 'react';
import { useNode, useEditor } from '@craftjs/core';
import { Resizer } from '../Resizer';
import { TextSettings } from './TextSettings';
import ContentEditable from 'react-contenteditable';

export type Text = {
  fontSize: string;
  textAlign: string;
  fontWeight: string;
  color: Record<'r' | 'g' | 'b' | 'a', string>;
  shadow: number;
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

export const Text = ({
  position,
  overflow,
  fontSize,
  textAlign,
  fontWeight,
  color,
  shadow,
  text,
  margin,
  padding,
  left,
  top,
  width,
  height,
  translateX,
  translateY,
}: Partial<Text>) => {
  const {
    connectors: { connect },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  return (
    <Resizer
      propKey={{ width: 'width', height: 'height' }}
      style={{
        position: position,
        overflow: overflow,
        width: width,
        height: height,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        color: `rgba(${Object.values(color)})`,
        fontSize: `${fontSize}px`,
        textShadow: `0px 0px 2px rgba(0,0,0,${(shadow || 0) / 100})`,
        fontWeight: fontWeight,
        textAlign: textAlign,
        left: left,
        top: top,
        transition: `transform(${translateX}, ${translateY})`,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
      }}
    >
      <ContentEditable
        innerRef={connect}
        html={text} // innerHTML of the editable div
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
  props: {
    fontSize: '15',
    textAlign: 'left',
    fontWeight: '500',
    color: { r: 92, g: 90, b: 90, a: 1 },
    margin: [0, 0, 0, 0],
    padding: [0, 0, 0, 0],
    translateX: '0px',
    translateY: '0px',
    position: 'relative',
    overflow: 'visible',
    width: '100%',
    height: 'auto',
    left: '0px',
    top: '0px',
    shadow: 0,
    text: 'Text',
  },
  related: {
    toolbar: TextSettings,
  },
};
