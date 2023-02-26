import { useContext, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Container } from "../layout/styles";
import * as S from "./styles";

export const Header = () => {
    const [toggle, setToggle] = useState<any>(false);
    const toggleContext = useContext(toggle);

    return (
        <S.Header>
            <Container>
                <S.Content>
                    <HiMenu onClick={() => setToggle(true)}/>
                </S.Content>
            </Container>
        </S.Header>
    );
};