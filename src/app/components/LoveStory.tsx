"use client";

import { useState } from "react";

const blessingShort = `At the time, I wasn't looking for a relationship. Dating wasn't even on my mind. But God had already given me a glimpse of what was to come. ❤️

Before I ever met Stephen, I had received a word that I would meet my husband at my place of service in the house of God, right where I was faithfully serving. I held onto that word, not knowing when or how it would happen.

Funny enough, our story had already started without either of us knowing. I was anchoring an event while Stephen was there taking pictures. 📸 He captured moments that day, including me, without either of us knowing that we would eventually become part of each other's story.

Then, months later, I was invited to minister at a programme hosted by his church. Stephen was the pianist backing me that day. 🎹 After the programme, he came over to say hello.

That simple conversation became the beginning of something neither of us had planned.

And the funniest part? He had already taken my picture months before we officially met. 😂

Looking back, God really had the whole thing in motion long before we knew it. ❤️`;

const blessingFull = `At the time, I wasn't looking for a relationship. Dating wasn't even on my mind. But God had already given me a glimpse of what was to come. ❤️

Before I ever met Stephen, I had received a word that I would meet my husband at my place of service in the house of God, right where I was faithfully serving. I held onto that word quietly, without knowing when or how it would happen.

Funny enough, our story had already started without either of us knowing.

I was anchoring an event, calling guests up to the stage one after another, while Stephen was there taking pictures. 📸 He was simply doing his job, capturing moments from the event. I had no idea who he was, and he had no idea who I was.

Well... apparently, he had at least seen me because he had taken my picture that day. 😂

Neither of us thought anything of it.

Then months later, I was invited to minister at a programme hosted by his local church. And there he was again, this time behind the piano. 🎹

Stephen was the pianist backing me that day. I noticed him, but I still wasn't thinking about relationships or wondering if this was "the one." I was simply there to do what I had been invited to do.

After the programme, he came over to say hello. It was a simple, easy conversation. Nothing dramatic. Just two people meeting and getting to know each other.

Except... that conversation didn't end there. 😂

We started talking, and somehow, we kept talking. What began as getting to know each other turned into hours on the phone. We could talk about almost anything, and before long, hanging up became a little too difficult. ❤️

Then my Shy Tall Man asked me out on a date.

Somewhere between the conversations, the laughter and getting to know each other, I realised I was falling in love. It wasn't some dramatic, movie-style moment. It happened gradually, in all the little things that made me enjoy having him around.

Then came the plot twist.

Stephen told me that he had actually taken my picture at that earlier event, months before we properly met.

I was like... wait, YOU had already taken my picture?! 😂📸

Looking back, that moment made our story even more special. What seemed like two completely unrelated encounters had somehow been connected all along.

I wasn't looking for love. I wasn't trying to make anything happen. I was simply serving God and living my life, while He was quietly putting the pieces together.

And somehow, those pieces led me to him. ❤️

I am grateful for the way our story unfolded, for all the unexpected little details, and for the man I get to call my husband.

I love you so much, Ifemi. ❤️`;

const stephenShort = `I had prayed about finding my person, and after a while, I decided to stop overthinking it and just focus on serving God.

Little did I know, the story had already started. 😂

Months before I officially met Blessing, I was at an event taking pictures. She was the anchor, moving guests on and off the stage, and I was behind the camera doing my job. 📸

I took pictures of her without knowing who she was. She had no idea who I was either.

Fast-forward to another programme at my local church. Blessing was invited to minister, and I was the pianist backing her. 🎹

This time, we actually met.

After the programme, I walked over to say hello. One conversation turned into many, and before long, I found myself looking forward to every conversation with her.

The funniest part? I only realised days later that I had already photographed her months before we met.

God really said, "Let me introduce you two... but slowly." 😂❤️`;

const stephenFullExtra = `I had prayed about finding my person, and for a while, I was very interested in knowing exactly when that prayer would be answered. 😂

Eventually, I decided to relax, stop trying to figure out the timing, and just focus on serving God.

Little did I know, the story had already started.

Months before I officially met Blessing, I was at an event taking pictures. She was the anchor, calling guests up to the stage one after another, while I was behind the camera doing what I came to do. 📸

I took her picture that day.

No conversation. No introduction. Nothing.

Just one photographer taking pictures at an event and one woman completely unaware that the photographer would eventually become her husband. 😂

Then came another programme, this time at my local church. Blessing was invited to minister, and I was the pianist backing her. 🎹

This was different.

I noticed her.

There was something about her presence, the way she ministered and carried herself, that caught my attention. After the programme, I decided to walk over and say hello.

And yes, I was nervous. 😂

We had a simple conversation, exchanged pleasantries, and somehow, that was enough to make me want to talk to her again.

So we started talking.

Then we talked some more.

Then somehow, our "quick" calls started lasting for hours. 😂 We would get on the phone and suddenly realise we had been talking for half the day. Neither of us seemed particularly interested in being the first person to hang up.

Eventually, I asked her out on a date.

The more I got to know her, the more I liked what I was discovering. Her heart, her sense of humour, her depth, the way she carried herself. Somewhere along the way, I realised this wasn't just a nice conversation anymore. I was falling for her.

Then came the plot twist.

Days into our conversations, I came across a picture in my phone gallery and realised...

WAIT.

I had already photographed this woman months ago. 😂😂

I had literally taken her picture before I knew her name.

At that point, I had to laugh. Looking back, it felt like God had been dropping little hints into the story long before either of us knew what was happening.

From a random event, to a church programme, to a piano, to a conversation, to countless hours on the phone... somehow, all the pieces came together.

And now I get to call that woman my wife. ❤️

God really knows how to write a story.

Blessing, thank you for being you. I love you so much, My Iyanu. ❤️`;

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
