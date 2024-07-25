import React from 'react';
import { styled } from '@linaria/react';
// icon
import { SiGithub } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa6';

const Foot: React.FC = () => {
    return (
        <>
            <Footer>
                <div className="btnWrapper">
                    <span className="btn-title git-title">Github Link : </span>
                    <button
                        className="git-btn linkBtn"
                        onClick={() => window.open('https://github.com/jw6133')}
                    >
                        <SiGithub />
                    </button>
                    <span className="btn-title insta-title">Instagram Link : </span>
                    <button
                        className="insta-btn linkBtn"
                        onClick={() => window.open('https://www.instagram.com/baack_g/')}
                    >
                        <FaInstagram />
                    </button>
                </div>
            </Footer>
        </>
    );
};

export default Foot;

export const Footer = styled.div`
    position: relative;
    bottom: 0;
    background-color: black;
    color: white;
    width: 100%;
    height: 200px;

    .btnWrapper {
        height: 50%;
        line-height: 100px;
        display: flex;
        padding-top: 2%;

        .btn-title {
            display: flex;
            position: relative;
            font-size: 24px;
            line-height: 80px;
        }

        .linkBtn {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            top: 0px;
            width: 80px;
            height: 80px;
            font-size: 50px;
            color: white;
            background: none;
            cursor: pointer;
            border: none; /* Border removed as it's not necessary */
            box-sizing: border-box;

            &:before {
                content: '';
                transition: 200ms;
                width: 0px;
                height: 0px;
                display: block;
                position: absolute;
                top: 0px;
                right: 0px;
                border-right: solid 1px white;
                border-bottom: solid 1px white;
                opacity: 0;
                box-sizing: border-box;
            }

            &:hover:before {
                width: 100%;
                height: 100%;
                opacity: 1;
                transition: height 200ms, width 200ms 200ms;
            }

            &:after {
                content: '';
                transition: 200ms;
                width: 0px;
                height: 0px;
                display: block;
                position: absolute;
                bottom: 0px;
                left: 0px;
                border-left: solid 1px white;
                border-top: solid 1px white;
                opacity: 0;
                box-sizing: border-box;
            }

            &:hover:after {
                width: 100%;
                height: 100%;
                opacity: 1;
                transition: opacity 0ms 400ms, height 200ms 400ms, width 200ms 600ms;
            }
        }

        .git-btn {
            left: 7%;
        }

        .git-title {
            left: 5%;
        }

        .insta-btn {
            left: 11%;
        }

        .insta-title {
            left: 9%;
        }
    }
`;
