const listaAnimes = require("../mocks/listaAnimes")

function getAllAnimes(req, res) {
    res.send(listaAnimes);
}

function getAnimeById(req, res){
    const { id } = req.params;
    const anime = listaAnimes.find(anime => anime.id === Number(id));

    if(!anime){
        return res.status(404).send("Anime Não Encontrado")
    }
    
    res.send(anime);
}

function insetAnime(req, res){
    const {
        id,
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sipnose
    } = req.body

    listaAnimes.push({
        id,
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sipnose
    })

    res.status(201).send("Anime Inserido Com Sucesso")
    
}


function updateAnime(req, res){
    const { id } = req.params;
    const { episodios } = req.body;

    const index = listaAnimes.findIndex(anime => anime.id === Number(id));

    listaAnimes[index].episodios = episodios;
}


module.exports =  {
    getAllAnimes,
    getAnimeById,
    insetAnime,
    updateAnime
}
