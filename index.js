var data = [
    {
        title:"博客",
        detail:"购买云服务器和域名，通过nginx搭建代理服务器。利用hugo框架搭建自己的博客，hugo是一个基于命令行的进行操作的静态网站生成工具，通过对markdown格式的文件进行编辑达到更新的目的",
        demoUrl:"https://kangzhiqing.com",
        codeUrl:"https://github.com/kzq666666/newBlog.git"
    },
    {
        title:"图书馆管理系统",
        detail:"前端Vue+Element，后端go的echo框架。\
        <br>模拟学生用户和管理员的操作，如学生的查询书籍，借阅记录的查询，以及管理员对书籍以及借阅的操作。\
        <br>学生测试账号和密码：<font color=\"#F56C6C\">test test</font>\
        <br>管理员账号和密码：<font color=\"#F56C6C\">admin admin</font>",
        demoUrl:"http://lib.ncu204.com/",
        codeUrl:"https://github.com/kzq666666/bookSysteam"
    },
    {
        title:"监控系统",
        detail:"前端Vue，后端python。\
        <br>输入监控关键词，利用python爬虫爬取b站、微博、虎扑的关s键词信息，返回各个网站的页面的信息，进行展示，超过一定浏览量进行通知。\
        <br>测试账号和密码：<font color=\"#F56C6C\">test test</font>",
        demoUrl:"https://monitor.ncu204.com/",
        codeUrl:"https://github.com/kzq666666/monitor"
    },
    {
        title:"圣诞",
        detail:"前端Vue，后端go。\
        <br>圣诞节班级活动，系统自动配对互相实现愿望的人，可以在系统中填写愿望，写下圣诞祝福，包括聊天\
        <br>测试账号和密码：<font color=\"#F56C6C\">test1 test</font>",
        demoUrl:"https://king.ncu204.com/",
        codeUrl:"https://github.com/kzq666666/King-And-Angel"
    }
]

var con = document.getElementsByClassName("container")[0];
var htmlTxt = "";
for(let i=0;i<data.length;i++){
    var temp = ` <div class="pro">
        <div class="title">${data[i].title}
        </div>
        <div class="detail">${data[i].detail}</div>
        <div class="link">
            <a href="${data[i].demoUrl}" target="_blank">项目展示</a>
            <a href="${data[i].codeUrl}" target="_blank">项目代码</a>
        </div>
    </div>`;
    htmlTxt +=temp;
}
con.innerHTML =htmlTxt;
