"use client";

import { useState } from "react";
import Clipify from "clipify";

const clipboard = new Clipify();

const accountDetails = {
  number: "0914888391",
  name: "Blessing Iyanuoluwa Adeniyi",
  bank: "Guaranty Trust Bank",
};

export default function Registry() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    clipboard.copy({ text: accountDetails.number, key: "account-number" });
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="registry" className="section">
      <div className="shell registry">
        <div className="section__head">
          <p className="eyebrow">Registry</p>
          <h2 className="section__title">Your presence is the gift</h2>
          <p className="flourish">
            <span />
          </p>
        </div>

        <p className="registry__lead">
          Having you celebrate this moment of joy with us is the most precious gift we could ask
          for, and we are truly grateful.
        </p>
        <p className="registry__body">
          However, for those who feel inclined to give a gift, we kindly request that all gifts be
          monetized and sent via the details below for your convenience:
        </p>

        <div className="account">
          <dl>
            <div className="account__row">
              <dt>Account number</dt>
              <dd className="account__number">{accountDetails.number}</dd>
            </div>
            <div className="account__row">
              <dt>Account name</dt>
              <dd>{accountDetails.name}</dd>
            </div>
            <div className="account__row">
              <dt>Bank</dt>
              <dd>{accountDetails.bank}</dd>
            </div>
          </dl>
          <button type="button" className="account__copy" onClick={handleCopy}>
            {copied ? "Copied!" : "Copy account number"}
          </button>
        </div>

        <p className="registry__outro">
          Your love and support mean so much to us, and we are truly grateful!
        </p>
      </div>

      {copied && <div className="toast">Account number copied</div>}
    </section>
  );
}
