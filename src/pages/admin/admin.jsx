import React, {Component} from 'react'
import memoryUtils from '../../utils/memoryUtils'
import {Redirect, Route, Switch} from 'react-router-dom'
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav' 
import Header from '../../components/header'
import Category from '../category/category'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import Home from '../home/home'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
const {Footer, Sider, Content } = Layout;
/*
后台管理的路由组件
*/
export default class Admin extends Component {
    render(){
        const username = memoryUtils.userName
        if (!username){
            return <Redirect to='/login' />
        }
        return(
            <Layout style={{height:'100%'}}> 
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header />
                    <Content style={{backgroundColor:'red'}}>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/category' component={Category} />
                            <Route path='/product' component={Product} />
                            <Route path='/role' component={Role} />
                            <Route path='/user' component={User} />
                            <Route path='/charts/bar' component={Bar} />
                            <Route path='/charts/line' component={Line} />
                            <Route path='/charts/pie' component={Pie} />
                            <Redirect to='/Home'/>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center',color:'cccccc'}}>推荐使用谷歌浏览器</Footer>
                </Layout>
            </Layout>
        )
    }
}