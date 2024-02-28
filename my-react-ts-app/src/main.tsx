import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
const rooter = ReactDOM.createRoot(document.getElementById('micro-app-container')!);
function render() {
  console.log('rooter: ', rooter);
  rooter.render(
    <BrowserRouter 
    basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? '/micro-app' : '/'}
    >
      <App />
    </BrowserRouter>,
  )
}
const initQianKun = () => {
  renderWithQiankun({
    bootstrap() {
      console.log('vite微应用：bootstrap');
    },
    mount() {
      // 获取主应用传入数据       
      console.log('微应用 mount');
      render();
    },
    unmount() {
      console.log('微应用 unmount');
      rooter.unmount();
    },
    update(props) {
      console.log('vite微应用：update', props);
    }
  });
};
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render(); // 判断是否使用 qiankun ，保证项目可以独立运行

// // 独立运行时
// if (!window.__POWERED_BY_QIANKUN__) {
//   console.log('独立运行时');
//   render();
// }

// // 微应用的生命周期
// export async function bootstrap() {
//   console.log('微应用 bootstrap');
// }
// export async function mount() {
//   console.log('微应用 mount');
//   render();
// }
// export async function unmount() {
//   console.log('微应用 unmount');
//   rooter.unmount();
// }


