import { useReducer, useContext, createContext } from "react";

const PlayListContext = createContext(null);
const playListReducer=(state,action)=>{
    switch(action.type){
        case("CREATE_PLAYLIST"):return {
            ...state,playlist:{...state.playlist,...action.payload}
        }
        case("ADD_TO_PLAYLIST"):return {
             ...state,playlist:state.playlist.map(item=>{
                 if(item._id===action.payload._id){
                     return {...item,videos:[...item.videos,...action.payload.videos]}
                 }
             })
        }
        default:return {...state}
    }
}
const initialPlaylist={
    playlist:[{_id:1,videos:[],name:'one'}],
}
export const PlaylistProvider = ({ children }) => {
    const { playList, playListDispatch } = useReducer(playListReducer, initialPlaylist)
    return (<PlayListContext.Provider value={{playList,playListDispatch}}>
        {children}
    </PlayListContext.Provider>);
}

export const usePlayList=()=>useContext(PlayListContext);