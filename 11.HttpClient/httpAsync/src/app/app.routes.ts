import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Todo } from './todo';
import { TodoDetail } from './todo-detail';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const routes: Routes = [
    {
        path: '',
        component:Todo
    },
    {
        path:':id',
        component:TodoDetail,
        resolve: {
            todo:async ({params}:ActivatedRouteSnapshot)=>{
                const http = Inject(HttpClient);
                // await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate a delay of 3 seconds
                const id = params['id'];
                return http.get(`https://jsonplaceholder.typicode.com/todos/`+id);
            }
        }
    }
];
