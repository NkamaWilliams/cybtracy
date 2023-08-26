import Intro from '@/Components/Intro'
import IntroBox from '@/Components/IntroBox'
import ImageComponent from '@/Components/Image'

export default function Home() {
  return (
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
  )
}
