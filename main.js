(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-elegant\" (click)=\"test('assets/users.csv')\">Test</button>\n\n<ng-container *ngIf=\"logged && !loading\">\n\n  <ng-container *ngIf=\"!chosenGroup\">\n    <h1>Choose group</h1>\n    <app-group-list (groupSelected)=\"chooseGroup($event)\"></app-group-list>\n\n    <!-- <button (click)=\"chooseGroup('11111')\" class=\"btn btn-elegant\">Mock group</button> -->\n  </ng-container>\n\n\n\n  <ng-container *ngIf=\"chosenGroup\">\n    <h1>Group: {{ chosenGroup.name }}</h1>\n    <button (click)=\"back()\" class=\"btn btn-elegant\">Back to group list</button>\n\n    <app-list [selectedGroup]=\"chosenGroup\"></app-list>\n  </ng-container>\n\n</ng-container>\n\n\n<div class=\"loader-container\" *ngIf=\"loading\">\n    <div class=\"loader\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_snow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/snow.service */ "./src/app/shared/snow.service.ts");
/* harmony import */ var _app_shared_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _app_shared_group_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/group.model */ "./src/app/shared/group.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var AppComponent = /** @class */ (function () {
    function AppComponent(notificationService, snowService) {
        this.notificationService = notificationService;
        this.snowService = snowService;
        this.PASS = ")@!#";
        this.chosenGroup = undefined;
        this.logged = false;
        this.loading = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.notificationService.requestPermission();
        var p = localStorage.getItem("p");
        if (p !== this.PASS) {
            this.login();
        }
        else {
            this.logged = true;
            this.getUsersByGroup();
        }
    };
    AppComponent.prototype.test = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log();
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.chooseGroup = function (group) {
        this.chosenGroup = group;
    };
    AppComponent.prototype.back = function () {
        this.chosenGroup = undefined;
    };
    AppComponent.prototype.login = function () {
        var pass = prompt("pass", "");
        if (pass == this.PASS) {
            this.logged = true;
            localStorage.setItem('p', pass);
        }
    };
    AppComponent.prototype.getUsersByGroup = function () {
        var _this = this;
        this.snowService.getUsersByGroups(this.getQueryFromUserGroup())
            .subscribe(function (resp) {
            _this.snowService.users = resp;
            _this.usersLoaded();
        }, function (error) { return _this.usersLoaded(); });
    };
    AppComponent.prototype.getQueryFromUserGroup = function () {
        var query = '';
        Object(_app_shared_group_model__WEBPACK_IMPORTED_MODULE_3__["getGroups"])().forEach(function (group) {
            query += group.id + ",";
        });
        return query;
    };
    AppComponent.prototype.usersLoaded = function () {
        this.loading = false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_shared_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"],
            _app_shared_snow_service__WEBPACK_IMPORTED_MODULE_1__["SnowService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _group_list_group_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-list/group-list.component */ "./src/app/group-list/group-list.component.ts");
/* harmony import */ var _list_incident_list_incident_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/incident-list/incident-list.component */ "./src/app/list/incident-list/incident-list.component.ts");
/* harmony import */ var _list_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/problem-list/problem-list.component */ "./src/app/list/problem-list/problem-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _group_list_group_list_component__WEBPACK_IMPORTED_MODULE_6__["GroupListComponent"],
                _list_incident_list_incident_list_component__WEBPACK_IMPORTED_MODULE_7__["IncidentListComponent"],
                _list_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_8__["ProblemListComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/group-list/group-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/group-list/group-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n    <div class=\"col-md-3\" *ngFor=\"let group of groups\">\n\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <p>\n                    {{ group.name }}\n                </p>\n                <button class=\"btn btn-elegant\" (click)=\"groupSelected.next(group)\">enter</button>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/group-list/group-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/group-list/group-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/group-list/group-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/group-list/group-list.component.ts ***!
  \****************************************************/
/*! exports provided: GroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupListComponent", function() { return GroupListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_group_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/group.model */ "./src/app/shared/group.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupListComponent = /** @class */ (function () {
    function GroupListComponent() {
        this.groupSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.groups = Object(_app_shared_group_model__WEBPACK_IMPORTED_MODULE_1__["getGroups"])();
    }
    GroupListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GroupListComponent.prototype, "groupSelected", void 0);
    GroupListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-list',
            template: __webpack_require__(/*! ./group-list.component.html */ "./src/app/group-list/group-list.component.html"),
            styles: [__webpack_require__(/*! ./group-list.component.scss */ "./src/app/group-list/group-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GroupListComponent);
    return GroupListComponent;
}());



/***/ }),

/***/ "./src/app/list/incident-list/incident-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/list/incident-list/incident-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"data\">\n    <app-grid\n    [selectedGroup]=\"selectedGroup\"\n    [data]=\"data\"\n    [columns]=\"columns\"\n    [queryField]=\"'dv_short_description'\"\n    [title]=\"title\"\n    >\n    </app-grid>\n</ng-container>\n\n<div class=\"\" *ngIf=\"loading\">\n    <div class=\"loader\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/list/incident-list/incident-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/list/incident-list/incident-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list/incident-list/incident-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/list/incident-list/incident-list.component.ts ***!
  \***************************************************************/
/*! exports provided: IncidentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentListComponent", function() { return IncidentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_snow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/snow.service */ "./src/app/shared/snow.service.ts");
/* harmony import */ var _app_shared_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _app_shared_group_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/group.model */ "./src/app/shared/group.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IncidentListComponent = /** @class */ (function () {
    function IncidentListComponent(snowService, notificationService) {
        this.snowService = snowService;
        this.notificationService = notificationService;
        this.url = '';
        this.title = '';
        this.loading = true;
    }
    IncidentListComponent.prototype.ngOnInit = function () {
        this.columns = [
            {
                name: 'Issue nr',
                prop: 'dv_number',
                template: 'id'
            },
            {
                name: 'Priority',
                prop: 'dv_priority'
            },
            {
                prop: 'dv_incident_state',
                name: 'Status'
            },
            {
                prop: 'sys_created_on',
                name: 'Opened at'
            },
            {
                prop: 'dv_sys_updated_on',
                name: 'Updated at'
            },
            {
                prop: 'dv_short_description',
                name: 'Short description'
            },
            {
                prop: 'user.email',
                name: 'Assigned to',
                template: 'user'
            },
            {
                prop: 'counter',
                name: 'counter',
                template: 'timer'
            },
        ];
        this.getIncidents();
    };
    IncidentListComponent.prototype.getIncidents = function () {
        var _this = this;
        this.snowService.getIncidents(this.selectedGroup.id, this.url)
            .subscribe(function (resp) {
            _this.data = resp;
            _this.loading = false;
        }, function (error) { return _this.loading = false; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _app_shared_group_model__WEBPACK_IMPORTED_MODULE_3__["GroupModel"])
    ], IncidentListComponent.prototype, "selectedGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], IncidentListComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], IncidentListComponent.prototype, "title", void 0);
    IncidentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incident-list',
            template: __webpack_require__(/*! ./incident-list.component.html */ "./src/app/list/incident-list/incident-list.component.html"),
            styles: [__webpack_require__(/*! ./incident-list.component.scss */ "./src/app/list/incident-list/incident-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_shared_snow_service__WEBPACK_IMPORTED_MODULE_1__["SnowService"],
            _app_shared_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], IncidentListComponent);
    return IncidentListComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <ng-container *ngFor=\"let incident of incidents\">\n        <app-incident-list [selectedGroup]=\"selectedGroup\" [url]=\"incident.url\" [title]=\"incident.title\"></app-incident-list>\n    </ng-container>\n\n    <ng-container *ngFor=\"let problem of problems\">\n        <app-problem-list [selectedGroup]=\"selectedGroup\" [url]=\"problem.url\" [title]=\"problem.title\">\n        </app-problem-list>\n    </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/list/list.component.scss":
/*!******************************************!*\
  !*** ./src/app/list/list.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-container {\n  padding-left: 20px;\n  padding-right: 20px; }\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: TaskListModel, ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListModel", function() { return TaskListModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_group_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/group.model */ "./src/app/shared/group.model.ts");
/* harmony import */ var _app_list_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/list/queries */ "./src/app/list/queries.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskListModel = /** @class */ (function () {
    function TaskListModel() {
    }
    return TaskListModel;
}());

var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.incidents = [];
        this.problems = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.incidents = [
            {
                url: _app_list_queries__WEBPACK_IMPORTED_MODULE_2__["IncidentQueries"].incident_list_unassigned(this.selectedGroup.id),
                title: 'Unassigned incidents'
            },
            {
                url: _app_list_queries__WEBPACK_IMPORTED_MODULE_2__["IncidentQueries"].incident_list(this.selectedGroup.id),
                title: 'All incidents'
            }
        ];
        this.problems = [
            {
                url: '',
                title: 'Problem list'
            }
        ];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _app_shared_group_model__WEBPACK_IMPORTED_MODULE_1__["GroupModel"])
    ], ListComponent.prototype, "selectedGroup", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/list/priority.ts":
/*!**********************************!*\
  !*** ./src/app/list/priority.ts ***!
  \**********************************/
/*! exports provided: Priority, ActionTime, PRIORITIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Priority", function() { return Priority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTime", function() { return ActionTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIORITIES", function() { return PRIORITIES; });
var Priority = /** @class */ (function () {
    function Priority() {
    }
    return Priority;
}());

var ActionTime = /** @class */ (function () {
    function ActionTime() {
    }
    return ActionTime;
}());

var PRIORITIES = [
    {
        label: 'Standard',
        officeTime: {
            reactionTime: 1 * 60 * 60,
            resolutionTime: 24 * 60 * 60
        },
        onCall: {
            reactionTime: 24 * 60 * 60,
            resolutionTime: 24 * 60 * 60
        }
    },
    {
        label: 'Medium',
        officeTime: {
            reactionTime: 1 * 45 * 60,
            resolutionTime: 4 * 60 * 60
        },
        onCall: {
            reactionTime: 24 * 60 * 60,
            resolutionTime: 1.5 * 60 * 60
        }
    },
    {
        label: 'High',
        officeTime: {
            reactionTime: 1 * 30 * 60,
            resolutionTime: 1.5 * 60 * 60
        },
        onCall: {
            reactionTime: 1 * 60 * 60,
            resolutionTime: 1.5 * 60 * 60
        }
    },
    {
        label: 'Critical',
        officeTime: {
            reactionTime: 1 * 15 * 60,
            resolutionTime: 1 * 60 * 60
        },
        onCall: {
            reactionTime: 1 * 60 * 60,
            resolutionTime: 1 * 60 * 60
        }
    }
];


/***/ }),

/***/ "./src/app/list/problem-list/problem-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/list/problem-list/problem-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"data\">\n  <app-grid\n  [selectedGroup]=\"selectedGroup\"\n  [data]=\"data\"\n  [columns]=\"columns\"\n  [queryField]=\"'dv_short_description'\"\n  [title]=\"title\"\n  >\n  </app-grid>\n</ng-container>\n\n<div class=\"\" *ngIf=\"loading\">\n    <div class=\"loader\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/list/problem-list/problem-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/list/problem-list/problem-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list/problem-list/problem-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/list/problem-list/problem-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ProblemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemListComponent", function() { return ProblemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_snow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/snow.service */ "./src/app/shared/snow.service.ts");
/* harmony import */ var _app_shared_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_shared_group_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/group.model */ "./src/app/shared/group.model.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(snowService, notificationService) {
        this.snowService = snowService;
        this.notificationService = notificationService;
        this.loading = true;
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columns = [
            {
                name: 'Issue nr',
                prop: 'dv_number',
                template: 'id'
            },
            {
                name: 'Priority',
                prop: 'dv_priority'
            },
            {
                prop: 'dv_problem_state',
                name: 'Status'
            },
            {
                prop: 'dv_opened_at',
                name: 'Opened at'
            },
            {
                prop: 'dv_sys_updated_on',
                name: 'Updated at'
            },
            {
                prop: 'dv_short_description',
                name: 'Short description'
            },
            {
                prop: 'user.email',
                name: 'Assigned to',
                template: 'user'
            },
            {
                prop: 'category',
                name: 'Category'
            },
        ];
        this.getProblems();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].refreshListTime)
            .subscribe(function (interval) {
            _this.refreshList();
        });
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.snowService.getProblems(this.selectedGroup.id)
            .subscribe(function (resp) {
            _this.data = resp;
            _this.loading = false;
        }, function (error) { return _this.loading = false; });
    };
    ProblemListComponent.prototype.refreshList = function () {
        var _this = this;
        this.snowService.getProblems(this.selectedGroup.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            var originalLength = _this.data.length;
            var newProblems = [];
            var remainProblems = [];
            resp.forEach(function (element) {
                if (!_this.data.find(function (d) { return d.sys_id.includes(element.sys_id); })) {
                    newProblems.push(element);
                }
            });
            _this.data.forEach(function (data) {
                if (resp.find(function (r) { return r.sys_id.includes(data.sys_id); })) {
                    remainProblems.push(data);
                }
            });
            return newProblems.concat(remainProblems);
        }))
            .subscribe(function (resp) {
            if (resp.length != resp.length) {
                _this.notificationService.notify('New Item', 'There is at least one new problem on the list');
            }
            _this.data = resp;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _app_shared_group_model__WEBPACK_IMPORTED_MODULE_5__["GroupModel"])
    ], ProblemListComponent.prototype, "selectedGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProblemListComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProblemListComponent.prototype, "url", void 0);
    ProblemListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem-list',
            template: __webpack_require__(/*! ./problem-list.component.html */ "./src/app/list/problem-list/problem-list.component.html"),
            styles: [__webpack_require__(/*! ./problem-list.component.scss */ "./src/app/list/problem-list/problem-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_shared_snow_service__WEBPACK_IMPORTED_MODULE_1__["SnowService"],
            _app_shared_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], ProblemListComponent);
    return ProblemListComponent;
}());



/***/ }),

/***/ "./src/app/list/problem-transformation.ts":
/*!************************************************!*\
  !*** ./src/app/list/problem-transformation.ts ***!
  \************************************************/
/*! exports provided: mapTimes, applyTime, mapProblemItemUser, findUser, mapIncident */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapTimes", function() { return mapTimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyTime", function() { return applyTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapProblemItemUser", function() { return mapProblemItemUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUser", function() { return findUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIncident", function() { return mapIncident; });
/* harmony import */ var _app_list_priority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/list/priority */ "./src/app/list/priority.ts");

var status = {
    inProgress: 'In Progress'
};
var OfficeHourEnd = 8;
var OfficeHourStart = 16;
function mapTimes(model) {
    var selectedPriority;
    _app_list_priority__WEBPACK_IMPORTED_MODULE_0__["PRIORITIES"].forEach(function (priority) {
        if (model.dv_priority.includes(priority.label))
            selectedPriority = priority;
    });
    if (selectedPriority)
        model = applyTime(model, selectedPriority);
    return model;
}
function applyTime(model, priority) {
    var modelDate = new Date(model.sys_created_on);
    var modelTime = modelDate.getTime();
    var action = getActionTimeBasedOnHour(modelDate.getHours(), priority);
    model.counter = getModelCounterTime(model, modelTime, action);
    return model;
}
function getActionTimeBasedOnHour(modelHour, priority) {
    if (modelHour >= OfficeHourEnd || modelHour < OfficeHourStart) {
        return priority.onCall;
    }
    else {
        return priority.officeTime;
    }
}
function getModelCounterTime(model, modelTime, actionTime) {
    if (model.assigned_to !== '') {
        if (model.dv_incident_state === status.inProgress) {
            return getCounterTime(modelTime, actionTime.reactionTime + actionTime.resolutionTime);
        }
        else {
            return undefined;
        }
    }
    else {
        return getCounterTime(modelTime, actionTime.reactionTime);
    }
}
function getCounterTime(modelTime, priorityTime) {
    return (modelTime + priorityTime) - new Date().getTime();
}
function mapProblemItemUser(model, users) {
    model.user = findUser(model.assigned_to, users);
    return model;
}
function findUser(id, users) {
    var user = users.find(function (x) {
        return x.sys_id.includes(id);
    });
    return user;
}
function mapIncident(incident) {
    incident.dv_problem_state = incident.dv_u_waiting_reason ? "Waiting for " + incident.dv_u_waiting_reason : null;
    return incident;
}


/***/ }),

/***/ "./src/app/list/queries.ts":
/*!*********************************!*\
  !*** ./src/app/list/queries.ts ***!
  \*********************************/
/*! exports provided: IncidentQueries, UserQueries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentQueries", function() { return IncidentQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserQueries", function() { return UserQueries; });
var json = '&JSONv2';
var IncidentQueries = {
    incident_list_unassigned: function (groupId) { return "incident_list.do?sysparm_query=assignment_group=" + groupId + "^active=true^incident_state=1^ORincident_state=4^ORincident_state=5^assigned_toISEMPTY" + json; },
    incident_list: function (groupId) { return "incident_list.do?sysparm_query=assignment_group=" + groupId + json; }
};
var UserQueries = {
    users: function (query) { return "sys_user_list.do?sysparm_query=sys_idIN" + query + "^active=true" + json; }
};


/***/ }),

/***/ "./src/app/shared/counter/counter.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/counter/counter.component.ts ***!
  \*****************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SEC = 1000;
var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        this._percent = 1;
    }
    Object.defineProperty(CounterComponent.prototype, "time", {
        set: function (v) {
            if (v > 0) {
                this._time = v;
            }
            else {
                this._time = 0;
            }
            this._startTime = this._time;
            this.count();
        },
        enumerable: true,
        configurable: true
    });
    CounterComponent.prototype.ngOnInit = function () {
    };
    CounterComponent.prototype.count = function () {
        var _this = this;
        this._time--;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, SEC)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function (x) { return _this._time > 0; }))
            .subscribe(function (t) {
            _this._time--;
            _this._percent++;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], CounterComponent.prototype, "time", null);
    CounterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-counter',
            template: "\n    <span> {{ _time | timePipe:'hh:mm:ss' }}  </span>\n    <div class=\"progress\" *ngIf=\"_startTime\">\n      <div class=\"progress-bar\" role=\"progressbar\" [style.width]=\"_percent * (100 / _startTime) + '%'\" attr.aria-valuenow=\"{{_percent}}\" aria-valuemin=\"0\" attr.aria-valuemax=\"{{_startTime}}\"></div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/shared/counter/time.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/counter/time.pipe.ts ***!
  \*********************************************/
/*! exports provided: TimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePipe", function() { return TimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimePipe = /** @class */ (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (value, format) {
        if (value < 0)
            return '00:00:00';
        var date = new Date(null);
        date.setSeconds(value); // specify value for SECONDS here
        return date.toISOString().substr(11, 8);
    };
    TimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'timePipe'
        }),
        __metadata("design:paramtypes", [])
    ], TimePipe);
    return TimePipe;
}());



/***/ }),

/***/ "./src/app/shared/csv-parser.ts":
/*!**************************************!*\
  !*** ./src/app/shared/csv-parser.ts ***!
  \**************************************/
/*! exports provided: ReadCSV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadCSV", function() { return ReadCSV; });
function ReadCSV(data, textToReplace, mapFunc, splitBy) {
    if (textToReplace === void 0) { textToReplace = ''; }
    if (mapFunc === void 0) { mapFunc = null; }
    if (splitBy === void 0) { splitBy = ','; }
    data = data.replace(/[\"\']/g, "").split(/\r\n|\n/)
        .filter(function (row) { return row !== ''; });
    var headers = data
        .shift()
        .split(textToReplace)
        .join('')
        .split(splitBy);
    var rows = data
        .map(function (row) {
        var finalObject = {};
        var element = row.split(splitBy);
        headers.forEach(function (header, index) {
            finalObject[header] = element[index];
        });
        return finalObject;
    });
    if (!mapFunc)
        return rows;
    return rows.map(mapFunc);
}
// export function ReadCSV(allText, headersforced = '') {
//   var headers;
//   var allTextLines = allText.replace(/[\"\']/g, "").split(/\r\n|\n/);
//   var startrow = 0;
//   if (headersforced.constructor === Array) {
//     headers = headersforced;
//     startrow = 0;
//   }
//   else {
//     headers = allTextLines[0].split(splitBy);
//     startrow = 1;
//   }
//   var lines = [];
//   for (var i = startrow; i < allTextLines.length; i++) {
//     var data = allTextLines[i].replace(", ", "&#44;").split(',', headers.length);
//     if (data.length == headers.length) {
//       var tarr = {};
//       for (var j = 0; j < headers.length; j++) {
//         tarr[headers[j]] = data[j];
//       }
//       lines.push(tarr);
//     }
//   }
//   return lines;
// }


/***/ }),

/***/ "./src/app/shared/grid/grid.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/grid/grid.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n    <h3>{{ title }}</h3>\n\n    <input type='text' style='padding:8px;margin:15px auto;width:30%;' placeholder='Type to filter the name column...' (keyup)='updateFilter($event)' />\n\n    <!-- [selectionType]=\"'single'\" -->\n    <!-- [selected]=\"grid.selected\" -->\n    <!-- [rowHeight]=\"'auto'\" -->\n    <!-- [limit]=\"10\" -->\n    <!-- [scrollbarH]=\"true\"\n    [scrollbarV]=\"true\" -->\n    <ngx-datatable class=\"material\" [columns]=\"grid.columns\" [rows]=\"grid.rows\" [columns]=\"columns\" [sortType]=\"'multi'\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\">\n\n        <ng-template #userTemplate let-row=\"row\" let-value=\"value\">\n            <ng-container *ngIf=\"row.user\">\n                <p class=\"user-name\">\n                    {{ row.user.first_name }} {{ row.user.last_name }}\n                </p>\n                <a *ngIf=\"row.user.email\" href=\"mailto:row.user.email\">\n                    <i class=\"fa fa-envelope fa-2x\"></i>\n                </a>\n                <a *ngIf=\"row.user.phone\" href=\"tel:row.user.phone\">\n                    <i class=\"fa fa-phone fa-2x\"></i>\n                </a>\n                <a *ngIf=\"row.user.email\" href=\"skype:row.user.email\">\n                    <i class=\"fa fa-skype fa-2x\"></i>\n                </a>\n            </ng-container>\n        </ng-template>\n\n        <ng-template #id let-row=\"row\" let-value=\"value\">\n            <a target=\"_blank\" href=\"{{snowUrl}}{{url}}sys_id={{value}}\">{{ value }}</a>\n        </ng-template>\n\n        <ng-template #timer let-row=\"row\" let-value=\"value\">\n          <!-- {{row | json}} -->\n          <ng-container *ngIf=\"row.dv_incident_state === 'In Progress'  || row.assigned_to == ''\">\n            <app-counter *ngIf=\"value\" [time]=\"value\"></app-counter>\n          </ng-container>\n        </ng-template>\n\n    </ngx-datatable>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/grid/grid.component.scss":
/*!*************************************************!*\
  !*** ./src/app/shared/grid/grid.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin-top: 20px; }\n\n.user-name {\n  margin-bottom: 2px; }\n"

/***/ }),

/***/ "./src/app/shared/grid/grid.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/grid/grid.component.ts ***!
  \***********************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_shared_group_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/group.model */ "./src/app/shared/group.model.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GridComponent = /** @class */ (function () {
    function GridComponent(cd) {
        this.cd = cd;
        this.snowUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].snowMainUrl;
        this.grid = {
            rows: [],
            columns: [],
            temp: [],
            selected: [],
            limit: 100
        };
    }
    Object.defineProperty(GridComponent.prototype, "data", {
        set: function (v) {
            this.grid.rows = v;
            this.grid.temp = v;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "columns", {
        set: function (columns) {
            var _this = this;
            columns.forEach(function (column) {
                if (column.template) {
                    column.cellTemplate = _this.getTemplate(column.template);
                }
            });
            this.grid.columns = columns;
        },
        enumerable: true,
        configurable: true
    });
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent.prototype.updateFilter = function (event) {
        var _this = this;
        if (!this.queryField)
            return;
        var val = event.target.value.toLowerCase();
        var temp = this.grid.temp.filter(function (d) {
            return d[_this.queryField].toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.grid.rows = temp;
        this.table.offset = 0;
    };
    GridComponent.prototype.getRowHeight = function (row) {
        if (!row)
            return 50;
        if (row.height === undefined)
            return 50;
        return row.height;
    };
    GridComponent.prototype.getTemplate = function (templateString) {
        if (templateString === 'userTemplate')
            return this.userTemplate;
        if (templateString === 'id')
            return this.idTemplate;
        if (templateString === 'timer')
            return this.timerTemplate;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], GridComponent.prototype, "table", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], GridComponent.prototype, "userTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('id'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], GridComponent.prototype, "idTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('timer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], GridComponent.prototype, "timerTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _app_shared_group_model__WEBPACK_IMPORTED_MODULE_2__["GroupModel"])
    ], GridComponent.prototype, "selectedGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GridComponent.prototype, "queryField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GridComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], GridComponent.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], GridComponent.prototype, "columns", null);
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/shared/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/shared/grid/grid.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/shared/group.model.ts":
/*!***************************************!*\
  !*** ./src/app/shared/group.model.ts ***!
  \***************************************/
/*! exports provided: GroupModel, getGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupModel", function() { return GroupModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroups", function() { return getGroups; });
var GroupModel = /** @class */ (function () {
    function GroupModel() {
    }
    return GroupModel;
}());

function getGroups() {
    return [
        { name: 'Enterprise Backup', id: 'a28be0053760b24cf534f25b34990e71' },
        {
            name: 'WINDOWS',
            id: '7c8f9f630a0a3c2200b0128f428c9f77,dbde230d0a0a8c120171dd1aa14b1b4c'
        },
        {
            name: 'MF',
            id: '90ea970ba0eb41046011b52dcd85e091,000e170fa0eb41046011b52dcd85e0c0,e059d307a0eb41046011b52dcd85e0bd,2c19561da90f514460119afd710b2041,f3daad26a0638dc06011b52dcd85e09f,53b515e6a0af4dc06011b52dcd85e02f,227fa6870a0a3c2c0184d039d848ee83'
        },
    ];
}


/***/ }),

/***/ "./src/app/shared/notification.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/notification.service.ts ***!
  \************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationService = /** @class */ (function () {
    function NotificationService() {
    }
    NotificationService.prototype.requestPermission = function () {
        Notification.requestPermission().then(function (result) {
            console.log(result);
        });
    };
    NotificationService.prototype.notify = function (text, body) {
        var _this = this;
        if (!("Notification" in window)) {
            alert("This browser does not support system notifications");
        }
        else if (Notification['permission'] === "granted") {
            this.createNotification(text, body);
        }
        else if (Notification['permission'] !== 'denied') {
            Notification.requestPermission(function (permission) {
                if (permission === "granted") {
                    _this.createNotification(text, body);
                }
            });
        }
    };
    NotificationService.prototype.createNotification = function (text, body) {
        var options = {
            body: body,
            icon: ''
        };
        var notification = new Notification(text, options);
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _snow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snow.service */ "./src/app/shared/snow.service.ts");
/* harmony import */ var _app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/shared/grid/grid.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_shared_counter_counter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/counter/counter.component */ "./src/app/shared/counter/counter.component.ts");
/* harmony import */ var _app_shared_counter_time_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/counter/time.pipe */ "./src/app/shared/counter/time.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var components = [
    _app_shared_counter_counter_component__WEBPACK_IMPORTED_MODULE_7__["CounterComponent"],
    _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"],
    _app_shared_counter_time_pipe__WEBPACK_IMPORTED_MODULE_8__["TimePipe"]
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ],
            declarations: components.slice(),
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
                _app_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"],
                _snow_service__WEBPACK_IMPORTED_MODULE_3__["SnowService"]
            ],
            exports: components.slice()
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/snow.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/snow.service.ts ***!
  \****************************************/
/*! exports provided: SnowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnowService", function() { return SnowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_shared_csv_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/csv-parser */ "./src/app/shared/csv-parser.ts");
/* harmony import */ var _app_list_problem_transformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/list/problem-transformation */ "./src/app/list/problem-transformation.ts");
/* harmony import */ var _app_list_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/list/queries */ "./src/app/list/queries.ts");
/* harmony import */ var _swimlane_ngx_datatable_release_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable/release/utils */ "./node_modules/@swimlane/ngx-datatable/release/utils/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release_utils__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SnowService = /** @class */ (function () {
    function SnowService(http) {
        this.http = http;
        this.users = [];
    }
    SnowService.prototype.getProblems = function (id) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            return this.getProblemList(id);
        }
        else {
            return this.getMockData();
        }
    };
    SnowService.prototype.getIncidents = function (id, url) {
        if (url === void 0) { url = ''; }
        if (Object(_swimlane_ngx_datatable_release_utils__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(url) || url === '')
            url = _app_list_queries__WEBPACK_IMPORTED_MODULE_6__["IncidentQueries"].incident_list(id);
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            return this.getIncidentList(id, url);
        }
        else {
            return this.getMockData();
        }
    };
    SnowService.prototype.getUsers = function (groupIds) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].snowMainUrl + _app_list_queries__WEBPACK_IMPORTED_MODULE_6__["UserQueries"].users(groupIds))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (list) { return list.records; }));
    };
    SnowService.prototype.getUsersByGroups = function (query) {
        if (query === void 0) { query = ''; }
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            var queryParams = 'user.first_name,user.last_name,user.email,user.sys_id,user.phone';
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].snowMainUrl + "sys_user_grmember_list.do?sysparm_fields=" + queryParams + "&sysparm_query=groupIN" + query + "&CSV", { responseType: 'text' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.mapUserResponse));
        }
        else {
            return this.http.get('assets/users.csv', { responseType: 'text' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.mapUserResponse));
        }
    };
    SnowService.prototype.mapUserResponse = function (resp) {
        var users = Object(_app_shared_csv_parser__WEBPACK_IMPORTED_MODULE_4__["ReadCSV"])(resp, 'user.');
        var uniqueId = Array.from(new Set(users.map(function (user) { return user.sys_id; })));
        var uniqueUsers = [];
        users.forEach(function (user) {
            if (!uniqueUsers.find(function (uniqueUser) { return uniqueUser.sys_id === user.sys_id; }))
                uniqueUsers.push(user);
        });
        return uniqueUsers;
    };
    SnowService.prototype.getMockData = function () {
        var _this = this;
        return this.http.get("assets/response.model.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.records; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (problems) {
            return problems
                .map(function (problem) { return Object(_app_list_problem_transformation__WEBPACK_IMPORTED_MODULE_5__["mapProblemItemUser"])(problem, _this.users); })
                .map(function (problem) { return Object(_app_list_problem_transformation__WEBPACK_IMPORTED_MODULE_5__["mapTimes"])(problem); });
        }));
    };
    SnowService.prototype.getIncidentList = function (id, url) {
        var _this = this;
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].snowMainUrl + url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.records; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (incidents) {
            return incidents
                .map(function (problem) { return Object(_app_list_problem_transformation__WEBPACK_IMPORTED_MODULE_5__["mapProblemItemUser"])(problem, _this.users); })
                .map(function (problem) { return Object(_app_list_problem_transformation__WEBPACK_IMPORTED_MODULE_5__["mapIncident"])(problem); })
                .map(function (problem) { return Object(_app_list_problem_transformation__WEBPACK_IMPORTED_MODULE_5__["mapTimes"])(problem); });
        }));
    };
    SnowService.prototype.getProblemList = function (id) {
        var _this = this;
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].snowMainUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].problemList + "?sysparm_query=assignment_groupIN" + id + "^problem_stateIN1,2,5^ORDERBYsys_updated_on^ORDERBYassigned_to&sysparm_first_row=1&JSONv2&sysparm_action=getRecords&displayvalue=all")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.records; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (problems) {
            return problems
                .map(function (problem) { return Object(_app_list_problem_transformation__WEBPACK_IMPORTED_MODULE_5__["mapProblemItemUser"])(problem, _this.users); });
        }));
    };
    SnowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SnowService);
    return SnowService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    snowMainUrl: 'https://swissre.service-now.com/',
    problemList: 'problem_list.do',
    incidentList: 'incident_list.do',
    deploymentTask: 'u_deployment_task_list.do',
    refreshListTime: 2 * 60 * 1000
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    snowMainUrl: 'https://swissre.service-now.com/',
    problemList: 'problem_list.do',
    incidentList: 'incident_list.do',
    deploymentTask: 'u_deployment_task_list.do',
    refreshListTime: 2 * 60 * 1000
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ren/workspace/web/guardian/guardian/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map