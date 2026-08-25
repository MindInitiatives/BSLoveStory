"use client";

import { useState } from "react";

const blessingShort = `I found love in the most unexpected way.

Well... maybe it isn't so unexpected anymore, considering how many beautiful love stories begin online these days. But if you'd asked me, I never imagined that would be my story.

You know what they say about never taking meaningful relationships for granted? It's absolutely true, because you never know who God has placed in your life as a destiny helper or, in my case, your forever person.`;

const blessingFull = `I found love in the most unexpected way.

Well... maybe it isn't so unexpected anymore, considering how many beautiful love stories begin online these days. But if you'd asked me, I never imagined that would be my story.

You know what they say about never taking meaningful relationships for granted? It's absolutely true, because you never know who God has placed in your life as a destiny helper or, in my case, your forever person.

When Stephen first reached out to me, I didn't think much of it at first. I receive messages often, and I've learned to be careful. But there was something different about him — the way he spoke, the thoughtfulness in his words, the sincerity I could feel even through a screen.

We talked. Then we talked more. Days became weeks, and weeks became something neither of us had planned for but both of us quietly hoped for. Every conversation felt easy, like I had always known him. He made me laugh without trying, and he listened in a way that made me feel truly seen.

Somewhere in the middle of all that, I fell in love. Not the dramatic, overnight kind you see in movies — the quiet kind. The kind that sneaks up on you and then, one day, you look over and realise this person is already home.

I am so grateful for the path that led us here. I cannot wait to spend the rest of my life choosing him.`;

const stephenShort = `Our love story is honestly like a Bollywood movie. 😂

It all started in September 2024... on my wife's birthday. A close mutual friend posted her picture, and the moment I saw it, I was completely drawn to her. Naturally, I jumped into my friend's DM to ask about this beautiful lady. That's when I found out she was also a single pringle like me.

I was instantly attracted to her, and for me, it was truly love at first sight. I didn't even ask for her number. Instead, I asked for her Instagram handle because, of course, I had to do a little "research"... or let's just call it small stalking. 😂`;

const stephenFullExtra = `

So I found her profile, followed her, and started engaging thoughtfully — liking posts, leaving genuine comments, not the desperate kind. Just letting her know I existed.

A few weeks later, she followed back. I took that as my sign.

I slid into her DMs properly this time, introduced myself, and we started talking. I remember being so nervous every time she replied quickly because I didn't want to seem too eager. But I was eager. Very.

What I didn't expect was how genuinely interesting she was — not just beautiful, but thoughtful, grounded, funny in a dry kind of way that I found completely disarming. Every conversation felt like I was learning something new about her, and I always wanted more.

I knew early on that she was the person I wanted to build a life with. The proposal wasn't a surprise to me — I'd been ready for a while. Getting her to say yes? That was the real work. 😂

But she did. And here we are. I am the happiest man alive, and I intend to spend every day proving she made the right choice.`;

function StoryCard({
  name,
  short,
  full,
}: {
  name: string;
  short: string;
  full: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const displayText = expanded ? full : short;

  return (
    <article className="story__side">
      <h3 className="story__name">{name}</h3>

      <div className={`story__body${expanded ? "" : " is-clipped"}`}>
        {displayText.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <button
        type="button"
        className="story__more"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? `Close ${name}'s story` : `Read ${name}'s full story`}
      </button>
    </article>
  );
}

export default function LoveStory() {
  return (
    <section id="story" className="section section--alt">
      <div className="shell">
        <div className="section__head">
          <p className="eyebrow">Our Love Story</p>
          <h2 className="section__title">How we got here</h2>
          <p className="flourish">
            <span />
          </p>
          <p className="section__intro">In our own words.</p>
        </div>

        <div className="story">
          <StoryCard name="Blessing" short={blessingShort} full={blessingFull} />
          <StoryCard name="Stephen" short={stephenShort} full={stephenShort + stephenFullExtra} />
        </div>
      </div>
    </section>
  );
}
