import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Walk from "./Walk";
import styled from "styled-components";

function Footer() {
  return (
    <footer className="footer mt-32 justify-items-center sm:footer-horizontal bg-base-200 text-neutral-content p-10">
      <aside>
        <StyledWrapper>
          <div className="cbg">
            <Walk />
          </div>
        </StyledWrapper>

        <h2 className="text-2xl font-bold">HobbyHub</h2>
        <p>Connect Locally. Thrive Socially.</p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/Shant0D" target="_blank">
           <FaFacebook size={25} />
          </a>
          <a href="www.linkedin.com/in/shant0d" target="_blank">
            <FaLinkedin size={25}/>
          </a>
          <a>
            <FaGithub size={25} />
          </a>
        </div>
      </nav>
    </footer>
  );
}
const StyledWrapper = styled.div`
  .cbg {
    width: 100%;
    height: 100%;
    background: lightblue;
    position: relative;
    overflow: hidden;
  }

  .cbg::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, #3498db 10%, transparent 20%),
      radial-gradient(circle, transparent 10%, #3498db 20%);
    background-size: 30px 30px; /* Adjust the size of the pattern */
    animation: moveBackground 8s linear infinite; /* Adjust the animation duration and timing function */
  }

  @keyframes moveBackground {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(20%, 20%);
    }
  }
`;

export default Footer;
