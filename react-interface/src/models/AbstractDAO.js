import axios from 'axios';

class AbstractDAO{
    api_url;

    constructor(api_url){
        this.api_url = api_url;
        if( this.constructor == AbstractDAO){
            throw new Error("Cannot instantiate abstract class AstractDAO");
        }
    }

    fetchAll(){
        return axios.get(this.api_url);
    }
    fetch(id){
        return axios.get(this.api_url + '/' + id);
    }
    create(object){
        return axios.post(this.api_url, object.toObject());
    }
    update(object){
        return axios.put(this.api_url + '/' + object.getId(), object.toObject());
    }
    delete(id){
        return axios.delete(this.api_url + '/' + id);
    }
}
export { AbstractDAO };