import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Atracao } from "../models/atracao";

const state: Atracao[] = [
    {

        id: "1",
        nome: "Fresno",
        curtidas: 0,
        descricao: "Teste",
        descurtidas: 0,
        horario: "20:00",
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-nxzero.png"

    },
    {

        id: "1",
        nome: "Gustavo lima",
        curtidas: 0,
        descricao: "Teste",
        descurtidas: 0,
        horario: "20:00",
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-gusttavolima.png"

    },
    {

        id: "1",
        nome: "Armandinho",
        curtidas: 0,
        descricao: "Teste",
        descurtidas: 0,
        horario: "20:00",
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-armandinho.png"

    },
    {

        id: "1",
        nome: "NX zero",
        curtidas: 0,
        descricao: "Teste",
        descurtidas: 0,
        horario: "20:00",
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-nxzero.png"

    },
    
];



const atracoesSlice = createSlice({
  name: "atracoes",
  initialState: state,
  reducers: {
       curtirAtracao: (state, action: PayloadAction<string>) => {
          
        return state.map((item) => {

            if(item.id === action.payload){
                const novoItem = {...item};
                novoItem.curtidas++;
                return novoItem
            }

            return item;
        })
       },

          descurtirAtracao: (state, action: PayloadAction<string>) => {

            return state.map((item) => {

                if(item.id === action.payload){
                    const novoItem = {...item};
                    novoItem.curtidas++;
                    return novoItem
                }
    
                return item;
            })
      }
   },
});

export default atracoesSlice.reducer

export const {curtirAtracao, descurtirAtracao} = atracoesSlice.actions;