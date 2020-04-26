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
        <br>学生测试账号和密码：<font color=\"#F56C6C\">text text</font>\
        <br>管理员账号和密码：<font color=\"#F56C6C\">admin admin</font>",
        demoUrl:"http://pro.kangzhiqing.com/bookSysteam",
        codeUrl:"https://github.com/kzq666666/bookSysteam"
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
