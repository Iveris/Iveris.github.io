/*****************************
* Functions
*****************************/
function randArrayIndex(x) { return Math.floor(Math.random() * x) };

/*****************************
* Testimonials
*****************************/

const testimonialTxt = [
    '“I began classical guitar study as an older adult, continuing with Warner in ' +
    'weekly lessons for the past two years. His precise approach and knowledge of ' +
    'the history and repertoire of the instrument have enabled me to progress way beyond ' +
    'my expectations. His demonstrations, exercises, and step-by-step assignments to ' +
    'explore moveable scales on the fretboard have helped me overcome technical challenges, ' +
    'further develop musical expression, and improve left- hand execution in performing ' +
    'studies and pieces. Throughout he has chosen appealing, motivating selections, and ' +
    'has been unfailingly kind and good humored.” \n-Joan',

    '"Warner has an easygoing, engaging teaching style for students of all ages. As someone ' +
    'who didn\'t start lessons until later in life, I appreciate the patience with my busy ' +
    'work schedule and a chance to start totally fresh in the world of music!" \n- Maggie',

    '"Unfailingly patient, kind, and open to a range of musical genres, we\'re grateful ' +
    'that Warner was our daughter\'s guitar teacher for the past two years. He responded ' +
    'to her uneven approach to practicing with supportive good humor, and he was a positive ' +
    'and stable presence during the disruptions of this past year." \n- Rebecca',

    '"Our family had a wonderful experience with Dr. Iveris. My 7 year old son took both ' +
    'individual and group guitar lessons with him and was always excited to go to his ' +
    'lessons. Dr. Iveris was enthusiastic about parents staying for the lessons so they ' +
    'could help their children practice at home. He was organized, had goals and objectives ' +
    'for our son, and always ready to keep our young learner focused on the lesson. I ' +
    'believe Dr. Iveris was genuinely interested in seeing our child make progress in ' +
    'guitar, and I could see that my son was just so happy during his lessons!” \n-The Mathews Family',

    '“Warner is an amazing musician and an excellent guitar teacher. My son Corwin started ' +
    'taking lessons from him when he just turned five. Warner was very patient with him and ' +
    'was able to keep him focused and interested. When the pandemic hit and we were forced to ' +
    'retreat to virtual lessons, not only was he able to transition to teaching virtually ' +
    'seamlessly with various technologies, but he was also innovative with how to keep ' +
    'students engaged remotely. Corwin looked forward to playing their “role-playing music ' +
    'game” every week and would practice his “battle songs” so he could win battles in the ' +
    'game. Corwin was so inspired by Warner, he decided that he wants to be a musician and ' +
    'conductor when he grows up. \n- Caisy',

    'My son’s progress in guitar triggered my interests in guitar. I also started taking ' +
    'lessons from Warner. I truly enjoyed our lessons. On the technical side, Warner was ' +
    'able to pin point my trouble spots and help me overcome those obstacles quickly. Many ' +
    'times, with just a little hint of how to position my hand or a certain finger practice ' +
    'during the lesson, I was able to do what I was not able to achieve with a week of ' +
    'practice. On the musical side, after we tackled the technical issues, Warner would ' +
    'discuss the phrases of the music, how to make the music sound interesting and engaging ' +
    'to the audience, and how to have fun with it. Through the discussion, I learned the ' +
    'theories and historical backgrounds behind a music piece.\n Both Corwin and I felt ' +
    'very fortunate to have Warner as our teacher.” \n- Caisy ',

    '“Warner has a warm, supportive way of working with kids that honors them as ' +
    'individuals and helps them grow as musicians. He uses creative activities and fun ' +
    'games to engage his students, and makes learning music fun.” \n- Tucker',

    '“Mr Warner is very good at incorporating games into guitar class. He helped me to get better at guitar.” \n- Lucia',

    '“About five years ago I decided I wanted to try playing the guitar. I knew nothing ' +
    'about the instrument except it could make awesome sounds and thats what I wanted to ' +
    'do. The Hochstein school of music was nearby and thought it would it be convenient to ' +
    'get to after work. I had no idea who my instructor would be until about a week or so ' +
    'before I started. I was really nervous, as i am a bit older.  Right from the beginning ' +
    'Warner put me at ease. There were a few times I wanted to quit, but Warner talked me out ' +
    'it, which I am really thankful for. I wouldn\'t be playing today if not for those ' +
    'conversations.... so thank you for keeping me in the game!” \n- Russ',

    '“Warner teaches my teenage daughter guitar lessons and is a true professional at what he ' +
    'does. We are very fortunate to have someone of Warner\'s caliber, not to mention his ' +
    'approachable and easy going demeanor that makes learning music lots of fun!” - Anton'

]