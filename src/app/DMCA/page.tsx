const Home = async () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.slice(8);
  const siteEmail = process.env.NEXT_PUBLIC_SITE_EMAIL
  return (
    <div
      id="contentPost"
      className="w-full md:w-1/2 lg:w-6/12 p-4 mt-4 bg-white my-4 font-sans"
    >
      <h1 className="text-2xl font-semibold border-b leading-9 p-0 mb-2">DMCA – {siteUrl}</h1>
      <strong>DMCA Compliance Disclaimer for {siteUrl}</strong>
      {siteUrl}.com complies with 17 U.S.C. § 512 and the Digital
      Millennium Copyright Act (DMCA). We are committed to responding to any
      infringement notices and taking appropriate actions under the DMCA and
      other applicable intellectual property laws. If you believe that your
      copyrighted material has been posted on {siteUrl}.com, or if links to
      your copyrighted material are returned through our search engine and you
      wish to have this material removed, please follow the procedures outlined
      below.
      <strong>Copyright Infringement Claim Requirements :</strong>
      To file a copyright infringement claim, you must provide a written
      communication that includes the following information:
      <ol>
        <li>
          Evidence of the authorized person to act on behalf of the owner of an
          exclusive right that is allegedly infringed.
        </li>
        <li>
          Sufficient contact information, including a valid email address, to
          allow us to reach you.
        </li>
        <li>
          Identification in sufficient detail of the copyrighted work claimed to
          have been infringed, including at least one search term under which
          the material appears in {siteUrl}.com search results.
        </li>
        <li>
          A statement that the complaining party has a good faith belief that
          the use of the material in the manner complained of is not authorized
          by the copyright owner, its agent, or the law.
        </li>
        <li>
          A statement that the information in the notification is accurate, and
          under penalty of perjury, that the complaining party is authorized to
          act on behalf of the owner of an exclusive right that is allegedly
          infringed. This statement must be signed by the authorized person
          acting on behalf of the owner.
        </li>
      </ol>
      <strong>Important Notice:</strong>
      {siteUrl}.com only contains download links from third-party sites by
      individual users that are freely available on the internet. We are not
      affiliated with these third-party sites and are not responsible for their
      content. All content is copyrighted by their respective owners. While we
      strive to share content for educational purposes and ensure it is
      virus-free/malware-free, users are advised to use them at their own risk.
      We do not guarantee the content on {siteUrl}.com, and we are not
      responsible for any loss. If content has been added mistakenly that
      belongs to you or your organization, we sincerely apologize. Please
      contact us at {siteEmail} with your Name, Organization
      Name, Contact Details, Copyright Infringing URL, and Copyright Proof (URL
      or Legal Document). We assure you that we will promptly remove the
      infringing content within 48 hours.
    </div>
  );
};

export default Home;
