import styled from 'styled-components'
// cada arquivo css tem seu proprio escopo, pertence apenas aquele componente
// controlar proproiedades css baseado em props que o componente recebe
// encademento de estilos, acessar props do componente dentro do css

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    padding: 30px;
    margin:80px auto;

    h1 {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center
    }
    svg {
        margin-right: 1px;
    }
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }
`;

export const SubmitButton = styled.button.attrs({
    type: 'submit',
})`
    background: linear-gradient(to bottom right, rgb(243, 33, 33), rgb(151, 0, 58));
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;

    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
`;
