import axios from 'axios';

class AbstractDAO{
    object;
    allObjects = [];
    responseData;
    api_url;

    constructor(api_url){
        this.api_url = api_url;
        if( this.constructor == AbstractDAO){
            throw new Error("Cannot instantiate abstract class AstractDAO");
        }
    }

    async fetchAll(){
        this.responseData = (await axios.get(this.api_url)).data;
    }

    //the following methods perform CRUD operations based     
    //on the this.object attribute
    async fetch(id){
        this.responseData = (await axios.get(this.api_url + '/' + id)).data;
    }
    async create(){
        this.responseData = await axios.post(this.api_url, this.object.toObject());
    }
    async update(){
        this.responseData = await axios.put(this.api_url + '/' + this.object.getId(), 
            this.object.toObject());
    }
    async delete(){
        this.responseData = await axios.delete(this.api_url + '/' + this.object.getId());
    }
    
    getObject(){
        return this.object;
    }
    getAll(){
        return this.allObjects;
    }
    setObject(object){
        this.object = object;
    }
}
export { AbstractDAO };