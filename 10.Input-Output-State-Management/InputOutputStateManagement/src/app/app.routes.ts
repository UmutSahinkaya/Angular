import { Component } from '@angular/core';
import { Path } from './../../node_modules/sass/node_modules/readdirp/index.d';
import { Routes } from '@angular/router';
import { Products } from './products';

export const routes: Routes = [
    {
        path:"",
        component:Products
    }
];
