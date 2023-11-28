import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Image } from '../interfaces/imgs'
import { Observable } from "rxjs"


interface CaptureOptions {
	width?: number;
}

@Injectable({
	providedIn: 'root'
})
export class ImageService {
	private apiUrl = 'http://localhost:3001';


	constructor(private http: HttpClient) { }

	getImages(count:string): Observable<Image[]> {
		return this.http.get<Image[]>(`${this.apiUrl}/gallery/${count}`)
	}
	capture(url: string, imgOptions: CaptureOptions = {}): Observable<Blob> {
		//return this.http.post<Image>(`${this.apiUrl}/capture`, Object.assign({url}, options));
		const params = new URLSearchParams(Object.assign({url}, imgOptions) as any  as Record<string,string>);
		
	 	return this.http.get(`${this.apiUrl}/capture?` + params.toString(),{ responseType: 'blob' });
	}

}
