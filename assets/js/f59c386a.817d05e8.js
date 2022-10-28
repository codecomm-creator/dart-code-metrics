"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[3221],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9535:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={},o="Check unnecessary nullable parameters",s={unversionedId:"cli/check-unnecessary-nullable",id:"cli/check-unnecessary-nullable",title:"Check unnecessary nullable parameters",description:"Checks unnecessary nullable parameters in functions, methods, constructors. Removing unnecessary nullables can help reduce amount of checks in the code.",source:"@site/docs/cli/check-unnecessary-nullable.md",sourceDirName:"cli",slug:"/cli/check-unnecessary-nullable",permalink:"/docs/cli/check-unnecessary-nullable",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/cli/check-unnecessary-nullable.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Analyze",permalink:"/docs/cli/analyze"},next:{title:"Check unused code",permalink:"/docs/cli/check-unused-code"}},i={},c=[{value:"Suppressing the command",id:"suppressing-the-command",level:2},{value:"Monorepo support",id:"monorepo-support",level:2},{value:"Output example",id:"output-example",level:2},{value:"Console",id:"console",level:3},{value:"JSON",id:"json",level:3},{value:"The <strong>root</strong> object fields are",id:"the-root-object-fields-are",level:4},{value:"The <strong>unnecessaryNullable</strong> object fields are",id:"the-unnecessarynullable-object-fields-are",level:4},{value:"The <strong>issue</strong> object fields are",id:"the-issue-object-fields-are",level:4}],u={toc:c};function p(e){let{components:n,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"check-unnecessary-nullable-parameters"},"Check unnecessary nullable parameters"),(0,r.kt)("p",null,"Checks unnecessary nullable parameters in functions, methods, constructors. Removing unnecessary nullables can help reduce amount of checks in the code."),(0,r.kt)("p",null,"To execute the command, run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ dart run dart_code_metrics:metrics check-unnecessary-nullable lib\n\n# or for a Flutter package\n$ flutter pub run dart_code_metrics:metrics check-unnecessary-nullable lib\n")),(0,r.kt)("p",null,"Full command description:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Usage: metrics check-unnecessary-nullable [arguments] <directories>\n-h, --help                                        Print this usage information.\n\n\n-r, --reporter=<console>                          The format of the output of the analysis.\n                                                  [console (default), json]\n\n-c, --print-config                                Print resolved config.\n\n\n    --root-folder=<./>                            Root folder.\n                                                  (defaults to current directory)\n    --sdk-path=<directory-path>                   Dart SDK directory path. Should be provided only when you run the application as compiled executable(https://dart.dev/tools/dart-compile#exe) and automatic Dart SDK path detection fails.\n    --exclude=<{/**.g.dart,/**.template.dart}>    File paths in Glob syntax to be exclude.\n                                                  (defaults to "{/**.g.dart,/**.template.dart}")\n\n\n    --no-congratulate                             Don\'t show output even when there are no issues.\n\n\n    --[no-]monorepo                               Treat all exported code with parameters as non-nullable by default.\n\n\n    --[no-]fatal-found                            Treat found unnecessary nullable parameters as fatal.\n')),(0,r.kt)("h2",{id:"suppressing-the-command"},"Suppressing the command"),(0,r.kt)("p",null,"In order to suppress the command add the ",(0,r.kt)("inlineCode",{parentName:"p"},"ignore: unnecessary-nullable")," comment. To suppress for an entire file add ",(0,r.kt)("inlineCode",{parentName:"p"},"ignore_for_file: unnecessary-nullable")," to the beginning of a file."),(0,r.kt)("h2",{id:"monorepo-support"},"Monorepo support"),(0,r.kt)("p",null,"By default the command treats all code that is exported from the package as used. To disable this behavior use ",(0,r.kt)("inlineCode",{parentName:"p"},"--monorepo")," flag. This might be useful when all the packages in your repository are only used within the repository and are not published to the pub."),(0,r.kt)("h2",{id:"output-example"},"Output example"),(0,r.kt)("h3",{id:"console"},"Console"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"--reporter=console")," to enable this format."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Console",src:t(603).Z,width:"1472",height:"976"})),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("p",null,"The reporter prints a single JSON object containing meta information and the unnecessary nullable parameters. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"--reporter=json")," to enable this format."),(0,r.kt)("h4",{id:"the-root-object-fields-are"},"The ",(0,r.kt)("strong",{parentName:"h4"},"root")," object fields are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"formatVersion")," - an integer representing the format version (will be incremented each time the serialization format changes)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," - a creation time of the report in YYYY-MM-DD HH:MM:SS format"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unnecessaryNullable")," - an array of ",(0,r.kt)("a",{parentName:"li",href:"#the-unnecessarynullable-object-fields-are"},"unnecessary nullable issues"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "formatVersion": 2,\n  "timestamp": "2021-04-11 14:44:42",\n  "unnecessaryNullable": [\n    {\n      ...\n    },\n    {\n      ...\n    },\n    {\n      ...\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"the-unnecessarynullable-object-fields-are"},"The ",(0,r.kt)("strong",{parentName:"h4"},"unnecessaryNullable")," object fields are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," - a relative path of the file with unnecessary nullable parameters declaration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"issues")," - an array of ",(0,r.kt)("a",{parentName:"li",href:"#the-issue-object-fields-are"},"issues")," detected in the target class")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "path": "lib/src/some/class.dart",\n  "issues": [\n    ...\n  ],\n}\n')),(0,r.kt)("h4",{id:"the-issue-object-fields-are"},"The ",(0,r.kt)("strong",{parentName:"h4"},"issue")," object fields are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"declarationName")," - the name of a declaration with unnecessary nullable parameters"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"declarationType")," - the type of a declaration with unnecessary nullable parameters (function, method or constructor)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parameters")," - an array of strings representing parameters that are marked as nullable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"offset")," - a zero-based offset of the class member location in the source"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"line")," - a zero-based line of the class member  location in the source"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"column")," - a zero-based column of class member  the location in the source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "declarationName": "someFunction",\n  "declarationType": "function",\n  "parameters": "[String? value]",\n  "offset": 156,\n  "line": 7,\n  "column": 1\n}\n')))}p.isMDXComponent=!0},603:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/unnecessary-nullable-console-report-93eb0483e41215992613be21ae429fc0.png"}}]);