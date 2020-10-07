import React from 'react';
import { ToolbarSection, ToolbarItem } from '../editor';

export const MarginSettingsDefaults = {
  margin: ['0', '0', '0', '0']
}

export const MarginSettingsStyle = (props) => {
  return {
    margin: `${props.margin[0]}px ${props.margin[1]}px ${props.margin[2]}px ${props.margin[3]}px`,
  }
} 

export const MarginSetings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Margin"
        props={['margin']}
        summary={({ margin }: any) => {
          return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
            margin[3] || 0
          }px`;
        }}
      >
        <ToolbarItem propKey="margin" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="margin" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="margin" index={3} type="slider" label="Left" />
      </ToolbarSection>
    </React.Fragment>
  );
};
