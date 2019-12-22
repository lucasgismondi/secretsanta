import React, { Component } from 'react';
import Wheel from './Wheel';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    margin: 30px;
    border-radius: 4px;
    border-color: orange;
    border-width: 3px;
    color: orange;
    background-color: transparent;
    cursor: pointer;
    height: 50px;
    width: 150px;
    font-size: 30px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class LuckyDraw extends Component {
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        range: PropTypes.number.isRequired,
        wheelSize: PropTypes.number,
        turns: PropTypes.number,
        innerRadius: PropTypes.number,
        outerRadius: PropTypes.number,
        stoke: PropTypes.number,
        showInnerLabels: PropTypes.bool,
        drawLimitSwitch: PropTypes.bool,
        drawLimit: PropTypes.number,
        textArray: PropTypes.array,
        fontColor: PropTypes.string,
        fontSize: PropTypes.string,
        writingModel: PropTypes.string,
        drawButtonLabel: PropTypes.string,
        ArabicLabel: PropTypes.bool,
        onSuccessDrawReturn: PropTypes.func,
        onOutLimitAlert: PropTypes.func
    };
    static defaultProps = {
        width: 500,
        height: 350,
        stoke: 20,
        range: 20,
        turns: 3,
        rotateSecond: 5,
        drawLimit: 3,
        drawLimitSwitch: false,
        fontColor: '#000',
        fontSize: '18px',
        writingModel: 'tb',
        drawButtonLabel: 'Start',
        ArabicLabel: false,
        textArray: []
    };

    constructor(props) {
        super(props);
        if (!('wheelSize' in props)) {
            this.props.wheelSize = this.defaultProps.width * 2;
        }
        this.state = {
            startDraw: false,
            drawTimes: 1,
            randomNumber: null,
            rolling: false
        };
    }

    _processRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    _processDrawAngle(range, turns, drawTimes, drawNumber) {
        const peer = 360 / range;
        const totalAngle = 360 * turns * drawTimes + drawNumber * peer;
        return totalAngle;
    }

    _processDrawing(e) {
        e.preventDefault();
        if (!this.state.rolling) {
            let drawTime = this.state.drawTimes;
            if (
                this.props.drawLimitSwitch &&
                drawTime - 1 < this.props.drawLimit
            ) {
                this.setState({
                    startDraw: true,
                    rolling: true,
                    randomNumber: 4,
                    drawTimes: this.state.drawTimes + 1
                });
                setTimeout(() => {
                    this.setState({
                        rolling: false
                    });
                    this.props.onSuccessDrawReturn(this.state.randomNumber);
                }, this.props.rotateSecond * 1000);
            } else {
                this.props.onOutLimitAlert(true);
            }
        }
    }

    render() {
        const state = this.state;
        const props = this.props;
        let transformRotate = state.startDraw
            ? this._processDrawAngle(
                  props.range,
                  props.turns,
                  state.drawTimes,
                  state.randomNumber
              )
            : 0;
        return (
            <div
                className="react_luckyDraw"
                style={{
                    width: props.width,
                    height: props.height
                }}
            >
                <Wrapper
                    className={
                        state.rolling
                            ? 'compass__container rolling'
                            : 'compass__container'
                    }
                >
                    <div className="control__panel">
                        <div className="compass__arrow" />
                        <div
                            className="compass__spin"
                            style={{
                                width: props.wheelSize + 'px',
                                height: props.wheelSize + 'px',
                                transform: `rotate(${-transformRotate}deg) translate3d(0,0,-1px)`,
                                transitionDuration: `${props.rotateSecond}s`
                            }}
                        >
                            <Wheel {...props} />
                        </div>
                    </div>
                    <StyledButton
                        onClick={e => {
                            this._processDrawing(e);
                        }}
                    >
                        {props.drawButtonLabel}
                    </StyledButton>
                </Wrapper>
            </div>
        );
    }
}

export default LuckyDraw;
