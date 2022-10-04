import { AbstractDAO } from './AbstractDAO.js'
import { Anime } from './Anime.js'

class AnimeDAO extends AbstractDAO{
    constructor(){
        super('http://127.0.0.1:3000/api/animes')
    }

    async fetchAll(){
        var animes = (await super.fetchAll()).data.map(a => 
            new Anime(a['id'], a['title'], a['description'],
                a['episodes'], a['episodeDuration'], a['rating'],
                a['premiered'], a['status_id'], a['slug'])
            );
        return animes;
    }

    async fetch(id){
        
        var a = (await super.fetch(id)).data;
        return new Anime(a['id'], a['title'], a['description'],
                a['episodes'], a['episodeDuration'], a['rating'],
                a['premiered'], a['status_id'], a['slug']);
    }

    create(object){
        return super.create(object);
    }

    update(object){
        return super.update(object);
    }

    delete(id){
        return super.delete(id);
    }
}

export { AnimeDAO };
