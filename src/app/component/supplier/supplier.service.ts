import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from './supplier.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  baseUrl = "http://localhost:8080/suppliers"

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(supplier: Supplier): Observable<Supplier>{
    return this.http.post<Supplier>(this.baseUrl, supplier)
  }

  read(): Observable<Supplier[]>{
    return this.http.get<Supplier[]>(this.baseUrl)
  }

  readById(id: string): Observable<Supplier>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Supplier>(url)
  }

  update(supplier: Supplier): Observable<Supplier>{
    const url = `${this.baseUrl}/${supplier.id}`
    return this.http.put<Supplier>(url, supplier)
  }

  delete(id: number): Observable<Supplier>{ 
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Supplier>(url)
  }
}
