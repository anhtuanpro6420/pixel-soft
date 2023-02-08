import Image from "next/image";
import styles from "./Footer.module.scss";

const FooterContainer = () => {
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
          <p className={styles["text-heading"]}>Newsletter</p>
          <div className={`${styles["email-container"]} relative`}>
            <div
              className={`${styles["email-input-container"]} border-white mb-2 box-border flex border-x-0 border-b border-t-0 border-solid pb-3.5`}
            >
              <input
                type="text"
                placeholder="Email address"
                className={`text-white text-white flex-auto border-none bg-transparent text-base outline-none ${styles["input"]}`}
              />
              <button
                disabled
                className={`text-xs font-semibold bg-white ml-2 box-border cursor-pointer appearance-none rounded-3xl border-none py-1 px-4`}
              >
                Send
              </button>
            </div>
            <a href="#" className={`text-white mb-1 block text-base font-medium no-underline`}>
              Sign up to our newsletter to receive the latest updates on our platform
            </a>
          </div>
        </div>
        <div
          className={`${styles["join-us-container"]} box-border flex w-full flex-col justify-start p-2 sm:w-2/4 md:w-1/5`}
        >
          <p className={styles["text-heading"]}>Join us</p>
          <nav>
            <ul className={"m-0 list-none p-0"}>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles["text-list-item"]}
                >
                  Partner with us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles["text-list-item"]}
                >
                  Work with us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles["text-list-item"]}
                >
                  Licensing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles["text-list-item"]}
                >
                  Invest
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className={`${styles["help-container"]} box-border flex w-full flex-col justify-start p-2 sm:w-2/4 md:w-1/5`}
        >
          <p className={styles["text-heading"]}>Help</p>
          <nav>
            <ul className={"m-0 list-none p-0"}>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles["text-list-item"]}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles["text-list-item"]}
                >
                  Media kit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles["text-list-item"]}
                >
                  APIs
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className={`${styles["legal-container"]} box-border flex w-full flex-col justify-start p-2 sm:w-2/4 md:w-1/5`}
        >
          <p className={styles["text-heading"]}>Legal</p>
          <nav>
            <ul className={"m-0 list-none p-0"}>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles["text-list-item"]}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles["text-list-item"]}
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr className={`${styles["divider"]} border-t-none mx-0 mb-5 w-full`} />
      <div
        className={`${styles["social-container"]} relative mb-2 box-border flex w-full items-start justify-between`}
      >
        <div className={`${styles["copyright-container"]} box-border flex flex-wrap items-center`}>
          <a
            href="#"
            className={`${styles["logo-link"]} text-white font-semibold box-border flex items-center`}
          >
            <div className="font-semibold box-border">
              Foodetective
              <br />
              <div className="box-border font-medium">For Business</div>
            </div>
          </a>
          <div
            className={`${styles["languages-container"]} relative z-10 ml-8 box-border flex w-auto cursor-pointer items-center justify-between rounded-md border-none outline-none`}
          >
            <div className="invisible box-border w-px p-px">
              <a href="https://business.foodetective.co/en">https://business.foodetective.co/en</a>
              <a href="https://business.foodetective.co/fr">https://business.foodetective.co/fr</a>
              <a href="https://business.foodetective.co/de">https://business.foodetective.co/de</a>
              <a href="https://business.foodetective.co/it">https://business.foodetective.co/it</a>
              <a href="https://business.foodetective.co/es">https://business.foodetective.co/es</a>
            </div>
            <div
              className={`${styles["languages-select-box"]} box-border flex w-full items-center justify-between text-sm`}
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="box-border block align-middle"
              >
                <g clipPath="url(#clip0_319_1412)">
                  <ellipse
                    cx="10.9967"
                    cy="10.0002"
                    rx="2.29167"
                    ry="6.04167"
                    stroke="white"
                    strokeWidth="1.25"
                  ></ellipse>
                  <path
                    d="M4.95508 10.0002H17.0384"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <circle
                    cx="10.9967"
                    cy="10.0002"
                    r="6.04167"
                    stroke="white"
                    strokeWidth="1.25"
                  ></circle>
                </g>
                <defs>
                  <clipPath id="clip0_319_1412">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.99707 0.000244141)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              English
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M0.99707 1.00024L3.99707 4.00024L6.99707 1.00024"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="ml-8 box-border cursor-pointer text-sm">Copyright notice</div>
        </div>
        <ul
          className={`${styles["social-links-container"]} t-0 absolute m-0 box-border flex list-none flex-nowrap items-center p-0`}
        >
          <li className={`${styles["link-item"]} box-border`}>
            <a
              href="https://www.facebook.com/business.foodetective/"
              target="_blank"
              rel="noreferrer noopener"
              className="social-link"
            >
              <Image src="/images/fb.svg" alt="Picture of the author" width={24} height={24} />
            </a>
          </li>
          <li className={`${styles["link-item"]} box-border`}>
            <a
              href="https://www.linkedin.com/company/13981713/"
              target="_blank"
              rel="noreferrer noopener"
              className="social-link"
            >
              <Image src="/images/in.svg" alt="Picture of the author" width={24} height={24} />
            </a>
          </li>
          <li className={`${styles["link-item"]} box-border`}>
            <a
              href="https://twitter.com/FoodetectivePro"
              target="_blank"
              rel="noreferrer noopener"
              className="social-link"
            >
              <Image src="/images/tw.svg" alt="Picture of the author" width={24} height={24} />
            </a>
          </li>
          <li className={`${styles["link-item"]} box-border`}>
            <a
              href="https://www.instagram.com/business.foodetective.co/"
              target="_blank"
              rel="noreferrer noopener"
              className="social-link"
            >
              <Image src="/images/ig.svg" alt="Picture of the author" width={24} height={24} />
            </a>
          </li>
          <li className={`${styles["link-item"]} box-border`}>
            <a
              href="https://www.youtube.com/channel/UC2MnDoNtpuh5CTbhEtOOGbA/featured"
              target="_blank"
              rel="noreferrer noopener"
              className="social-link"
            >
              <Image src="/images/yt.svg" alt="Picture of the author" width={24} height={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterContainer;
