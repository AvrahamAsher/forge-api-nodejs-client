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
       JsonApiCollection = require('../model/JsonApiCollection'),
       CreateRef = require('../model/CreateRef');

  /**
   * Folders service.
   * @module api/FoldersApi
   * @version 0.1.5
   */

  /**
   * Constructs a new FoldersApi. 
   * @alias module:api/FoldersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Returns the folder by ID for any folder within a given project. All folders or sub-folders within a project are associated with their own unique ID, including the root folder. 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} folderId the &#x60;folder id&#x60;
     * @param {Object} credentials Credentials for the call
     */
    this.getFolder = function(projectId, folderId, credentials) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling getFolder";
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw "Missing the required parameter 'folderId' when calling getFolder";
      }


      var pathParams = {
        'project_id': projectId,
        'folder_id': folderId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/folders/{folder_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };


    /**
     * Returns a collection of items and folders within a folder. Items represent word documents, fusion design files, drawings, spreadsheets, etc. 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} folderId the &#x60;folder id&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterType filter by the &#x60;type&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterId filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * @param {Integer} opts.pageNumber specify the page number
     * @param {Integer} opts.pageLimit specify the maximal number of elements per page
     * data is of type: {module:model/JsonApiCollection}
     * @param {Object} credentials Credentials for the call
     */
    this.getFolderContents = function(projectId, folderId, opts, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling getFolderContents";
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw "Missing the required parameter 'folderId' when calling getFolderContents";
      }


      var pathParams = {
        'project_id': projectId,
        'folder_id': folderId
      };
      var queryParams = {
        'filter[type]': this.apiClient.buildCollectionParam(opts['filterType'], 'multi'),
        'filter[id]': this.apiClient.buildCollectionParam(opts['filterId'], 'multi'),
        'filter[extension.type]': this.apiClient.buildCollectionParam(opts['filterExtensionType'], 'multi'),
        'page[number]': opts['pageNumber'],
        'page[limit]': opts['pageLimit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = JsonApiCollection;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/folders/{folder_id}/contents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };


    /**
     * Returns the parent folder (if it exists). In a project, subfolders and resource items are stored under a folder except the root folder which does not have a parent of its own. 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} folderId the &#x60;folder id&#x60;
     * @param {Object} credentials Credentials for the call
     */
    this.getFolderParent = function(projectId, folderId, credentials) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling getFolderParent";
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw "Missing the required parameter 'folderId' when calling getFolderParent";
      }


      var pathParams = {
        'project_id': projectId,
        'folder_id': folderId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/folders/{folder_id}/parent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };


    /**
     * Returns the resources (&#x60;items&#x60;, &#x60;folders&#x60;, and &#x60;versions&#x60;) which have a custom relationship with the given &#x60;folder_id&#x60;. Custom relationships can be established between a folder and other resources within the &#39;data&#39; domain service (folders, items, and versions). 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} folderId the &#x60;folder id&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterType filter by the &#x60;type&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterId filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * data is of type: {module:model/JsonApiCollection}
     * @param {Object} credentials Credentials for the call
     */
    this.getFolderRefs = function(projectId, folderId, opts, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling getFolderRefs";
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw "Missing the required parameter 'folderId' when calling getFolderRefs";
      }


      var pathParams = {
        'project_id': projectId,
        'folder_id': folderId
      };
      var queryParams = {
        'filter[type]': this.apiClient.buildCollectionParam(opts['filterType'], 'multi'),
        'filter[id]': this.apiClient.buildCollectionParam(opts['filterId'], 'multi'),
        'filter[extension.type]': this.apiClient.buildCollectionParam(opts['filterExtensionType'], 'multi')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = JsonApiCollection;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/folders/{folder_id}/refs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };


    /**
     * Returns the custom relationships that are associated to the given &#x60;folder_id&#x60;. Custom relationships can be established between a folder and other resources within the &#39;data&#39; domain service (folders, items, and versions). 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} folderId the &#x60;folder id&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterType filter by the &#x60;type&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterId filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterRefType filter by &#x60;refType&#x60;
     * @param {module:model/String} opts.filterDirection filter by the direction of the reference
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * data is of type: {Object}
     * @param {Object} credentials Credentials for the call
     */
    this.getFolderRelationshipsRefs = function(projectId, folderId, opts, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling getFolderRelationshipsRefs";
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw "Missing the required parameter 'folderId' when calling getFolderRelationshipsRefs";
      }


      var pathParams = {
        'project_id': projectId,
        'folder_id': folderId
      };
      var queryParams = {
        'filter[type]': this.apiClient.buildCollectionParam(opts['filterType'], 'multi'),
        'filter[id]': this.apiClient.buildCollectionParam(opts['filterId'], 'multi'),
        'filter[refType]': this.apiClient.buildCollectionParam(opts['filterRefType'], 'multi'),
        'filter[direction]': opts['filterDirection'],
        'filter[extension.type]': this.apiClient.buildCollectionParam(opts['filterExtensionType'], 'multi')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };


    /**
     * Creates a custom relationship between a folder and another resource within the &#39;data&#39; domain service (folder, item, or version). 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} folderId the &#x60;folder id&#x60;
     * @param {module:model/CreateRef} body describe the ref to be created
     * @param {Object} credentials Credentials for the call
     */
    this.postFolderRelationshipsRef = function(projectId, folderId, body, credentials) {
      var postBody = body;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling postFolderRelationshipsRef";
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw "Missing the required parameter 'folderId' when calling postFolderRelationshipsRef";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling postFolderRelationshipsRef";
      }


      var pathParams = {
        'project_id': projectId,
        'folder_id': folderId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, credentials
      );
    };
  };

  return exports;
}());