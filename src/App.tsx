import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'

import Routes from './router'

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Routes />
    </ConfigProvider>
  )
}

export default App
