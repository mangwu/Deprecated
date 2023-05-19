/**
 * @description 入口App
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-29 17:42:27
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
const { Button } = window.antd;

/**
 * @description App
 * @class App
 * @extends React.PureComponent
 */
class App extends React.PureComponent {
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <React.StrictMode>
        <ErrorBoundary>
          <Layout></Layout>
        </ErrorBoundary>
      </React.StrictMode>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
