import { ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

function Providers({ children }: { children: ReactNode }) {
  return (
    <RecoilRoot>
        <Router>{children}</Router>
    </RecoilRoot>
  )
}

export default Providers
