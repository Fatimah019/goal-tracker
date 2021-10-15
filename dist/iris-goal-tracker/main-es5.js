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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Content -->\r\n<div id=\"content\" class=\"mb-4\">\r\n  <!-- Page Heading -->\r\n  <div class=\"d-sm-flex d-xs-flex align-items-center justify-content-between m-4\">\r\n    <h1 class=\"h3 mb-0 text-gray-800\"> Goal Tracker</h1>\r\n    <div class=\"d-md-none d-lg-none d-xl-none\">\r\n      <!-- <i class=\"material-icons md-28 text-gray-800\" style=\"float: right\">person</i> -->\r\n      <div class=\"dropdown open\">\r\n        <div class=\"nav-avatar d-inline-block float-right dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n          aria-expanded=\"false\">\r\n          <div class=\"initials-avatar rounded-circle\" [ngStyle]=\"{ backgroundColor: getAvatar(thisUser.name).color }\">\r\n            {{ getAvatar(thisUser.name).initials }}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"dropdown-menu\">\r\n          <!-- profile card -->\r\n          <div class=\"card d-md-block border-0 mb-3 py-2 br-10 bg-white\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row no-gutters align-items-center\">\r\n                <div class=\"col text-center\">\r\n                  <div class=\"d-flex w-100 justify-content-between align-items-center mb-3\">\r\n                    <div class=\"d-flex flex-row align-items-center\">\r\n                      <div class=\"avatar mr-3\">\r\n                        <div class=\"initials-avatar rounded-circle\"\r\n                          [ngStyle]=\"{ backgroundColor: getAvatar(thisUser.name).color }\">\r\n                          {{ getAvatar(thisUser.name).initials }}\r\n                        </div>\r\n                      </div>\r\n                      <h5>{{ thisUser.name }}</h5>\r\n                    </div>\r\n                    <small (click)=\"editUser()\"> <i class=\"material-icons\">edit</i></small>\r\n                  </div>\r\n                  <div class=\"text-s d-flex w-100 mb-3 justify-content-between text-gray-800 align-items-center\">\r\n                    <div class=\"d-flex flex-row align-items-center\">\r\n                      <i class=\"material-icons mr-1 text-s text-gray-300\">email</i>\r\n                      {{ thisUser.email }}\r\n                    </div>\r\n                    <i class=\"material-icons text-s text-gray-300\">lock</i>\r\n                  </div>\r\n                  <button type=\"button\" (click)=\"logout()\" class=\"btn btn-danger\">Log Out</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <div class=\"d-flex flex-row justify-content-between mobile-content\">\r\n    <section class=\"d-flex flex-column\">\r\n      <!-- profile card -->\r\n      <div class=\"card d-none d-md-block border-0 shadow h-80 mb-3 py-2 br-10 bg-white\">\r\n        <div class=\"card-body\">\r\n          <div class=\"row no-gutters align-items-center\">\r\n            <div class=\"col text-center\">\r\n              <div class=\"d-flex w-100 justify-content-between align-items-center mb-3\">\r\n                <div class=\"d-flex flex-row align-items-center\">\r\n                  <div class=\"avatar mr-3\">\r\n                    <div class=\"initials-avatar rounded-circle\"\r\n                      [ngStyle]=\"{ backgroundColor: getAvatar(thisUser.name).color }\">\r\n                      {{ getAvatar(thisUser.name).initials }}\r\n                    </div>\r\n                  </div>\r\n                  <h5>{{ thisUser.name }}</h5>\r\n                </div>\r\n                <small (click)=\"editUser()\"> <i class=\"material-icons\">edit</i></small>\r\n              </div>\r\n              <div class=\"text-s d-flex w-100 mb-3 justify-content-between text-gray-800 align-items-center\">\r\n                <div class=\"d-flex flex-row align-items-center\">\r\n                  <i class=\"material-icons mr-1 text-s text-gray-300\">email</i>\r\n                  {{ thisUser.email }}\r\n                </div>\r\n                <i class=\"material-icons text-s text-gray-300\">lock</i>\r\n              </div>\r\n              <button type=\"button\" (click)=\"logout()\" class=\"btn btn-danger\">Log Out</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Add a new goal card -->\r\n      <div #newGoalCard class=\"card new-goal animated fadeInUp faster d-md-block border-0 shadow br-10 py-1 bg-primary\">\r\n        <small (click)=\"toggleGoalCard(false)\" class=\"d-md-none d-lg-none d-xl-none text-white text-right pr-3\"> <i\r\n            class=\"material-icons\">close</i></small>\r\n        <div class=\"card-body flex-grow-0\">\r\n          <h4 class=\"text-white\">Add new goal</h4>\r\n          <form [formGroup]=\"createGoalForm\" (ngSubmit)=\"createGoal(createGoalForm.value)\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" formControlName=\"title\" placeholder=\"Goal Title\"\r\n                class=\"form-control form-control-user\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <textarea formControlName=\"description\" class=\"form-control form-control-user\" name=\"\" id=\"\" cols=\"5\"\r\n                rows=\"3\" placeholder=\"Goal Description\"></textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input class=\"form-control form-control-user\" type=\"text\" [min]=\"today\" formControlName=\"scheduleDate\" \r\n                class=\"form-control\" placeholder=\"Schedule Date (Optional)\" onfocus=\"(this.type='date')\"/>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button type=\"submit\" [disabled]=\"!createGoalForm.valid\" class=\"btn btn-outline-light\">Add</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"mobile-view\">\r\n      <h4>At a glance</h4>\r\n      <div class=\"card border-0 shadow py-2 mb-3\">\r\n        <div class=\"row flex-row\">\r\n          <div class=\"col-4 col-xs-4 mb-4 metric-card\">\r\n            <div class=\"card p-2 border-0 text-center\">\r\n              <div class=\"row no-gutters align-items-center\">\r\n                <div class=\"col mr-2\">\r\n                  <div class=\"h5 mb-0 font-weight-bold mb-1\">{{ goals.length }}</div>\r\n                  <div class=\"text-xs font-weight-bold\">All Goals</div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4 mb-4 metric-card\">\r\n            <div class=\"card text-center text-warning p-2 border-0\">\r\n              <div class=\"row no-gutters align-items-center\">\r\n                <div class=\"col mr-2\">\r\n                  <div class=\"h5 mb-0 font-weight-bold mb-1\">{{ goals.length - getGoalsMetric() }}</div>\r\n                  <div class=\"text-xs font-weight-bold\">Pending Goals</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4 mb-4 metric-card\">\r\n            <div class=\"card text-center text-success p-2 border-0\">\r\n              <div class=\"row no-gutters align-items-center\">\r\n                <div class=\"col mr-2\">\r\n                  <div class=\"h5 mb-0 font-weight-bold mb-1\">{{ getGoalsMetric() }}</div>\r\n                  <div class=\"text-xs font-weight-bold\">Completed Goals</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <h4>My Goals</h4>\r\n      <div class=\"card border-0 shadow py-2 goals-card\">\r\n        <div class=\"card-body p-0 py-3\" *ngIf=\"goals.length > 0\">\r\n          <div class=\"row no-gutters align-items-center scrollable\">\r\n            <div class=\"list-group w-100 p-4\">\r\n              <div *ngFor=\"let goal of goals\"\r\n                class=\"list-group-item goal animated flipInX flex-column align-items-start mt-1 mb-3 p-0 border-0\">\r\n                <div class=\"d-flex w-100 justify-content-between\">\r\n                  <a class=\"h5 mb-1 text-dark\" (click)=\"loadSingleGoal(goal)\">{{ goal.title }}</a>\r\n                  <span class=\"action-buttons\">\r\n                    <small class=\"material-icons md-20\" (click)=\"editGoal(goal)\">edit</small>\r\n                    <small class=\"material-icons md-20 text-danger\" (click)=\"deleteGoal(goal)\">close</small>\r\n                  </span>\r\n                </div>\r\n                <small class=\"mb-2 d-inline\" *ngIf=\"goal.description\">{{ goal.description }}</small>\r\n                <small *ngIf=\"goal.description\" style=\"float: right\">{{ goal.scheduleDate | date:'yyyy-MM-dd' }}</small>\r\n                <div class=\"progress mt-2\">\r\n                  <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ width: goal.progress+'%' }\"\r\n                    aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                    [ngClass]=\"{'bg-success': goal.isComplete, 'bg-warning': !goal.isComplete }\"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"card-body d-flex flex-column justify-content-center align-items-center\" *ngIf=\"goals.length === 0\">\r\n          <h5 class=\"text-black-50 mt-4 w-50 text-center\">It's quite lonely here. Look over that corner to add a new\r\n            goal.</h5>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"mt-3 text-center\">\r\n          <a href=\"\">view more</a>\r\n        </div> -->\r\n\r\n      <div class=\"fab d-md-none d-lg-none d-xl-none\">\r\n        <button class=\"btn\" type=\"button\" (click)=\"toggleGoalCard()\"><i class=\"material-icons add\">add</i></button>\r\n      </div>\r\n\r\n    </section>\r\n\r\n    <section>\r\n      <div #singleGoalCard class=\"card single-goal d-md-block border-0 shadow py-2 todo-card\">\r\n        <div class=\"card-body\" *ngIf=\"goal\">\r\n          <small (click)=\"toggleSingleGoalCard(false)\" class=\"d-md-none d-lg-none d-xl-none text-dark text-right float-right pr-3\">\r\n            <i class=\"material-icons\">close</i></small>\r\n            <div class=\"clearfix\"></div>\r\n          <div class=\"row no-gutters align-items-center\">\r\n            <div class=\"col mr-2\">\r\n              <h4>{{ goal.title }}</h4>\r\n              <small class=\"text-gray-800\">{{ goal.description }}</small>\r\n              <div class=\"text-xs font-weight-bold text-primary text-gray-800 mb-4\">\r\n                <h6 class=\"d-inline\" style=\"font-weight: bold\">{{ goal.progress || '0' }}% complete</h6>\r\n                <countdown-timer id=\"countdown\" class=\"text-gray-800\" [end]=\"goal.scheduleDate\" (zeroTrigger)=\"finishCount(goal)\" *ngIf=\"goal.scheduleDate\"></countdown-timer>\r\n                <p *ngIf=\"!goal.scheduleDate || goalScheduleText[goal._id]\">\r\n                  {{ goalScheduleText[goal._id] || \"\" }}\r\n                </p>\r\n              </div>\r\n\r\n              <form [formGroup]=\"createTodoForm\" (ngSubmit)=\"createTodo(createTodoForm.value)\">\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" formControlName=\"title\" class=\"form-control\" placeholder=\"Add new to-do item\"\r\n                    aria-label=\"\" aria-describedby=\"basic-addon1\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-primary\" style=\"height: calc(1.5em + 0.75rem + 2px);\" type=\"submit\">\r\n                      <span class=\"material-icons\">add</span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n\r\n              <ul class=\"list-group mt-4 scrollable-todo\">\r\n                <li class=\"list-group-item animated flipInX todo\" *ngFor=\"let todo of goal.todos\">\r\n                  <!-- <div class=\"d-flex w-100\"> -->\r\n                  <input type=\"checkbox\" id=\"checkTodo\" [checked]=\"todo.isComplete\" (click)=\"markTodo(todo)\"\r\n                    class=\"checkbox d-inline-block mr-2\">\r\n                  <div class=\"d-inline-block h-100\" style=\"width: 90%;\" [ngClass]=\"{'strikethrough': todo.isComplete }\">\r\n                    {{ todo.title }}\r\n                    <span class=\"action-buttons float-right\">\r\n                      <small class=\"material-icons md-20 text-danger\" (click)=\"deleteTodo(todo)\">close</small>\r\n                    </span>\r\n                  </div>\r\n                  <!-- </div> -->\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body d-flex flex-column justify-content-center h-100 align-items-center\" *ngIf=\"!goal\">\r\n\r\n          <svg width=\"194\" height=\"150\" viewBox=\"0 0 194 194\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <path\r\n              d=\"M142.103 85.3009C141.174 82.9502 138.515 81.799 136.164 82.7274C133.813 83.6568 132.661 86.316 133.59 88.6667C135.916 94.5492 137.095 100.766 137.095 107.146C137.095 134.859 114.549 157.406 86.8351 157.406C59.1192 157.406 36.5701 134.859 36.5701 107.146C36.5701 79.4328 59.1192 56.886 86.8351 56.886C93.2371 56.886 99.4648 58.0723 105.345 60.4121C107.693 61.3476 110.355 60.1999 111.29 57.8518C112.225 55.5029 111.078 52.8415 108.73 51.9071C101.768 49.1366 94.4011 47.732 86.8354 47.732C54.0722 47.732 27.4165 74.3846 27.4165 107.146C27.4165 139.907 54.071 166.56 86.8351 166.56C119.596 166.56 146.249 139.907 146.249 107.146C146.249 99.6091 144.854 92.2599 142.103 85.3009Z\"\r\n              fill=\"#C4C4C4\" />\r\n            <path\r\n              d=\"M170.321 83.2105C169.625 80.7802 167.093 79.3756 164.661 80.0693C162.231 80.765 160.825 83.2988 161.52 85.7287C163.504 92.6634 164.51 99.8695 164.51 107.145C164.51 149.978 129.665 184.826 86.8347 184.826C44.0016 184.826 9.154 149.979 9.154 107.145C9.154 64.3118 44.0012 29.4649 86.8347 29.4649C94.1271 29.4649 101.345 30.4754 108.288 32.4689C110.718 33.166 113.252 31.7626 113.95 29.3326C114.647 26.9027 113.243 24.3678 110.813 23.6707C103.05 21.4412 94.9819 20.3105 86.8347 20.3105C38.9538 20.3109 0 59.2647 0 107.146C0 155.026 38.9538 193.981 86.8347 193.981C134.713 193.981 173.664 155.027 173.664 107.146C173.664 99.0173 172.539 90.9644 170.321 83.2105Z\"\r\n              fill=\"#C4C4C4\" />\r\n            <path\r\n              d=\"M118.703 104.351C118.479 101.833 116.254 99.9843 113.737 100.199C111.22 100.424 109.36 102.647 109.585 105.165C109.643 105.817 109.673 106.483 109.673 107.146C109.673 119.74 99.4272 129.985 86.8343 129.985C74.2379 129.985 63.99 119.739 63.99 107.146C63.9908 94.5492 74.2383 84.3017 86.8347 84.3017C87.5383 84.3017 88.2272 84.3324 88.883 84.3927C91.4024 84.6238 93.6288 82.7725 93.8611 80.255C94.093 77.7379 92.2405 75.5096 89.7235 75.2769C88.7898 75.1909 87.8179 75.1473 86.8351 75.1473C69.1913 75.1473 54.8368 89.5011 54.8368 107.145C54.8368 124.786 69.1913 139.138 86.8351 139.138C104.476 139.138 118.828 124.786 118.828 107.145C118.827 106.213 118.786 105.272 118.703 104.351Z\"\r\n              fill=\"#C4C4C4\" />\r\n            <path\r\n              d=\"M193.299 30.7914C191.877 27.3578 188.556 25.1389 184.839 25.1389H168.88V9.18014C168.88 5.46307 166.661 2.14272 163.228 0.720681C159.795 -0.700975 155.88 0.0784346 153.253 2.70577L126.587 29.3721C123.994 31.9642 122.567 35.4114 122.567 39.0789V64.979L85.3699 102.176C83.5826 103.964 83.5826 106.862 85.3699 108.649C86.2634 109.543 87.4349 109.99 88.6061 109.99C89.7773 109.99 90.9489 109.543 91.8424 108.649L129.04 71.4519H154.94C158.608 71.4519 162.055 70.0242 164.647 67.4324L191.313 40.7654C193.941 38.1377 194.72 34.2232 193.299 30.7914ZM131.721 39.0785C131.722 37.8565 132.197 36.7077 133.06 35.8449L159.726 9.1828V27.8204L131.721 55.8258V39.0785H131.721ZM158.174 60.9592C157.324 61.8095 156.145 62.2979 154.941 62.2979H138.194L166.199 34.2933L184.838 34.2956L158.174 60.9592Z\"\r\n              fill=\"#C4C4C4\" />\r\n          </svg>\r\n\r\n          <h5 class=\"text-black-50 mt-4 w-50 text-center\">Click on a goal for more info</h5>\r\n        </div>\r\n      </div>\r\n\r\n    </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"highlighted\" class=\"hl-basic hidden-xs\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-9 col-sm-offset-3 col-md-9 col-md-offset-3 col-lg-10 col-lg-offset-2\">\r\n        <h1>\r\n          Forgot Password\r\n        </h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"content\" class=\"interior-page\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <!--Sidebar-->\r\n      <div class=\"col-sm-3 col-md-3 col-lg-2 sidebar equal-height interior-page-nav hidden-xs\">\r\n        <div class=\"dynamicDiv panel-group\" id=\"dd.0.1.0\">\r\n          <div id=\"subMenu\" class=\"panel panel-default\">\r\n            <ul class=\"subMenuHighlight panel-heading\">\r\n              <li class=\"subMenuHighlight panel-title\" id=\"subMenuHighlight\">\r\n                <a id=\"li_291\" class=\"subMenuHighlight\" href=\"\"><span>Sign Up</span></a>\r\n              </li>\r\n            </ul>\r\n            <ul class=\"panel-heading\">\r\n              <li class=\"panel-title\">\r\n                <a class=\"subMenu1\" href=\"\"><span class=\"subMenuHighlight\">Forgot Password</span></a>\r\n              </li>\r\n            </ul>\r\n            <ul class=\"panel-heading\">\r\n              <li class=\"panel-title\">\r\n                <a class=\"subMenu1\" href=\"\"><span>Sign In</span></a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"item item-nopad item-noborder item-gold\">\r\n            <a style=\"padding: 5% 0px;\" href=\"\" class=\"btn btn-primary btn-block\" role=\"button\">LEARN MORE</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Content-->\r\n      <div class=\"col-sm-9 col-md-9 col-lg-10 content equal-height\">\r\n        <div class=\"content-area-right\">\r\n          <div class=\"content-crumb-div\">\r\n            <a href=\"\">Home</a> / <a href=\"\">Your Account</a> / Forgot Password\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5 forgot-form\">\r\n              <p>\r\n                Please enter your email address below and we will send you information to change your password.\r\n              </p>\r\n              <label class=\"label-default\" for=\"un\">Email Address</label> <input id=\"email_addy\" name=\"email_addy\"\r\n                class=\"form-control\" type=\"text\"><br>\r\n              <a id=\"mybad\" class=\"btn btn-primary\" role=\"button\">RESET</a>\r\n            </div>\r\n            <div class=\"col-md-5 forgot-return\" style=\"display:none;\">\r\n              <h3>\r\n                Reset Password Sent\r\n              </h3>\r\n              <p>\r\n                An email has been sent to your address with a reset password you can use to access your account.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper wrapper-full-page bg-img overlay\">\r\n  <nav class=\"navbar navbar-dark navbar-expand-md navbar-toggleable-sm\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\">\r\n        <img src=\"https://res.cloudinary.com/iolarav/image/upload/v1569355074/iris-logo_no5zph.png\" width=\"30\"\r\n          height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\r\n        GOAL TRACKER\r\n      </a>\r\n      <button mat-ripple class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\r\n        aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"btn login-trigger\" [class.active]=\"sign === 'login'\" (click)=\" sign = 'login'\"\r\n              routerLinkActive=\"active\">Sign In</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"btn register-trigger\" [class.active]=\"sign === 'register'\" (click)=\"sign = 'register'\"\r\n              routerLinkActive=\"active\">Sign Up</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <div id=\"home-body\">\r\n    <div class=\"container\">\r\n      <div class=\"row mobile-padding\">\r\n        <div class=\"col-lg-8  d-lg-block mobile-margin-bottom\">\r\n          <h1 class=\"display-4\"><strong>Stay focused,</strong> go after your dreams and <strong>keep moving</strong>\r\n            towards your <strong>goals.</strong></h1>\r\n          <div class=\"note d-flex\">\r\n            Goal Tracker is a powerful and flexible tool that boosts your productivity and organizes your life - in just\r\n            a few steps.\r\n          </div>\r\n          <div class=\"sign-button\">\r\n            <button class=\"register-button btn btn-primary btn-lg shadow\" [class.active]=\"sign === 'register'\"\r\n              type=\"button\" (click)=\"sign = 'register'\">Get Started - It's free!</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\" [ngSwitch]=\"sign\">\r\n          <app-login *ngSwitchCase=\"'login'\"></app-login>\r\n          <app-register *ngSwitchCase=\"'register'\"></app-register>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center mx-auto\">\r\n  <h2 class=\"access-title\">Sign In</h2>\r\n  <div>\r\n    <form class=\"form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\">\r\n      <div class=\"input-group mb-3 mx-auto\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\"><i class=\"material-icons\">email</i></span>\r\n        </div>\r\n        <input type=\"email\" formControlName=\"email\" name=\"email\" class=\"form-control\" placeholder=\"E-mail Address\"\r\n          aria-label=\"email\" required>\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3 mx-auto\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\"><i class=\"material-icons\">lock</i></span>\r\n        </div>\r\n        <input type=\"password\" formControlName=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\"\r\n          aria-label=\"password\" required>\r\n      </div>\r\n\r\n      <div>\r\n        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-primary btn-block mx-auto\">\r\n          <div *ngIf=\"!loading\">Sign in</div>\r\n          <div *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center mx-auto\">\r\n  <h2 class=\"access-title\">Sign Up</h2>\r\n  <div>\r\n    <form class=\"form\" [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit(signupForm.value)\">\r\n      <div class=\"input-group mb-3 mx-auto\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\"><i class=\"material-icons\">person</i></span>\r\n        </div>\r\n        <input type=\"text\" name=\"name\" formControlName=\"name\" class=\"form-control\" placeholder=\"Full Name\"\r\n          aria-label=\"name\" required>\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3 mx-auto\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\"><i class=\"material-icons\">email</i></span>\r\n        </div>\r\n        <input type=\"email\" name=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"E-mail Address\"\r\n          aria-label=\"email\" required>\r\n      </div>\r\n\r\n      <div class=\"input-group mb-3 mx-auto\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\"><i class=\"material-icons\">lock</i></span>\r\n        </div>\r\n        <input type=\"password\" name=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\"\r\n          aria-label=\"password\" required>\r\n      </div>\r\n\r\n      <div>\r\n        <button type=\"submit\" [disabled]=\"!signupForm.valid\" class=\"btn btn-primary btn-block mx-auto\">\r\n          <div *ngIf=\"!loading\">Sign up</div>\r\n          <div *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reset-password/reset-password.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reset-password/reset-password.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=container>\r\n  <form method=\"post\" action=\"\">\r\n\r\n    <label for=\"newPassword\">New Password:</label>\r\n    <input type=\"password\" id=\"newPassword\" name=\"newPassword\" title=\"New password\" />\r\n\r\n    <label for=\"confirmPassword\">Confirm Password:</label>\r\n    <input type=\"password\" id=\"confirmPassword\" name=\"confirmPassword\" title=\"Confirm new password\" />\r\n\r\n    <label for=\"token\">Password Token:</label>\r\n    <input type=\"text\" id=\"token\" name=\"token\" title=\"Password Token\" />\r\n\r\n\r\n    <input type=\"submit\" value=\"Change Password\" />\r\n\r\n\r\n\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util.service */ "./src/app/util.service.ts");






/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var ApiService = /** @class */ (function () {
    function ApiService(http, utils) {
        this.http = http;
        this.utils = utils;
        this.url = 'https://iris-goal-tracker-api.herokuapp.com/api';
        // this.url = 'http://localhost:3000/api';
    }
    ApiService.prototype.get = function (endpoint, params, reqOpts) {
        var _this = this;
        if (!reqOpts) {
            reqOpts = {
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            for (var k in params) {
                if (params.hasOwnProperty(k)) {
                    reqOpts.params = reqOpts.params.set(k, params[k]);
                }
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            // options.search = !options.search && p || options.search
        }
        return this.http.get(this.url + "/" + endpoint, reqOpts)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this._handleError(err); }));
    };
    ApiService.prototype.post = function (endpoint, body, reqOpts) {
        var _this = this;
        var endpointURL = this.url + "/" + endpoint;
        return this.http.post(endpointURL, body, reqOpts)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this._handleError(err); }));
    };
    ApiService.prototype.put = function (endpoint, body, reqOpts) {
        var _this = this;
        var endpointURL = this.url + "/" + endpoint;
        return this.http.put(endpointURL, body, reqOpts)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this._handleError(err); }));
    };
    ApiService.prototype.delete = function (endpoint, reqOpts) {
        var _this = this;
        return this.http.delete(this.url + "/" + endpoint, reqOpts)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this._handleError(err); }));
    };
    ApiService.prototype.patch = function (endpoint, body, reqOpts) {
        var _this = this;
        return this.http.put(this.url + "/" + endpoint, body, reqOpts)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this._handleError(err); }));
    };
    ApiService.prototype._handleError = function (error) {
        var errorMessagge = '';
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            if (error.error.code === 'EXPIRED_TOKEN') {
                return this.utils.showAlert({ title: 'Expired Session', message: error.error.message });
            }
            console.error("Backend returned code " + error.status + ", " +
                "body was:", error.error.message, 'API code: ', error.error.code);
            errorMessagge = error.error.message;
        }
        // return an ErrorObservable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessagge || 'An error occurred. Please try again or check your internet connection.');
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], ApiService);
    return ApiService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");









var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'reset-password/:token', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"] },
    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(user, router) {
        var _this = this;
        this.user = user;
        this.router = router;
        this.user.getLoggedInStatus().subscribe(function (isLoggedIn) {
            if (isLoggedIn) {
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    }
    AppComponent.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_countdown_timer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-countdown-timer */ "./node_modules/ngx-countdown-timer/ngx-countdown-timer.umd.js");
/* harmony import */ var ngx_countdown_timer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_countdown_timer__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__["ResetPasswordComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_15__["ForgotPasswordComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                ngx_countdown_timer__WEBPACK_IMPORTED_MODULE_13__["CountdownTimerModule"].forRoot()
            ],
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"], _user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\r\n  margin: 0 1.5%;\r\n  width: 30%;\r\n}\r\n\r\n.progress {\r\n  height: 0.3rem;\r\n}\r\n\r\n.metric-card {\r\n  height: 70px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.metric-card .h5 {\r\n  font-size: 2rem;\r\n}\r\n\r\n.avatar {\r\n  position: relative;\r\n  height: 3rem;\r\n  width: 3rem;\r\n}\r\n\r\n.dropdown-menu {\r\n  left: -10px !important;\r\n}\r\n\r\n.dropdown {\r\n  top: -35px;\r\n}\r\n\r\n.fab button {\r\n  box-shadow: none;\r\n}\r\n\r\n.nav-avatar {\r\n  position: relative;\r\n  height: 2.5rem;\r\n  width: 2.5rem;\r\n}\r\n\r\n.strikethrough {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.initials-avatar {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #ccc;\r\n  color: #FFF;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n  justify-content: center;\r\n  text-align: center;\r\n  font-size: 100%;\r\n  font-weight: lighter;\r\n  letter-spacing: 1px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n}\r\n\r\nh4 {\r\n  color: #0083FF;\r\n  font-weight: bold;\r\n}\r\n\r\n.goal .action-buttons,\r\n.todo .action-buttons {\r\n  display: none;\r\n  cursor: pointer;\r\n  font-size: 1rem;\r\n  color: var(--primary);\r\n}\r\n\r\n.goal a {\r\n  cursor: pointer;\r\n}\r\n\r\n.goal:hover .action-buttons,\r\n.todo:hover .action-buttons {\r\n  display: block;\r\n}\r\n\r\n.goals-card {\r\n  height: 350px;\r\n}\r\n\r\n.scrollable {\r\n  overflow-y: auto;\r\n  max-height: 300px;\r\n}\r\n\r\n.todo-card {\r\n  height: 548px;\r\n}\r\n\r\n.scrollable-todo {\r\n  overflow-y: auto;\r\n  max-height: 320px;\r\n}\r\n\r\ni.add {\r\n  background-color: var(--primary);\r\n  vertical-align: middle !important;\r\n  color: white;\r\n  border-radius: 50%;\r\n  padding: 15px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.fab {\r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n}\r\n\r\n.material-icons.md-20 {\r\n  font-size: 20px;\r\n}\r\n\r\n.material-icons.md-28 {\r\n  font-size: 28px;\r\n}\r\n\r\ncountdown-timer {\r\n  float: right;\r\n  outline: none;\r\n  font-size: 16px;\r\n}\r\n\r\n.action-icon {\r\n  cursor: pointer;\r\n}\r\n\r\n.material-icons.md-20 { font-size: 20px; }\r\n\r\n.material-icons.md-28 { font-size: 28px; }\r\n\r\n/***    SCROLLBAR     ***/\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  background-color: transparent;\r\n  color: transparent;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: rgba(165, 165, 165, 0.7);\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: rgba(128, 128, 128, 0.7);\r\n}\r\n\r\n/*** MEDIA STYLES ***/\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .mobile-view {\r\n    width: 100%;\r\n    margin: 0 -25% !important;\r\n  }\r\n\r\n  .new-goal,\r\n  .single-goal {\r\n    z-index: 999999;\r\n    display: none;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    position: absolute;\r\n    flex-direction: column;\r\n  }\r\n\r\n\r\n  .todo .action-buttons,\r\n  .goal .action-buttons {\r\n    display: block !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsd0JBQXdCLGVBQWUsRUFBRTs7QUFDekMsd0JBQXdCLGVBQWUsRUFBRTs7QUFHekMseUJBQXlCOztBQUV6QixVQUFVOztBQUNWO0VBQ0UsVUFBVTtBQUNaOztBQUVBLFVBQVU7O0FBQ1Y7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBLFdBQVc7O0FBQ1g7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtFQUMzQjs7RUFFQTs7SUFFRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7O0VBR0E7O0lBRUUseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBtYXJnaW46IDAgMS41JTtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gIGhlaWdodDogMC4zcmVtO1xyXG59XHJcblxyXG4ubWV0cmljLWNhcmQge1xyXG4gIGhlaWdodDogNzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ubWV0cmljLWNhcmQgLmg1IHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDNyZW07XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBsZWZ0OiAtMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIHRvcDogLTM1cHg7XHJcbn1cclxuXHJcbi5mYWIgYnV0dG9uIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ubmF2LWF2YXRhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIHdpZHRoOiAyLjVyZW07XHJcbn1cclxuXHJcbi5zdHJpa2V0aHJvdWdoIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLmluaXRpYWxzLWF2YXRhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmg0IHtcclxuICBjb2xvcjogIzAwODNGRjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmdvYWwgLmFjdGlvbi1idXR0b25zLFxyXG4udG9kbyAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5nb2FsIGEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmdvYWw6aG92ZXIgLmFjdGlvbi1idXR0b25zLFxyXG4udG9kbzpob3ZlciAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZ29hbHMtY2FyZCB7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG5cclxuLnNjcm9sbGFibGUge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi50b2RvLWNhcmQge1xyXG4gIGhlaWdodDogNTQ4cHg7XHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlLXRvZG8ge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMzIwcHg7XHJcbn1cclxuXHJcbmkuYWRkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mYWIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDE2cHg7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29ucy5tZC0yMCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMubWQtMjgge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuY291bnRkb3duLXRpbWVyIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5hY3Rpb24taWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMubWQtMjAgeyBmb250LXNpemU6IDIwcHg7IH1cclxuLm1hdGVyaWFsLWljb25zLm1kLTI4IHsgZm9udC1zaXplOiAyOHB4OyB9XHJcblxyXG5cclxuLyoqKiAgICBTQ1JPTExCQVIgICAgICoqKi9cclxuXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTY1LCAxNjUsIDE2NSwgMC43KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjcpO1xyXG59XHJcblxyXG4vKioqIE1FRElBIFNUWUxFUyAqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLm1vYmlsZS12aWV3IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIC0yNSUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5uZXctZ29hbCxcclxuICAuc2luZ2xlLWdvYWwge1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuXHJcbiAgLnRvZG8gLmFjdGlvbi1idXR0b25zLFxyXG4gIC5nb2FsIC5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
// tslint:disable: max-line-length
// tslint:disable: no-string-literal





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(user, utils, renderer) {
        this.user = user;
        this.utils = utils;
        this.renderer = renderer;
        this.goals = [];
        this.scheduleDate = new Date('yyyy/mm/dd').toISOString;
        this.today = new Date().toJSON().split('T')[0];
        this.goalScheduleText = {};
        this.createGoalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            scheduleDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.createTodoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (window.screen.width === 360) {
            this.mobile = true;
        }
        this.loadGoals();
        this.thisUser = this.user.getUserObj();
    };
    DashboardComponent.prototype.toggleGoalCard = function (on) {
        if (on === void 0) { on = true; }
        this.renderer.setStyle(this.goalCard.nativeElement, 'display', on ? 'flex' : 'none');
    };
    DashboardComponent.prototype.toggleSingleGoalCard = function (on) {
        if (on === void 0) { on = true; }
        this.renderer.setStyle(this.singleGoalCard.nativeElement, 'display', on ? 'flex' : 'none');
    };
    DashboardComponent.prototype.createGoal = function (goalData) {
        var _this = this;
        this.user.createGoal(goalData).subscribe(function (res) {
            _this.goals.unshift(res.data);
            _this.createGoalForm.reset();
            _this.toggleGoalCard(false);
        }, function (err) {
            _this.utils.showToast({ title: err, type: 'error' });
        });
    };
    DashboardComponent.prototype.createTodo = function (todoData) {
        var _this = this;
        this.user.createTodo(this.goal._id, todoData).subscribe(function (res) {
            _this.goal.todos.unshift(res.data);
            _this.createTodoForm.reset();
        }, function (err) {
            _this.utils.showToast({ title: err, type: 'error' });
        });
    };
    DashboardComponent.prototype.deleteTodo = function (todo) {
        var _this = this;
        this.user.removeTodo(todo._id).subscribe(function (res) {
            var index = _this.goal.todos.findIndex(function (todoObj) { return todoObj._id === todo._id; });
            _this.goal.todos.splice(index, 1);
            _this.utils.showToast({
                title: 'Deleted!',
                message: 'To-do item has been removed.',
                type: 'success'
            });
        }, function (err) {
            _this.utils.showToast({ title: err, type: 'error' });
        });
    };
    DashboardComponent.prototype.loadGoals = function () {
        var _this = this;
        this.user.getGoals()
            .subscribe(function (res) {
            _this.goals = res.data.map(function (goal) { return _this.formatGoal(goal); }).sort(_this.sortLatest);
        }, function (err) {
            _this.utils.showToast({ title: err, type: 'error' });
        });
    };
    DashboardComponent.prototype.loadSingleGoal = function (goal) {
        var _this = this;
        this.user.getSingleGoal(goal._id).subscribe(function (res) {
            _this.goal = _this.formatGoal(res.data, false);
            _this.goal.progress = goal.progress;
            _this.toggleSingleGoalCard();
        }, function (err) {
            _this.utils.showToast({ title: err, type: 'error' });
        });
    };
    DashboardComponent.prototype.logout = function () {
        this.user.logout();
    };
    DashboardComponent.prototype.getAvatar = function (text) {
        return this.user.getAvatarInitials(text);
    };
    DashboardComponent.prototype.deleteGoal = function (goal) {
        var _this = this;
        swal.fire({
            title: "Delete " + goal.title + "?",
            text: 'You won\'t be able to revert this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'var(--danger)',
            cancelButtonColor: 'var(--dark)',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.user.removeGoal(goal._id).subscribe(function (res) {
                    var index = _this.goals.findIndex(function (goalObj) { return goalObj._id === goal._id; });
                    _this.goals.splice(index, 1);
                    _this.utils.showToast({
                        title: 'Deleted!',
                        message: 'The goal has been deleted.',
                        type: 'success'
                    });
                });
            }
        });
    };
    DashboardComponent.prototype.editGoal = function (goal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var formattedScheduleDate, formValues;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formattedScheduleDate = this.parseScheduleDate(goal.scheduleDate);
                        return [4 /*yield*/, swal.fire({
                                title: 'Edit goal',
                                html: "\n        <div class=\"form-group\">\n          <label for=\"goal-title-input\">Title</label>\n          <input type=\"text\" class=\"form-control\" value=\"" + goal.title + "\" id=\"goal-title-input\" placeholder=\"An awesome title\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"goal-description-input\">Description</label>\n          <input type=\"text\" class=\"form-control\" value=\"" + (goal.description || '') + "\"\n          id=\"goal-description-input\" placeholder=\"What is your goal about?\" autocomplete='no'>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"goal-scheduleDate-input\">Schedule a Date</label>\n          <input type=\"date\" [min]=\"today\" class=\"form-control\" value=\"" + (formattedScheduleDate || '\'2019-01-01\'') + "\" id=\"goal-scheduleDate-input\">\n        </div>\n        ",
                                focusConfirm: false,
                                showLoaderOnConfirm: true,
                                confirmButtonColor: 'var(--primary)',
                                preConfirm: function () {
                                    return {
                                        title: document.getElementById('goal-title-input')['value'],
                                        description: document.getElementById('goal-description-input')['value'],
                                        scheduleDate: document.getElementById('goal-scheduleDate-input')['value']
                                    };
                                }
                            })];
                    case 1:
                        formValues = (_a.sent()).value;
                        if (formValues) {
                            this.user.updateGoal(goal._id, formValues).subscribe(function (res) {
                                _this.utils.showToast({ title: 'Successfully updated goal!', type: 'success' });
                                res.data.progress = goal.progress;
                                res.data.meta = goal.meta;
                                _this.goals = _this.goals.map(function (goalObj) { return (goalObj._id === res.data._id) ? _this.formatGoal(res.data) : goalObj; })
                                    .sort(_this.sortLatest);
                            }, function (err) {
                                _this.utils.showToast({ title: err, type: 'error' });
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.editUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user, formValues;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.thisUser;
                        return [4 /*yield*/, swal.fire({
                                title: 'Edit Account',
                                html: "\n        <div class=\"form-group\">\n          <label for=\"user-name-input\">Name</label>\n          <input type=\"text\" class=\"form-control\" value=\"" + user.name + "\" id=\"user-name-input\" placeholder=\"John Doe\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"user-email-input\">Email</label>\n          <input type=\"text\" class=\"form-control\" value=\"" + user.email + "\"\n          id=\"user-email-input\" placeholder=\"someone@example.com\" autocomplete=\"no\">\n        </div>",
                                focusConfirm: false,
                                showLoaderOnConfirm: true,
                                confirmButtonColor: 'var(--primary)',
                                preConfirm: function () {
                                    return {
                                        // tslint:disable-next-line: no-string-literal
                                        name: document.getElementById('user-name-input')['value'],
                                        // tslint:disable-next-line: no-string-literal
                                        email: document.getElementById('user-email-input')['value']
                                    };
                                }
                            })];
                    case 1:
                        formValues = (_a.sent()).value;
                        if (formValues) {
                            this.user.updateUser(user._id, formValues).subscribe(function (res) {
                                _this.utils.showToast({ title: 'Successfuly updated your account details!', type: 'success' });
                                _this.thisUser = res.data;
                                _this.user.saveUser(_this.thisUser);
                            }, function (err) {
                                _this.utils.showToast({ title: err, type: 'error' });
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.markTodo = function (todo) {
        var _this = this;
        this.user.markTodo(todo._id, !todo.isComplete).subscribe(function (res) {
            _this.utils.showToast({ title: "Marked to-do as " + (todo.isComplete ? 'undone 😞' : 'done 😊'), type: 'success' });
            _this.goal.todos = _this.goal.todos.map(function (todoObj) { return (todoObj._id === res.data._id) ? res.data : todoObj; });
            var meta = {
                totalTodos: { value: _this.goal.todos.length },
                completedTodos: { value: _this.goal.todos.filter(function (todoObj) { return todoObj.isComplete; }).length }
            };
            _this.goal.meta = meta;
            _this.goal = _this.formatGoal(_this.goal);
            _this.goals = _this.goals.map(function (goalObj) { return (goalObj._id === _this.goal._id) ? _this.goal : goalObj; })
                .sort(_this.sortLatest);
        }, function (err) {
            _this.utils.showToast({ title: err, type: 'error' });
        });
    };
    DashboardComponent.prototype.getGoalsMetric = function (completed) {
        if (completed === void 0) { completed = true; }
        return this.goals.filter(function (goal) { return goal.isComplete === completed; }).length;
    };
    DashboardComponent.prototype.finishCount = function (goal) {
        this.goalScheduleText[goal._id] = 'In Progress';
    };
    DashboardComponent.prototype.getGoalProgress = function (goal) {
        if (!goal.meta) {
            return 0;
        }
        var totalTodos = goal.meta.totalTodos ? goal.meta.totalTodos.value : 0;
        var completedTodos = goal.meta.completedTodos ? goal.meta.completedTodos.value : 0;
        return Math.floor((completedTodos / totalTodos) * 100);
    };
    DashboardComponent.prototype.formatGoal = function (goal, onLoad) {
        if (onLoad === void 0) { onLoad = true; }
        goal.isComplete = this.goalIsComplete(goal);
        goal.progress = this.getGoalProgress(goal);
        return goal;
    };
    DashboardComponent.prototype.goalIsComplete = function (goal) {
        return goal.meta &&
            goal.meta.totalTodos &&
            goal.meta.completedTodos &&
            (goal.meta.totalTodos.value === goal.meta.completedTodos.value);
    };
    DashboardComponent.prototype.sortLatest = function (a, b) {
        b = new Date(b.updatedAt);
        a = new Date(a.updatedAt);
        return b - a;
    };
    DashboardComponent.prototype.parseScheduleDate = function (scheduleDate) {
        var d = new Date(scheduleDate);
        return d.getFullYear() + "-" + (d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth()) + "-" + (d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newGoalCard', { static: false })
    ], DashboardComponent.prototype, "goalCard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('singleGoalCard', { static: false })
    ], DashboardComponent.prototype, "singleGoalCard", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#highlighted {\r\n  position: relative;\r\n  background-color: #007bff;\r\n}\r\n\r\n@media (min-width: 992px) {}\r\n\r\n#highlighted .container-fluid {\r\n  margin-bottom: 2.5rem;\r\n}\r\n\r\n#highlighted .container-fluid h1,\r\n#highlighted .container-fluid p {\r\n  color: #FFF;\r\n}\r\n\r\n.h1,\r\nh1 {\r\n  font-size: 54.93px;\r\n}\r\n\r\n.h1,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-style: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  color: #414141;\r\n}\r\n\r\n.h1,\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nhtml {\r\n  font-weight: 300;\r\n}\r\n\r\n#content {\r\n  background-position: right bottom;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.interior-page {\r\n  background-color: #FFF;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n#highlighted+#content.interior-page .interior-page-nav {\r\n  margin-top: -4em;\r\n}\r\n\r\n#highlighted+#content.interior-page .interior-page-nav,\r\n.interior-page .interior-page-nav {\r\n  padding-left: 0;\r\n}\r\n\r\n.sidebar {\r\n  margin-top: 2em;\r\n}\r\n\r\n@media (min-width: 1200px) {}\r\n\r\n.col-lg-2 {\r\n  width: 16.66666667%;\r\n}\r\n\r\n.content-area-right {\r\n  max-width: 1200px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.container-fluid>.row h2.crumb-title {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.page-title {\r\n  min-height: 50px;\r\n}\r\n\r\n.page-title,\r\nul {\r\n  margin: 0;\r\n  list-style: none;\r\n}\r\n\r\n.content-crumb-div {\r\n  margin: 5px 0 20px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.container-fluid .row .modal,\r\n.page .modal {\r\n  position: fixed;\r\n  top: 35%;\r\n}\r\n\r\n#highlighted+#content.interior-page .interior-page-nav,\r\n.interior-page .interior-page-nav {\r\n  padding-left: 0;\r\n}\r\n\r\n#highlighted+#content.interior-page .interior-page-nav {\r\n  margin-top: -4em;\r\n}\r\n\r\n.dynamicDiv.panel-group {\r\n  border: 1px solid #E7E9E9;\r\n  margin-left: 30px;\r\n}\r\n\r\n.panel-group {\r\n  margin-bottom: 0;\r\n  background-color: #fff;\r\n}\r\n\r\n.panel-group .panel {\r\n  border-radius: 0;\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.panel-group .panel-heading {\r\n  padding: 0;\r\n  border: none;\r\n}\r\n\r\n.panel-default>.panel-heading {\r\n  color: #333;\r\n  background-color: #f5f5f5;\r\n  border-color: #ddd;\r\n}\r\n\r\n.panel-group .panel-heading .panel-title {\r\n  font-size: 1.1em;\r\n  font-family: Verlag, museo-sans, 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.interior-page-nav .panel-group .panel-heading .panel-title a {\r\n  background: 0 0;\r\n}\r\n\r\n.panel-group .panel-heading .panel-title a {\r\n  display: block;\r\n  padding: 15px 45px 15px 15px;\r\n  background: url(/resources/images/misc/icon_accordion-open.png) 95% center no-repeat #f6f6f6;\r\n}\r\n\r\nspan.subMenuHighlight,\r\nul.panel-heading li.panel-title a:hover {\r\n  color: #ED3C95;\r\n}\r\n\r\n.panel-group .panel-heading .panel-title {\r\n  font-size: 1.1em;\r\n  font-family: Verlag, museo-sans, 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\nul.panel-heading {\r\n  margin-bottom: 1px;\r\n}\r\n\r\n.panel-group .panel-heading .panel-title a {\r\n  display: block;\r\n  padding: 15px 45px 15px 15px;\r\n  background: url(/resources/images/misc/icon_accordion-open.png) 95% center no-repeat #f6f6f6;\r\n}\r\n\r\n.panel-group {\r\n  margin-bottom: 0;\r\n  background-color: #fff;\r\n}\r\n\r\n.label-default {\r\n  background-color: #FFF;\r\n  margin-top: 10px;\r\n}\r\n\r\nlabel {\r\n  display: inline-block;\r\n  margin-bottom: 5px;\r\n  font-weight: 700;\r\n}\r\n\r\n.form-control {\r\n  border-radius: 0;\r\n}\r\n\r\n.btn-primary {\r\n  color: #fff;\r\n  background-color: #007bff;\r\n  border-color: #cbb9fc;\r\n  width: 100%;\r\n}\r\n\r\n.btn-block {\r\n  display: block;\r\n}\r\n\r\n.btn {\r\n  padding: 8px 28px;\r\n  font-weight: 400;\r\n  transition: background .3s ease-in;\r\n  white-space: normal;\r\n  border-width: 0 0 1px;\r\n}\r\n\r\n.content-area-right {\r\n  margin-top: 10px;\r\n}\r\n\r\ninput[type=password] {\r\n  width: 100%;\r\n  padding: 12px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  margin-top: 6px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\ninput[type=text] {\r\n  width: 100%;\r\n  padding: 12px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  margin-top: 6px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\ninput [type=submit] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.container {\r\n  border-radius: 5px;\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQSwyQkFBMkI7O0FBRTNCO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7Ozs7RUFPRSxpTUFBaU07RUFDak0sY0FBYztBQUNoQjs7QUFFQTs7Ozs7Ozs7O0VBU0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsNEJBQTRCOztBQUU1QjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFFBQVE7QUFDVjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFHRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwrRUFBK0U7QUFDakY7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDRCQUE0QjtFQUM1Qiw0RkFBNEY7QUFDOUY7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwrRUFBK0U7QUFDakY7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLDRGQUE0RjtBQUM5Rjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUVoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hpZ2hsaWdodGVkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7fVxyXG5cclxuI2hpZ2hsaWdodGVkIC5jb250YWluZXItZmx1aWQge1xyXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxufVxyXG5cclxuI2hpZ2hsaWdodGVkIC5jb250YWluZXItZmx1aWQgaDEsXHJcbiNoaWdobGlnaHRlZCAuY29udGFpbmVyLWZsdWlkIHAge1xyXG4gIGNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG4uaDEsXHJcbmgxIHtcclxuICBmb250LXNpemU6IDU0LjkzcHg7XHJcbn1cclxuXHJcbi5oMSxcclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgZm9udC1zdHlsZTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xyXG4gIGNvbG9yOiAjNDE0MTQxO1xyXG59XHJcblxyXG4uaDEsXHJcbmJvZHksXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYsXHJcbmh0bWwge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmludGVyaW9yLXBhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNoaWdobGlnaHRlZCsjY29udGVudC5pbnRlcmlvci1wYWdlIC5pbnRlcmlvci1wYWdlLW5hdiB7XHJcbiAgbWFyZ2luLXRvcDogLTRlbTtcclxufVxyXG5cclxuI2hpZ2hsaWdodGVkKyNjb250ZW50LmludGVyaW9yLXBhZ2UgLmludGVyaW9yLXBhZ2UtbmF2LFxyXG4uaW50ZXJpb3ItcGFnZSAuaW50ZXJpb3ItcGFnZS1uYXYge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge31cclxuXHJcbi5jb2wtbGctMiB7XHJcbiAgd2lkdGg6IDE2LjY2NjY2NjY3JTtcclxufVxyXG5cclxuLmNvbnRlbnQtYXJlYS1yaWdodCB7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQ+LnJvdyBoMi5jcnVtYi10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnBhZ2UtdGl0bGUge1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5wYWdlLXRpdGxlLFxyXG51bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250ZW50LWNydW1iLWRpdiB7XHJcbiAgbWFyZ2luOiA1cHggMCAyMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQgLnJvdyAubW9kYWwsXHJcbi5wYWdlIC5tb2RhbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMzUlO1xyXG59XHJcblxyXG4jaGlnaGxpZ2h0ZWQrI2NvbnRlbnQuaW50ZXJpb3ItcGFnZSAuaW50ZXJpb3ItcGFnZS1uYXYsXHJcbi5pbnRlcmlvci1wYWdlIC5pbnRlcmlvci1wYWdlLW5hdiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4jaGlnaGxpZ2h0ZWQrI2NvbnRlbnQuaW50ZXJpb3ItcGFnZSAuaW50ZXJpb3ItcGFnZS1uYXYge1xyXG4gIG1hcmdpbi10b3A6IC00ZW07XHJcbn1cclxuXHJcbi5keW5hbWljRGl2LnBhbmVsLWdyb3VwIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRTdFOUU5O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4ucGFuZWwtZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnBhbmVsLWdyb3VwIC5wYW5lbCB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ucGFuZWwtZGVmYXVsdD4ucGFuZWwtaGVhZGluZyB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXItY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAucGFuZWwtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZm9udC1mYW1pbHk6IFZlcmxhZywgbXVzZW8tc2FucywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmludGVyaW9yLXBhZ2UtbmF2IC5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAucGFuZWwtdGl0bGUgYSB7XHJcbiAgYmFja2dyb3VuZDogMCAwO1xyXG59XHJcblxyXG4ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLnBhbmVsLXRpdGxlIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDE1cHggNDVweCAxNXB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKC9yZXNvdXJjZXMvaW1hZ2VzL21pc2MvaWNvbl9hY2NvcmRpb24tb3Blbi5wbmcpIDk1JSBjZW50ZXIgbm8tcmVwZWF0ICNmNmY2ZjY7XHJcbn1cclxuXHJcbnNwYW4uc3ViTWVudUhpZ2hsaWdodCxcclxudWwucGFuZWwtaGVhZGluZyBsaS5wYW5lbC10aXRsZSBhOmhvdmVyIHtcclxuICBjb2xvcjogI0VEM0M5NTtcclxufVxyXG5cclxuLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5wYW5lbC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBmb250LWZhbWlseTogVmVybGFnLCBtdXNlby1zYW5zLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG51bC5wYW5lbC1oZWFkaW5nIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuXHJcbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAucGFuZWwtdGl0bGUgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTVweCA0NXB4IDE1cHggMTVweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoL3Jlc291cmNlcy9pbWFnZXMvbWlzYy9pY29uX2FjY29yZGlvbi1vcGVuLnBuZykgOTUlIGNlbnRlciBuby1yZXBlYXQgI2Y2ZjZmNjtcclxufVxyXG5cclxuLnBhbmVsLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5sYWJlbC1kZWZhdWx0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBib3JkZXItY29sb3I6ICNjYmI5ZmM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idG4tYmxvY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBwYWRkaW5nOiA4cHggMjhweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZS1pbjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcyBlYXNlLWluO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xyXG59XHJcblxyXG4uY29udGVudC1hcmVhLXJpZ2h0IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbmlucHV0IFt0eXBlPXN1Ym1pdF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")]
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-body {\r\n  padding-top: 80px;\r\n}\r\n\r\n.row {\r\n  padding-top: 62px;\r\n}\r\n\r\nnav {\r\n  padding-top: 20px;\r\n}\r\n\r\n.navbar-nav .nav-item a,\r\n.navbar-nav .nav-item a:hover {\r\n  color: black;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar-nav .item {\r\n  font-size: 1.4rem;\r\n  color: black;\r\n}\r\n\r\n#navbarCollapse .navbar {\r\n  background-color: #0d3349;\r\n}\r\n\r\n.note {\r\n  font-size: 20px;\r\n  margin-top: 25px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.register-button {\r\n  outline: none;\r\n}\r\n\r\n.login-trigger {\r\n  margin-right: 20px;\r\n}\r\n\r\n.login-trigger, .register-trigger {\r\n  color: black;\r\n  padding: 10px;\r\n}\r\n\r\n.login-trigger.active,\r\n.login-trigger:hover,\r\n.register-trigger.active,\r\n.register-trigger:hover {\r\n  color: black;\r\n  border: 1px solid black;\r\n  transition: background-color 0.5s ease-out;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .mobile-padding {\r\n    padding-top: 0;\r\n  }\r\n\r\n  .mobile-margin-bottom{\r\n    margin-bottom: 10vh;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .row {\r\n    margin-top: -6%;\r\n    padding-bottom: 9%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBOzs7O0VBSUUsWUFBWTtFQUNaLHVCQUF1QjtFQUl2QiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZS1ib2R5IHtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgcGFkZGluZy10b3A6IDYycHg7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtaXRlbSBhLFxyXG4ubmF2YmFyLW5hdiAubmF2LWl0ZW0gYTpob3ZlciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5pdGVtIHtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNuYXZiYXJDb2xsYXBzZSAubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQzMzQ5O1xyXG59XHJcblxyXG4ubm90ZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWJ1dHRvbiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmxvZ2luLXRyaWdnZXIge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmxvZ2luLXRyaWdnZXIsIC5yZWdpc3Rlci10cmlnZ2VyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmxvZ2luLXRyaWdnZXIuYWN0aXZlLFxyXG4ubG9naW4tdHJpZ2dlcjpob3ZlcixcclxuLnJlZ2lzdGVyLXRyaWdnZXIuYWN0aXZlLFxyXG4ucmVnaXN0ZXItdHJpZ2dlcjpob3ZlciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2Utb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2Utb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLW91dDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5tb2JpbGUtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5tb2JpbGUtbWFyZ2luLWJvdHRvbXtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAucm93IHtcclxuICAgIG1hcmdpbi10b3A6IC02JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA5JTtcclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.sign = 'login';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    background-color: rgba(255, 255, 255, 0.9);\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.access-title {\r\n    margin-top: 30px;\r\n    margin-bottom: 70px;\r\n}\r\n\r\n.input-group {\r\n   padding-bottom: 10px;\r\n}\r\n\r\n.input-group, .btn-block {\r\n    width: 80%;\r\n}\r\n\r\n.btn-block {\r\n    margin-top: 50px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .card {\r\n        width: 90%;\r\n        margin-bottom: 40px;\r\n        margin-top: 0;\r\n        top: 0;\r\n        bottom: 0;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBDQUEwQztJQUMxQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0dBQ0csb0JBQW9CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixNQUFNO1FBQ04sU0FBUztJQUNiO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5hY2Nlc3MtdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAsIC5idG4tYmxvY2sge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmJ0bi1ibG9jayB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(user, utils) {
        this.user = user;
        this.utils = utils;
        this.loading = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (userData) {
        var _this = this;
        this.loading = true;
        this.user.login(userData).subscribe(function (res) {
            _this.loginForm.reset();
            _this.user.saveUser(res.data, true);
            _this.loading = false;
            _this.utils.showToast({ title: 'Successfully logged in', type: 'success' });
        }, function (err) {
            _this.loading = false;
            _this.utils.showToast({ title: err, type: 'error' });
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    background-color: rgba(255, 255, 255, 0.9);\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.access-title {\r\n    margin-top: 30px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.input-group, .btn-block {\r\n    width: 80%;\r\n}\r\n\r\n.btn-block {\r\n    margin-top: 36px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .card {\r\n        width: 90%;\r\n        margin-bottom: 40px;\r\n        margin-top: 0;\r\n        top: 0;\r\n        bottom: 0;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBDQUEwQztJQUMxQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixNQUFNO1FBQ04sU0FBUztJQUNiO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5hY2Nlc3MtdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCwgLmJ0bi1ibG9jayB7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uYnRuLWJsb2NrIHtcclxuICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(user, utils, router) {
        this.user = user;
        this.utils = utils;
        this.router = router;
        this.loading = false;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function (userData) {
        var _this = this;
        this.loading = true;
        this.user.register(userData).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var token;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.signupForm.reset();
                        this.utils.showToast({ title: 'Successfully signed up!', type: 'success' });
                        return [4 /*yield*/, swal.fire({
                                title: 'A verification code has been sent to your email.',
                                text: 'Enter the 6-digit code here',
                                input: 'text',
                                showCancelButton: true
                            })];
                    case 1:
                        token = (_a.sent()).value;
                        if (token) {
                            this.user.verify(token).subscribe(function (user) {
                                _this.loading = false;
                                _this.user.saveUser(user.data, true);
                                _this.utils.showToast({ title: 'Verification complete! You\'re logged in.', type: 'success' });
                            }, function (err) {
                                _this.loading = false;
                                _this.utils.showToast({ title: err, type: 'error' });
                            });
                        }
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        }); }, function (err) {
            _this.loading = false;
            _this.utils.showToast({ title: err, type: 'error' });
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        // retrieve the token from the url after user clicked the link in the email
        this.token = this.activatedRoute.snapshot.paramMap.get('token');
    };
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/reset-password/reset-password.component.css")]
        })
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var UserService = /** @class */ (function () {
    function UserService(api) {
        this.api = api;
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.isLoggedIn.next(Boolean(this.getUserObj()));
    }
    UserService.prototype.login = function (user) {
        return this.api.post('users/login', user);
    };
    UserService.prototype.register = function (user) {
        return this.api.post('users', user);
    };
    UserService.prototype.verify = function (token) {
        return this.api.post('users/verify', { token: token });
    };
    UserService.prototype.logout = function () {
        this.removeUser();
        this.isLoggedIn.next(false);
    };
    UserService.prototype.getLoggedInStatus = function () {
        return this.isLoggedIn.asObservable();
    };
    UserService.prototype.saveUser = function (user, triggerLoggedIn) {
        if (triggerLoggedIn === void 0) { triggerLoggedIn = false; }
        if (triggerLoggedIn) {
            this.isLoggedIn.next(true);
        }
        return localStorage.setItem('user', JSON.stringify(user));
    };
    UserService.prototype.getUserObj = function () {
        var user = localStorage.getItem('user');
        return user || user === 'undefined' ? JSON.parse(user) : undefined;
    };
    UserService.prototype.updateUser = function (id, data) {
        var headers = this.getAuthHeader();
        return this.api.put("users/" + id, data, { headers: headers });
    };
    UserService.prototype.removeUser = function () {
        return localStorage.removeItem('user');
    };
    /* Goals */
    UserService.prototype.createGoal = function (goal) {
        var _a = this.getUserObj(), _id = _a._id, token = _a.token;
        var headers = this.getAuthHeader(token);
        goal.author = _id;
        return this.api.post('goals', goal, { headers: headers });
    };
    UserService.prototype.getGoals = function () {
        var _a = this.getUserObj(), _id = _a._id, token = _a.token;
        var headers = this.getAuthHeader(token);
        return this.api.get("goals/author/" + _id, null, { headers: headers });
    };
    UserService.prototype.getSingleGoal = function (id) {
        var headers = this.getAuthHeader();
        return this.api.get("goals/" + id, null, { headers: headers });
    };
    UserService.prototype.updateGoal = function (id, data) {
        var headers = this.getAuthHeader();
        return this.api.put("goals/" + id, data, { headers: headers });
    };
    UserService.prototype.removeGoal = function (id) {
        var headers = this.getAuthHeader();
        return this.api.delete("goals/" + id, { headers: headers });
    };
    /* Todos */
    UserService.prototype.createTodo = function (goal, todo) {
        var headers = this.getAuthHeader();
        todo.goal = goal;
        return this.api.post('todos', todo, { headers: headers });
    };
    UserService.prototype.removeTodo = function (todo) {
        var headers = this.getAuthHeader();
        return this.api.delete('todos/' + todo, { headers: headers });
    };
    UserService.prototype.markTodo = function (id, isComplete) {
        var headers = this.getAuthHeader();
        return this.api.put("todos/" + id, { isComplete: isComplete }, { headers: headers });
    };
    UserService.prototype.getAuthHeader = function (token) {
        if (!token) {
            token = this.getUserObj().token;
        }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
    };
    UserService.prototype.getAvatarInitials = function (text) {
        var initials = text ?
            ("" + (text.split(' ')[0] ? text.split(' ')[0][0] : '') + (text.split(' ')[1] ? text.split(' ')[1][0] : ''))
                .toUpperCase() : '!';
        var color = this.stringToHslColor(text || '!', 65, 70);
        return { initials: initials, color: color };
    };
    UserService.prototype.stringToHslColor = function (text, saturation, lightness) {
        var hash = 0;
        for (var i = 0; i < text.length; i++) {
            // tslint:disable-next-line: no-bitwise
            hash = text.charCodeAt(i) + ((hash << 5) - hash);
        }
        var h = hash % 360;
        return 'hsl(' + h + ', ' + saturation + '%, ' + lightness + '%)';
    };
    UserService.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/util.service.ts":
/*!*********************************!*\
  !*** ./src/app/util.service.ts ***!
  \*********************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UtilService = /** @class */ (function () {
    function UtilService() {
        this.initSwal();
    }
    UtilService.prototype.initSwal = function () {
        this.toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });
    };
    UtilService.prototype.showAlert = function (opts) {
        return swal.fire({
            title: opts.title,
            text: opts.message,
            confirmButtonColor: 'var(--primary)'
        });
    };
    UtilService.prototype.showToast = function (opts) {
        return this.toast.fire({
            type: opts.type || 'success',
            title: opts.title
        });
    };
    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UtilService);
    return UtilService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Fatima\Desktop\angular\iris-goal-tracker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map