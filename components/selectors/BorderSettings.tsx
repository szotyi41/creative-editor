import React from 'react';
import { ToolbarSection, ToolbarItem } from '../editor';

export const BorderSettingsDefaults = {
    border: ['0', '0', '0', '0'],
    borderStyle: 'solid',
    borderRadius: 0,
    borderColor: { r: 0, g: 0, b: 0, a: 1 },
}

export const BorderSettingsStyle = ({ border, borderStyle, borderColor, borderRadius }) => {
    return {
        borderTopWidth: `${border[0]}px`,
        borderRightWidth: `${border[1]}px`,
        borderBottomWidth: `${border[2]}px`,
        borderLeftWidth: `${border[3]}px`,
        borderStyle: borderStyle,
        borderRadius: `${borderRadius}px`,
        borderColor: `rgba(${Object.values(borderColor)})`,
    }
}

export const BorderSettings = () => {
    return (
        <React.Fragment>
            <ToolbarSection
                title="Border"
                props={['border', 'borderRadius', 'borderStyle', 'borderColor']}
                summary={({ border }: any) => {
                    return `${border[0] || 0}px ${border[1] || 0}px ${
                        border[2] || 0
                        }px ${border[3] || 0}px`;
                }}
            >
                {/* Border Width */}
                <ToolbarItem propKey="border" index={0} type="slider" label="Top" />
                <ToolbarItem propKey="border" index={1} type="slider" label="Right" />
                <ToolbarItem propKey="border" index={2} type="slider" label="Bottom" />
                <ToolbarItem propKey="border" index={3} type="slider" label="Left" />

                {/* Border Radius */}
                <ToolbarItem
                    full={true}
                    propKey="borderRadius"
                    type="slider"
                    label="Radius"
                />

                {/* Border Style */}
                <ToolbarItem propKey="borderStyle" type="select" label="Border Style">
                    <option value="solid" label="Solid" />
                    <option value="dotted" label="Dotted" />
                    <option value="dashed" label="Dashed" />
                    <option value="double" label="Double" />
                    <option value="groove" label="Groove" />
                    <option value="ridge" label="Ridge" />
                    <option value="inset" label="Inset" />
                    <option value="outset" label="Outset" />
                </ToolbarItem>

                {/* Border Color */}
                <ToolbarItem propKey="borderColor"
                    type="color"
                    label="Border Color">
                </ToolbarItem>


            </ToolbarSection>
        </React.Fragment>
    );
};
