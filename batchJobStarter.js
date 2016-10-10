angular.module('batchJobApp', [
  'ngResource'
])
  .factory('GetJson', function($resource){

    var res = $resource('http://localhost:8080/webApi/PushExecBatchData');
    return {
      all:function(){
        return res.query();
      }
    }

  })
  .controller('MainCtrl', functon($scope, GetJson){
    $scope.batchData = GetJson.all();
  });
/*
  .controller('batchJobController',
    function($scope, $http){
      $scope.batchData = [


        $http({
          method:'GET',
          url:'http://localhost:8080/webApi/PushExecBatchData',
        })
        .success(function(data) {;
          data;
        })
        .error(function(data) {
          console.log(data);
      })


/*
        { exec_nm:'勤怠実績CSV出力', lastBatchJobTime:'31s', lastBatchJobDt:'2016/09/11 07:03:11'},
        { exec_nm:'従業員一覧表', lastBatchJobTime:'31s', lastBatchJobDt:'2016/09/11 07:15:11'}

  ];
*/
