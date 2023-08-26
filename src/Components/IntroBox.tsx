import '@/Styles/home.css'

export default function IntroBox(){
  return (
   <div className="landing-comment_main-container">
     <div className='landing-text_container'>
        <div>
            <div className={`text`}>06 </div>
            <div className="comment">Basic</div>
            <div className="comment">Courses</div>
        </div>

        <div className="line"></div>

        <div>
            <div className={`text`}>60+</div>
            <div className="comment">Trained</div>
            <div className="comment">kids</div>
        </div>

        <div className="line-2"></div>

        <div>
            <div className={`text`}>30+</div>
            <div className="comment">Active</div>
            <div className="comment">volunteers</div>
        </div>
    </div>
   </div>
  )
}