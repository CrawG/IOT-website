export const About = (props) => {
  return (
  <div id='about' className='text-center'>  
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>

    {/* <div id='about'> */}
      {/* <div className='container'> */}
        {/* <div className='row'> */}
          {/* <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
          </div> */}
          {/* <div className='col-xs-12 col-md- '> */}
            {/* <div className='section-title text-center'> */}
              {/* <h2>About Us</h2> */}
              <div>{props.data ? props.data.paragraph.map((d, i) => (
                          <p key={`${d}-${i}`}>{d}</p>
                        ))
                      : 'loading'}
              </div>
              <h3>Crawford Smith - Founder</h3>
              {/* <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div> */}
                {/* <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        // </div>
      // </div>
    // </div>
  )
}
