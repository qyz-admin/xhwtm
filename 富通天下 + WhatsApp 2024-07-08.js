// ==UserScript==
// @name         富通天下 + WhatsApp 2024-07-08
// @namespace    http://tampermonkey.net/
// @version      20240.07.08
// @description  try to take over the world!
// @author       You
// @match        https://trade.joinf.com/tms/customer/customers?tab=0
// @match        https://web.whatsapp.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=joinf.com
// @require      https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.5.1.min.js
// @require      https://qyz-admin.github.io/Email/layer.js
// @grant        none
// @updateURL
// ==/UserScript==

window.onload = (function() {

     whatsapp();
function whatsapp() {
     var href =window.location.href;
      //   console.log(href);
     var tt = href.search(/web.whatsapp.com/i);
       //  console.log(tt);
      if (tt >= "1") {
          console.log("whatsap 网址加载判断设置---");

          var idBC = setInterval(SubmitABC, 2000);
          function SubmitABC() {//正在刷新网页详细内容
                if(document.readyState =="complete"){//确定是否加载完成
                    var nav = document.getElementById("futong-extension");;
                      //  console.log(nav.childElementCount);
                    if (nav.childElementCount == "3") {
                        var targetDiv = document.querySelector('#futong-extension'); // 假设要监听的div有id为myDiv
                           console.log(targetDiv);
                           clearInterval(idBC);
                           console.log("已加载-终止刷新网页");

                        var observer = new MutationObserver(function(mutationsList) {
                            for (let mutation of mutationsList) {
                                if (mutation.type === 'childList') { // 处理div内容变化的逻辑
                                    console.log('Div内容已变化');
                                    whats_app_copy();
                                }; // 处理div内容变化的逻辑
                            }
                        });
                        observer.observe(targetDiv, { childList: true });

                   };

                };//确定是否加载完成
          };
      } else {
          console.log("不需要刷新网页");
          clearInterval(idBC);
      };
//---------------------------------复制函数-1------------------------------
                               function whats_app_copy(){ //函数1
                                    var nav6 = document.getElementsByClassName("detail_body");
                                      //  console.log(nav6[0]);
                                    var nav62 = nav6[0].children;
                                    var objArray= new Array();
                                    var index = 0;
                                    var k =0;

                                    for(var i=0; i<nav62.length;i++){
                                      //  console.log(nav62[i]);
                                        var tags_val2 = nav62[i].childElementCount;
                                           // console.log(tags_val2);
                                        if (tags_val2 == 0) {
                                            console.log(objArray);
                                          //  console.log('事件数量： ' + objArray.length);
                                            if(k==0){
                                               whats_app_id(objArray);
                                               k=k+1;
                                               console.log('已添加');
                                            }else{
                                               console.log('不需要添加');
                                            }
                                        };

                                        var tags_val = nav62[i].children
                                        var tags_add = tags_val[1];
                                         //   console.log(tags_add);
                                        var add_val = "ad2(" + i + ")";
                                           // console.log(add_val);
                                            tags_add.setAttribute('id',add_val);

                                        var add2 = tags_add.innerText;
                                            tags_add.setAttribute('data-clipboard-text',add2);

                                        objArray[index] = document.getElementById(add_val);
                                        index++;
                                   };
                                }; //函数1

//---------------------------------复制函数-2------------------------------
                                    function whats_app_id(objArray){ //函数2
                                        for(var ii=0; ii<objArray.length;ii++){ // 检测点击事件
                                            (function(kk) {
                                                   // console.log(objArray[kk]);
                                                     objArray[kk].addEventListener("click", function fn() {//请点击显示更多主页
                                                        var text05= objArray[kk].getAttribute("data-clipboard-text");
                                                            console.log(text05);
                                                        var textArea05 = document.createElement("textarea");
                                                            textArea05.value = text05;
                                                        document.body.appendChild(textArea05);
                                                            textArea05.select();
                                                        document.execCommand("copy");
                                                        layer.msg("Hello 复制成功", {icon: 6});
                                                        setTimeout(function () {
                                                            document.body.removeChild(textArea05);
                                                        }, 1000);

                                                },false);
                                            })(ii)
                                        }; // 检测点击事件
                                   }; //函数2

//---------------------------------------------------------------------------------------------
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     SubmitWeb();
function SubmitWeb() {
     var href =window.location.href;
         console.log(href);
     var tt = href.search(/trade.joinf.com/i);
      //   console.log(tt);
      if (tt >= "1") {
          console.log("总网址加载判断设置---");

          var idB = setInterval(SubmitAB, 2000);
          function SubmitAB() {//正在刷新网页详细内容
                if(document.readyState =="complete"){//确定是否加载完成
                    var nav = document.getElementsByClassName("tabs_nav");
                        console.log(nav[0]);
                    var val=nav[0].children;
                        console.log(val);
                    var val2=val[0].innerText;
                        console.log(val2);
                    if (val2 == "客户") {
                        nav[0].setAttribute('id','header-close');
                        clearInterval(idB);
                        console.log("已加载-终止刷新网页");

                        var targetDiv = document.querySelector('#header-close'); // 假设要监听的div有id为myDiv
                            console.log(targetDiv);
                        var observer = new MutationObserver(function(mutationsList) {
                            for (let mutation of mutationsList) {
                                if (mutation.type === 'childList') {
                                    console.log('Div内容已变化');

                                    // 处理div内容变化的逻辑
                                       var idB2 = setInterval(SubmitBB, 100);
                                   function SubmitBB(){
                                        var nav = document.getElementsByClassName("customer-icon-text");
                                        console.log(nav[0]);
                                        console.log(nav[0].childElementCount);
                                        var nav_val = nav[0].childElementCount
                                        if (nav_val != "3"){
                                            console.log("不需要加载WhatsApp插件");
                                            clearInterval(idB2);
                                        }else{
                                            testCCC();
                                        };
                                       if (val2 == "客户") {
                                           console.log("不需要加载WhatsApp插件");
                                           clearInterval(idB2);
                                       }
                                    };



                        var nav6 = document.getElementsByClassName("detail_body");
                            console.log(nav6[0]);
                            console.log(nav6[0].length);
var nav62 = nav6[0].children;
 console.log(nav62.length);


    for(var i=0; i<nav62.length;i++){
         console.log(nav62[i]);
        var tags_val = nav62[i].children
            console.log(tags_val[1]);

        var tags_val2 = nav62[i].childElementCount
        if (tags_val2 == 1) {

        }
   }


                                  //  if(document.readyState =="complete"){
                                       //  console.log('内容已变化');
                                       // sleep(10000);
                                      //  testCCC();
                                    //}
                                }
                            }
                        });
                        observer.observe(targetDiv, { childList: true });
                    };

                };//确定是否加载完成
          };
      } else {
          console.log("不需要刷新网页");
          clearInterval(idB);
      }

};
//SubmitWeb();



// SubmitAB2();

function testCCC() { //正在加载WhatsApp插件
        var nav = document.getElementsByClassName("customer-icon-text");
                 console.log(nav[0]);
                 console.log(nav[0].childElementCount);
        var nav_val = nav[0].childElementCount
        if (nav_val == "3"){
            var targNav = document.createElement('span');
                targNav.setAttribute('class','classic-menu-dropdown ');
                targNav.setAttribute('id','header-close');
                targNav.innerHTML ='<span data-v-19f497a8="" class="el-tooltip t-icon-bg" aria-describedby="el-tooltip-339" tabindex="0"><svg data-v-2d360db2="" data-v-19f497a8="" aria-hidden="true" class="icon v-a-tt svg-icon " style="fill: currentcolor; overflow: hidden; width: 1em; height: 1em; vertical-align: middle; font-size: 16px; color: rgb(123, 127, 132); margin-top: -1px;"><use data-v-2d360db2="" xlink:href="#icon-icon-whatsapp-log"></use></svg></span>';
           nav[0].appendChild( targNav);
        };
};
// testCCC();


    function sleep(n) {
    var start=new Date().getTime();
    while (true) {
      var time=new Date().getTime();
      if(time - start>n) {
        break;
      }
    }
  };

document.getElementById("header-close").addEventListener("click", function fn() {





console.log(88);










},false);



})();