angular.module('batchJobApp', [])
  .controller('batchJobController', function($scope){
    $scope.batchData = [
        { name:'勤怠実績CSV出力', lastBatchJobTime:'31s', lastBatchJobDt:'2016/09/11 07:03:11'},
        { name:'従業員一覧表', lastBatchJobTime:'31s', lastBatchJobDt:'2016/09/11 07:15:11'}
    ];
  });
