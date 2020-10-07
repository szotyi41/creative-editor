import React from 'react';
import { ToolbarSection, ToolbarItem } from '../../editor';
import { MarginSetings } from '../MarginSettings';
import { TypographySettings } from '../TypographySettings';
import { PaddingSettings } from '../PaddingSettings';
import { PositionsSettings } from '../PositionsSettings';
import { DimensionsSettings } from '../DimensionsSettings';

export const TextSettings = () => {
  return (
    <React.Fragment>
      <TypographySettings></TypographySettings>
      <PositionsSettings></PositionsSettings>
      <DimensionsSettings></DimensionsSettings>
      <PaddingSettings></PaddingSettings>
      <MarginSetings></MarginSetings>
    </React.Fragment>
  );
};
