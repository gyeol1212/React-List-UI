# React-List-UI

React-List-UI 는 빅스크린에서 키보드 입력을 통해 List UI를 선택적으로 동작할 수 있는 컴포넌트 입니다.

<hr />

## `how to Use`

1.  설치 방법

    > 추후 추가

    ```bash
    $ npm install react-list-ui
    ```

2.  사용 방법

    > 추후 추가

    ````javascript
    import React, { Component } from "react";
    import ListUI from "react-list-ui";

        class App extends Component {
          render() {
            return (
              <div className="App">
                <ListUI />
              </div>
            );
          }
        }

        export default App;
        ```

    <hr />
    ````

## `props`

| Props           | Description                                                                                                                                  | Type                                      | Default                              | Example                                        |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------- | :----------------------------------- | :--------------------------------------------- |
| **공통**        | _type에 관계 없이 사용 가능한 props입니다_                                                                                                   |                                           |                                      |                                                |
| type            | List의 A,B타입을 선택합니다.                                                                                                                 | [ 'A' , 'B' ]                             | 'A'                                  | type={'B'}                                     |
| clickDisable    | 마우스 클릭을 통한 선택 영역 이동 허용 여부를 결정합니다.                                                                                    | bool                                      | false                                | clickDisable={true}                            |
| smoothScroll    | 부드러운 스크롤 이동 여부를 결정합니다.                                                                                                      | bool                                      | true                                 | smoothScroll={false}                           |
| overScroll      | 범위를 벗어나는 스크롤일 경우, 처음으로 돌아갈지 여부를 결정합니다. False로 설정할 경우, 스크룰의 끝부분임을 알려주는 EndPoint가 표시됩니다. | bool                                      | false                                | overScroll={true}                              |
| showResetButton | Reset Button 표시 여부를 결정합니다.                                                                                                         | bool                                      | false                                | showResetButton={true}                         |
|                 |                                                                                                                                              |                                           |                                      |
| **Type A**      | _props.type === 'A' 의 경우 사용 가능한 props들입니다._                                                                                      |                                           |
| itemStyle       | Carousel 내부의 item들의 사이즈를 지정합니다. Height와 Width를 지정할 수 있습니다.                                                           | Object({ height: string, width: string }) | {{ height: '300px', width: '300px'}} | itemStyle={{ height: '400px', width: '500px'}} |
|                 |                                                                                                                                              |                                           |                                      |
| **Type B**      | _props.type === 'B' 의 경우 사용 가능한 props들입니다._                                                                                      |
| itemStyle       | List 내부의 item들의 사이즈를 지정합니다. Height를 지정할 수 있습니다.                                                                       | Object({ height: string })                | {{ height: '300px' }}                | itemStyle={{ height: '400px'}}                 |
| col             | List column의 item 개수를 지정합니다.                                                                                                        | number                                    | 4                                    | col={5}                                        |
|                 |                                                                                                                                              |                                           |                                      |

### `Css Customizing props`

_CSS를 Customizing하기 위한 Props들 입니다._

| Props                  | Description                     | type   |
| ---------------------- | ------------------------------- | ------ |
| containerCssObjcet     | container Css를 변경합니다.     | Objcet |
| listCssObjcet          | list Css를 변경합니다.          | Objcet |
| itemCssObjcet          | item Css를 변경합니다.          | Objcet |
| selectingAreaCssObjcet | selectingArea Css를 변경합니다. | Objcet |
| headerCssObjcet        | header Css를 변경합니다.        | Objcet |
| resetButtonCssObjcet   | resetButton Css를 변경합니다.   | Objcet |
| endPointCssObjcet      | endPoint Css를 변경합니다.      | Objcet |

예시

```javascript
<ListUI containerCssObject={{ backgroundColor: 'red' }} />
```

### `추후 추가`

> **현재 개발 중인 프로젝트 입니다. 상위 내용은 언제든지 바뀔 수 있습니다.**
