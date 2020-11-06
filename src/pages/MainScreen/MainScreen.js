import './MainScreen.scss';
import AxiosInstance from '../../providers/services/Api';
import { MainScreenContainer } from './MainScreenStyled';
import TopFive from './TopFive';
import MostPickedPlayer from './MostPickedPlayer';
import MyTeams from './MyTeams';

function MainScreen() {

    return (
        <MainScreenContainer>

            <MyTeams />

            <div className="right-column">

                <TopFive />

                <MostPickedPlayer />

            </div>

        </MainScreenContainer>
    );
}

export default MainScreen;
