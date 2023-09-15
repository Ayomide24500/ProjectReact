import React from 'react'
import styled from "styled-components"
import img from "../Assets/bg-1.jpg"
import img1 from "../Assets/about-3.png"
import {BsFillRocketTakeoffFill} from "react-icons/bs"
import {MdOutlineComputer} from "react-icons/md"
import {RiHtml5Fill} from "react-icons/ri"
import imgs from "../Assets/b.webp"

const Hero = () => {
  return (
    <Container>
      <Dark>
        <Wrapper>
        <Center>
            <h1>
            WELCOME TO <span>LAYER</span>
            </h1>
            <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit<br /> amet, consectetur adipiscing elit.</p>
        </Center>
        <Wrap>
          <One>
            <Div>
              <RiHtml5Fill />
            </Div>
          </One>
          <Two>
          <Div>
            <Images1 src={imgs} />
          </Div>
          </Two>
          <Three>
          <Div>
            <MdOutlineComputer />
          </Div>
          </Three>
          <Four>
          <Div>
            <BsFillRocketTakeoffFill />
          </Div>
          </Four>
        </Wrap>
        <Phone>
        <Image2 src={img1} />
      </Phone>
     </Wrapper>
      </Dark>
    </Container>
  )
}

export default Hero
const Images1 = styled.img`
width: 40px;
height: 40px;
`
const Image2 = styled.img`
width: 400px;
height: 500px;
position: relative;
top: 80px;
`
const Phone = styled.div`
width: 100%;
height: 300px;
/* background-color: pink; */
display: flex;
  align-items: center;
  justify-content: center;
`
const Div = styled.div`
  width: 60px;
  height: 60px;
  background-color: #f64740;
  color: #fff;
  font-size: 30px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -50px;
  margin-left: 100px;
`
const One = styled.div`
width: 280px;
height: 110px;
border-top: 1.5px solid red;
border-left: 1.5px solid red;
border-right: 1.5px solid red;
margin-bottom: 110px;
`
const Two = styled.div`
width: 280px;
height: 110px;
border-top: 1.5px solid red;
border-left: 1.5px solid red;
border-right: 1.5px solid red;
margin-bottom: 110px;

`
const Three = styled.div`
width: 280px;
height: 110px;
border-top: 1.5px solid red;
border-left: 1.5px solid red;
border-right: 1.5px solid red;
margin-bottom: 110px;

`
const Four = styled.div`
width: 280px;
height: 110px;
border-top: 1.5px solid red;
border-left: 1.5px solid red;
border-right: 1.5px solid red;
margin-bottom: 110px;

`

const Wrap = styled.div`
  width: 96%;
  height: 400px;
  /* border:1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: rows;

  @media screen and (max-width: 768px) {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    }
`
const Center = styled.div`
width: 100%;
height: 160px;
color: #fff;
font-weight: bolder;
margin-bottom: 20px;

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

const Dark = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 100px 0px;
  justify-content: center;
 display: flex;
`
const Wrapper = styled.div`
  width: 90%;
  height: 300%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`