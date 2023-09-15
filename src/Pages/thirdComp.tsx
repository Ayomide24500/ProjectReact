import styled from "styled-components"
import img from "../Assets/about-2.png"
import img1 from "../Assets/features-bg2.jpg"
import image from "../Assets/first.png"
import image2 from "../Assets/second.png"
import image3 from "../Assets/third.png"
import image4 from "../Assets/fourth.svg"
import image5 from "../Assets/fifth.svg"
import image6 from "../Assets/sixth.png"
const ThirdComp = () => {
    return (
        <div>
            <Wrapper>
            <Center>
            <h1>
            WELCOME TO <span>FEATURES</span>
            </h1>
            <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit<br /> amet, consectetur adipiscing elit.</p>
        </Center>
        <Wrap>
            <First>
                <One>
                   <Image src={image}/>
                   <Hold1>
                    <H1>Creative Design </H1>
                    <P>Lorem ipsum dolor sit amet elit.</P>
                    </Hold1>
                </One>
                <Two>
                <Image src={image2}/>
                   <Hold1>
                    <H1>Creative Design </H1>
                    <P>Lorem ipsum dolor sit amet elit.</P>
                    </Hold1>
                </Two>
                <Three>
                <Image src={image3} style={{width: "59px", height: "45px"}}/>
                   <Hold1>
                    <H1>Creative Design </H1>
                    <P>Lorem ipsum dolor sit amet elit.</P>
                    </Hold1>
                </Three>
            </First>
            <Second>
                <Img src={img} />
            </Second>
            <Third>
            <One>
            <Image src={image4}/>
                   <Hold1>
                    <H1>Creative Design </H1>
                    <P>Lorem ipsum dolor sit amet elit.</P>
                    </Hold1>
            </One>
                <Two1>
                <Image src={image5}/>
                   <Hold1>
                    <H1>Creative Design </H1>
                    <P>Lorem ipsum dolor sit amet elit.</P>
                    </Hold1>
                </Two1>
                <Three>
                <Image src={image6}/>
                   <Hold1>
                    <H1>Creative Design </H1>
                    <P>Lorem ipsum dolor sit amet elit.</P>
                    </Hold1>
                </Three>
            </Third>
        </Wrap>
            </Wrapper>
        </div>
    )
}
export default ThirdComp
const Hold1 = styled.div`
padding: 15px 0px 0px 7px;
margin-left: 10px;
/* background-color: red; */
`
// const Hold = styled.div``
const Image = styled.img`
width: 47px;
height: 46px;
padding-left: 40px;
transform: rotateY(0deg);
transition: all 0.5s ease;
&:hover{
    transform: rotateY(360deg);
    transition: all 0.5s ease;
}
`
const H1 = styled.div`
font-size: 19px;
font-weight: bold;
padding-right: 9px;
padding-bottom: 12px;

&:hover {
    color:#e74c3c;
}
`
const P = styled.div`
font-size: 12px;
padding-right: 8px;
padding-bottom: 20px;

`
const Img = styled.img`
    width: 330px;
    height: 498px;
    object-fit: contain;

    @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
    margin-bottom: 60px;
    }
`
const One = styled.div`
width: 300px;
height: 130px;
-webkit-box-shadow: 0 10px 50px -12px rgb(171 171 171 / 63%); 
-moz-box-shadow: 0 10px 50px -12px rgba(171, 171, 171, 0.63);
box-shadow: 0 10px 50px -12px rgb(171 171 171 / 63%);
display: flex;
justify-content: space-evenly;
align-items: center;

@media screen and (max-width: 768px) {
    width: 100%;
    height: 100px;
    }

`
const Two = styled.div`
width: 300px;
height: 130px;
background: rgb(255 255 255 / 25%);
box-shadow: 0 8px 32px 0 rgb(31 38 135 / 15%);
margin-left: 99px;
display: flex;
justify-content: space-evenly;
align-items: center;

@media screen and (max-width: 768px) {
     width: 100%;
     height: 100px;
    }

`
const Two1 = styled.div`
width: 300px;
height: 130px;
/* background-color: yellow; */
background: rgb(255 255 255 / 25%);
box-shadow: 0 8px 32px 0 rgb(31 38 135 / 15%);
margin-right: 99px;
display: flex;
justify-content: space-evenly;
align-items: center;

@media screen and (max-width: 768px) {
     width: 100%;
     height: 100px;
    }
`
const Three = styled.div`
width: 300px;
height: 130px;
background: rgb(255 255 255 / 25%);
box-shadow: 0 8px 32px 0 rgb(31 38 135 / 15%);
display: flex;
justify-content: space-evenly;
align-items: center;

@media screen and (max-width: 768px) {
    width: 100%;
    height: 100px;
    }
`
const First = styled.div`
width: 100%;
height: 450px;
/* background-color: grey; */
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;

@media screen and (max-width: 768px) {
    width: 50%;
    height: 150px;
    position: relative;
    bottom: 110px;
    margin-top: 12px;
    }
`
const Second = styled.div`
width: 27%;
height: 490px;
/* background-color: pink; */
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 768px) {
    display: none;
    }

`
const Third = styled.div`
width: 100%;
height: 450px;
/* background-color: orange; */
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;

@media screen and (max-width: 768px) {
    width: 50%;
    height: 150px;
    position: relative;
    bottom: 177px;
    }

`
const Wrap = styled.div`
width: 100%;
height: 600px;
/* background-color: yellow; */
display: flex;
justify-content: space-around;
align-items: center;
@media screen and (max-width: 768px) 
{
    width: 100%;
    height: 100%;
     display: flex;
     flex-direction: column;
    /* justify-content: space-around; */
    }

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

const Wrapper = styled.div`
    width: 100%;
    height: 760px;
    background-image: url(${img1});
`