Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g,h="";return b.buffer.push('\n\n                            <div>\n\n                                <div class="col-md-12 btn btn-xs" style="cursor: pointer;"\n                                     data-drag="true"\n                                     data-jqyoui-options="{revert: \'invalid\'}" ng-model="loveConcerts"\n                                     jqyoui-draggable="{index: '),e={},f={},b.buffer.push(o(c._triageMustache.call(a,"$index",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push(',animate:true,placeholder:true}"\n                                     ng-hide="!concert.artist">\n\n                                    <div '),f={"class":a},e={"class":"STRING"},g={hash:{"class":"view.alertClass :col-md-10 :col-lg-10 :col-sm-10 :btn :btn-xs"},contexts:[],types:[],hashContexts:f,hashTypes:e,data:b},b.buffer.push(o((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,g):p.call(a,"bind-attr",g)))),b.buffer.push(">\n\n\n                                        "),e={},f={},b.buffer.push(o(c._triageMustache.call(a,"view.content.artist",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push("\n                                        -\n                                        "),e={},f={},b.buffer.push(o(c._triageMustache.call(a,"view.content.venue",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push(" -\n                                        "),e={},f={},g={hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b},b.buffer.push(o((d=c.formatDate||a.formatDate,d?d.call(a,"view.content.date",g):p.call(a,"formatDate","view.content.date",g)))),b.buffer.push('\n                                    </div>\n\n                                    <div class="col-md-2 col-lg-2 col-sm-2">\n                                        <!-- <button class="btn btn-xs btn-danger glyphicon glyphicon-remove"\n                                                 ng-click="removeConcert(loveConcerts,concert)"></button>-->\n\n                                        <button '),e={},f={},b.buffer.push(o(c.action.call(a,"removeConcert","view.content","",{hash:{},contexts:[a,a,a],types:["STRING","ID","ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push('\n                                                class="btn btn-xs btn-danger glyphicon glyphicon-remove"\n                                                ></button>\n                                    </div>\n                                </div>\n                            </div>\n\n\n\n                        '),h}function g(a,b){var d,e,f,g,h="";return b.buffer.push('\n                        <div>\n\n\n                            <div class="col-md-12 btn btn-xs" style="cursor: pointer;"\n                                 data-drag="true"\n                                 data-jqyoui-options="{revert: \'invalid\'}" ng-model="allConcerts"\n                                 jqyoui-draggable="{index: '),e={},f={},b.buffer.push(o(c._triageMustache.call(a,"$index",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push(',animate:true,placeholder:true}"\n                                 ng-hide="!concert.artist">\n                                <div class="col-md-10 col-lg-10 col-sm-10" ng-class="alertClass(concert)">\n                                    <div '),f={"class":a},e={"class":"STRING"},g={hash:{"class":"view.alertClass :col-md-10 :col-lg-10 :col-sm-10 :btn :btn-xs"},contexts:[],types:[],hashContexts:f,hashTypes:e,data:b},b.buffer.push(o((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,g):p.call(a,"bind-attr",g)))),b.buffer.push(">\n                                        "),e={},f={},b.buffer.push(o(c._triageMustache.call(a,"view.content.artist",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push("\n                                        -\n                                        "),e={},f={},b.buffer.push(o(c._triageMustache.call(a,"view.content.venue",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push(" -\n                                        "),e={},f={},g={hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b},b.buffer.push(o((d=c.formatDate||a.formatDate,d?d.call(a,"view.content.date",g):p.call(a,"formatDate","view.content.date",g)))),b.buffer.push('\n                                    </div>\n                                </div>\n\n                                <div class="col-md-2 col-lg-2 col-sm-2">\n                                    <!--<div class="btn btn-xs btn-danger glyphicon glyphicon-remove"\n                                         ng-click="removeConcert(allConcerts,concert)">-->\n                                    <button '),e={},f={},b.buffer.push(o(c.action.call(a,"removeConcert","view.content",{hash:{},contexts:[a,a],types:["STRING","ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push('\n                                            class="btn btn-xs btn-danger glyphicon glyphicon-remove"\n                                            ></button>\n\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                    '),h}function h(a,b){var d,e,f,g,h="";return b.buffer.push('\n                        <div>\n\n                            <div class="col-md-12 btn btn-xs" style="cursor: pointer;"\n                                 data-drag="true"\n                                 data-jqyoui-options="{revert: \'invalid\'}" ng-model="allConcerts"\n                                 jqyoui-draggable="{index: '),e={},f={},b.buffer.push(o(c._triageMustache.call(a,"$index",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push(',animate:true,placeholder:true}"\n                                 ng-hide="!concert.artist">\n                                <div '),f={"class":a},e={"class":"STRING"},g={hash:{"class":"view.alertClass :col-md-10 :col-lg-10 :col-sm-10 :btn :btn-xs"},contexts:[],types:[],hashContexts:f,hashTypes:e,data:b},b.buffer.push(o((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,g):p.call(a,"bind-attr",g)))),b.buffer.push("\n                                   >\n                                    "),e={},f={},b.buffer.push(o(c._triageMustache.call(a,"view.content.artist",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push("\n                                    -\n                                    "),e={},f={},b.buffer.push(o(c._triageMustache.call(a,"view.content.venue",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push(" -\n                                    "),e={},f={},g={hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b},b.buffer.push(o((d=c.formatDate||a.formatDate,d?d.call(a,"view.content.date",g):p.call(a,"formatDate","view.content.date",g)))),b.buffer.push('\n                                </div>\n\n                                <div class="col-md-2 col-lg-2 col-sm-2">\n                                    <!-- <button class="btn btn-xs btn-danger glyphicon glyphicon-remove"\n                                             ng-click="removeConcert(maybeConcerts,concert)"></button>-->\n                                    <button '),e={},f={},b.buffer.push(o(c.action.call(a,"removeConcert","view.content",{hash:{},contexts:[a,a],types:["STRING","ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push('\n                                            class="btn btn-xs btn-danger glyphicon glyphicon-remove"\n                                            ></button>\n                                </div>\n                            </div>\n                        </div>\n                    '),h}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var i,j,k,l,m,n="",o=this.escapeExpression,p=c.helperMissing,q=this;return e.buffer.push('<div class="container-fluid">\n    <div class="header">\n        <h3 class="text-muted">Welche Konzerte stehen an?</h3>\n    </div>\n    <!--Fixme! Includes-->\n\n    <div class="">\n        <div class="row">\n            <div class="col-md-4">\n\n\n                <div class="panel panel-primary" data-drop="true" ng-model=\'loveConcerts\' jqyoui-droppable>\n                    <div class="panel-heading">Muss ich hin!</div>\n                    <div class="panel-body">\n                        '),k={contentBinding:b},l={contentBinding:"STRING"},m={hash:{contentBinding:"loveConcerts"},inverse:q.noop,fn:q.program(1,f,e),contexts:[b],types:["ID"],hashContexts:k,hashTypes:l,data:e},i=c.collection||b.collection,j=i?i.call(b,"Ember.ConcertCollectionView",m):p.call(b,"collection","Ember.ConcertCollectionView",m),(j||0===j)&&e.buffer.push(j),e.buffer.push('\n\n                    </div>\n                </div>\n\n            </div>\n            <div class="col-md-4">\n                <div class="panel panel-warning" data-drop="true" ng-model=\'allConcerts\' jqyoui-droppable>\n                    <div class="panel-heading">Alle Konzerte</div>\n                <div class="panel-body">\n                    '),k={contentBinding:b},l={contentBinding:"STRING"},m={hash:{contentBinding:"allConcerts"},inverse:q.noop,fn:q.program(3,g,e),contexts:[b],types:["ID"],hashContexts:k,hashTypes:l,data:e},i=c.collection||b.collection,j=i?i.call(b,"Ember.ConcertCollectionView",m):p.call(b,"collection","Ember.ConcertCollectionView",m),(j||0===j)&&e.buffer.push(j),e.buffer.push('\n                </div>\n            </div>\n        </div>\n        <div class="col-md-4">\n            <div class="panel panel-success" data-drop="true" ng-model=\'maybeConcerts\' jqyoui-droppable>\n                <div class="panel-heading">Mal schauen!</div>\n                <div class="panel-body">\n                    '),k={contentBinding:b},l={contentBinding:"STRING"},m={hash:{contentBinding:"maybeConcerts"},inverse:q.noop,fn:q.program(5,h,e),contexts:[b],types:["ID"],hashContexts:k,hashTypes:l,data:e},i=c.collection||b.collection,j=i?i.call(b,"Ember.ConcertCollectionView",m):p.call(b,"collection","Ember.ConcertCollectionView",m),(j||0===j)&&e.buffer.push(j),e.buffer.push('\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-md-9">\n            <form name="addConcertForm" novalidate class="form-inline" role="form">\n                <div class="form-group">\n                    <label class="sr-only">Artist</label>\n                    '),k={value:b,placeholder:b},l={value:"ID",placeholder:"STRING"},m={hash:{value:"newConcert.artist",placeholder:"Künstler"},contexts:[],types:[],hashContexts:k,hashTypes:l,data:e},e.buffer.push(o((i=c.input||b.input,i?i.call(b,m):p.call(b,"input",m)))),e.buffer.push('\n                    <!--<input type="text" name="artist" ng-model="newConcert.artist" placeholder="Künstler"\n                           required>-->\n                </div>\n                <div class="form-group">\n                    <label class="sr-only">Ort</label>\n                    '),k={value:b,placeholder:b},l={value:"ID",placeholder:"STRING"},m={hash:{value:"newConcert.venue",placeholder:"Ort"},contexts:[],types:[],hashContexts:k,hashTypes:l,data:e},e.buffer.push(o((i=c.input||b.input,i?i.call(b,m):p.call(b,"input",m)))),e.buffer.push('\n                    <!--<input type="text" name="venue" ng-model="newConcert.venue" placeholder="Ort" required>-->\n                </div>\n                <div class="form-group">\n                    <label class="sr-only">Datum</label>\n                    '),k={value:b,placeholder:b},l={value:"ID",placeholder:"STRING"},m={hash:{value:"newConcert.dateString",placeholder:"Datum (TT.MM.JJJJ)"},contexts:[],types:[],hashContexts:k,hashTypes:l,data:e},e.buffer.push(o((i=c.input||b.input,i?i.call(b,m):p.call(b,"input",m)))),e.buffer.push('\n                    <!--<input type="datetime" name="date" ng-model="newConcert.date" placeholder="Datum" required>-->\n                </div>\n\n                <button '),l={},k={},e.buffer.push(o(c.action.call(b,"addConcert",{hash:{},contexts:[b],types:["STRING"],hashContexts:k,hashTypes:l,data:e}))),e.buffer.push(' class="btn btn-success glyphicon glyphicon-plus"\n                                                type="submit"></button>\n                <!--<button ng-click="addConcert()" ng-disabled="addConcertForm.$invalid"\n                        class="btn btn-success glyphicon glyphicon-plus"\n                        type="submit"></button>-->\n            </form>\n        </div>\n\n    </div>\n\n</div>\n</div>\n\n<div class="footer">\n    <p>concertEmber</p>\n</div>\n</div>\n'),n}),Ember.TEMPLATES.application_=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push('<div>\n    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#">Your App</a>\n        </div>\n        <div class="collapse navbar-collapse navbar-ex1-collapse">\n        </div>\n    </nav>\n    <div class="container" id="main">\n        <div class="row">\n            <div>\n                <div class="col-md-3">\n                    <div class="well sidebar-nav">\n                        <strong>Colors</strong>\n                        <ul class="list-group">\n\n                            '),f={},g={},e.buffer.push(i(c._triageMustache.call(b,"loveConcerts",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push('\n\n                        </ul>\n                    </div>\n                </div>\n                <div class="col-md-9">\n                    '),f={},g={},e.buffer.push(i(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push("\n                </div>\n            </div>\n        </div>\n    </div>\n\n"),h}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="well">\n    Welcome to Yeoman and Ember.js!\n</div>\n')});