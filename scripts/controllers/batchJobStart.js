'use strict';

var app = angular.module('batchJobApp')

app.controller('batchJobController',
  function($scope, GetJson){
    $scope.batchData = GetJson.all();

    $scope.isNowExec = function(exec_status){
      console.log(exec_status);
    }
  }
/*
  function($scope){
    $scope.isNowExec = function(exec_status){
      console.log(exec_status);
      if(exec_status === 0){
        $scope.exec_status_msg = "準備完了";

        return true;
      }else{
        $scope.exec_status_msg = "実行中";
        return false;
      }
    }
  }
*/
);
