import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './books/bookschema';
import { Genres } from './genres/genres_schema';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private book?: Book;
  private genre?: Genres;
  API_SERVER = 'http://localhost:3000';
  constructor(private httpclient: HttpClient) {}
  public genresetter(genre: Genres) {
    this.genre = genre;
  }
  public genregetter() {
    return this.genre;
  }
  public setter(book: Book) {
    this.book = book;
  }
  public getter() {
    return this.book;
  }

  //-------------------------------------Books EndPoints-----------------------------------

  public getallbooks() {
    return this.httpclient.get<Book[]>(`${this.API_SERVER}/books`);
  }
  public addbooks(books: Book) {
    return this.httpclient.post<Book>(`${this.API_SERVER}/books`, books);
  }
  public putupdatebooks(id: string, body: Book) {
    return this.httpclient.put<Book>(
      `${this.API_SERVER}/books/putupdate/${id}`,
      body
    );
  }
  public patchupdatebooks(book_id: Book, body: Book) {
    return this.httpclient.patch<Book>(
      `${this.API_SERVER}/books/patchupdate/${book_id}`,
      body
    );
  }

  public deletebooks(id: string) {
    return this.httpclient.delete(`${this.API_SERVER}/books/${id}`);
  }
  public uploadbookimage(image: File) {
    // const formData = new FormData();
    // formData.append('file', image);
    return this.httpclient.post<any>(`${this.API_SERVER}/images/upload`, image);
  }

  //-------------------------------------Genre EndPoints------------------------------------

  public getallgenres() {
    return this.httpclient.get<Genres[]>(`${this.API_SERVER}/genres`);
  }
  public getdepartmentbyid(genreID: Genres) {
    return this.httpclient.get<Genres>(
      `${this.API_SERVER}/genres/${genreID}/singlegenres`
    );
  }
  async getallBooksofSingleGenere(genre: Genres) {
    return this.httpclient.get<Book[]>(
      `${this.API_SERVER}/genres/booksofperticulargenre/${genre}`
    );
  }
  public addgenres(genres: Genres) {
    return this.httpclient.post<Genres>(`${this.API_SERVER}/genres`, genres);
  }
  public putupdategenre(id: string) {
    //const url = `${this.API_SERVER}/genres/putupdate/${body}`;
    //return this.httpclient.put<Genres>(url, body);

    const params = new HttpParams().set('id', id);
    // return this.httpclient.put<Genres>(
    //   `${this.API_SERVER}/genres/putupdate/${params},${body}`,
    //   { params, body }

    return this.httpclient.put<Genres>(
      `${this.API_SERVER}/genres/putupdate/${id}`,
      { params }
    );
  }
  public patchupdategenres(genre_id: Genres, body: any) {
    return this.httpclient.put<Genres>(
      `${this.API_SERVER}/genres/${genre_id}/patchupdate`,
      genre_id
    );
  }

  public deletegenres(id: string) {
    return this.httpclient.delete(`${this.API_SERVER}/genres/${id}`);
  }
}
