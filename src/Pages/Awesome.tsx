import React from "react";
import styled from "styled-components"
import img from "../Assets/about-2.png"


const Awesome = () =>{
    return(
        <Container>
            <Main>
            <Upper>
                <Big>AWESOME <span style={{color:"#E74C3C"}}>FEAUTURES</span></Big>
                <Small>We ensure quality & support. People love us & we love them. Lorem ipsum dolor<br></br> sit amet, consectetur adipiscing elit</Small>
            </Upper>
            <Content>
                <Text1>
                    <Card>
                        <Large>Creative Design</Large>
                        <Little>Lorem ipsum dolor sit amet elit.</Little>
                    </Card>
                    <Card1>
                        <Large>Easy To Customize</Large>
                        <Little>Lorem ipsum dolor sit amet elit.</Little>
                    </Card1>
                    <Card>
                        <Large>Bootstrap 3</Large>
                        <Little>Lorem ipsum dolor sit amet elit.</Little>
                    </Card>
                </Text1>
                <Holdimg>
                    <Img src={img} />
                </Holdimg>
                <Text2>
                <Card>
                        <Large>DIFFERENT COLORS</Large>
                        <Little>Lorem ipsum dolor sit amet elit.</Little>
                    </Card>
                    <Card1>
                        <Large>SEO FRIENDLY</Large>
                        <Little>Lorem ipsum dolor sit amet elit.</Little>
                    </Card1>
                    <Card>
                        <Large>24/7 SUPPORT</Large>
                        <Little>Lorem ipsum dolor sit amet elit.</Little>
                    </Card>
                </Text2>
            </Content>
            </Main>
            
        </Container>
    )
}

export default Awesome;
const Little = styled.div`
margin-left: 35px;
`

const Large = styled.div`
display: flex;
font-size: 25px;
font-weight: bold ;
`

const Card1 = styled.div`
    height: 130px;
    width: 350px;
    background-color: white;
    box-shadow : 20;
    border-radius: 15px;
    margin-top: 50px;
    margin-right: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 3px 3px 3px 5px rgba(0 ,0 ,0 ,0.20);
    
`
const Card = styled.div`
    height: 130px;
    width: 350px;
    background-color: white;
    box-shadow : 20;
    border-radius: 15px;
    margin-top: 50px;
    margin-left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 3px 3px 3px 5px rgba(0 ,0 ,0 ,0.20);
  
`

const Img = styled.img`
 height: 100%;
    width: 90%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width: 760px) {
    height: 100%;
    width: 100%;
    margin-top:100px;
    background-size: cover;
}
`

const Text2 = styled.div`
  height: 100%;
    width: 35%;
`


const Holdimg = styled.div`
  height: 650px;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 760px) {
    height: 100%;
    width: 80%;
    margin-top:100px;
}
`


const Text1 = styled.div`
    height: 100%;
    width: 35%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`


const Content = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
   
`


const Small = styled.div`
text-align: center;
`

const Big = styled.div`
font-size: 35px;
padding-left: 100px;
font-weight: bold;
@media screen and (max-width: 760px) {
    display: flex;
    flex-direction: row;
    margin-right: 100px;
}
`

const Upper = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    @media screen and (max-width: 760px) {
    font-size: 16px;
    line-height: 27px;
    margin-top: 550px;
    width: 100%;
    margin-right:500px;
}
`

const Main = styled.div`
height: 95vh;
width: 80%;
display: flex;
flex-direction: column;

`
const Container =styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
`