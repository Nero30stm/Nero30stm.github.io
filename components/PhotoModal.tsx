import axios from "axios";
import {addPhoto, fetchUserProfile} from "../src/requests/user/fetchUserProfile";
import {useState} from "react";
import {handleInputChange} from "react-select/dist/declarations/src/utils";
import {storeInstance} from "../stores/AppStore";
import {observer} from "mobx-react";
import {modalModel} from "../stores/common/ModalModel";

interface TProps {
    img: string
}

const PhotoModel = observer(({img}:TProps) => {
    let token = sessionStorage.getItem('auth_token')
    const [avatar, setAvatar] = useState('')
    const [avatarPath, setAvatarPath] = useState('')
    let profile = storeInstance.profile

    async function handleSubmit(e: any) {
       // e.preventDefault();
        const form = new FormData();
        form.append('file', avatar);

        let response = await axios({
            method: "post",
            url: "https://rus-web-21100002-dev.braim.org/user/profile/personal/avatar",
            data: form,
            headers: {'Authorization': `Bearer ${token}`,
                "Content-Type": 'multipart/form-data',

            },
        })
        if(response.status === 200) {
            //handle success
            console.log(response);
            modalModel.closeModal()
            let res = await profile.fetchProfile()
            console.log(res)

            if (res === true) {
                console.log(storeInstance.mainInf.photo)
            }
        }

    }

    function handleChangeImage(e: any) {
        setAvatar(e.target.files[0]);

        const reader = new FileReader();
        let file = e.target.files[0]
        reader.onloadend = () => {
            if(reader.result)
                setAvatarPath((reader.result).toString());
        }
        reader.readAsDataURL(file);
        //fetchUserProfile(e)
    }

    return (
        <div className='image-popup'>
            <div className="img-popup-container">
                {!avatar ?
                    <img className="image" alt="user-icon" src={img}/>
                    :
                    <img className="image" alt="user-icon" src={avatarPath}/>
                }
                <div className='middle'/>

            </div>
            <div className="popap-container">
                <div className="popap-item">
                    <span className="text-gray">Изменить аватар</span>
                    <button className="close"></button>
                </div>
                <ul className="teams-list">
                    <li className="image-load">
                        <input id='imgLoader' type="file" name="file" onChange={e => handleChangeImage(e)}/>
                        {!avatar ?
                            <label htmlFor='imgLoader' className='text-gray button-link '>
                                <span className='upload'/>
                                Загрузить файл
                            </label> :
                            <button onClick={handleSubmit}>save</button>
                        }
                    </li>
                    <li className="">
                        <a className="button-link" href="#">
                            <span className="trash-r"></span>
                            <span className="nav-item-name attention">Удалить аватар</span>
                        </a>
                    </li>
                    <li className="inf-text">
                        <div className="item">
                            <span>Максимальный размер изображения 1000x1000px</span>
                        </div>
                        <div className="item">
                            <p>Изображения загруженные других истояников могут быть защищены авторскими правами.
                                Старайтесь использовать личные изображения и фотографии
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
})

export default PhotoModel