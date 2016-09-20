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

  var ApiClient = require('./ApiClient'),
      Activity = require('./model/Activity'),
      ActivityOptional = require('./model/ActivityOptional'),
      ActivityVersion = require('./model/ActivityVersion'),
      AnalyzeMeshParams = require('./model/AnalyzeMeshParams'),
      AppPackage = require('./model/AppPackage'),
      AppPackageOptional = require('./model/AppPackageOptional'),
      AppPackageVersion = require('./model/AppPackageVersion'),
      BaseAttributesCreatedUpdated = require('./model/BaseAttributesCreatedUpdated'),
      BaseAttributesCreatedUpdatedAttributes = require('./model/BaseAttributesCreatedUpdatedAttributes'),
      BaseAttributesExtensionObject = require('./model/BaseAttributesExtensionObject'),
      Bucket = require('./model/Bucket'),
      Buckets = require('./model/Buckets'),
      BucketsPermissions = require('./model/BucketsPermissions'),
      CreateBucket = require('./model/CreateBucket'),
      CreateItem = require('./model/CreateItem'),
      CreateRef = require('./model/CreateRef'),
      CreateStorage = require('./model/CreateStorage'),
      CreateVersion = require('./model/CreateVersion'),
      Diagnostics = require('./model/Diagnostics'),
      Engine = require('./model/Engine'),
      Folder = require('./model/Folder'),
      Formats = require('./model/Formats'),
      FormatsFormats = require('./model/FormatsFormats'),
      Health = require('./model/Health'),
      Hub = require('./model/Hub'),
      ImportMeshParams = require('./model/ImportMeshParams'),
      InlineResponse200 = require('./model/InlineResponse200'),
      InlineResponse2001 = require('./model/InlineResponse2001'),
      InlineResponse200Items = require('./model/InlineResponse200Items'),
      InputStream = require('./model/InputStream'),
      Item = require('./model/Item'),
      Job = require('./model/Job'),
      JobAcceptedJobs = require('./model/JobAcceptedJobs'),
      JobIgesOutputPayload = require('./model/JobIgesOutputPayload'),
      JobIgesOutputPayloadAdvanced = require('./model/JobIgesOutputPayloadAdvanced'),
      JobObjOutputPayload = require('./model/JobObjOutputPayload'),
      JobObjOutputPayloadAdvanced = require('./model/JobObjOutputPayloadAdvanced'),
      JobPayload = require('./model/JobPayload'),
      JobPayloadInput = require('./model/JobPayloadInput'),
      JobPayloadItem = require('./model/JobPayloadItem'),
      JobPayloadOutput = require('./model/JobPayloadOutput'),
      JobStepOutputPayload = require('./model/JobStepOutputPayload'),
      JobStepOutputPayloadAdvanced = require('./model/JobStepOutputPayloadAdvanced'),
      JobStlOutputPayload = require('./model/JobStlOutputPayload'),
      JobStlOutputPayloadAdvanced = require('./model/JobStlOutputPayloadAdvanced'),
      JobSvfOutputPayload = require('./model/JobSvfOutputPayload'),
      JobThumbnailOutputPayload = require('./model/JobThumbnailOutputPayload'),
      JobThumbnailOutputPayloadAdvanced = require('./model/JobThumbnailOutputPayloadAdvanced'),
      JsonApiAttributes = require('./model/JsonApiAttributes'),
      JsonApiCollection = require('./model/JsonApiCollection'),
      JsonApiDocument = require('./model/JsonApiDocument'),
      JsonApiDocumentBase = require('./model/JsonApiDocumentBase'),
      JsonApiError = require('./model/JsonApiError'),
      JsonApiLink = require('./model/JsonApiLink'),
      JsonApiLinks = require('./model/JsonApiLinks'),
      JsonApiLinksPaging = require('./model/JsonApiLinksPaging'),
      JsonApiLinksRelated = require('./model/JsonApiLinksRelated'),
      JsonApiLinksSelf = require('./model/JsonApiLinksSelf'),
      JsonApiMeta = require('./model/JsonApiMeta'),
      JsonApiMetaLink = require('./model/JsonApiMetaLink'),
      JsonApiRelationships = require('./model/JsonApiRelationships'),
      JsonApiRelationshipsLinksExternalResource = require('./model/JsonApiRelationshipsLinksExternalResource'),
      JsonApiRelationshipsLinksInternal = require('./model/JsonApiRelationshipsLinksInternal'),
      JsonApiRelationshipsLinksInternalResource = require('./model/JsonApiRelationshipsLinksInternalResource'),
      JsonApiRelationshipsLinksRefs = require('./model/JsonApiRelationshipsLinksRefs'),
      JsonApiRelationshipsLinksRefsLinks = require('./model/JsonApiRelationshipsLinksRefsLinks'),
      JsonApiResource = require('./model/JsonApiResource'),
      JsonApiTypeId = require('./model/JsonApiTypeId'),
      JsonApiVersion = require('./model/JsonApiVersion'),
      JsonApiVersionJsonapi = require('./model/JsonApiVersionJsonapi'),
      Manifest = require('./model/Manifest'),
      ManifestChildren = require('./model/ManifestChildren'),
      ManifestDerivative = require('./model/ManifestDerivative'),
      Mesh = require('./model/Mesh'),
      MeshGeom = require('./model/MeshGeom'),
      MeshGeomBoundingBox = require('./model/MeshGeomBoundingBox'),
      MeshObj = require('./model/MeshObj'),
      MeshProblems = require('./model/MeshProblems'),
      Message = require('./model/Message'),
      Messages = require('./model/Messages'),
      Metadata = require('./model/Metadata'),
      MetadataCollection = require('./model/MetadataCollection'),
      MetadataData = require('./model/MetadataData'),
      MetadataMetadata = require('./model/MetadataMetadata'),
      MetadataObject = require('./model/MetadataObject'),
      ObjectDetails = require('./model/ObjectDetails'),
      ObjectFullDetails = require('./model/ObjectFullDetails'),
      ObjectFullDetailsDeltas = require('./model/ObjectFullDetailsDeltas'),
      Permission = require('./model/Permission'),
      PostBucketsPayload = require('./model/PostBucketsPayload'),
      PostBucketsPayloadAllow = require('./model/PostBucketsPayloadAllow'),
      PostBucketsSigned = require('./model/PostBucketsSigned'),
      PostObjectSigned = require('./model/PostObjectSigned'),
      Project = require('./model/Project'),
      Reason = require('./model/Reason'),
      RelRef = require('./model/RelRef'),
      RepairMeshParams = require('./model/RepairMeshParams'),
      Result = require('./model/Result'),
      Storage = require('./model/Storage'),
      Task = require('./model/Task'),
      TaskError = require('./model/TaskError'),
      UploadFile = require('./model/UploadFile'),
      Version = require('./model/Version'),
      WorkItem = require('./model/WorkItem'),
      WorkItemResp = require('./model/WorkItemResp'),
      ActivitiesApi = require('./api/ActivitiesApi'),
      AppPackagesApi = require('./api/AppPackagesApi'),
      BucketsApi = require('./api/BucketsApi'),
      DerivativesApi = require('./api/DerivativesApi'),
      EnginesApi = require('./api/EnginesApi'),
      FoldersApi = require('./api/FoldersApi'),
      HubsApi = require('./api/HubsApi'),
      ItemsApi = require('./api/ItemsApi'),
      ObjectsApi = require('./api/ObjectsApi'),
      PrintApi = require('./api/PrintApi'),
      ProjectsApi = require('./api/ProjectsApi'),
      VersionsApi = require('./api/VersionsApi'),
      WorkItemsApi = require('./api/WorkItemsApi'),
      authClientTwoLegged = require('./auth/OAuth2TwoLegged'),
      authClientThreeLegged = require('./auth/OAuth2ThreeLegged');


  /**
   * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. From visualizing data to 3D printing, take advantage of Autodesk’s expertise in design and engineering..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ForgeSdk = require('index'); // See note below*.
   * var xxxSvc = new ForgeSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ForgeSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ForgeSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ForgeSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1.7
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Activity model constructor.
     * @property {module:model/Activity}
     */
    Activity: Activity,
    /**
     * The ActivityOptional model constructor.
     * @property {module:model/ActivityOptional}
     */
    ActivityOptional: ActivityOptional,
    /**
     * The ActivityVersion model constructor.
     * @property {module:model/ActivityVersion}
     */
    ActivityVersion: ActivityVersion,
    /**
     * The AnalyzeMeshParams model constructor.
     * @property {module:model/AnalyzeMeshParams}
     */
    AnalyzeMeshParams: AnalyzeMeshParams,
    /**
     * The AppPackage model constructor.
     * @property {module:model/AppPackage}
     */
    AppPackage: AppPackage,
    /**
     * The AppPackageOptional model constructor.
     * @property {module:model/AppPackageOptional}
     */
    AppPackageOptional: AppPackageOptional,
    /**
     * The AppPackageVersion model constructor.
     * @property {module:model/AppPackageVersion}
     */
    AppPackageVersion: AppPackageVersion,
    /**
     * The BaseAttributesCreatedUpdated model constructor.
     * @property {module:model/BaseAttributesCreatedUpdated}
     */
    BaseAttributesCreatedUpdated: BaseAttributesCreatedUpdated,
    /**
     * The BaseAttributesCreatedUpdatedAttributes model constructor.
     * @property {module:model/BaseAttributesCreatedUpdatedAttributes}
     */
    BaseAttributesCreatedUpdatedAttributes: BaseAttributesCreatedUpdatedAttributes,
    /**
     * The BaseAttributesExtensionObject model constructor.
     * @property {module:model/BaseAttributesExtensionObject}
     */
    BaseAttributesExtensionObject: BaseAttributesExtensionObject,
    /**
     * The Bucket model constructor.
     * @property {module:model/Bucket}
     */
    Bucket: Bucket,
    /**
     * The Buckets model constructor.
     * @property {module:model/Buckets}
     */
    Buckets: Buckets,
    /**
     * The BucketsPermissions model constructor.
     * @property {module:model/BucketsPermissions}
     */
    BucketsPermissions: BucketsPermissions,
    /**
     * The CreateBucket model constructor.
     * @property {module:model/CreateBucket}
     */
    CreateBucket: CreateBucket,
    /**
     * The CreateItem model constructor.
     * @property {module:model/CreateItem}
     */
    CreateItem: CreateItem,
    /**
     * The CreateRef model constructor.
     * @property {module:model/CreateRef}
     */
    CreateRef: CreateRef,
    /**
     * The CreateStorage model constructor.
     * @property {module:model/CreateStorage}
     */
    CreateStorage: CreateStorage,
    /**
     * The CreateVersion model constructor.
     * @property {module:model/CreateVersion}
     */
    CreateVersion: CreateVersion,
    /**
     * The Diagnostics model constructor.
     * @property {module:model/Diagnostics}
     */
    Diagnostics: Diagnostics,
    /**
     * The Engine model constructor.
     * @property {module:model/Engine}
     */
    Engine: Engine,
    /**
     * The Folder model constructor.
     * @property {module:model/Folder}
     */
    Folder: Folder,
    /**
     * The Formats model constructor.
     * @property {module:model/Formats}
     */
    Formats: Formats,
    /**
     * The FormatsFormats model constructor.
     * @property {module:model/FormatsFormats}
     */
    FormatsFormats: FormatsFormats,
    /**
     * The Health model constructor.
     * @property {module:model/Health}
     */
    Health: Health,
    /**
     * The Hub model constructor.
     * @property {module:model/Hub}
     */
    Hub: Hub,
    /**
     * The ImportMeshParams model constructor.
     * @property {module:model/ImportMeshParams}
     */
    ImportMeshParams: ImportMeshParams,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse200Items model constructor.
     * @property {module:model/InlineResponse200Items}
     */
    InlineResponse200Items: InlineResponse200Items,
    /**
     * The InputStream model constructor.
     * @property {module:model/InputStream}
     */
    InputStream: InputStream,
    /**
     * The Item model constructor.
     * @property {module:model/Item}
     */
    Item: Item,
    /**
     * The Job model constructor.
     * @property {module:model/Job}
     */
    Job: Job,
    /**
     * The JobAcceptedJobs model constructor.
     * @property {module:model/JobAcceptedJobs}
     */
    JobAcceptedJobs: JobAcceptedJobs,
    /**
     * The JobIgesOutputPayload model constructor.
     * @property {module:model/JobIgesOutputPayload}
     */
    JobIgesOutputPayload: JobIgesOutputPayload,
    /**
     * The JobIgesOutputPayloadAdvanced model constructor.
     * @property {module:model/JobIgesOutputPayloadAdvanced}
     */
    JobIgesOutputPayloadAdvanced: JobIgesOutputPayloadAdvanced,
    /**
     * The JobObjOutputPayload model constructor.
     * @property {module:model/JobObjOutputPayload}
     */
    JobObjOutputPayload: JobObjOutputPayload,
    /**
     * The JobObjOutputPayloadAdvanced model constructor.
     * @property {module:model/JobObjOutputPayloadAdvanced}
     */
    JobObjOutputPayloadAdvanced: JobObjOutputPayloadAdvanced,
    /**
     * The JobPayload model constructor.
     * @property {module:model/JobPayload}
     */
    JobPayload: JobPayload,
    /**
     * The JobPayloadInput model constructor.
     * @property {module:model/JobPayloadInput}
     */
    JobPayloadInput: JobPayloadInput,
    /**
     * The JobPayloadItem model constructor.
     * @property {module:model/JobPayloadItem}
     */
    JobPayloadItem: JobPayloadItem,
    /**
     * The JobPayloadOutput model constructor.
     * @property {module:model/JobPayloadOutput}
     */
    JobPayloadOutput: JobPayloadOutput,
    /**
     * The JobStepOutputPayload model constructor.
     * @property {module:model/JobStepOutputPayload}
     */
    JobStepOutputPayload: JobStepOutputPayload,
    /**
     * The JobStepOutputPayloadAdvanced model constructor.
     * @property {module:model/JobStepOutputPayloadAdvanced}
     */
    JobStepOutputPayloadAdvanced: JobStepOutputPayloadAdvanced,
    /**
     * The JobStlOutputPayload model constructor.
     * @property {module:model/JobStlOutputPayload}
     */
    JobStlOutputPayload: JobStlOutputPayload,
    /**
     * The JobStlOutputPayloadAdvanced model constructor.
     * @property {module:model/JobStlOutputPayloadAdvanced}
     */
    JobStlOutputPayloadAdvanced: JobStlOutputPayloadAdvanced,
    /**
     * The JobSvfOutputPayload model constructor.
     * @property {module:model/JobSvfOutputPayload}
     */
    JobSvfOutputPayload: JobSvfOutputPayload,
    /**
     * The JobThumbnailOutputPayload model constructor.
     * @property {module:model/JobThumbnailOutputPayload}
     */
    JobThumbnailOutputPayload: JobThumbnailOutputPayload,
    /**
     * The JobThumbnailOutputPayloadAdvanced model constructor.
     * @property {module:model/JobThumbnailOutputPayloadAdvanced}
     */
    JobThumbnailOutputPayloadAdvanced: JobThumbnailOutputPayloadAdvanced,
    /**
     * The JsonApiAttributes model constructor.
     * @property {module:model/JsonApiAttributes}
     */
    JsonApiAttributes: JsonApiAttributes,
    /**
     * The JsonApiCollection model constructor.
     * @property {module:model/JsonApiCollection}
     */
    JsonApiCollection: JsonApiCollection,
    /**
     * The JsonApiDocument model constructor.
     * @property {module:model/JsonApiDocument}
     */
    JsonApiDocument: JsonApiDocument,
    /**
     * The JsonApiDocumentBase model constructor.
     * @property {module:model/JsonApiDocumentBase}
     */
    JsonApiDocumentBase: JsonApiDocumentBase,
    /**
     * The JsonApiError model constructor.
     * @property {module:model/JsonApiError}
     */
    JsonApiError: JsonApiError,
    /**
     * The JsonApiLink model constructor.
     * @property {module:model/JsonApiLink}
     */
    JsonApiLink: JsonApiLink,
    /**
     * The JsonApiLinks model constructor.
     * @property {module:model/JsonApiLinks}
     */
    JsonApiLinks: JsonApiLinks,
    /**
     * The JsonApiLinksPaging model constructor.
     * @property {module:model/JsonApiLinksPaging}
     */
    JsonApiLinksPaging: JsonApiLinksPaging,
    /**
     * The JsonApiLinksRelated model constructor.
     * @property {module:model/JsonApiLinksRelated}
     */
    JsonApiLinksRelated: JsonApiLinksRelated,
    /**
     * The JsonApiLinksSelf model constructor.
     * @property {module:model/JsonApiLinksSelf}
     */
    JsonApiLinksSelf: JsonApiLinksSelf,
    /**
     * The JsonApiMeta model constructor.
     * @property {module:model/JsonApiMeta}
     */
    JsonApiMeta: JsonApiMeta,
    /**
     * The JsonApiMetaLink model constructor.
     * @property {module:model/JsonApiMetaLink}
     */
    JsonApiMetaLink: JsonApiMetaLink,
    /**
     * The JsonApiRelationships model constructor.
     * @property {module:model/JsonApiRelationships}
     */
    JsonApiRelationships: JsonApiRelationships,
    /**
     * The JsonApiRelationshipsLinksExternalResource model constructor.
     * @property {module:model/JsonApiRelationshipsLinksExternalResource}
     */
    JsonApiRelationshipsLinksExternalResource: JsonApiRelationshipsLinksExternalResource,
    /**
     * The JsonApiRelationshipsLinksInternal model constructor.
     * @property {module:model/JsonApiRelationshipsLinksInternal}
     */
    JsonApiRelationshipsLinksInternal: JsonApiRelationshipsLinksInternal,
    /**
     * The JsonApiRelationshipsLinksInternalResource model constructor.
     * @property {module:model/JsonApiRelationshipsLinksInternalResource}
     */
    JsonApiRelationshipsLinksInternalResource: JsonApiRelationshipsLinksInternalResource,
    /**
     * The JsonApiRelationshipsLinksRefs model constructor.
     * @property {module:model/JsonApiRelationshipsLinksRefs}
     */
    JsonApiRelationshipsLinksRefs: JsonApiRelationshipsLinksRefs,
    /**
     * The JsonApiRelationshipsLinksRefsLinks model constructor.
     * @property {module:model/JsonApiRelationshipsLinksRefsLinks}
     */
    JsonApiRelationshipsLinksRefsLinks: JsonApiRelationshipsLinksRefsLinks,
    /**
     * The JsonApiResource model constructor.
     * @property {module:model/JsonApiResource}
     */
    JsonApiResource: JsonApiResource,
    /**
     * The JsonApiTypeId model constructor.
     * @property {module:model/JsonApiTypeId}
     */
    JsonApiTypeId: JsonApiTypeId,
    /**
     * The JsonApiVersion model constructor.
     * @property {module:model/JsonApiVersion}
     */
    JsonApiVersion: JsonApiVersion,
    /**
     * The JsonApiVersionJsonapi model constructor.
     * @property {module:model/JsonApiVersionJsonapi}
     */
    JsonApiVersionJsonapi: JsonApiVersionJsonapi,
    /**
     * The Manifest model constructor.
     * @property {module:model/Manifest}
     */
    Manifest: Manifest,
    /**
     * The ManifestChildren model constructor.
     * @property {module:model/ManifestChildren}
     */
    ManifestChildren: ManifestChildren,
    /**
     * The ManifestDerivative model constructor.
     * @property {module:model/ManifestDerivative}
     */
    ManifestDerivative: ManifestDerivative,
    /**
     * The Mesh model constructor.
     * @property {module:model/Mesh}
     */
    Mesh: Mesh,
    /**
     * The MeshGeom model constructor.
     * @property {module:model/MeshGeom}
     */
    MeshGeom: MeshGeom,
    /**
     * The MeshGeomBoundingBox model constructor.
     * @property {module:model/MeshGeomBoundingBox}
     */
    MeshGeomBoundingBox: MeshGeomBoundingBox,
    /**
     * The MeshObj model constructor.
     * @property {module:model/MeshObj}
     */
    MeshObj: MeshObj,
    /**
     * The MeshProblems model constructor.
     * @property {module:model/MeshProblems}
     */
    MeshProblems: MeshProblems,
    /**
     * The Message model constructor.
     * @property {module:model/Message}
     */
    Message: Message,
    /**
     * The Messages model constructor.
     * @property {module:model/Messages}
     */
    Messages: Messages,
    /**
     * The Metadata model constructor.
     * @property {module:model/Metadata}
     */
    Metadata: Metadata,
    /**
     * The MetadataCollection model constructor.
     * @property {module:model/MetadataCollection}
     */
    MetadataCollection: MetadataCollection,
    /**
     * The MetadataData model constructor.
     * @property {module:model/MetadataData}
     */
    MetadataData: MetadataData,
    /**
     * The MetadataMetadata model constructor.
     * @property {module:model/MetadataMetadata}
     */
    MetadataMetadata: MetadataMetadata,
    /**
     * The MetadataObject model constructor.
     * @property {module:model/MetadataObject}
     */
    MetadataObject: MetadataObject,
    /**
     * The ObjectDetails model constructor.
     * @property {module:model/ObjectDetails}
     */
    ObjectDetails: ObjectDetails,
    /**
     * The ObjectFullDetails model constructor.
     * @property {module:model/ObjectFullDetails}
     */
    ObjectFullDetails: ObjectFullDetails,
    /**
     * The ObjectFullDetailsDeltas model constructor.
     * @property {module:model/ObjectFullDetailsDeltas}
     */
    ObjectFullDetailsDeltas: ObjectFullDetailsDeltas,
    /**
     * The Permission model constructor.
     * @property {module:model/Permission}
     */
    Permission: Permission,
    /**
     * The PostBucketsPayload model constructor.
     * @property {module:model/PostBucketsPayload}
     */
    PostBucketsPayload: PostBucketsPayload,
    /**
     * The PostBucketsPayloadAllow model constructor.
     * @property {module:model/PostBucketsPayloadAllow}
     */
    PostBucketsPayloadAllow: PostBucketsPayloadAllow,
    /**
     * The PostBucketsSigned model constructor.
     * @property {module:model/PostBucketsSigned}
     */
    PostBucketsSigned: PostBucketsSigned,
    /**
     * The PostObjectSigned model constructor.
     * @property {module:model/PostObjectSigned}
     */
    PostObjectSigned: PostObjectSigned,
    /**
     * The Project model constructor.
     * @property {module:model/Project}
     */
    Project: Project,
    /**
     * The Reason model constructor.
     * @property {module:model/Reason}
     */
    Reason: Reason,
    /**
     * The RelRef model constructor.
     * @property {module:model/RelRef}
     */
    RelRef: RelRef,
    /**
     * The RepairMeshParams model constructor.
     * @property {module:model/RepairMeshParams}
     */
    RepairMeshParams: RepairMeshParams,
    /**
     * The Result model constructor.
     * @property {module:model/Result}
     */
    Result: Result,
    /**
     * The Storage model constructor.
     * @property {module:model/Storage}
     */
    Storage: Storage,
    /**
     * The Task model constructor.
     * @property {module:model/Task}
     */
    Task: Task,
    /**
     * The TaskError model constructor.
     * @property {module:model/TaskError}
     */
    TaskError: TaskError,
    /**
     * The UploadFile model constructor.
     * @property {module:model/UploadFile}
     */
    UploadFile: UploadFile,
    /**
     * The Version model constructor.
     * @property {module:model/Version}
     */
    Version: Version,
    /**
     * The WorkItem model constructor.
     * @property {module:model/WorkItem}
     */
    WorkItem: WorkItem,
    /**
     * The WorkItemResp model constructor.
     * @property {module:model/WorkItemResp}
     */
    WorkItemResp: WorkItemResp,
    /**
     * The ActivitiesApi service constructor.
     * @property {module:api/ActivitiesApi}
     */
    ActivitiesApi: ActivitiesApi,
    /**
     * The AppPackagesApi service constructor.
     * @property {module:api/AppPackagesApi}
     */
    AppPackagesApi: AppPackagesApi,
    /**
     * The BucketsApi service constructor.
     * @property {module:api/BucketsApi}
     */
    BucketsApi: BucketsApi,
    /**
     * The DerivativesApi service constructor.
     * @property {module:api/DerivativesApi}
     */
    DerivativesApi: DerivativesApi,
    /**
     * The EnginesApi service constructor.
     * @property {module:api/EnginesApi}
     */
    EnginesApi: EnginesApi,
    /**
     * The FoldersApi service constructor.
     * @property {module:api/FoldersApi}
     */
    FoldersApi: FoldersApi,
    /**
     * The HubsApi service constructor.
     * @property {module:api/HubsApi}
     */
    HubsApi: HubsApi,
    /**
     * The ItemsApi service constructor.
     * @property {module:api/ItemsApi}
     */
    ItemsApi: ItemsApi,
    /**
     * The ObjectsApi service constructor.
     * @property {module:api/ObjectsApi}
     */
    ObjectsApi: ObjectsApi,
    /**
     * The PrintApi service constructor.
     * @property {module:api/PrintApi}
     */
    PrintApi: PrintApi,
    /**
     * The ProjectsApi service constructor.
     * @property {module:api/ProjectsApi}
     */
    ProjectsApi: ProjectsApi,
    /**
     * The VersionsApi service constructor.
     * @property {module:api/VersionsApi}
     */
    VersionsApi: VersionsApi,
    /**
     * The WorkItemsApi service constructor.
     * @property {module:api/WorkItemsApi}
     */
    WorkItemsApi: WorkItemsApi,
    /**
     * The AuthClient service constructor for 2-legged flow.
     * @property {module:auth/OAuth2TwoLegged}
     */
    AuthClientTwoLegged: authClientTwoLegged,
    /**
     * The AuthClient service constructor for 3-legged flow.
     * @property {module:auth/OAuth2ThreeLegged}
     */
    AuthClientThreeLegged: authClientThreeLegged,
    /**
     * Optionally enable debugging
     * @param isDebug
     */
    setDebug: function(isDebug){
      ApiClient.instance.isDebugMode = isDebug;
    }

  };

  return exports;
}());
