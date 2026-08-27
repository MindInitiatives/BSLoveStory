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

const stephenShort = `Our story feels less like something we planned and more like something God quietly orchestrated from the very beginning. ❤️

Months before I met Blessing, I had prayed about finding the person God had prepared for me. After a while, I decided to stop trying to figure out when it would happen and simply focus on serving God and trusting His timing.

What I didn't know was that the story had already started. 😂

Before we officially met, we were already at the same event. Blessing was anchoring, and I was there as a guest. At some point, I decided to take pictures of a few people at the event just to have some memories from the day. 📸 One of those pictures happened to be Blessing.

I didn't know her. I didn't know her name. I certainly didn't know she would eventually become my wife.

Months later, she was invited to minister at a programme hosted by my local church, and I was the pianist backing her. 🎹 After the programme, I walked over to say hello.

One conversation became many, and before long, we were spending hours talking.

Then came the funny part. 😂

I eventually realised that I had already taken her picture months before we ever properly met.

God really had the introduction sorted out before we even knew we were being introduced. ❤️`;

const stephenFull = `Our story feels less like something we planned and more like something God quietly orchestrated from the very beginning. ❤️

Months before I met Blessing, I had prayed about finding the person God had prepared for me. I held onto that expectation for a while, but eventually decided to stop trying to figure out when it would happen and simply focus on serving God and trusting His timing.

What I didn't know was that the story had already started. 😂

Before we officially met, we were already at the same event. Blessing was anchoring the programme, and I was there as a guest. At some point during the event, I decided to take pictures of a few of the guests, just to keep some memories from the day. 📸

One of those pictures was Blessing.

I didn't know her. I didn't know her name. I didn't have any idea that I had just taken a picture of the woman who would eventually become my wife.

It was just a random picture from an ordinary day.

Months later, she was invited to minister at a programme hosted by my local church. I was the pianist backing her that day. 🎹

This time, I actually noticed her.

There was something about the way she carried herself and ministered that caught my attention, and after the programme, I decided to walk over and say hello.

I'll admit, I had to gather some courage first. 😂

We had a simple conversation, but I knew I wanted to talk to her again.

So we started talking.

And then we kept talking.

Somehow, conversations that were supposed to be short turned into hours. We could talk about almost anything, and before long, ending the call became harder than starting it. 😂

Eventually, I asked her out on a date.

The more I got to know her, the more I realised that this was becoming something real. I wasn't just enjoying our conversations anymore. I was genuinely falling for her.

Then came the plot twist.

While going through my phone one day, I came across a picture and suddenly realised...

Wait.

I had already taken this woman's picture months ago, long before I even knew her name. 😂📸

And she had absolutely no idea.

Looking back, that moment made me appreciate our story even more. What seemed like two completely unrelated encounters had already been connected long before we knew it.

From being at the same event without meeting, to seeing each other again at church, to that first conversation, to all the hours we spent talking, everything seemed to fall into place naturally.

We weren't planning any of it.

God was.

And now, I get to call that woman my wife. ❤️

Blessing, You are indeed a blessing and I am grateful for you, for our story, and for every unexpected turn that brought us here.

I love you so much, My Iyanu. ❤️`;

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
          <StoryCard name="Stephen" short={stephenShort} full={stephenFull} />
        </div>
      </div>
    </section>
  );
}
