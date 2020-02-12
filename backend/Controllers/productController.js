const fs = require("fs");

function factoryProduct(nome, descricao, preco, categoria, urlImagem) {
    return {
        nome,
        descricao,
        preco,
        categoria,
        urlImagem
    }
}

function getProducts() {
    const arquivo = "database.json";
    const path = `Database/${arquivo}`;

    return fs.readFileSync(path, "UTF-8", (err, data) => {
        if (err) {
            return { message: "Erro ao ler arquivo" }
        }

        return data;
    })
}

function writeProduct(product = {}) {
    const arquivo = "database.json";
    const path = `Database/${arquivo}`;

    let allProducts = JSON.parse(getProducts());
    allProducts["data"].push(product);
    allProducts = JSON.stringify(allProducts);

    return fs.writeFileSync(path, allProducts, (err) => {
        if (err) {
            console.log(`Houve um erro ${err}`)
        } else {
            console.log(`Arquivo att com sucesso`);
        }
    })
}

function _getProductsByCategory(categoria = "") {

    let allProducts = JSON.parse(getProducts());
    allProducts = allProducts["data"];

    let produtosCategoria = allProducts.filter((elemento) => elemento["categoria"] == categoria);

    return produtosCategoria;

}

module.exports = {
    getAllProducts(req, res) {
        try {
            let allProducts = getProducts();
            console.log(allProducts);
            allProducts = JSON.parse(allProducts);
            res.json(allProducts);
        } catch (e) {
            console.log(e);
            res.json({ message: "Erro ao buscar produtos", info: e });
        }

    },

    storeProduct(req, res) {

        try {
            const { nome, descricao, preco, categoria, urlImagem } = req.body;
            const product = factoryProduct(nome, descricao, preco, categoria, urlImagem);

            writeProduct(product);
            res.json(product);

        } catch (e) {
            res.json({ message: e });
        }
    },

    getProductsByCategory(req, res) {
        try {
            const { categoria } = req.params;

            const productsByCategory = _getProductsByCategory(categoria);

            res.json({ data: productsByCategory });
        } catch (e) {
            res.json({ message: "Houve um erro", info: e });
        }


    }
};