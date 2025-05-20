import Lottie from "lottie-react";
import groovyWalkAnimation from "./enjoy.json";

const Walk = () => (
    <div className="w-40">
        <Lottie animationData={groovyWalkAnimation} loop={true} />
    </div>
);

export default Walk;
