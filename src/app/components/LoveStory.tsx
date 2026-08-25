"use client";

import { useState } from "react";

const blessingShort = `For the longest time, I assumed I would have to go looking for love. As it turned out, I could not have been more wrong.

Before I ever met Stephen, I had received a word of my own. I had been told that I would find my husband right at my place of service in the house of God, in the very place where I served him faithfully. I held onto it quietly, never imagining how literally it would come to pass.

Well, maybe it was not as unexpected as it first felt. My story had quietly started exactly where I had been told it would, long before either of us realised it.`;

const blessingFull = `For the longest time, I assumed I would have to go looking for love. As it turned out, I could not have been more wrong.

Before I ever met Stephen, I had received a word of my own. I had been told that I would find my husband right at my place of service in the house of God, in the very place where I served him faithfully. I held onto it quietly, never imagining how literally it would come to pass.

Well, maybe it was not as unexpected as it first felt. My story had quietly started exactly where I had been told it would, long before either of us realised it.

You know what they say about never taking meaningful relationships for granted? It is absolutely true, because you never know who God has placed in your life as a destiny helper or, in my case, your forever person.

Long before I properly knew Stephen, I was anchoring an event, calling guests up to the stage one after another. He was one of the photographers there that day, quietly capturing everyone who came up, though I had no idea at the time that he was also capturing me. Neither of us knew each other yet, and neither of us understood what had already begun.

The moment that truly mattered came later, when I was invited to minister at a programme hosted by his local church. He was the pianist backing me that day, steady and attentive at the keys, and something about him stayed with me even though I did not think much of it at the time.

After the programme, he came over to say hi. It felt like an easy, ordinary conversation, warm and unhurried. I had no idea he already had a picture of me from that earlier event tucked away in his phone, waiting to be remembered.

We talked. Then we talked more. Days became weeks, and weeks became something neither of us had planned for but both of us quietly hoped for. Every conversation felt easy, like I had always known him. We would talk round the clock, hour after hour, and neither of us wanted to be the one to hang up first.

Somewhere in the middle of all that, I fell in love. Not the dramatic, overnight kind you see in films, but the quiet kind. The kind that sneaks up on you and then, one day, you look over and realise this person is already home.

When he later told me he had already taken my picture at that earlier event, long before either of us knew what was coming, I understood just how much of this had been written before we ever said a word to each other. I am so grateful for the path that led us here, and I cannot wait to spend the rest of my life choosing him.`;

const stephenShort = `Our story feels less like something we planned and more like something God orchestrated from the very beginning.

Months before I ever met Blessing, I had prayed about it and received a quiet but clear confirmation that I would meet the person meant for me. I waited for that promise earnestly, probably too earnestly, until I finally let it go and simply gave myself to serving in the house of God, trusting that the timing wasn't mine to control.

What I didn't know was that God had already started writing the story. Before I officially met Blessing, before I even knew her name, I was at an event where she was the anchor, calling guests up to the stage one after another while I stood by taking their pictures. I had no idea that somewhere in that crowd of faces I was photographing was the woman who would one day become my wife.`;

const stephenFullExtra = `

The real meeting came later, when she was invited to minister at a programme hosted by my local church. I was the church's pianist at the time, and I was the one backing her with the chords as she sang. That was the moment my eyes were truly opened: the word I had received months earlier started resonating in my spirit all over again, refusing to let me look away.

After the programme, I summoned up the courage to walk over and say hi, though if I'm honest, my first intention was simply to get to know her enough to confirm whether she really was the person I'd been told about. It still hadn't clicked, even then, that I had seen her before. That realisation only hit me days later, when we had already started talking and I stumbled on her picture sitting quietly in my phone gallery. I was stunned.

From there, everything moved with an ease I still can't fully explain. Every conversation felt like we had known each other for years already. We would talk round the clock, hour after hour, neither of us able to bring ourselves to hang up first.

The rest, as they say, is history, and it has been the most beautiful, fulfilling season of my life since. Blessing is the most wonderful soul I have ever met: pure in heart, selfless, endlessly amazing. I have never once regretted meeting her, and I am so glad, every single day, that I made the right choice.`;

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
