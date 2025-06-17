import { FormStyle, SigninContainer, StyledCheckbox } from './SignIn.style'
import TextElement from '../../elements/textElement/TextElement'
import StyledButton from '../../elements/styledButton/StyledButton';
import { Typography } from '../../elements/textElement/fonts/Fonts';
import { useNavigate } from 'react-router-dom';
import FormGroupField from '../../components/formGroupField/FormGroupField';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { MainColorSelector } from '../../recoil/ThemeSelectors';

function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const { secondaryColor } = useRecoilValue(MainColorSelector);

    return (
        <SigninContainer>
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1.25rem', width: '40%', alignItems: 'flex-start', }} >
                <TextElement tag={'p'} text={'Welcome Back !'} fontSize="3.5625rem" fontFamily="Primary Font" color="#505355" />
                <FormStyle>
                    <TextElement tag={'span'} text={'Please enter your details'} fontSize="1rem" fontFamily="Primary Font" color="#505355" />
                    <FormGroupField
                        label="Email Address"
                        placeholder="Enter Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormGroupField
                        label="Password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormStyle>

                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <div style={{ display: "flex", columnGap: "0.62rem" }}>
                        <StyledCheckbox type="checkbox" id="remember" name="remember" value="Remember me" />
                        <Typography text={'Remember me'} color='#939090' />
                    </div>
                    <Typography text={'Forgot Password'} color={secondaryColor} />
                </div>
                <StyledButton text='Sign In' />
                <div style={{ display: "flex", columnGap: "0.62rem" }} onClick={() => {
                    navigate('/SignUp')
                }}>
                    <Typography text='New to Ektolife?' color='#939090' />
                    <Typography text='Create account' color={secondaryColor} />
                </div>
            </div>
        </SigninContainer>
    );
}

export default SignUp