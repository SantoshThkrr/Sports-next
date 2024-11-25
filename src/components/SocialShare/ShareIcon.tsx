'use client'

import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  InstagramIcon,
} from "next-share";

interface ShareIconProps {
  id: string;
  slug: string;
  title: string;
}
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

const ShareIcon: React.FC<ShareIconProps> = ({ id, slug, title }) => (
  <>
    <div className="shareBox d-flex">
      <ul className="shareOptions flex">
        <li className="px-2">
          <FacebookShareButton
            url={`{}/${slug}`}
            quote={title}
          >
            <FacebookIcon size={24} round={true} />
          </FacebookShareButton>
        </li>
        <li className="px-2">
          <TwitterShareButton
            title={title}
            url={`${siteUrl}/${slug}`}
          >
            <TwitterIcon size={24} round={true} />
          </TwitterShareButton>
        </li>
        <li className="px-2">
          <WhatsappShareButton
            title={title}
            url={`${siteUrl}/${slug}`}
          >
            <WhatsappIcon size={24} round={true} />
          </WhatsappShareButton>
        </li>
        <li className="px-2">
          <TelegramShareButton
            title={title}
            url={`${siteUrl}/${slug}`}
          >
            <TelegramIcon size={24} round={true} />
          </TelegramShareButton>
        </li>
      </ul>
    </div>
  </>
);

export default ShareIcon;
