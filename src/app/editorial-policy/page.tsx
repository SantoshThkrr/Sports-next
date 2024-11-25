const Home = async () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.slice(8);
  return (
    <div
      id="contentPost"
      className="w-full md:w-1/2 lg:w-6/12 p-4 mt-4 bg-white my-4 font-sans"
    >
      <h1 className="text-2xl font-semibold border-b leading-9 p-0 mb-2">Editorial Policy – {siteUrl}</h1>
      The aim of this document is to outline the ethical and editorial standards
      followed by all our journalists working for {siteUrl}
      <strong>Editorial Mission</strong>
      {siteUrl} is a media company dedicated to helping citizens and
      consumers make important decisions on topics including  education, health,
      money, news, cars and travel by providing them in-depth information and
      knowledge. {siteUrl} publishes news, facts, information and advice
      that has earned the trust of our readers and users. {siteUrl} strives
      to empower its users and readers and support their decision-making.
      However, we encourage all to consult relevant professionals before making
      decisions.
      <strong>Objectivity</strong>
      {siteUrl} is editorially independent in its reporting and it operates
      in the public interest. Since its founding in 2020, {siteUrl} has
      espoused the values of ethical journalism, to ensure accurate, fair and
      in-depth information.
      <strong>Transparency</strong>A crucial element of ethical and objective
      journalism, transparency means openness about the sources we use, such as
      providing links to official sources, studies and original research papers.
      It also means transparency about who is writing the content. All authors
      at {siteUrl} are clearly identified at the top of each article, with
      biographies that include their experiences, expertise and affiliations.
      <strong>Accuracy</strong>
      Authors and editors ensure that content on the website is well-sourced and
      checked by copy editors for truthfulness and timeliness.
      <strong>Impartiality</strong>
      Balanced news coverage sans bias is the operating principle of
      {siteUrl}.
      <strong>Types of work</strong>
      News piece: Based on facts, verified by editors. Explainer: Break-down of
      complex issues into understandable content. Listicle: Article made of a
      list, usually with some kind of extra detail to each item. Expert advice:
      Article containing views and advice from experts. Review: Critiques of
      events, gadget and automobile launches, shows and movies. Fact Check:
      Debunking fake news and viral stories that need verification. Live Blog:
      Developing news updates on elections, speeches, Parliament sessions,
      cricket matches, Oscars and other big events.
    </div>
  );
};

export default Home;
