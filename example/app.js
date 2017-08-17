
import React, { Component} from 'react';
import { render } from 'react-dom';
import Panel from './lib/index';

/**
 * Panel的参数
 * @param {String}      [props.customClass]    自定义 class
 * @param {Number}      [props.marginLeft]     左边距（px），默认 200
 * @param {Number}      [props.top]            顶部距（px），默认 0，用于非body内展示，头部有距离的情况
 * @param {String}      [props.theme]          主题
 * @param {Boolean}     [props.leftCloseAble]  是否展示左侧关闭按钮
 * @param {Boolean}     [props.titleAble]      是否展示title
 * @param {String}      [props.title]          屉浮层标题
 * @param {String}      [props.content]        屉浮层内容，也可以是dom
 * @param {Boolean}     [props.buttonsAble]    是否展示底部默认button
 * @param {Array}       [props.buttons]        底部按钮的数组对象
 * @param {Function}    [props.onBeforeClose]  关闭前回调，返回 false 则不关闭
 * @param {Function}    [props.onCancelFunc]   取消前回调，返回 false 则不关闭
 * @param {Function}    [props.submitFunc]     提交函数，底部提交按钮点击后触发
 * @param {Number}      [props.zIndex]         抽屉浮层标 z-index
 */

const config = {
    customClass: "",
    titleAble: true,
    buttonsAble: true,
    top: 55,
    leftCloseAble: true,
    onBeforeClose: function () {
        console.log('关闭前运行');
        return true;
    }
};

render(
    //由React-Redux提供的Provider组件传入store对象，
    //让通过connect方法生成的容器组件拿到state
    <Panel {...config}
           content ={
               <div>自定义内容</div>
           }
    />,
    document.getElementById('mainBox')
);
