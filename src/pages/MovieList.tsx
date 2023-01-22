import { Stack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { MovieCard } from '../components';
import { Main } from '../layouts';
import { api } from '../services';
import { Movie, Response } from '../types';

async function getMovieList() {
    return await api
        .get<Response<Array<Movie>>>('/movies')
        .then(res => res.data.data);
}

export function MovieList() {
    const { data, isLoading } = useQuery(['movies'], getMovieList);

    return (
        <Main isLoading={isLoading}>
            <Stack spacing='4'>
                {data?.map(movie => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        tagline={movie.tagline}
                        vote_average={movie.vote_average}
                    />
                ))}
            </Stack>
        </Main>
    );
}
