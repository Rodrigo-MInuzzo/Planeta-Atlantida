import { Favorite, ThumbDown } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import { Atracao } from "../models/atracao";
import { useAppDispatch } from "../config/hooks";
import { curtirAtracao, descurtirAtracao } from "../modules/atracoes.slice";

interface CardAtracaoProps{
    atracao:Atracao;
}


export const CardAtracao = (props: CardAtracaoProps) => {
    const dispach = useAppDispatch();

    const curtir = () =>{
        dispach(curtirAtracao(props.atracao.id))
    }
    
   const descurtir= () =>{
    dispach(descurtirAtracao(props.atracao.id))
   }
    return (
        <Card>
            <CardMedia
                component="img"
                height="194"
                image={props.atracao.urlFoto}
            />
            <CardContent>
                <Typography variant="h5">{props.atracao.nome}</Typography>
                <Typography variant="body1">{props.atracao.descricao}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus eos cum, quaerat quos, amet ab nihil
                    eius praesentium, 
                </Typography>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Box>
                    <Typography component={"span"} variant="button">
                        Horário:
                    </Typography>
                    <Typography component={"span"} variant="body2">
                        {props.atracao.horario}
                    </Typography>
                </Box>
            </CardContent>

            <CardActions>
                <Button onClick={curtir}>
                    <Favorite /><span> Curtir({props.atracao.curtidas})</span>
                </Button>
                <Button onClick={descurtir}>
                    <ThumbDown /><span> Muito ruim({props.atracao.descurtidas})</span>
                </Button>
            </CardActions>
        </Card>
    );
};
