import React from 'react';
import { ToolbarSection, ToolbarItem } from '../editor';
import { ToolbarRadio } from '../editor/Toolbar/ToolbarRadio';

export const AlignmentSettingsDefaults = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fillSpace: 'no',
}

export const AlignmentSettingsStyle = ({ fillSpace, flexDirection, alignItems, justifyContent }) => {
  return {
    flex: fillSpace == 'yes' ? 1 : 'unset',
    flexDirection: flexDirection,
    alignItems: alignItems,
    justifyContent: justifyContent,
    fillSpace: fillSpace
  }
}


export const AlignmentSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="Alignment">

        <ToolbarItem
          propKey="flexDirection"
          type="radio"
          label="Flex Direction"
        >
          <ToolbarRadio value="row" label="Row" />
          <ToolbarRadio value="column" label="Column" />
        </ToolbarItem>

        <ToolbarItem propKey="fillSpace" type="radio" label="Fill space">
          <ToolbarRadio value="yes" label="Yes" />
          <ToolbarRadio value="no" label="No" />
        </ToolbarItem>

        <ToolbarItem propKey="alignItems" type="radio" label="Align Items">
          <ToolbarRadio value="flex-start" label="Flex start" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="flex-end" label="Flex end" />
        </ToolbarItem>

        <ToolbarItem
          propKey="justifyContent"
          type="radio"
          label="Justify Content"
        >
          <ToolbarRadio value="flex-start" label="Flex start" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="flex-end" label="Flex end" />
        </ToolbarItem>
      </ToolbarSection>
    </React.Fragment>
  );
};
