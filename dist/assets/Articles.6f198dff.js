import{A as s}from"./index.ce8651c2.js";import{n as t,q as a,r as e,h as r,M as i,s as n,e as o,f as c,o as d,c as l,b as v,t as m,d as u}from"./vendor.b63c9cab.js";var f={exports:{}},h=f.exports=function(s,t,a){s=s||{};var e=t.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(s,t,a,r){return e.fromToBase(s,t,a,r)}a.en.relativeTime=r,e.fromToBase=function(t,e,i,n,o){for(var c,d,l,v=i.$locale().relativeTime||r,m=s.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],u=m.length,f=0;f<u;f+=1){var h=m[f];h.d&&(c=n?a(t).diff(i,h.d,!0):i.diff(t,h.d,!0));var p=(s.rounding||Math.round)(Math.abs(c));if(l=c>0,p<=h.r||!h.r){p<=1&&f>0&&(h=m[f-1]);var y=v[h.l];o&&(p=o(""+p)),d="string"==typeof y?y.replace("%d",p):y(p,e,h.l,l);break}}if(e)return d;var b=l?v.future:v.past;return"function"==typeof b?b(d):b.replace("%s",d)},e.to=function(s,t){return i(s,t,this,!0)},e.from=function(s,t){return i(s,t,this)};var n=function(s){return s.$u?a.utc():a()};e.toNow=function(s){return this.to(n(this),s)},e.fromNow=function(s){return this.from(n(this),s)}};a.exports.extend(h);const p={name:"Articles",setup(t){let a=n();const i=e({d:o}),c=e({article:null});return r((async()=>{console.log(a.params.articleId);let t=await s.getArticle(a.params.articleId);c.article=t,console.log(t)})),{ctitleObj:ctitleObj,artObj:c,haha:i}},components:{Markdown:i}},y={class:"container"},b=v("div",{class:"cover-photo"},null,-1),M=v("div",{class:"category"},null,-1),g={class:"article-info-group"},x={class:"date"},j={class:"author"},w={class:"article-container"},A=v("div",{class:"article-title"},null,-1),O={class:"article-content"},P=v("div",{class:"article-btn-1"},[v("div",{class:"previous-btn"},"Previous Post"),v("div",{class:"next-btn"},"Next Post")],-1),Y=u('<div class="article-separator"></div><div class="article-btn-2"><div class="analysis-btn">Analysis</div><div class="process-btn">Process</div></div><div class="comment-title">5 Comments</div><div class="comments-container"><div class="comment"><div class="photo"></div><div class="comment-name"></div><div class="comment-separator"></div><div class="comment-date"></div><div class="comment-content"></div><div class="reply-btn"></div><div class="replay"><div class="photo"></div><div class="comment-name"></div><div class="comment-separator"></div><div class="comment-date"></div><div class="comment-content"></div><div class="reply-btn"></div></div></div><div class="comment-title">Leave A Comment</div></div>',4);p.render=function(s,t,a,e,r,i){var n,o;const u=c("Markdown");return d(),l("div",y,[b,M,v("div",g,[v("div",x,m(e.haha.d(null==(n=e.artObj.article)?void 0:n.date).fromNow("DD/MM/YYYY")),1),v("div",j,"BY "+m(s.article.users_permissions_user.username),1)]),v("div",w,[A,v("div",O,[v(u,{langPrefix:"md",source:null==(o=e.artObj.article)?void 0:o.content},null,8,["source"])]),P]),Y])};export default p;
