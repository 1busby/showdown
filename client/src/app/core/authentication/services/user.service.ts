import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../../../../../shared/models';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<IUser[]>(`${'http://localhost:4000'}/users`);
    }

    register(user: IUser) {
        return this.http.post(`${'http://localhost:4000'}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${'http://localhost:4000'}/users/${id}`);
    }
}