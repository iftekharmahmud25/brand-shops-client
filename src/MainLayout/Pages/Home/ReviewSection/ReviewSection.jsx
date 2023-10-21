import { useState } from 'react';

const ReviewSection = () => {
  const reviews = [
    {
      "userName": "Robin",
      "feedback": "I recently purchased the latest iPhone from Apple, and I'm absolutely thrilled with its performance and camera quality."
    },
    {
      "userName": "Alex",
      "feedback": "I've been using Google's Pixel phone for a while now, and the Android experience is unbeatable. Highly recommend it!"
    },
    {
      "userName": "Max",
      "feedback": "I'm a big fan of Intel processors. My laptop with an Intel CPU runs like a charm, and it's great for multitasking."
    },
    {
      "userName": "Naisha",
      "feedback": "Samsung's latest TV is a game-changer. The picture quality and smart features are top-notch. Love it!"
    },
    {
      "userName": "zahid",
      "feedback": "Sony's headphones are my go-to for excellent sound quality and comfort during long listening sessions. Worth every penny."
    }
    ,
    
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='w-[50%] mx-auto my-12'>
      <div className="tabs mb-7">
        {reviews.map((review, index) => (
          <a
            key={index}
            className={`tab tab-bordered ${activeTab === index ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {`Tab ${index + 1}`}
          </a>
        ))}
      </div>
      <div className="review-content rounded-md bg-slate-800 text-white px-3 py-3">
        <h2 className='mt-3 font-bold text-lg'>{reviews[activeTab].userName}</h2>
        <p className='mb-3'>{reviews[activeTab].feedback}</p>
      </div>
      <div className='flex items-center'>
      <input type="text" placeholder="Type here your review" className="input rounded-none w-full my-6" /><button className='bg-gradient-to-r from-red-800  to-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-800 text-xl text-white px-4 py-2 rounded-md'>submit</button>
      </div>
    </div>
  );
};

export default ReviewSection;
