import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//帮助验证 props 的参数类型
import PropTypes from 'prop-types';
import './header.less';

import { Drawer} from 'antd';

class PublicHeader extends Component {
    static propTypes = {
        title:PropTypes.string.isRequired
    }

    state = {
        navState: false, //导航栏是否显示
        visible: false,
        placement: 'left'
    };



    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render(){
        return (
            <header className='header-container aa'>
                <span className="header-slide-icon " onClick={this.showDrawer}>menuIcon</span>
                <span className="header-title ">{this.props.title}</span>
                <Drawer
                    title="Basic Drawer"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>

            </header>
        )
    }
};

export default PublicHeader;