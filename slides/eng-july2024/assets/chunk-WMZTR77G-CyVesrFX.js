import{a as d,l as T,m as u,f as _,b9 as H,ba as it,b8 as yt,v as U,bb as ft,D as xt,E as gt,bc as ut,bd as J,k as K}from"./Mermaid.vue_vue_type_script_setup_true_lang-Dk8oiZ91.js";var bt=d((s,t,a,l)=>{t.forEach(n=>{Mt[n](s,a,l)})},"insertMarkers"),wt=d((s,t,a)=>{u.trace("Making markers for ",a),s.append("defs").append("marker").attr("id",a+"_"+t+"-extensionStart").attr("class","marker extension "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),s.append("defs").append("marker").attr("id",a+"_"+t+"-extensionEnd").attr("class","marker extension "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},"extension"),mt=d((s,t,a)=>{s.append("defs").append("marker").attr("id",a+"_"+t+"-compositionStart").attr("class","marker composition "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),s.append("defs").append("marker").attr("id",a+"_"+t+"-compositionEnd").attr("class","marker composition "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"composition"),vt=d((s,t,a)=>{s.append("defs").append("marker").attr("id",a+"_"+t+"-aggregationStart").attr("class","marker aggregation "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),s.append("defs").append("marker").attr("id",a+"_"+t+"-aggregationEnd").attr("class","marker aggregation "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"aggregation"),kt=d((s,t,a)=>{s.append("defs").append("marker").attr("id",a+"_"+t+"-dependencyStart").attr("class","marker dependency "+t).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),s.append("defs").append("marker").attr("id",a+"_"+t+"-dependencyEnd").attr("class","marker dependency "+t).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},"dependency"),Lt=d((s,t,a)=>{s.append("defs").append("marker").attr("id",a+"_"+t+"-lollipopStart").attr("class","marker lollipop "+t).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),s.append("defs").append("marker").attr("id",a+"_"+t+"-lollipopEnd").attr("class","marker lollipop "+t).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},"lollipop"),St=d((s,t,a)=>{s.append("marker").attr("id",a+"_"+t+"-pointEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),s.append("marker").attr("id",a+"_"+t+"-pointStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"point"),_t=d((s,t,a)=>{s.append("marker").attr("id",a+"_"+t+"-circleEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),s.append("marker").attr("id",a+"_"+t+"-circleStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"circle"),Et=d((s,t,a)=>{s.append("marker").attr("id",a+"_"+t+"-crossEnd").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),s.append("marker").attr("id",a+"_"+t+"-crossStart").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},"cross"),Bt=d((s,t,a)=>{s.append("defs").append("marker").attr("id",a+"_"+t+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"barb"),Mt={extension:wt,composition:mt,aggregation:vt,dependency:kt,lollipop:Lt,point:St,circle:_t,cross:Et,barb:Bt},pr=bt;function Q(s,t){t&&s.attr("style",t)}d(Q,"applyStyle");function lt(s){const t=T(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),a=t.append("xhtml:div"),l=s.label,n=s.isNode?"nodeLabel":"edgeLabel",r=a.append("span");return r.html(l),Q(r,s.labelStyle),r.attr("class",n),Q(a,s.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap"),a.attr("xmlns","http://www.w3.org/1999/xhtml"),t.node()}d(lt,"addHtmlLabel");var Tt=d((s,t,a,l)=>{let n=s||"";if(typeof n=="object"&&(n=n[0]),H(_().flowchart.htmlLabels)){n=n.replace(/\\n|\n/g,"<br />"),u.debug("vertexText"+n);const r={isNode:l,label:ut(J(n)),labelStyle:t.replace("fill:","color:")};return lt(r)}else{const r=document.createElementNS("http://www.w3.org/2000/svg","text");r.setAttribute("style",t.replace("color:","fill:"));let e=[];typeof n=="string"?e=n.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(n)?e=n:e=[];for(const i of e){const c=document.createElementNS("http://www.w3.org/2000/svg","tspan");c.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),c.setAttribute("dy","1em"),c.setAttribute("x","0"),a?c.setAttribute("class","title-row"):c.setAttribute("class","row"),c.textContent=i.trim(),r.appendChild(c)}return r}},"createLabel"),I=Tt,E=d(async(s,t,a,l)=>{const n=_();let r;const e=t.useHtmlLabels||H(n.flowchart.htmlLabels);a?r=a:r="node default";const i=s.insert("g").attr("class",r).attr("id",t.domId||t.id),c=i.insert("g").attr("class","label").attr("style",t.labelStyle);let o;t.labelText===void 0?o="":o=typeof t.labelText=="string"?t.labelText:t.labelText[0];const h=c.node();let p;t.labelType==="markdown"?p=it(c,K(J(o),n),{useHtmlLabels:e,width:t.width||n.flowchart.wrappingWidth,classes:"markdown-node-label"},n):p=h.appendChild(I(K(J(o),n),t.labelStyle,!1,l));let y=p.getBBox();const f=t.padding/2;if(H(n.flowchart.htmlLabels)){const g=p.children[0],v=T(p),x=g.getElementsByTagName("img");if(x){const B=o.replace(/<img[^>]*>/g,"").trim()==="";await Promise.all([...x].map(b=>new Promise(C=>{function S(){if(b.style.display="flex",b.style.flexDirection="column",B){const D=n.fontSize?n.fontSize:window.getComputedStyle(document.body).fontSize,j=parseInt(D,10)*5+"px";b.style.minWidth=j,b.style.maxWidth=j}else b.style.width="100%";C(b)}d(S,"setupImage"),setTimeout(()=>{b.complete&&S()}),b.addEventListener("error",S),b.addEventListener("load",S)})))}y=g.getBoundingClientRect(),v.attr("width",y.width),v.attr("height",y.height)}return e?c.attr("transform","translate("+-y.width/2+", "+-y.height/2+")"):c.attr("transform","translate(0, "+-y.height/2+")"),t.centerLabel&&c.attr("transform","translate("+-y.width/2+", "+-y.height/2+")"),c.insert("rect",":first-child"),{shapeSvg:i,bbox:y,halfPadding:f,label:c}},"labelHelper"),m=d((s,t)=>{const a=t.node().getBBox();s.width=a.width,s.height=a.height},"updateNodeBounds");function R(s,t,a,l){return s.insert("polygon",":first-child").attr("points",l.map(function(n){return n.x+","+n.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-t/2+","+a/2+")")}d(R,"insertPolygonShape");var Ct=d(s=>{const t=new Set;for(const a of s)switch(a){case"x":t.add("right"),t.add("left");break;case"y":t.add("up"),t.add("down");break;default:t.add(a);break}return t},"expandAndDeduplicateDirections"),$t=d((s,t,a)=>{const l=Ct(s),n=2,r=t.height+2*a.padding,e=r/n,i=t.width+2*e+a.padding,c=a.padding/2;return l.has("right")&&l.has("left")&&l.has("up")&&l.has("down")?[{x:0,y:0},{x:e,y:0},{x:i/2,y:2*c},{x:i-e,y:0},{x:i,y:0},{x:i,y:-r/3},{x:i+2*c,y:-r/2},{x:i,y:-2*r/3},{x:i,y:-r},{x:i-e,y:-r},{x:i/2,y:-r-2*c},{x:e,y:-r},{x:0,y:-r},{x:0,y:-2*r/3},{x:-2*c,y:-r/2},{x:0,y:-r/3}]:l.has("right")&&l.has("left")&&l.has("up")?[{x:e,y:0},{x:i-e,y:0},{x:i,y:-r/2},{x:i-e,y:-r},{x:e,y:-r},{x:0,y:-r/2}]:l.has("right")&&l.has("left")&&l.has("down")?[{x:0,y:0},{x:e,y:-r},{x:i-e,y:-r},{x:i,y:0}]:l.has("right")&&l.has("up")&&l.has("down")?[{x:0,y:0},{x:i,y:-e},{x:i,y:-r+e},{x:0,y:-r}]:l.has("left")&&l.has("up")&&l.has("down")?[{x:i,y:0},{x:0,y:-e},{x:0,y:-r+e},{x:i,y:-r}]:l.has("right")&&l.has("left")?[{x:e,y:0},{x:e,y:-c},{x:i-e,y:-c},{x:i-e,y:0},{x:i,y:-r/2},{x:i-e,y:-r},{x:i-e,y:-r+c},{x:e,y:-r+c},{x:e,y:-r},{x:0,y:-r/2}]:l.has("up")&&l.has("down")?[{x:i/2,y:0},{x:0,y:-c},{x:e,y:-c},{x:e,y:-r+c},{x:0,y:-r+c},{x:i/2,y:-r},{x:i,y:-r+c},{x:i-e,y:-r+c},{x:i-e,y:-c},{x:i,y:-c}]:l.has("right")&&l.has("up")?[{x:0,y:0},{x:i,y:-e},{x:0,y:-r}]:l.has("right")&&l.has("down")?[{x:0,y:0},{x:i,y:0},{x:0,y:-r}]:l.has("left")&&l.has("up")?[{x:i,y:0},{x:0,y:-e},{x:i,y:-r}]:l.has("left")&&l.has("down")?[{x:i,y:0},{x:0,y:0},{x:i,y:-r}]:l.has("right")?[{x:e,y:-c},{x:e,y:-c},{x:i-e,y:-c},{x:i-e,y:0},{x:i,y:-r/2},{x:i-e,y:-r},{x:i-e,y:-r+c},{x:e,y:-r+c},{x:e,y:-r+c}]:l.has("left")?[{x:e,y:0},{x:e,y:-c},{x:i-e,y:-c},{x:i-e,y:-r+c},{x:e,y:-r+c},{x:e,y:-r},{x:0,y:-r/2}]:l.has("up")?[{x:e,y:-c},{x:e,y:-r+c},{x:0,y:-r+c},{x:i/2,y:-r},{x:i,y:-r+c},{x:i-e,y:-r+c},{x:i-e,y:-c}]:l.has("down")?[{x:i/2,y:0},{x:0,y:-c},{x:e,y:-c},{x:e,y:-r+c},{x:i-e,y:-r+c},{x:i-e,y:-c},{x:i,y:-c}]:[{x:0,y:0}]},"getArrowPoints");function nt(s,t){return s.intersect(t)}d(nt,"intersectNode");var Nt=nt;function ct(s,t,a,l){var n=s.x,r=s.y,e=n-l.x,i=r-l.y,c=Math.sqrt(t*t*i*i+a*a*e*e),o=Math.abs(t*a*e/c);l.x<n&&(o=-o);var h=Math.abs(t*a*i/c);return l.y<r&&(h=-h),{x:n+o,y:r+h}}d(ct,"intersectEllipse");var ht=ct;function ot(s,t,a){return ht(s,t,t,a)}d(ot,"intersectCircle");var It=ot;function dt(s,t,a,l){var n,r,e,i,c,o,h,p,y,f,g,v,x,B,b;if(n=t.y-s.y,e=s.x-t.x,c=t.x*s.y-s.x*t.y,y=n*a.x+e*a.y+c,f=n*l.x+e*l.y+c,!(y!==0&&f!==0&&V(y,f))&&(r=l.y-a.y,i=a.x-l.x,o=l.x*a.y-a.x*l.y,h=r*s.x+i*s.y+o,p=r*t.x+i*t.y+o,!(h!==0&&p!==0&&V(h,p))&&(g=n*i-r*e,g!==0)))return v=Math.abs(g/2),x=e*o-i*c,B=x<0?(x-v)/g:(x+v)/g,x=r*c-n*o,b=x<0?(x-v)/g:(x+v)/g,{x:B,y:b}}d(dt,"intersectLine");function V(s,t){return s*t>0}d(V,"sameSign");var Rt=dt,Ht=pt;function pt(s,t,a){var l=s.x,n=s.y,r=[],e=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY;typeof t.forEach=="function"?t.forEach(function(g){e=Math.min(e,g.x),i=Math.min(i,g.y)}):(e=Math.min(e,t.x),i=Math.min(i,t.y));for(var c=l-s.width/2-e,o=n-s.height/2-i,h=0;h<t.length;h++){var p=t[h],y=t[h<t.length-1?h+1:0],f=Rt(s,a,{x:c+p.x,y:o+p.y},{x:c+y.x,y:o+y.y});f&&r.push(f)}return r.length?(r.length>1&&r.sort(function(g,v){var x=g.x-a.x,B=g.y-a.y,b=Math.sqrt(x*x+B*B),C=v.x-a.x,S=v.y-a.y,D=Math.sqrt(C*C+S*S);return b<D?-1:b===D?0:1}),r[0]):s}d(pt,"intersectPolygon");var Wt=d((s,t)=>{var a=s.x,l=s.y,n=t.x-a,r=t.y-l,e=s.width/2,i=s.height/2,c,o;return Math.abs(r)*e>Math.abs(n)*i?(r<0&&(i=-i),c=r===0?0:i*n/r,o=i):(n<0&&(e=-e),c=e,o=n===0?0:e*r/n),{x:a+c,y:l+o}},"intersectRect"),Dt=Wt,w={node:Nt,circle:It,ellipse:ht,polygon:Ht,rect:Dt},At=d(async(s,t)=>{t.useHtmlLabels||_().flowchart.htmlLabels||(t.centerLabel=!0);const{shapeSvg:l,bbox:n,halfPadding:r}=await E(s,t,"node "+t.classes,!0);u.info("Classes = ",t.classes);const e=l.insert("rect",":first-child");return e.attr("rx",t.rx).attr("ry",t.ry).attr("x",-n.width/2-r).attr("y",-n.height/2-r).attr("width",n.width+t.padding).attr("height",n.height+t.padding),m(t,e),t.intersect=function(i){return w.rect(t,i)},l},"note"),Xt=At,P=d(s=>s?" "+s:"","formatClass"),N=d((s,t)=>`${t||"node default"}${P(s.classes)} ${P(s.class)}`,"getClassesFromNode"),tt=d(async(s,t)=>{const{shapeSvg:a,bbox:l}=await E(s,t,N(t,void 0),!0),n=l.width+t.padding,r=l.height+t.padding,e=n+r,i=[{x:e/2,y:0},{x:e,y:-e/2},{x:e/2,y:-e},{x:0,y:-e/2}];u.info("Question main (Circle)");const c=R(a,e,e,i);return c.attr("style",t.style),m(t,c),t.intersect=function(o){return u.warn("Intersect called"),w.polygon(t,i,o)},a},"question"),Yt=d((s,t)=>{const a=s.insert("g").attr("class","node default").attr("id",t.domId||t.id),l=28,n=[{x:0,y:l/2},{x:l/2,y:0},{x:0,y:-l/2},{x:-l/2,y:0}];return a.insert("polygon",":first-child").attr("points",n.map(function(e){return e.x+","+e.y}).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),t.width=28,t.height=28,t.intersect=function(e){return w.circle(t,14,e)},a},"choice"),Ut=d(async(s,t)=>{const{shapeSvg:a,bbox:l}=await E(s,t,N(t,void 0),!0),n=4,r=l.height+t.padding,e=r/n,i=l.width+2*e+t.padding,c=[{x:e,y:0},{x:i-e,y:0},{x:i,y:-r/2},{x:i-e,y:-r},{x:e,y:-r},{x:0,y:-r/2}],o=R(a,i,r,c);return o.attr("style",t.style),m(t,o),t.intersect=function(h){return w.polygon(t,c,h)},a},"hexagon"),Ot=d(async(s,t)=>{const{shapeSvg:a,bbox:l}=await E(s,t,void 0,!0),n=2,r=l.height+2*t.padding,e=r/n,i=l.width+2*e+t.padding,c=$t(t.directions,l,t),o=R(a,i,r,c);return o.attr("style",t.style),m(t,o),t.intersect=function(h){return w.polygon(t,c,h)},a},"block_arrow"),jt=d(async(s,t)=>{const{shapeSvg:a,bbox:l}=await E(s,t,N(t,void 0),!0),n=l.width+t.padding,r=l.height+t.padding,e=[{x:-r/2,y:0},{x:n,y:0},{x:n,y:-r},{x:-r/2,y:-r},{x:0,y:-r/2}];return R(a,n,r,e).attr("style",t.style),t.width=n+r,t.height=r,t.intersect=function(c){return w.polygon(t,e,c)},a},"rect_left_inv_arrow"),zt=d(async(s,t)=>{const{shapeSvg:a,bbox:l}=await E(s,t,N(t),!0),n=l.width+t.padding,r=l.height+t.padding,e=[{x:-2*r/6,y:0},{x:n-r/6,y:0},{x:n+2*r/6,y:-r},{x:r/6,y:-r}],i=R(a,n,r,e);return i.attr("style",t.style),m(t,i),t.intersect=function(c){return w.polygon(t,e,c)},a},"lean_right"),Zt=d(async(s,t)=>{const{shapeSvg:a,bbox:l}=await E(s,t,N(t,void 0),!0),n=l.width+t.padding,r=l.height+t.padding,e=[{x:2*r/6,y:0},{x:n+r/6,y:0},{x:n-2*r/6,y:-r},{x:-r/6,y:-r}],i=R(a,n,r,e);return i.attr("style",t.style),m(t,i),t.intersect=function(c){return w.polygon(t,e,c)},a},"lean_left"),Ft=d(async(s,t)=>{const{shapeSvg:a,bbox:l}=await E(s,t,N(t,void 0),!0),n=l.width+t.padding,r=l.height+t.padding,e=[{x:-2*r/6,y:0},{x:n+2*r/6,y:0},{x:n-r/6,y:-r},{x:r/6,y:-r}],i=R(a,n,r,e);return i.attr("style",t.style),m(t,i),t.intersect=function(c){return w.polygon(t,e,c)},a},"trapezoid"),qt=d(async(s,t)=>{const{shapeSvg:a,bbox:l}=await E(s,t,N(t,void 0),!0),n=l.width+t.padding,r=l.height+t.padding,e=[{x:r/6,y:0},{x:n-r/6,y:0},{x:n+2*r/6,y:-r},{x:-2*r/6,y:-r}],i=R(a,n,r,e);return i.attr("style",t.style),m(t,i),t.intersect=function(c){return w.polygon(t,e,c)},a},"inv_trapezoid"),Jt=d(async(s,t)=>{const{shapeSvg:a,bbox:l}=await E(s,t,N(t,void 0),!0),n=l.width+t.padding,r=l.height+t.padding,e=[{x:0,y:0},{x:n+r/2,y:0},{x:n,y:-r/2},{x:n+r/2,y:-r},{x:0,y:-r}],i=R(a,n,r,e);return i.attr("style",t.style),m(t,i),t.intersect=function(c){return w.polygon(t,e,c)},a},"rect_right_inv_arrow"),Qt=d(async(s,t)=>{const{shapeSvg:a,bbox:l}=await E(s,t,N(t,void 0),!0),n=l.width+t.padding,r=n/2,e=r/(2.5+n/50),i=l.height+e+t.padding,c="M 0,"+e+" a "+r+","+e+" 0,0,0 "+n+" 0 a "+r+","+e+" 0,0,0 "+-n+" 0 l 0,"+i+" a "+r+","+e+" 0,0,0 "+n+" 0 l 0,"+-i,o=a.attr("label-offset-y",e).insert("path",":first-child").attr("style",t.style).attr("d",c).attr("transform","translate("+-n/2+","+-(i/2+e)+")");return m(t,o),t.intersect=function(h){const p=w.rect(t,h),y=p.x-t.x;if(r!=0&&(Math.abs(y)<t.width/2||Math.abs(y)==t.width/2&&Math.abs(p.y-t.y)>t.height/2-e)){let f=e*e*(1-y*y/(r*r));f!=0&&(f=Math.sqrt(f)),f=e-f,h.y-t.y>0&&(f=-f),p.y+=f}return p},a},"cylinder"),Vt=d(async(s,t)=>{const{shapeSvg:a,bbox:l,halfPadding:n}=await E(s,t,"node "+t.classes+" "+t.class,!0),r=a.insert("rect",":first-child"),e=t.positioned?t.width:l.width+t.padding,i=t.positioned?t.height:l.height+t.padding,c=t.positioned?-e/2:-l.width/2-n,o=t.positioned?-i/2:-l.height/2-n;if(r.attr("class","basic label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",c).attr("y",o).attr("width",e).attr("height",i),t.props){const h=new Set(Object.keys(t.props));t.props.borders&&(Z(r,t.props.borders,e,i),h.delete("borders")),h.forEach(p=>{u.warn(`Unknown node property ${p}`)})}return m(t,r),t.intersect=function(h){return w.rect(t,h)},a},"rect"),Gt=d(async(s,t)=>{const{shapeSvg:a,bbox:l,halfPadding:n}=await E(s,t,"node "+t.classes,!0),r=a.insert("rect",":first-child"),e=t.positioned?t.width:l.width+t.padding,i=t.positioned?t.height:l.height+t.padding,c=t.positioned?-e/2:-l.width/2-n,o=t.positioned?-i/2:-l.height/2-n;if(r.attr("class","basic cluster composite label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",c).attr("y",o).attr("width",e).attr("height",i),t.props){const h=new Set(Object.keys(t.props));t.props.borders&&(Z(r,t.props.borders,e,i),h.delete("borders")),h.forEach(p=>{u.warn(`Unknown node property ${p}`)})}return m(t,r),t.intersect=function(h){return w.rect(t,h)},a},"composite"),Kt=d(async(s,t)=>{const{shapeSvg:a}=await E(s,t,"label",!0);u.trace("Classes = ",t.class);const l=a.insert("rect",":first-child"),n=0,r=0;if(l.attr("width",n).attr("height",r),a.attr("class","label edgeLabel"),t.props){const e=new Set(Object.keys(t.props));t.props.borders&&(Z(l,t.props.borders,n,r),e.delete("borders")),e.forEach(i=>{u.warn(`Unknown node property ${i}`)})}return m(t,l),t.intersect=function(e){return w.rect(t,e)},a},"labelRect");function Z(s,t,a,l){const n=[],r=d(i=>{n.push(i,0)},"addBorder"),e=d(i=>{n.push(0,i)},"skipBorder");t.includes("t")?(u.debug("add top border"),r(a)):e(a),t.includes("r")?(u.debug("add right border"),r(l)):e(l),t.includes("b")?(u.debug("add bottom border"),r(a)):e(a),t.includes("l")?(u.debug("add left border"),r(l)):e(l),s.attr("stroke-dasharray",n.join(" "))}d(Z,"applyNodePropertyBorders");var Pt=d((s,t)=>{let a;t.classes?a="node "+t.classes:a="node default";const l=s.insert("g").attr("class",a).attr("id",t.domId||t.id),n=l.insert("rect",":first-child"),r=l.insert("line"),e=l.insert("g").attr("class","label"),i=t.labelText.flat?t.labelText.flat():t.labelText;let c="";typeof i=="object"?c=i[0]:c=i,u.info("Label text abc79",c,i,typeof i=="object");const o=e.node().appendChild(I(c,t.labelStyle,!0,!0));let h={width:0,height:0};if(H(_().flowchart.htmlLabels)){const v=o.children[0],x=T(o);h=v.getBoundingClientRect(),x.attr("width",h.width),x.attr("height",h.height)}u.info("Text 2",i);const p=i.slice(1,i.length);let y=o.getBBox();const f=e.node().appendChild(I(p.join?p.join("<br/>"):p,t.labelStyle,!0,!0));if(H(_().flowchart.htmlLabels)){const v=f.children[0],x=T(f);h=v.getBoundingClientRect(),x.attr("width",h.width),x.attr("height",h.height)}const g=t.padding/2;return T(f).attr("transform","translate( "+(h.width>y.width?0:(y.width-h.width)/2)+", "+(y.height+g+5)+")"),T(o).attr("transform","translate( "+(h.width<y.width?0:-(y.width-h.width)/2)+", 0)"),h=e.node().getBBox(),e.attr("transform","translate("+-h.width/2+", "+(-h.height/2-g+3)+")"),n.attr("class","outer title-state").attr("x",-h.width/2-g).attr("y",-h.height/2-g).attr("width",h.width+t.padding).attr("height",h.height+t.padding),r.attr("class","divider").attr("x1",-h.width/2-g).attr("x2",h.width/2+g).attr("y1",-h.height/2-g+y.height+g).attr("y2",-h.height/2-g+y.height+g),m(t,n),t.intersect=function(v){return w.rect(t,v)},l},"rectWithTitle"),tr=d(async(s,t)=>{const{shapeSvg:a,bbox:l}=await E(s,t,N(t,void 0),!0),n=l.height+t.padding,r=l.width+n/4+t.padding,e=a.insert("rect",":first-child").attr("style",t.style).attr("rx",n/2).attr("ry",n/2).attr("x",-r/2).attr("y",-n/2).attr("width",r).attr("height",n);return m(t,e),t.intersect=function(i){return w.rect(t,i)},a},"stadium"),rr=d(async(s,t)=>{const{shapeSvg:a,bbox:l,halfPadding:n}=await E(s,t,N(t,void 0),!0),r=a.insert("circle",":first-child");return r.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",l.width/2+n).attr("width",l.width+t.padding).attr("height",l.height+t.padding),u.info("Circle main"),m(t,r),t.intersect=function(e){return u.info("Circle intersect",t,l.width/2+n,e),w.circle(t,l.width/2+n,e)},a},"circle"),ar=d(async(s,t)=>{const{shapeSvg:a,bbox:l,halfPadding:n}=await E(s,t,N(t,void 0),!0),r=5,e=a.insert("g",":first-child"),i=e.insert("circle"),c=e.insert("circle");return e.attr("class",t.class),i.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",l.width/2+n+r).attr("width",l.width+t.padding+r*2).attr("height",l.height+t.padding+r*2),c.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",l.width/2+n).attr("width",l.width+t.padding).attr("height",l.height+t.padding),u.info("DoubleCircle main"),m(t,i),t.intersect=function(o){return u.info("DoubleCircle intersect",t,l.width/2+n+r,o),w.circle(t,l.width/2+n+r,o)},a},"doublecircle"),er=d(async(s,t)=>{const{shapeSvg:a,bbox:l}=await E(s,t,N(t,void 0),!0),n=l.width+t.padding,r=l.height+t.padding,e=[{x:0,y:0},{x:n,y:0},{x:n,y:-r},{x:0,y:-r},{x:0,y:0},{x:-8,y:0},{x:n+8,y:0},{x:n+8,y:-r},{x:-8,y:-r},{x:-8,y:0}],i=R(a,n,r,e);return i.attr("style",t.style),m(t,i),t.intersect=function(c){return w.polygon(t,e,c)},a},"subroutine"),sr=d((s,t)=>{const a=s.insert("g").attr("class","node default").attr("id",t.domId||t.id),l=a.insert("circle",":first-child");return l.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),m(t,l),t.intersect=function(n){return w.circle(t,7,n)},a},"start"),rt=d((s,t,a)=>{const l=s.insert("g").attr("class","node default").attr("id",t.domId||t.id);let n=70,r=10;a==="LR"&&(n=10,r=70);const e=l.append("rect").attr("x",-1*n/2).attr("y",-1*r/2).attr("width",n).attr("height",r).attr("class","fork-join");return m(t,e),t.height=t.height+t.padding/2,t.width=t.width+t.padding/2,t.intersect=function(i){return w.rect(t,i)},l},"forkJoin"),ir=d((s,t)=>{const a=s.insert("g").attr("class","node default").attr("id",t.domId||t.id),l=a.insert("circle",":first-child"),n=a.insert("circle",":first-child");return n.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),l.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),m(t,n),t.intersect=function(r){return w.circle(t,7,r)},a},"end"),lr=d((s,t)=>{var G;const a=t.padding/2,l=4,n=8;let r;t.classes?r="node "+t.classes:r="node default";const e=s.insert("g").attr("class",r).attr("id",t.domId||t.id),i=e.insert("rect",":first-child"),c=e.insert("line"),o=e.insert("line");let h=0,p=l;const y=e.insert("g").attr("class","label");let f=0;const g=(G=t.classData.annotations)==null?void 0:G[0],v=t.classData.annotations[0]?"«"+t.classData.annotations[0]+"»":"",x=y.node().appendChild(I(v,t.labelStyle,!0,!0));let B=x.getBBox();if(H(_().flowchart.htmlLabels)){const k=x.children[0],L=T(x);B=k.getBoundingClientRect(),L.attr("width",B.width),L.attr("height",B.height)}t.classData.annotations[0]&&(p+=B.height+l,h+=B.width);let b=t.classData.label;t.classData.type!==void 0&&t.classData.type!==""&&(_().flowchart.htmlLabels?b+="&lt;"+t.classData.type+"&gt;":b+="<"+t.classData.type+">");const C=y.node().appendChild(I(b,t.labelStyle,!0,!0));T(C).attr("class","classTitle");let S=C.getBBox();if(H(_().flowchart.htmlLabels)){const k=C.children[0],L=T(C);S=k.getBoundingClientRect(),L.attr("width",S.width),L.attr("height",S.height)}p+=S.height+l,S.width>h&&(h=S.width);const D=[];t.classData.members.forEach(k=>{const L=k.getDisplayDetails();let A=L.displayText;_().flowchart.htmlLabels&&(A=A.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const W=y.node().appendChild(I(A,L.cssStyle?L.cssStyle:t.labelStyle,!0,!0));let $=W.getBBox();if(H(_().flowchart.htmlLabels)){const q=W.children[0],Y=T(W);$=q.getBoundingClientRect(),Y.attr("width",$.width),Y.attr("height",$.height)}$.width>h&&(h=$.width),p+=$.height+l,D.push(W)}),p+=n;const F=[];if(t.classData.methods.forEach(k=>{const L=k.getDisplayDetails();let A=L.displayText;_().flowchart.htmlLabels&&(A=A.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const W=y.node().appendChild(I(A,L.cssStyle?L.cssStyle:t.labelStyle,!0,!0));let $=W.getBBox();if(H(_().flowchart.htmlLabels)){const q=W.children[0],Y=T(W);$=q.getBoundingClientRect(),Y.attr("width",$.width),Y.attr("height",$.height)}$.width>h&&(h=$.width),p+=$.height+l,F.push(W)}),p+=n,g){let k=(h-B.width)/2;T(x).attr("transform","translate( "+(-1*h/2+k)+", "+-1*p/2+")"),f=B.height+l}let j=(h-S.width)/2;return T(C).attr("transform","translate( "+(-1*h/2+j)+", "+(-1*p/2+f)+")"),f+=S.height+l,c.attr("class","divider").attr("x1",-h/2-a).attr("x2",h/2+a).attr("y1",-p/2-a+n+f).attr("y2",-p/2-a+n+f),f+=n,D.forEach(k=>{T(k).attr("transform","translate( "+-h/2+", "+(-1*p/2+f+n/2)+")");const L=k==null?void 0:k.getBBox();f+=((L==null?void 0:L.height)??0)+l}),f+=n,o.attr("class","divider").attr("x1",-h/2-a).attr("x2",h/2+a).attr("y1",-p/2-a+n+f).attr("y2",-p/2-a+n+f),f+=n,F.forEach(k=>{T(k).attr("transform","translate( "+-h/2+", "+(-1*p/2+f)+")");const L=k==null?void 0:k.getBBox();f+=((L==null?void 0:L.height)??0)+l}),i.attr("style",t.style).attr("class","outer title-state").attr("x",-h/2-a).attr("y",-(p/2)-a).attr("width",h+t.padding).attr("height",p+t.padding),m(t,i),t.intersect=function(k){return w.rect(t,k)},e},"class_box"),at={rhombus:tt,composite:Gt,question:tt,rect:Vt,labelRect:Kt,rectWithTitle:Pt,choice:Yt,circle:rr,doublecircle:ar,stadium:tr,hexagon:Ut,block_arrow:Ot,rect_left_inv_arrow:jt,lean_right:zt,lean_left:Zt,trapezoid:Ft,inv_trapezoid:qt,rect_right_inv_arrow:Jt,cylinder:Qt,start:sr,end:ir,note:Xt,subroutine:er,fork:rt,join:rt,class_box:lr},X={},yr=d(async(s,t,a)=>{let l,n;if(t.link){let r;_().securityLevel==="sandbox"?r="_top":t.linkTarget&&(r=t.linkTarget||"_blank"),l=s.insert("svg:a").attr("xlink:href",t.link).attr("target",r),n=await at[t.shape](l,t,a)}else n=await at[t.shape](s,t,a),l=n;return t.tooltip&&n.attr("title",t.tooltip),t.class&&n.attr("class","node default "+t.class),X[t.id]=l,t.haveCallback&&X[t.id].attr("class",X[t.id].attr("class")+" clickable"),l},"insertNode"),fr=d((s,t)=>{X[t.id]=s},"setNodeElem"),xr=d(()=>{X={}},"clear"),gr=d(s=>{const t=X[s.id];u.trace("Transforming node",s.diff,s,"translate("+(s.x-s.width/2-5)+", "+s.width/2+")");const a=8,l=s.diff||0;return s.clusterNode?t.attr("transform","translate("+(s.x+l-s.width/2)+", "+(s.y-s.height/2-a)+")"):t.attr("transform","translate("+s.x+", "+s.y+")"),l},"positionNode"),nr=d((s,t,a,l,n)=>{t.arrowTypeStart&&et(s,"start",t.arrowTypeStart,a,l,n),t.arrowTypeEnd&&et(s,"end",t.arrowTypeEnd,a,l,n)},"addEdgeMarkers"),cr={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"},et=d((s,t,a,l,n,r)=>{const e=cr[a];if(!e){u.warn(`Unknown arrow type: ${a}`);return}const i=t==="start"?"Start":"End";s.attr(`marker-${t}`,`url(${l}#${n}_${r}-${e}${i})`)},"addEdgeMarker"),z={},M={},ur=d(()=>{z={},M={}},"clear"),br=d((s,t)=>{const a=_(),l=H(a.flowchart.htmlLabels),n=t.labelType==="markdown"?it(s,t.label,{style:t.labelStyle,useHtmlLabels:l,addSvgBackground:!0},a):I(t.label,t.labelStyle),r=s.insert("g").attr("class","edgeLabel"),e=r.insert("g").attr("class","label");e.node().appendChild(n);let i=n.getBBox();if(l){const o=n.children[0],h=T(n);i=o.getBoundingClientRect(),h.attr("width",i.width),h.attr("height",i.height)}e.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),z[t.id]=r,t.width=i.width,t.height=i.height;let c;if(t.startLabelLeft){const o=I(t.startLabelLeft,t.labelStyle),h=s.insert("g").attr("class","edgeTerminals"),p=h.insert("g").attr("class","inner");c=p.node().appendChild(o);const y=o.getBBox();p.attr("transform","translate("+-y.width/2+", "+-y.height/2+")"),M[t.id]||(M[t.id]={}),M[t.id].startLeft=h,O(c,t.startLabelLeft)}if(t.startLabelRight){const o=I(t.startLabelRight,t.labelStyle),h=s.insert("g").attr("class","edgeTerminals"),p=h.insert("g").attr("class","inner");c=h.node().appendChild(o),p.node().appendChild(o);const y=o.getBBox();p.attr("transform","translate("+-y.width/2+", "+-y.height/2+")"),M[t.id]||(M[t.id]={}),M[t.id].startRight=h,O(c,t.startLabelRight)}if(t.endLabelLeft){const o=I(t.endLabelLeft,t.labelStyle),h=s.insert("g").attr("class","edgeTerminals"),p=h.insert("g").attr("class","inner");c=p.node().appendChild(o);const y=o.getBBox();p.attr("transform","translate("+-y.width/2+", "+-y.height/2+")"),h.node().appendChild(o),M[t.id]||(M[t.id]={}),M[t.id].endLeft=h,O(c,t.endLabelLeft)}if(t.endLabelRight){const o=I(t.endLabelRight,t.labelStyle),h=s.insert("g").attr("class","edgeTerminals"),p=h.insert("g").attr("class","inner");c=p.node().appendChild(o);const y=o.getBBox();p.attr("transform","translate("+-y.width/2+", "+-y.height/2+")"),h.node().appendChild(o),M[t.id]||(M[t.id]={}),M[t.id].endRight=h,O(c,t.endLabelRight)}return n},"insertEdgeLabel");function O(s,t){_().flowchart.htmlLabels&&s&&(s.style.width=t.length*9+"px",s.style.height="12px")}d(O,"setTerminalWidth");var wr=d((s,t)=>{u.debug("Moving label abc88 ",s.id,s.label,z[s.id],t);let a=t.updatedPath?t.updatedPath:t.originalPath;const l=_(),{subGraphTitleTotalMargin:n}=yt(l);if(s.label){const r=z[s.id];let e=s.x,i=s.y;if(a){const c=U.calcLabelPosition(a);u.debug("Moving label "+s.label+" from (",e,",",i,") to (",c.x,",",c.y,") abc88"),t.updatedPath&&(e=c.x,i=c.y)}r.attr("transform",`translate(${e}, ${i+n/2})`)}if(s.startLabelLeft){const r=M[s.id].startLeft;let e=s.x,i=s.y;if(a){const c=U.calcTerminalLabelPosition(s.arrowTypeStart?10:0,"start_left",a);e=c.x,i=c.y}r.attr("transform",`translate(${e}, ${i})`)}if(s.startLabelRight){const r=M[s.id].startRight;let e=s.x,i=s.y;if(a){const c=U.calcTerminalLabelPosition(s.arrowTypeStart?10:0,"start_right",a);e=c.x,i=c.y}r.attr("transform",`translate(${e}, ${i})`)}if(s.endLabelLeft){const r=M[s.id].endLeft;let e=s.x,i=s.y;if(a){const c=U.calcTerminalLabelPosition(s.arrowTypeEnd?10:0,"end_left",a);e=c.x,i=c.y}r.attr("transform",`translate(${e}, ${i})`)}if(s.endLabelRight){const r=M[s.id].endRight;let e=s.x,i=s.y;if(a){const c=U.calcTerminalLabelPosition(s.arrowTypeEnd?10:0,"end_right",a);e=c.x,i=c.y}r.attr("transform",`translate(${e}, ${i})`)}},"positionEdgeLabel"),hr=d((s,t)=>{const a=s.x,l=s.y,n=Math.abs(t.x-a),r=Math.abs(t.y-l),e=s.width/2,i=s.height/2;return n>=e||r>=i},"outsideNode"),or=d((s,t,a)=>{u.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(a)}
  node        : x:${s.x} y:${s.y} w:${s.width} h:${s.height}`);const l=s.x,n=s.y,r=Math.abs(l-a.x),e=s.width/2;let i=a.x<t.x?e-r:e+r;const c=s.height/2,o=Math.abs(t.y-a.y),h=Math.abs(t.x-a.x);if(Math.abs(n-t.y)*e>Math.abs(l-t.x)*c){let p=a.y<t.y?t.y-c-n:n-c-t.y;i=h*p/o;const y={x:a.x<t.x?a.x+i:a.x-h+i,y:a.y<t.y?a.y+o-p:a.y-o+p};return i===0&&(y.x=t.x,y.y=t.y),h===0&&(y.x=t.x),o===0&&(y.y=t.y),u.debug(`abc89 topp/bott calc, Q ${o}, q ${p}, R ${h}, r ${i}`,y),y}else{a.x<t.x?i=t.x-e-l:i=l-e-t.x;let p=o*i/h,y=a.x<t.x?a.x+h-i:a.x-h+i,f=a.y<t.y?a.y+p:a.y-p;return u.debug(`sides calc abc89, Q ${o}, q ${p}, R ${h}, r ${i}`,{_x:y,_y:f}),i===0&&(y=t.x,f=t.y),h===0&&(y=t.x),o===0&&(f=t.y),{x:y,y:f}}},"intersection"),st=d((s,t)=>{u.debug("abc88 cutPathAtIntersect",s,t);let a=[],l=s[0],n=!1;return s.forEach(r=>{if(!hr(t,r)&&!n){const e=or(t,l,r);let i=!1;a.forEach(c=>{i=i||c.x===e.x&&c.y===e.y}),a.some(c=>c.x===e.x&&c.y===e.y)||a.push(e),n=!0}else l=r,n||a.push(r)}),a},"cutPathAtIntersect"),mr=d(function(s,t,a,l,n,r,e){let i=a.points;u.debug("abc88 InsertEdge: edge=",a,"e=",t);let c=!1;const o=r.node(t.v);var h=r.node(t.w);h!=null&&h.intersect&&(o!=null&&o.intersect)&&(i=i.slice(1,a.points.length-1),i.unshift(o.intersect(i[0])),i.push(h.intersect(i[i.length-1]))),a.toCluster&&(u.debug("to cluster abc88",l[a.toCluster]),i=st(a.points,l[a.toCluster].node),c=!0),a.fromCluster&&(u.debug("from cluster abc88",l[a.fromCluster]),i=st(i.reverse(),l[a.fromCluster].node).reverse(),c=!0);const p=i.filter(S=>!Number.isNaN(S.y));let y=gt;a.curve&&(n==="graph"||n==="flowchart")&&(y=a.curve);const{x:f,y:g}=ft(a),v=xt().x(f).y(g).curve(y);let x;switch(a.thickness){case"normal":x="edge-thickness-normal";break;case"thick":x="edge-thickness-thick";break;case"invisible":x="edge-thickness-thick";break;default:x=""}switch(a.pattern){case"solid":x+=" edge-pattern-solid";break;case"dotted":x+=" edge-pattern-dotted";break;case"dashed":x+=" edge-pattern-dashed";break}const B=s.append("path").attr("d",v(p)).attr("id",a.id).attr("class"," "+x+(a.classes?" "+a.classes:"")).attr("style",a.style);let b="";(_().flowchart.arrowMarkerAbsolute||_().state.arrowMarkerAbsolute)&&(b=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,b=b.replace(/\(/g,"\\("),b=b.replace(/\)/g,"\\)")),nr(B,a,b,e,n);let C={};return c&&(C.updatedPath=i),C.originalPath=a.points,C},"insertEdge");export{ur as a,br as b,xr as c,mr as d,wr as e,I as f,Dt as g,yr as i,pr as m,gr as p,fr as s,m as u};
