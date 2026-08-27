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

Before I officially met Blessing, I was at an event taking pictures while she was anchoring. 📸 I took her picture that day without knowing who she was or what role she would eventually play in my life.

Months later, she was invited to minister at a programme hosted by my local church, and I was the pianist backing her. 🎹

After the programme, I walked over to say hello. One conversation became many, and before long, we were spending hours talking.

The funniest part? I only realised later that I had already photographed her months before we met.

God really had the introduction sorted out before we even knew we were being introduced. 😂❤️`;

const stephenFullExtra = `Our story feels less like something we planned and more like something God quietly orchestrated from the very beginning. ❤️

Months before I met Blessing, I had prayed about finding the person God had prepared for me. I held onto that expectation for a while, but eventually decided to stop trying to figure out when it would happen and simply focus on serving God and trusting His timing.

What I didn't know was that the story had already started. 😂

Before I officially met Blessing, I was at an event taking pictures. She was anchoring, calling guests up to the stage one after another, while I was somewhere behind the camera doing my job. 📸

I took her picture that day.

No conversation. No introduction. Nothing.

Just a photographer taking pictures at an event and a woman who had absolutely no idea that the person behind the camera would eventually become her husband. 😂

Months later, she was invited to minister at a programme hosted by my local church. And there I was again, this time behind the piano. 🎹

I was backing her as she ministered, and something about her caught my attention. The way she carried herself, her warmth and the way she connected with the room. I found myself paying attention.

After the programme, I decided to walk over and say hello.

I won't lie, I had to gather some courage. 😂

We had a simple conversation, but I knew I wanted to talk to her again.

So we started talking.

And then we kept talking.

Somehow, conversations that were supposed to be short turned into hours. We could talk about almost anything, and before long, ending the call became harder than starting it. 😂

Eventually, I asked her out on a date.

The more I got to know her, the more I realised there was something different about what was developing between us. I wasn't just enjoying our conversations anymore. I was genuinely falling for her.

Then came the plot twist.

One day, while going through my phone, I came across a picture and suddenly realised...

Wait.

I had already photographed this woman months ago. 😂📸

I had literally taken her picture before I knew her name.

Looking back, that was one of those moments that made me realise just how interesting God's timing can be. What seemed like two completely unrelated encounters had already been connected.

From the event where I unknowingly photographed her, to the church programme where I played the piano while she ministered, to that first conversation, and then everything that followed, the pieces just kept falling into place.

We weren't planning any of it.

God was.

And now, I get to call that woman my wife. ❤️

Blessing, I am grateful for you, for our story, and for every unexpected turn that brought us here.

I love you so much, Sweets. ❤️`;

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
