const Home = async () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.slice(8);
  const siteEmail = process.env.NEXT_PUBLIC_SITE_EMAIL
  return (
    <div
      id="contentPost"
      className="w-full md:w-1/2 lg:w-6/12 p-4 mt-4 bg-white my-4 font-sans"
    >
      <h1 className="text-2xl font-semibold border-b leading-9 p-0 mb-2">Disclaimer – {siteUrl}</h1>
      Welcome to {siteUrl}! By using this website, you agree to comply with and be bound by the following disclaimer. If you disagree with any part of this disclaimer, please do not use our website.

    <strong>1. Content Accuracy:</strong>
    
    The information provided on {siteUrl}.com is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
    
    <strong>2. User Responsibility:</strong>
    
    Any reliance you place on the information on {siteUrl} is strictly at your own risk. You acknowledge that it is your responsibility to evaluate the accuracy and completeness of all information provided on the website.
    
    <strong>3. External Links:</strong>
    
    Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
    
    <strong>4. Changes to the Website:</strong>
    
    We may make changes to the content on {siteUrl} at any time without notice. However, we do not make any commitment to update the information.
    
    <strong>5. Limitation of Liability:</strong>
    
    In no event will we be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of {siteUrl}.com.
    By using {siteUrl}.com, you agree to this disclaimer in its entirety. If you do not agree to abide by the terms of this disclaimer, please do not use our website.
    
    This Disclaimer is governed by the laws of the Federal government of the United States By using the site/service, you hereby irrevocably consent to the exclusive jurisdiction and venue of courts in Washington DC, United States of America, in all disputes arising out of or relating to the use of the site/service. The use of the site/service is unauthorized in any jurisdiction that does not give effect to all provisions of these terms and conditions, including without limitation this paragraph.
    
    You agree to indemnify and hold the Company, its subsidiaries, affiliates, officers, and employees harmless from any claim, demand, or damage, including reasonable attorneys’ fees, asserted by any third party due to or arising out of your use of or conduct on the site/service.
    
    The Company reserves the right to disclose any personal information about you or your use of the site/service, including its contents, without your prior permission if the Company has a good faith and belief that such action is necessary to:
    
    Conform to legal requirements or comply with legal process;Protect and defend the rights or property of the site/service or its affiliated companies; Enforce the terms of use; or Act to protect the interests of its members or others.
    
    The performance of this disclaimer is subject to existing laws and legal processes. Nothing contained in this disclaimer is in derogation of the Company’s right to comply with governmental, court, and law enforcement requests or requirements relating to your use of the site/service or information provided to or gathered by the Company concerning such use.
    
    If any part of this disclaimer is determined to be invalid or unenforceable under applicable law, including but not limited to the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision, and the remainder of the agreement shall continue in effect.
    
    Unless otherwise specified herein, this disclaimer constitutes the entire content between the user and the site/service concerning the site/service and supersedes all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between the user and the site/service.
    
    This disclaimer was last updated on 10/05/2024.
    </div>
  );
};

export default Home;
