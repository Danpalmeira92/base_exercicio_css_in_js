import { FormEvent, useState } from 'react'

import { Form, Campo, BtnPesquisar } from './styles'

type Props = {
  botaoPesquisar: (termo: string) => void
}

const FormVagas = ({ botaoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const botaoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    botaoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={botaoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
    </Form>
  )
}
export default FormVagas
