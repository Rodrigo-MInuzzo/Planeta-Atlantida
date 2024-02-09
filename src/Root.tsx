import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { CardAtracao } from "./components/CardAtracao";
import { Header } from "./components/Header";

import { useAppSelector } from "./config/hooks";
import { darkTheme } from "./themes/dark.theme";

export function Root() {

  const atracoes = useAppSelector(state=>state.atracoes)


    return (
        <>

        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Header />

            <Container>
                <h1>Lineup</h1>

                <Grid container spacing={2}>

                    {
                        atracoes.map(item => <Grid item xs={12} sm={4} md={3} xl={1}>
                            <CardAtracao atracao={item} />
                        </Grid>)
                    }
                    
                </Grid>


            </Container>

            </ThemeProvider>
        </>
    )
}