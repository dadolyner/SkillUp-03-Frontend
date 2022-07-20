import * as React from 'react';
import { useRouter } from 'next/router';
import { Header2, Header4, Body } from '../Typography/typography.styled';
import { TitleContainer, Container, Avatar, FormContainer, HalfWidthContainer, HalfWidth, FullWidthContainer, Label, Input, BottomLinks, BottomLink, PrimaryColored } from './forms.styled';
import { LongRoundPrimaryButton } from '../Buttons/buttons.styled';
import axios from '../../api/axios'

const RegisterComponent: React.FC = () => {
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

    const registerUser = async (event: any) => {
        event.preventDefault();
        try {
            if(!firstNameValue || !lastNameValue || !emailValue || !passwordValue) throw new Error('Please fill out all fields');
            if(passwordValue !== passwordConfirmValue) throw new Error('Passwords do not match');

            const userData = {
                first_name: firstNameValue,
                last_name: lastNameValue,
                email: emailValue,
                password: passwordValue
            }

            const response = await axios.post('/auth/register', userData);
            console.log(response);
        } catch(error) { console.log(error); }
    }

    return (
        <>

            <Container>
                <TitleContainer>
                    <Header2><PrimaryColored>Hello!</PrimaryColored></Header2>
                    <Header4>Get started with your free account today.</Header4>
                </TitleContainer>
                
                <Avatar src="/images/Avatar.png" height="64px" width="64px" />

                <FormContainer>
                    <HalfWidthContainer>
                        <HalfWidth>
                            <Label>First Name</Label>
                            <Input type="text" value={firstNameValue} onChange={(e) => handleFirstNameChange(e.target.value)} required/>
                        </HalfWidth>

                        <HalfWidth>
                            <Label>Last Name</Label>
                            <Input type="text" value={lastNameValue} onChange={(e) => handleLastNameChange(e.target.value)} required/>
                        </HalfWidth>
                    </HalfWidthContainer>

                    <FullWidthContainer>
                        <Label>Email</Label>
                        <Input type="email" value={emailValue} onChange={(e) => handleEmailChange(e.target.value)} required/>
                    </FullWidthContainer>

                    <FullWidthContainer>
                        <Label>Password</Label>
                        <Input type={showPassword ? 'text' : 'password'} value={passwordValue} onChange={(e) => handlePasswordChange(e.target.value)} required/>
                    </FullWidthContainer>

                    <FullWidthContainer>
                        <Label>Confirm Password</Label>
                        <Input type={showPassword ? 'text' : 'password'} value={passwordConfirmValue} onChange={(e) => handlePasswordConfirmChange(e.target.value)} required/>
                    </FullWidthContainer>

                    <LongRoundPrimaryButton style={{width: "100%"}} onClick={(event: any) => registerUser(event)}>Sign up</LongRoundPrimaryButton>

                    <BottomLinks>
                        <Body>Already have an account?</Body>
                        <BottomLink onClick={() => router.push('/login')}><PrimaryColored>Login</PrimaryColored></BottomLink>
                    </BottomLinks>
                </FormContainer>
            </Container>
        </>
    );
};

export default RegisterComponent;
