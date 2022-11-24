import {NextPage} from "next";
import {Default} from "../../src/components/layouts/Default";


const AboutMe : NextPage = () => {
    return (
        <Default pageName={"About Me"}>
            <h1>김유신 입니다.</h1>
        </Default>
           )
}

export default AboutMe