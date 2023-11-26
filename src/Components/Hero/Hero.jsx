import NavBar from "../NavBar/NavBar";
import Grid from "../SubComponents/Grid";
import Atropos from "atropos/react";
import "atropos/css";

const Hero = () => {
  return (
    <div >
        {/* className="bg-[#F9F9F9]" */}
      <NavBar />
      {/* <Atropos
        activeOffset={40}
        shadowScale={0.05}
        onEnter={() => console.log("Enter")}
        onLeave={() => console.log("Leave")}
        onRotate={(x, y) => console.log("Rotate", x, y)}
      > */}
        <Grid />
      {/* </Atropos> */}
    </div>
  );
};

export default Hero;
