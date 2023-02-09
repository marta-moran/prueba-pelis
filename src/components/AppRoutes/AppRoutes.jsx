import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage'
import FilmsPage from '../../pages/FilmsPage/FilmsPage'
import SeriesPage from '../../pages/SeriesPage/SeriesPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/films/:id' element={<FilmsPage />} />
            <Route path='/series' element={<SeriesPage />} />
        </Routes>
    )


}

export default AppRoutes