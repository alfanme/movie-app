import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MovieDetail, MovieList } from './pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/movies' />} />
                <Route path='/movies' element={<MovieList />} />
                <Route path='/movies/:id' element={<MovieDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
