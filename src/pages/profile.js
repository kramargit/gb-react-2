import { useSelector, useDispatch } from 'react-redux';
import { toggleVisibleProfile } from '../store/profile'

export const ProfilePage = () => {

    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    return (
        <div>
            Profile page <br />
            <label for="hide">
                Скрыть имя и фамилию
                <input onClick={ () => dispatch(toggleVisibleProfile()) } id='hide' type='checkbox' />
            </label>            
            <hr />
            { profile.isVisibleProfile && (
                <>
                    <h1>{profile.firstName}</h1>
                    <h1>{profile.lastName}</h1>
                </>                
            )}
        </div>
    );
};