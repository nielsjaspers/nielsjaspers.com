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
    "this page has escaped containment",
    "this page is rumoured to have a lot of secrets"
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

const oneInHundredThousand = ["was this worth it?"];

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
    const roll = randomInt(100000) + 1;

    if (roll === 1) {
        return { sentence: pickRandom(oneInHundredThousand), tier: 'legendary' };
    }

    if (roll <= 10) {
        return { sentence: pickRandom(oneInTenThousand), tier: 'ultra-rare' };
    }

    if (roll <= 100) {
        return { sentence: pickRandom(oneInOneThousand), tier: 'very-rare' };
    }

    if (roll <= 1000) {
        return { sentence: pickRandom(oneInOneHundred), tier: 'rare' };
    }

    return { sentence: pickRandom(funnySentences), tier: 'common' };
}

function getSeenSentences() {
    const stored = localStorage.getItem('seenSentences');
    const parsed = stored ? JSON.parse(stored) : {};
    return {
        common: parsed.common || [],
        rare: parsed.rare || [],
        'very-rare': parsed['very-rare'] || [],
        'ultra-rare': parsed['ultra-rare'] || [],
        legendary: parsed.legendary || []
    };
}

function saveSeenSentence(sentence, tier) {
    const seen = getSeenSentences();
    if (!seen[tier].includes(sentence)) {
        seen[tier].push(sentence);
        localStorage.setItem('seenSentences', JSON.stringify(seen));
    }
}

function getTotalSentences() {
    return funnySentences.length + oneInOneHundred.length + oneInOneThousand.length + oneInTenThousand.length + oneInHundredThousand.length;
}

function getSeenCount() {
    const seen = getSeenSentences();
    return seen.common.length + seen.rare.length + seen['very-rare'].length + seen['ultra-rare'].length + seen.legendary.length;
}

function createDropdown() {
    const seen = getSeenSentences();
    const lostLinks = document.querySelector('.lost__links');
    if (!lostLinks) return;

    const container = document.createElement('div');
    container.style.marginTop = 'var(--space-lg)';
    container.style.textAlign = 'center';

    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'btn btn--ghost';
    toggleBtn.style.fontSize = 'var(--step--1)';
    toggleBtn.style.padding = '0.5em 1em';
    const seenCount = getSeenCount();
    const total = getTotalSentences();
    toggleBtn.textContent = `collection (${seenCount}/${total})`;
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-controls', 'sentence-collection');

    const dropdown = document.createElement('div');
    dropdown.id = 'sentence-collection';
    dropdown.style.display = 'none';
    dropdown.style.marginTop = 'var(--space-md)';
    dropdown.style.textAlign = 'left';
    dropdown.style.maxWidth = '48ch';
    dropdown.style.marginLeft = 'auto';
    dropdown.style.marginRight = 'auto';
    dropdown.style.padding = 'var(--space-md)';
    dropdown.style.background = 'var(--paper-raised)';
    dropdown.style.border = '1px solid var(--rule)';
    dropdown.style.borderRadius = 'var(--radius)';

    const allSentences = [
        ...seen.common.map(s => ({ sentence: s, tier: 'common' })),
        ...seen.rare.map(s => ({ sentence: s, tier: 'rare' })),
        ...seen['very-rare'].map(s => ({ sentence: s, tier: 'very-rare' })),
        ...seen['ultra-rare'].map(s => ({ sentence: s, tier: 'ultra-rare' })),
        ...seen.legendary.map(s => ({ sentence: s, tier: 'legendary' }))
    ];

    if (allSentences.length === 0) {
        dropdown.innerHTML = '<p style="color: var(--ink-3); font-size: var(--step--1); margin: 0;">no sentences collected yet</p>';
    } else {
        allSentences.forEach(({ sentence, tier }) => {
            const item = document.createElement('div');
            item.style.padding = 'var(--space-2xs) 0';
            item.style.fontSize = 'var(--step--1)';
            if (tier === 'common') {
                item.style.color = 'var(--ink-2)';
            } else if (tier === 'legendary') {
                item.style.color = '#e5bd2a';
            } else {
                item.style.color = 'var(--accent)';
            }
            item.style.fontStyle = tier !== 'common' ? 'italic' : 'normal';
            item.textContent = sentence;
            dropdown.appendChild(item);
        });
    }

    toggleBtn.addEventListener('click', () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !isExpanded);
        dropdown.style.display = isExpanded ? 'none' : 'block';
    });

    container.appendChild(toggleBtn);
    container.appendChild(dropdown);
    lostLinks.parentNode.insertBefore(container, lostLinks.nextSibling);
}

document.addEventListener("DOMContentLoaded", function() {
    const kickerElement = document.querySelector(".lost__kicker");

    if (kickerElement) {
        const { sentence, tier } = getRandomSentence();
        kickerElement.textContent = sentence;
        
        if (tier === 'rare') {
            kickerElement.style.color = 'var(--accent)';
        } else if (tier === 'very-rare') {
            kickerElement.style.color = '#3555ca';
        } else if (tier === 'ultra-rare') {
            kickerElement.style.color = '#ca359f';
        } else if (tier === 'legendary') {
            kickerElement.style.color = '#e5bd2a';
        }

        saveSeenSentence(sentence, tier);
    }
    
    createDropdown();
});