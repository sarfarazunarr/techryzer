"use client";

import Card from '@/components/Card';
import React, { useState } from 'react';
import { Blog } from '../page';

const Sidebar = ({ posts }: { posts: Blog[] }) => {
  const [msg, setMsg] = useState("");

  async function subscribe(data: FormData) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/subscribe`, {
      method: "POST",
      body: data,
    });
    if (!res.ok) {
      setMsg("❌ Subscription failed. Please try again.");
    } else {
      setMsg("✅ Thanks for subscribing!");
    }
  }

  return (
    <aside className="flex flex-col gap-y-6">
      {/* Newsletter Form */}
      <form
        action={subscribe}
        className="border border-gray-400 rounded-md p-5 flex flex-col gap-3 bg-darkblue/40"
      >
        <h2 className="text-xl font-semibold text-center text-lightwhite">
          📬 Subscribe to Our Newsletter
        </h2>
        <p className="text-sm text-center text-white font-manrop">{msg}</p>
        <input
          type="text"
          required
          name="name"
          placeholder="Your Name"
          className="px-4 py-2 w-full bg-transparent text-white rounded-md border border-lightwhite text-[15px] focus:border-blue-500"
        />
        <input
          type="email"
          required
          name="email"
          placeholder="Your Email"
          className="px-4 py-2 w-full bg-transparent text-white rounded-md border border-lightwhite text-[15px] focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-lightwhite text-darkblue font-semibold w-full py-2 rounded-full hover:bg-blue-700 hover:text-white transition-all"
        >
          Subscribe
        </button>
      </form>

      {/* Call-to-Action Box */}
      <div className="border border-yellow-400 bg-yellow-100 text-black rounded-md p-4 shadow-sm">
        <h3 className="text-lg font-bold mb-1">🚀 Start a Project With Us</h3>
        <p className="text-sm mb-3">Looking to build a website, app, or AI workflow? Let&apos;s talk about how we can help you launch faster.</p>
        <a
          href="/quote"
          className="inline-block bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition"
        >
          Get a Free Quote
        </a>
      </div>

      {/* Lead Magnet Offer */}
      <div className="border border-teal-500 bg-teal-50 text-black rounded-md p-4">
        <h3 className="text-lg font-bold mb-2">🎁 Free Resource!</h3>
        <p className="text-sm mb-3">Download our free guide: <strong>&apos;Top 10 AI Workflows That Save Businesses Hours Every Week&apos;</strong></p>
        <a
          href="/resources/ai-workflows-guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm inline-block bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
        >
          Download Now
        </a>
      </div>

      {/* Blog Posts */}
      {posts.length > 0 && (
        <div className="flex flex-col gap-4 mt-4">
          <h3 className="text-xl font-bold text-lightwhite mb-2">📰 Recent Posts</h3>
          {posts.map((post, index) => (
            <Card
              key={index}
              img={post.imgUrl}
              title={post.title}
              description={post.meta_description}
              link={"/blog/" + post.slug}
              btnText="Read More"
            />
          ))}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
