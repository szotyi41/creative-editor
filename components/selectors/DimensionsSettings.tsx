import React from 'react';
import { ToolbarSection, ToolbarItem } from '../editor';

export const DimensionsSettingsDefaults = {
  width: '100%',
  height: 'auto',
  minWidth: 'none',
  maxWidth: 'none',
  minHeight: 'none',
  maxHeight: 'none',
}

export const DimensionsSettingsStyle = ({width, height, minWidth, minHeight, maxWidth, maxHeight}) => {
  return {
    width: width,
    height: height,
    minWidth: minWidth,
    maxWidth: maxWidth,
    minHeight: minHeight,
    maxHeight: maxHeight
  }
}

export const DimensionsSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Dimensions"
        props={['width', 'height']}
        summary={({ width, height }: any) => {
          return `${width || 0} x ${height || 0}`;
        }}
      >
        <ToolbarItem propKey="width" type="number" label="Width" />
        <ToolbarItem propKey="height" type="number" label="Height" />

        <ToolbarItem propKey="width" type="number" label="Min Width" />
        <ToolbarItem propKey="height" type="number" label="Min Height" />

        <ToolbarItem propKey="width" type="number" label="Max Width" />
        <ToolbarItem propKey="height" type="number" label="Max Height" />
      </ToolbarSection>
    </React.Fragment>
  );
};
