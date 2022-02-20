import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetHighwayRoadworksResponse } from '../api-models/get-highway-roadworks-response';
import { ListHighwaysResponse } from '../api-models/list-highways-response';

const AUTOBAHN_API_BASE = 'https://verkehr.autobahn.de/o/autobahn';

@Injectable({
  providedIn: 'root'
})
export class AutobahnService {
  constructor(private readonly httpClient: HttpClient) { }

  listHighways(): Observable<ListHighwaysResponse> {
    return this.httpClient.get<ListHighwaysResponse>(`${AUTOBAHN_API_BASE}/`);
  }
  
  getHighwayRoadworks(highwayId: string): Observable<GetHighwayRoadworksResponse> {
    return this.httpClient.get<GetHighwayRoadworksResponse>(`${AUTOBAHN_API_BASE}/${highwayId}/services/roadworks`);
  }
}
