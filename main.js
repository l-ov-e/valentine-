const canvas = document.getElementById('fireworksCanvas');
canvas.style.display = 'none';

function showLove() {
    const loveNote = document.querySelector('.love-note');
    loveNote.style.display = 'block';
    gsap.fromTo(loveNote, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1.5, ease: 'elastic.out(1, 0.3)' });

    setTimeout(() => {
        const poemContainer = document.querySelector('.poem-container');
        poemContainer.style.display = 'block';
        gsap.fromTo(poemContainer, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 2, ease: 'elastic.out(1, 0.3)' });
    }, 3000);

    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
function showNo() {
   alert("accha bete? itnit himmat, tu ruk tu mil merko fir btati hu terko mai, no bolega ? merko ? aapni jindagi pasand vasand ni aari kya? mrne vrne ka mnn kr ra h ? akal thikane ladugi. chal ab jldi jldi sahi vala option choose kr 😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡");
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

document.addEventListener('DOMContentLoaded', () => {
    const poemHTML = `
        <div class="poem-container" style="display: none;">
            <h2>Poem for You</h2>
            <p>
                My love for you is like the sun,<br>
                Bright and warm, it’s never done.<br>
                Every day, it starts to rise,<br>
                With you, my world feels so alive.<br><br>

                Through the storms, through the rain,<br>
                In your arms, I feel no pain.<br>
                Like the stars up in the sky,<br>
                Our love will never say goodbye.<br><br>

                Every whisper, every glance,<br>
                Makes my heart begin to dance.<br>
                With each moment, I realize,<br>
                You’re the one who makes me shine.<br><br>

                So here’s my love, it’s yours to keep,<br>
                It’s forever, strong and deep.<br>
                With all my heart, with all my soul,<br>
                You complete me, you make me whole.<br><br>

                Forever and always, my heart beats for you.<br>
                No matter what, my love will remain true.<br>A boy I met, shining bright,
                Like a dream, full of light,
                Now he’s here, right by my side,
                I’m just wondering, how did I get so lucky tonight?

                A boy I met, I can’t get enough,
                He treats me like a princess, gentle and tough,
                I feel so blessed, can’t believe it’s true,
                How did I get so lucky, to be with you?

                Is he a dream, or a gift so sweet?
                I’ve never met anyone who makes me feel complete,
                Never seen a boy as kind as you,
                But is he mine? How did this come through?

                You smell so good, it feels just right,
                Your arms are strong, holding me tight,
                The way you play with my hair so slow,
                And those sweet rabbit kisses, you know.
 
                I love you more than I can say,
                You make my world brighter every day,
                Through all the chaos, you’re my peace,
                In your arms, all my worries cease.

                You're the one I always want near,
                My heart beats only for you, my dear,
                I never knew love could feel so real,
                But with you, it’s all I’ll ever feel.
            </p>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', poemHTML);
});
