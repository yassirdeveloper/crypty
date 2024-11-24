import React from 'react';
import { Link } from 'react-router-dom';

import { IconProps } from '../components/Icon';

type HeaderLinkProps = {
    label: string;
    path: string;
    icon?: React.ReactNode;
    sublinks?: HeaderLinkProps[];
};

type HeaderProps = {
    logo: React.ReactElement<IconProps>;
    links: HeaderLinkProps[];
};

const Header: React.FC<HeaderProps> = ({ logo, links }: HeaderProps) => {
    return (
        <header className="flex mx-auto items-center justify-between p-5 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
            <a href='/'>{logo}</a>
            <div className="flex justify-center space-x-4">
                <ul className="flex space-x-4">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex gap-4'>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                </button>
            </div>
        </header>
    );
};

export default Header;