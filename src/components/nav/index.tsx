import * as S from "./styles";

import { CgLogOut } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { GiCardBurn } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
    
    return(
        <S.Nav open={false}> 
            <S.List>
                <S.ListItem>
                    <AiOutlineHome/>
                    <Link to={"/"}>Home</Link>
                </S.ListItem>
                <S.ListItem>
                    <GiCardBurn/>
                    <Link to={"/decks"}>Decks</Link>
                </S.ListItem>
                <S.ListItem>
                    <BsGraphUp/>
                    <Link to={"/dashboard"}>Dashboard</Link>
                </S.ListItem>
                <S.ListItem>
                    <FaUserFriends/>
                    <Link to={"/friends"}>Friends</Link>
                </S.ListItem>
                <S.ListItem>
                    <CgLogOut/>
                    <Link to={"/sigin"}>Login out</Link>
                </S.ListItem>
            </S.List>
        </S.Nav>
    );
};
