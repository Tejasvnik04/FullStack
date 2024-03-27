import styled from "styled-components";
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md';

export const HeroContainer=styled.div`
background:#0c0c0c;
display:flex;
justify-content:flex;
align-items:center;
padding:0 30px;
margin-bottom:100px;
height:800px;
position:relative;
z-index:1;
`;
export const ContentContainer1=styled.div`
background:#0c0c0c;

margin-top:200px;
align-items:center;
padding:100px 30px;
height:800px;
position:relative;
z-index:1;
`;
export const ContentContainer=styled.div`
background:#0c0c0c;


align-items:center;
padding:100px 30px;
height:800px;
position:relative;
z-index:1;
`;
export const ContentContainer2=styled.div`
background:#0c0c0c;

align-items:center;
padding:100px 30px;
height:800px;
position:relative;
z-index:1;
`;
export const HeroBg=styled.div`
position:absolute;
right:0;
top:0;
botton:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`;
export const VideoBg=styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;
`
export const HeroContent=styled.div`
z-index:3;
max-width:1200px;
position:absolute;
padding:8px 24px;
display:flex;
flex-direction:column;
align-items:center;
`
export const HeroH1=styled.h1`
color:#fff;
font-size:48px;
text-align:center;

@media screen and (max-width:768px)
{
    font-size:48px;
}

@media screen and (max-width:480px)
{
    font-size:32px;
}
`

export const HeroP=styled.h2`
color:#fff;
font-size:32px;
text-align:center;

@media screen and (max-width:768px)
{
    font-size:32px;
}

@media screen and (max-width:480px)
{
    font-size:24px;
}
`
export const HeroSub=styled.p`
margin-top:24px;
color:#fff;
font-size:24px;

max-width:600px;
@media screen and (max-width:768px)
{
    font-size:24px;
}

@media screen and (max-width:480px)
{
    font-size:18px;
}
`
export const HeroBtnWrapper=styled.div`
margin-top:32px;
display:flex;
flex-direction:row;
align-items:center;

`
export const ArrowForward=styled(MdArrowForward)`
mardin-left:8px;
font-size:20px;
`
export const ArrowRight=styled(MdKeyboardArrowRight)`
mardin-left:8px;
font-size:20px;
`
