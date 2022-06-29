import * as React from 'react';
import { Container, NavigationLogo, NavigationItems, NavigationButtons, Item, Hamburger, Lines, Image } from './navigation.styled';
import { MiddleRoundPrimaryButton, MiddleRoundBlackButton } from '../Buttons/buttons.styled';

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const isLoggedIn = false;

    return (
        <>
            <Container className={isLoggedIn ? 'loggedIn' : 'notLoggedIn'}>
                {isLoggedIn && <Image src={''} alt="logo" width={'40px'} height={'40px'} onClick={() => {}} />}

                <NavigationLogo>
                    <img src={'/images/Logo.png'} alt="logo" width={'42px'} height={'40px'} />
                </NavigationLogo>

                <Hamburger className={isOpen ? 'opened' : ''} onClick={() => setIsOpen(!isOpen)}>
                    <Lines />
                    <Lines />
                    <Lines />
                </Hamburger>

                <NavigationItems isOpen={isOpen}>
                    <Item onClick={() => { setIsOpen(false); }}>Home</Item>
                    <Item onClick={() => { setIsOpen(false); }}>Search</Item>
                </NavigationItems>

                <NavigationButtons isOpen={isOpen}>
                    { !isOpen && <Item onClick={() => { setIsOpen(false); }}>Login</Item> }
                    { !isOpen && <MiddleRoundPrimaryButton style={{ height: '40px' }}>Sign up</MiddleRoundPrimaryButton> }
                    
                    { isOpen && <MiddleRoundBlackButton style={{ width: '100%', height: '40px', marginBottom: '10px' }}>Login</MiddleRoundBlackButton> }
                    { isOpen && <MiddleRoundPrimaryButton style={{ width: '100%', height: '40px', marginBottom: '20px' }}>Sign up</MiddleRoundPrimaryButton> }
                    
                </NavigationButtons>
            </Container>
        </>
    );
};

export default Navigation;
