const Home = async () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.slice(8);
  return (
    <div
      id="contentPost"
      className="w-full md:w-1/2 lg:w-6/12 p-4 mt-4 bg-white my-4 font-sans"
    >
      <h1 className="text-2xl font-semibold border-b leading-9 p-0 mb-2">DNPA – {siteUrl}</h1>
      <p>
        <b>{siteUrl}</b> is a news-oriented website that covers news from
        all over the world, the world, sports, automobile, Technology,
        entertainment, education and lifestyle website in India adheres to the
        DNPA Code Of Ethics. The Code Of Ethics enables to maintenance a
        standard across digital media, along with safeguarding the independence
        of the individual entity creating content as per the set framework and
        guidelines.
      </p>
      <p>
        The Digital News Publishers Association has voluntarily drawn up a Code
        of Ethics for its members as outlined below, which demonstrates their
        commitment to responsible digital publishing — even as it, to protect
        our 19 (1) (a) and other Constitutionally mandated freedoms, keeps under
        review and scrutinizes any developments likely to restrict the gathering
        and dissemination of news and current affairs or any other content. The
        object of this Code is to outline high standards, ethics and practices
        in digital news publishing and does not constitute any attempt to
        involve itself in the day-to-day operations of the publishers — who have
        complete editorial and content independence. The basic precepts of the
        Code of Ethics are to maintain the standards of digital publishing as
        well as protect and maintain the independence of journalists, content
        entities, and publishers.
      </p>
      <p>
        Digital news websites follow the laws of the land including the
        Constitution of India, the over 30 laws relating to the media, relevant
        provisions of IPC, CrPC as well as the Information Technology Act, 2000,
        where applicable.
      </p>
      <p>
        They also diligently adhere to accepted norms of journalistic ethics and
        practices and maintain the highest standards of professional conduct.
        There are several layers of these self-regulatory ethics and codes –
        including as outlined by specific entities as well as rigorous processes
        in newsrooms at the level of journalists and editors.
      </p>
      <p>
        3. Accuracy, Transparency &amp; Fairness Members should eschew
        publication of inaccurate, baseless or distorted material.
        Pre-publication verification should be mandatory. Defamation should be
        avoided. Adherence to applicable laws and rules is necessary.
      </p>
      <p>
        <strong>
          Right of reply
          <br />
        </strong>
        <br />
        a. News reports and articles should incorporate comments or version of
        person or party in respect of whom allegations are carried. If not
        carried, the person or party’s response, if received later, to be
        incorporated.
        <br />
        <br />
        b. If there are developments in the news, and the concerned person or
        party requests an update, the same must be carried appropriately. Date
        of update should also appear in the news item published.
      </p>
      <p>
        <strong>
          Take down, delete or edit
          <br />
        </strong>
        <br />
        If news report or article is found to contain false or inaccurate
        information, then on approach by the concerned person or party,
        providing correct information, identifying himself or herself, providing
        required documents or material, the portion of the news report or
        article should be edited or deleted.
        <br />
        If entire news report is found to contain false, inaccurate information,
        the entire article should be deleted.
      </p>
      <p>
        <strong>
          Respect Intellectual Property Rights
          <br />
        </strong>
        a. Copyright in text, photographs, plans, diagrams, cartoons, etc must
        be respected. If copyrighted material is used, then prior permission
        should be taken and publication must acknowledge moral and ownership
        rights.
        <br />
        <br />
        b. If permission requires payment of fee or royalty, the same must be
        paid.
        <br />
        <br />
        c. Trade Marks and Service Marks of third parties not to be used except
        with prior permission or if such use constitutes fair use.
        <br />
        <br />
        d. In case infringement of intellectual property – upon receiving any
        request and after getting the necessary documents, the concerned content
        should be edited, deleted or take down if necessary.
      </p>
      <p>
        Care to be taken for reporting sensational matters and crime.
        Presumption of innocence must be preserved. Comments and speculation on
        evidence, witness and witness conduct, accused and victim and their
        respective conduct to be avoided. Such reporting should be based on
        facts and unbiased.
      </p>
      <p>
        Special care to be taken while reporting on sexual harassment in the
        workplace, child abuse, rape, where accused or victims are minors,
        matrimonial, riots and communal disputes/clashes, divorce and custody
        cases, adoption matters, etc.
        <br />
        Care to be taken, to follow Sections 67, 67A, and 67B of the Information
        Technology Act, 2000 where applicable — which provide for penalties for
        publishing or transmitting obscene material, sexually explicit material,
        and also material depicting children in sexually explicit acts, in
        electronic form.
      </p>
      <p>
        <strong>
          Grievance Redressal Mechanism
          <br />
        </strong>
        Members –when intermediaries as defined under the Information Technology
        Act, 2000— follow the grievance redressal mechanism as outlined therein
        and are cognizant of the liabilities and safe harbor protections under
        Section 79 of the IT Act 2000. Hence, as relevant, they follow the
        Information Technology (Intermediary Guidelines) Rules, 2011 including
        appointing a grievance officer whose contact details are displayed on
        the website and who acts within 36 hours of receipt of the complaint by
        an affected person and redresses the complaint within one month from its
        receipt.
      </p>
      <p>
        <strong>Training and Awareness Programs</strong>
      </p>
      <p>
        <strong>
          <br />
        </strong>
        Conduct periodic training and awareness programs with editorial staff
        about existing laws including Constitution of India, the over 30 laws
        relating to the media like The Indecent Representation of Women
        (Prohibition) Act, Copyright Act, Right to Information Act, relevant
        provisions of Indian Penal Code and CrPC, civil and criminal defamation,
        IPR, Juvenile justice, POCSO, relevant provisions relating to reporting
        on rape and molestation, harassment in the workplace, caste or
        gender-related crime, domestic violence, etc.
        <br />
        <br />
        Names of victims and details leading to the identification of victims or
        perpetrators, if juvenile or in the workplace, are to be strictly
        avoided.
        <br />
        <br />
        Photographs of victims, their residences, workplaces, etc to be avoided.
        <br />
        <br />
        Special care and caution must be exercised at all times while reporting
        matters related to communal or religious disputes/clashes. Such news
        items shall be published only after proper verification of facts and
        should be presented with due caution and restraint, ensuring an
        environment that is conducive to promoting communal harmony, amity, and
        peace.
        <br />
        <br />
        Special care in reporting on Courts and judicial matters. Create
        awareness among editorial staff about legislative privileges and correct
        reporting of Court hearings, judicial matters, etc. To ensure that
        versions of the victim and accused are covered, without comments
        thereon.
        <br />
        <br />
        Respect for privacy especially persons not in public life.
      </p>
    </div>
  );
};

export default Home;
