/* eslint-disable react/no-unescaped-entities */
const Home = async () => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.slice(8);
    const siteEmail = process.env.NEXT_PUBLIC_SITE_EMAIL;
    return (
      <div
        id="contentPost"
        className="w-full md:w-1/2 lg:w-6/12 p-4 mt-4 bg-white my-4 font-sans"
      >
        <h1 className="text-2xl font-semibold border-b leading-9 p-0 mb-2">About Us – {siteUrl}</h1>
  
  Welcome to {siteUrl}, your premier source for the latest news and updates across various platforms. We are dedicated to providing comprehensive coverage of world news, business insights, sports highlights, lifestyle trends, tech innovations, auto industry updates, horoscope predictions, and much more. At {siteUrl}, we strive to be your go-to destination for staying informed and engaged with the world around you.
  
  <strong>Our Mission:</strong> Our mission at {siteUrl} is to serve as a trusted source of information across diverse topics, catering to the varied interests of our audience. We aim to create a dynamic platform where individuals can access timely news, insightful analyses, and engaging content across multiple domains.
  
  <strong>What Sets Us Apart:</strong> At {siteUrl}, we pride ourselves on our commitment to delivering high-quality, authentic content that resonates with our audience. Our team carefully curates news stories and features to ensure relevance, accuracy, and depth, setting us apart as a reliable and credible source of information.
  
  <h2><strong>Key Features:</strong></h2>
  <ul>
       <li><strong>World News:</strong> Stay informed about the latest developments shaping the global landscape.</li>
       <li><strong>Business News:</strong> Gain insights into market trends, economic updates, and corporate developments.</li>
       <li><strong>Sports Updates:</strong> Stay up-to-date with the latest scores, match analyses, and sporting events.</li>
       <li><strong>Lifestyle Trends:</strong> Explore articles on fashion, health, travel, entertainment, and more.</li>
       <li><strong>Tech Innovations:</strong> Discover the latest advancements in technology, gadgets, and digital trends.</li>
       <li><strong>Auto Industry:</strong> Get the scoop on new car releases, industry updates, and automotive innovations.</li>
       <li><strong>Horoscope Predictions:</strong> Access daily horoscope forecasts to guide you through life's ups and downs.</li>
  </ul>
  <strong>Our Promise:</strong> At {siteUrl}, we are committed to delivering timely, relevant, and engaging content that adds value to your daily life. Whether you're seeking news updates, insightful analyses, or lifestyle inspiration, we're here to meet your needs and exceed your expectations.
  
  <strong>Connect With Us:</strong> Join the {siteUrl} community on Facebook, Instagram, Twitter, and other social media platforms. We welcome your feedback, suggestions, and engagement as we continue to grow and evolve together.
  
  Thank you for choosing {siteUrl} as your trusted source for news and updates. We look forward to keeping you informed and inspired every step of the way.
      </div>
    );
  };
  
  export default Home;
  