//适用于index.html
let index_zh_cn="<!--工具列表-->\n" +
    "<div class=\"mdui-text-color-blue\"><h1>工具列表</h1></div>\n" +
    "<div class=\"mdui-panel\" mdui-panel>\n" +
    "<div class=\"mdui-panel-item\">\n" +
    "    <div class=\"mdui-panel-item-header\">\n" +
    "        <div class=\"mdui-panel-item-title\" mdui-tooltip=\"{content: '与计算相关的工具'}\">计算工具</div>\n" +
    "        <i class=\"mdui-panel-item-arrow mdui-icon material-icons\">keyboard_arrow_down</i>\n" +
    "    </div>\n" +
    "    <div class=\"mdui-panel-item-body\">\n" +
    "        <button class=\"mdui-btn mdui-btn-raised mdui-ripple\" href=\"./jttl.html\" mdui-tooltip=\"{content: '轻松计算鸡兔同笼问题'}\">鸡兔同笼计算器</button>\n" +
    "        <button class=\"mdui-btn mdui-btn-raised mdui-ripple\" href=\"./eval.html\" mdui-tooltip=\"{content: '计算器'}\">计算器</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>";//index.html显示的内容
document.getElementById("main").innerHTML=index_zh_cn;//替换内容

//所需函数和脚本