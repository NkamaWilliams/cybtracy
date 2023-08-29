import { Fragment } from 'react'

//Components
import Intro from '@/Components/Intro'
import IntroBox from '@/Components/IntroBox'
import ImageComponent from '@/Components/Image'
import Whoweare from '@/Components/Whoweare'
import Workstream from '@/Components/Workstream'
import GetInvolvedSection from '@/Components/GetInvolvedSection'
import HomeFooter from '@/Components/HomeFooter'

export default function Home() {
  return (
        <Fragment>
          <main>
            <div className="landing">
              <div className="main-landing-1">
                <Intro/>
                <IntroBox/>
              </div>
              <div>
                <ImageComponent/>
              </div>
            </div>
          </main>
          <Whoweare/>
          <Workstream/>
          <GetInvolvedSection/>
          <HomeFooter/>
        </Fragment>
  )
}
