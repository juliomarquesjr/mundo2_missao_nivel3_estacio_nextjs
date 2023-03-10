import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivro } from "@/classes/controle/ControleLivros";

export const livros = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(livros.obterLivros());
};
