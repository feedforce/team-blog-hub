_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"2/8+":function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return h}));var r=n("q1tI"),i=n.n(r),s=n("qhaX"),a=n("AAbX"),u=n("Mmls"),o=n("szSY"),c=i.a.createElement,h=!0;e.default=function(t){var e=t.member,n=e.name,r=e.bio,h=e.avatarSrc,l=e.twitterUsername,d=e.githubUsername,f=e.websiteUrl;return c(i.a.Fragment,null,c(u.a,{title:n,path:Object(o.d)(n)}),c("section",{className:"member"},c(a.a,null,c("header",{className:"member-header"},c("div",{className:"member-header__avatar"},c("img",{src:h,alt:n,width:100,height:100,className:"member-header__avatar-img"})),c("h1",{className:"member-header__name"},n),c("p",{className:"member-header__bio"},r),c("div",{className:"member-header__links"},l&&c("a",{href:"https://twitter.com/".concat(l),className:"member-header__link"},c("img",{src:"/icons/twitter.svg",alt:"Twitter\u306e\u30e6\u30fc\u30b6\u30fc@".concat(l),width:22,height:22})),d&&c("a",{href:"https://github.com/".concat(d),className:"member-header__link"},c("img",{src:"/icons/github.svg",alt:"GitHub\u306e\u30e6\u30fc\u30b6\u30fc@".concat(d),width:22,height:22})),f&&c("a",{href:f,className:"member-header__link"},c("img",{src:"/icons/link.svg",alt:"\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306e\u30ea\u30f3\u30af",width:22,height:22})))),c("div",{className:"member-posts-container"},c(s.a,{items:t.postItems})))))}},QgiU:function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};n.en.relativeTime=i;var s=function(e,r,s,a){for(var u,o,c,h=s.$locale().relativeTime||i,l=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],d=l.length,f=0;f<d;f+=1){var m=l[f];m.d&&(u=a?n(e).diff(s,m.d,!0):s.diff(e,m.d,!0));var $=(t.rounding||Math.round)(Math.abs(u));if(c=u>0,$<=m.r||!m.r){$<=1&&f>0&&(m=l[f-1]);var v=h[m.l];o="string"==typeof v?v.replace("%d",$):v($,r,m.l,c);break}}return r?o:(c?h.future:h.past).replace("%s",o)};r.to=function(t,e){return s(t,e,this,!0)},r.from=function(t,e){return s(t,e,this)};var a=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(a(this),t)},r.fromNow=function(t){return this.from(a(this),t)}}}()},SOEV:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/members/[name]",function(){return n("2/8+")}])},Wgwc:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",a="month",u="quarter",o="year",c="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+f(r,2,"0")+":"+f(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,u=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:a,y:o,w:s,d:i,D:c,h:r,m:n,s:e,ms:t,Q:u}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",v={};v[$]=d;var _=function(t){return t instanceof w},p=function(t,e,n){var r;if(!t)return $;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&($=r),r||!n&&$},g=function(t,e){if(_(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},y=m;y.l=p,y.i=_,y.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function d(t){this.$L=this.$L||p(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return g(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<g(t)},f.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,u){var h=this,l=!!y.u(u)||u,d=y.p(t),f=function(t,e){var n=y.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return l?n:n.endOf(i)},m=function(t,e){return y.w(h.toDate()[t].apply(h.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},$=this.$W,v=this.$M,_=this.$D,p="set"+(this.$u?"UTC":"");switch(d){case o:return l?f(1,0):f(31,11);case a:return l?f(1,v):f(0,v+1);case s:var g=this.$locale().weekStart||0,w=($<g?$+7:$)-g;return f(l?_-w:_+(6-w),v);case i:case c:return m(p+"Hours",0);case r:return m(p+"Minutes",1);case n:return m(p+"Seconds",2);case e:return m(p+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,u){var h,l=y.p(s),d="set"+(this.$u?"UTC":""),f=(h={},h[i]=d+"Date",h[c]=d+"Date",h[a]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[l],m=l===i?this.$D+(u-this.$W):u;if(l===a||l===o){var $=this.clone().set(c,1);$.$d[f](m),$.init(),this.$d=$.set(c,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[y.p(t)]()},f.add=function(t,u){var c,h=this;t=Number(t);var l=y.p(u),d=function(e){var n=g(h);return y.w(n.date(n.date()+Math.round(e*t)),h)};if(l===a)return this.set(a,this.$M+t);if(l===o)return this.set(o,this.$y+t);if(l===i)return d(1);if(l===s)return d(7);var f=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[l]||1,m=this.$d.getTime()+t*f;return y.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),i=this.$locale(),s=this.$H,a=this.$m,u=this.$M,o=i.weekdays,c=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return y.s(s%12||12,t,"0")},f=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:y.s(u+1,2,"0"),MMM:h(i.monthsShort,u,c,3),MMMM:h(c,u),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:y.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return n.replace(l,(function(t,e){return e||m[t]||r.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,h){var l,d=y.p(c),f=g(t),m=6e4*(f.utcOffset()-this.utcOffset()),$=this-f,v=y.m(this,f);return v=(l={},l[o]=v/12,l[a]=v,l[u]=v/3,l[s]=($-m)/6048e5,l[i]=($-m)/864e5,l[r]=$/36e5,l[n]=$/6e4,l[e]=$/1e3,l)[d]||$,h?v:y.a(v)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return v[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=p(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}(),M=w.prototype;return g.prototype=M,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",a],["$y",o],["$D",c]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),g.extend=function(t,e){return t(e,w,g),g},g.locale=p,g.isDayjs=_,g.unix=function(t){return g(1e3*t)},g.en=v[$],g.Ls=v,g}()},qhaX:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("q1tI"),i=n.n(r),s=n("YFqc"),a=n.n(s),u=n("Wgwc"),o=n.n(u),c=n("QgiU"),h=n.n(c),l=n("szSY"),d=i.a.createElement;o.a.extend(h.a);var f=function(t){var e=t.item,n=e.authorName,r=e.title,i=e.isoDate,s=e.link,u=e.dateMiliSeconds,c=Object(l.c)(n);if(!c)return null;var h=Object(l.b)(s);return d("article",{className:"post-link"},d(a.a,{href:Object(l.d)(c.name),passHref:!0},d("a",{className:"post-link__author"},d("img",{src:c.avatarSrc,className:"post-link__author-img",width:35,height:35}),d("div",{className:"post-link__author-name"},d("div",{className:"post-link__author-name"},c.name),d("time",{dateTime:i,className:"post-link__date"},o()(i).fromNow())))),d("a",{href:s,className:"post-link__main-link"},d("h2",{className:"post-link__title"},r),h&&d("div",{className:"post-link__site"},d("img",{src:Object(l.a)(h),width:14,height:14,className:"post-link__site-favicon"}),h)),u&&u>Date.now()-2592e5&&d("div",{className:"post-link__new-label"},"NEW"))},m=function(t){var e,n=Object(r.useState)(32),s=n[0],a=n[1],u=(null===(e=t.items)||void 0===e?void 0:e.length)||0,o=u-s>0;return u?d(i.a.Fragment,null,d("div",{className:"post-list"},t.items.slice(0,s).map((function(t,e){return d(f,{key:"post-item-".concat(e),item:t})}))),o&&d("div",{className:"post-list-load"},d("button",{onClick:function(){return a(s+32)},className:"post-list-load__button"},"LOAD MORE"))):d("div",{className:"post-list-empty"},"No posts yet")}}},[["SOEV",0,2,1,3]]]);