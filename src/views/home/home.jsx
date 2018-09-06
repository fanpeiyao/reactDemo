import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//帮助验证 props 的参数类型
import PropTypes from 'prop-types';

import PublicHeader from './../../components/header/header';
import { Rate } from 'antd';


class Home extends Component {
    static propTypes = {

    }

    state = {
        alertStatus: false, //弹框状态
        alertTip: '', //弹框提示文字
    }
    /**
      * 已选择的商品数据
      * @type {Array}
      */
    selectedProList = [];

    render(){
        return (
            <main>
                <PublicHeader title='首页'/>
                <Rate allowHalf defaultValue={2.5} />
            </main>

        )
    }

}



export default Home;