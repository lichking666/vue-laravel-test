webpackJsonp([1],{"1WHe":function(t,e){},"25TK":function(t,e){},"8aAr":function(t,e){},"9JkL":function(t,e){},Lij3:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("IvJb"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=a("C7Lr")({name:"App"},s,!1,function(t){a("s7yO")},null,null).exports,i=a("zO6J");var r={name:"home",data:function(){return{joinnum:"11763",company:"宁夏远拓网络科技有限公司",username:"",userphone:"",logo:"static/logo.jpg"}},created:function(){var t=this;this.$http.post("http://sgh2.clarkwan.com/api/notice").then(function(e){t.joinnum=e.data.data.num})},methods:{startanswer:function(){var t,e=this;""==this.userphone?alert("请先输入手机号"):(t=this.userphone,/^[1][3,4,5,7,8,6][0-9]{9}$/.test(t)?""==e.username?alert("请输入姓名"):e.username<2||e.username>4?alert("请输入正确姓名"):this.$http.get("http://sgh2.clarkwan.com/api/question/checkNum",{params:{mobile:e.userphone}}).then(function(t){console.log(t),"可作答"==t.data.msg?e.$router.push("/answer?name="+e.username+"&phone="+e.userphone):alert("您今日已回答过问题，请明日再来")}):alert("请输入正确手机号"))}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"text-align":"center"}},[a("mybackground"),t._v(" "),a("div",[a("img",{staticClass:"logo",attrs:{src:t.logo,alt:""}})]),t._v(" "),a("div",{staticClass:"userinfo"},[a("div",[a("p",[t._v("请输入姓名：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"usermsg",attrs:{type:"text",placeholder:"姓名必填"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("div",[a("p",[t._v("请输入手机号：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userphone,expression:"userphone"}],staticClass:"usermsg",attrs:{type:"number",placeholder:"手机号必填"},domProps:{value:t.userphone},on:{input:function(e){e.target.composing||(t.userphone=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"makedown"},[a("button",{staticClass:"homebutton",on:{click:t.startanswer}},[t._v("开始答题")]),t._v(" "),a("button",{staticClass:"homebutton"},[t._v("已经有"+t._s(t.joinnum)+"人参与此活动")]),t._v(" "),a("button",{staticClass:"homebutton"},[t._v("分享我的快乐")]),t._v(" "),a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"http://www.yuantuoc.com/"}},[a("button",{staticClass:"homebutton"},[t._v("技术支持："+t._s(t.company))])])]),t._v(" "),a("myfooter",{attrs:{where:"home"}})],1)},staticRenderFns:[]};var c=a("C7Lr")(r,u,!1,function(t){a("25TK")},"data-v-17da417d",null).exports,l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mybackground"),t._v(" "),a("button",{staticClass:"homebutton"},[t._v("活动时间")]),t._v(" "),a("p",{staticClass:"timerule"},[t._v(t._s(t.time))]),t._v(" "),a("button",{staticClass:"homebutton"},[t._v("活动说明")]),t._v(" "),a("p",{staticClass:"ruletext",domProps:{innerHTML:t._s(t.rule)}}),t._v(" "),a("myfooter",{attrs:{where:"rule"}})],1)},staticRenderFns:[]};var v=a("C7Lr")({name:"rule",data:function(){return{time:"",rule:""}},created:function(){var t=this;this.$http.post("http://sgh2.clarkwan.com/api/notice").then(function(e){t.time=e.data.data.time,t.rule=e.data.data.content})}},l,!1,function(t){a("8aAr")},"data-v-0bd5819e",null).exports,d=a("aA9S"),m=a.n(d),p={name:"rank",data:function(){return{time:"",rule:"",ranks:[]}},created:function(){void 0!=this.$route.query.mark&&alert("恭喜你本次得分"+this.$route.query.mark+"分");var t=this;this.$http.post("http://sgh2.clarkwan.com/api/question/rankingList").then(function(e){console.log(e);for(var a=0;a<=e.data.data.length;a++){var n=m()({},e.data.data[a]);n.name=e.data.data[a].name,n.num=a+1,n.mark=e.data.data[a].grade,t.$set(t.ranks,a,n)}})}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mybackground"),t._v(" "),a("button",{staticClass:"homebutton"},[t._v("排行榜")]),t._v(" "),t._l(t.ranks,function(e){return a("div",{staticClass:"rank"},[a("p",[t._v(t._s(e.num))]),t._v(" "),a("p",[t._v(t._s(e.name))]),t._v(" "),a("p",[t._v("得分："+t._s(e.mark))])])}),t._v(" "),a("myfooter",{attrs:{where:"rank"}})],2)},staticRenderFns:[]};var _=a("C7Lr")(p,h,!1,function(t){a("1WHe")},"data-v-0a0b9947",null).exports,f={name:"answer",created:function(){var t=this;this.$http.post("http://sgh2.clarkwan.com/api/question/index").then(function(e){console.log(e);for(var a=0;a<=e.data.data.num;a++){var n=m()({},e.data.data.question[a]);switch(n.question=e.data.data.question[a].question,n.index=a+1,n.opion_a=e.data.data.question[a].option_a,n.opion_b=e.data.data.question[a].option_b,n.opion_c=e.data.data.question[a].option_c,n.opion_d=e.data.data.question[a].option_d,e.data.data.question[a].true_option){case 0:n.true_option="a";break;case 1:n.true_option="b";break;case 2:n.true_option="c";break;case 3:n.true_option="d"}n.num="answer"+a,t.$set(t.questions,a,n)}})},data:function(){return{questions:[],phone:this.$route.query.phone,name:this.$route.query.name,mark:0,questionnum:0,tips:"",ontips:!1,haveclick:!1,countdown:20,logo:"static/logo.jpg"}},methods:{startanswer:function(){var t=this;this.questionnum++;window.setInterval(function(){t.countdown--,t.countdown<=0&&t.$options.methods.nextquestion.bind(t)()},1e3)},nextquestion:function(){var t=this;if(1==this.haveclick){this.questionnum++,this.haveclick=!1,this.ontips=!1,this.countdown=20;var e=window.setInterval(function(){t.countdown--,t.countdown<=0&&(t.$options.methods.nextquestion(),window.clearInterval(e))},1e3);window.clearInterval(e)}else for(var a=this.questionnum-1,n=document.getElementsByClassName("answer"+a),s=0;s<n.length;s++)n[s].disabled=!0,n[s].checked&&(n[s].value==this.questions[a].true_option?(this.countdown=20,this.mark++,this.questionnum++,this.haveclick=!1,this.ontips=!1,window.clearInterval(e)):(this.ontips=!0,this.tips="该题正确答案为"+this.questions[a].true_option,this.haveclick=!0))},goback:function(){this.$router.push("/")},giveanswer:function(){if(void 0==this.phone)alert("请从正式渠道进入");else{var t=this;this.$http.get("http://sgh2.clarkwan.com/api/question/getUserinfo",{params:{mobile:t.phone,name:t.name,grade:t.mark}}).then(function(e){console.log(e),1==e.data.status&&t.$router.push("/rank?mark="+t.mark)})}}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mybackground"),t._v(" "),a("div",[a("p",{staticClass:"back",on:{click:t.goback}},[t._v("\n            <返回\n        ")])]),t._v(" "),a("div",[a("img",{staticClass:"logo",attrs:{src:t.logo,alt:""}})]),t._v(" "),a("div",{staticClass:"padding"},[t.countdown>=0?a("div",[t._v("倒计时:"+t._s(t.countdown))]):t._e(),t._v(" "),t._l(t.questions,function(e){return e.index==t.questionnum?a("div",{staticClass:"questionall"},[a("p",[t._v("题目"+t._s(e.index)+":"+t._s(e.question))]),t._v(" "),a("div",{staticClass:"qqq"},[t._v("\n                A:"),a("input",{class:e.num,attrs:{type:"radio",name:e.index,value:"a",checked:""}}),t._v(t._s(e.option_a)+"\n            ")]),t._v(" "),a("div",{staticClass:"qqq"},[t._v("\n                B:"),a("input",{class:e.num,attrs:{type:"radio",name:e.index,value:"b"}}),t._v(t._s(e.option_b)+"\n            ")]),t._v(" "),a("div",{staticClass:"qqq"},[t._v("\n                C:"),a("input",{class:e.num,attrs:{type:"radio",name:e.index,value:"c"}}),t._v(t._s(e.option_c)+"\n            ")]),t._v(" "),a("div",{staticClass:"qqq"},[t._v("\n                D:"),a("input",{class:e.num,attrs:{type:"radio",name:e.index,value:"d"}}),t._v(t._s(e.option_d)+"\n            ")])]):t._e()}),t._v(" "),0==t.questionnum?a("div",[a("button",{staticClass:"overanswer homebutton",on:{click:t.startanswer}},[t._v("开始作答")]),t._v(" "),a("p",{staticClass:"timerule"},[t._v("共20道题，每道题限时20秒，若回答正确则进入下题，若回答错误则提示正确答案")])]):t._e(),t._v(" "),20!=t.questionnum&&0!=t.questionnum?a("button",{staticClass:"overanswer homebutton",on:{click:t.nextquestion}},[t._v("\n            下一题\n        ")]):t._e(),t._v(" "),20==t.questionnum?a("button",{staticClass:"overanswer homebutton",on:{click:t.giveanswer}},[t._v("提交答案")]):t._e(),t._v(" "),t.ontips?a("p",{staticClass:"timerule"},[t._v(t._s(t.tips))]):t._e()],2)],1)},staticRenderFns:[]};var k=a("C7Lr")(f,g,!1,function(t){a("sDdd")},"data-v-15c2c28e",null).exports,b=a("a3Yh"),w=a.n(b),q={name:"myfooter",data:function(){var t;return t={activehome:"static/activehome.png",home:"static/home.png"},w()(t,"activehome","static/activehome.png"),w()(t,"rule","static/rule.png"),w()(t,"activerule","static/activerule.png"),w()(t,"rank","static/rank.png"),w()(t,"activerank","static/activerank.png"),t},props:{where:{default:"home"}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"margin"}),t._v(" "),a("div",{staticClass:"footer"},[a("router-link",{attrs:{to:"/"}},[a("div",["home"==t.where?a("img",{staticClass:"tabbar",attrs:{src:t.activehome,alt:""}}):a("img",{staticClass:"tabbar",attrs:{src:t.home,alt:""}})])]),t._v(" "),a("router-link",{attrs:{to:"/rule"}},[a("div",["rule"==t.where?a("img",{staticClass:"tabbar",attrs:{src:t.activerule,alt:""}}):a("img",{staticClass:"tabbar",attrs:{src:t.rule,alt:""}})])]),t._v(" "),a("router-link",{attrs:{to:"rank"}},[a("div",["rank"==t.where?a("img",{staticClass:"tabbar",attrs:{src:t.activerank,alt:""}}):a("img",{staticClass:"tabbar",attrs:{src:t.rank,alt:""}})])])],1)])},staticRenderFns:[]};var y=a("C7Lr")(q,C,!1,function(t){a("9JkL")},"data-v-9321446c",null).exports,$={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"background"}),this._v(" "),e("div",{staticClass:"none"})])}]};var x=a("C7Lr")({name:"mybackground"},$,!1,function(t){a("Lij3")},"data-v-47a63700",null).exports;n.a.component("myfooter",y),n.a.component("mybackground",x),n.a.use(i.a);var L=new i.a({routes:[{path:"/",name:"home",component:c},{path:"/rule",name:"rule",component:v},{path:"/rank",name:"rank",component:_},{path:"/answer",name:"answer",component:k}]}),E=a("aozt"),j=a.n(E);n.a.prototype.$http=j.a,n.a.config.productionTip=!1,new n.a({el:"#app",router:L,components:{App:o},template:"<App/>"})},s7yO:function(t,e){},sDdd:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7670b0a59ef7881acb1f.js.map