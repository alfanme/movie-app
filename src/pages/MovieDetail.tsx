import {
    Badge,
    Box,
    Heading,
    HStack,
    Spinner,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { Detail } from '../layouts';
import { api } from '../services';
import { Movie, Response } from '../types';

async function getMovieById(id: number) {
    return await api
        .get<Response<Movie>>(`/movies/${id}`)
        .then(res => res.data.data);
}

export function MovieDetail() {
    const params = useParams();
    const id = Number(params.id);
    const { data, isLoading } = useQuery(['movie', id], () => getMovieById(id));

    return (
        <Detail isLoading={isLoading}>
            <Box px='4' py='6' boxShadow='md' borderRadius='md'>
                <Stack spacing='8'>
                    <HStack justify='space-between'>
                        <Stack>
                            <HStack>
                                <Heading size='lg'>{data?.title}</Heading>
                                <Badge>{data?.status}</Badge>
                            </HStack>
                            <Heading size='sm'>{data?.tagline}</Heading>
                            <Text>
                                <Text as='span'>
                                    {moment(
                                        data?.release_date,
                                        'DD/MM/YYYY'
                                    ).format('MMMM DD, YYYY')}
                                </Text>
                                &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                                <Text as='span'>{data?.runtime} minutes</Text>
                            </Text>
                        </Stack>
                        <Stack align='flex-end'>
                            <Text>{data?.vote_average} out of 10.0</Text>
                            <Text>({data?.vote_count} voters)</Text>
                        </Stack>
                    </HStack>
                    <Stack>
                        <Heading size='md'>Overview</Heading>
                        <Text>{data?.overview}</Text>
                    </Stack>
                </Stack>
            </Box>
        </Detail>
    );
}
