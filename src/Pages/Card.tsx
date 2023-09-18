 import styled from "styled-components"
// import SecondComp from "./SecondComp"
// import img1 from "../Assets/about-4.png"
// import {RiComputerLine} from "react-icons/ri"
// import {AiFillSetting} from "react-icons/ai"
// import {BsMegaphone} from "react-icons/bs"
// // import {Fisearch} from "react-icons/fi"
// const Layer = () => {
//    const data = [
//       {
//          id: 1,
//          title: "Lorem 40.",
//          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptatum?",
//          icon: <RiComputerLine />,
//          bg: "linear-gradient(135deg, #8531fb 0%, #d905ce 100%)",
//          bx: ""
//       },
//       {
//          id: 2,
//          title: "Lorem 40.",
//          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptatum?",
//          icon: <AiFillSetting />,
//          bg: "linear-gradient(44.44deg, #ef4135 7.79%, #eda02b)"
//       },
//       {
//          id: 3,
//          title: "Lorem 40.",
//          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptatum?",
//          icon: <BsMegaphone />,
//          bg: "linear-gradient(44.44deg, #ed2775 7.79%, #ff7448 94.18%)"
//       },
//    ]
//     return (
//         <div>
//          <Container>
//             <Wrapper>
//             <Holder>
//                  <H1>
//                  WELCOME TO <span>LAYER</span>
//                  </H1>
//                  <Object></Object>
//                  <P>
//                  We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                  </P>
//               </Holder>
//               <First>
//               <Holder2>
//                {
//                   data.map((props) => (
//                    <SecondComp key={props.id} br={"5px 5px 5px 0"} text1={props.title} text2 ={props.desc} src={""} alt={""} bg={props.bg} bs = {"0px 0px 9px 4px lightgrey"} fd={""}/>
//                   ))
//                }
//               </Holder2>
//               <Image src={img1}/>
//               </First>
//             </Wrapper>
//          </Container>
//         </div>
//     )
// }
// export default Layer
// const Image = styled.img`
//    width: 100%;
//    height: 300px;
//    object-fit: contain;
//    /* background: yellow; */

//    @media (min-width: 1024px) {
//    width: 50%;
// }
// `
// const Holder2 = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-wrap: wrap;
//     /* flex-direction: column; */
//     padding: 20px 0px;

//     @media (min-width: 1024px) {
//    width: 100%;
//    display: flex;
//    flex-direction: row;
// }
// `
// const Object = styled.div`
    
// `
// const P = styled.p`
//  font-size: 15px;
// `
// const H1 = styled.h1`
//     font-size: 23px;
//    font-family: 'Quicksand';
   
//    span{
//       color: #e74c3c;
//    }
// `
// const Holder = styled.main`
// width: 100%;
// display: flex;
// justify-content: center;
// align-items: center;
// background: white;
// flex-direction: column;
// text-align: center;

// `
// const First = styled.div`
//    width: 100%;
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    flex-wrap: wrap;
//    /* background: blue; */

//    @media (min-width: 1024px) {
//   display: flex;
//   background-color: plum;
//   flex-direction: row;
// }
// `

// const Wrapper = styled.main`
// width: 90%;
// display: flex;
// justify-content: center;
// align-items: center;
// flex-wrap: wrap;
// /* background: blue; */

// @media (min-width: 1024px) {
//    width: 40%;
// }
// `
// const Container = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 20px 0px;
//     background: antiquewhite;
// `