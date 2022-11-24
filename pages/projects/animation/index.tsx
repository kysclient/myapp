import {NextPage} from "next";
import {Default} from "../../../src/components/layouts/Default";
import styled from "styled-components";

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: whitesmoke;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background:linear-gradient(135deg,#e09,#d0e);
  height: 100vh;
`


const Animation: NextPage = () => {
    return (
        <Default pageName={"About Me"}>
            <Wrapper>
                <Box/>

            </Wrapper>
        </Default>
    )
}

export default Animation