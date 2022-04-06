import { createPortal } from 'react-dom';
import { useRef } from 'react';
import { usePlayList } from '../../contexts/PlayListContext';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import './PlayListModal.css';
import '../../pages/Home/Home.css'
export const PlaylistModal = ({ isModalOpen, setIsModalOpen, video }) => {
    const { playList, addToPlayList, deleteFromPlaylist } = usePlayList();
    const modalref = useRef();
    useOnClickOutside(modalref, () => setIsModalOpen(false));
    // if (!isModalOpen) return null;
    console.log(video);
    return (
        <div className='background-filter'>{isModalOpen ? (
            <div className='playlist-modal' ref={modalref} onClick={(e) => e.preventDefault()}>
                <div>HI i am a modal</div>
                <button onClick={() => { setIsModalOpen(false) }}>X</button>
                <div>{playList.map(element => {
                    const isPresentInPlayList = element.videos.find(item => item._id === video._id)
                    return (<>

                        <input type='checkbox'
                            name={element.title}
                            id={element.title}
                            value={element.title}
                            checked={isPresentInPlayList ? true : false}
                            onChange={(e) => {
                                e.preventDefault()
                                if (isPresentInPlayList) {
                                    deleteFromPlaylist(element._id, video._id);
                                } else {
                                    addToPlayList(element._id, video);
                                }
                            }}
                        />
                        <label htmlFor={element.title} >{element.title}</label>
                    </>)
                })}
                </div>
            </div>) : null}
        </div>
    )
}
 // if(isPresentInPlayList){
                            //     playListDispatch({
                            //         type:'REMOVE_FROM_PLAYLIST',
                            //         payload:{
                            //             _id:element._id,
                            //             video:video,
                            //         }
                            //     })
                            // }else{
                            // playListDispatch({
                            //     type:'ADD_TO_PLAYLIST',
                            //     payload:{
                            //         _id:element._id,
                            //         video:video,
                            //     }
                            // })
                        // }
