import React from "react";

import "./tokenInfo.css";
const Web3 = require('web3');

const NODE_URL = "https://api.avax.network/ext/bc/C/rpc";
const provider = new Web3.providers.HttpProvider(NODE_URL);
const web3 = new Web3(provider);
const CoursetroContract =new web3.eth.Contract(
    [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    '0x88e3850000EF6E56DfC7475B1A4b2214063eeDb8'
);

const ethEnabled = async () => {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(window.ethereum);
      return true;
    }
    return false;
  }
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
            selected:0,
            result:"",
            owner:"",
            spender:"",
            account:""
        }
    }
    componentDidMount(){
        if (!ethEnabled()) {
            alert("Please install MetaMask to use this dApp!");
          }
    }
    setReadStatus(){
        this.setState({status:"read"})
    }
    setWriteStatus(){
        this.setState({status:"write"})
    }
    setSelected(num){
        this.setState({selected: num, result:""})
    }
    async  submit_read_1(){
        var data="";
        try{
            await CoursetroContract.methods.allowance(this.state.owner, this.state.spender).call()
            .then(function(result){
                data=result
            })
        }catch(e){
            console.log(e);
        }
        this.setState({result:data, owner:"", spender:""})
    }
    async  submit_write_1(){
        var data="";
        try{
            await CoursetroContract.methods.acceptOwnership().call()
            .then(function(result){
                data=result
                console.log(data);
            })
        }catch(e){
            console.log(e);
        }
        this.setState({result:data})
    }
    async  submit_read_2(){
        var data="";
        try{
            await CoursetroContract.methods.balanceOf(this.state.account).call()
            .then(function(result){
                data=result
            })
        }catch(e){
            console.log(e);
        }
        this.setState({result:data, account:""})
    }
    async  submit_read_3(){
        var data="";
        try{
            await CoursetroContract.methods.decimals().call()
            .then(function(result){
                data=result
            })
        }catch(e){
            console.log(e);
        }
        this.setState({result:data})
    }
    async  submit_read_4(){
        var data="";
        try{
            await CoursetroContract.methods.name().call()
            .then(function(result){
                data=result
            })
        }catch(e){
            console.log(e);
        }
        this.setState({result:data})
    }
    async  submit_read_5(){
        var data="";
        try{
            await CoursetroContract.methods.owner().call()
            .then(function(result){
                data=result
            })
        }catch(e){
            console.log(e);
        }
        this.setState({result:data})
    }
    async  submit_read_6(){
        var data="";
        try{
            await CoursetroContract.methods.symbol().call()
            .then(function(result){
                data=result
            })
        }catch(e){
            console.log(e);
        }
        this.setState({result:data})
    }
    async  submit_read_7(){
        var data="";
        try{
            await CoursetroContract.methods.totalSupply().call()
            .then(function(result){
                data=result
            })
        }catch(e){
            console.log(e);
        }
        this.setState({result:data})
    }
    changeOwner(e){
        this.setState({owner:e.target.value})
    }
    changeSpender(e){
        this.setState({spender:e.target.value})
    }
    changeAccount(e){
        this.setState({account:e.target.value})
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
                                            <input className="input-text" type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" 
                                            value={this.state.owner} onChange={(e)=>this.changeOwner(e)}/>
                                            <label className="input-label" >Owner</label>
                                        </div>
                                        <div className="input-wrapper">
                                            <input className="input-text"  type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2"
                                            value={this.statespender} onChange={(e)=>this.changeSpender(e)}/>
                                            <label className="input-label">Spender</label>
                                        </div>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3" onClick={()=>this.submit_read_1()} >Submit</button>
                                        </div>
                                        <h3 className="token-result">{this.state.result}</h3>
                                    </div>
                                }
                                {this.state.status==="read" && this.state.selected ===2 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>BalanceOf</h4>
                                        <div className="input-wrapper">
                                            <input className="input-text" type="text" placeholder="0xb73b1c961cC17F9526688f45a54607D29c1ED8D2" 
                                            value={this.state.account} onChange={(e)=>this.changeAccount(e)}/>
                                            <label className="input-label">Account</label>
                                        </div>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3" onClick={()=>this.submit_read_2()}>Submit</button>
                                        </div>
                                        <h3 className="token-result">{this.state.result}</h3>
                                    </div>
                                }
                                {this.state.status==="read" && this.state.selected ===3 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>Decimals</h4>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3" onClick={()=>this.submit_read_3()}>Submit</button>
                                        </div>
                                        <h3 className="token-result">{this.state.result}</h3>
                                    </div>
                                }
                                {this.state.status==="read" && this.state.selected ===4 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>Name</h4>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3" onClick={()=>this.submit_read_4()}>Submit</button>
                                        </div>
                                        <h3 className="token-result">{this.state.result}</h3>
                                    </div>
                                }
                                {this.state.status==="read" && this.state.selected ===5 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>Owner</h4>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3"  onClick={()=>this.submit_read_5()}>Submit</button>
                                        </div>
                                        <h3 className="token-result">{this.state.result}</h3>
                                    </div>
                                }
                                {this.state.status==="read" && this.state.selected ===6 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>Symbol</h4>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3"  onClick={()=>this.submit_read_6()}>Submit</button>
                                        </div>
                                        <h3 className="token-result">{this.state.result}</h3>
                                    </div>
                                }
                                {this.state.status==="read" && this.state.selected ===7 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>TotalSupply</h4>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3"  onClick={()=>this.submit_read_7()}>Submit</button>
                                        </div>
                                        <h3 className="token-result">{this.state.result}</h3>
                                    </div>
                                }
                                {this.state.status==="write" && this.state.selected ===1 &&
                                    <div className="tokenInfo-submit-box">
                                        <h4>AcceptOwnership</h4>
                                        <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                            <button  className="btn more-btn mr-3"  onClick={()=>this.submit_write_1()}>Submit</button>
                                        </div>
                                        <h3 className="token-result">{this.state.result}</h3>
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
                                        <h3 className="token-result">{this.state.result}</h3>
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
                                        <h3 className="token-result">{this.state.result}</h3>
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
                                        <h3 className="token-result">{this.state.result}</h3>
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
                                        <h3 className="token-result">{this.state.result}</h3>
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
                                        <h3 className="token-result">{this.state.result}</h3>
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
                                        <h3 className="token-result">{this.state.result}</h3>
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
                                        <h3 className="token-result">{this.state.result}</h3>
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
                                        <h3 className="token-result">{this.state.result}</h3>
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
                                        <h3 className="token-result">{this.state.result}</h3>
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