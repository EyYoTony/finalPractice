import React from 'react'

const AppMockup = () => {
  return (
    <div className="flex flex-column justify-between vh-100 w-100 avenir bg-washed-green">
      <header className="flex flex-row justify-between items-center bg-dark-green h3 b f3 fw6 pa3 mb2">
        <div>{'<'}</div>
        <div>Street Art Search</div>
        <div className="pa4 tc">
          <img
            src={
              'http://beverlypress.com/wp-content/uploads/2016/07/hot-dog-06.jpg'
            }
            className="br2 h2 w2 dib"
            alt="avatar placeholder"
          />
        </div>
      </header>
      <main className="flex flex-column tc w-100 vh-100 mt2">
        <div>
          <img
            align="top"
            src={
              'https://twixlmedia.com/wp-content/uploads/2012/09/Screen-Shot-2012-09-10-at-12.12.05.png'
            }
            alt="placeholder image"
          />
        </div>
        <div>
          <h2 className="f3 fw6 pa3 mt0 bb b--black-10">Art Near You</h2>
        </div>
        <div className="mw6 center">
          <article>
            <a
              className="link dt w-100 bb b--black-10 pb2 mt2 dim blue"
              href="#0"
            >
              <div className="dtc">
                <img
                  src={
                    'https://fastestpedestrian.files.wordpress.com/2014/06/img_7374.jpg'
                  }
                  className="br-100 w4 h4 mr4"
                />
              </div>
              <div className="dtc v-mid pl2">
                <h1 className="f6 f5-ns fw6 lh-title black mv0">
                  College Lodge Mural
                </h1>
                <h2 className="f6 fw4 mt2 mb0 black-60">
                  Shepard Fairey
                </h2>
                <dl className="mt2 f6">
                  <dt className="clip">Distance</dt>
                  <dd className="ml0">5 mi.</dd>
                </dl>
              </div>
            </a>
          </article>
        </div>
      </main>
    </div>
  )
}

export default AppMockup
