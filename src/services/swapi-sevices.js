export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    _extractId (item){
        const regExpTpl = /\/([0-9]*)\/$/;

        return item.url.match(regExpTpl)[1];
    };

    _transformPlanet = (planet)=> {
        const id = this._extractId(planet);

        return {
            id,
            name: planet['name'],
            population: planet['population'],
            rotationPeriod: planet['rotation_period'],
            diameter: planet['diameter']
        };
    };

    _transformStarship = (starship) => {
        const id = this._extractId(starship);

        return {
            id,
            name: starship['name'],
            model: starship['model'],
            manufacture: starship['manufacture'],
            consInCredits: starship['consInCredits'],
            length: starship['length'],
            crew: starship['crew'],
            passengers: starship['passengers'],
            cargoCapacity: starship['cargoCapacity'],
        }
    };

    _transformPerson = (person) =>{
        const id = this._extractId(person);

        return {
            id,
            name: person['name'],
            gender: person['gender'],
            birthYear: person['birth_year'],
            eyeColor: person['eye_color']

        }
    };

    getResources = async (url) =>{
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`ответ на запрос по адресу ${this._apiBase}${url} не был получен`);
        }
        return await res.json();
    };

    getAllPeople = async ()=> {
        const res = await this.getResources(`/people/`);
        return res.results.map(person=> this._transformPerson(person));
    };

    getPerson = async(id) => {
        const person =  this.getResources(`/people/${id}/`);

        return this._transformPerson(person);
    };

    getAllPlanets = async () => {
        const res = await this.getResources(`/planets/`);

        return res.results.map(planet=>this._transformPlanet(planet));
    };

    getPlanet = async (id) => {
        const planet = await this.getResources(`/planets/${id}/`);

        return this._transformPlanet(planet, id);

    };


    getAllStarships= async () => {
        const res = await this.getResources(`/starships/`);

        return res.results.map(starship=> this._transformStarship(starship));
    };

    getStarship = async (id) =>{
        const starship =  this.getResources(`/starships/${id}/`);

        return this._transformStarship(starship);
    };
}