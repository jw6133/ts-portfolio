import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { LuLayoutDashboard } from "react-icons/lu";
import { LuPencil } from "react-icons/lu";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { PiBagSimpleBold } from "react-icons/pi";

export function RemoteControl() {
    const links = [
        { to: '1', icon: <LuLayoutDashboard/>, label: '인적사항' },
        { to: '2', icon: <LuPencil />, label: '스킬' },
        { to: '3', icon: <HiOutlineAcademicCap />, label: '학력' },
        { to: '4', icon: <PiBagSimpleBold />, label: '인턴&대외활동' },
    ];

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, [scroll]);

    const handleScroll = () => {
        setScroll(true);
        setTimeout(()=>{setScroll(false)},700)
  };

    return (
        <IndexClicker style={{opacity: scroll? 1:0.1}}>
            <div>
                {links.map((link, index) => (
                    <div key={index}>
                        <Link to={link.to} spy={true} smooth={true}>
                            <span aria-label={link.label}>{link.icon}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </IndexClicker>
    );
}

export default IndexList;

const IndexClicker = styled.div`
    text-align: center;
    align-items:center;
    justify-content: center;
    background-color:lightblue;
    font-size: 20px;
    border: solid 1px black;
    position: fixed;
    bottom: 50px;
    left: 340px;
    width: 50px;
    height: 150px;
    transition:1000ms;
    div{
        justify-content:center;
        align-items:center;
        text-align:center;
        width:30px;
        height: 30px;
        margin-bottom:5px;
        &:first-of-type{
            margin-top:10px;    
        }
        span{
            font-size:25px;
            height: 30px;
            margin-left:13px;
        }
    }
    div:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;
