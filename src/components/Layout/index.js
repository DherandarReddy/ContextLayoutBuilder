import {Component} from 'react'
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'
import './index.css'

class Layout extends Component {
  render() {
    return (
      <div className="LayoutOuterC">
        <div className="LayoutInnerC">
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
