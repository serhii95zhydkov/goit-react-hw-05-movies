"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[49],{655:function(t,r,e){e.d(r,{Z:function(){return u}});var n=e(691),a="loader_loader__1AOoV",c=e(184),u=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.s5,{})})}},49:function(t,r,e){e.r(r),e.d(r,{default:function(){return g}});var n=e(861),a=e(439),c=e(757),u=e.n(c),s=e(791),i=e(87),o=e(689),f=e(565),p=e(686),l=e(655),d="trendingList_list__-Q-b4",v="trendingList_link__3QZOl",h="trendingList_container__KkGny",m="trendingList_text__7cBS8",x=e(184),_=function(){var t=(0,s.useState)([]),r=(0,a.Z)(t,2),e=r[0],c=r[1],_=(0,s.useState)(!1),w=(0,a.Z)(_,2),g=w[0],k=w[1],j=(0,s.useState)(!1),y=(0,a.Z)(j,2),Z=y[0],b=y[1],N=(0,o.TH)();(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,k(!0),t.next=4,(0,f.Df)();case 4:r=t.sent,c(r.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),b(!0);case 11:return t.prev=11,k(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]);var L=e.map((function(t){var r=t.title,e=t.id,n=t.poster_path;return(0,x.jsx)("li",{children:(0,x.jsx)(i.rU,{className:v,to:"/movies/".concat(e),state:{from:N},children:(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(n),alt:r,width:220}),(0,x.jsx)("p",{className:m,children:r})]})})},e)}));return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("ul",{className:d,children:[g&&(0,x.jsx)(l.Z,{}),Z?p.Notify.failure("Oop! Something went wrong! Try again later!"):L]})})},w="home_title__MzCla",g=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h1",{className:w,children:"Trending today"}),(0,x.jsx)(_,{})]})}},565:function(t,r,e){e.d(r,{Df:function(){return s},M1:function(){return f},Qu:function(){return i},TP:function(){return o},tx:function(){return p}});var n=e(861),a=e(757),c=e.n(a),u=e(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"133ce26a248c21c85e6798a27724efec"}}),s=function(){var t=(0,n.Z)(c().mark((function t(){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/trending/movie/day");case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/search/movie",{params:{query:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=49.20476813.chunk.js.map