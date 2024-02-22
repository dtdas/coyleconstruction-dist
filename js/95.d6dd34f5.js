"use strict";(self["webpackChunkcoyleconstruction"]=self["webpackChunkcoyleconstruction"]||[]).push([[95],{7095:function(t,e,i){i.r(e),i.d(e,{default:function(){return y}});var s=i(8716),n=i(604),a=i(4838),r=i(6543),o=i(3507),l=i(6960),u=(0,o.A)(n.A,(0,a.A)("footer",["height","inset"]),r.A).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...n.A.options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...n.A.options.computed.styles.call(this),height:isNaN(t)?t:(0,l.Dg)(t),left:(0,l.Dg)(this.computedLeft),right:(0,l.Dg)(this.computedRight),bottom:(0,l.Dg)(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,(0,l.$c)(this))}}),h=i(8412),c=i(7410),d=function(){var t=this,e=t._self._c;return e(u,{staticClass:"my-3 mx-auto",attrs:{absolute:"",color:"transparent",height:"auto","max-width":"95%"}},[e(h.A,{attrs:{justify:"center"}},[t._l(t.links,(function([i,n],a){return e(s.A,{key:`link-${a}`,staticClass:"mx-auto hidden-sm-and-down",attrs:{to:i,small:"",text:""}},[t._v(" "+t._s(n)+" ")])})),e(c.A)],2)],1)},p=[],g=i(5353),v={name:"CoreFooter",data:()=>({socials:[["https://github.com/dtdas","mdi-git"],["https://www.linkedin.com/in/james-morse-5a4a4095/","mdi-linkedin"]]}),computed:{...(0,g.aH)("app",["links"]),categories(){return[]}}},f=v,m=i(845),b=(0,m.A)(f,d,p,!1,null,null,null),y=b.exports},8716:function(t,e,i){i.d(e,{A:function(){return b}});var s=i(7495),n=i(6965),a=i(8767),r=i(6960),o=a.A.extend({name:"v-progress-circular",directives:{intersect:n.A},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,r.Dg)(this.calculatedSize),width:(0,r.Dg)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},(0,r.$c)(this))},onObserve(t,e,i){this.isVisible=i}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),l=o,u=i(4387),h=i(9748),c=i(5083),d=i(9923),p=i(8010),g=i(1713),v=i(3507),f=i(5604);const m=(0,v.A)(s.A,p.A,d.A,g.A,(0,u.P)("btnToggle"),(0,h.P)("inputValue"));var b=m.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...p.A.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return c.A.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!==(t=this.ripple)&&void 0!==t?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,f.q4)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},(0,r.$c)(this))},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},(0,r.$c)(this,"loader")||[this.$createElement(l,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:i,data:s}=this.generateRouteLink(),n=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===i&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(i,this.disabled?s:n(this.color,s),e)}})},8412:function(t,e,i){i(4114),i(3766);var s=i(5471),n=i(4961),a=i(6960);const r=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return r.reduce(((i,s)=>(i[t+(0,a.Zb)(s)]=e(),i)),{})}const u=t=>[...o,"baseline","stretch"].includes(t),h=l("align",(()=>({type:String,default:null,validator:u}))),c=t=>[...o,"space-between","space-around"].includes(t),d=l("justify",(()=>({type:String,default:null,validator:c}))),p=t=>[...o,"space-between","space-around","stretch"].includes(t),g=l("alignContent",(()=>({type:String,default:null,validator:p}))),v={align:Object.keys(h),justify:Object.keys(d),alignContent:Object.keys(g)},f={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,i){let s=f[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const b=new Map;e.A=s.Ay.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...h,justify:{type:String,default:null,validator:c},...d,alignContent:{type:String,default:null,validator:p},...g},render(t,{props:e,data:i,children:s}){let a="";for(const n in e)a+=String(e[n]);let r=b.get(a);if(!r){let t;for(t in r=[],v)v[t].forEach((i=>{const s=e[i],n=m(t,i,s);n&&r.push(n)}));r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(a,r)}return t(e.tag,(0,n.Ay)(i,{staticClass:"row",class:r}),s)}})},7410:function(t,e,i){i(5941);var s=i(6960);e.A=(0,s.Gn)("spacer","div","v-spacer")},4838:function(t,e,i){i.d(e,{A:function(){return a}});var s=i(9923),n=i(3507);function a(t,e=[]){return(0,n.A)((0,s.P)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},4387:function(t,e,i){i.d(e,{P:function(){return n}});var s=i(8652);function n(t,e,i){return(0,s.W)(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(t){this.disabled&&t?t.preventDefault():this.$emit("change")}}})}n("itemGroup")},8652:function(t,e,i){i.d(e,{W:function(){return r}});var s=i(5471),n=i(5604);function a(t,e){return()=>(0,n.OP)(`The ${t} component must be used inside a ${e}`)}function r(t,e,i){const n=e&&i?{register:a(e,i),unregister:a(e,i)}:null;return s.Ay.extend({name:"registrable-inject",inject:{[t]:{default:n}}})}},1713:function(t,e,i){var s=i(5471);e.A=s.Ay.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},6543:function(t,e,i){var s=i(5471);e.A=s.Ay.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})},9748:function(t,e,i){i.d(e,{P:function(){return n}});var s=i(5471);function n(t="value",e="input"){return s.Ay.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(i){!!i!==this[t]&&this.$emit(e,i)}}})}const a=n();e.A=a}}]);
//# sourceMappingURL=95.d6dd34f5.js.map