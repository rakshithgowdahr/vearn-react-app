(this.webpackJsonpvidly=this.webpackJsonpvidly||[]).push([[0],{40:function(e,t,a){e.exports=a(78)},45:function(e,t,a){},74:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),s=a.n(o),l=a(84),c=(a(45),a(3)),i=a(8),u=a(4),m=a(5),p=a(85),d=a(39),v=a(83),h=a(20),f=a(25),b=a.n(f),g=a(21),E=a(17),y=a.n(E);var k={init:function(){},log:function(e){console.error(e)}};y.a.defaults.baseURL="https://veran-api.herokuapp.com/api",y.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(k.log(e),h.b.error("An unexpected error occured")),Promise.reject(e)}));var S={get:y.a.get,post:y.a.post,put:y.a.put,delete:y.a.delete,setJwt:function(e){y.a.defaults.headers.common["x-auth-token"]=e}};function j(e,t){return S.post("/auth",{email:e,password:t})}function O(){try{var e=localStorage.getItem("token");return b()(e)}catch(t){return null}}S.setJwt(localStorage.getItem("token"));var w=function(e){e.path;var t=e.component,a=e.render,n=Object(g.a)(e,["path","component","render"]);return r.a.createElement(d.a,Object.assign({},n,{render:function(e){return O()?t?r.a.createElement(t,e):a(e):r.a.createElement(v.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},N=a(11),C=a(31),x=a(6),I=a.n(x),P=a(13),R=a(30);function _(e){return"".concat("/movies","/").concat(e)}function D(e){return S.get(_(e))}function G(e){if(e._id){var t=Object(N.a)({},e);return delete t._id,S.put(_(e._id),t)}return S.post("/movies",e)}function M(e){return S.delete(_(e))}function A(){return S.get("/genres")}var L=a(15),q=a.n(L);function T(e,t,a){var n=(t-1)*a;return q()(e).slice(n).take(a).value()}var B=function(e){var t=e.items,a=e.textProperty,n=e.valueProperty,o=e.selectedItem,s=e.onItemSelect;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{onClick:function(){return s(e)},key:e[n],className:e===o?"list-group-item active text-center":"list-group-item text-center"},e[a])})))};B.defaultProps={textProperty:"name",valueProperty:"_id"};var F=B,z=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),r.a.createElement("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t,"aria-hidden":"true"})},Q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).raiseSort=function(t){var a=Object(N.a)({},e.props.sortColumn);a.path===t?a.order="asc"===a.order?"desc":"asc":(a.path=t,a.order="asc"),e.props.onSort(a)},e.renderSortIcon=function(t){var a=e.props.sortColumn;return t.path!==a.path?null:"asc"===a.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.columns.map((function(t){return r.a.createElement("th",{className:"clickable",key:t.path||t.key,onClick:function(){return e.raiseSort(t.path)}},t.label,e.renderSortIcon(t))}))))}}]),a}(n.Component),U=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderCell=function(e,t){return t.content?t.content(e):q.a.get(e,t.path)},e.createKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.columns;return r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t._id},n.map((function(a){return r.a.createElement("td",{key:e.createKey(t,a)},e.renderCell(t,a))})))})))}}]),a}(n.Component),J=function(e){var t=e.columns,a=e.sortColumn,n=e.onSort,o=e.data;return r.a.createElement("table",{className:"table"},r.a.createElement(Q,{columns:t,sortColumn:a,onSort:n}),r.a.createElement(U,{columns:t,data:o}))},V=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a),(e=t.call(this)).columns=[{path:"title",label:"Title",content:function(e){return r.a.createElement(R.a,{to:"/movies/".concat(e._id)},e.title)}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return r.a.createElement(z,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}}],e.deleteColumn={key:"delete",content:function(t){return r.a.createElement("button",{onClick:function(){return e.props.onDelete(t)},className:"btn btn-danger btn-sm"},"Delete")}};var n=O();return n&&n.isAdmin&&e.columns.push(e.deleteColumn),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.onSort,n=e.sortColumn;return r.a.createElement(J,{columns:this.columns,data:t,sortColumn:n,onSort:a})}}]),a}(n.Component),W=function(e){var t=e.itemsCount,a=e.pageSize,n=e.currentPage,o=e.onPageChange;console.log(n);var s=Math.ceil(t/a);if(1===s)return null;var l=q.a.range(1,s+1);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},l.map((function(e){return r.a.createElement("li",{key:e,className:e===n?"page-item active":"page-item"},r.a.createElement("a",{className:"page-link",onClick:function(){return o(e)}},e))}))))},K=function(e){e.value;var t=e.onChange;return r.a.createElement("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",onChange:function(e){return t(e.currentTarget.value)}})},$=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],genres:[],pageSize:4,searchQuery:"",selectedGenre:null,currentPage:1,sortColumn:{path:"title",order:"asc"}},e.handleDelete=function(){var t=Object(P.a)(I.a.mark((function t(a){var n,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.movies,r=n.filter((function(e){return e._id!==a._id})),e.setState({movies:r}),t.prev=3,t.next=6,M(a._id);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(3),t.t0.response&&404===t.t0.response.status&&Object(h.b)("This movie has already been deleted"),e.setState({movies:n});case 12:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleLike=function(t){var a=Object(C.a)(e.state.movies),n=a.indexOf(t);t[n]=Object(N.a)({},a[n]),a[n].liked=!a[n].liked,e.setState({movies:a})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleGenreSelect=function(t){e.setState({selectedGenre:t,searchQuery:"",currentPage:1})},e.handleSearch=function(t){e.setState({searchQuery:t,selectedGenre:null,currentPage:1})},e.handleSort=function(t){e.setState({sortColumn:t})},e.getPagedData=function(){var t=e.state,a=t.pageSize,n=t.currentPage,r=t.selectedGenre,o=t.sortColumn,s=t.searchQuery,l=t.movies,c=l;s?c=l.filter((function(e){return e.title.toLowerCase().startsWith(s.toLowerCase())})):r&&r._id&&(c=l.filter((function(e){return e.genre._id===r._id})));var i=T(q.a.orderBy(c,[o.path],[o.order]),n,a);return{totalCount:c.length,data:i}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(P.a)(I.a.mark((function e(){var t,a,n,r,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:return t=e.sent,a=t.data,n=[{_id:"",name:"All Genres"}].concat(Object(C.a)(a)),e.next=7,S.get("/movies");case 7:r=e.sent,o=r.data,this.setState({movies:o,genres:n});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.state.movies.length;var e=this.state,t=e.pageSize,a=e.currentPage,n=e.sortColumn,o=e.searchQuery,s=this.props.user,l=this.getPagedData(),c=l.totalCount,i=l.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement(F,{selectedItem:this.state.selectedGenre,items:this.state.genres,onItemSelect:this.handleGenreSelect})),r.a.createElement("div",{className:"col"},s&&r.a.createElement(R.a,{to:"/movies/new",className:"btn btn-primary",style:{marginBottom:20}},"New Movies"),r.a.createElement("p",null,"Showing ",c," movies in the database"),r.a.createElement(K,{value:o,onChange:this.handleSearch}),r.a.createElement(V,{movies:i,sortColumn:n,onSort:this.handleSort,onDelete:this.handleDelete,onLike:this.handleLike}),r.a.createElement(W,{itemsCount:c,pageSize:t,currentPage:a,onPageChange:this.handlePageChange}))))}}]),a}(n.Component),H=function(){return r.a.createElement("h1",null,"Customers")},X=function(){return r.a.createElement("h1",null,"Rentals.")},Y=function(){return r.a.createElement("h1",null,"Not Found!!")},Z=a(82),ee=function(e){var t=e.user;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(R.a,{className:"navbar-brand",to:"/"},"Vidly"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(Z.a,{className:"nav-link",to:"/movies"},"Movies ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(Z.a,{className:"nav-link",to:"/customers"},"Customers")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(Z.a,{className:"nav-link",to:"/rentals"},"Rentals")),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(Z.a,{className:"nav-link",to:"/login"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(Z.a,{className:"nav-link",to:"/register"},"Register"))),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(Z.a,{className:"nav-link",to:"/profile"},t.name)),r.a.createElement("li",{className:"nav-item"},r.a.createElement(Z.a,{className:"nav-link",to:"/logout"},"Logout"))))))},te=a(9),ae=a.n(te),ne=a(22),re=a(38),oe=function(e){var t=e.name,a=e.label,n=e.error,o=Object(g.a)(e,["name","label","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({},o,{name:t,id:t,className:"form-control"})),n&&r.a.createElement("div",{className:"alert alert-danger"},n))},se=function(e){var t=e.name,a=e.label,n=e.options,o=e.error,s=Object(g.a)(e,["name","label","options","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",Object.assign({name:t,id:t},s,{className:"form-control"}),r.a.createElement("option",{value:""}),n.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))),o&&r.a.createElement("div",{className:"alert alert-danger"},o))},le=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={data:{},errors:{}},e.validate=function(){var t=ae.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var a,n={},r=Object(re.a)(t.details);try{for(r.s();!(a=r.n()).done;){var o=a.value;n[o.path[0]]=o.message}}catch(s){r.e(s)}finally{r.f()}return n},e.validateProperty=function(t){var a=t.name,n=t.value,r=Object(ne.a)({},a,n),o=Object(ne.a)({},a,e.schema[a]),s=ae.a.validate(r,o).error;return s?s.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||e.doSubmit()},e.handleChange=function(t){var a=t.currentTarget,n=Object(N.a)({},e.state.errors),r=e.validateProperty(a);r?n[a.name]=r:delete n[a.name];var o=Object(N.a)({},e.state.data);o[a.name]=a.value,e.setState({data:o,errors:n})},e.renderButton=function(t){return r.a.createElement("button",{disabled:e.validate(),className:"btn btn-primary"},t)},e.renderSelect=function(t,a,n){var o=e.state,s=o.data,l=o.errors;return r.a.createElement(se,{name:t,value:s[t],label:a,options:n,onChange:e.handleChange,error:l[t]})},e.renderInput=function(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",o=e.state,s=o.data,l=o.errors;return r.a.createElement(oe,{type:n,name:t,value:s[t],label:a,error:l[t],onChange:e.handleChange})},e}return a}(n.Component),ce=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],errors:{}},e.schema={_id:ae.a.string(),title:ae.a.string().required().label("Title"),genreId:ae.a.string().required().label("Genre"),numberInStock:ae.a.number().required().min(0).max(100).label("Number In Stock"),dailyRentalRate:ae.a.number().required().min(0).max(10).label("Daily Rental Rate")},e}return Object(i.a)(a,[{key:"populateGenres",value:function(){var e=Object(P.a)(I.a.mark((function e(){var t,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,a=t.data,this.setState({genres:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"populateMovie",value:function(){var e=Object(P.a)(I.a.mark((function e(){var t,a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"new"!==(t=this.props.match.params.id)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,D(t);case 6:a=e.sent,n=a.data,this.setState({data:this.mapToViewModel(n)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status&&this.props.history.replace("/not-found");case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(P.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.populateGenres();case 2:return e.next=4,this.populateMovie();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"doSubmit",value:function(){var e=Object(P.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(this.state.data);case 2:this.props.history.push("/movies");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Movie Form"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("title","Title"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number In Stock","number"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save")))}}]),a}(le),ie=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:""},errors:{}},e.schema={username:ae.a.string().required().label("Username"),password:ae.a.string().required().label("Password")},e.doSubmit=Object(P.a)(I.a.mark((function t(){var a,n,r,o,s;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.state.data,t.next=4,j(a.username,a.password);case 4:n=t.sent,r=n.data,localStorage.setItem("token",r),o=e.props.location.state,window.location=o?o.from.pathname:"/login",t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((s=Object(N.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:s}));case 14:case"end":return t.stop()}}),t,null,[[0,11]])}))),e}return Object(i.a)(a,[{key:"render",value:function(){return O()?r.a.createElement(v.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Login")))}}]),a}(le),ue=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){localStorage.removeItem("token"),window.location="/"}},{key:"render",value:function(){return null}}]),a}(n.Component);function me(e){return S.post("/users",{email:e.username,password:e.password,name:e.name})}var pe=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:"",name:""},errors:{}},e.schema={username:ae.a.string().required().email().label("Username"),password:ae.a.string().required().min(5).label("Password"),name:ae.a.string().required().label("Name")},e.doSubmit=Object(P.a)(I.a.mark((function t(){var a,n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,me(e.state.data);case 3:a=t.sent,localStorage.setItem("token",a.headers["x-auth-token"]),window.location="/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((n=Object(N.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:n}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderButton("Register")))}}]),a}(le),de=(a(74),a(75),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){try{var e=localStorage.getItem("token"),t=b()(e);this.setState({user:t})}catch(a){}}},{key:"render",value:function(){var e=this,t=this.state.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null),r.a.createElement(ee,{user:t}),r.a.createElement("main",{className:"container"},r.a.createElement(p.a,null,r.a.createElement(d.a,{path:"/login",component:ie}),r.a.createElement(d.a,{path:"/logout",component:ue}),r.a.createElement(d.a,{path:"/register",component:pe}),r.a.createElement(w,{path:"/movies/:id",component:ce}),r.a.createElement(d.a,{path:"/movies",render:function(t){return r.a.createElement($,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(d.a,{path:"/customers",component:H}),r.a.createElement(d.a,{path:"/rentals",component:X}),r.a.createElement(d.a,{path:"/not-found",component:Y}),r.a.createElement(v.a,{exact:!0,from:"/",to:"/movies"}),r.a.createElement(v.a,{to:"/not-found"}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(76),a(77);s.a.render(r.a.createElement(l.a,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.b493b9e5.chunk.js.map