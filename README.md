### 整体结构

为了方便只展示 src 目录下的文件

```
├─assets            // 静态资源文件存放图片和字体文件
│  ├─font				// 字体文件 https://www.lcddjm.com/font 提取所需要的字
│  ├─*.png
|  ...
├─component       	// 每个页面所需要的组件    
│  ├─Audio	    		// 音乐
│  ├─Background			// 背景
│  ├─MusicControl	    // 音乐控制
├─pages             // 页面文件
│  ├─AvatarGenerate	    // 头像生成
│  ├─Index				// 首页
│  ├─Wallpaper			// 壁纸
```

## 技术栈

- React
- react-router-dom // 路由
- react-spring // 动画
- styled-components // CSS-in-JS
- styled-normalize // 重置默认 CSS 样式
- styled-px2vw // px to vw
- react-id-swiper // 让 swiper 更适合 react
- swiper // 触摸内容滑动 js 插件