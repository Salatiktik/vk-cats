
import { Route, Routes} from 'react-router-dom'
import {BasePage, LikesPage} from '../../pages/'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<BasePage/>}/>
            <Route path='/likes' element={<LikesPage/>}/>
        </Routes>
    );
};
