import { Button, HStack, Spinner, Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export interface DetailProps {
    children: ReactNode;
    isLoading?: boolean;
}

export function Detail(props: DetailProps) {
    const navigate = useNavigate();

    return (
        <Stack spacing='8' p='4'>
            <HStack>
                <Button w='auto' onClick={() => navigate(-1)}>
                    Back
                </Button>
            </HStack>
            <Stack align='center'>
                {props.isLoading ? <Spinner /> : props.children}
            </Stack>
        </Stack>
    );
}
