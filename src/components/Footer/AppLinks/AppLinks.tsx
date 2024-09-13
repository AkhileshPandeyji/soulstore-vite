import { PropsWithChildren } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

import styles from "./AppLinks.module.scss";

interface AppLinksProps extends PropsWithChildren {
  titleText: string;
  titleIcon: string;
  platformImgs: Array<{
    src: string;
    platform?: string;
    link: string;
  }>;
}

const AppLinks: React.FC<AppLinksProps> = (props: AppLinksProps) => {

  const { titleText, titleIcon = "", platformImgs = [] } = props;

  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        {titleIcon && <img className={styles.TitleIcon} src={titleIcon} alt="mobile" />}
        {!titleIcon && <FontAwesomeIcon icon={faMobileScreen} beatFade className={styles.TitleIcon} />}
        <div className={styles.Title}>{titleText}</div>
      </div>
      <div className={styles.Body}>
        {
          platformImgs.map((pImg) => (
            <a href={pImg.link} key={pImg.platform}>
              <img className={styles.PlatformImg} src={pImg.src} alt="app-download" />
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default AppLinks;