import * as React from 'react';
import { useRouter } from 'next/router';
import { Header2, Header4, Body } from '../Typography/typography.styled';
import { TitleContainer, Container, Avatar, FormContainer, HalfWidthContainer, HalfWidth, FullWidthContainer, Label, Input, BottomLinks, BottomLink, PrimaryColored } from './forms.styled';
import { LongRoundPrimaryButton } from '../Buttons/buttons.styled';

const LoginComponent: React.FC = () => {
    const router = useRouter();
    const inputFile = React.useRef(null);

    const [firstNameValue, setFirstNameValue] = React.useState('');
    const [lastNameValue, setLastNameValue] = React.useState('');
    const [emailValue, setEmailValue] = React.useState('');
    const [passwordValue, setPasswordValue] = React.useState('');
    const [passwordConfirmValue, setPasswordConfirmValue] = React.useState('');

    const [errorValue, setErrorValue] = React.useState('');

    const handleFirstNameChange = (first_name: string) => setFirstNameValue(first_name);
    const handleLastNameChange = (last_name: string) => setLastNameValue(last_name);
    const handleEmailChange = (email: string) => setEmailValue(email);
    const handlePasswordChange = (password: string) => setPasswordValue(password);
    const handlePasswordConfirmChange = (passwordConfirm: string) => setPasswordConfirmValue(passwordConfirm);

    const [showPassword, setShowPassword] = React.useState(false);

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
                        <Input type={showPassword ? 'text' : 'password'} value={passwordValue} onChange={(e) => handlePasswordChange(e.target.value)} />
                    </FullWidthContainer>

                    <LongRoundPrimaryButton style={{width: "100%"}}>login</LongRoundPrimaryButton>

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
