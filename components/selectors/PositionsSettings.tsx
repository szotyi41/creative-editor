import React from 'react';
import { ToolbarSection, ToolbarItem } from '../editor';
import { ToolbarRadio } from '../editor/Toolbar/ToolbarRadio';
import { ToolbarRow } from '../editor/Toolbar/ToolbarRow';

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

        <ToolbarRow>
          <ToolbarItem propKey="left" type="text" label="Left" />
          <ToolbarItem propKey="top" type="text" label="Top" />
        </ToolbarRow>

        <ToolbarRow>
          <ToolbarItem propKey="translateX" type="text" label="Translate X" />
          <ToolbarItem propKey="translateY" type="text" label="Translate Y" />
        </ToolbarRow>
      </ToolbarSection>
    </React.Fragment>
  );
};
