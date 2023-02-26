import * as S from "./styles";

import { CgLogOut } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { GiCardBurn } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

export const Nav = () => {
    
    return(
        <S.Nav open={true}>
            <S.List>
                <S.ListItem>
                    <AiOutlineHome/>
                    <a href="#">Home</a>
                </S.ListItem>
                <S.ListItem>
                    <GiCardBurn/>
                    <a href="#">Decks</a>
                </S.ListItem>
                <S.ListItem>
                    <BsGraphUp/>
                    <a href="#">Dashboard</a>
                </S.ListItem>
                <S.ListItem>
                    <FaUserFriends/>
                    <a href="#">Friends</a>
                </S.ListItem>
                <S.ListItem>
                    <CgLogOut/>
                    <a href="#">Login out</a>
                </S.ListItem>
            </S.List>
        </S.Nav>
    );
};
