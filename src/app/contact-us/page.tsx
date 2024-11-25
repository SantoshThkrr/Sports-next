const Home = async () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.slice(8);
  const siteEmail = process.env.NEXT_PUBLIC_SITE_EMAIL;
  return (
    <div
      id="contentPost"
      className="w-full md:w-1/2 lg:w-6/12 p-4 mt-4 bg-white my-4 font-sans"
    >
      <h1 className="text-2xl font-semibold border-b leading-9 p-0 mb-2">Contact Us – {siteUrl}</h1>
      Any Queries Related Editorial, Business, Tech Issues, Advertising &amp; In
      case of any issues regarding the content on the site please mail us at
      E-mail : {siteEmail}
      Connect With Us: Let’s make the gaming world even more exciting together!
      Follow us on facebook, Instagram, Twitter . We eagerly await your
      suggestions and feedback. Thank you for being a part of the {siteUrl}{" "}
      community!
    </div>
  );
};

export default Home;
