import {HTTP} from './http';

export const AuthorService={

    getAll(){
        return HTTP.get('/api/authors');
    }

}