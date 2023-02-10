import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import EarthIcon from "@Components/EarthIcon";
import BottomArrowIcon from "@Components/BottomArrowIcon";

const FooterContainer = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const JOIN_US_LIST = useMemo(
    () => ["Partner with us", "Work with us", "Licensing", "Invest"],
    []
  );
  const HELP_LIST = useMemo(() => ["Blog", "Media kit", "APIs"], []);
  const LEGAL_LIST = useMemo(() => ["Privacy Policy", "Terms & Conditions"], []);
  const MENU = useMemo(
    () => [
      {
        textHeading: "Join us",
        listItem: JOIN_US_LIST,
      },
      {
        textHeading: "Help",
        listItem: HELP_LIST,
      },
      {
        textHeading: "Legal",
        listItem: LEGAL_LIST,
      },
    ],
    [JOIN_US_LIST, HELP_LIST, LEGAL_LIST]
  );
  const SOCIAL_ICONS = [
    {
      url: "https://www.facebook.com/business.foodetective/",
      icon: "/images/fb.svg",
    },
    {
      url: "https://www.linkedin.com/company/13981713/",
      icon: "/images/in.svg",
    },
    {
      url: "https://twitter.com/FoodetectivePro",
      icon: "/images/tw.svg",
    },
    {
      url: "https://www.instagram.com/business.foodetective.co/",
      icon: "/images/ig.svg",
    },
    {
      url: "https://www.youtube.com/channel/UC2MnDoNtpuh5CTbhEtOOGbA/featured",
      icon: "/images/yt.svg",
    },
  ];

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setIsDisabled(!emailValue);
  };

  const renderTextHeading = useCallback((text: string) => {
    return <p className={styles["text-heading"]}>{text}</p>;
  }, []);

  const renderMenuLink = useCallback((text: string) => {
    return (
      <li key={text} className={styles["text-list-item"]}>
        <Link href="#" target="_blank" rel="noreferrer noopener">
          {text}
        </Link>
      </li>
    );
  }, []);

  const renderMenu = useCallback(() => {
    return MENU.map((item) => (
      <div
        key={item.textHeading}
        className={`box-border flex w-full flex-col justify-start p-2 sm:w-2/4 md:w-1/5`}
      >
        {renderTextHeading(item.textHeading)}
        <nav>
          <ul className={"m-0 list-none p-0"}>
            {item.listItem.map((item) => renderMenuLink(item))}
          </ul>
        </nav>
      </div>
    ));
  }, [MENU, renderMenuLink, renderTextHeading]);

  const renderLogo = useCallback(() => {
    return (
      <Link
        href="#"
        className={`${styles["logo-link"]} text-white font-semibold box-border flex items-center`}
      >
        <div className="box-border">
          <span className="font-bold">Foodetective</span>
          <br />
          <div className="box-border">For Business</div>
        </div>
      </Link>
    );
  }, []);

  const renderSocialIcon = useCallback(({ url, icon }: { url: string; icon: string }) => {
    return (
      <li className={`${styles["link-item"]} box-border`}>
        <Link href={url} target="_blank" rel="noreferrer noopener">
          <Image src={icon} alt="Picture of the author" width={24} height={24} />
        </Link>
      </li>
    );
  }, []);

  return (
    <div
      className={`text-white m-auto box-border flex w-full max-w-6xl flex-col items-start pb-5 pl-4	pr-4 ${styles["footer"]}`}
    >
      <div
        className={`${styles["footer-menu-container"]} box-border flex w-full flex-1 flex-wrap justify-start self-center`}
      >
        <div
          className={`${styles["newsletter-container"]} box-border flex w-full flex-col justify-start p-2 sm:w-2/4 md:w-2/5`}
        >
          {renderTextHeading("Newsletter")}
          <div className={`${styles["email-container"]} relative`}>
            <div
              className={`${styles["email-input-container"]} border-white mb-2 box-border flex border-x-0 border-b border-t-0 border-solid pb-3.5`}
            >
              <input
                type="text"
                placeholder="Email address"
                className={`text-white text-white flex-auto border-none bg-transparent text-base outline-none ${styles["input"]}`}
                onChange={handleEmailChange}
              />
              <button
                disabled={isDisabled}
                className={`text-xs font-semibold bg-white ml-2 box-border cursor-pointer appearance-none rounded-3xl border-none py-1 px-4`}
              >
                Send
              </button>
            </div>
            <Link href="#" className={`text-white mb-1 block text-base font-medium no-underline`}>
              Sign up to our newsletter to receive the latest updates on our platform
            </Link>
          </div>
        </div>
        {renderMenu()}
      </div>
      <hr className={`${styles["divider"]} border-t-none mx-0 mb-5 w-full`} />
      <div
        className={`${styles["social-container"]} relative mb-2 box-border flex w-full items-start justify-between`}
      >
        <div className={`${styles["copyright-container"]} box-border flex flex-wrap items-center`}>
          {renderLogo()}
          <div
            className={`${styles["languages-container"]} relative z-10 ml-8 box-border flex w-auto cursor-pointer items-center justify-between rounded-md border-none outline-none`}
          >
            <div
              className={`${styles["languages-select-box"]} box-border flex w-full items-center justify-between text-sm`}
            >
              <EarthIcon />
              English
              <BottomArrowIcon />
            </div>
          </div>
          <div className="ml-8 box-border cursor-pointer text-sm">Copyright notice</div>
        </div>
        <ul
          className={`${styles["social-links-container"]} t-0 absolute m-0 box-border flex list-none flex-nowrap items-center p-0`}
        >
          {SOCIAL_ICONS.map((item) => renderSocialIcon(item))}
        </ul>
      </div>
    </div>
  );
};

export default FooterContainer;
