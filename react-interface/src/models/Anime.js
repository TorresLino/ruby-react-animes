class Anime{
    #id;
    #title;
    #description;
    #episodes;
    #episodeDuration;
    #rating;
    #premiered;
    #status_id;
    #slug;

    constructor(
            id, title, description, episodes, episodeDuration,
            rating, premiered, status_id, slug){
        this.setId(id);
        this.setTitle(title);
        this.setDescription(description);
        this.setEpisodes(episodes);
        this.setEpisodeDuration(episodeDuration);
        this.setRating(rating);
        this.setPremiered(premiered);
        this.setStatusId(status_id);
        this.setSlug(slug);
    }

    toObject(){
        return(
            {
                title: this.#title, description: this.#description,
                episodes: this.#episodes, episodeDuration: this.#episodeDuration,
                rating: this.#rating, premiered: this.#premiered.toISOString().split('T')[0],
                status_id: this.#status_id, slug: this.#slug
            }
        )
    }

    setId(id) { this.#id = parseInt(id); }
    setTitle(title) { this.#title = title; }
    setDescription(description) { this.#description = description; }
    setEpisodes(episodes) { this.#episodes = parseInt(episodes); }
    setEpisodeDuration(episodeDuration) { this.#episodeDuration = parseInt(episodeDuration); }
    setRating(rating) { this.#rating = parseFloat(rating); }
    setPremiered(premiered) { this.#premiered = new Date(premiered); }
    setStatusId(status_id) { this.#status_id = parseInt(status_id); }
    setSlug(slug) { this.#slug = slug; }

    getId() { return this.#id }
    getTitle() { return this.#title }
    getDescription() { return this.#description }
    getEpisodes() { return this.#episodes }
    getEpisodeDuration() { return this.#episodeDuration }
    getRating() { return this.#rating }
    getPremiered() { return this.#premiered }
    getStatusId() { return this.#status_id }
    getSlug() { return this.#slug }
}

export { Anime };