import React, { Component } from 'react';
import  './form.css';
import Circle from "./circle.png";
import Wink from "./wink.png";


class Form extends Component {
  state= {
    disabled : true,
    textarea : "",
    name : "" ,
    email : "",
    submited :false
  }

  handleChangeT = (v) =>{
    this.setState({textarea : v})
  }
  handleChangeN = (v) =>{
    this.setState({name : v})

  }
  handleChangeE = (v) =>{
    this.setState({email : v})

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({submited : true})
    console.log("Name = " + this.state.name);
    console.log("Email = " + this.state.email);
    console.log("message = " + this.state.textarea);
  }

    // this.state.disabled && this.state.textarea && this.state.name && this.state.email ? this.setState({class : "act"}) : this.setState({class:"dis"})

  render() {

    return (
      <div className="screen  wow fadeIn">
        <div className="container">
          <div className="outer-form wow bounceIn" data-wow-delay="2s">
            <div className="left-side hide-on-small-only wow fadeInLeft" data-wow-delay="1s">
              <div className="overlay-img">
                <img src={Circle} />
                <h2>“hey, need any help?<br/>
                  just let us know, we’re here<br/>
                  to answer any questions”
                </h2>


              </div>
            </div>
            {this.state.submited ?
               <div className="right-side wow fadeInRight" data-wow-delay="1s">
                 <h2 className="done-h">Just sent!<br/>
                Your message is on its way!</h2>
              <p className="done-p">Once we recieve it we'll pass it to the right<br/> department to get back to you by email within the<br/> next 2 working days.</p>
              <img src={Wink} />
                 <h3 className="done-h3">Thanks.</h3>
                       <div className="done">
                         <button className="btn waves-effect waves-light act" onClick={() => this.props.hide() }>
                                Done
                            </button>
                       </div>

                      <div className="close-btn">
                        <button className="btn waves-effect waves-light red" onClick={() => this.props.hide() }>
                              Close
                          </button>
                      </div>
               </div>
              : <div className="right-side wow fadeInRight" data-wow-delay="1s">
              <h2>
                Fill out below your questions and
                we’ll get back to you.
              </h2>
              <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                      <i className="mdi-content-create prefix"></i>
                      <textarea id="icon_prefix2" className="materialize-textarea" onChange={(e) => this.handleChangeT(e.target.value)}></textarea>
                      <label htmlFor="icon_prefix2">Enter Some Words</label>
                  </div>
                  <p>We need your name and email to get back to you as soon as possible ;)</p>
                    <div className="row">

                      <div className="input-field col s7 offset-s2">
                      <i className="mdi-action-account-circle prefix"></i>
                      <input id="icon_prefix" type="text" className="validate" onChange={(e) => this.handleChangeN(e.target.value)} />
                      <label htmlFor="icon_prefix">Your Name</label>
                      </div>

                      <div className="input-field col s7 offset-s2">
                      <i className="mdi-communication-email prefix"></i>
                       <input id="email" type="email" className="validate" onChange={(e) => this.handleChangeE(e.target.value)} />
                      <label htmlFor="email">Email</label>
                      <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                      </div>
                    </div>
                    <div className="form-but">
                      {this.state.disabled && this.state.textarea && this.state.name && this.state.email ?   <button className="btn waves-effect waves-light act " type="submit" name="action">
                              Send
                          </button> :   <button className="btn waves-effect waves-light dis " disabled type="submit" name="action">
                                  Send
                              </button>}

                    </div>

              </form>
              <div className="close-btn">
                <button className="btn waves-effect waves-light red" onClick={() => this.props.hide() }>
                      Close
                  </button>
              </div>
            </div>}
          </div>
        </div>
      </div>
    );
  }

}

export default Form;
