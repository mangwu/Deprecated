/**
 * @description 头部
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-29 18:44:59
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
const { useState, useRef, useEffect } = React;
const { BrowserRouter: Router, Route, Link } = ReactRouterDOM;
const { width, height } = document.body.getBoundingClientRect();
/**
 * @description
 * @function Header
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <antd.Avatar
          size={48}
          src="https://joeschmoe.io/api/v1/random"
          alt="logo"
        />
      </div>
      <nav className="header-nav">
        <span className="header-nav-item">
          <a
            href="https://mangwu.notion.site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            notion
          </a>
        </span>
        <span className="header-nav-item">
          <a
            href="https://github.com/mangwu"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </span>
        <span className="header-nav-item">
          <a
            href="https://mangwu-blogs.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            blogs
          </a>
        </span>
        <span className="header-nav-item">
          <Link to="/">主页</Link>
        </span>
        <span className="header-nav-item">
          <Link to="/about">关于</Link>
        </span>
      </nav>
    </header>
  );
}
