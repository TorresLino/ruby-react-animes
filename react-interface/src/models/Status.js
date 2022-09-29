class Status{
    #id;
    #name;

    constructor(id, name){
        this.setId(id);
        this.setName(name);
    }

    toObject(){
        return({ name: this.getName() })
    }

    setId(id) { this.#id = parseInt(id); }
    setName(name) { this.#name = name; }

    getId() { return this.#id }
    getName() { return this.#name }
}

export { Status };