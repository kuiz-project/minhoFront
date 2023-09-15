* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    overflow: hidden;
}

::selection {
    background: transparent;
}

/* Firefox 브라우저용 */
::-moz-selection {
    background: transparent;
}


.mainPage {
    padding-top: 88px;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    background-color: #FBFBFB;
}

.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 88px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
    position: fixed;
    /* 고정 포지션 설정 */
    top: 0;
    /* 상단으로부터 0px 떨어져 있음 */
    left: 0;
    /* 좌측으로부터 0px 떨어져 있음 */
    z-index: 1000;
    /* z-index를 높여 다른 요소들 위에 오게 함 */
}

.logo {
    margin-left: 35px;
    margin-right: 60px;
}

.logout {
    margin-left: auto;
    cursor: pointer;
}

.userLogo {
    margin-left: 16px;
    margin-right: 30px;
}

.nav-detail {
    width: 110px;
    height: 12px;
    color: var(--Text_Gray, #A3A3A3);
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 12px;
    cursor: pointer;
}

.nav-detail:hover {
    color: #3730A3;
}

.nav-detail.active {
    color: #3730A3;
    ;
    /* 클릭시 텍스트 색상 */
}

.main_view {
    display: flex;
    flex-direction: row;
}



.kuiz_position_boxes {
    width: 180px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #F8F9FE;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 25px;
}

.upload_mid_section {
    display: flex;

}

.fileSelect {
    color: #000;
    cursor: pointer;
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    width: 50vh;
    height: 36px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid #312E81;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
    margin-left: 53px;
    margin-right: 60px;
}

.fileUpload {
    margin-right: 30px;
    margin-left: auto;
    cursor: pointer;
}

.fileUploadCancel {
    margin-right: 30px;
    cursor: pointer;
}