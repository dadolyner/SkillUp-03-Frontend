import * as React from 'react';
import { useRouter } from 'next/router';
import { Header2, Header4, Body } from '../Typography/typography.styled';
import { TitleContainer, Container, FormContainer, FullWidthContainer, Label, Input, BottomLinks, BottomLink, PrimaryColored, ErrorMessage } from './forms.styled';
import { LongRoundPrimaryButton } from '../Buttons/buttons.styled';
import axios from '../../api/axios';

const LoginComponent: React.FC = () => {
    const router = useRouter();
    const inputFile = React.useRef(null);

    const [emailValue, setEmailValue] = React.useState('');
    const [passwordValue, setPasswordValue] = React.useState('');

    const [errorValue, setErrorValue] = React.useState('');

    const handleEmailChange = (email: string) => setEmailValue(email);
    const handlePasswordChange = (password: string) => setPasswordValue(password);

    const loginUser = async (event: any) => {
        event.preventDefault();
        try {
            if(!emailValue || !passwordValue) throw new Error('Please fill out all fields');

            const userData = {
                email: emailValue,
                password: passwordValue
            }

            const response = await axios.post('/auth/login', userData);
            const { status, data } = response;

            if(status === 201) { 
                localStorage.setItem('nextup_accessToken', data.accessToken);
                localStorage.setItem('nextup_userLoggedIn', "true");
                router.push('/'); 
            }
            else { setErrorValue(data.message); }

        } catch(error: any) { 
            if(error.response) setErrorValue(error.response.data.message); 
            else setErrorValue(error.message);
        }
    }

    return (
        <>

            <Container>
                <TitleContainer>
                    <Header2><PrimaryColored>Welcome back!</PrimaryColored></Header2>
                    <Header4>We are glad that you are back.</Header4>
                </TitleContainer><br/>

                <FormContainer>
                    <FullWidthContainer>
                        <Label>Email</Label>
                        <Input type="email" value={emailValue} onChange={(e) => handleEmailChange(e.target.value)} />
                    </FullWidthContainer>

                    <FullWidthContainer>
                        <Label>Password</Label>
                        <Input type={'password'} value={passwordValue} onChange={(e) => handlePasswordChange(e.target.value)} />
                    </FullWidthContainer>

                    <LongRoundPrimaryButton style={{width: "100%"}} onClick={(event: any) => loginUser(event)}>login</LongRoundPrimaryButton>

                    <BottomLinks>
                        <Body>Don’t have an account yet?</Body>
                        <BottomLink onClick={() => router.push('/register')}><PrimaryColored>Sign up</PrimaryColored></BottomLink>
                    </BottomLinks>
                </FormContainer>
            </Container>
        </>
    );
};

export default LoginComponent;
