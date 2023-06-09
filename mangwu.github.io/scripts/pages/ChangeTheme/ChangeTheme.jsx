const { useState, useEffect } = React;

const LightHref = "./scripts/cdn/antd.compact.css";
const DarkHref = "./scripts/cdn/antd.dark.css";

// antd的样式
const antdLinkStyle = document.querySelector(".antd-link-style");

// 修改css定义的颜色变量
function changeVarColor(key) {
  if (key == "dark") {
    document.documentElement.style.setProperty("--headerColor", "#eeeeee");
    document.documentElement.style.setProperty(
      "--headerShadowColor",
      "rgba(255, 255, 255, 0.2)"
    );
    document.documentElement.style.setProperty("--themebg", "#565865");
    document.documentElement.style.setProperty("--contentbg", "#111111");


  } else {
    document.documentElement.style.setProperty("--headerColor", "#262626");
    document.documentElement.style.setProperty(
      "--headerShadowColor",
      "rgba(0, 0, 0, 0.1)"
    );
    document.documentElement.style.setProperty("--themebg", "#eef2f5");
    document.documentElement.style.setProperty("--contentbg", "#f8f8f8");
  }
}

function getCookie(key) {
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(key + "=");
    if (start !== -1) {
      start = start + key.length + 1;
      let end = document.cookie.indexOf(";", start);
      if (end === -1) end = document.cookie.length;
      return decodeURIComponent(document.cookie.substring(start, end));
    }
  }
  return "";
}

// 保存cookie
function setCookie(cName, value, expiredays) {
  let exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = `${cName}=${decodeURIComponent(value)}${
    expiredays ? ";expires=" + exdate.toGMTString() : ""
  }`;
}
function ChangeTheme() {
  // ----- 状态 -----
  const [theme, setTheme] = useState("light");
  // ----- 更新状态 -----
  useEffect(() => {
    getInitailTheme();
  }, []);
  useEffect(() => {
    setAntdThemeHref();
    changeVarColor(theme);
  }, [theme]);
  // 方法
  const getInitailTheme = () => {
    // 获取初始cookie信息
    const value = getCookie("theme");
    if (value) {
      setTheme(value);
    } else {
      setCookie("theme", "light", 5);
    }
  };
  /**
   * @description 设置antd组件的样式
   */
  const setAntdThemeHref = () => {
    if (theme == "light") {
      antdLinkStyle.href = LightHref;
      setCookie("theme", "light", 5);
    } else {
      antdLinkStyle.href = DarkHref;
      setCookie("theme", "dark", 5);
    }
  };
  const changeTheme = () => {
    console.log(theme);
    setTheme((state) => {
      return state == "light" ? "dark" : "light";
    });
  };
  return (
    <div className="change-theme">
      {theme == "light" ? (
        <svg
          onClick={changeTheme}
          t="1660052451483"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          pid="1812"
        >
          <path
            d="M512 831.508c16.264 0 29.792 11.72 32.597 27.176l0.534 5.955v62.23C545.13 945.167 530.298 960 512 960c-16.265 0-29.792-11.72-32.597-27.175l-0.534-5.956v-62.23c0-18.298 14.833-33.13 33.131-33.13z m267.584-97.826l5.197 4.245 44.002 44.002c12.938 12.938 12.938 33.916 0 46.854-11.321 11.321-28.797 12.736-41.656 4.245l-5.198-4.245-44.002-44.002c-12.938-12.938-12.938-33.915 0-46.854 11.321-11.32 28.797-12.736 41.657-4.245z m-493.511 4.246c11.32 11.32 12.736 28.796 4.245 41.656l-4.246 5.197-44.002 44.002c-12.939 12.938-33.916 12.938-46.854 0-11.32-11.321-12.736-28.797-4.245-41.657l4.245-5.197 44.003-44.002c12.938-12.938 33.916-12.938 46.854 0zM512 274.932c130.929 0 237.068 106.14 237.068 237.068 0 130.929-106.14 237.068-237.068 237.068-130.929 0-237.068-106.14-237.068-237.068 0-130.929 106.14-237.068 237.068-237.068z m414.87 203.937c18.297 0 33.13 14.833 33.13 33.131 0 16.264-11.72 29.792-27.175 32.597l-5.956 0.534h-62.23c-18.298 0-33.13-14.833-33.13-33.131 0-16.265 11.72-29.792 27.175-32.597l5.955-0.534h62.23z m-767.509 0c18.298 0 33.13 14.833 33.13 33.131 0 16.264-11.72 29.792-27.175 32.597l-5.955 0.534h-62.23C78.833 545.13 64 530.298 64 512c0-16.265 11.72-29.792 27.175-32.597l5.956-0.534h62.23z m669.422-283.653c11.321 11.32 12.736 28.797 4.246 41.656l-4.246 5.198-44.002 44.002c-12.938 12.939-33.915 12.94-46.853 0-11.322-11.32-12.737-28.796-4.246-41.656l4.245-5.197 44.002-44.003c12.938-12.938 33.915-12.938 46.854 0z m-591.91-4.245l5.197 4.245 44.003 44.003c12.938 12.938 12.938 33.915 0 46.854-11.321 11.32-28.797 12.736-41.657 4.245l-5.197-4.245-44.003-44.003c-12.938-12.938-12.938-33.915 0-46.854 11.321-11.32 28.797-12.736 41.657-4.245zM512 64c16.264 0 29.792 11.72 32.597 27.175l0.534 5.956v62.23c0 18.298-14.833 33.13-33.131 33.13-16.265 0-29.792-11.72-32.597-27.175l-0.534-5.955v-62.23C478.87 78.833 493.702 64 512 64z"
            fill="#2c2c2c"
            fillOpacity=".65"
            pid="1813"
          ></path>
        </svg>
      ) : (
        <svg
          t="1660054168863"
          className="icon"
          onClick={changeTheme}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          pid="2013"
        >
          <path
            d="M593.054 120.217C483.656 148.739 402.91 248.212 402.91 366.546c0 140.582 113.962 254.544 254.544 254.544 118.334 0 217.808-80.746 246.328-190.144C909.17 457.12 912 484.23 912 512c0 220.914-179.086 400-400 400S112 732.914 112 512s179.086-400 400-400c27.77 0 54.88 2.83 81.054 8.217z"
            fill="#ffffff"
            fillOpacity=".65"
            pid="2014"
          ></path>
        </svg>
      )}
    </div>
  );
}
