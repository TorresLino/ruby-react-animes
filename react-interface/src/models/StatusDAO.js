import { AbstractDAO } from './AbstractDAO.js'
import { Status } from './Status.js'

class StatusDAO extends AbstractDAO{
    constructor(){
        super('http://127.0.0.1:3000/api/statuses')
    }

    async fetchAll(){
        var statuses = (await super.fetchAll()).data.map(s => 
            new Status(s['id'], s['name']));
        return statuses;
    }

    async fetch(id){
        var s = (await super.fetch(id)).data;
        return new Status(s['id'], s['name']);
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