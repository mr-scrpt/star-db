export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResources (url){
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`ответ на запрос по адресу ${this._apiBase}${url} не был получен`);
        }
        return await res.json();
    };

    async getAllPeople(){
        const res = await this.getResources(`/people/`);
        return res.results;
    }

    getPerson(id){
        return this.getResources(`/people/${id}/`)
    }

    async getAllPlanets(){
        const res = await this.getResources(`/planets/`);
        return res.results;
    }

    getPlanet(id){
        return this.getResources(`/planets/${id}/`)
    }


    async getAllStarships(){
        const res = await this.getResources(`/starships/`);
        return res.results;
    }

    getStarship(id){
        return this.getResources(`/starships/${id}/`)
    }
}