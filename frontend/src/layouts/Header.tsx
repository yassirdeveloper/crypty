import React from 'react';
import { Link } from 'react-router-dom';

import { IconProps } from '../components/Icon';

type HeaderLinkProps = {
    label: string,
    path: string,
    icon?: React.ReactNode,
    sublinks?: HeaderLinkProps[]
}

type HeaderProps = {
    logo: React.ReactElement<IconProps>
    links: HeaderLinkProps[]
};

const Header: React.FC<HeaderProps> = ({logo, links}: HeaderProps) => {
    return (
    <header>
        <div>
            { logo }
        </div>
        <div>
            <ul>
                {links.map((link, index) => (
                    <li key={ index }><Link to={ link.path } />link.label</li>
                ))}
            </ul>
        </div>
    </header>
    )
}

export default Header;