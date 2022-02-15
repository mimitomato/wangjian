window.onload = function countTime() {
    var date = new Date()
    var now = date.getTime()
    var str = "2022/2/16 00:00:00"
    var endDate = new Date(str)
    var end = endDate.getTime()
    var leftTime = end-now
    var h,m,s;
    if(leftTime>=0){
        h = Math.floor(leftTime/1000/60/60%24);  
        m = Math.floor(leftTime/1000/60%60);  
        s = Math.floor(leftTime/1000%60);       
    }
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    function checkTime(i){
        if (i<10) {
            i = "0"+i;
        }
        return i;
    }
    document.getElementById("_h").innerHTML = h;  
    document.getElementById("_m").innerHTML = m;  
    document.getElementById("_s").innerHTML = s;  
    setTimeout(countTime,1000);  
}
//<!-- 底部跳转 -->
//<!-- 隐藏首页显示购物车 -->
function shoppingCart() {
    document.getElementById('wrapper').style.display = 'none'; 
    document.getElementById('show').style.display = 'block';   
    document.getElementById('classifyShow').style.display = 'none';
    document.getElementById('indexColor').style.color = '#666';
    document.getElementById('shoppingColor').style.color = '#28B2F9';
    document.getElementById('classifyShowColor').style.color = '#666';
}
// 隐藏其它显示首页
function index() {
    document.getElementById('wrapper').style.display = 'block';  
    document.getElementById('show').style.display = 'none';
    document.getElementById('classifyShow').style.display = 'none';
    document.getElementById('indexColor').style.color = '#28B2F9';
    document.getElementById('shoppingColor').style.color = '#666';
    document.getElementById('classifyShowColor').style.color = '#666';
}
   // 隐藏其它显示分类
function classify() {
    document.getElementById('wrapper').style.display = 'none';  
    document.getElementById('show').style.display = 'none';
    document.getElementById('classifyShow').style.display = 'block';
    document.getElementById('indexColor').style.color = '#666';
    document.getElementById('shoppingColor').style.color = '#666';
    document.getElementById('classifyShowColor').style.color = '#28B2F9';
}