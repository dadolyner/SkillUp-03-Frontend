import * as React from 'react';
import { Container, NavigationLogo, NavigationItems, NavigationButtons, Item, Hamburger, Lines, Image } from './navigation.styled';
import { MiddleRoundPrimaryButton, MiddleRoundBlackButton } from '../Buttons/buttons.styled';
import { useRouter } from 'next/router';

const Navigation: React.FC = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = React.useState(false);
    const isLoggedIn = false;

    return (
        <>
            <Container className={isLoggedIn ? 'loggedIn' : 'notLoggedIn'}>

                <NavigationLogo>
                    <img src={'/images/Logo.png'} alt="logo" width={'42px'} height={'40px'} onClick={() => router.push('/')}/>
                </NavigationLogo>

                <Hamburger className={isOpen ? 'opened' : ''} onClick={() => setIsOpen(!isOpen)}>
                    <Lines />
                    <Lines />
                    <Lines />
                </Hamburger>

                <NavigationItems isOpen={isOpen}>
                    <Item onClick={() => { setIsOpen(false); router.push('/') }}>Home</Item>
                    <Item onClick={() => { setIsOpen(false); router.push('/') }}>Search</Item>
                </NavigationItems>

                <NavigationButtons isOpen={isOpen}>
                { !isLoggedIn ? (
                        <>
                            { !isOpen && <Item onClick={() => { setIsOpen(false); router.push('/login')}}>Login</Item> }
                            { !isOpen && <MiddleRoundPrimaryButton style={{ height: '40px' }} onClick={() => { setIsOpen(false); router.push('/register')}}>Sign up</MiddleRoundPrimaryButton> }
                        
                            { isOpen && <MiddleRoundBlackButton style={{ width: '100%', height: '40px', marginBottom: '10px' }} onClick={() => {setIsOpen(false); router.push('/login')}}>Login</MiddleRoundBlackButton> }
                            { isOpen && <MiddleRoundPrimaryButton style={{ width: '100%', height: '40px', marginBottom: '20px' }} onClick={() => {setIsOpen(false); router.push('/register')}}>Sign up</MiddleRoundPrimaryButton> }
                        </>
                    ) : (
                        <>
                            { !isOpen && <Item onClick={() => { setIsOpen(false); router.push('/')}}>Logout</Item> }
                            { !isOpen && <img src="/images/Avatar.png" height="50px" width="50px" onClick={() => {setIsOpen(false); router.push('/profile')}}/> }

                            { isOpen && <MiddleRoundBlackButton style={{ width: '100%', height: '40px', marginBottom: '10px' }} onClick={() => {setIsOpen(false); router.push('/login')}}>Logout</MiddleRoundBlackButton> }
                        </>
                    ) }
                </NavigationButtons>
            </Container>
        </>
    );
};

export default Navigation;
