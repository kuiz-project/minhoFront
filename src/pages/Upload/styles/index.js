import styled from "styled-components";

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  section::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari, Edge */
  }
  section {
    border: 1px solid #ededed;
    width: 234px;
    height: calc(100vh - 176px);
    background-color: white;
    overflow: auto;
    overflow-y: scroll;
    /* 스크롤 가능하도록 설정 */
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* Internet Explorer 11 */
  }

  .section_header {
    border: 1px solid #ededed;
    border-bottom-width: 2px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: sticky;
    top: 0;
    /* 상단에 고정됩니다. */
    z-index: 3;
    /* 다른 요소 위에 나타나게 설정합니다. */
    background-color: white;
  }

  .trash_button {
    margin-left: 179px;
    margin-right: 14.87px;
    cursor: pointer;
  }

  .add_button {
    cursor: pointer;
  }

  .section_lists {
    display: flex;
    flex-direction: column;
  }

  .directory {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
  }

  .directory_top {
    display: flex;
    align-items: center;
    width: 220px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 5px;
    background: var(--Main, #312e81);
  }

  .directory_name {
    margin-left: 10px;
    color: var(--Text_White, #fff);
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .directory_image {
    margin-left: 10px;
    cursor: pointer;
  }
  .directory_image2 {
    margin-left: 9px;
    cursor: pointer;
  }

  .directory_details {
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    margin-top: 4px;
    margin-bottom: 6px;
    width: 220px;
    height: 32px;
    color: #424242;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .directory_details > div {
    cursor: pointer;
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 88px;
    border: 1px solid #e1e1e1;
    background: #fff;
    z-index: 1000;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .generate_footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 636px;
    height: 48px;
    margin-left: auto;
  }

  .probType {
    color: #525252;
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .multiple {
    display: flex;
    flex-direction: row;
    width: 169px;
    height: 48px;
    align-items: center;
  }

  .subjective {
    display: flex;
    flex-direction: row;
    width: 169px;
    height: 48px;
    align-items: center;
  }

  .number_select {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .number {
    width: 13px;
    margin-left: 30px;
    color: #909090;
    font-family: Helvetica;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .number_button {
    display: flex;
    flex-direction: column;
    margin-left: 22px;
  }

  .up {
    margin-bottom: 2px;
    cursor: pointer;
  }

  .down {
    cursor: pointer;
  }

  .generate_button {
    margin-left: 6px;
    cursor: pointer;
  }

  .upload_mid_section {
    width: 712px;
    height: 55vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 11vh;
  }

  .upload_mid_top {
    width: 712px;
    height: 364px;
    border-radius: 16px;
    background: var(--Text_White, #fff);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.12);
    margin-bottom: 31px;
    display: flex;
    flex-direction: row;
    overflow: auto;
  }

  .upload_name {
    width: 65px;
    margin-left: 50px;
    margin-top: 30px;
    color: #000;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: sticky;
    top: 30px;
    z-index: 3;
  }

  .upload_search {
    margin-left: 51px;
    height: 100%;
  }

  .upload_top_search {
    width: 100%;
    height: 66px;
    position: sticky;
    top: 0;
    z-index: 3;
    background-color: white;
    padding-top: 30px;
    margin-bottom: 8px;
  }

  .search,
  .search:focus {
    width: 400px;
    height: 35px;
    flex-shrink: 0;
    border-radius: 8px;
    background: var(--Gray_3, #f9f9f9);
    border: none;
    outline: none;
    font-size: 16px;
    padding-left: 10px;
  }

  .search_list {
    display: flex;
    flex-direction: column;
  }

  .search_list_boxes {
    padding: 8px 18px;
    margin-bottom: 8px;
    border-radius: 40px;
    border: 1px solid #e1e1e1;
    align-self: flex-start;
    color: var(--Text_Gray, #a3a3a3);
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .upload_mid_bottom {
    width: 712px;
    height: 84px;
    display: flex;
    flex-direction: row;
    border-radius: 16px;
    background: var(--Text_White, #fff);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    align-items: center;
  }

  .upload_right_section {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 209px;
    height: calc(100vh - 176px);
    overflow: auto;
    overflow-y: scroll;
    /* 스크롤 가능하도록 설정 */
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
  }

  .upload_right_section::-webkit-scrollbar {
    display: none;
  }

  .kuiz_position_text {
    color: #000;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: sticky;
    top: 0;
    z-index: 2;
    /* z-index를 높게 설정 */
    background-color: #fbfbfb;
    padding-bottom: 20px;
  }
`;
