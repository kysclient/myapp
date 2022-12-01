import {NextPage} from "next";
import {Default} from "../../../src/components/layouts/Default";
import styled from "styled-components";
import { motion } from "framer-motion"
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background:linear-gradient(135deg,#e09,#d0e);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const firstVars = {
    start: { scale: 0 },
    end: {scale: 1, rotateZ: 360, transition: {type: "spring", delay: 0.5}}
}
// box1 ******************************************************************************
const Box2 = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`
const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`
const boxVariants = {
    start: {
        opacity: 0,
        scale: 0.5,
    },
    end: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.2,
        },
    },
};

const circleVariants = {
    start: {
        opacity: 0,
        y: 10,
    },
    end: {
        opacity: 1,
        y: 0,
    },
};

// box2 ******************************************************************************

const Animation: NextPage = () => {
    return (
        <Default pageName={"Animation"}>
            <Wrapper>
                <Box variants={firstVars} initial="start" animate="end" />

                <Box2 variants={boxVariants} initial="start" animate="end">
                    <Circle variants={circleVariants} />
                    <Circle variants={circleVariants} />
                    <Circle variants={circleVariants} />
                    <Circle variants={circleVariants} />
                </Box2>


            </Wrapper>
        </Default>
    )
}

export default Animation