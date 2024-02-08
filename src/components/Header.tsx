import { AppBar, Avatar, Toolbar, styled } from "@mui/material";

const ToolbarStyled = styled(Toolbar)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        font-family: "Protest Riot";
    }
`;

export const Header = () => {
    return (
        <AppBar position="static">
            <ToolbarStyled>
                <Avatar src="https://res.cloudinary.com/netpdv/image/upload/c_fit,q_80/rw29rc5qicvxeova0dyr" />

                <div>
                    <h2>PLANETA ATLÂNTIDA 2024</h2>
                </div>

                <div>
                    <input type="text" />
                </div>
            </ToolbarStyled>
        </AppBar>
    );
};
