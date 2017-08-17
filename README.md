# @bizfe/biz-rc-panel
---

React Panel Component.

## Feature

* support ie9,ie9+,chrome,firefox,safari
## Demo

直接打开example文件夹中html即可看效果

## Usage
两种使用方式

1、作为react UI组件直接在render中引入:
```js
var panel = require('@bizfe/biz-rc-panel');
var React = require('react');

var config = {
    customClass: "userPanelBox",
    titleAble: false,
    buttonsAble: false,
    leftCloseAble: true,
    onBeforeClose: function () {
        console.log('before close');
        return true;
    },
    content:<div>弹窗内容</div>
};
React.render(<Panel  {...config}/>, container);
```
2、在react组件中被作为方法调用，直接生成panel UI组件插入到相关dom中:
```js
var panel = require('@bizfe/biz-rc-panel');
var React = require('react');

var config = {
    customClass: "userPanelBox",
    titleAble: false,
    buttonsAble: false,
    leftCloseAble: true,
    onBeforeClose: function () {
        console.log('before close');
        return true;
    },
    content:<div>弹窗内容</div>
};
Panel.open(config, document.getElementById('mainBox'));
```
这种方式可能会涉及到关闭panel弹窗的方法调用：
```js
Panel.close(document.getElementById('mainBox'));
```

## API

| Parameter        | Description                        | Type          | Default                  |
|------------------|------------------------------------|---------------|--------------------------|
| customClass   | 自定义 class          | String        | ""                        |
| marginLeft          | 左边距（px），默认 200                       | Number        | 200                |
| top            | 顶部距（px），默认 0，用于非body内展示，头部有距离的情况                 | Number        | 0                        |
| theme  | 主题            | String        | ""                       |
| leftCloseAble         | 是否展示左侧关闭按钮                     | Boolean        | false                       |
| titleAble         | 是否展示title              | Boolean      | true    |
| title  | 屉浮层标题              | String          | false                    |
| content  | 屉浮层内容，也可以是dom | String | "Content" |
| buttonsAble | 是否展示底部默认button           | Boolean  | true        |
| buttons  | 底部按钮的数组对象             | Array          | [{value: '确认',isSubmit: true},{value: '取消'}]                    |
| onBeforeClose        | 关闭前回调，返回 false 则不关闭            | Function() | -     |
| onCancelFunc        | 取消前回调，返回 false 则不关闭            | Function        | -                        |
| submitFunc           | 提交函数，底部提交按钮点击后触发        | Function        | -                     |


## License

@bizfe/biz-rc-panel is released under the MIT license.
