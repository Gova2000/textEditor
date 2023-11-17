/* eslint-disable jsx-a11y/control-has-associated-label */
import {Component} from 'react'
import {MdFormatBold} from 'react-icons/md'
import {BsTypeItalic, BsTypeUnderline} from 'react-icons/bs/'
import './index.css'

class Editor extends Component {
  state = {btn1: false, btn2: false, btn3: false, input: ''}

  render() {
    const {input, btn1, btn2, btn3} = this.state

    const check1 = btn1 && 'bcolor1'
    const check2 = btn2 ? 'bcolor1' : 'bcolor2'
    const check3 = btn3 ? 'bcolor1' : 'bcolor2'
    const style1 = btn1 ? 'btn1' : null
    const style2 = btn2 ? 'btn2' : null
    const style3 = btn3 ? 'btn3' : null

    return (
      <div className="main">
        <div className="heading">
          <div className="auto">
            <h1>Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png "
              alt="text editor"
              className="img"
            />
          </div>

          <div className="textdiv">
            <ul className="btnsdiv">
              <li>
                <button
                  data-testid="bold"
                  type="button"
                  className={`Button ${check1} `}
                  onClick={() => {
                    this.setState(prev => ({btn1: !prev.btn1}))
                  }}
                >
                  <MdFormatBold size="25" />
                </button>
              </li>
              <li>
                <button
                  data-testid="italic"
                  type="button"
                  className={`Button ${check2}`}
                  onClick={() => {
                    this.setState(prev => ({btn2: !prev.btn2}))
                  }}
                >
                  <BsTypeItalic size="20" />
                </button>
              </li>
              <li>
                <button
                  data-testid="underline"
                  type="button"
                  className={`Button ${check3}`}
                  onClick={() => {
                    this.setState(prev => ({btn3: !prev.btn3}))
                  }}
                >
                  <BsTypeUnderline size="20" />
                </button>
              </li>
            </ul>

            <textarea
              type="text"
              className={`area ${style1} ${style2} ${style3}`}
              value={input}
              onChange={e => {
                this.setState({input: e.target.value})
              }}
              rows="30"
              cols="55"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Editor
