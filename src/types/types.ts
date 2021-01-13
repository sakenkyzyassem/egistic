interface ELink {
    title: string;
    to: string;
}

enum Direction {
    'right', 'left', 'up', 'down',
}

interface SvgIconInfo {
    icon: string;
    dir?: Direction;
    fill?: boolean;
    width?: string;
    height?: string;
    color?: string;
}

interface Info {
    title: string | SvgIconInfo;
    details: string;
}


