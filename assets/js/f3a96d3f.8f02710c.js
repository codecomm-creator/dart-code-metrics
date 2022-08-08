"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[6461],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(t),y=a,p=u["".concat(l,".").concat(y)]||u[y]||d[y]||i;return t?r.createElement(p,o(o({ref:n},c),{},{components:t})):r.createElement(p,o({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5321:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294);function a(e){let{hasConfig:n,hasFix:t,isDeprecated:a}=e;return r.createElement("div",{className:"rule-options"},n&&r.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),t&&r.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&r.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function i(e){let{severity:n,version:t,hasConfig:i,hasFix:o,isDeprecated:s}=e;const l=null==n?void 0:n.toLowerCase();return r.createElement("div",{className:"rule-additional-info"},r.createElement("div",null,r.createElement("span",{className:"added-in-label"},"added in:")," ",t),r.createElement("div",{className:"rule-severity "+l},l),r.createElement(a,{hasConfig:i,hasFix:o,isDeprecated:s}))}},8346:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var r=t(7462),a=t(7294),i=t(3905),o=t(5321);function s(e){let{link:n}=e;return a.createElement("button",{className:"copy-button",onClick:e=>{e.preventDefault(),window.navigator.clipboard.writeText(n)}},a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 20 20",role:"img","aria-label":"copy",fill:"none",focusable:"false"},a.createElement("path",{d:"M4.16667 12.5H3.33333C2.89131 12.5 2.46738 12.3244 2.15482 12.0118C1.84226 11.6993 1.66667 11.2754 1.66667 10.8333V3.33332C1.66667 2.8913 1.84226 2.46737 2.15482 2.15481C2.46738 1.84225 2.89131 1.66666 3.33333 1.66666H10.8333C11.2754 1.66666 11.6993 1.84225 12.0118 2.15481C12.3244 2.46737 12.5 2.8913 12.5 3.33332V4.16666M9.16667 7.49999H16.6667C17.5871 7.49999 18.3333 8.24618 18.3333 9.16666V16.6667C18.3333 17.5871 17.5871 18.3333 16.6667 18.3333H9.16667C8.24619 18.3333 7.5 17.5871 7.5 16.6667V9.16666C7.5 8.24618 8.24619 7.49999 9.16667 7.49999Z",stroke:"currentColor",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"})))}function l(e){let{name:n}=e;return a.createElement("div",null,a.createElement("span",null,n),a.createElement(s,{link:n}))}function m(e){let{name:n,type:t,version:r,severity:i,children:s,hasConfig:m,hasFix:c,isDeprecated:d}=e;const u="rules/"+t+"/"+n;return a.createElement("div",{className:"rule-entry"},a.createElement("div",{className:"rule-content"},a.createElement("a",{className:"rule-link",href:u},a.createElement(l,{name:n})),a.createElement("p",{className:"rule-description"},s),a.createElement(o.Z,{version:r,severity:i,hasConfig:m,hasFix:c,isDeprecated:d})))}const c={},d="Rules",u={unversionedId:"rules/index",id:"rules/index",title:"Rules",description:"General rules configuration is described here.",source:"@site/docs/rules/index.mdx",sourceDirName:"rules",slug:"/rules/",permalink:"/docs/rules/",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Check unused l10n",permalink:"/docs/cli/check-unused-l10n"},next:{title:"avoid-banned-imports",permalink:"/docs/rules/common/avoid-banned-imports"}},y={},p=[{value:"Common",id:"common",level:2},{value:"Flutter specific",id:"flutter-specific",level:2},{value:"Intl specific",id:"intl-specific",level:2},{value:"Angular specific",id:"angular-specific",level:2}],v={toc:p};function h(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rules"},"Rules"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"General rules configuration is ",(0,i.kt)("a",{parentName:"p",href:"./getting-started/configuration#configuring-a-rules-entry"},"described here"),".")),(0,i.kt)("p",null,"Rules are grouped by category to help you understand their purpose. Each rule has emojis denoting:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2699\ufe0f - this rule is configurable"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udee0 - some problems reported by this rule can be fixed by editor suggestions"),(0,i.kt)("li",{parentName:"ul"},"\u26a0\ufe0f - this rule is deprecated and will be removed in the next major release")),(0,i.kt)("h2",{id:"common"},"Common"),(0,i.kt)(m,{name:"avoid-banned-imports",type:"common",severity:"style",version:"4.16.0",hasConfig:!0,mdxType:"RuleEntry"},"Configure some imports that you want to ban."),(0,i.kt)(m,{name:"avoid-collection-methods-with-unrelated-types",type:"common",severity:"warning",version:"4.14.0",mdxType:"RuleEntry"},"Avoid using collection methods with unrelated types, such as accessing a map of integers using a string key."),(0,i.kt)(m,{name:"avoid-duplicate-exports",type:"common",severity:"warning",version:"4.17.0",mdxType:"RuleEntry"},"Warns when a file has multiple ",(0,i.kt)("code",null,"exports")," declarations with the same URI."),(0,i.kt)(m,{name:"avoid-dynamic",type:"common",severity:"warning",version:"4.11.0",mdxType:"RuleEntry"},"Warns when ",(0,i.kt)("code",null,"dynamic")," type is used as variable type in declaration, return type of a function, etc."),(0,i.kt)(m,{name:"avoid-global-state",type:"common",severity:"warning",version:"4.10.0",mdxType:"RuleEntry"},"Warns about usage mutable global variables."),(0,i.kt)(m,{name:"avoid-ignoring-return-values",type:"common",severity:"warning",version:"4.2.0",mdxType:"RuleEntry"},"Warns when a return value of a method or function invocation or a class instance property access is not used."),(0,i.kt)(m,{name:"avoid-late-keyword",type:"common",severity:"warning",version:"3.2.0",mdxType:"RuleEntry"},"Warns when a field or variable is declared with a ",(0,i.kt)("code",null,"late")," keyword."),(0,i.kt)(m,{name:"avoid-missing-enum-constant-in-map",type:"common",severity:"warning",version:"4.7.0",mdxType:"RuleEntry"},"Warns when a enum constant is missing in a map declaration."),(0,i.kt)(m,{name:"avoid-nested-conditional-expressions",type:"common",severity:"style",version:"4.5.0",mdxType:"RuleEntry"},"Warns about nested conditional expressions."),(0,i.kt)(m,{name:"avoid-non-ascii-symbols",type:"common",severity:"warning",version:"4.15.0",mdxType:"RuleEntry"},"Warns when a string literal contains non ascii characters."),(0,i.kt)(m,{name:"avoid-non-null-assertion",type:"common",severity:"warning",version:"3.2.0",mdxType:"RuleEntry"},"Warns when non null assertion operator ",(0,i.kt)("code",null,"!")," (or \u201cbang\u201d operator) is used for a property access or method invocation. The operator check works at runtime and it may fail and throw a runtime exception."),(0,i.kt)(m,{name:"avoid-throw-in-catch-block",type:"common",severity:"warning",version:"4.7.0",mdxType:"RuleEntry"},"Warns when call ",(0,i.kt)("code",null,"throw")," in a catch block."),(0,i.kt)(m,{name:"avoid-top-level-members-in-tests",type:"common",severity:"warning",version:"4.17.0",mdxType:"RuleEntry"},"Warns when a public top-level member (except the entrypoint) is declared inside a test file."),(0,i.kt)(m,{name:"avoid-unnecessary-type-assertions",type:"common",severity:"warning",version:"4.7.0",mdxType:"RuleEntry"},"Warns about unnecessary usage of ",(0,i.kt)("code",null,"is")," and ",(0,i.kt)("code",null,"whereType")," ","operators."),(0,i.kt)(m,{name:"avoid-unnecessary-type-casts",type:"common",severity:"warning",version:"4.7.0",mdxType:"RuleEntry"},"Warns about unnecessary usage of ",(0,i.kt)("code",null,"as")," operators."),(0,i.kt)(m,{name:"avoid-unrelated-type-assertions",type:"common",severity:"warning",version:"4.9.0",mdxType:"RuleEntry"},"Warns about unrelated usages of ",(0,i.kt)("code",null,"is")," operators."),(0,i.kt)(m,{name:"avoid-unused-parameters",type:"common",severity:"warning",version:"2.4.0",mdxType:"RuleEntry"},"Checks for unused parameters inside a function or method body."),(0,i.kt)(m,{name:"ban-name",type:"common",severity:"style",version:"4.12.0",hasConfig:!0,mdxType:"RuleEntry"},"Configure some names that you want to ban."),(0,i.kt)(m,{name:"binary-expression-operand-order",type:"common",severity:"style",version:"1.7.0",hasFix:!0,mdxType:"RuleEntry"},"Warns when a literal value is on the left hand side in a binary expressions."),(0,i.kt)(m,{name:"double-literal-format",type:"common",severity:"style",version:"1.5.0",hasFix:!0,mdxType:"RuleEntry"},"Checks that double literals should begin with ",(0,i.kt)("code",null,"0.")," instead of just"," ",(0,i.kt)("code",null,"."),", and should not end with a trailing ",(0,i.kt)("code",null,"0"),"."),(0,i.kt)(m,{name:"format-comment",type:"common",severity:"style",version:"4.11.0",hasConfig:!0,hasFix:!0,mdxType:"RuleEntry"},"Prefer format comments like sentences."),(0,i.kt)(m,{name:"member-ordering",type:"common",severity:"style",version:"1.8.0",hasConfig:!0,isDeprecated:!0,mdxType:"RuleEntry"},"Enforces ordering for a class members."),(0,i.kt)(m,{name:"member-ordering-extended",type:"common",severity:"style",version:"3.0.0",hasConfig:!0,mdxType:"RuleEntry"},"Enforces ordering for a class members."),(0,i.kt)(m,{name:"newline-before-return",type:"common",severity:"style",version:"1.5.1",hasConfig:!0,mdxType:"RuleEntry"},"Enforces blank line between statements and return in a block."),(0,i.kt)(m,{name:"no-boolean-literal-compare",type:"common",severity:"style",version:"1.5.0",hasFix:!0,mdxType:"RuleEntry"},"Warns on comparison to a boolean literal, as in ",(0,i.kt)("code",null,"x == true"),"."),(0,i.kt)(m,{name:"no-empty-block",type:"common",severity:"style",version:"1.5.1",mdxType:"RuleEntry"},"Disallows empty blocks except catch clause block."),(0,i.kt)(m,{name:"no-equal-arguments",type:"common",severity:"warning",version:"2.1.0",hasConfig:!0,mdxType:"RuleEntry"},"Warns when equal arguments are passed to a function or method invocation."),(0,i.kt)(m,{name:"no-equal-then-else",type:"common",severity:"warning",version:"1.10.0",mdxType:"RuleEntry"},"Warns when if statement has equal then and else statements or conditional expression has equal then and else expressions."),(0,i.kt)(m,{name:"no-magic-number",type:"common",severity:"warning",version:"1.6.0",hasConfig:!0,mdxType:"RuleEntry"},"Warns against using number literals outside of named constants or variables."),(0,i.kt)(m,{name:"no-object-declaration",type:"common",severity:"style",version:"1.8.0",mdxType:"RuleEntry"},"Warns when a class member is declared with ",(0,i.kt)("code",null,"Object")," type."),(0,i.kt)(m,{name:"prefer-async-await",type:"common",severity:"style",version:"4.11.0",mdxType:"RuleEntry"},"Recommends to use ",(0,i.kt)("code",null,"async/await")," syntax to handle a"," ",(0,i.kt)("code",null,"Future")," result instead of ",(0,i.kt)("code",null,".then()")," invocation."),(0,i.kt)(m,{name:"prefer-commenting-analyzer-ignores",type:"common",severity:"warning",version:"4.14.0",mdxType:"RuleEntry"},"Warns when ",(0,i.kt)("code",null,"// ignore:")," comments are left without any additional description why this ignore is applied."),(0,i.kt)(m,{name:"prefer-conditional-expressions",type:"common",severity:"style",version:"1.8.0",hasFix:!0,mdxType:"RuleEntry"},"Recommends to use a conditional expression instead of assigning to the same thing or return statement in each branch of an if statement."),(0,i.kt)(m,{name:"prefer-correct-identifier-length",type:"common",severity:"style",version:"4.5.0",hasConfig:!0,mdxType:"RuleEntry"},"Warns when an identifier name length is very short or long."),(0,i.kt)(m,{name:"prefer-correct-type-name",type:"common",severity:"style",version:"4.5.0",hasConfig:!0,mdxType:"RuleEntry"},"Type name should only contain alphanumeric characters, start with an uppercase character and span between min-length and max-length characters in length."),(0,i.kt)(m,{name:"prefer-enums-by-name",severity:"style",version:"4.17.0",type:"common",mdxType:"RuleEntry"},"Since Dart 2.15 it's possible to use ",(0,i.kt)("code",null,"byName")," method on enum"," ",(0,i.kt)("code",null,"values")," prop instead of searching the value with"," ",(0,i.kt)("code",null,"firstWhere"),"."),(0,i.kt)(m,{name:"prefer-first",type:"common",severity:"style",version:"4.5.0",hasFix:!0,mdxType:"RuleEntry"},"Use ",(0,i.kt)("code",null,"first")," to gets the first element."),(0,i.kt)(m,{name:"prefer-immediate-return",type:"common",severity:"style",version:"4.13.0",hasFix:!0,mdxType:"RuleEntry"},"Warns when a method or a function returns a variable declared right before the return statement."),(0,i.kt)(m,{name:"prefer-last",type:"common",severity:"style",version:"4.5.0",hasFix:!0,mdxType:"RuleEntry"},"Use ",(0,i.kt)("code",null,"last")," to gets the last element."),(0,i.kt)(m,{name:"prefer-match-file-name",type:"common",severity:"warning",version:"4.2.0",mdxType:"RuleEntry"},"Warns when a file name does not match the class name."),(0,i.kt)(m,{name:"prefer-moving-to-variable",type:"common",severity:"warning",version:"4.14.0",hasConfig:!0,mdxType:"RuleEntry"},"Warns when a property access or a method invocation start with duplicated chains of other invocations / accesses inside a single function or method block."),(0,i.kt)(m,{name:"prefer-trailing-comma",type:"common",severity:"warning",version:"2.2.0",hasConfig:!0,hasFix:!0,mdxType:"RuleEntry"},"Checks for a trailing comma for arguments, parameters, enum values and collections."),(0,i.kt)(m,{name:"tag-name",type:"common",severity:"warning",version:"4.12.0",hasConfig:!0,hasFix:!0,mdxType:"RuleEntry"},"Warns when a tag name does not match the class name."),(0,i.kt)("h2",{id:"flutter-specific"},"Flutter specific"),(0,i.kt)(m,{name:"always-remove-listener",type:"flutter",severity:"warning",version:"4.0.0",mdxType:"RuleEntry"},"Warns when an event listener is added but never removed."),(0,i.kt)(m,{name:"avoid-border-all",type:"flutter",severity:"performance",version:"4.11.0",hasFix:!0,mdxType:"RuleEntry"},"Avoid using Border.all constructor."),(0,i.kt)(m,{name:"avoid-returning-widgets",type:"flutter",severity:"warning",version:"3.1.0",hasConfig:!0,mdxType:"RuleEntry"},"Warns when a method or function returns a Widget or subclass of a Widget."),(0,i.kt)(m,{name:"avoid-shrink-wrap-in-lists",type:"flutter",severity:"performance",version:"4.17.0",mdxType:"RuleEntry"},"Warns when a ",(0,i.kt)("code",null,"ListView")," widget with ",(0,i.kt)("code",null,"shrinkWrap")," ","parameter is wrapped in a ",(0,i.kt)("code",null,"Column"),", ",(0,i.kt)("code",null,"Row")," or another"," ",(0,i.kt)("code",null,"ListView")," widget."),(0,i.kt)(m,{name:"avoid-unnecessary-setstate",type:"flutter",severity:"warning",version:"4.0.0",mdxType:"RuleEntry"},"Warns when ",(0,i.kt)("code",null,"setState")," is called inside ",(0,i.kt)("code",null,"initState"),","," ",(0,i.kt)("code",null,"didUpdateWidget")," or ",(0,i.kt)("code",null,"build")," methods and when it is called from a ",(0,i.kt)("code",null,"sync")," method that is called inside those methods."),(0,i.kt)(m,{name:"avoid-use-expanded-as-spacer",type:"flutter",severity:"warning",version:"4.17.0",hasFix:!0,mdxType:"RuleEntry"},"Avoid using Expanded widget as Spacer."),(0,i.kt)(m,{name:"avoid-wrapping-in-padding",type:"flutter",severity:"warning",version:"4.0.0",mdxType:"RuleEntry"},"Warns when a widget is wrapped in a Padding widget but has a padding settings by itself."),(0,i.kt)(m,{name:"prefer-const-border-radius",type:"flutter",severity:"performance",version:"4.4.0",hasFix:!0,mdxType:"RuleEntry"},"Warns when a non-const border radius is used."),(0,i.kt)(m,{name:"prefer-correct-edge-insets-constructor",type:"flutter",severity:"style",version:"4.17.0",hasFix:!0,mdxType:"RuleEntry"},"Prefer correct ",(0,i.kt)("code",null,"EdgeInsets")," constructor."),(0,i.kt)(m,{name:"prefer-extracting-callbacks",type:"flutter",severity:"style",version:"4.0.0",hasConfig:!0,mdxType:"RuleEntry"},"Warns about inline callbacks in a widget tree and suggest to extract them to a widget method."),(0,i.kt)(m,{name:"prefer-single-widget-per-file",type:"flutter",severity:"style",version:"4.2.0",hasConfig:!0,mdxType:"RuleEntry"},"Warns when a file contains more than a single widget."),(0,i.kt)("h2",{id:"intl-specific"},"Intl specific"),(0,i.kt)(m,{name:"prefer-intl-name",type:"intl",severity:"style",version:"1.7.0",hasFix:!0,mdxType:"RuleEntry"},"Recommends to use ",(0,i.kt)("code",null,"ClassName_ClassMemberName")," pattern for Intl methods name argument."),(0,i.kt)(m,{name:"provide-correct-intl-args",type:"intl",severity:"warning",version:"1.9.0",mdxType:"RuleEntry"},"Warns when the ",(0,i.kt)("code",null,"Intl.message()")," invocation has incorrect args."),(0,i.kt)("h2",{id:"angular-specific"},"Angular specific"),(0,i.kt)(m,{name:"avoid-preserve-whitespace-false",type:"angular",severity:"warning",version:"1.5.1",mdxType:"RuleEntry"},"Warns when a ",(0,i.kt)("code",null,"@Component")," annotation has explicit false value for"," ",(0,i.kt)("code",null,"preserveWhitespace"),"."),(0,i.kt)(m,{name:"component-annotation-arguments-ordering",type:"angular",severity:"style",version:"1.9.0",hasConfig:!0,mdxType:"RuleEntry"},"Enforces Angular ",(0,i.kt)("code",null,"@Component")," annotation arguments ordering."),(0,i.kt)(m,{name:"prefer-on-push-cd-strategy",type:"angular",severity:"warning",version:"1.8.0",mdxType:"RuleEntry"},"Prefer setting ",(0,i.kt)("code",null,"changeDetection: ChangeDetectionStrategy.OnPush")," in Angular ",(0,i.kt)("code",null,"@Component")," annotations."))}h.isMDXComponent=!0}}]);