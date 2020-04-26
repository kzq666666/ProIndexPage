var data = [
    {
        title:"",
        detail:"",
        demoUrl:"",
        codeUrl:""
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
            <a href="${data[i].demoUrl}" target="_blank">项目代码</a>
        </div>
    </div>`;
    htmlTxt +=temp;
}
con.innerHTML =htmlTxt;
