import gitLogo from '../../assets/imgs/github.png'
import { LogoContainer } from './styles'

export default function Logo() {
    return(
        <LogoContainer>
            <img src={gitLogo} width={48} height={48} alt="github logo"/>
            <p>WikiRepo</p>
        </LogoContainer>
        )
}