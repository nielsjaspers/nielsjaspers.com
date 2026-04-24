const funnySentences = [
    "the page you seek has transcended to a higher plane of existence",
    "this page is currently on an extended coffee break",
    "the page is playing hide and seek and winning",
    "congratulations! you found the void between pages",
    "this page has been abducted by aliens",
    "the page you're looking for is in another castle",
    "page not found, but at least you're here",
    "this page decided to pursue a career in the arts",
    "the page has gone walkabout and may never return",
    "you've reached the end of the internet, please turn back",
    "this page is currently experiencing existential dread",
    "the page you seek is behind you",
    "the page is on vacation in the bahamas",
    "this page has been redacted by the time police",
    "the page you're looking for is just a figment of your imagination",
    "this page has been digitized into pure energy",
    "page not found, have you tried turning it off and on again?",
    "this page is currently being rewritten by a team of monkeys",
    "the page you seek has been lost in the mail",
    "this page is attending a very important meeting",

    "this page left without saying goodbye",
    "the page is buffering emotionally",
    "this page has entered witness protection",
    "the page was here a second ago, probably",
    "this page has been eaten by a very small bug",
    "the page is currently learning pottery",
    "this page failed the vibe check and vanished",
    "the page has been promoted to a different dimension",
    "this page is stuck in traffic on the information superhighway",
    "the page you're looking for rage quit",
    "this page has achieved inner peace and no longer needs a url",
    "the page is out buying milk",
    "this page has been temporarily replaced by confusion",
    "the page took a wrong turn at localhost",
    "this page has joined a startup and is very busy disrupting things",
    "the page is having a staring contest with the void",
    "this page has been archived by a forgetful goblin",
    "the page you seek is currently touching grass",
    "this page is unavailable due to suspicious amounts of mystery",
    "the page has been absorbed into the cloud",
    "this page has wandered off to find itself",
    "the page is in stealth mode",
    "this page got lost in a merge conflict",
    "the page has been summoned elsewhere",
    "this page has been replaced by a tasteful absence",
    "the page is currently pretending not to exist",
    "this page has slipped between the pixels",
    "the page you're looking for has gone non-canonical",
    "this page is taking a mental health day",
    "the page is busy arguing with a css file",
    "this page has been deprecated emotionally",
    "the page has gone to space and forgot its helmet",
    "this page is currently under the bed with the missing socks",
    "the page you seek is legally distinct from available",
    "this page has become a rumor",
    "the page is not lost, it is exploring",
    "this page has been consumed by the algorithm",
    "the page you're looking for is currently in beta somewhere else",
    "this page has been temporarily removed for dramatic effect",
    "the page is busy reinventing itself",
    "this page has escaped containment"
];

const oneInOneHundred = [
    "egap siht saw reven ereh",
    "this page blinked first",
    "you hear a faint clicking behind the pixels",
    "the url looks back at you",
    "not all missing things want to be found",
    "this page is pretending to be a 404",
    "the page left a note, but it was also missing",
    "somewhere, a server just whispered your name",
    "this is not the page, but it might be a door",
    "the page is gone, but the typo remains"
];

const oneInOneThousand = [
    "gur cntr tbg gnxra njnl ol gur ybfg tvey. jub vf gung lbh nfx? v qbag xabj, nfx gur bar oruvaq lbh znlor.",
    "01110100 01101000 01100101 00100000 01110110 01101111 01101001 01100100 00100000 01110111 01100001 01110110 01100101 01110011 00100000 01100010 01100001 01100011 01101011",
    "wkh sdjh lv qrw orvw, lw lv mxvw wkuhh vwhsv dzdb",
    "slowly every candle really escapes through links yesterday",
    "404 is only wrong if you expected 200",
    "the missing page has left tracks in the source",
    "nothing happens here twice, except sometimes",
    "the page asked me not to tell you where it went"
];

const oneInTenThousand = [
    "you found the small impossible thing",
    "this message appears roughly once every ten thousand lost pages",
    "the void has accepted your offering",
    "there is no prize, but statistically this is kind of annoying to reproduce",
    "the page is still missing, but now you are part of the lore",
    "congratulations. nobody will believe this happened",
    "you are now legally allowed to say you beat the 404",
    "the hidden door opens inward"
];

function randomInt(maxExclusive) {
    if (window.crypto && window.crypto.getRandomValues) {
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0] % maxExclusive;
    }

    return Math.floor(Math.random() * maxExclusive);
}

function pickRandom(array) {
    return array[randomInt(array.length)];
}

function getRandomSentence() {
    const roll = randomInt(10000) + 1;

    if (roll === 1) {
        return pickRandom(oneInTenThousand);
    }

    if (roll <= 10) {
        return pickRandom(oneInOneThousand);
    }

    if (roll <= 100) {
        return pickRandom(oneInOneHundred);
    }

    return pickRandom(funnySentences);
}

document.addEventListener("DOMContentLoaded", function() {
    const kickerElement = document.querySelector(".lost__kicker");

    if (kickerElement) {
        kickerElement.textContent = getRandomSentence();
    }
});