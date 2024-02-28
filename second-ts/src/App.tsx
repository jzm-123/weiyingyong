import { useEffect } from "react"

function App() {
  // useEffect(() => {
  //   // 在组件挂载后开始定时任务
  //   const intervalId = setInterval(() => {
  //     // 打印一次
  //     console.log('每隔一秒打印一次');
  //   }, 1000);

  //   // 在组件卸载时清除定时任务，防止内存泄漏
  //   return () => clearInterval(intervalId);
  // }, []);
  return (
    <div id="micro-sub">
      <h1>Vite + React + Second + Qiankun</h1>
    </div>
  )
}

export default App
