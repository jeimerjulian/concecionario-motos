import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const codMotos = createAsyncThunk('moto/index', async(Motos)=>{
    return Motos;
})


let motoSlice = createSlice({
    name: 'moto',
    initialState:{
        moto:null,
        status:''
    },
    reducers:{
        Moto: (state, action) =>{
            state.moto=action.payload;
        },
        Success: (state, action) =>{
            state.moto=action.payload;
        },
        Failed: (state, action) =>{
            state.moto=action.payload;
        },
    },
    extraReducers:{
        [codMotos.pending]: (state, action)=>{
            state.status = 'loading...'
        },
        [codMotos.fulfilled]: (state,action)=>{
            state.moto = action.payload;
        },
        [codMotos.rejected]:(state, action) => {
            state.status = 'Fallo'
        }
      
    }
});

export const {Moto, Success, Failed}=motoSlice.actions;

export default motoSlice.reducer;