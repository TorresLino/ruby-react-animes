import { AbstractDAO } from './AbstractDAO.js'
import { Status } from './Status.js'

class StatusDAO extends AbstractDAO{
    constructor(){
        super('http://127.0.0.1:3000/api/statuses')
    }

    async fetchAll(){
        this.allObjects = []
        await super.fetchAll();
        for(var s of this.responseData){
            this.allObjects.push(
                new Status(s['id'], s['name']));
        }
    }

    async fetch(id){
        await super.fetch(id);
        var s = this.responseData;
        this.object = new Status(s['id'], s['name']);
    }

    async create(){
        throw new Error('You are not supposed to create statuses with this application')
    }

    async update(){
        throw new Error('You are not supposed to update statuses with this application')
    }

    async delete(){
        throw new Error('You are not supposed to delete statuses with this application')
    }
}

export { StatusDAO };

var sdao = new StatusDAO();
await sdao.fetchAll()
await sdao.fetch(2)
console.log(sdao.allObjects.map(o => o.toObject()))
console.log(sdao.object.toObject())