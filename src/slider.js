const quoteSlider = document.querySelector('.hero-quote')

let slides = [
    `<li>
        <p><span class="quote-marks quote-marks-top">&#10077;</span>J. Malcolm Garcia has channeled the empathetic ear of Studs Terkel and the investigative skills of the best literary journalists ... These stories will remain in the heart and mind’s eye forever.<span class="quote-marks quote-marks-bottom">&#10078;</span></p>
        <div class="quote-author flex">
            <span class="quote-small">The Plain Language of Love and Loss</span>
            <span class="quote-bold">Beth Taylor,</span>
        </div>
    </li>`,
    `<li>
        <p><span class="quote-marks quote-marks-top">&#10077;</span>J. Malcolm Garcia is the keeper of forgotten stories. He is an invaluable witness and a compassionate observer of today's wars.<span class="quote-marks quote-marks-bottom">&#10078;</span></p>
            <div class="quote-author">
                <span class="quote-small">Author</span>
                <span class="quote-bold">Fatima Bhutto</span>
            </div>
    
    </li>`,
    `<li>
        <p><span class="quote-marks quote-marks-top">&#10077;</span>Garcia is an exceptionally powerful voice on behalf of the people about whom he writes.<span class="quote-marks quote-marks-bottom">&#10078;</span></p>
        <div class="quote-author">
            <span class="quote-small">Pulitzer Prize–winning author</span>
            <span class="quote-bold">Dale Maharidge</span>
        </div>
    </li>`,
    `<li>
        <p><span class="quote-marks quote-marks-top">&#10077;</span>There's a writer named J. Malcolm Garcia who continually astounds me with his energy and empathy. He writes powerful and lyrical nonfiction from Afghanistan, from Buenos Aires, from Mississippi, all of it urgent and provocative. I've been following him wherever he goes.<span class="quote-marks quote-marks-bottom">&#10078;</span></p>
        <div class="quote-author">
            <span class="quote-small">Author</span>
            <span class="quote-bold">Dave Eggers</span>
        </div>
    
    </li>`
]

let i = 0;
const slider = () => {
    quoteSlider.innerHTML = slides[i];
    quoteSlider.children[0].classList.add('fade-in');

    (i < slides.length - 1) ? i++ : i = 0;
};

setInterval(slider, 9000); 

slider(); 