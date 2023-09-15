import styled from "styled-components"
import img from "../Assets/about-4.png"
import {RiComputerLine} from "react-icons/ri"
import {AiFillSetting} from "react-icons/ai"
import {BsMegaphone} from "react-icons/bs"


const SecondComp = ()=>{
    return (
        <div>
            <Wrapper2>
        <Center>
            <h1>
            WELCOME TO <span>LAYER</span>
            </h1>
            <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit<br /> amet, consectetur adipiscing elit.</p>
        </Center>
        <Middle>
            <Side1>
                <First>
                <Circle1>
                    <RiComputerLine />
                </Circle1>
                    <Text>
                    <H1>Bootsraps 3.2</H1>
                    <P>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</P>
                    </Text>
                </First>
                <Second>
                <Circle2>
                    <AiFillSetting />
                </Circle2>
                    <Text>
                    <H1>Bootsraps 3.2</H1>
                    <P>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</P>
                    </Text>
                </Second>
                <Third>
                    <Circle>
                        <BsMegaphone />
                    </Circle>
                    <Text>
                    <H1>Bootsraps 3.2</H1>
                    <P>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</P>
                    </Text>
                </Third>
            </Side1>
            <Side2></Side2>
        </Middle>

      </Wrapper2>
        </div>
    )
}

export default SecondComp
const H1 = styled.div`
    font-size: 20px;
    color: Black;
    padding-bottom: 20px;
    padding-right: 12px;
    font-weight: bold;

    @media screen and (max-width: 768px) {
     font-size: 16px;
    }

`
const P = styled.div`
    font-size: 17px;
    color: silver;
    padding-bottom: 30px;
    padding-right: 12px;

    @media screen and (max-width: 768px) {
     font-size: 14px;
    }
`

const Text = styled.div`
width:450px;
height: 90px;
/* background-color: green; */
margin-right: 30px;
margin-top: 16px;
`
const Circle1 = styled.div`
width: 90px;
height: 90px;
background-image: linear-gradient(135deg, #8531fb 0%, #d905ce 100%);
border-radius: 100%;
margin-right: 19px;
margin-bottom: 18px;
display: flex;
justify-content: center;
align-items: center;
font-size: 26px;
color: #fff;
cursor: pointer;
-webkit-border-radius: 50%;
 -moz-border-radius: 50%;
 box-shadow: 7px 5px 30px 0 rgb(72 73 121 / 15%);

 &:hover{
    transform: scale(1.1);
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
 }

 @media screen and (max-width: 768px) {
     height: 50px;
     width: 50px;
    }
`
const Circle2 = styled.div`
width: 90px;
height: 90px;
background-image: linear-gradient(44.44deg, #ef4135 7.79%, #eda02b);
border-radius: 100%;
margin-right: 19px;
margin-bottom: 18px;
display: flex;
justify-content: center;
align-items: center;
font-size: 26px;
color: #fff;
box-shadow: 6px 5px 30px 0px rgb(0 0 0 / 12%);

&:hover{
    transform: scale(1.1);
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
 }
 
 @media screen and (max-width: 768px) {
     height: 50px;
     width: 50px;
    }
`
const Circle = styled.div`
width: 90px;
height: 90px;
background-image: linear-gradient(44.44deg, #ed2775 7.79%, #ff7448 94.18%);
border-radius: 100%;
margin-right: 19px;
margin-bottom: 18px;
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
color: #fff;
box-shadow: 6px 5px 30px 0px rgb(0 0 0 / 12%);

&:hover{
    transform: scale(1.1);
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
 }

 @media screen and (max-width: 768px) {
     height: 50px;
     width: 50px;
    }
`
const Third = styled.div`
    width: 100%;
    height: 130px;
    /* background-color: orange; */
    text-align: end;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    @media screen and (max-width: 768px) {
     height: 50px;
     width: 100%;
    }

`
const Second = styled.div`
    width: 100%;
    height: 130px;
    /* background-color: red; */
    text-align: end;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    @media screen and (max-width: 768px) {
     height: 50px;
     width: 100%;
    }
`

const First = styled.div`
    width: 100%;
    height: 130px;
    /* background-color: yellow; */
    text-align: end;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    @media screen and (max-width: 768px) {
     height: 50px;
     width: 100%;
    }
`
const Side1 = styled.div`
width: 45%;
height: 550px;
/* background-color: green; */
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;

@media screen and (max-width: 768px) {
     width: 100%;
    }

`
const Side2 = styled.div`
width: 35%;
height: 580px;
/* background-color: orange; */
background-image: url(${img});
background-size: cover;
background-position: center;
margin-left: -40px;
margin-right: 19px;

@media screen and (max-width: 768px) {
     width: 35%;
      height: 760px;
      margin-top: 20px;
    }
`

const Middle = styled.div`
    width: 100%;
    height: 600px;
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top:70px;

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
`
const Center = styled.div`
width: 100%;
height: 160px;
margin-top: 20px;
/* background-color: red; */

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
span{
      color:#e74c3c ;
    }
`
const Wrapper2 = styled.div`
padding: 10px 0px;
width: 100%;
/* background-color: wheat; */

`