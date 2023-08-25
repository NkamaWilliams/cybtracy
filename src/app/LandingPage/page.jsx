
import LandingText from './components/LandingText.tsx'
import LandingComment from './components/LandingComment'
import landingImage1 from './Images/landingImage2.png'
import ImgeComponent from './components/ImgeComponent'

const Page = () => {
  return (
    <div>
        <main>
        <div className="landing">
        <div className="main-landing-1">
          <LandingText/>
          <LandingComment/>
          </div>
          <div  className="">
           <ImgeComponent/>
          </div>
        </div>
        </main>
    </div>
  )
}

export default Page