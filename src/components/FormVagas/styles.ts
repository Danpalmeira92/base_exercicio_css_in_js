import styled from 'styled-components'
import variaveis from '../../Variaveis/variaveis'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${variaveis.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const BtnPesquisar = styled.button`
  background-color: ${variaveis.corPrincipal};
  border: 1px solid ${variaveis.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${variaveis.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: all ease 0.3s;

  &:hover {
    background-color: ${variaveis.corSecundaria};
    color: ${variaveis.corPrincipal};
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${variaveis.corPrincipal};

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 8px;
  }
`
