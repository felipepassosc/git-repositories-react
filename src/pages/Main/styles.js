import styled from 'styled-components'
// cada arquivo css tem seu proprio escopo, pertence apenas aquele componente

export const Title = styled.h1`
    font-size: 24px;
    color: ${props => (props.error ? 'red' : '#7159c1')};
    font-family: Arial, Helvetica, sans-serif;

    small {
        font-size: 14px
    }
`;
// controlar proproiedades css baseado em props que o componente recebe
// encademento de estilos, acessar props do componente dentro do css

