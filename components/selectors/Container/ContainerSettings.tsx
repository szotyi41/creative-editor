import React from 'react';
import { AlignmentSettings } from '../AlignmentSettings';
import { DecorationSettings } from '../DecorationSettings';
import { PaddingSettings } from '../PaddingSettings';
import { MarginSetings } from '../MarginSettings';
import { BackgroundSettings } from '../BackgroundSettings';
import { DimensionsSettings } from '../DimensionsSettings';

export const ContainerSettings = () => {
  return (
    <React.Fragment>
      <DimensionsSettings></DimensionsSettings>
      <BackgroundSettings></BackgroundSettings>
      <PaddingSettings></PaddingSettings>
      <MarginSetings></MarginSetings>
      <DecorationSettings></DecorationSettings>
      <AlignmentSettings></AlignmentSettings>
    </React.Fragment>
  );
};
