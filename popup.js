chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
}, function(selection) {
    var schools = [
        "清华大学",

        "北京大学",

        "厦门大学",

        "中国科学技术大学",

        "南京大学",

        "复旦大学",

        "天津大学",

        "哈尔滨工业大学",

        "浙江大学",

        "南开大学",

        "西安交通大学",

        "华中科技大学",

        "东南大学",

        "武汉大学",

        "上海交通大学",

        "中国海洋大学",

        "山东大学",

        "湖南大学",

        "中国人民大学",

        "北京理工大学",

        "吉林大学",

        "重庆大学",

        "电子科技大学",

        "大连理工大学",

        "四川大学",

        "中山大学",

        "华南理工大学",

        "北京航空航天大学",

        "兰州大学",

        "东北大学",

        "西北工业大学",

        "北京师范大学",

        "同济大学",

        "中南大学"
    ];

    if (schools.includes(selection[0].trim())) {
        document.getElementById("output").innerHTML = selection[0] + "985大学";
    } else {
        document.getElementById("output").innerHTML = selection[0];
    }
});
