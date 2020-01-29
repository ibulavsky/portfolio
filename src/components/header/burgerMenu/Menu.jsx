import React, {useState} from 'react';
import {scaleDown as Menu} from 'react-burger-menu';
import {navArr} from './../../header/NavMenu'

const BurgerMenu = (props) => {

    const [isOpen, setOpen] = useState(false)

    const handleStateChange = ({isOpen}) => {
        setOpen(isOpen)
    };

    const navLinks = navArr.map(item => {
        return (
            <a key={item.id} href={item.path}>
                <div onClick={() => setOpen(false)}>
                    {item.navName}
                </div>
            </a>
        )
    });

    return (
        <Menu {...props}
              right
              isOpen={isOpen}
              onStateChange={({isOpen}) => handleStateChange({isOpen})}>
            {navLinks}
        </Menu>
    );
}

export default BurgerMenu;
