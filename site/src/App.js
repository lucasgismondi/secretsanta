import React from 'react';
import './App.css';
import LuckyDraw from './LuckyDraw';
import styled from 'styled-components';
import Confetti from 'react-confetti';
import Santa from './santa2.png';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100%;
`;

const GreenBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    width: 20%;
    background-color: green;
`;

const RedBar = styled.div`
    background-color: red;
    min-height: 100%;
    width: 60%;
`;

const MainContent = styled.div`
    position: absolute;
    padding: 15px;
    display: flex;
    align-items: center;
    min-height: 100%;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
`;

const DownArrow = styled.i`
    margin: 10px;
    border: solid orange;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
`;

const StyledText = styled.div`
    font-size: 25px;
`;

const PrizeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px;
`;

const StyledButton = styled.button`
    margin: 30px;
    border-radius: 4px;
    border-color: orange;
    border-width: 3px;
    color: orange;
    background-color: transparent;
    cursor: pointer;
    height: 50px;
    width: 175px;
    font-size: 30px;
`;

const StyledPrizeText = styled.div`
    margin: 30px;
    font-size: 50px;
`;

class App extends React.Component {
    state = {
        page: 1
    };

    renderPrizes = () => {
        const { page } = this.state;
        return (
            <MainContent className={page === 1 ? 'visible' : 'hidden'}>
                <StyledText>
                    Welcome to your Secret Santa Present, Peter!
                </StyledText>
                <StyledText>
                    Below are the things you wished for this Christmas:
                </StyledText>
                <PrizeWrapper>
                    <StyledText>Stuff</StyledText>
                    <StyledText>Ferrari</StyledText>
                    <StyledText>World Peace </StyledText>
                    <StyledText>$1 BILLION</StyledText>
                    <StyledText>10 $50 Amazon gift cards</StyledText>
                    <StyledText>Direct Flight to Vegas</StyledText>
                    <StyledText>2 Zucchero Concert tickets</StyledText>
                    <StyledText>Artify 2019 Paint Brush Set</StyledText>
                    <StyledText>Under Armour Truckstop Beanie</StyledText>
                    <StyledText>Camry Digital Luggage Scale</StyledText>
                </PrizeWrapper>
                <StyledText>
                    Today, you will be granted one of these wishes
                </StyledText>
                <StyledText>Click Continue to claim your present!</StyledText>
                <StyledButton onClick={() => this.setState({ page: 2 })}>
                    CONTINUE
                </StyledButton>
            </MainContent>
        );
    };

    renderSpinWheel = () => {
        const { page } = this.state;

        return (
            <MainContent className={page === 2 ? 'visible' : 'hidden'}>
                <StyledText>
                    Spin the Wheel to claim your Secret Santa Present!
                </StyledText>
                <DownArrow />
                <LuckyDraw
                    width={400}
                    height={350}
                    wheelSize={400}
                    range={10}
                    innerRadius={25}
                    outerRadius={200}
                    showInnerLabels
                    drawLimitSwitch
                    drawLimit={1}
                    fontColor={'#000'}
                    fontSize={'12px'}
                    writingModel={'tb'}
                    drawButtonLabel="SPIN"
                    textArray={[
                        'Camry Digital Luggage Scale',
                        'Under Armour Truckstop Beanie',
                        'Artify 2019 Paint Brush Set',
                        '$1 BILLION',
                        '10 $50 Amazon gift cards',
                        'World Peace',
                        'Ferrari',
                        'Direct Flight to Vegas',
                        '2 Zucchero Concert tickets',
                        'Stuff'
                    ]}
                    onSuccessDrawReturn={drawNumber => {
                        setTimeout(() => this.setState({ page: 3 }), 2000);
                    }}
                    onOutLimitAlert={limit => {
                        if (limit) {
                            console.log('out of limits');
                        }
                    }}
                />
            </MainContent>
        );
    };

    renderFinalPage = () => {
        const { page } = this.state;

        return (
            <MainContent className={page === 3 ? 'visible' : 'hidden'}>
                <Confetti />
                <StyledText>
                    Congratulations you won:
                </StyledText>
                <StyledPrizeText>
                    10 $50 Amazon gift cards
                </StyledPrizeText>
                <StyledText>
                    You will receive your present shortly!
                </StyledText>
                <StyledText>
                    Merry Christmas!!!
                </StyledText>
            </MainContent>
        );
    };

    render() {
        const { page } = this.state;

        return (
            <Wrapper>
                <GreenBar>
                    <img src={Santa} alt="santa" width="167px" height="250px" />
                    <img src={Santa} alt="santa" width="167px" height="250px" />
                    <img src={Santa} alt="santa" width="167px" height="250px" />
                </GreenBar>
                <RedBar>
                    {this.renderPrizes()}
                    {this.renderSpinWheel()}
                    {this.renderFinalPage()}
                </RedBar>
                <GreenBar>
                    <img src={Santa} alt="santa" width="167px" height="250px" />
                    <img src={Santa} alt="santa" width="167px" height="250px" />
                    <img src={Santa} alt="santa" width="167px" height="250px" />
                </GreenBar>
            </Wrapper>
        );
    }
}

export default App;
