import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";

const ApiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CmastConnectServiceService {

  constructor(private http: HttpClient) { }

  //Enter methods below

  //Posts Methods
  getPosts(){
    this.http.get(ApiUrl + '');
  }
  getPostsByDate(searchDate){
    this.http.get(ApiUrl + '', searchDate);
  }

  //Comments Methods
  getCommentsByPostId(postId){
    this.http.get(ApiUrl + 'comments/', postId);
  }
  newComment(postId, newComment){
    this.http.post(ApiUrl + 'comments/', postId, newComment);
  }
  updateCommentById(commentId, comment){
    this.http.put(ApiUrl + 'comments/', commentId, comment);
  }
  deleteCommentById(commentId){
    this.http.delete(ApiUrl + 'comments/', commentId);
  }

  //Photo Gallery Methods
  getPhotosByGalleryId(galleryId){
    this.http.get(ApiUrl + '', galleryId);
  }
}
