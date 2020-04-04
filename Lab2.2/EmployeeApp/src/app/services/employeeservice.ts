import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService {

 store=[
   new Employee(2,"Swarnim",25000,"JAVA"),
   new Employee(1,'Anirudh',20000,"Angular"),
   new Employee(5,'Rahul',20000,"JS"),
   new Employee(4,'Navdeep',21000,"Java"),
   new Employee(3,'Ravi',24000,"Angular"),
   new Employee(6,'Amit',19000,"C"),
   new Employee(7,'Shashank',27000,"C++")
];   
 


  fetchAllEmployees(): Employee[]{
     return this.store;
  }


}