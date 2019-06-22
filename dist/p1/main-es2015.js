(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style='background-image:url(https://keytown.tv/wp-content/uploads/2018/01/Escherish.jpg)'>\r\n<app-navbar></app-navbar><br>\r\n\r\n\r\n\r\n<app-slide></app-slide>\r\n<app-signup></app-signup>\r\n<app-login></app-login>\r\n\r\n<app-pro></app-pro>\r\n\r\n<div class=\"row\">\r\n    <app-product ></app-product>\r\n \r\n\r\n\r\n    \r\n    </div>\r\n\r\n    <app-find></app-find>\r\n    <br>\r\n    <app-findall></app-findall>\r\n\r\n -->\r\n <app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/find/find.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/find/find.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class='text-center'> <h1 style=\"background: red\">find your products</h1>\n\n  <br><input [(ngModel)]=\"productid\"input type='text'placeholder=\"Enter productname\"class=\"form-control-bm\">\n  <br><button (click)=\"find()\" class='btn btn-danger'>find</button>\n  </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/findall/findall.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/findall/findall.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class='text-center'> <h1 style=\"background:blue\">find all products</h1>\n\n  <br><button (click)=\"findall()\" class='btn btn-danger'>find</button>\n  </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgetpass/forgetpass.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgetpass/forgetpass.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  forgetpass works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot/forgot.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot/forgot.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='text-center'> <h1 style=\"background: darkblue\">FORGET PASSWORD</h1>\n  <br><input [(ngModel)]=\"email\" input type='text' placeholder=\"Enter emailid\"class=\"form-control-bm\">\n<br><button (click)=\"forgot()\" class='btn btn-danger'>GET</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slide></app-slide>\n<div class='row' style='padding:100px'>\n<app-product *ngFor='let product of products' [product]='product'class='col-md-3'></app-product>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class='text-center' > \n  <h1 style=\"background: darkblue\">WELCOME TO LOGIN</h1>\n  \n\n  <br><input [(ngModel)]=\"email\"input type='email'placeholder=\"Enter email\"class=\"form-control-bm\">\n  <br><input [(ngModel)]=\"password\" input type='text'placeholder=\"Enter password\"class=\"form-control-bm\">\n  \n  <br><br><button (click)=\"login()\" class='btn btn-danger'>login</button>\n  <br><br><button class=\"btn btn-primary btn-success\" routerLink='/forgot'type='submit'>forgetpassword</button>\n  \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-primary\">\n    <a class=\"navbar-brand \" >BIG BOYZ TOYS</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink='/'>Home </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink='/pro'>Addproducts</a>\n          </li>\n          <li class=\"nav-item dropdown\" *ngIf='logged'>\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              ACCOUNTDELETION\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <a class=\"dropdown-item\" routerLink='/remove'>AREYOUSURE</a>\n              <a class=\"dropdown-item\" routerLink='/'>NOTSURE</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n          </li>\n        </ul>\n    \n     <div *ngIf='!logged'>\n       <button class=\"btn btn-primary btn-danger\" routerLink='/login'typr='submit'>LOGIN</button>\n       <button class=\"btn btn-primary btn-success\" routerLink='/signup'typr='submit'>SIGNUP</button>\n       \n    </div>\n    <div *ngIf='logged'>\n      <button (click)='logout()' class=\"btn btn-primary btn-success\" type='submit'>LOGOUT</button>\n  </div>\n  </div>\n    </nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pro/pro.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pro/pro.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class='text-center'> <h1 style=\"background: red\">ADD YOUR PRODUCTS</h1>\n\n  <br><input [(ngModel)]=\"productname\"input type='text'placeholder=\"Enter productname\"class=\"form-control-bm\">\n  <br><input [(ngModel)]=\"productrate\" input type='number'placeholder=\"Enter productrate\"class=\"form-control-bm\">\n  <br><input [(ngModel)]=\"productsno\" input type='text'placeholder=\"Enter productsno\"class=\"form-control-bm\">\n  <br><input [(ngModel)]=\"productmod\" input type='text'placeholder=\"Enter productmod\"class=\"form-control-bm\">\n  <br><input [(ngModel)]=\"productimg\" input type='text' placeholder='Enter product image' class='form-control-bm'>\n  <br><input [(ngModel)]=\"productseller\" input type='text' placeholder='Enter product seller' class='form-control-bm'>\n  <br><input [(ngModel)]=\"productrating\" input type='number' min='1' max='5' placeholder='rating' class='form-control-bm'>\n\n  \n  <br><br><button (click)=\"pro()\" class='btn btn-danger'>AddProducts</button>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 18rem;\">\n    <img src= {{product.productimg}} class=\"card-img-top\" alt=\"...\"style=\"height:200px\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{product.productname}}</h5>\n      <p routerLink='/showdata'class=\"btn btn-primary\">{{product.productrate}}</p>\n      <br>\n      <strong class=\"text\">{{product.productmod}}</strong>\n      <br>\n      <strong class=\"text\">{{product.productseller}}</strong>\n      \n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/remove/remove.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/remove/remove.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='text-center'> <h1 style=\"background: darkblue\">DELETEACCOUNT</h1>\n  <br><input [(ngModel)]=\"email\"input type='text'placeholder=\"Enter email\"class=\"form-control-bm\">\n<br><br><button (click)=\"remove()\" class='btn btn-danger' routerLink='/'>Delete</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showdata/showdata.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showdata/showdata.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\" padding:20px \">\n  \n  <div class=\"row\">\n      <div class=\"col-md-6\">\n          \n          <img src=\"data:image/jpeg;base64,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\" alt=\"image not avilable\" style= \"width: 416px; height: 416px\" ><br>\n          <button  class=\"btn btn-outline-info col-md-5\" style=\"padding: 10px\" (click)=\"addToCart()\"  >Add to Cart</button>\n          <button class=\"btn btn-outline-success col-md-5\" style=\"padding: 10px\" >Buy now</button>\n      </div>\n      <div class=\"col-md-6\">\n\n          <table>\n              <tr>\n                  <td><h3>MacBook Pro </h3></td>\n              </tr>\n              <tr>\n                  <td><h3>Rs. 225000</h3></td>\n              </tr>\n              <tr>\n\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>No cost EMI ₹8,000/month. Standard EMI also availableView Plans</td></tr>\n\n              <tr>\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span> Bank Offer10% Instant Discount* with Axis Bank Credit and Debit CardsT&C</td></tr>\n              <tr>\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>Bank Offer10% off* with Axis Bank Buzz Credit CardT&C</td></tr>\n              <tr>\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>Free 16GB SD Card & Camera Bag with this DSLR</td></tr>\n              <tr><td class=\"row\"><span class=\"col-md-4\">Seller</span>\n                  <span class=\"col-md-4\"> RetailNet</span>\n              </td></tr>\n              <tr>\n                  <td class=\"row\">\n                      <span class=\"col-md-4\">Highlights</span>\n\n                      <td><span class=\"col-md-4\"></span><ul><li>Effective Pixels: 24.2 MP</li>\n                          <li><span class=\"col-md-4\">Sensor Type: CMOS</span></li>\n                          <li><span class=\"col-md-4\"></span>WiFi Available</li>\n                          <li><span class=\"col-md-4\"></span>1080p at 60p + Time-Lapse</li></ul>\n\n                  </td></tr>\n          </table>\n      </div>\n  </div>\n\n</div >\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class='text-center'> <h1 style=\"background: darkblue\">WELCOME TO SIGNUP</h1>\n<br><input [(ngModel)]=\"name\" input type='text' placeholder=\"Enter name\"class=\"form-control-bm\">\n<br><input [(ngModel)]=\"email\"input type='text'placeholder=\"Enter email\"class=\"form-control-bm\">\n<br><input [(ngModel)]=\"password\" input type='text'placeholder=\"Enter password\"class=\"form-control-bm\">\n\n\n<br><br><button (click)=\"signup()\" class='btn btn-danger'>signup</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/slide/slide.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/slide/slide.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"https://cdn.gearpatrol.com/wp-content/uploads/2019/03/Complete-BMW-Buying-Guide-gear-patrol-lead-full.jpg\" class=\"d-block w-100\" alt=\"...\"height='250px'>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80\" class=\"d-block w-100\" alt=\"...\"height='250px'>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"http://cdn.24.co.za/files/Cms/General/d/5969/6f6b948639b64a5f9c3499a0b448b260.jpg\" class=\"d-block w-100\" alt=\"...\"height='250px'>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>"

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _pro_pro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pro/pro.component */ "./src/app/pro/pro.component.ts");
/* harmony import */ var _find_find_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./find/find.component */ "./src/app/find/find.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/forgot/forgot.component.ts");
/* harmony import */ var _remove_remove_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./remove/remove.component */ "./src/app/remove/remove.component.ts");
/* harmony import */ var _showdata_showdata_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./showdata/showdata.component */ "./src/app/showdata/showdata.component.ts");












const routes = [
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
    },
    {
        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    },
    {
        path: 'pro', component: _pro_pro_component__WEBPACK_IMPORTED_MODULE_5__["ProComponent"]
    },
    {
        path: 'find', component: _find_find_component__WEBPACK_IMPORTED_MODULE_6__["FindComponent"]
    },
    {
        path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"]
    },
    {
        path: 'forgot', component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_9__["ForgotComponent"]
    }, {
        path: 'remove', component: _remove_remove_component__WEBPACK_IMPORTED_MODULE_10__["RemoveComponent"]
    },
    {
        path: 'showdata', component: _showdata_showdata_component__WEBPACK_IMPORTED_MODULE_11__["ShowdataComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



var apiurl = 'http://localhost:1400/findall';
let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'p1';
        this.newusers = [{ name: 'rajatjoshi', id: 1234 },
            { name: 'dubey', id: 76123 },
            { name: 'siddharth singhal', id: 1456 }, { name: 'rohit kumar', id: 1687 }];
        this.users = ['ABC', 'CDF', 'EFG', 'GHI'];
        this.products = [{
                name: 'one plus',
                price: 10000,
                image: 'https://cdn2.gsmarena.com/vv/pics/oneplus/oneplus-6-5.jpg',
                description: 'phone with good camera quality'
            }, {
                name: 'samsung',
                price: 15000,
                image: 'data:image/jpeg;base64,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',
                description: 'phone with great performance'
            }, {
                name: 'nokia',
                price: 15000,
                image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/nokia_x7_render_3.jpeg?LoIqTmoaKqRRWvmZs3PNPRSTx4zI8DVa',
                description: 'phone with good build quality'
            },
            {
                name: 'Audi',
                price: 1500000,
                image: 'data:image/jpeg;base64,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',
                description: 'luxury CARS'
            }];
        this.http.get(apiurl).subscribe((Response) => {
            console.log("response from api", Response);
            this.products = Response['details'];
        }, (error) => {
            console.log('error in connection');
        });
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _slide_slide_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slide/slide.component */ "./src/app/slide/slide.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _pro_pro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pro/pro.component */ "./src/app/pro/pro.component.ts");
/* harmony import */ var _find_find_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./find/find.component */ "./src/app/find/find.component.ts");
/* harmony import */ var _findall_findall_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./findall/findall.component */ "./src/app/findall/findall.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./forgetpass/forgetpass.component */ "./src/app/forgetpass/forgetpass.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/forgot/forgot.component.ts");
/* harmony import */ var _remove_remove_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./remove/remove.component */ "./src/app/remove/remove.component.ts");
/* harmony import */ var _showdata_showdata_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./showdata/showdata.component */ "./src/app/showdata/showdata.component.ts");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _slide_slide_component__WEBPACK_IMPORTED_MODULE_8__["SlideComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
            _pro_pro_component__WEBPACK_IMPORTED_MODULE_15__["ProComponent"],
            _find_find_component__WEBPACK_IMPORTED_MODULE_16__["FindComponent"],
            _findall_findall_component__WEBPACK_IMPORTED_MODULE_17__["FindallComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"],
            _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_20__["ForgetpassComponent"],
            _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_21__["ForgotComponent"],
            _remove_remove_component__WEBPACK_IMPORTED_MODULE_22__["RemoveComponent"],
            _showdata_showdata_component__WEBPACK_IMPORTED_MODULE_23__["ShowdataComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot() // ToastrModule added
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/find/find.component.css":
/*!*****************************************!*\
  !*** ./src/app/find/find.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmQvZmluZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/find/find.component.ts":
/*!****************************************!*\
  !*** ./src/app/find/find.component.ts ***!
  \****************************************/
/*! exports provided: FindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindComponent", function() { return FindComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




var apiurl = '/api/find';
let FindComponent = class FindComponent {
    constructor(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.productid = '';
    }
    ngOnInit() {
    }
    find() {
        var req = {
            productname: this.productid
        };
        console.log('you entered', req);
        this.http.post(apiurl, req).subscribe((Response) => {
            if (Response['code'] == 1100) {
                console.log('product found');
                this.toastr.success('product found');
            }
            if (Response['code'] == 1300) {
                this.toastr.warning('please enter sufficient data');
            }
        }, (error) => {
            this.toastr.error('no response');
        });
    }
};
FindComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-find',
        template: __webpack_require__(/*! raw-loader!./find.component.html */ "./node_modules/raw-loader/index.js!./src/app/find/find.component.html"),
        styles: [__webpack_require__(/*! ./find.component.css */ "./src/app/find/find.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], FindComponent);



/***/ }),

/***/ "./src/app/findall/findall.component.css":
/*!***********************************************!*\
  !*** ./src/app/findall/findall.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmRhbGwvZmluZGFsbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/findall/findall.component.ts":
/*!**********************************************!*\
  !*** ./src/app/findall/findall.component.ts ***!
  \**********************************************/
/*! exports provided: FindallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindallComponent", function() { return FindallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




var apiurl = '/api/findall';
let FindallComponent = class FindallComponent {
    constructor(http, toastr) {
        this.http = http;
        this.toastr = toastr;
    }
    ngOnInit() {
    }
    findall() {
        this.http.get(apiurl).subscribe((Response) => {
            this.toastr.success('request is sent');
            console.log(" found", Response);
        }, (error) => {
            this.toastr.error('did not found');
        });
    }
};
FindallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-findall',
        template: __webpack_require__(/*! raw-loader!./findall.component.html */ "./node_modules/raw-loader/index.js!./src/app/findall/findall.component.html"),
        styles: [__webpack_require__(/*! ./findall.component.css */ "./src/app/findall/findall.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], FindallComponent);



/***/ }),

/***/ "./src/app/forgetpass/forgetpass.component.css":
/*!*****************************************************!*\
  !*** ./src/app/forgetpass/forgetpass.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdldHBhc3MvZm9yZ2V0cGFzcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/forgetpass/forgetpass.component.ts":
/*!****************************************************!*\
  !*** ./src/app/forgetpass/forgetpass.component.ts ***!
  \****************************************************/
/*! exports provided: ForgetpassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpassComponent", function() { return ForgetpassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForgetpassComponent = class ForgetpassComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForgetpassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgetpass',
        template: __webpack_require__(/*! raw-loader!./forgetpass.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgetpass/forgetpass.component.html"),
        styles: [__webpack_require__(/*! ./forgetpass.component.css */ "./src/app/forgetpass/forgetpass.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ForgetpassComponent);



/***/ }),

/***/ "./src/app/forgot/forgot.component.css":
/*!*********************************************!*\
  !*** ./src/app/forgot/forgot.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC9mb3Jnb3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/forgot/forgot.component.ts":
/*!********************************************!*\
  !*** ./src/app/forgot/forgot.component.ts ***!
  \********************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





var apiurl = '/api/forgetpass';
let ForgotComponent = class ForgotComponent {
    constructor(http, toastr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.email = '';
    }
    ngOnInit() {
    }
    forgot() {
        var req = {
            email: this.email
        };
        this.http.post(apiurl, req).subscribe((Response) => {
            console.log("request submitted");
            if (Response['code'] == 1400) {
                this.toastr.success('password send');
                this.router.navigate(['/login']);
            }
            if (Response['code'] == 1500) {
                this.toastr.warning('give emailaddres');
            }
            if (Response['code'] == 1300) {
                this.toastr.warning('user not found');
            }
        }, (error) => {
            console.log('error in parsing to server');
        });
    }
};
ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot',
        template: __webpack_require__(/*! raw-loader!./forgot.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgot/forgot.component.html"),
        styles: [__webpack_require__(/*! ./forgot.component.css */ "./src/app/forgot/forgot.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ForgotComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



var apiurl = 'http://localhost:1400/findall';
let HomeComponent = class HomeComponent {
    constructor(http) {
        this.http = http;
        this.products = [];
        this.http.get(apiurl).subscribe((Response) => {
            console.log("response from api", Response);
            this.products = Response['details'];
        }, (error) => {
            console.log('error in connection');
        });
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





const apiurl = '/api/login';
let LoginComponent = class LoginComponent {
    constructor(http, toastr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.email = '';
        this.password = '';
    }
    ngOnInit() {
    }
    login() {
        var request = {
            email: this.email,
            password: this.password
        };
        this.toastr.success('email:' + request.email);
        this.toastr.success('password:' + this.password);
        console.log('you entered', request);
        this.http.post(apiurl, request).subscribe((Response) => {
            this.toastr.success('response came');
            console.log("response from login api", Response);
            if (Response['code'] == 200) {
                this.router.navigate(['/']);
                localStorage.name = Response['name'];
                localStorage.email = Response['email'];
            }
            else {
                this.toastr.error('invalid login');
            }
        }, (error) => {
            console.log('error in parsing to server');
        });
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() {
        this.logged = false;
        if (localStorage.email) {
            this.logged = true;
        }
    }
    ngDoCheck() {
        if (localStorage.email) {
            this.logged = true;
        }
    }
    ngOnInit() {
    }
    logout() {
        this.logged = false;
        localStorage.clear();
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavbarComponent);



/***/ }),

/***/ "./src/app/pro/pro.component.css":
/*!***************************************!*\
  !*** ./src/app/pro/pro.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byby9wcm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pro/pro.component.ts":
/*!**************************************!*\
  !*** ./src/app/pro/pro.component.ts ***!
  \**************************************/
/*! exports provided: ProComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProComponent", function() { return ProComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




var apiurl = '/api/addproduct';
let ProComponent = class ProComponent {
    constructor(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.productname = '';
        this.productrate = '';
        this.productsno = '';
        this.productmod = '';
        this.productimg = '';
        this.productseller = '';
        this.productrating = '';
    }
    ngOnInit() {
    }
    pro() {
        var request = {
            productrate: this.productrate,
            productname: this.productname,
            productsno: this.productsno,
            productmod: this.productmod,
            productimg: this.productimg,
            productseller: this.productseller,
            productrating: this.productrating
        };
        console.log('you entered', request);
        this.http.post(apiurl, request).subscribe((Response) => {
            console.log("product placed");
            if (Response['code'] == 1200) {
                this.toastr.warning('dublicate entry');
            }
            if (Response['code'] == 1400) {
                this.toastr.success('product entered');
            }
        }, (error) => {
            this.toastr.error('product didnot placed');
        });
    }
};
ProComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pro',
        template: __webpack_require__(/*! raw-loader!./pro.component.html */ "./node_modules/raw-loader/index.js!./src/app/pro/pro.component.html"),
        styles: [__webpack_require__(/*! ./pro.component.css */ "./src/app/pro/pro.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], ProComponent);



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductComponent = class ProductComponent {
    constructor() { }
    ngOnInit() {
        console.log('data i found', this.product);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductComponent.prototype, "product", void 0);
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductComponent);



/***/ }),

/***/ "./src/app/remove/remove.component.css":
/*!*********************************************!*\
  !*** ./src/app/remove/remove.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbW92ZS9yZW1vdmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/remove/remove.component.ts":
/*!********************************************!*\
  !*** ./src/app/remove/remove.component.ts ***!
  \********************************************/
/*! exports provided: RemoveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveComponent", function() { return RemoveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





var apiurl = '/api/remove';
let RemoveComponent = class RemoveComponent {
    constructor(http, toastr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.email = '';
    }
    ngOnInit() {
    }
    remove() {
        var req = {
            email: this.email
        };
        console.log('you entered', req);
        this.http.post(apiurl, req).subscribe((Response) => {
            if (Response['code'] == 1100) {
                console.log("user removed");
                this.toastr.success('user removed');
                this.router.navigate(['/']);
            }
            if (Response['code'] == 1234) {
                this.toastr.success('send email');
            }
        }, (error) => {
            console.log('error in parsing to server');
        });
    }
};
RemoveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-remove',
        template: __webpack_require__(/*! raw-loader!./remove.component.html */ "./node_modules/raw-loader/index.js!./src/app/remove/remove.component.html"),
        styles: [__webpack_require__(/*! ./remove.component.css */ "./src/app/remove/remove.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], RemoveComponent);



/***/ }),

/***/ "./src/app/showdata/showdata.component.css":
/*!*************************************************!*\
  !*** ./src/app/showdata/showdata.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3dkYXRhL3Nob3dkYXRhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/showdata/showdata.component.ts":
/*!************************************************!*\
  !*** ./src/app/showdata/showdata.component.ts ***!
  \************************************************/
/*! exports provided: ShowdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowdataComponent", function() { return ShowdataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShowdataComponent = class ShowdataComponent {
    constructor() { }
    ngOnInit() {
    }
};
ShowdataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-showdata',
        template: __webpack_require__(/*! raw-loader!./showdata.component.html */ "./node_modules/raw-loader/index.js!./src/app/showdata/showdata.component.html"),
        styles: [__webpack_require__(/*! ./showdata.component.css */ "./src/app/showdata/showdata.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ShowdataComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





var apiurl = '/api/signup';
let SignupComponent = class SignupComponent {
    constructor(http, toastr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.name = '';
        this.email = '';
        this.password = '';
    }
    ngOnInit() {
    }
    signup() {
        var request = {
            name: this.name,
            email: this.email,
            password: this.password,
        };
        console.log('you entered', request);
        this.http.post(apiurl, request).subscribe((Response) => {
            console.log("sign up done");
            if (Response['code'] == 2500) {
                this.toastr.success('signup done');
                this.router.navigate(['/login']);
            }
            if (Response['code'] == 4400) {
                this.toastr.success('account exist');
                this.router.navigate(['/login']);
            }
            if (Response['code'] == 1800) {
                this.toastr.warning('dublicate email');
            }
        }, (error) => {
            console.log('error in parsing to server');
        });
    }
};
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/slide/slide.component.css":
/*!*******************************************!*\
  !*** ./src/app/slide/slide.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlL3NsaWRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/slide/slide.component.ts":
/*!******************************************!*\
  !*** ./src/app/slide/slide.component.ts ***!
  \******************************************/
/*! exports provided: SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SlideComponent = class SlideComponent {
    constructor() { }
    ngOnInit() {
    }
};
SlideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slide',
        template: __webpack_require__(/*! raw-loader!./slide.component.html */ "./node_modules/raw-loader/index.js!./src/app/slide/slide.component.html"),
        styles: [__webpack_require__(/*! ./slide.component.css */ "./src/app/slide/slide.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SlideComponent);



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rachit\p1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map