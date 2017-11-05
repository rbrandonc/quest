import { Injectable, NgZone } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NavController, App } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { Component } from '@angular/core';

@Injectable()
export class Api {
  user: endpoint;
  status: endpoint;
  basePath: String;

  constructor() {
    this.basePath = "localhost:8080/api/"
    this.user = new endpoint(this.basePath + 'user');
    this.status = new endpoint(this.basePath + 'status')
  }
}

class endpoint {
  path;
  constructor(path) {
    this.path = path;
  }

  create(data) {

  }

  update(data) {
  }

  get(data) {
    var result = data || {};
     return request(this.path, "GET", null, true).then(function(response) {
       return response;
      }
     );
  }

  delete(data) {
  }
}

function request(route, method, data, json) {
	return new Promise(function(resolve, reject){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open(method, route, true);

		if (method == "POST"){
			//Send the appropriate headers
			xmlhttp.setRequestHeader("Content-type", "application/json");
		}

		xmlhttp.onreadystatechange = function() {
			if ( xmlhttp.readyState == 4 ) {
				if (method == "POST")
					console.log("Response:", xmlhttp.responseText);
					console.log("method:", method);
				if (xmlhttp.status == 200) {
					if (json == true) {
						resolve(JSON.parse(xmlhttp.responseText))
					} else {
						resolve(xmlhttp.responseText)
					}
				} else if (xmlhttp.status == 400) {
					if (json == true) {
						reject(JSON.parse(xmlhttp.responseText))
					} else {
						reject(xmlhttp.responseText)
					}
				} else {
					if (json == true) {
						reject(JSON.parse(xmlhttp.responseText))
					} else {
						reject(xmlhttp.responseText)
					}
				}
			}
		}

		xmlhttp.send(data);
	});
}
