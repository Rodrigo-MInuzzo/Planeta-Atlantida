import { Favorite, ThumbDown } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material";

export const CardAtracao = () => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="194"
                image="https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/fresno/main.png"
            />
            <CardContent>
                <Typography variant="h5">Fresno</Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus eos cum, quaerat quos, amet ab nihil
                    eius praesentium, sunt exercitationem sed facere et odio repudiandae voluptates illum magnam totam
                    illo.
                </Typography>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Box>
                    <Typography component={"span"} variant="button">
                        Horário:
                    </Typography>
                    <Typography component={"span"} variant="body2">
                        19:00
                    </Typography>
                </Box>
            </CardContent>

            <CardActions>
                <Button>
                    <Favorite /> <span>Curti!</span>
                </Button>
                <Button>
                    <ThumbDown /> Muito ruim!
                </Button>
            </CardActions>
        </Card>
    );
};
