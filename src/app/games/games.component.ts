import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

var http: any;
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
    
    constructor(private httpClient: HttpClient) {
        http = httpClient;
    }
    /*constructor() {}*/

    ngOnInit() {
       
        http.get("https:\/\/venados.dacodes.mx\/api\/games", httpOptions).subscribe((res: Response) => {
            console.log(res);
            // you can assign the value to any variable here
        });
  }


}
