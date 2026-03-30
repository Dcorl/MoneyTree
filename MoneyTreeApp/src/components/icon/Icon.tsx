import React from 'react';

const icons = import.meta.glob("../../assets/svgs/**/*.svg", {
    query: "?react",
    import: "default",
    eager: true,
});

interface IconProps {
    width: number;
    height: number
    svgLocation: string;
    svgFileName: string;
}

const Icon = ({ svgLocation, svgFileName, width, height }: IconProps) => {
    const svgPath = `../../assets/svgs/${svgLocation}/${svgFileName}.svg`;
    const SvgIcon = icons[svgPath] as React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined;

    if (!SvgIcon) {
        console.error("SVG path not found:", svgPath);
        console.log("Looking for:", svgPath);
        console.log("Available:", Object.keys(icons));
        return null;
    }

    return <SvgIcon width={width} height={height}/>
};

export default Icon;