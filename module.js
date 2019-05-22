let myapp= angular.module("Myapp",[]);

let mycontroller = function($scope){
    $scope.message = "Hello world";
}

myapp.controller("MyController",mycontroller);

let JSONController = function($scope){
 let Student = {
     FirstName : "Chitralekha",
     LastName : "Chikku",
     Email : "s534630@nwmissouri.edu"
 }
 $scope.Student=Student;

}

myapp.controller("Student",JSONController);