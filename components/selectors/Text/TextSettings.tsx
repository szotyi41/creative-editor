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
      <ToolbarSection
        title="Appearance"
        props={['color', 'shadow']}
        summary={({ color, shadow }: any) => {
          return (
            <div className="fletext-right">
              <p
                style={{
                  color: color && `rgba(${Object.values(color)})`,
                  textShadow: `0px 0px 2px rgba(0, 0, 0, ${shadow / 100})`,
                }}
                className="text-white text-right"
              >
                T
              </p>
            </div>
          );
        }}
      >
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />
        <ToolbarItem
          full={true}
          propKey="shadow"
          type="slider"
          label="Shadow"
        />
      </ToolbarSection>
    </React.Fragment>
  );
};
