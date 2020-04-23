
function ajax(path1,nma) {
    console.log("ajaxON  at:"+path1)
    
//先声明一个异步请求对象
var xmlHttpReg = null;
    if (window.ActiveXObject) {//如果是IE

            xmlHttpReg = new ActiveXObject("Microsoft.XMLHTTP");

    } else if (window.XMLHttpRequest) {

        xmlHttpReg = new XMLHttpRequest(); 
    }
    function rep(nxx){
        nxx = nma
        if(nxx==1){
        data0 = xmlHttpReg.responseText;
    }
    if(nxx==2){
        data2 = xmlHttpReg.responseText;
    }
    if(nxx==3){
        data3 = xmlHttpReg.responseText;
    }
    if(nxx==4){
        data4 = xmlHttpReg.responseText;
    }
    if(nxx==5){
        data5 = xmlHttpReg.responseText;
    }
    if(nxx==6){
        data6 = xmlHttpReg.responseText;
    }
    if(nxx==7){
        data7 = xmlHttpReg.responseText;
    }
    if(nxx==8){
        data8 = xmlHttpReg.responseText;
    }
    if(nxx==9){
        data9 = xmlHttpReg.responseText;
    }
    if(nxx==10){
        data10 = xmlHttpReg.responseText;
    }
    if(nxx==11){
        data10 = xmlHttpReg.responseText;
    }
}
 
   
        xmlHttpReg.addEventListener("load" , rep);
        xmlHttpReg.open("get", path1, true);
        xmlHttpReg.send(null);
        console.log("ajaxON  rs:"+xmlHttpReg.responseText+"$")
        console.log("ajaxON  ws:"+xmlHttpReg.responseText+"$")
        console.log("ajaxON  ot:"+xmlHttpReg.responseText+"$")
       
       

    
}
function rpls_fun(){

path = "https://redlist.zerlight.top:1100/stausweb/api/up0.txt"
ajax(path,1)
    var r1w=data0
    

path = "https://redlist.zerlight.top:1100/stausweb/api/mp.txt";
ajax(path,2)
    var r2w=data2

path = "https://redlist.zerlight.top:1100/stausweb/api/memtotalG.txt";
ajax(path,3)
    var ram_t=data3
    
path = "https://redlist.zerlight.top:1100/stausweb/api/memusedG.txt";
ajax(path,4)
    var ram_u=data4
    
path = "https://redlist.zerlight.top:1100/stausweb/api/memfreeG.txt";
ajax(path,5)
    var ram_f=data5
    
path = "https://redlist.zerlight.top:1100/stausweb/api/dskr.txt";
ajax(path,6)
    var d_r=data6
    
path = "https://redlist.zerlight.top:1100/stausweb/api/dskw.txt";
ajax(path,7)
    var d_w=data7
    
path = "https://redlist.zerlight.top:1100/stausweb/api/ns.txt";
ajax(path,8)
    var n_o=data8
    
path = "https://redlist.zerlight.top:1100/stausweb/api/nr.txt";
ajax(path,9)
    var n_i=data9
    
path = "https://redlist.zerlight.top:1100/stausweb/api/time.txt";
ajax(path,10)
    var r_t=data10
    var d1d="CPU:"+r1w + "%"
    var d2d="RAM:"+r2w + "%"
    var d3d="RAM总量:"+"<br></br>"+ram_t +"GB"
    var d4d="RAM用量:"+"<br></br>"+ram_u +"GB"
    var d5d="RAM剩余:"+"<br></br>"+ram_f +"GB"
    var d6d="硬盘读IO:"+"<br></br>"+d_r +""
    var d7d="硬盘写IO:"+"<br></br>"+d_w +""
    var d8d="网络出站流统计:"+"<br></br>"+n_o +""
    var d9d="网络入站流统计:"+"<br></br>"+n_i +""
    var d10d="服务器持续运行时间 : <h3>"+r_t +"</h3>小时"+"<br></br>现在是"+Date() 
    document.getElementById("r1").style.width = r1w + "%";
    document.getElementById("r2").style.width = r2w + "%";
    document.getElementById("d1").innerHTML = d1d;
    document.getElementById("d2").innerHTML = d2d;
    document.getElementById("d3").innerHTML = d3d;
    document.getElementById("d4").innerHTML = d4d;
    document.getElementById("d5").innerHTML = d5d;
    document.getElementById("d6").innerHTML = d6d;
    document.getElementById("d7").innerHTML = d7d;
    document.getElementById("d8").innerHTML = d8d;
    document.getElementById("d9").innerHTML = d9d;
    document.getElementById("d10").innerHTML = d10d;
    

}


setInterval("rpls_fun()","500");