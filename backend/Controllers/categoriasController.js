const fs = require("fs");

function getCategorias() {
  const arquivo = "categorias.json";
  const path = `Database/${arquivo}`;

  return fs.readFileSync(path, "UTF-8", (err, data) => {
    if (err) {
      return { message: "Erro ao ler arquivo" }
    }

    return data;
  })
}

function writeCategoria(categorias = "") {
  const arquivo = "categorias.json";
  const path = `Database/${arquivo}`;

  let conteudoArquivo = JSON.parse(getCategorias());
  conteudoArquivo["categorias"].push(categorias);
  conteudoArquivo = JSON.stringify(conteudoArquivo);

  return fs.writeFileSync(path, conteudoArquivo, (err) => {
    if (err) {
      console.log(`Houve um erro ${err}`)
    } else {
      console.log(`Arquivo att com sucesso`);
    }
  })
}

module.exports = {
  getAllCategorias(req, res) {
    try {
      let categorias = JSON.parse(getCategorias());
      categorias = categorias["categorias"];
      res.json({ categorias });
    } catch (e) {
      console.log(e);
      res.json({ message: "Houve um erro", info: e });
    }
  },

  storeCategoria(req, res) {
    try {
      const { categoria } = req.body;
      writeCategoria(categoria);
      res.json({ categoria });
    } catch (error) {
      res.json({ message: "Houve um erro na gravação da nova categoria", info: error });
    }
  }
}