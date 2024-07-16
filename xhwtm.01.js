     var xxbdemo1= document.getElementsByClassName("futong")[0];
           console.log(xxbdemo1);
     var stNode1221 = document.createElement('script');
         stNode1221.setAttribute('type','text/javascript');
         stNode1221.innerHTML =
         'function ad2(i){\n'
             +'var text05= document.getElementsByClassName("value")[i].getAttribute("data-clipboard-text");\n'
                 +'console.log(text05);\n'
             +'var textArea05 = document.createElement("textarea");\n'
                 +'textArea05.value = text05;\n'
             +'document.body.appendChild(textArea05);\n'
                 +'textArea05.select();\n'
             +'document.execCommand("copy");\n'
             +'layer.msg("Hello 复制成功", {icon: 6});\n'
             +'setTimeout(function () {\n'
             +'document.body.removeChild(textArea05);\n'
             +'}, 10);\n'
        +'};\n'
       document.querySelector('body').appendChild(stNode1221);
 