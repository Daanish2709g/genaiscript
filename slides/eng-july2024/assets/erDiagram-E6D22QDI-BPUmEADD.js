import{l as At}from"./chunk-CN5XARC6-CNmih9a-.js";import{G as vt}from"./chunk-ULVYQCHC-CuzKNz7t.js";import{a as n,f as U,s as Mt,g as St,e as wt,d as It,q as Dt,t as Lt,m as X,x as Bt,l as it,v as Ct,n as Pt,D as Yt,E as Zt,F as Ft}from"./Mermaid.vue_vue_type_script_setup_true_lang-Dk8oiZ91.js";import"./chunk-TZBO7MLI-CvFo4m0T.js";import"./modules/vue-C6s4EU_7.js";import"./index-BxutJaWi.js";import"./modules/shiki-DSjN_Q23.js";import"./modules/file-saver-LUhfcczZ.js";var nt=function(){var t=n(function(w,i,s,c){for(s=s||{},c=w.length;c--;s[w[c]]=i);return s},"o"),e=[6,8,10,20,22,24,26,27,28],r=[1,10],y=[1,11],h=[1,12],_=[1,13],p=[1,14],l=[1,15],d=[1,21],g=[1,22],m=[1,23],k=[1,24],R=[1,25],f=[6,8,10,13,15,18,19,20,22,24,26,27,28,41,42,43,44,45],b=[1,34],x=[27,28,46,47],Y=[41,42,43,44,45],Z=[17,34],F=[1,54],v=[1,53],S=[17,34,36,38],N={trace:n(function(){},"trace"),yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,entityName:11,relSpec:12,":":13,role:14,BLOCK_START:15,attributes:16,BLOCK_STOP:17,SQS:18,SQE:19,title:20,title_value:21,acc_title:22,acc_title_value:23,acc_descr:24,acc_descr_value:25,acc_descr_multiline_value:26,ALPHANUM:27,ENTITY_NAME:28,attribute:29,attributeType:30,attributeName:31,attributeKeyTypeList:32,attributeComment:33,ATTRIBUTE_WORD:34,attributeKeyType:35,COMMA:36,ATTRIBUTE_KEY:37,COMMENT:38,cardinality:39,relType:40,ZERO_OR_ONE:41,ZERO_OR_MORE:42,ONE_OR_MORE:43,ONLY_ONE:44,MD_PARENT:45,NON_IDENTIFYING:46,IDENTIFYING:47,WORD:48,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",8:"SPACE",10:"NEWLINE",13:":",15:"BLOCK_START",17:"BLOCK_STOP",18:"SQS",19:"SQE",20:"title",21:"title_value",22:"acc_title",23:"acc_title_value",24:"acc_descr",25:"acc_descr_value",26:"acc_descr_multiline_value",27:"ALPHANUM",28:"ENTITY_NAME",34:"ATTRIBUTE_WORD",36:"COMMA",37:"ATTRIBUTE_KEY",38:"COMMENT",41:"ZERO_OR_ONE",42:"ZERO_OR_MORE",43:"ONE_OR_MORE",44:"ONLY_ONE",45:"MD_PARENT",46:"NON_IDENTIFYING",47:"IDENTIFYING",48:"WORD"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,5],[9,4],[9,3],[9,1],[9,7],[9,6],[9,4],[9,2],[9,2],[9,2],[9,1],[11,1],[11,1],[16,1],[16,2],[29,2],[29,3],[29,3],[29,4],[30,1],[31,1],[32,1],[32,3],[35,1],[33,1],[12,3],[39,1],[39,1],[39,1],[39,1],[39,1],[40,1],[40,1],[14,1],[14,1],[14,1]],performAction:n(function(i,s,c,u,E,a,G){var o=a.length-1;switch(E){case 1:break;case 2:this.$=[];break;case 3:a[o-1].push(a[o]),this.$=a[o-1];break;case 4:case 5:this.$=a[o];break;case 6:case 7:this.$=[];break;case 8:u.addEntity(a[o-4]),u.addEntity(a[o-2]),u.addRelationship(a[o-4],a[o],a[o-2],a[o-3]);break;case 9:u.addEntity(a[o-3]),u.addAttributes(a[o-3],a[o-1]);break;case 10:u.addEntity(a[o-2]);break;case 11:u.addEntity(a[o]);break;case 12:u.addEntity(a[o-6],a[o-4]),u.addAttributes(a[o-6],a[o-1]);break;case 13:u.addEntity(a[o-5],a[o-3]);break;case 14:u.addEntity(a[o-3],a[o-1]);break;case 15:case 16:this.$=a[o].trim(),u.setAccTitle(this.$);break;case 17:case 18:this.$=a[o].trim(),u.setAccDescription(this.$);break;case 19:case 43:this.$=a[o];break;case 20:case 41:case 42:this.$=a[o].replace(/"/g,"");break;case 21:case 29:this.$=[a[o]];break;case 22:a[o].push(a[o-1]),this.$=a[o];break;case 23:this.$={attributeType:a[o-1],attributeName:a[o]};break;case 24:this.$={attributeType:a[o-2],attributeName:a[o-1],attributeKeyTypeList:a[o]};break;case 25:this.$={attributeType:a[o-2],attributeName:a[o-1],attributeComment:a[o]};break;case 26:this.$={attributeType:a[o-3],attributeName:a[o-2],attributeKeyTypeList:a[o-1],attributeComment:a[o]};break;case 27:case 28:case 31:this.$=a[o];break;case 30:a[o-2].push(a[o]),this.$=a[o-2];break;case 32:this.$=a[o].replace(/"/g,"");break;case 33:this.$={cardA:a[o],relType:a[o-1],cardB:a[o-2]};break;case 34:this.$=u.Cardinality.ZERO_OR_ONE;break;case 35:this.$=u.Cardinality.ZERO_OR_MORE;break;case 36:this.$=u.Cardinality.ONE_OR_MORE;break;case 37:this.$=u.Cardinality.ONLY_ONE;break;case 38:this.$=u.Cardinality.MD_PARENT;break;case 39:this.$=u.Identification.NON_IDENTIFYING;break;case 40:this.$=u.Identification.IDENTIFYING;break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:9,20:r,22:y,24:h,26:_,27:p,28:l},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:16,11:9,20:r,22:y,24:h,26:_,27:p,28:l},t(e,[2,5]),t(e,[2,6]),t(e,[2,11],{12:17,39:20,15:[1,18],18:[1,19],41:d,42:g,43:m,44:k,45:R}),{21:[1,26]},{23:[1,27]},{25:[1,28]},t(e,[2,18]),t(f,[2,19]),t(f,[2,20]),t(e,[2,4]),{11:29,27:p,28:l},{16:30,17:[1,31],29:32,30:33,34:b},{11:35,27:p,28:l},{40:36,46:[1,37],47:[1,38]},t(x,[2,34]),t(x,[2,35]),t(x,[2,36]),t(x,[2,37]),t(x,[2,38]),t(e,[2,15]),t(e,[2,16]),t(e,[2,17]),{13:[1,39]},{17:[1,40]},t(e,[2,10]),{16:41,17:[2,21],29:32,30:33,34:b},{31:42,34:[1,43]},{34:[2,27]},{19:[1,44]},{39:45,41:d,42:g,43:m,44:k,45:R},t(Y,[2,39]),t(Y,[2,40]),{14:46,27:[1,49],28:[1,48],48:[1,47]},t(e,[2,9]),{17:[2,22]},t(Z,[2,23],{32:50,33:51,35:52,37:F,38:v}),t([17,34,37,38],[2,28]),t(e,[2,14],{15:[1,55]}),t([27,28],[2,33]),t(e,[2,8]),t(e,[2,41]),t(e,[2,42]),t(e,[2,43]),t(Z,[2,24],{33:56,36:[1,57],38:v}),t(Z,[2,25]),t(S,[2,29]),t(Z,[2,32]),t(S,[2,31]),{16:58,17:[1,59],29:32,30:33,34:b},t(Z,[2,26]),{35:60,37:F},{17:[1,61]},t(e,[2,13]),t(S,[2,30]),t(e,[2,12])],defaultActions:{34:[2,27],41:[2,22]},parseError:n(function(i,s){if(s.recoverable)this.trace(i);else{var c=new Error(i);throw c.hash=s,c}},"parseError"),parse:n(function(i){var s=this,c=[0],u=[],E=[null],a=[],G=this.table,o="",j=0,lt=0,bt=2,ct=1,xt=a.slice.call(arguments,1),A=Object.create(this.lexer),H={yy:{}};for(var tt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,tt)&&(H.yy[tt]=this.yy[tt]);A.setInput(i,H.yy),H.yy.lexer=A,H.yy.parser=this,typeof A.yylloc>"u"&&(A.yylloc={});var et=A.yylloc;a.push(et);var Nt=A.options&&A.options.ranges;typeof H.yy.parseError=="function"?this.parseError=H.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Tt(D){c.length=c.length-2*D,E.length=E.length-D,a.length=a.length-D}n(Tt,"popStack");function ht(){var D;return D=u.pop()||A.lex()||ct,typeof D!="number"&&(D instanceof Array&&(u=D,D=u.pop()),D=s.symbols_[D]||D),D}n(ht,"lex");for(var I,z,B,rt,V={},q,W,dt,J;;){if(z=c[c.length-1],this.defaultActions[z]?B=this.defaultActions[z]:((I===null||typeof I>"u")&&(I=ht()),B=G[z]&&G[z][I]),typeof B>"u"||!B.length||!B[0]){var at="";J=[];for(q in G[z])this.terminals_[q]&&q>bt&&J.push("'"+this.terminals_[q]+"'");A.showPosition?at="Parse error on line "+(j+1)+`:
`+A.showPosition()+`
Expecting `+J.join(", ")+", got '"+(this.terminals_[I]||I)+"'":at="Parse error on line "+(j+1)+": Unexpected "+(I==ct?"end of input":"'"+(this.terminals_[I]||I)+"'"),this.parseError(at,{text:A.match,token:this.terminals_[I]||I,line:A.yylineno,loc:et,expected:J})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+z+", token: "+I);switch(B[0]){case 1:c.push(I),E.push(A.yytext),a.push(A.yylloc),c.push(B[1]),I=null,lt=A.yyleng,o=A.yytext,j=A.yylineno,et=A.yylloc;break;case 2:if(W=this.productions_[B[1]][1],V.$=E[E.length-W],V._$={first_line:a[a.length-(W||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(W||1)].first_column,last_column:a[a.length-1].last_column},Nt&&(V._$.range=[a[a.length-(W||1)].range[0],a[a.length-1].range[1]]),rt=this.performAction.apply(V,[o,lt,j,H.yy,B[1],E,a].concat(xt)),typeof rt<"u")return rt;W&&(c=c.slice(0,-1*W*2),E=E.slice(0,-1*W),a=a.slice(0,-1*W)),c.push(this.productions_[B[1]][0]),E.push(V.$),a.push(V._$),dt=G[c[c.length-2]][c[c.length-1]],c.push(dt);break;case 3:return!0}}return!0},"parse")},T=function(){var w={EOF:1,parseError:n(function(s,c){if(this.yy.parser)this.yy.parser.parseError(s,c);else throw new Error(s)},"parseError"),setInput:n(function(i,s){return this.yy=s||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:n(function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var s=i.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},"input"),unput:n(function(i){var s=i.length,c=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s),this.offset-=s;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var E=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===u.length?this.yylloc.first_column:0)+u[u.length-c.length].length-c[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[E[0],E[0]+this.yyleng-s]),this.yyleng=this.yytext.length,this},"unput"),more:n(function(){return this._more=!0,this},"more"),reject:n(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:n(function(i){this.unput(this.match.slice(i))},"less"),pastInput:n(function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:n(function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:n(function(){var i=this.pastInput(),s=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+s+"^"},"showPosition"),test_match:n(function(i,s){var c,u,E;if(this.options.backtrack_lexer&&(E={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(E.yylloc.range=this.yylloc.range.slice(0))),u=i[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],c=this.performAction.call(this,this.yy,this,s,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var a in E)this[a]=E[a];return!1}return!1},"test_match"),next:n(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,s,c,u;this._more||(this.yytext="",this.match="");for(var E=this._currentRules(),a=0;a<E.length;a++)if(c=this._input.match(this.rules[E[a]]),c&&(!s||c[0].length>s[0].length)){if(s=c,u=a,this.options.backtrack_lexer){if(i=this.test_match(c,E[a]),i!==!1)return i;if(this._backtrack){s=!1;continue}else return!1}else if(!this.options.flex)break}return s?(i=this.test_match(s,E[u]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:n(function(){var s=this.next();return s||this.lex()},"lex"),begin:n(function(s){this.conditionStack.push(s)},"begin"),popState:n(function(){var s=this.conditionStack.length-1;return s>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:n(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:n(function(s){return s=this.conditionStack.length-1-Math.abs(s||0),s>=0?this.conditionStack[s]:"INITIAL"},"topState"),pushState:n(function(s){this.begin(s)},"pushState"),stateStackSize:n(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:n(function(s,c,u,E){switch(u){case 0:return this.begin("acc_title"),22;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),24;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 10;case 8:break;case 9:return 8;case 10:return 28;case 11:return 48;case 12:return 4;case 13:return this.begin("block"),15;case 14:return 36;case 15:break;case 16:return 37;case 17:return 34;case 18:return 34;case 19:return 38;case 20:break;case 21:return this.popState(),17;case 22:return c.yytext[0];case 23:return 18;case 24:return 19;case 25:return 41;case 26:return 43;case 27:return 43;case 28:return 43;case 29:return 41;case 30:return 41;case 31:return 42;case 32:return 42;case 33:return 42;case 34:return 42;case 35:return 42;case 36:return 43;case 37:return 42;case 38:return 43;case 39:return 44;case 40:return 44;case 41:return 44;case 42:return 44;case 43:return 41;case 44:return 42;case 45:return 43;case 46:return 45;case 47:return 46;case 48:return 47;case 49:return 47;case 50:return 46;case 51:return 46;case 52:return 46;case 53:return 27;case 54:return c.yytext[0];case 55:return 6}},"anonymous"),rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},block:{rules:[14,15,16,17,18,19,20,21,22],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}};return w}();N.lexer=T;function L(){this.yy={}}return n(L,"Parser"),L.prototype=N,N.Parser=L,new L}();nt.parser=nt;var Wt=nt,K=new Map,ot=[],Ut={ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},Ht={NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},yt=n(function(t,e=void 0){return K.has(t)?!K.get(t).alias&&e&&(K.get(t).alias=e,X.info(`Add alias '${e}' to entity '${t}'`)):(K.set(t,{attributes:[],alias:e}),X.info("Added new entity :",t)),K.get(t)},"addEntity"),zt=n(()=>K,"getEntities"),Kt=n(function(t,e){let r=yt(t),y;for(y=e.length-1;y>=0;y--)r.attributes.push(e[y]),X.debug("Added attribute ",e[y].attributeName)},"addAttributes"),Vt=n(function(t,e,r,y){let h={entityA:t,roleA:e,entityB:r,relSpec:y};ot.push(h),X.debug("Added new relationship :",h)},"addRelationship"),Gt=n(()=>ot,"getRelationships"),Xt=n(function(){K=new Map,ot=[],Bt()},"clear"),Qt={Cardinality:Ut,Identification:Ht,getConfig:n(()=>U().er,"getConfig"),addEntity:yt,addAttributes:Kt,getEntities:zt,addRelationship:Vt,getRelationships:Gt,clear:Xt,setAccTitle:Mt,getAccTitle:St,setAccDescription:wt,getAccDescription:It,setDiagramTitle:Dt,getDiagramTitle:Lt},C={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END",MD_PARENT_END:"MD_PARENT_END",MD_PARENT_START:"MD_PARENT_START"},jt=n(function(t,e){let r;t.append("defs").append("marker").attr("id",C.MD_PARENT_START).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",C.MD_PARENT_END).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",C.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",C.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",C.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",C.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",C.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",C.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),r=t.append("defs").append("marker").attr("id",C.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),r=t.append("defs").append("marker").attr("id",C.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")},"insertMarkers"),P={ERMarkers:C,insertMarkers:jt},qt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function pt(t){return typeof t=="string"&&qt.test(t)}n(pt,"validate");var Jt=pt,M=[];for(let t=0;t<256;++t)M.push((t+256).toString(16).slice(1));function ft(t,e=0){return M[t[e+0]]+M[t[e+1]]+M[t[e+2]]+M[t[e+3]]+"-"+M[t[e+4]]+M[t[e+5]]+"-"+M[t[e+6]]+M[t[e+7]]+"-"+M[t[e+8]]+M[t[e+9]]+"-"+M[t[e+10]]+M[t[e+11]]+M[t[e+12]]+M[t[e+13]]+M[t[e+14]]+M[t[e+15]]}n(ft,"unsafeStringify");function _t(t){if(!Jt(t))throw TypeError("Invalid UUID");let e;const r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=e&255,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=e&255,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=e&255,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=e&255,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=e&255,r}n(_t,"parse");var $t=_t;function Et(t){t=unescape(encodeURIComponent(t));const e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}n(Et,"stringToBytes");var te="6ba7b810-9dad-11d1-80b4-00c04fd430c8",ee="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function gt(t,e,r){function y(h,_,p,l){var d;if(typeof h=="string"&&(h=Et(h)),typeof _=="string"&&(_=$t(_)),((d=_)===null||d===void 0?void 0:d.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let g=new Uint8Array(16+h.length);if(g.set(_),g.set(h,_.length),g=r(g),g[6]=g[6]&15|e,g[8]=g[8]&63|128,p){l=l||0;for(let m=0;m<16;++m)p[l+m]=g[m];return p}return ft(g)}n(y,"generateUUID");try{y.name=t}catch{}return y.DNS=te,y.URL=ee,y}n(gt,"v35");function mt(t,e,r,y){switch(t){case 0:return e&r^~e&y;case 1:return e^r^y;case 2:return e&r^e&y^r&y;case 3:return e^r^y}}n(mt,"f");function $(t,e){return t<<e|t>>>32-e}n($,"ROTL");function kt(t){const e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof t=="string"){const p=unescape(encodeURIComponent(t));t=[];for(let l=0;l<p.length;++l)t.push(p.charCodeAt(l))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);const y=t.length/4+2,h=Math.ceil(y/16),_=new Array(h);for(let p=0;p<h;++p){const l=new Uint32Array(16);for(let d=0;d<16;++d)l[d]=t[p*64+d*4]<<24|t[p*64+d*4+1]<<16|t[p*64+d*4+2]<<8|t[p*64+d*4+3];_[p]=l}_[h-1][14]=(t.length-1)*8/Math.pow(2,32),_[h-1][14]=Math.floor(_[h-1][14]),_[h-1][15]=(t.length-1)*8&4294967295;for(let p=0;p<h;++p){const l=new Uint32Array(80);for(let f=0;f<16;++f)l[f]=_[p][f];for(let f=16;f<80;++f)l[f]=$(l[f-3]^l[f-8]^l[f-14]^l[f-16],1);let d=r[0],g=r[1],m=r[2],k=r[3],R=r[4];for(let f=0;f<80;++f){const b=Math.floor(f/20),x=$(d,5)+mt(b,g,m,k)+R+e[b]+l[f]>>>0;R=k,k=m,m=$(g,30)>>>0,g=d,d=x}r[0]=r[0]+d>>>0,r[1]=r[1]+g>>>0,r[2]=r[2]+m>>>0,r[3]=r[3]+k>>>0,r[4]=r[4]+R>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,r[0]&255,r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,r[1]&255,r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,r[2]&255,r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,r[3]&255,r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,r[4]&255]}n(kt,"sha1");var re=kt,ae=gt("v5",80,re),ie=ae,ne=/[^\dA-Za-z](\W)*/g,O={},Q=new Map,se=n(function(t){const e=Object.keys(t);for(const r of e)O[r]=t[r]},"setConf"),oe=n((t,e,r)=>{const y=O.entityPadding/3,h=O.entityPadding/3,_=O.fontSize*.85,p=e.node().getBBox(),l=[];let d=!1,g=!1,m=0,k=0,R=0,f=0,b=p.height+y*2,x=1;r.forEach(v=>{v.attributeKeyTypeList!==void 0&&v.attributeKeyTypeList.length>0&&(d=!0),v.attributeComment!==void 0&&(g=!0)}),r.forEach(v=>{const S=`${e.node().id}-attr-${x}`;let N=0;const T=Ft(v.attributeType),L=t.append("text").classed("er entityLabel",!0).attr("id",`${S}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",U().fontFamily).style("font-size",_+"px").text(T),w=t.append("text").classed("er entityLabel",!0).attr("id",`${S}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",U().fontFamily).style("font-size",_+"px").text(v.attributeName),i={};i.tn=L,i.nn=w;const s=L.node().getBBox(),c=w.node().getBBox();if(m=Math.max(m,s.width),k=Math.max(k,c.width),N=Math.max(s.height,c.height),d){const u=v.attributeKeyTypeList!==void 0?v.attributeKeyTypeList.join(","):"",E=t.append("text").classed("er entityLabel",!0).attr("id",`${S}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",U().fontFamily).style("font-size",_+"px").text(u);i.kn=E;const a=E.node().getBBox();R=Math.max(R,a.width),N=Math.max(N,a.height)}if(g){const u=t.append("text").classed("er entityLabel",!0).attr("id",`${S}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",U().fontFamily).style("font-size",_+"px").text(v.attributeComment||"");i.cn=u;const E=u.node().getBBox();f=Math.max(f,E.width),N=Math.max(N,E.height)}i.height=N,l.push(i),b+=N+y*2,x+=1});let Y=4;d&&(Y+=2),g&&(Y+=2);const Z=m+k+R+f,F={width:Math.max(O.minEntityWidth,Math.max(p.width+O.entityPadding*2,Z+h*Y)),height:r.length>0?b:Math.max(O.minEntityHeight,p.height+O.entityPadding*2)};if(r.length>0){const v=Math.max(0,(F.width-Z-h*Y)/(Y/2));e.attr("transform","translate("+F.width/2+","+(y+p.height/2)+")");let S=p.height+y*2,N="attributeBoxOdd";l.forEach(T=>{const L=S+y+T.height/2;T.tn.attr("transform","translate("+h+","+L+")");const w=t.insert("rect","#"+T.tn.node().id).classed(`er ${N}`,!0).attr("x",0).attr("y",S).attr("width",m+h*2+v).attr("height",T.height+y*2),i=parseFloat(w.attr("x"))+parseFloat(w.attr("width"));T.nn.attr("transform","translate("+(i+h)+","+L+")");const s=t.insert("rect","#"+T.nn.node().id).classed(`er ${N}`,!0).attr("x",i).attr("y",S).attr("width",k+h*2+v).attr("height",T.height+y*2);let c=parseFloat(s.attr("x"))+parseFloat(s.attr("width"));if(d){T.kn.attr("transform","translate("+(c+h)+","+L+")");const u=t.insert("rect","#"+T.kn.node().id).classed(`er ${N}`,!0).attr("x",c).attr("y",S).attr("width",R+h*2+v).attr("height",T.height+y*2);c=parseFloat(u.attr("x"))+parseFloat(u.attr("width"))}g&&(T.cn.attr("transform","translate("+(c+h)+","+L+")"),t.insert("rect","#"+T.cn.node().id).classed(`er ${N}`,"true").attr("x",c).attr("y",S).attr("width",f+h*2+v).attr("height",T.height+y*2)),S+=T.height+y*2,N=N==="attributeBoxOdd"?"attributeBoxEven":"attributeBoxOdd"})}else F.height=Math.max(O.minEntityHeight,b),e.attr("transform","translate("+F.width/2+","+F.height/2+")");return F},"drawAttributes"),le=n(function(t,e,r){const y=[...e.keys()];let h;return y.forEach(function(_){const p=Ot(_,"entity");Q.set(_,p);const l=t.append("g").attr("id",p);h=h===void 0?p:h;const d="text-"+p,g=l.append("text").classed("er entityLabel",!0).attr("id",d).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",U().fontFamily).style("font-size",O.fontSize+"px").text(e.get(_).alias??_),{width:m,height:k}=oe(l,g,e.get(_).attributes),f=l.insert("rect","#"+d).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",m).attr("height",k).node().getBBox();r.setNode(p,{width:f.width,height:f.height,shape:"rect",id:p})}),h},"drawEntities"),ce=n(function(t,e){e.nodes().forEach(function(r){r!==void 0&&e.node(r)!==void 0&&t.select("#"+r).attr("transform","translate("+(e.node(r).x-e.node(r).width/2)+","+(e.node(r).y-e.node(r).height/2)+" )")})},"adjustEntities"),Rt=n(function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")},"getEdgeName"),he=n(function(t,e){return t.forEach(function(r){e.setEdge(Q.get(r.entityA),Q.get(r.entityB),{relationship:r},Rt(r))}),t},"addRelationships"),ut=0,de=n(function(t,e,r,y,h){ut++;const _=r.edge(Q.get(e.entityA),Q.get(e.entityB),Rt(e)),p=Yt().x(function(x){return x.x}).y(function(x){return x.y}).curve(Zt),l=t.insert("path","#"+y).classed("er relationshipLine",!0).attr("d",p(_.points)).style("stroke",O.stroke).style("fill","none");e.relSpec.relType===h.db.Identification.NON_IDENTIFYING&&l.attr("stroke-dasharray","8,8");let d="";switch(O.arrowMarkerAbsolute&&(d=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,d=d.replace(/\(/g,"\\("),d=d.replace(/\)/g,"\\)")),e.relSpec.cardA){case h.db.Cardinality.ZERO_OR_ONE:l.attr("marker-end","url("+d+"#"+P.ERMarkers.ZERO_OR_ONE_END+")");break;case h.db.Cardinality.ZERO_OR_MORE:l.attr("marker-end","url("+d+"#"+P.ERMarkers.ZERO_OR_MORE_END+")");break;case h.db.Cardinality.ONE_OR_MORE:l.attr("marker-end","url("+d+"#"+P.ERMarkers.ONE_OR_MORE_END+")");break;case h.db.Cardinality.ONLY_ONE:l.attr("marker-end","url("+d+"#"+P.ERMarkers.ONLY_ONE_END+")");break;case h.db.Cardinality.MD_PARENT:l.attr("marker-end","url("+d+"#"+P.ERMarkers.MD_PARENT_END+")");break}switch(e.relSpec.cardB){case h.db.Cardinality.ZERO_OR_ONE:l.attr("marker-start","url("+d+"#"+P.ERMarkers.ZERO_OR_ONE_START+")");break;case h.db.Cardinality.ZERO_OR_MORE:l.attr("marker-start","url("+d+"#"+P.ERMarkers.ZERO_OR_MORE_START+")");break;case h.db.Cardinality.ONE_OR_MORE:l.attr("marker-start","url("+d+"#"+P.ERMarkers.ONE_OR_MORE_START+")");break;case h.db.Cardinality.ONLY_ONE:l.attr("marker-start","url("+d+"#"+P.ERMarkers.ONLY_ONE_START+")");break;case h.db.Cardinality.MD_PARENT:l.attr("marker-start","url("+d+"#"+P.ERMarkers.MD_PARENT_START+")");break}const g=l.node().getTotalLength(),m=l.node().getPointAtLength(g*.5),k="rel"+ut,R=e.roleA.split(/<br ?\/>/g),f=t.append("text").classed("er relationshipLabel",!0).attr("id",k).attr("x",m.x).attr("y",m.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",U().fontFamily).style("font-size",O.fontSize+"px");if(R.length==1)f.text(e.roleA);else{const x=-(R.length-1)*.5;R.forEach((Y,Z)=>{f.append("tspan").attr("x",m.x).attr("dy",`${Z===0?x:1}em`).text(Y)})}const b=f.node().getBBox();t.insert("rect","#"+k).classed("er relationshipLabelBox",!0).attr("x",m.x-b.width/2).attr("y",m.y-b.height/2).attr("width",b.width).attr("height",b.height)},"drawRelationshipFromLayout"),ue=n(function(t,e,r,y){O=U().er,X.info("Drawing ER diagram");const h=U().securityLevel;let _;h==="sandbox"&&(_=it("#i"+e));const l=(h==="sandbox"?it(_.nodes()[0].contentDocument.body):it("body")).select(`[id='${e}']`);P.insertMarkers(l,O);let d;d=new vt({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:O.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}});const g=le(l,y.db.getEntities(),d),m=he(y.db.getRelationships(),d);At(d),ce(l,d),m.forEach(function(x){de(l,x,d,g,y)});const k=O.diagramPadding;Ct.insertTitle(l,"entityTitleText",O.titleTopMargin,y.db.getDiagramTitle());const R=l.node().getBBox(),f=R.width+k*2,b=R.height+k*2;Pt(l,b,f,O.useMaxWidth),l.attr("viewBox",`${R.x-k} ${R.y-k} ${f} ${b}`)},"draw"),ye="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function Ot(t="",e=""){const r=t.replace(ne,"");return`${st(e)}${st(r)}${ie(t,ye)}`}n(Ot,"generateId");function st(t=""){return t.length>0?`${t}-`:""}n(st,"strWithHyphen");var pe={setConf:se,draw:ue},fe=n(t=>`
  .entityBox {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxOdd {
    fill: ${t.attributeBackgroundColorOdd};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxEven {
    fill:  ${t.attributeBackgroundColorEven};
    stroke: ${t.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${t.tertiaryColor};
    opacity: 0.7;
    background-color: ${t.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

    .relationshipLine {
      stroke: ${t.lineColor};
    }

  .entityTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }    
  #MD_PARENT_START {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  #MD_PARENT_END {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  
`,"getStyles"),_e=fe,Ne={parser:Wt,db:Qt,renderer:pe,styles:_e};export{Ne as diagram};
