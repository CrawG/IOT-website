import YoutubeEmbed from "./youtubevideo";


export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Media</h2>
        </div>
        <div className="row"> 
          <div className="App col-md-5 col-md-offset-1">
            {/* <h1>Youtube Embed</h1> */}
              <YoutubeEmbed embedId="3s53G3R_QJA" />
          </div>
          <div></div>
          <div className="App col-md-5">
            {/* <h1>Youtube Embed</h1> */}
              <YoutubeEmbed embedId="d71U0hnB6FE" />
          </div>
        </div>
    
        {/* <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div> */}
      </div>
    </div>
  )
}
