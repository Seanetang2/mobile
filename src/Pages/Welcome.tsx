import React from 'react'
import styled from 'styled-components';
import img from "../Assets/about-4.png"
import {RiComputerLine} from "react-icons/ri";
import {IoSettingsOutline} from "react-icons/io5";
import {BsMegaphone} from "react-icons/bs";

const Subhero = () => {
  return (
    <div>
        <Wrapper2>
            <Center>
                <h1>WELCOME TO <span>LAYER</span></h1>
                <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor <br/> sit amet, consectetur adipiscing elit.</p>
            </Center>
            <Middle>
                <Side1>
                    <First>
                        <circle><Icon><RiComputerLine/></Icon></circle>
                        <Wrap>
                        <h1>BOOTSTRAPS 3.2</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua</p>
                    </Wrap>
                    </First>
                    <Second>
                    <circle>
                        <Icon><IoSettingsOutline/></Icon>
                    </circle>
                    <Wrap>
                    <h1>CREATIVE DESIGN</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua</p>
                    </Wrap>
                    </Second>
                    <Third>
                    <circle>
                        <Icon><BsMegaphone/></Icon>
                    </circle>
                    <Wrap>
                    <h1>EASY TO USE</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua</p>
                    </Wrap>
                    </Third>
                </Side1>
                <Side2>
                    <img src={img} alt=''/>
                </Side2>
            </Middle>
        </Wrapper2>
    </div>
  )
}

export default Subhero;



const Wrap = styled.div`
width: 550px;
height: 100px;
margin-bottom: 30px;
margin-right: 30px;
@media screen and (max-width: 760px) {
    font-size: 16px;
    line-height: 27px;
}

p{
    margin-top: -10px;
    color: rgb(102,102,102);

@media screen and (max-width: 760px) {
    font-size: 16px;
    line-height: 27px;
}

}
h1{
    color: rgb(37,37,37);
    font-size: 20px;
    color: Quicksand;
    line-height: 30px;
    
}
` 
const Icon = styled.div`
color: white;
font-size: 35px;
cursor: pointer;

&:hover{

}
`

const First = styled.div`
width: 580px;
height: 150px;
/* background-color: orange; */
text-align: right;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row-reverse;

@media screen and (max-width: 760px) {
    width: 600px;
}

circle{
    height: 80px;
    width: 100px;
    border-radius: 100px;
    background-image: linear-gradient(135deg, #8531fb 0%, #d905ce 100%);  
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
    height: 80px;
    width: 120px;
    border-radius: 100px;
    } 
}

@media screen and (max-width: 768px) {
        width: 480px;
        height: 130px;
    }
`

const Second = styled.div`
width: 580px;
height: 150px;
/* background-color: #4bee1a; */
text-align: right;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row-reverse;
circle{
    height: 80px;
    width: 100px;
    border-radius: 100px;
    background: linear-gradient(44.44deg,#ef4135 7.79%,#eda02b 94.18%);
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
    height: 80px;
    width: 120px;
    border-radius: 100px;
    } 
}

@media screen and (max-width: 768px) {
        width: 480px;
        height: 130px;
    }
`


const Third = styled.div`
width: 580px;
height: 150px;
/* background-color: #61dfeb; */
text-align: right;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row-reverse;
circle{
    height: 80px;
    width: 100px;
    border-radius: 100px;
    background-image :linear-gradient(44.44deg,#ed2775 7.79%,#ff7448 94.18%); 
    display: flex;
    justify-content: center;
    align-items: center; 
    @media screen and (max-width: 768px) {
    height: 80px;
    width: 120px;
    border-radius: 100px;
    } 
}

@media screen and (max-width: 768px) {
        width: 470px;
        height: 130px;
    }
`

const Side2 = styled.div`
img{
    margin-top: 50px;
    flex-wrap: wrap;
  

    @media screen and (max-width: 768px) {
        width: 450px;
        height: 500px;
    }
}
`

const Side1 = styled.div`
width: 45%;
height: 450px;
margin-top: 100px;
/* background-color: #f1fa90; */
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;

@media screen and (max-width: 760px) {
    margin-top: 200px;
    margin-bottom: 70px;
    width: 100%;
}
`

const Middle = styled.div`
width: 100%;
height: 900px;
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 70px;
flex-wrap: wrap;

@media screen and (max-width: 320px) {
    width:100%;
}
`

const Center = styled.div`
width: 100%;
height: 160px;
margin-top: 40px;
flex-direction: column;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
text-align: center;

@media screen and (max-width: 760px) {
    /* margin-bottom: 50px; */
}
h1{
    font-size: 36px;
    font-family: Quicksand;
    font-weight: 700;
    color: rgb(37, 37, 37);
    line-height: 20px;
}
p{
   line-height: 35px;
   color: rgb(102,102,102);
    font-size: 17px;

@media screen and (max-width: 760px) {
    font-size: 15px;
    line-height: 30px;
    color: rgb(102,102,102);
    
}
}

span{
    color: rgb(231, 70, 60);
}

`

const Wrapper2 = styled.div`
height: 770px;
width: 100%;
/* background-color: #1056e1; */
`