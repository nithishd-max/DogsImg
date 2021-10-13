import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) {}

  getRandomPics():Observable<any> {

    return this.http.get("https://dog.ceo/api/breeds/image/random/5", {});
    
    }

  getAllBreeds():Observable<any> {

    return this.http.get("https://dog.ceo/api/breeds/list/all", {});
    
    }

  getRandomPicsForBreed(breed: string):Observable<any> {

    return this.http.get(`https://dog.ceo/api/breeds/${breed}/image/random/5`, {});
    
    }
}
