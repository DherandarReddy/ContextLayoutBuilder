import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const ToggleShowContent = () => {
        onToggleShowContent()
      }

      const ToggleShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const ToggleShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="CCContainer">
          <div className="InnerCC">
            <h1 className="layoutHead">Layout</h1>
            <label className="check">
              <input
                checked={showContent}
                type="checkbox"
                className="box"
                onClick={ToggleShowContent}
              />
              Content
            </label>
            <label className="check">
              <input
                checked={showLeftNavbar}
                type="checkbox"
                className="box"
                onClick={ToggleShowLeftNavbar}
              />
              Left Navbar
            </label>
            <label className="check">
              <input
                checked={showRightNavbar}
                type="checkbox"
                className="box"
                onClick={ToggleShowRightNavbar}
              />
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
