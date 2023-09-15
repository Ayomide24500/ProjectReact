import styled from "styled-components"
import img from "../Assets/2phones.png"
import img2 from "../Assets/small-screen.png"

const FourthComp = () => {
    return (
        <div>
            <Container>
              <Wrapper>
                 <Image>
                 <img src={img2} alt="" style={{position: "relative", left: "76px" }}/>
                    <img src={img} alt="" style={{position: "relative", left: "0px", zIndex: "1"}}/>
                 </Image>
                 <Text>
                    <Hold1>
                    <H1>HOW IT <span>WORKS</span></H1>
                  <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et<br />
                   dolore aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt<br />
                    ut labore et dolore aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</P>
                    </Hold1>
                    <Hold2>
                        <H1>Benefits Of App</H1>
                    </Hold2>
                    <Hold3>
                        <Right>
                            <Up>
                                <Hold>
                                <H2>Notifications</H2>
                                <P1>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit.</P1>
                                </Hold>
                            </Up>
                            <Down>
                            <Hold>
                                <H2>Notifications</H2>
                                <P1>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit.</P1>
                                </Hold>
                            </Down>
                            <Button bg='#e74c3c' wd='130px' bd='none' ml='14px'>Download Now</Button>
                        </Right>
                        <Left>
                        <Up>
                                <Hold>
                                <H2>Notifications</H2>
                                <P1>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit.</P1>
                                </Hold>
                            </Up>
                            <Down>
                            <Hold>
                                <H2>Notifications</H2>
                                <P1>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit.</P1>
                                </Hold>
                            </Down>
                        </Left>
                    </Hold3>
                 </Text>
              </Wrapper>
            </Container>
            </div>
    )
}
export default FourthComp
const Button = styled.button<{bg: string, wd: string, bd: string, ml: string}>`
  width: ${({ wd }) => wd};
  background-color: ${({ bg }) => bg};
  border: ${({ bd }) => bd};
  margin-left: ${({ ml }) => ml};
  height: 40px;
  border-radius: 100px;
  cursor: pointer;
  color: #fff;
  margin-top: 45px;
`
const Hold = styled.div`
padding: 15px 0px 0px 7px;
margin-left: 10px;
/* background-color: red; */
`

const H2 = styled.div`
font-size: 19px;
font-weight: bold;
padding-right: 9px;
padding-bottom: 12px;

&:hover {
    color:#e74c3c;
}
`
const P1 = styled.div`
font-size: 12px;
padding-right: 8px;
padding-bottom: 20px;

`
const Up = styled.div`
    width: 100%;
    height: 120px;
    /* background-color: pink; */
    display: flex;
`
const Down = styled.div`
    width: 100%;
    height: 120px;
    /* background-color: green; */
    margin-top: 15px;
    display: flex;

`

const Right = styled.div`
width: 50%;
height: 350px;
/* background-color: silver; */
display: flex;
/* justify-content: space-around; */
flex-direction: column;
`
const Left = styled.div`
width: 50%;
height: 350px;
/* background-color: orangered; */
`

const H1 = styled.div`
    font-size: 28px;
    font-weight: bold;
    padding-top: 20px;
    padding-left: 12px;

    span{
      color:#e74c3c ;
    }
`
const P = styled.div`
font-size: 12px;
line-height: 30px;
padding-top: 5px;
padding-left: 12px;

@media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 20px;
    }
`
const Hold1 = styled.div`
    width: 100%;
    height: 150px;
    /* background-color: silver; */

    @media screen and (max-width: 768px) {
   height: 100px;
   width: 100%;
    }
`
const Hold2 = styled.div`
    width: 100%;
    height: 90px;
    /* background-color: red; */

    @media screen and (max-width: 768px) {
   font-size: 12px;
   padding-top: 60px;
    }
`
const Hold3 = styled.div`
    width: 100%;
    height: 350px;
    /* background-color: orange; */
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Text = styled.div`
    width: 50%;
    height: 590px;
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Image = styled.div`
    width: 30%;
    height: 500px;
    /* background-color: blue; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;


    @media screen and (max-width: 768px) {
   height: 100px;
   width: 100%;
   display: none;
   img{
    height: 100px;
   width: 100%;
   }
    }
`
const Wrapper = styled.div`
    width: 100%;
    height: 700px;
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
   display: flex;
   flex-direction: column;
    }
`
const Container = styled.div`
    width: 100%;
    height: 700px;
    /* background-color: silver; */

    @media screen and (max-width: 768px) {
   display: flex;
   flex-direction: column;
    }
`