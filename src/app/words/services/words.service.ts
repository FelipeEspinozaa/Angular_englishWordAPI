import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WordsService {

  
  private api_key: string = "b88280a4b9mshb129ced18d3e7f1p12a480jsn115d55a50558";
  private api_host: string = "wordsapiv1.p.rapidapi.com";
  private servicioUrl: string = "https://wordsapiv1.p.rapidapi.com";
  private historial_palabras: string[] = [];
  

  constructor(private http: HttpClient) { }


  //Obtener el historial de palabras buscadas
  get historialPalabras() {
    return [...this.historial_palabras];
  }

  // Metodo que buscará la palabra en la API
  buscarDefinicion( query: string  = "") {

    query = query.trim().toLocaleLowerCase();
    this.historial_palabras.unshift( query );

    const headers = new HttpHeaders()
      .set("X-RapidAPI-Key" , this.api_key)
      .set("X-RapidAPI-Host", this.api_host)

      console.log(headers);
      console.log(this.servicioUrl);
      
      
    this.http.get(`${this.servicioUrl}/words/${query}/definitions`, { headers: headers })
      .subscribe( (resp) => {
        console.log(resp);
        this.historial_palabras
      })
    
  }

}
