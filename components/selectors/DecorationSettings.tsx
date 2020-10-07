import React from 'react';
import { ToolbarSection, ToolbarItem } from '../editor';
import { ToolbarRadio } from '../editor/Toolbar/ToolbarRadio';

export const DecorationSettingsDefaults = {
  buttonStyle: 'full'
}

export const DecorationSettingsStyle = ({}) => {
  return {
  }
}

export const DecorationSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Decoration"
        props={['shadow', 'buttonStyle']}
      >

        <ToolbarItem propKey="buttonStyle" type="radio" label="Style">
          <ToolbarRadio value="full" label="Full" />
          <ToolbarRadio value="outline" label="Outline" />
        </ToolbarItem>

      </ToolbarSection>
    </React.Fragment>
  );
};
