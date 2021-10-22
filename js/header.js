const code = 
`
    <div id="menu">
        <div style="height: 100%;float: left; align-items: center;" class="flex">
            <a href="mainPage.html">
                <p style="font-size:1.75rem; font-weight: bold; padding-bottom: 0.25rem; margin-right: 2rem;">CodeNU</p>
<!--                <img src="images/logo/TeamEG-transparent-logo.png" class="inMenu" style="width: 10rem; margin-right: 1.5rem;" alt="CodeNU">-->
            </a>
            <ul class="verticalList invMobile" style="list-style-type:none; vertical-align: middle; margin: 0; padding-left:0; margin-bottom: 0.125rem;">
                <li class="inMenu verticalLItem headerMenu"><a href="members.html">팀 소개</a></li>
                <li class="inMenu verticalLItem headerMenu"><a href="projects.html">프로젝트</a></li>
                <li class="inMenu verticalLItem headerMenu"><a href="https://discord.gg/b5xUdJwSyX">고객지원</a></li>
                <li class="inMenu verticalLItem headerMenu"><a href="hiring.html">채용</a></li>
            </ul>
        </div>
        <div style="height: 100%;float: right; align-items: center;" class="flex">
            <ul class="verticalList" style="float: right; list-style-type:none; vertical-align: middle; margin: 0; padding-left: 0; display: flex; flex-direction: row-reverse;">
                <li class="inMenu verticalLItem" style="float:right; height: inherit; vertical-align: middle; display: flex; align-items: center;">로그인</li>
                <li class="inMenu verticalLItem" style="float:right;">
                    <select name="language" style="font-size: 1rem">
                        <option value="">Language</option>
                        <option value="ko">한국어</option>
                        <option value="en">English</option>
                    </select>
                </li>
            </ul>
        </div>
    </div>
`

window.addEventListener("load", function() {
    var link = this.document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "css/header.css";
    this.document.getElementsByTagName("head")[0].appendChild(link);
    this.document.body.innerHTML = code + this.document.body.innerHTML
}) 