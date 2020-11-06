import { HeaderContainer, LogoContainer, UserContainer, Logo, UserPhoto } from './HeaderStyled';

function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo />
                <p>Squad Management Tool</p>
            </LogoContainer>

            <UserContainer>
                <p>Queen of Pain</p>
                <UserPhoto />
            </UserContainer>
        </HeaderContainer>
    );
}

export default Header;
