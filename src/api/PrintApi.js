/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. From visualizing data to 3D printing, take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


module.exports = (function() {
   'use strict';

   var ApiClient = require('../ApiClient'),
       Task = require('../model/Task'),
       AnalyzeMeshParams = require('../model/AnalyzeMeshParams'),
       MeshObj = require('../model/MeshObj'),
       ImportMeshParams = require('../model/ImportMeshParams'),
       RepairMeshParams = require('../model/RepairMeshParams');

  /**
   * Print service.
   * @module api/PrintApi
   * @version 0.1.7
   */

  /**
   * Constructs a new PrintApi. 
   * @alias module:api/PrintApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Analyze a mesh for basic problems.Note that this API cannot report all mesh problems; Some problems cannot be evaluated until other problems have been repaired.
     * @param {module:model/AnalyzeMeshParams} analyzeMeshParams 
     * data is of type: {module:model/Task}
     * @param {Object} credentials Credentials for the call
     */
    this.analyzeMesh = function(analyzeMeshParams, credentials) {
      var postBody = analyzeMeshParams;

      // verify the required parameter 'analyzeMeshParams' is set
      if (analyzeMeshParams == undefined || analyzeMeshParams == null) {
        throw "Missing the required parameter 'analyzeMeshParams' when calling analyzeMesh";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Task;

      return this.apiClient.callApi(
        '/ps/v1/geom/meshes/analyze', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };


    /**
     * Exports a repaired mesh.
     * @param {module:model/MeshObj} meshObj 
     * data is of type: {module:model/Task}
     * @param {Object} credentials Credentials for the call
     */
    this.exportMesh = function(meshObj, credentials) {
      var postBody = meshObj;

      // verify the required parameter 'meshObj' is set
      if (meshObj == undefined || meshObj == null) {
        throw "Missing the required parameter 'meshObj' when calling exportMesh";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Task;

      return this.apiClient.callApi(
        '/ps/v1/geom/meshes/export', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };


    /**
     * Most Print Preparation APIs are asynchronous. They do not halt execution of your program and instead initiate a task that runs in the background.Your program must call the Get Task API to monitor execution and get the response to the asynchronous API.
     * @param {String} id 
     * data is of type: {module:model/Task}
     * @param {Object} credentials Credentials for the call
     */
    this.getTaskById = function(id, credentials) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getTaskById";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Task;

      return this.apiClient.callApi(
        '/ps/v1/print/tasks/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };


    /**
     * Create a mesh from a 3D geometry file
     * @param {module:model/ImportMeshParams} importMeshParams 
     * data is of type: {module:model/Task}
     * @param {Object} credentials Credentials for the call
     */
    this.importMesh = function(importMeshParams, credentials) {
      var postBody = importMeshParams;

      // verify the required parameter 'importMeshParams' is set
      if (importMeshParams == undefined || importMeshParams == null) {
        throw "Missing the required parameter 'importMeshParams' when calling importMesh";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Task;

      return this.apiClient.callApi(
        '/ps/v1/geom/meshes/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };


    /**
     * Detects mesh defects and repairs them.
     * @param {module:model/RepairMeshParams} repairMeshParams 
     * data is of type: {module:model/Task}
     * @param {Object} credentials Credentials for the call
     */
    this.repairMesh = function(repairMeshParams, credentials) {
      var postBody = repairMeshParams;

      // verify the required parameter 'repairMeshParams' is set
      if (repairMeshParams == undefined || repairMeshParams == null) {
        throw "Missing the required parameter 'repairMeshParams' when calling repairMesh";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Task;

      return this.apiClient.callApi(
        '/ps/v1/geom/meshes/repair', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };
  };

  return exports;
}());
