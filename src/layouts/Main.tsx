import { Stack, Spinner } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { NavBar } from '../components';

export interface MainProps {
    children: ReactNode;
    isLoading?: boolean;
}

export function Main(props: MainProps) {
    return (
        <Stack spacing='8' p='4'>
            <NavBar />
            <Stack align='center'>
                {props.isLoading ? <Spinner /> : props.children}
            </Stack>
        </Stack>
    );
}
