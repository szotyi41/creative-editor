import React from 'react';
import { useNode, useEditor } from '@craftjs/core';
import { Resizer } from '../Resizer';
import { ImageSettings } from './ImageSettings';

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

const defaultProps = {
  src:
    'data:image/jpeg;base64,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',
  position: 'relative',
  overflow: 'visible',
  left: '0px',
  top: '0px',
  translateX: '',
  translateY: '',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fillSpace: 'no',
  padding: ['0', '0', '0', '0'],
  margin: ['0', '0', '0', '0'],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: '100%',
  height: '64px',
};

export const Image = (props: Partial<Image>) => {
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
  const {
    flexDirection,
    alignItems,
    justifyContent,
    fillSpace,
    background,
    color,
    padding,
    margin,
    shadow,
    radius,
    src,
    position,
    overflow,
    left,
    top,
    translateX,
    translateY,
  } = props;
  return (
    <Resizer
      propKey={{ width: 'width', height: 'height' }}
      style={{
        justifyContent,
        flexDirection,
        alignItems,
        background: `rgba(${Object.values(background)})`,
        color: `rgba(${Object.values(color)})`,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        position: position,
        overflow: overflow,
        left: left,
        top: top,
        transition: `translate(${translateX}, ${translateY})`,
        boxShadow:
          shadow == 0
            ? 'none'
            : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
        borderRadius: `${radius}px`,
        flex: fillSpace == 'yes' ? 1 : 'unset',
      }}
    >
      <img src={src} alt=""></img>
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
