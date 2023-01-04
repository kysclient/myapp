import {NextPage} from "next";
import {Default} from "../../../src/components/layouts/Default";
import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion"
import {useRef, useState} from "react";


const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  background-color: blanchedalmond;
  padding: 20px;
  border-radius: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;


const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
    hidden: {backgroundColor: "rgba(0, 0, 0, 0)"},
    visible: {backgroundColor: "rgba(0, 0, 0, 0.5)"},
    exit: {backgroundColor: "rgba(0, 0, 0, 0)"},
};


const Animation: NextPage = () => {
    const [id, setId] = useState<null | string>(null);
    return (
        <Default pageName={"Animation"}>
            <Wrapper>
                <Grid>
                    {["1", "2", "3", "4"].map((n) => (
                        <Box onClick={() => setId(n)} key={n} layoutId={n}/>
                    ))}
                </Grid>
                <AnimatePresence>
                    {id ? (
                        <Overlay
                            variants={overlay}
                            onClick={() => setId(null)}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <Box layoutId={id} style={{width: 400, height: 200}}/>
                        </Overlay>
                    ) : null}
                </AnimatePresence>

            </Wrapper>
        </Default>
    )
}

export default Animation