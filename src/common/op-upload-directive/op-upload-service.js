define("common/op-upload-directive/op-upload-service", ['./_module'], function($__0) {
  "use strict";
  var __moduleName = "common/op-upload-directive/op-upload-service";
  function require(path) {
    return $traceurRuntime.require("common/op-upload-directive/op-upload-service", path);
  }
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  var ngModule = $__0.ngModule;
  function uploadService($q) {
    return {upload: function(url, file) {
        var deferred = $q.defer(),
            xhr = new XMLHttpRequest(),
            uploadPromise = deferred.promise;
        if (!url || !file) {
          throw new Error('You should provide an url and a file');
        }
        xhr.upload.onprogress = function(evt) {
          if (!evt.lengthComputable || (evt.lengthComputable && (evt.loaded < 0 || evt.total < 0))) {
            return;
          }
          deferred.notify({
            progress: (evt.loaded / evt.total) * 100,
            uploadedValue: evt.loaded
          });
        };
        xhr.onload = function(xhr) {
          var status = xhr.target.status;
          if (status !== 200 && status !== 201) {
            ((status === 409) && deferred.reject('conflict')) || deferred.reject('error');
          }
          try {
            deferred.resolve(JSON.parse(xhr.target.response));
          } catch (e) {
            deferred.resolve();
          }
        };
        xhr.onerror = function() {
          deferred.reject('error');
        };
        xhr.onabort = function() {
          deferred.reject('abort');
        };
        xhr.open('post', url, true);
        xhr.setRequestHeader('Content-Type', 'application/octet-stream');
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('Content-Disposition', "attachment; filename*=utf-8''" + encodeURI(file.name));
        xhr.send(file);
        uploadPromise.abort = function() {
          if (xhr && xhr.readyState !== 4) {
            xhr.abort();
          }
        };
        return uploadPromise;
      }};
  }
  ngModule.factory('opUploadService', ['$q', uploadService]);
  return {};
});
