import React from 'react';
import { ToolbarSection, ToolbarItem } from '../editor';
import { ToolbarRadio } from '../editor/Toolbar/ToolbarRadio';
import { ToolbarRow } from '../editor/Toolbar/ToolbarRow';

export const PositionsSettingsDefaults = {
  position: 'relative',
  overflow: 'visible',
  left: '0px',
  top: '0px',
  translateX: '0px',
  translateY: '0px'
}

export const PositionsSettingsStyle = ({position, left, top,translateX, translateY, overflow}) => {
  return {
    position: position,
    left: left,
    top: top,
    transition: `transform(${translateX}, ${translateY})`,
    overflow: overflow
  }
}


export const PositionsSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Positions"
        props={['position', 'left', 'top', 'translateX', 'translateY']}
        summary={({ left, top }: any) => {
          return `${left || 0} x ${top || 0}`;
        }}
      >
        <ToolbarItem propKey="position" type="radio" label="Position">
          <ToolbarRadio value="relative" label="Relative" />
          <ToolbarRadio value="absolute" label="Absolute" />
        </ToolbarItem>

        <ToolbarItem propKey="overflow" type="radio" label="Overflow">
          <ToolbarRadio value="hidden" label="Hidden" />
          <ToolbarRadio value="visible" label="Visible" />
        </ToolbarItem>

          <ToolbarItem propKey="left" type="number" label="Left" />
          <ToolbarItem propKey="top" type="number" label="Top" />

          <ToolbarItem propKey="translateX" type="number" label="Translate X" />
        <ToolbarItem propKey="translateY" type="number" label="Translate Y" />
        
      </ToolbarSection>
    </React.Fragment>
  );
};
