/**
 * React Panel Component
 * @Author: chenzhen
 * @Date:   2017-07-18
 */


/**
 * Panel
 * @class
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

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../assets/index.css';

const defaultClass = 'biz-panel',
    prefix = 'biz-panel-',
    dataKey = 'bizPanel',
    speed = 200;
let currentIndex = 800;//antd的modal浮层z-index是1000

class Panel extends Component {
    getDefaultProps() {
        return {
            customClass: '',
            marginLeft: 200,
            top: '0',
            theme: "",
            leftCloseAble: false,
            titleAble: true,
            title: 'Title',
            content: 'Content',
            buttonsAble: true,
            buttons: [{
                value: '确认',
                isSubmit: true
            },{
                value: '取消'
            }],
            onBeforeClose: function(){ return true;},
            onCancelFunc: function(){ return true;},
            submitFunc: function(closeFunc){closeFunc()},
            zIndex: currentIndex,
        };
    }

    constructor(props) {
        super(props);
        currentIndex++;
        currentIndex++;

        this.state = {
            visible: true,
            config: this.getDefaultProps()
        };
        this.setState({config: this._setConfig(props || {})});
    }
    componentWillReceiveProps(nextProps){
        const props = nextProps;
        this.setState({config: this._setConfig(props || {})});
    }
    _setConfig(props){
        let newConfig = this.state.config;

        for(let key in props){
            newConfig[key] = props[key];
        }
        newConfig.wrapClass = [defaultClass, newConfig.customClass, prefix + newConfig.theme].join(' ');
        return newConfig;
    }
    _close(){
        let result = true;
        //取消前运行函数，只要取消就运行，也只有返回true，才能关闭弹窗
        if (typeof this.state.config.onBeforeClose == 'function') {
            result = this.state.config.onBeforeClose();
            if (result === false) {
                return;
            }
        }

        currentIndex--;
        currentIndex--;
        this.setState({visible: false});
        if(this.props.el){
            let all = document.getElementsByClassName('ReactPanel'),
                el = this.props.el;

            setTimeout(function () {
                el.removeChild(all[all.length - 1]);
            }, speed);
        }
    }
    _cancel(){
        let result = true;
        //取消前运行函数，只要取消就运行，也只有返回true，才能关闭弹窗
        if (typeof this.state.config.onCancelFunc == 'function') {
            result = this.state.config.onCancelFunc();
            if (result === false) {
                return;
            }
        }
        this._close();

    }
    _submit(){
        this.state.config.submitFunc && this.state.config.submitFunc(this._close.bind(this));
    }

    render() {
        const {
                visible,
                config
            } = this.state,
            {
                zIndex,
                marginLeft,
                wrapClass,
                top,
                leftCloseAble,
                titleAble,
                title,
                content,
                buttonsAble,
                buttons
            } = config;

        return (
            <ReactCSSTransitionGroup
                transitionName="panelAnimate"
                transitionAppear={true}
                transitionAppearTimeout={speed}
                transitionLeave={true}
                transitionLeaveTimeout={speed}
            >
                {visible?<div style={{zIndex: zIndex, paddingBottom: top, top: top}} className={wrapClass} key={dataKey+zIndex}>
                    <div className="biz-panel-margin" style={{marginLeft: marginLeft}}></div>
                    <div className="biz-panel-wrap">
                        <div className="biz-panel-body" >
                            {titleAble?
                                <div className="biz-panel-title">
                                    <span className="biz-panel-title-text">{title}</span>
                                    <div className="biz-panel-close" onClick={()=>this._close()}><span className="biz-panel-close-x"></span></div>
                                </div>:null}
                            <div className="biz-panel-content">
                                <div className="panel-content">{content}</div>
                            </div>
                            {buttonsAble?<div className="biz-panel-bottom">
                                {buttons.map((btn, index) => {
                                    return (
                                        <button className={btn.isSubmit?"biz-button biz-button-primary":"biz-button biz-button-lg"} onClick={btn.isSubmit?this._submit.bind(this):this._cancel.bind(this)}>
                                            {btn.value}
                                        </button>)
                                })}

                            </div>:null}
                            {leftCloseAble?<a className="biz-panel-leftClose" style={{top: top}} onClick={()=>this._close()}></a>:null}
                        </div>
                    </div>
                </div>:null}
                {visible?<div style={{zIndex: zIndex - 1}}  className="biz-mask" key={dataKey+"mask"}></div>:null}

            </ReactCSSTransitionGroup>
        );
    }
}

Panel.open = function(config, el){
    this.node = document.createElement('div');
    this.node.className = 'ReactPanel';
    el.appendChild(this.node);
    ReactDom.render(
        <Panel {...config} el={el} />,
        this.node
    );
    return this.node;
}
Panel.close = function(el){
    let all = document.getElementsByClassName('ReactPanel');

    setTimeout(function () {
        el.removeChild(all[all.length - 1]);
    }, speed);
}

module.exports = Panel;