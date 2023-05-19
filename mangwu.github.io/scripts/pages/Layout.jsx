/**
 * @description 布局
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-29 17:48:33
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
const { BrowserRouter: Router, Route, Link, Switch } = ReactRouterDOM;
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function About() {
  const date = new Date();
  return (
    <Content>
      <div>
        <h2>
          1.本站隻提供WEB頁面服務，本站不存儲、不制作任何視頻，不承擔任何由于内容的合法性及健康性所引起的争議和法律責任。
        </h2>
        <h2>
          2.若本站收錄内容侵犯了您的權益，請附說明聯系郵箱，本站将第一時間處理。
        </h2>
        <h2>3.联系邮箱118595675@qq.com</h2>
        <h2>
          4.Copyright {date.getFullYear()} mangwu;
          本网站由mangwu个人开发，可以浏览，请勿攻击本网站
        </h2>
      </div>
    </Content>
  );
}

/**
 * @description 布局
 * @function Layout
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function Layout(props) {
  return (
    <React.Fragment>
      <Icon />
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <ChangeTheme />
    </React.Fragment>
  );
}
