import React from 'react';

const icons = import.meta.glob("../../assets/svgs/**/*.svg", {
    query: "?react",
    import: "default",
    eager: true,
});

interface IconProps {
    svgLocation: string;
    svgFileName: string;
}

const Icon = ({ svgLocation, svgFileName }: IconProps) => {
    const svgPath = `../../assets/svgs/${svgLocation}/${svgFileName}.svg`;
    const SvgIcon = icons[svgPath] as React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined;

    if (!SvgIcon) {
        console.error("SVG path not found:", svgPath);
        console.log("Looking for:", svgPath);
        console.log("Available:", Object.keys(icons));
        return null;
    }

    if (svgLocation === "nav") {
        return <SvgIcon width={60} height={60}/>;
    }
    else if (svgLocation === "sidebar") {
        return <SvgIcon width={30} height={30}/>;
    }
};

export default Icon;