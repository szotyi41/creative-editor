import React from 'react';
import { ToolbarSection, ToolbarItem } from '../editor';
import { ToolbarRadio } from '../editor/Toolbar/ToolbarRadio';

export const CircleColorIndicator = (props: any) => {
    return (
        <div className="flex flex-row-reverse">
            <div style={{ backgroundColor: `#fff`, boxShadow: ShadowSettingsStyle(props).boxShadow }}
                className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black">
                <p style={{ color: `#000` }} className="text-white w-full text-center">T</p>
            </div>
        </div>
    );
}

export const ShadowSettingsDefaults = {
    boxShadowOffset: [0, 0],
    boxShadowBlur: 0, 
    boxShadowSpread: 0, 
    boxShadowColor: { r: 0, g: 0, b: 0, a: 0.5 }, 
    boxShadowInset: 'outline',
    textShadowOffset: [0, 0],
    textShadowBlur: 0,
    textShadowSpread: 0,
    textShadowColor: { r: 0, g: 0, b: 0, a: 0.5 },
    textShadowInset: 'outline'
}

export const ShadowSettingsStyle = ({ boxShadowOffset, boxShadowBlur, boxShadowSpread, boxShadowColor, boxShadowInset, textShadowOffset, textShadowBlur, textShadowSpread, textShadowColor, textShadowInset }) => {
    return {
        boxShadow: `${boxShadowOffset[0]}px ${boxShadowOffset[1]}px ${boxShadowBlur}px ${boxShadowSpread}px rgba(${Object.values(boxShadowColor)}) ${boxShadowInset === 'inset' ? 'inset' : ''}`,
        textShadow: `${textShadowOffset[0]}px ${textShadowOffset[1]}px ${textShadowBlur}px ${textShadowSpread}px rgba(${Object.values(textShadowColor)}) ${textShadowInset === 'inset' ? 'inset' : ''}`,
    }
}
//summary={(props: any) => <CircleColorIndicator boxShadow={props}></CircleColorIndicator>}
export const ShadowSettings = () => {
    return (
        <React.Fragment>
            <ToolbarSection
                title="BoxShadow"
                props={[]}
                
            >
                {/* Box Shadow Offset */}
                <ToolbarItem propKey="boxShadowOffset" index={0} type="slider" min={-100} max={+100} label="Horizontal Offset" />
                <ToolbarItem propKey="boxShadowOffset" index={1} type="slider" min={-100} max={+100} label="Vertical Offset" />

                {/* Box Shadow Blur */}
                <ToolbarItem
                    full={true}
                    propKey="boxShadowBlur"
                    type="slider"
                    label="Shadow Blur"
                />

                {/* Box Shadow Color */}
                <ToolbarItem propKey="boxShadowColor"
                    type="color"
                    label="Shadow Color">
                </ToolbarItem>

                {/* Box Shadow Spread */}
                <ToolbarItem propKey="boxShadowSpread" type="slider" label="Shadow Spread" />

                {/* Box Shadow Inset */}
                <ToolbarItem propKey="boxShadowInset" type="radio" label="Shadow Inset">
                    <ToolbarRadio value="outline" label="Outline" />
                    <ToolbarRadio value="inset" label="Inset" />
                </ToolbarItem>


            </ToolbarSection>

            <ToolbarSection
                title="TextShadow"
                props={[]}

            >
                {/* Box Shadow Offset */}
                <ToolbarItem propKey="textShadowOffset" index={0} type="slider" min={-100} max={+100} label="Horizontal Offset" />
                <ToolbarItem propKey="textShadowOffset" index={1} type="slider" min={-100} max={+100} label="Vertical Offset" />

                {/* Box Shadow Blur */}
                <ToolbarItem
                    full={true}
                    propKey="textShadowBlur"
                    type="slider"
                    label="Shadow Blur"
                />

                {/* Box Shadow Spread */}
                <ToolbarItem propKey="textShadowSpread" type="slider" label="Shadow Spread" />

                {/* Box Shadow Color */}
                <ToolbarItem propKey="textShadowColor"
                    type="color"
                    label="Shadow Color">
                </ToolbarItem>


            </ToolbarSection>
        </React.Fragment>
    );
};
