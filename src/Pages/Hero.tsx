import styled from "styled-components";
import img from "../Assets/bg-1.jpg";
import img1 from "../Assets/about-1.png"


const Hero = ()=>{
    return(
        <div>
            <Container>
                <Dark>
                    <Wrapper>
                    <Left>
                        <h2>BEST WAY TO <span>PRESENT</span> YOUR APP</h2>
                        <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <ButtonHolder>                    <Button bg="#e74c3c" wd="160px" bd="none" ml=""
                        >Learn more</Button>
                        <Button bg="transparent" wd="180px" bd="1px solid #fff" ml="14px">Download Now</Button>
                        </ButtonHolder>
                    </Left>
                    <Right>
                        <img src={img1}/>
                    </Right>

                  </Wrapper>
                </Dark>
            </Container>
        </div>
    );
}
export default Hero;

const ButtonHolder = styled.div`
display: flex;
margin-top: 35px;
`


const Dark = styled.div`
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
padding: 100px 0;
display: flex;
justify-content: center;`

const Button = styled.button<{bg: string, wd:string, bd: string, ml: string}>`
width: ${({wd}) => wd};
background-color: ${({bg}) => bg};
border: ${({bd}) => bd};
margin-left: ${({ml}) => ml};
height: 50px;
border-radius: 100px;
cursor: pointer;
color: #fff;
`

const Img = styled.img`
height: 90%;
@media screen and (max-width: 768px){
    height: 35%;

}
`

const Right = styled.div`
width: 55%;
display: flex;
justify-content: center;
@media screen and (max-width: 768px){
    width: 100%;
    margin-top: 60px;
    display: flex;
    justify-content: center;
}
`

const Left = styled.div`
width: 40%;
display: flex;
flex-direction: column;



h2{
    color: #fff;
    font-size: 40px;
    font-family: Quicksand;
    font-weight: 700;
    @media screen and (max-width: 768px){
        font-size: 30px;
    }
}
span{
    color: rgb(231, 71, 60);
}
p{
    color: #fff;
    font-family: Nunito;
    font-weight: 400;
    font-size: 17px;
    margin: 0;
    line-height: 30px;
    @media screen and (max-width: 768px){
        width: 95%;
        font-size: 16px;
    }
}
@media screen and (max-width: 768px) {
    width:100%;
}
`


const Wrapper = styled.div`
width: 95%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 10px;
flex-wrap: wrap;
`

const Container = styled.div`
width: 100%;
height: 100%;
background-color: red;
background-image: url(${img});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-attachment: fixed;

@media screen and (max-width: 768px) {
    img{
        width: 75%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
`