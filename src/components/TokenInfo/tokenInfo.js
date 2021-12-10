import React from "react";

import "./tokenInfo.css";
class TokenInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            status:"read",
            readData:[
                {
                    "ClassName":"info-wrapper one",
                    "Num":1,
                    "descr":"Allowance(address, address)"
                },
                {
                    "ClassName":"info-wrapper two",
                    "Num":2,
                    "descr":"BalanceOf(address)"
                },
                {
                    "ClassName":"info-wrapper four",
                    "Num":3,
                    "descr":"Decimals"
                },
                {
                    "ClassName":"info-wrapper five",
                    "Num":4,
                    "descr":"Name"
                },
                {
                    "ClassName":"info-wrapper three",
                    "Num":5,
                    "descr":"Owner"
                },
                {
                    "ClassName":"info-wrapper six",
                    "Num":6,
                    "descr":"Symbol"
                },
                {
                    "ClassName":"info-wrapper seven",
                    "Num":7,
                    "descr":"TotalSupply"
                }
            ],
            writeData:[
                {
                    "ClassName":"info-wrapper one",
                    "Num":1,
                    "descr":"AcceptOwnership"
                },
                {
                    "ClassName":"info-wrapper two",
                    "Num":2,
                    "descr":"Approve(address,uint256)"
                },
                {
                    "ClassName":"info-wrapper four",
                    "Num":3,
                    "descr":"Burn (uint256)"
                },
                {
                    "ClassName":"info-wrapper five",
                    "Num":4,
                    "descr":"BurnFrom (address,uint256)"
                },
                {
                    "ClassName":"info-wrapper three",
                    "Num":5,
                    "descr":"DecreaseAllowance (address,uint256)"
                },
                {
                    "ClassName":"info-wrapper six",
                    "Num":6,
                    "descr":"IncreaseAllowance (address,uint256)"
                },
                {
                    "ClassName":"info-wrapper seven",
                    "Num":7,
                    "descr":"Mint (address,uint256)"
                },
                {
                    "ClassName":"info-wrapper eight",
                    "Num":8,
                    "descr":"Transfer (address,uint256)"
                },
                {
                    "ClassName":"info-wrapper one",
                    "Num":9,
                    "descr":"TransferFrom (address,address,uint256)"
                },
                {
                    "ClassName":"info-wrapper two",
                    "Num":10,
                    "descr":"TransferOwnership (address)"
                }
            ],
            selected:0
        }
    }
    setReadStatus(){
        this.setState({status:"read"})
    }
    setWriteStatus(){
        this.setState({status:"write"})
    }
    setSelected(num){
        this.setState({selected: num})
    }
    render(){
        return(
            <div className="tokenInfo  section-padding-100-85">
                <div className="container">
                    <div className="row" style={{alignItems:"stretch"}}>
                        <div className="col-lg-6 col-sm-12">
                            <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                <button  className="btn more-btn mr-3" onClick={()=>this.setReadStatus()}>Read</button>
                                <button  className="btn more-btn mr-3" onClick={()=>this.setWriteStatus()}>Write</button>
                            </div>
                            <div className="tokenInfo-funtion-list">
                            {this.state.status==="read" && this.state.readData && this.state.readData.map((item , key) => (
                                <div className="token-info" key={key} onClick={()=>this.setSelected(item.Num)}>
                                    <div className={item.ClassName}>
                                    <div className="token-icon">{item.Num}</div>
                                    <div className="token-descr">{item.descr}</div>
                                    </div>
                                </div>
                            ))}
                            {this.state.status==="write" && this.state.writeData && this.state.writeData.map((item , key) => (
                                <div className="token-info" key={key} onClick={()=>this.setSelected(item.Num)}>
                                    <div className={item.ClassName}>
                                    <div className="token-icon">{item.Num}</div>
                                    <div className="token-descr">{item.descr}</div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            
                                {this.state.status==="read" && this.state.selected ===1 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>Allowance</h4>
                                        <div className="input-wrapper">
                                            <input className="input-text" type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Owner</label>
                                        </div>
                                        <div className="input-wrapper">
                                            <input className="input-text"  type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Spender</label>
                                        </div>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                                {this.state.status==="read" && this.state.selected ===2 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>BalanceOf</h4>
                                        <div className="input-wrapper">
                                            <input className="input-text" type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Account</label>
                                        </div>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                                {this.state.status==="read" && this.state.selected ===3 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>Decimals</h4>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                                {this.state.status==="read" && this.state.selected ===4 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>Name</h4>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                                {this.state.status==="read" && this.state.selected ===5 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>Owner</h4>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                                {this.state.status==="read" && this.state.selected ===6 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>Symbol</h4>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                                {this.state.status==="read" && this.state.selected ===7 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>TotalSupply</h4>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                                {this.state.status==="write" && this.state.selected ===1 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>AcceptOwnership</h4>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                                {this.state.status==="write" && this.state.selected ===2 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>Approve</h4>
                                        <div className="input-wrapper">
                                            <input className="input-text" type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Spender</label>
                                        </div>
                                        <div className="input-wrapper">
                                            <input className="input-text"  type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Amount</label>
                                        </div>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                                {this.state.status==="write" && this.state.selected ===3 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>Burn</h4>
                                        <div className="input-wrapper">
                                            <input className="input-text" type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Account</label>
                                        </div>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                                {this.state.status==="write" && this.state.selected ===4 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>BurnFrom</h4>
                                        <div className="input-wrapper">
                                            <input className="input-text" type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Account</label>
                                        </div>
                                        <div className="input-wrapper">
                                            <input className="input-text"  type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Amount</label>
                                        </div>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                                {this.state.status==="write" && this.state.selected ===5 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>DecreaseAllowance</h4>
                                        <div className="input-wrapper">
                                            <input className="input-text" type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Spender</label>
                                        </div>
                                        <div className="input-wrapper">
                                            <input className="input-text"  type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">SubtractedValue</label>
                                        </div>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                                {this.state.status==="write" && this.state.selected ===6 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>IecreaseAllowance</h4>
                                        <div className="input-wrapper">
                                            <input className="input-text" type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Spender</label>
                                        </div>
                                        <div className="input-wrapper">
                                            <input className="input-text"  type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">AddedValue</label>
                                        </div>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                                {this.state.status==="write" && this.state.selected ===7 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>Mint</h4>
                                        <div className="input-wrapper">
                                            <input className="input-text" type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Account</label>
                                        </div>
                                        <div className="input-wrapper">
                                            <input className="input-text"  type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Amount</label>
                                        </div>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                                {this.state.status==="write" && this.state.selected ===8 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>Transfer</h4>
                                        <div className="input-wrapper">
                                            <input className="input-text" type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Recipient</label>
                                        </div>
                                        <div className="input-wrapper">
                                            <input className="input-text"  type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Amount</label>
                                        </div>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                                {this.state.status==="write" && this.state.selected ===9 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>TransferFrom</h4>
                                        <div className="input-wrapper">
                                            <input className="input-text" type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Sender</label>
                                        </div>
                                        <div className="input-wrapper">
                                            <input className="input-text" type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Recipient</label>
                                        </div>
                                        <div className="input-wrapper">
                                            <input className="input-text"  type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">Amount</label>
                                        </div>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                                {this.state.status==="write" && this.state.selected ===10 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>TransferOwnerShip</h4>
                                        <div className="input-wrapper">
                                            <input className="input-text" type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" />
                                            <label className="input-label">NewOwner</label>
                                        </div>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3">Submit</button>
                                        </div>
                                    </div>
                                }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TokenInfo;