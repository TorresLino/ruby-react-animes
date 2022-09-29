import { AbstractDAO } from './AbstractDAO.js'
import { Anime } from './Anime.js'

class AnimeDAO extends AbstractDAO{
    constructor(){
        super('http://127.0.0.1:3000/api/animes')
    }

    async fetchAll(){
        this.allObjects = []
        await super.fetchAll();
        for(var a of this.responseData){
            this.allObjects.push(
                new Anime(a['id'], a['title'], a['description'],
                        a['episodes'], a['episodeDuration'], a['rating'],
                        a['premiered'], a['status_id'], a['slug']));
        }
    }

    async fetch(id){
        await super.fetch(id);
        var a = this.responseData;
        this.object = 
            new Anime(a['id'], a['title'], a['description'],
                a['episodes'], a['episodeDuration'], a['rating'],
                a['premiered'], a['status_id'], a['slug']);
    }

    async create(){
        await super.create();
    }

    async update(){
        await super.update();
    }

    async delete(){
        await super.delete();
    }
}

export { AnimeDAO };