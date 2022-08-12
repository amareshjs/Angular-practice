import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private loginUrl="https://62cfa6ea486b6ce826594461.mockapi.io/api/login";
  private registerUrl="https://62cfa6ea486b6ce826594461.mockapi.io/api/register";


  constructor(private http:HttpClient) { }


  // register(user){

  // }
}
