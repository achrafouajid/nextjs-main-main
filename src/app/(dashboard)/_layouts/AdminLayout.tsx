"use client";
import React, { ReactNode, useState } from "react";

import "./layout.css";
import {
  MdOutlinePrivacyTip,
  MdOutlinePostAdd,
  MdOutlineManageSearch,
} from "react-icons/md";
import { PiUserListLight, PiArticleLight } from "react-icons/pi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import {
  DesktopOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { BiCategory } from "react-icons/bi";
import { FaNotesMedical } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { TbCategoryPlus } from "react-icons/tb";

import Profile from "@/components/Profile";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label: string, key: string, icon?: ReactNode, children?: any) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Tableau de bord", "/dashboard", <DesktopOutlined />),
  getItem("Consentement éclairé", "/consent", <MdOutlinePrivacyTip />),
  getItem("Patients", "sub1", <UserOutlined />, [
    getItem("Liste des patients", "/patient-list", <PiUserListLight />),
    getItem("Ajouter un patient", "/add-patient", <FiUserPlus />),
    getItem("Alex", "5"),
  ]),
  getItem("Blog", "/blog", <TeamOutlined />, [
    getItem("Blogs", "/blog", <PiArticleLight />),
    getItem("Blog List", "/blog-list", <MdOutlineManageSearch />),
    getItem("Add a Blog", "/add-blog", <MdOutlinePostAdd />),
    getItem("Category List", "/category-list", <BiCategory />),
    getItem("Add a Category", "/add-category", <TbCategoryPlus />),
  ]),
  getItem("Messagerie", "/chat", <IoChatbubblesOutline />),
];
function AdminLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ backgroundColor: "#99dfb2" }}
      >
        <div
          className={"logo overflow-hidden flex items-center ".concat(
            collapsed ? "flex-col" : "flex-row"
          )}
        >
          <span className="flex h-full w-full text-[#99dfb2] flex-nowrap items-center justify-start">
            <FaNotesMedical className="shrink-0" size={40} />
            <b className="whitespace-nowrap">
              {collapsed ? "PBM" : "PSP BI MSH"}
            </b>
          </span>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          style={{ backgroundColor: "#99dfb2" }}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              router.push(key);
            }
          }}
        />
      </Sider>
      <Layout style={{ backgroundColor: "#c6e7c9" }}>
        <Header
          style={{
            backgroundColor: "#99dfb2",
          }}
        >
          <Profile />
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            items={[
              {
                href: "/dashboard",
                title: (
                  <>
                    <HomeOutlined />
                    <span>Dashboard</span>
                  </>
                ),
              },
              {
                title: (
                  <>
                    <span>Patient</span>
                  </>
                ),
              },
              {
                href: "/add-patient",
                title: (
                  <>
                    <span>Add Patient</span>
                  </>
                ),
              },
            ]}
          />
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
            height: "50px",
            backgroundColor: "#99dfb2",
          }}
        >
          PSP BI MSH ©2023 Copyright
        </Footer>
      </Layout>
    </Layout>
  );
}
export default AdminLayout;
