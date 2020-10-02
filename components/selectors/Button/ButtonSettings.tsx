import React from 'react';
import { MarginSetings } from '../MarginSettings';
import { BackgroundSettings } from '../BackgroundSettings';
import { DecorationSettings } from '../DecorationSettings';
import { PaddingSettings } from '../PaddingSettings';
import { PositionsSettings } from '../PositionsSettings';
import { DimensionsSettings } from '../DimensionsSettings';

export const ButtonSettings = () => {
  return (
    <React.Fragment>
      <BackgroundSettings></BackgroundSettings>
      <PositionsSettings></PositionsSettings>
      <DimensionsSettings></DimensionsSettings>
      <PaddingSettings></PaddingSettings>
      <MarginSetings></MarginSetings>
      <DecorationSettings></DecorationSettings>
    </React.Fragment>
  );
};
