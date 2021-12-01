import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Picture } from '../models/Picture';

@Injectable({
  providedIn: 'root'
})

export class WebPaintAPIService {

  private endpoint:string = "";   //"https://211004-rr-web-app.azurewebsites.net/api";

  constructor(private http:HttpClient) { }

  getAllUsers() :Observable<User[]>
  {return this.http.get<User[]>(this.endpoint + "/User/All");}

  getUser(p_Id:number) :Observable<User>
  {return this.http.get<User>(this.endpoint + "/User/" + p_Id);}
    
  getAllPictures() : Observable<Picture[]>
  {return this.http.get<Picture[]>(this.endpoint + "/Picture/All");}
   
  getPicture(p_Id:number) :Observable<Picture>
  {return this.http.get<Picture>(this.endpoint + "/Picture/" + p_Id);}


}