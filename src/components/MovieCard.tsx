import {
    LinkBox,
    Heading,
    HStack,
    Stack,
    Text,
    LinkOverlay,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Movie } from '../types';

export type MovieCardProps = Pick<
    Movie,
    'id' | 'title' | 'tagline' | 'vote_average'
>;

export function MovieCard(props: MovieCardProps) {
    return (
        <LinkBox px='4' py='6' boxShadow='md' borderRadius='md'>
            <HStack justify='space-between'>
                <Stack>
                    <LinkOverlay as={RouterLink} to={`/movies/${props.id}`}>
                        <Heading size='md'>{props.title}</Heading>
                    </LinkOverlay>
                    <Text>{props.tagline || 'No tagline'}</Text>
                </Stack>
                <Text>{props.vote_average} out of 10.0</Text>
            </HStack>
        </LinkBox>
    );
}
