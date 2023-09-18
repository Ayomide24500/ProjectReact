import FourthComp from "./fourthComp";
import Hero from "./Hero";
// import Layer from "./Card";
import SecondComp from "./SecondComp";
import ThirdComp from "./thirdComp";
import FifthComp from "./FifthComp";
import Prices from "./Prices";
import Subscribe from "./Subscribe";

// import Demo from "./Demo";

// import SixthComp from "./SixthComp";





const HomeScreen = () => {
    return (
        <div>
 <Hero />
 {/* <Layer /> */}
  <SecondComp />
  <ThirdComp />
<FourthComp />
<FifthComp />
<Prices />
<Subscribe />
{/* <Demo /> */}
 {/* <SixthComp />  */}
        </div>
    )
}

export default HomeScreen;