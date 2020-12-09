/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import VpnKey from "@material-ui/icons/VpnKey";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import ExcelUploadForm from "views/ExcelUploadForm/ExcelUploadForm.js";

import Sale from 'views/Sale/Sale';
import Product from 'views/Product/Product';
import Cs from 'views/Cs/Cs'

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "대시보드",
        rtlName: "لوحة القيادة",
        icon: Dashboard,
        component: DashboardPage,
        layout: "/admin"
    },
    {
        path: "/apiregistration",
        name: "오픈셀러계정",
        rtlName: "ملف تعريفي للمستخدم",
        icon: VpnKey,
        component: UserProfile,
        layout: "/admin"
    },
    {
        path: "/sale",
        name: "매출현황",
        rtlName: "قائمة الجدول",
        icon: MonetizationOnIcon,
        component: Sale,
        layout: "/admin"
    },
    {
        path: "/stock",
        name: "상품관리",
        rtlName: "قائمة الجدول",
        icon: StoreMallDirectoryIcon,
        component: Product,
        layout: "/admin"
    },
    {
        path: "/cs",
        name: "고객대응",
        rtlName: "قائمة الجدول",
        icon: HeadsetMicIcon,
        component: Cs,
        layout: "/admin"
    }
];

export default dashboardRoutes;
