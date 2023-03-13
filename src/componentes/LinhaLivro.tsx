import React from "react";
import { ControleEditora } from "@/classes/controle/ControleEditora";
import { Livro } from "@/classes/modelo/Livro";

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

export default function LinhaLivro({ livro, excluir }: LinhaLivroProps) {
  const editora = new ControleEditora();

  return (
    <React.Fragment>
      <tr>
        <th scope="row">
          <p>{livro.titulo}</p>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => {
              excluir();
              /* carregando(true); */
            }}
          >
            Excluir
          </button>
        </th>
        <td>{livro.resumo}</td>
        <td>
          {editora.getNomeEditora(livro.codEditora).map((nomeEditora) => {
            return nomeEditora.nome;
          })}
        </td>
        <td>
          <ul>
            {livro.autores.map((nome) => {
              return <li>{nome}</li>;
            })}
          </ul>
        </td>
      </tr>
    </React.Fragment>
  );
}
