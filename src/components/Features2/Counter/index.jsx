import { SlideCountdown } from 'react-fancy-countdown';
import { Line } from 'rc-progress';

const Counter = ({icoCounterClass}) => {

    return (

        <div className="col-12 col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <div className={icoCounterClass}>
            <div className="counter-down">
              <div className="content">
                <div className="conuter-header">
                  <h3 className="w-text text-center">TOKEN SALE ENDS IN</h3>
                </div>
                <div className="counterdown-content">
                  <div className="count-down titled circled text-center">
                    <SlideCountdown
                      weeks={false}
                      deadline="2030-12-31 14:23:22" />
                  </div>
                  <div className="ico-progress">
                    <ul className="list-unstyled list-inline clearfix mb-10">
                      <li className="title">33m</li>
                      <li className="strength">75m</li>
                    </ul>
                    <div className="current-progress">
                      <Line percent="70" trailWidth="3" strokeWidth="4" strokeColor="#fb881d" />
                    </div>
                    <span className="pull-left">Softcap in 103 days</span>
                    <span className="pull-right">Token Hardcap</span>
                  </div>
                  <div className="text-center">
                    <a className="btn dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Buy More tokens</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Counter