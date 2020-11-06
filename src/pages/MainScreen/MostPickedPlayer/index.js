import './MostPickedPlayer.scss';
import { MostPickedContainer, MostPickedSide, LessPickedSide, MiddleCamp, MostPickedInfo, InfoPicture, InfoTitle, InfoPercent } from './MostPickedPlayerStyled';

function MostPickedPlayer() {
    return (
        <MostPickedContainer>
            <MostPickedSide>
                <MostPickedInfo>
                    <InfoTitle>
                        Most picked player
                    </InfoTitle>
                    <div className="picked-players-row">
                        <InfoPicture>
                            GG
                        </InfoPicture>
                        <InfoPercent>
                            75%
                        </InfoPercent>
                    </div>
                </MostPickedInfo>
            </MostPickedSide>

            <MiddleCamp />

            <LessPickedSide>
                <MostPickedInfo>
                    <InfoTitle>
                        Less picked player
                    </InfoTitle>
                    <div className="picked-players-row">
                        <InfoPicture>
                            GG
                        </InfoPicture>
                        <InfoPercent>
                            25%
                        </InfoPercent>
                    </div>
                </MostPickedInfo>
            </LessPickedSide>
        </MostPickedContainer>
    );
}

export default MostPickedPlayer;
