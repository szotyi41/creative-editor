import React from 'react';
import { AlignmentSettings } from '../AlignmentSettings';
import { PaddingSettings } from '../PaddingSettings';
import { MarginSetings } from '../MarginSettings';
import { BackgroundSettings } from '../BackgroundSettings';
import { DimensionsSettings } from '../DimensionsSettings';
import { BorderSettings } from '../BorderSettings';
import { PositionsSettings } from '../PositionsSettings';
import { ShadowSettings } from '../ShadowSettings';

export const ContainerSettings = () => {
  return (
    <React.Fragment>
      <PositionsSettings></PositionsSettings>
      <DimensionsSettings></DimensionsSettings>
      <BackgroundSettings></BackgroundSettings>
      <PaddingSettings></PaddingSettings>
      <MarginSetings></MarginSetings>
      <BorderSettings></BorderSettings>
      <ShadowSettings></ShadowSettings>
      <AlignmentSettings></AlignmentSettings>
    </React.Fragment>
  );
};
