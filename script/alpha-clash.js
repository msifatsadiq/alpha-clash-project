function play() {
    // hide the home screen
    const homeSection = document.getElementById('home-screen');
    // console.log(homeSection);
    homeSection.classList.add('hidden');

    // show the playground

    const playGround = document.getElementById('playground-section');
    playGround.classList.remove('hidden')
}
// function play() {
//     hideElementById('home-screen');
//     showElementById('playground-section');
// }
function getARandomAlphabet() {
    //create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');
    console.log(alphabets);
    //create a random alphabet

}
