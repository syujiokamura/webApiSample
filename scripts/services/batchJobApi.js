angular.module('batchJobApp')
.factory('GetJson', function($resource){

  var res = $resource('http://localhost:8080/webApi/PushExecBatchData');
  return {
    all:function(){
      return res.query();
    }
  }
});
