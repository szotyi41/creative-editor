import React from 'react';
import { ToolbarSection, ToolbarItem } from '../editor';
import { ToolbarRadio } from '../editor/Toolbar/ToolbarRadio';

export const CircleColorIndicator = ({ backgroundColor, backgroundImage, backgroundGradient, children }) => {
  return (
    <div className="flex flex-row-reverse">
      <div style={{ backgroundColor: `rgba(${Object.values(backgroundColor)})`, backgroundImage: backgroundImage ? `url(${backgroundImage})` : backgroundGradient.style }}
        className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black">
        {children}
      </div>
    </div>
  );
}

export const BackgroundSettingsDefaults = {
  backgroundColor: { r: 255, g: 255, b: 255, a: 1 },
  backgroundGradient: {
    points: [
        {
            left: 0,
            red: 0,
            green: 0,
            blue: 0,
            alpha: 1,
        },
        {
            left: 100,
            red: 255,
            green: 0,
            blue: 0,
            alpha: 1,
        },
    ],
    degree: 0,
    type: 'linear',
    style: ''
  },
  backgroundImage: '',
  backgroundPositionX: '0px',
  backgroundPositionY: '0px',
  backgroundWidth: '100%',
  backgroundHeight: 'auto',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'unset',
  backgroundOrigin: 'initial',
  backgroundClip: 'initial',
  color: { r: 0, g: 0, b: 0, a: 1 },
}

export const BackgroundSettingsStyle = ({backgroundColor, backgroundImage, backgroundPositionX, backgroundPositionY, backgroundWidth, backgroundHeight, backgroundRepeat, backgroundAttachment, backgroundOrigin, backgroundClip, backgroundGradient }) => {
  return {
    backgroundColor: `rgba(${Object.values(backgroundColor)})`,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : backgroundGradient.style,
    backgroundPositionX: backgroundPositionX,
    backgroundPositionY: backgroundPositionY,
    backgroundSize: `${backgroundWidth} ${backgroundHeight}`,
    backgroundRepeat: backgroundRepeat,
    backgroundAttachment: backgroundAttachment,
    backgroundOrigin: backgroundOrigin,
    backgroundClip: backgroundClip
  }
}

export const BackgroundSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Background"
        props={['backgroundColor', 'backgroundImage', 'backgroundGradient']}
        summary={({ backgroundColor, backgroundGradient, backgroundImage }: any) => (
          <CircleColorIndicator backgroundColor={backgroundColor}
            backgroundGradient={backgroundGradient}
            backgroundImage={backgroundImage}>
          </CircleColorIndicator>)
        }
      >
        {/* Background Color */}
        <ToolbarItem
          full={true}
          propKey="backgroundColor"
          type="bg"
          label="Background Color"
        />

        {/* Background Gradient */}
        <ToolbarItem
          full={true}
          propKey="backgroundGradient"
          type="gradient"
          label="Background Gradient"
        />

        {/* Background Image */}
        <ToolbarItem
          full={true}
          propKey="backgroundImage"
          type="text"
          label="Background Image"
        />

        {/* Background Position */}
        <ToolbarItem propKey="backgroundPositionX"
          type="number"
          label="Background Position X">
        </ToolbarItem>

        <ToolbarItem propKey="backgroundPositionY"
          type="number"
          label="Background Position Y">
        </ToolbarItem>

        {/* Background Size */}
        <ToolbarItem propKey="backgroundWidth"
          type="number"
          label="Background Width">
        </ToolbarItem>

        <ToolbarItem propKey="backgroundHeight"
          type="number"
          label="Background Height">
        </ToolbarItem>

        {/* Background Repeat */}
        <ToolbarItem propKey="backgroundRepeat" type="radio" label="Background Repeat">
          <ToolbarRadio value="no-repeat" label="No Repeat" />
          <ToolbarRadio value="repeat" label="Repeat" />
          <ToolbarRadio value="repeat-x" label="Repeat X" />
          <ToolbarRadio value="repeat-y" label="Repeat Y" />
        </ToolbarItem>

        {/* Background Attachment */}
        <ToolbarItem propKey="backgroundAttachment" type="radio" label="Background Attachment">
          <ToolbarRadio value="unset" label="Unset" />
          <ToolbarRadio value="fixed" label="Fixed" />
          <ToolbarRadio value="scroll" label="Scroll" />
        </ToolbarItem>

        {/* Background Origin */}
        <ToolbarItem propKey="backgroundOrigin" type="radio" label="Background Origin">
          <ToolbarRadio value="initial" label="Initial" />
          <ToolbarRadio value="padding-box" label="Padding Box" />
          <ToolbarRadio value="border-box" label="Border Box" />
          <ToolbarRadio value="content-box" label="Content Box" />
        </ToolbarItem>

        {/* Background Clip */}
        <ToolbarItem propKey="backgroundClip" type="radio" label="Background Clip">
          <ToolbarRadio value="initial" label="Initial" />
          <ToolbarRadio value="padding-box" label="Padding Box" />
          <ToolbarRadio value="border-box" label="Border Box" />
          <ToolbarRadio value="content-box" label="Content Box" />
        </ToolbarItem>

      </ToolbarSection>
    </React.Fragment>
  );
};
