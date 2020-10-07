import React from 'react';
import { ToolbarSection, ToolbarItem } from '../editor';

export const PaddingSettingsDefaults = {
  padding: ['0', '0', '0', '0']
}

export const PaddingSettingsStyle = (props) => {
  return {
    padding: `${props.padding[0]}px ${props.padding[1]}px ${props.padding[2]}px ${props.padding[3]}px`,
  }
} 

export const PaddingSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Padding"
        props={['padding']}
        summary={({ padding }: any) => {
          return `${padding[0] || 0}px ${padding[1] || 0}px ${
            padding[2] || 0
          }px ${padding[3] || 0}px`;
        }}
      >
        <ToolbarItem propKey="padding" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="padding" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="padding" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="padding" index={3} type="slider" label="Left" />
      </ToolbarSection>
    </React.Fragment>
  );
};
