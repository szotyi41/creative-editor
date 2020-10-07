import React from 'react';
import { ToolbarSection, ToolbarItem } from '../../editor';
import { PositionsSettings } from '../PositionsSettings';
import { AlignmentSettings } from '../AlignmentSettings';
import { DimensionsSettings } from '../DimensionsSettings';
import { MarginSetings } from '../MarginSettings';
import { PaddingSettings } from '../PaddingSettings';
import { BackgroundSettings } from '../BackgroundSettings';

export const ImageSettings = () => {
  return (
    <React.Fragment>
      
      <ToolbarSection title="Image">
        <ToolbarItem full={true} propKey="src" type="text" label="Image" />
      </ToolbarSection>

      <PositionsSettings></PositionsSettings>
      <DimensionsSettings></DimensionsSettings>
      <BackgroundSettings></BackgroundSettings>
      <MarginSetings></MarginSetings>
      <PaddingSettings></PaddingSettings>
      <AlignmentSettings></AlignmentSettings>
    </React.Fragment>
  );
};
