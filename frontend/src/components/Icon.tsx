type IconProps = {
    src: string,
    alt: string
}

const Icon : React.FC<IconProps> = ({src, alt}: IconProps) => {
    return (
        <img src={ src } alt={ alt } />
    )
}

export default Icon;
export type { IconProps };
