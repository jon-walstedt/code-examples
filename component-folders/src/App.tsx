import './App.css'
import {
  SidebarContextAwareUI,
  SidebarProvider,
  SidebarPureUI
} from './components/sidebar'

function App() {
  return (
    <>
      <SidebarProvider>
        <SidebarContextAwareUI />
      </SidebarProvider>
      <SidebarPureUI title="Sidebar pure UI" items={['Item 1', 'Item 2']}/>
    </>
  )
}

export default App
