import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binge';
	private data:any = []
	  constructor(private http: HttpClient) {
	   
	 }
  public getMovieName() {
  const url ='http://127.0.0.1:5000/title/The%20Dark%20Knight%20Rises'
   this.http.get(url).subscribe((res)=>{
     this.data = res
     console.log(this.data)
   })  }
}

 
