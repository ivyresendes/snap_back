
var gameOn = false
var snapSize = 100

$("#addbuttons").on("click", function () {
    if (gameOn) {
        snapSize = 100
        gameOn = false
        setTimeout(gameRun, 100)
        $("#startbuttons").toggle();
        $("#snap").toggle();
        console.log('restart button pressed.')
        $('body').css('background-color', 'black')
    } else {
        console.log('begin button pressed.')
        $("#startbuttons").toggle();
        $("#snap").toggle();
        setTimeout(gameRun, 100)
        gameOn = true
        console.log(gameOn)
        $('body').css('background-color', 'black')
    }

})

$("#snap").on("click", function () {
    snapSize = snapSize - 20

})

$(document).on("keypress", function (e) {
    console.log(e.key)
    if (e.key == ' ') {
        snapSize = snapSize - 20
    }


})

function gameRun() {
    snapSize++
    // console.log(snapSize)
    $('#snap').css('width', (snapSize + 'px'))
    //console.log('game Round')
    if (snapSize < 20) {
        gameWin()
    } else if (snapSize < 1500) {
        setTimeout(gameRun, 5)
    } else {
        gameOver()
    }


}

function gameOver() {
    $("#startbuttons").toggle();
    $('#intro').text('Oh no! He got too big! You killed us all!');
    $('#addbuttons').text('RETRY');
    $("#snap").toggle();
    $('body').css('background-color', '#661010')
}

function gameWin() {
    $("#startbuttons").toggle();
    $('#intro').text('Congratulations! You saved us all! Thank you Mighty wizard!');
    $('#addbuttons').text('RESTART');
    $("#snap").toggle();
    $('body').css('background-color', '#CCFBFE')
}