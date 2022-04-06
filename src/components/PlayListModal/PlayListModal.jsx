import { useRef, useState } from 'react';
import { usePlayList } from '../../contexts/PlayListContext';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import './PlayListModal.css';
import '../../pages/Home/Home.css'
export const PlaylistModal = ({ isModalOpen, setIsModalOpen, video }) => {
    const { playList, addToPlayList, deleteFromPlaylist, createPlayList } = usePlayList();
    const modalref = useRef();
    const [isInputOpen, setIsInputOpen] = useState(false);
    const [inputPlayList, setInputPlayList] = useState('');
    useOnClickOutside(modalref, () => setIsModalOpen(false));
    console.log(video);
    return (
        <div>{isModalOpen ? (
            <div className='playlist-modal' ref={modalref} onClick={(e) => e.preventDefault()}>
                <button className='close-btn heading-lg' onClick={() => { setIsModalOpen(false) }}>
                    <CancelPresentationIcon />
                </button>
                <div className='text-lg active'>save to ...</div>

                <div>{playList.map(element => {
                    const isPresentInPlayList = element.videos.find(item => item._id === video._id)
                    return (<div>

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
                    </div>)
                })}
                    <div className='create-playList-form'>
                        {isInputOpen ? <input type='text' value={inputPlayList} onChange={(e) => setInputPlayList(e.target.value)} /> : null}
                        <button className='btn-cta'
                            onClick={() => {
                                setIsInputOpen(prev => !prev)
                                if (isInputOpen) {
                                    createPlayList(inputPlayList);
                                }
                            }}>
                            {isInputOpen ? 'create' : (<span className='text-sm'>CREATE PLAY LIST</span>)}
                        </button>
                    </div>
                </div>
            </div>) : null}
        </div>
    )
}
