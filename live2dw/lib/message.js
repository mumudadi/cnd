"use strict";function renderTip(e,c){return e.replace(/(\\)?\{([^\{\}\\]+)(\\)?\}/g,function(e,t,o,n){if(t||n)return e.replace("\\","");var s,r,i=o.replace(/\s/g,"").split("."),a=c;for(s=0,r=i.length;s<r;++s)if(null==(a=a[i[s]]))return"";return a})}String.prototype.renderTip=function(e){return renderTip(this,e)};var re=/x/;function initTips(){$.ajax({cache:!0,url:"/live2dw/message.json",dataType:"json",success:function(e){$.each(e.mouseover,function(e,t){$(t.selector).mouseover(function(){var e=t.text;Array.isArray(t.text)&&(e=t.text[Math.floor(Math.random()*t.text.length+1)-1]),showMessage(e=e.renderTip({text:$(this).text()}),3e3)})}),$.each(e.click,function(e,t){$(t.selector).click(function(){var e=t.text;Array.isArray(t.text)&&(e=t.text[Math.floor(Math.random()*t.text.length+1)-1]),showMessage(e=e.renderTip({text:$(this).text()}),3e3)})})}})}function showHitokoto(){$.getJSON("https://v1.hitokoto.cn/",function(e){showMessage(e.hitokoto,5e3)})}function showMessage(e,t){Array.isArray(e)&&(e=e[Math.floor(Math.random()*e.length+1)-1]),$(".message").stop(),$(".message").html(e).fadeTo(200,1),null===t&&(t=5e3),hideMessage(t)}function hideMessage(e){$(".message").stop().css("opacity",1),null===e&&(e=5e3),$(".message").delay(e).fadeTo(200,0)}function initLive2d(){$(".hide-button").fadeOut(0).on("click",function(){$("#landlord").css("display","none")}),$("#landlord").hover(function(){$(".hide-button").fadeIn(600)},function(){$(".hide-button").fadeOut(600)})}console.log(re),re.toString=function(){return showMessage("哈哈，你打开了控制台，是想要看看我的秘密吗？",5e3),""},$(document).on("copy",function(){showMessage("你都复制了些什么呀，转载要记得加上出处哦~~",5e3)}),initTips(),function(){var e;if(""!==document.referrer){var t=document.createElement("a");t.href=document.referrer,e='嗨！来自 <span style="color:#0099cc;">'+t.hostname+"</span> 的朋友！";var o=t.hostname.split(".")[1];"baidu"==o?e='嗨！ 来自 百度搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「 '+document.title.split(" - ")[0]+" 」</span>":"so"==o?e='嗨！ 来自 360搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「 '+document.title.split(" - ")[0]+" 」</span>":"google"==o&&(e='嗨！ 来自 谷歌搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「 '+document.title.split(" - ")[0]+" 」</span>")}else if(window.location.href==""+home_Path){var n=(new Date).getHours();e=23<n||n<=5?"你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？":5<n&&n<=7?"早上好！一日之计在于晨，美好的一天就要开始了！":7<n&&n<=11?"上午好！工作顺利嘛，不要久坐，多起来走动走动哦！":11<n&&n<=14?"中午了，工作了一个上午，现在是午餐时间！":14<n&&n<=17?"午后很容易犯困呢，今天的运动目标完成了吗？":17<n&&n<=19?"傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~~":19<n&&n<=21?"晚上好，今天过得怎么样？":21<n&&n<=23?"已经这么晚了呀，早点休息吧，晚安~~":"嗨~ 快来逗我玩吧！"}else e='欢迎阅读<span style="color:#0099cc;">「 '+document.title.split(" - ")[0]+" 」</span>";showMessage(e,12e3)}(),window.setInterval(showHitokoto,3e4),initLive2d();