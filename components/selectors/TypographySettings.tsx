import React from 'react';
import { ToolbarSection, ToolbarItem } from '../editor';
import { ToolbarRadio } from '../editor/Toolbar/ToolbarRadio';
import { capitalize, weightDescription } from '../../utils/text';

export const TypographySettingsDefaults = {
  text: 'Text',
  fontSize: '15px',
  textAlign: 'left',
  fontWeight: '500',
  textOverflow: 'clip',
  wordWrap: 'normal',
  whiteSpace: 'normal',
  lineHeight: '15px',
  color: { r: 92, g: 90, b: 90, a: 1 },
  textShadow: 0,
  letterSpacing: 0
}

export const TypographySettingsStyle = ({fontSize, fontWeight, textAlign, textShadow, textOverflow, wordWrap, whiteSpace, textIndent, lineHeight, letterSpacing, color}) => {
  return {
    fontSize: fontSize,
    fontWeight: fontWeight,
    textAlign: textAlign,
    textOverflow: textOverflow,
    wordWrap: wordWrap,
    whiteSpace: whiteSpace,
    textIndent: `${textIndent}px`,
    lineHeight: lineHeight,
    textShadow: `0px 0px 2px rgba(0,0,0,${(textShadow || 0) / 100})`,
    letterSpacing: `${letterSpacing}px`,
    color: `rgba(${Object.values(color)})`,
  }
}


export const TypographySettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Typography"
        props={['fontSize', 'fontWeight', 'textAlign']}
        summary={({ fontSize, fontWeight, textAlign }: any) => {
          return `${fontSize || ''}, ${weightDescription(
            fontWeight
          )}, ${capitalize(textAlign)}`;
        }}
      >
        {/* Font Size */}
        <ToolbarItem
          full={true}
          propKey="fontSize"
          type="number"
          label="Font Size"
        />

        {/* Font Color */}
        <ToolbarItem full={true}
          propKey="color"
          type="color"
          label="Text Color" />

        {/* Line Height */}
        <ToolbarItem
          full={true}
          propKey="lineHeight"
          type="number"
          label="Line Height"
        />

        {/* Letter Spacing */}
        <ToolbarItem
          propKey="letterSpacing"
          type="slider"
          max={50}
          label="Letter Spacing"
        />

        {/* Text Indent */}
        <ToolbarItem propKey="textIndent"
          type="slider"
          min={-100} max={+100}
          label="Text Indent" />

        {/* Text Align */}
        <ToolbarItem propKey="textAlign" type="radio" label="Align">
          <ToolbarRadio value="left" label="Left" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="right" label="Right" />
        </ToolbarItem>
        
        {/* Font Weight */}
        <ToolbarItem propKey="fontWeight" type="radio" label="Weight">
          <ToolbarRadio value="400" label="Regular" />
          <ToolbarRadio value="500" label="Medium" />
          <ToolbarRadio value="700" label="Bold" />
        </ToolbarItem>

        {/* Word Wrap */}
        <ToolbarItem propKey="wordWrap" type="radio" label="Word Wrap">
          <ToolbarRadio value="normal" label="Normal" />
          <ToolbarRadio value="break-word" label="Break Word" />
        </ToolbarItem>

        {/* Text Overflow */}
        <ToolbarItem propKey="textOverflow" type="radio" label="Text Overflow">
          <ToolbarRadio value="clip" label="Clip" />
          <ToolbarRadio value="ellipsis" label="Ellipsis" />
        </ToolbarItem>

        {/* White Space */}
        <ToolbarItem propKey="whiteSpace" type="radio" label="White Space">
          <ToolbarRadio value="normal" label="Normal" />
          <ToolbarRadio value="no-wrap" label="No Wrap" />
          <ToolbarRadio value="pre" label="Pre" />
          <ToolbarRadio value="pre-line" label="Pre Line" />
          <ToolbarRadio value="pre-wrap" label="Pre Wrap" />
        </ToolbarItem>
        
      </ToolbarSection>
    </React.Fragment>
  );
};
